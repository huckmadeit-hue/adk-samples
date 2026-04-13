import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsed.error.flatten() },
        { status: 422 }
      );
    }

    const { name, email, subject, message } = parsed.data;
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL ?? 'no-reply@obsdn.ev';

    if (apiKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to: 'hello@obsdn.ev',
          reply_to: email,
          subject: `[OBSDN Contact] ${subject}`,
          html: `
            <div style="font-family:monospace;padding:32px;background:#0A0A0B;color:#F2F2F7">
              <p style="color:#2D5BFF;font-size:11px;letter-spacing:3px">OBSDN CONTACT FORM</p>
              <h2 style="margin:16px 0 8px">${subject}</h2>
              <p style="color:rgba(242,242,247,0.6)">From: ${name} &lt;${email}&gt;</p>
              <hr style="border-color:#3A3A3C;margin:16px 0">
              <p style="line-height:1.7;color:rgba(242,242,247,0.8)">${message.replace(/\n/g, '<br>')}</p>
            </div>
          `,
        }),
      });
    } else {
      console.warn('[contact] Resend not configured — message not delivered:', { name, email, subject });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
