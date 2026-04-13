'use client';
import { GlowButton } from '@/components/ui/GlowButton';
import { GhostButton } from '@/components/ui/GhostButton';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-obsidian"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-ambient-gradient pointer-events-none"
      />
      {/* Noise texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl mx-auto">
        <p className="font-mono text-xs tracking-[0.4em] text-cobalt uppercase">
          Raleigh–Durham–Chapel Hill
        </p>

        <h1 className="font-syncopate font-bold text-4xl sm:text-6xl lg:text-[80px] xl:text-[96px] leading-none tracking-tight text-neural-white">
          THE NEURAL
          <br />
          INFRASTRUCTURE
          <br />
          OF THE TRIANGLE
        </h1>

        <p className="font-inter text-lg sm:text-xl text-neural-muted max-w-xl leading-relaxed">
          We provide the hardware. You operate the system.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <GlowButton href="/operate" size="lg">
            APPLY FOR A NODE
          </GlowButton>
          <GhostButton href="/fleet" size="lg">
            VIEW THE FLEET
          </GhostButton>
        </div>

        <div className="flex items-center gap-8 mt-8 font-mono text-xs text-neural-dim">
          <span>4.85+ RATING REQ.</span>
          <span className="w-px h-3 bg-[#3A3A3C]" />
          <span>1,500+ TRIPS</span>
          <span className="w-px h-3 bg-[#3A3A3C]" />
          <span>HW4 FLEET</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs text-neural-dim tracking-widest">SCROLL</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-neural-dim">
          <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
