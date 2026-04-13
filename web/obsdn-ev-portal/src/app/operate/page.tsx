import type { Metadata } from 'next';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { StatBlock } from '@/components/ui/StatBlock';
import { MultiStepForm } from '@/components/operate/MultiStepForm';
import { SectionDivider } from '@/components/layout/SectionDivider';

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
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, a $500 refundable security deposit is due before vehicle deployment.' },
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
      <main className="pt-16">
        {/* Page hero */}
        <section className="relative bg-obsidian py-24 lg:py-32 border-b border-[#3A3A3C] overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-ambient-gradient opacity-60 pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-4">
            <p className="font-mono text-xs tracking-[0.3em] text-cobalt uppercase">Operator Recruitment</p>
            <h1 className="font-syncopate font-bold text-4xl lg:text-6xl text-neural-white leading-none">
              APPLY TO
              <br />
              THE NETWORK
            </h1>
            <p className="text-neural-muted text-lg max-w-lg leading-relaxed">
              We are selective by design. Every operator in the OBSDN network represents
              the infrastructure. Standards are non-negotiable.
            </p>
          </div>
        </section>

        {/* Requirements */}
        <section id="requirements" className="bg-obsidian-surface py-20 border-b border-[#3A3A3C]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <StatBlock value="4.85" label="Min Rating" sub="Uber driver score" />
              <StatBlock value="1,500" label="Min Trips" sub="Lifetime total" />
              <StatBlock value="$500" label="Deposit" sub="Refundable" />
              <StatBlock value="$425" label="Per Week" sub="Base lease rate" />
            </div>

            <SectionDivider />

            <div className="grid md:grid-cols-2 gap-8 text-sm text-neural-muted leading-relaxed">
              <div>
                <p className="font-syncopate text-xs tracking-widest text-neural-white mb-3">THE DEAL</p>
                <p>
                  OBSDN provides the asset. You provide the labor and compliance. The weekly
                  rate of <strong className="text-neural-white">$425</strong> covers vehicle access,
                  maintenance coordination, and platform support. Supercharging is
                  billed at cost on your weekly invoice.
                </p>
              </div>
              <div>
                <p className="font-syncopate text-xs tracking-widest text-neural-white mb-3">THE STANDARD</p>
                <p>
                  A 4.85 rating isn&apos;t arbitrary — it&apos;s the threshold where passenger
                  satisfaction becomes consistent. Our vehicles operate in premium surge zones.
                  Every operator reflects directly on the OBSDN brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application form */}
        <section id="apply" className="bg-obsidian py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-10">
            <div className="text-center flex flex-col gap-3 max-w-lg">
              <p className="font-mono text-xs tracking-[0.3em] text-cobalt uppercase">Vetting Form</p>
              <h2 className="font-syncopate font-bold text-2xl lg:text-3xl text-neural-white">
                NODE APPLICATION
              </h2>
              <p className="text-neural-muted text-sm">
                Four steps. Takes under 3 minutes. We read every submission.
              </p>
            </div>
            <MultiStepForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
