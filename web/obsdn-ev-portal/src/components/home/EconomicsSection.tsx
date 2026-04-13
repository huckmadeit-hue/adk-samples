import { GlowButton } from '@/components/ui/GlowButton';

const rows = [
  { tier: 'Weekly Platform Rent', obsdn: '$425 flat', uberx: 'Variable (higher)' },
  { tier: 'Target Weekly Gross', obsdn: '$1,800–$2,400', uberx: '$1,100–$1,600' },
  { tier: 'Surge Zone Access', obsdn: 'Full Triangle', uberx: 'Market-rate' },
  { tier: 'Vehicle Ownership', obsdn: 'None required', uberx: 'Your asset, your risk' },
  { tier: 'Maintenance Burden', obsdn: 'Covered by OBSDN', uberx: 'Operator pays all' },
  { tier: 'Minimum Rating', obsdn: '4.85+', uberx: '4.70+' },
  { tier: 'Insurance Class', obsdn: 'Commercial (P2)', uberx: 'Rideshare add-on' },
];

export function EconomicsSection() {
  return (
    <section id="economics" className="bg-obsidian py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-4 max-w-xl">
          <p className="font-mono text-xs tracking-[0.3em] text-cobalt uppercase">Operator Economics</p>
          <h2 className="font-syncopate font-bold text-3xl lg:text-4xl text-neural-white leading-tight">
            WHY OPERATORS
            <br />
            CHOOSE OBSDN
          </h2>
          <p className="text-neural-muted leading-relaxed">
            The Triangle’s premium tier earns more. Our operators consistently outperform
            standard UberX in net weekly take-home.
          </p>
        </div>

        {/* Data table */}
        <div className="overflow-x-auto rounded-sm border border-[#3A3A3C]">
          <table className="w-full font-mono text-sm">
            <thead>
              <tr className="bg-obsidian-elevated border-b border-[#3A3A3C]">
                <th className="text-left px-6 py-4 text-xs tracking-widest text-neural-dim uppercase font-medium">Tier</th>
                <th className="text-left px-6 py-4 text-xs tracking-widest text-cobalt uppercase font-medium">OBSDN Rate</th>
                <th className="text-left px-6 py-4 text-xs tracking-widest text-neural-dim uppercase font-medium">UberX Rate</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.tier}
                  className={`border-b border-[#3A3A3C]/50 hover:bg-obsidian-elevated/50 transition-colors ${
                    i === rows.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  <td className="px-6 py-4 text-neural-muted">{row.tier}</td>
                  <td className="px-6 py-4 text-neural-white font-medium">{row.obsdn}</td>
                  <td className="px-6 py-4 text-neural-dim">{row.uberx}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="font-mono text-xs text-neural-dim">
          * All figures based on Triangle market averages. Individual results vary.
        </p>

        <div className="flex justify-center">
          <GlowButton href="/operate" size="lg">APPLY FOR A NODE</GlowButton>
        </div>
      </div>
    </section>
  );
}
