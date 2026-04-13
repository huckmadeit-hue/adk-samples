import type { Metadata } from 'next';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { SpecBadge } from '@/components/ui/SpecBadge';
import { BlackBoxSection } from '@/components/fleet/BlackBoxSection';
import { StandardsList } from '@/components/fleet/StandardsList';
import { GlowButton } from '@/components/ui/GlowButton';

export const metadata: Metadata = {
  title: 'The Fleet — Hardware Specs',
  description:
    '2023/2024 Tesla Model Y Long Range in Sleeper Black. HW4 AI architecture, Bouncie GPS, dual dashcam. Every node in the OBSDN network.',
  alternates: { canonical: 'https://obsdn.ev/fleet' },
};

const fullSpecs = [
  { category: 'Powertrain', items: [
    { label: 'Configuration', value: 'Dual Motor AWD' },
    { label: 'Range', value: '330 mi (EPA est.)' },
    { label: 'Peak Power', value: '384 hp' },
    { label: '0–60 mph', value: '4.8 seconds' },
    { label: 'Top Speed', value: '135 mph (limited to 85)' },
  ]},
  { category: 'Technology', items: [
    { label: 'Autopilot Hardware', value: 'HW3 / HW4 (AI-enabled)' },
    { label: 'Cameras', value: '8 exterior surround' },
    { label: 'Ultrasonic Sensors', value: '12 (HW3) / Optical (HW4)' },
    { label: 'Infotainment', value: '15.4" center display' },
    { label: 'OTA Updates', value: 'Continuous' },
  ]},
  { category: 'Dimensions', items: [
    { label: 'Seating', value: '5 passengers' },
    { label: 'Cargo', value: '68 cu ft (seats folded)' },
    { label: 'Wheelbase', value: '113.8 in' },
    { label: 'Ground Clearance', value: '6.6 in' },
  ]},
  { category: 'Telematics', items: [
    { label: 'GPS Unit', value: 'Bouncie Pro' },
    { label: 'GPS Refresh', value: '15-second intervals' },
    { label: 'Dashcam', value: 'Dual-channel HD' },
    { label: 'Footage Retention', value: '72 hours' },
    { label: 'Speed Limiter', value: '85 MPH enforced' },
  ]},
];

export default function FleetPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        {/* Page hero */}
        <section className="relative bg-obsidian py-24 lg:py-32 border-b border-[#3A3A3C] overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-ambient-gradient opacity-50 pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-4">
            <p className="font-mono text-xs tracking-[0.3em] text-cobalt uppercase">OBSDN Fleet</p>
            <h1 className="font-syncopate font-bold text-4xl lg:text-6xl text-neural-white leading-none">
              THE HARDWARE
            </h1>
            <p className="text-neural-muted text-lg max-w-xl leading-relaxed">
              2023/2024 Model Y Long Range — Deployed in Sleeper Black.
              Every unit is pre-vetted, continuously monitored, and maintained to OBSDN standards.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <SpecBadge variant="cobalt">HW4 AI Architecture</SpecBadge>
              <SpecBadge variant="cobalt">Sleeper Black</SpecBadge>
              <SpecBadge>2023/2024 Model Year</SpecBadge>
              <SpecBadge>Long Range AWD</SpecBadge>
            </div>
          </div>
        </section>

        {/* Specs + Black Box */}
        <section className="bg-obsidian-surface py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Full specs */}
              <div className="flex flex-col gap-10">
                {fullSpecs.map(({ category, items }) => (
                  <div key={category}>
                    <p className="font-mono text-xs tracking-[0.3em] text-cobalt uppercase mb-4">{category}</p>
                    <div className="border border-[#3A3A3C] rounded-sm overflow-hidden">
                      {items.map(({ label, value }, i) => (
                        <div
                          key={label}
                          className={`flex justify-between px-5 py-3 font-mono text-sm ${
                            i % 2 === 0 ? 'bg-obsidian-elevated' : 'bg-obsidian'
                          }`}
                        >
                          <span className="text-neural-dim">{label}</span>
                          <span className="text-neural-white">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Black box */}
              <div className="flex flex-col gap-8">
                <BlackBoxSection />

                {/* Vehicle image placeholder */}
                <div className="aspect-[4/3] bg-obsidian-elevated border border-[#3A3A3C] rounded-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-mono text-xs text-neural-dim tracking-widest">HW4 CAMERA ARRAY</div>
                    <div className="w-24 h-px bg-[#3A3A3C] mx-auto mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Standards */}
        <section id="standards" className="bg-obsidian py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs tracking-[0.3em] text-cobalt uppercase">Non-Negotiable</p>
              <h2 className="font-syncopate font-bold text-3xl lg:text-4xl text-neural-white">
                SYSTEM STANDARDS
              </h2>
              <p className="text-neural-muted max-w-xl">
                OBSDN hardware represents a significant capital investment. These standards
                protect the asset, the operator, and every passenger.
              </p>
            </div>
            <StandardsList />
            <div className="pt-4">
              <GlowButton href="/operate" size="lg">APPLY FOR A NODE</GlowButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
