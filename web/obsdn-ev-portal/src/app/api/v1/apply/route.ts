import { NextRequest, NextResponse } from 'next/server';
import { applicationSchema } from '@/lib/validations';
import { generateRefId } from '@/lib/utils';

export const runtime = 'nodejs';

async function submitToAirtable(data: Record<string, unknown>, refId: string) {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME ?? 'Applicants';

  if (!apiKey || !baseId) {
    console.warn('[apply] Airtable env vars not set, skipping CRM write');
    return;
  }

  const fields: Record<string, unknown> = {
    'Ref ID': refId,
    'Full Name': data.full_name,
    'Email': data.email,
    'Phone': data.phone,
    'Uber Rating': data.uber_rating,
    'Lifetime Trips': data.lifetime_trips,
    'Has Parking': data.has_parking,
    'Has Home Charging': data.has_home_charging,
    'Deposit Committed': data.deposit_committed,
    'Status': 'waitlist',
    'Source': data.source ?? 'website',
  };

  const res = await fetch(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Airtable error ${res.status}: ${body}`);
  }
}

async function sendConfirmationEmail(email: string, name: string, refId: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL ?? 'no-reply@obsdn.ev';

  if (!apiKey) {
    console.warn('[apply] Resend API key not set, skipping email');
    return;
  }

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: email,
      subject: `OBSDN Node Application Received — ${refId}`,
      html: `
        <div style="background:#0A0A0B;color:#F2F2F7;font-family:'Courier New',monospace;padding:40px;max-width:560px">
          <p style="color:#2D5BFF;font-size:11px;letter-spacing:4px;margin-bottom:24px">OBSDN EV NETWORK</p>
          <h1 style="font-size:20px;font-weight:bold;margin-bottom:12px">NODE REQUEST RECEIVED</h1>
          <p style="color:rgba(242,242,247,0.6);line-height:1.6;margin-bottom:24px">
            Hi ${name},<br><br>
            Your application to the OBSDN operator program has been received.
            Our team reviews every submission. Expect a call or message within 48 hours.
          </p>
          <div style="background:#1C1C1E;border:1px solid #3A3A3C;padding:16px;margin-bottom:24px">
            <p style="font-size:11px;color:rgba(242,242,247,0.35);letter-spacing:3px;margin-bottom:8px">REFERENCE ID</p>
            <p style="color:#2D5BFF;font-size:14px;letter-spacing:4px">${refId}</p>
          </div>
          <p style="color:rgba(242,242,247,0.35);font-size:11px">OBSDN EV Network &mdash; Raleigh-Durham-Chapel Hill, NC</p>
        </div>
      `,
    }),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = applicationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsed.error.flatten() },
        { status: 422 }
      );
    }

    const data = parsed.data;
    const refId = generateRefId();

    // Fire CRM write + email in parallel, don't block on failure
    await Promise.allSettled([
      submitToAirtable(data as Record<string, unknown>, refId),
      sendConfirmationEmail(data.email, data.full_name, refId),
    ]);

    return NextResponse.json({ success: true, refId }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
