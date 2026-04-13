import type { Metadata } from 'next';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { SpecBadge } from '@/components/ui/SpecBadge';
import { BlackBoxSection } from '@/components/fleet/BlackBoxSection';
import { StandardsList } from '@/components/fleet/StandardsList';
import { GlowButton } from '@/components/ui/GlowButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'The Fleet — Hardware Specs',
  description:
    '2023/2024 Tesla Model Y Long Range in Sleeper Black. HW4 AI architecture, Bouncie GPS, dual dashcam. Every node in the OBSDN network.',
  alternates: { canonical: 'https://obsdn.ev/fleet' },
};

const SPECS = [
  { category: 'Powertrain', items: [
    { label: 'Configuration', value: 'Dual Motor AWD' },
    { label: 'Range',         value: '330 mi (EPA)' },
    { label: 'Peak Power',    value: '384 hp' },
    { label: '0–60 mph',      value: '4.8 seconds' },
    { label: 'Top Speed',     value: '135 mph (limited 85)' },
  ]},
  { category: 'Technology', items: [
    { label: 'AP Hardware',   value: 'HW3 / HW4 AI' },
    { label: 'Cameras',       value: '8 exterior surround' },
    { label: 'Infotainment',  value: '15.4\" center display' },
    { label: 'OTA Updates',   value: 'Continuous' },
  ]},
  { category: 'Dimensions', items: [
    { label: 'Seating',          value: '5 passengers' },
    { label: 'Cargo (folded)',   value: '68 cu ft' },
    { label: 'Wheelbase',        value: '113.8 in' },
    { label: 'Ground Clearance', value: '6.6 in' },
  ]},
  { category: 'Telematics', items: [
    { label: 'GPS Unit',         value: 'Bouncie Pro' },
    { label: 'GPS Refresh',      value: '15-second intervals' },
    { label: 'Dashcam',          value: 'Dual-channel HD' },
    { label: 'Footage Retention', value: '72 hours' },
    { label: 'Speed Limiter',    value: '85 MPH enforced' },
  ]},
];

export default function FleetPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" tabIndex={-1} className="pt-16">
        {/* PageHero — Component #34: 40-50dvh */}
        <section
          className="relative bg-void-950 py-24 lg:py-32 border-b border-void-600 overflow-hidden"
          aria-labelledby="fleet-heading"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 80%, rgba(45,91,255,0.08) 0%, transparent 70%)' }}
          />
          <div className="relative z-10 max-w-container-lg mx-auto px-6 lg:px-8 flex flex-col gap-4">
            <p className="font-mono text-xs tracking-caps text-cobalt-500 uppercase">OBSDN Fleet</p>
            <h1
              id="fleet-heading"
              className="font-display font-bold text-3xl text-signal-white leading-none"
            >
              THE HARDWARE
            </h1>
            <p className="font-body text-md text-signal-white/60 max-w-xl leading-relaxed">
              2023/2024 Model Y Long Range — Deployed in Sleeper Black.
              Every unit is pre-vetted, continuously monitored, and maintained to OBSDN standards.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <SpecBadge variant="highlight">HW4 AI Architecture</SpecBadge>
              <SpecBadge variant="highlight">Sleeper Black</SpecBadge>
              <SpecBadge>2023/2024 Model Year</SpecBadge>
              <SpecBadge>Long Range AWD</SpecBadge>
            </div>
          </div>
        </section>

        {/* Specs + Black Box */}
        <section className="bg-void-800 py-24 lg:py-32">
          <div className="max-w-container-lg mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollReveal>
                <div className="flex flex-col gap-10">
                  {SPECS.map(({ category, items }) => (
                    <div key={category}>
                      <p className="font-mono text-xs tracking-caps text-cobalt-500 uppercase mb-4">
                        {category}
                      </p>
                      <div className="border border-void-600 rounded-lg overflow-hidden">
                        {items.map(({ label, value }, i) => (
                          <div
                            key={label}
                            className={`flex justify-between items-center px-5 py-3 font-mono text-mono-base border-b border-void-600/50 last:border-b-0 ${
                              i % 2 === 0 ? 'bg-void-700' : 'bg-void-800'
                            }`}
                          >
                            <span className="text-signal-white/40">{label}</span>
                            <span className="text-signal-white">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="flex flex-col gap-8">
                  <BlackBoxSection />
                  <div className="aspect-[4/3] bg-void-700 border border-void-600 rounded-lg flex items-center justify-center">
                    <div className="text-center flex flex-col gap-2">
                      <span className="font-mono text-xs text-signal-white/20 tracking-caps uppercase">HW4 Camera Array</span>
                      <div className="w-24 h-px bg-void-600 mx-auto" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* System Standards */}
        <section id="standards" className="bg-void-950 py-24 lg:py-32">
          <div className="max-w-container-lg mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <ScrollReveal>
              <div className="flex flex-col gap-3">
                <p className="font-mono text-xs tracking-caps text-cobalt-500 uppercase">Non-Negotiable</p>
                <h2 className="font-display font-bold text-2xl text-signal-white leading-none">
                  SYSTEM STANDARDS
                </h2>
                <p className="font-body text-base text-signal-white/60 max-w-xl">
                  OBSDN hardware represents significant capital investment. These standards
                  protect the asset, the operator, and every passenger.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <StandardsList />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <GlowButton href="/operate" size="lg">APPLY FOR A NODE</GlowButton>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
