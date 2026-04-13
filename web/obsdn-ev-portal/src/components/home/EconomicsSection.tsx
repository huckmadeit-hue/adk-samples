import { GlowButton } from '@/components/ui/GlowButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

/**
 * EconomicsSection — Component #07 (EconomicsTable)
 * void-800 bg, void-600 border, radius-lg, overflow hidden
 * Header: void-700 bg, Inter 600 13px, signal-white/40, ALL CAPS
 * Rows: alternate void-800/void-900, JetBrains Mono 15px
 * Highlight row: left border 3px cobalt-500, cobalt-500/5 bg
 */

const rows = [
  { tier: 'Weekly Platform Rent',  obsdn: '$425 flat',       uberx: 'Variable (higher)',    highlight: false },
  { tier: 'Target Weekly Gross',   obsdn: '$1,800–$2,400',   uberx: '$1,100–$1,600',        highlight: true  },
  { tier: 'Surge Zone Access',     obsdn: 'Full Triangle',   uberx: 'Market-rate',          highlight: false },
  { tier: 'Vehicle Ownership',     obsdn: 'None required',   uberx: 'Your asset, your risk', highlight: false },
  { tier: 'Maintenance Burden',    obsdn: 'Covered by OBSDN', uberx: 'Operator pays all',   highlight: false },
  { tier: 'Minimum Rating',        obsdn: '4.85+',           uberx: '4.70+',                highlight: false },
  { tier: 'Insurance Class',       obsdn: 'Commercial (P2)', uberx: 'Rideshare add-on',     highlight: false },
];

export function EconomicsSection() {
  return (
    <section id="economics" className="bg-void-950 py-24 lg:py-32">
      <div className="max-w-container-lg mx-auto px-6 lg:px-8 flex flex-col gap-12">
        <ScrollReveal>
          <div className="flex flex-col gap-4 max-w-xl">
            <p className="font-mono text-xs tracking-caps text-cobalt-500 uppercase">
              Operator Economics
            </p>
            <h2 className="font-display font-bold text-2xl text-signal-white leading-none">
              WHY OPERATORS
              <br />
              CHOOSE OBSDN
            </h2>
            <p className="font-body text-base text-signal-white/60 leading-relaxed">
              The Triangle’s premium tier earns more. Our operators consistently
              outperform standard UberX in net weekly take-home.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          {/* EconomicsTable — horizontal scroll on mobile */}
          <div className="overflow-x-auto">
            <div className="min-w-[480px]">
              <div className="rounded-lg border border-void-600 overflow-hidden">
                {/* Header row */}
                <div className="grid grid-cols-3 bg-void-700 border-b border-void-600">
                  {['Tier', 'OBSDN Rate', 'UberX Rate'].map((col, i) => (
                    <div key={col} className="px-6 py-4">
                      <span
                        className={`font-body text-xs font-semibold tracking-wider uppercase ${
                          i === 1 ? 'text-cobalt-400' : 'text-signal-white/40'
                        }`}
                      >
                        {col}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Data rows */}
                {rows.map((row, i) => (
                  <div
                    key={row.tier}
                    className={`grid grid-cols-3 border-b border-void-600/50 last:border-b-0 ${
                      row.highlight
                        ? 'bg-cobalt-500/5 border-l-[3px] border-l-cobalt-500'
                        : i % 2 === 0
                        ? 'bg-void-800'
                        : 'bg-void-900'
                    }`}
                  >
                    <div className="px-6 py-4">
                      <span className="font-mono text-mono-base text-signal-white/60">{row.tier}</span>
                    </div>
                    <div className="px-6 py-4">
                      <span className="font-mono text-mono-base text-signal-white font-medium">{row.obsdn}</span>
                    </div>
                    <div className="px-6 py-4">
                      <span className="font-mono text-mono-base text-signal-white/40">{row.uberx}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="font-mono text-xs text-signal-white/20 mt-4">
            * All figures based on Triangle market averages. Individual results vary.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex justify-center">
            <GlowButton href="/operate" size="lg">APPLY FOR A NODE</GlowButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
