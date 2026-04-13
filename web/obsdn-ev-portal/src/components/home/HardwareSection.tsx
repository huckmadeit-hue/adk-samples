import { SpecBadge } from '@/components/ui/SpecBadge';
import { GhostButton } from '@/components/ui/GhostButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

/**
 * HardwareSection — Component #05 (HardwareCard)
 * void-800 surface, side-by-side layout on lg+
 * Specs grid: 2-col, JetBrains Mono labels, void-800/void-elevated alternating
 */

const specs = [
  { label: 'Range',       value: '330 mi EPA' },
  { label: 'Motor',       value: 'Dual AWD' },
  { label: 'Peak Power',  value: '384 hp' },
  { label: '0–60 mph',    value: '4.8 sec' },
  { label: 'Cameras',     value: '8 exterior' },
  { label: 'Seating',     value: '5 passengers' },
];

export function HardwareSection() {
  return (
    <section id="hardware" className="bg-void-800 py-24 lg:py-32">
      <div className="max-w-container-lg mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* HardwareCard content — void-800 bg, void-600 border, radius-lg, space-6 padding */}
          <ScrollReveal>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <p className="font-mono text-xs tracking-caps text-cobalt-500 uppercase">
                  Hardware First
                </p>
                <h2 className="font-display font-bold text-2xl text-signal-white leading-none">
                  2023/2024 MODEL Y
                  <br />
                  LONG RANGE
                </h2>
                <p className="font-body text-base text-signal-white/60 leading-relaxed">
                  Every node in the OBSDN network is a fully-equipped Tesla Model Y Long Range.
                  Sleeper Black configuration. HW3 or HW4 AI architecture. Not a rental
                  — a precision instrument.
                </p>
              </div>

              {/* SpecBadge row */}
              <div className="flex flex-wrap gap-2">
                <SpecBadge variant="highlight">HW4 AI Architecture</SpecBadge>
                <SpecBadge variant="highlight">Sleeper Black</SpecBadge>
                <SpecBadge>Comfort Suspension</SpecBadge>
                <SpecBadge>Bouncie GPS</SpecBadge>
                <SpecBadge>Dual Dashcam</SpecBadge>
              </div>

              {/* Specs grid — 2-col, gap-4, alternating void-800/void-700 rows */}
              <div className="border border-void-600 rounded-lg overflow-hidden">
                <div className="grid grid-cols-3">
                  {specs.map(({ label, value }, i) => (
                    <div
                      key={label}
                      className={`flex flex-col gap-1 p-4 ${
                        i % 2 === 0 ? 'bg-void-700' : 'bg-void-800'
                      } border-b border-r border-void-600 last:border-r-0`}
                    >
                      <span className="font-mono text-xs text-signal-white/40 tracking-wider uppercase">
                        {label}
                      </span>
                      <span className="font-mono text-mono-base text-signal-white">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <GhostButton href="/fleet">FULL HARDWARE SPECS</GhostButton>
            </div>
          </ScrollReveal>

          {/* Vehicle image placeholder */}
          <ScrollReveal delay={0.15}>
            <div className="relative aspect-[4/3] bg-void-700 rounded-lg border border-void-600 overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(45,91,255,0.06) 0%, transparent 60%)',
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="font-mono text-xs text-signal-white/20 tracking-caps uppercase">
                  Vehicle Photography
                </span>
                <div className="w-24 h-px bg-void-600" />
                <span className="font-mono text-xs text-signal-white/20 tracking-wider uppercase">
                  Model Y LR — Sleeper Black
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
