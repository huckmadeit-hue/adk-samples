import type { Metadata } from 'next';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'OBSDN EV Network privacy policy — how we collect, use, and protect your data.',
  alternates: { canonical: 'https://obsdn.ev/privacy' },
};

const SECTIONS = [
  {
    title: '1. Information We Collect',
    body: 'When you apply to the OBSDN operator program, we collect your name, email address, phone number, Uber driver rating, and trip history. When you contact us, we collect the information you provide in the form. We may also collect standard server-side analytics (page views, referral source) through Vercel Analytics.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'Application data is used solely to evaluate operator eligibility and communicate with you about your application status. Contact form submissions are used to respond to your inquiry. We do not sell, rent, or share your personal information with third parties for marketing purposes.',
  },
  {
    title: '3. Data Storage & Third Parties',
    body: 'Application data is stored in Airtable (Airtable, Inc.) under a Business plan with SOC 2 Type II compliance. Email communications are processed through Resend, Inc. All third-party processors are bound by data processing agreements consistent with applicable privacy law.',
  },
  {
    title: '4. Data Retention',
    body: 'Application data for rejected applicants is retained for 12 months, then deleted. Active operator data is retained for the duration of the operator relationship plus 2 years for financial compliance. You may request deletion of your data at any time by contacting hello@obsdn.ev.',
  },
  {
    title: '5. Cookies & Tracking',
    body: 'We use only first-party analytics. No advertising pixels, no cross-site tracking cookies. Vercel Analytics is privacy-preserving and does not use cookies. If we implement PostHog in the future, it will be configured without identifying cookies.',
  },
  {
    title: '6. Your Rights',
    body: 'You have the right to access, correct, or delete your personal information. North Carolina residents have rights under NC House Bill 846 (effective 2025). To exercise any of these rights, contact hello@obsdn.ev with your request.',
  },
  {
    title: '7. Contact',
    body: 'For privacy inquiries: hello@obsdn.ev. Response within 5 business days.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" tabIndex={-1} className="min-h-[100dvh] bg-void-950 pt-16">
        <section className="py-24 lg:py-32">
          <div className="max-w-container-md mx-auto px-6 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs tracking-caps text-cobalt-500 uppercase">Legal</p>
              <h1 className="font-display font-bold text-3xl text-signal-white leading-none">PRIVACY POLICY</h1>
              <p className="font-mono text-xs text-signal-white/20">Last updated: January 2025</p>
            </div>

            <div className="flex flex-col gap-8 divide-y divide-void-600">
              {SECTIONS.map(({ title, body }) => (
                <div key={title} className="flex flex-col gap-3 pt-8 first:pt-0">
                  <h2 className="font-display text-sm tracking-wider text-signal-white uppercase">
                    {title}
                  </h2>
                  <p className="font-body text-base text-signal-white/60 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
