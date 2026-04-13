import type { Metadata } from 'next';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { StatBlock } from '@/components/ui/StatBlock';
import { MultiStepForm } from '@/components/operate/MultiStepForm';
import { SectionDivider } from '@/components/layout/SectionDivider';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Become an Operator',
  description:
    'Apply to join the OBSDN Network. Requirements: 4.85+ Uber rating, 1,500+ lifetime trips. Deploy a Tesla Model Y in Raleigh’s highest-paying tiers.',
  alternates: { canonical: 'https://obsdn.ev/operate' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What Uber rating do I need to join OBSDN?',
      acceptedAnswer: { '@type': 'Answer', text: 'A minimum 4.85 Uber rating is required.' },
    },
    {
      '@type': 'Question',
      name: 'What is the weekly rate to operate an OBSDN vehicle?',
      acceptedAnswer: { '@type': 'Answer', text: '$425/week base, plus supercharging costs.' },
    },
    {
      '@type': 'Question',
      name: 'How many lifetime trips are required?',
      acceptedAnswer: { '@type': 'Answer', text: '1,500 lifetime Uber trips minimum.' },
    },
    {
      '@type': 'Question',
      name: 'Is a security deposit required?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, a $500 refundable security deposit is due before vehicle deployment.',
      },
    },
  ],
};

export default function OperatePage() {
  return (
    <>
      <NavBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main id="main-content" tabIndex={-1} className="pt-16">
        {/* PageHero — Component #34 */}
        <section
          className="relative bg-void-950 py-24 lg:py-32 border-b border-void-600 overflow-hidden"
          aria-labelledby="operate-heading"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 80%, rgba(45,91,255,0.10) 0%, transparent 70%)' }}
          />
          <div className="relative z-10 max-w-container-lg mx-auto px-6 lg:px-8 flex flex-col gap-4">
            <p className="font-mono text-xs tracking-caps text-cobalt-500 uppercase">Operator Recruitment</p>
            <h1
              id="operate-heading"
              className="font-display font-bold text-3xl text-signal-white leading-none"
            >
              APPLY TO
              <br />
              THE NETWORK
            </h1>
            <p className="font-body text-md text-signal-white/60 max-w-lg leading-relaxed">
              We are selective by design. Every operator in the OBSDN network
              represents the infrastructure. Standards are non-negotiable.
            </p>
          </div>
        </section>

        {/* Requirements — 4x StatBlock row */}
        <section id="requirements" className="bg-void-800 py-20 border-b border-void-600">
          <div className="max-w-container-lg mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <ScrollReveal>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4">
                {[
                  { value: '4.85', label: 'Min Rating',    sub: 'Uber driver score' },
                  { value: '1,500', label: 'Min Trips',    sub: 'Lifetime total' },
                  { value: '$500',  label: 'Deposit',      sub: 'Refundable' },
                  { value: '$425',  label: 'Per Week',     sub: 'Base lease rate' },
                ].map((stat, i) => (
                  <div key={stat.label} className={`flex items-center ${
                    i < 3 ? 'sm:border-r sm:border-void-600 sm:pr-4' : ''
                  }`}>
                    <StatBlock {...stat} className="flex-1" />
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <SectionDivider />

            <ScrollReveal delay={0.1}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-display text-xs tracking-widest text-signal-white uppercase mb-3">THE DEAL</p>
                  <p className="font-body text-base text-signal-white/60 leading-relaxed">
                    OBSDN provides the asset. You provide the labor and compliance. The weekly
                    rate of <strong className="text-signal-white">$425</strong> covers vehicle
                    access, maintenance coordination, and platform support. Supercharging is billed
                    at cost on your weekly invoice.
                  </p>
                </div>
                <div>
                  <p className="font-display text-xs tracking-widest text-signal-white uppercase mb-3">THE STANDARD</p>
                  <p className="font-body text-base text-signal-white/60 leading-relaxed">
                    A 4.85 rating isn&apos;t arbitrary — it&apos;s the threshold where passenger
                    satisfaction becomes consistent. Our vehicles operate in premium surge zones.
                    Every operator reflects directly on the OBSDN brand.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Application form */}
        <section id="apply" className="bg-void-950 py-24 lg:py-32">
          <div className="max-w-container-lg mx-auto px-6 lg:px-8 flex flex-col items-center gap-10">
            <ScrollReveal className="text-center flex flex-col gap-3 max-w-lg">
              <p className="font-mono text-xs tracking-caps text-cobalt-500 uppercase">Vetting Form</p>
              <h2 className="font-display font-bold text-2xl text-signal-white leading-none">
                NODE APPLICATION
              </h2>
              <p className="font-body text-sm text-signal-white/60">
                Four steps. Under 3 minutes. We read every submission.
              </p>
            </ScrollReveal>
            <MultiStepForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
