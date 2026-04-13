import type { Metadata } from 'next';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { GhostButton } from '@/components/ui/GhostButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Keep Building',
  robots: { index: false, follow: false },
};

const TIPS = [
  ['Greet every passenger',         'A verbal greeting at pickup is the single highest-impact rating driver.'],
  ['Confirm the destination aloud',  'Passengers rate higher when they feel heard immediately.'],
  ['Offer amenity preferences',      'Music, temperature, silence — asking signals professionalism.'],
  ['Keep the vehicle immaculate',    'A clean car communicates respect. It’s rated before the ride ends.'],
  ['Contest demonstrably unfair ratings', 'Uber’s support team removes ratings that clearly violate policy.'],
] as const;

export default function RejectedPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" tabIndex={-1} className="min-h-[100dvh] bg-void-950 pt-16">
        <section className="py-24 lg:py-32">
          <div className="max-w-container-sm mx-auto px-6 flex flex-col gap-10 text-center">
            <ScrollReveal>
              <div className="w-14 h-14 mx-auto bg-void-800 border border-void-600 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="#48484A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="flex flex-col gap-3">
                <p className="font-mono text-xs tracking-caps text-cobalt-500 uppercase">Not Yet</p>
                <h1 className="font-display font-bold text-3xl text-signal-white leading-none">
                  KEEP BUILDING
                  <br />
                  YOUR RECORD
                </h1>
                <p className="font-body text-base text-signal-white/60 leading-relaxed">
                  OBSDN maintains a strict 4.85 minimum to protect our operators, passengers,
                  and the integrity of the fleet. This isn&apos;t a rejection — it&apos;s a standard worth meeting.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-void-800 border border-void-600 rounded-lg p-6 text-left flex flex-col gap-5">
                <p className="font-mono text-xs text-cobalt-400 tracking-widest uppercase text-center">
                  Path to 4.85
                </p>
                <ul className="flex flex-col gap-4" aria-label="Tips to improve your Uber rating">
                  {TIPS.map(([title, desc]) => (
                    <li key={title} className="flex flex-col gap-0.5">
                      <span className="font-display text-xs tracking-wider text-signal-white uppercase">{title}</span>
                      <span className="font-body text-xs text-signal-white/40 leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex flex-col items-center gap-4">
                <p className="font-mono text-xs text-signal-white/20">
                  Standards may be updated. Check back when you reach 4.85.
                </p>
                <GhostButton href="/operate">RECHECK REQUIREMENTS</GhostButton>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
