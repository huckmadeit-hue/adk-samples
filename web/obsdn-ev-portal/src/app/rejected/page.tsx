import type { Metadata } from 'next';
import { GhostButton } from '@/components/ui/GhostButton';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Keep Building',
  robots: { index: false, follow: false },
};

export default function RejectedPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-obsidian flex flex-col items-center justify-center px-6 py-32 pt-32">
        <div className="relative z-10 flex flex-col items-center gap-8 max-w-lg w-full text-center">
          <div className="w-14 h-14 bg-obsidian-elevated border border-[#3A3A3C] rounded-sm flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-neural-muted">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs tracking-[0.3em] text-cobalt uppercase">Not Yet</p>
            <h1 className="font-syncopate font-bold text-3xl lg:text-4xl text-neural-white">
              KEEP BUILDING
              <br />
              YOUR RECORD
            </h1>
            <p className="text-neural-muted leading-relaxed">
              OBSDN maintains a strict 4.85 minimum rating to protect our operators,
              passengers, and the integrity of the fleet. This isn&apos;t a rejection —
              it&apos;s a standard worth meeting.
            </p>
          </div>

          <div className="w-full bg-obsidian-elevated border border-[#3A3A3C] rounded-sm p-6 text-left flex flex-col gap-5">
            <p className="font-mono text-xs text-cobalt tracking-widest">PATH TO 4.85</p>
            <ul className="flex flex-col gap-4 text-sm text-neural-muted">
              {[
                ['Greet every passenger', 'A simple greeting at pickup is the single highest-impact rating driver.'],
                ['Confirm the destination aloud', 'Passengers rate higher when they feel heard immediately.'],
                ['Offer amenity preferences', 'Music, temperature, silence — asking signals professionalism.'],
                ['Keep the vehicle immaculate', 'A clean car communicates respect. It\'s rated before the ride ends.'],
                ['Contact support for unfair ratings', 'Uber\'s support team will remove demonstrably unfair ratings.'],
              ].map(([title, desc]) => (
                <li key={title} className="flex flex-col gap-0.5">
                  <span className="text-neural-white text-xs font-syncopate tracking-wider">{title}</span>
                  <span className="text-neural-dim text-xs leading-relaxed">{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="font-mono text-xs text-neural-dim">
              Standards may be updated. Check back when you reach 4.85.
            </p>
            <GhostButton href="/operate">RECHECK REQUIREMENTS</GhostButton>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
