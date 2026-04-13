import { SpecBadge } from '@/components/ui/SpecBadge';
import { GhostButton } from '@/components/ui/GhostButton';

const specs = [
  { label: 'Range', value: '330 mi EPA' },
  { label: 'Motor', value: 'Dual AWD' },
  { label: 'Acceleration', value: '0–60 in 4.8s' },
  { label: 'Autopilot', value: 'Enhanced AP' },
  { label: 'Cameras', value: '8 exterior' },
  { label: 'Seating', value: '5 passengers' },
];

export function HardwareSection() {
  return (
    <section id="hardware" className="bg-obsidian-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content side */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs tracking-[0.3em] text-cobalt uppercase">Hardware First</p>
              <h2 className="font-syncopate font-bold text-3xl lg:text-4xl text-neural-white leading-tight">
                2023/2024 MODEL Y
                <br />
                LONG RANGE
              </h2>
              <p className="text-neural-muted leading-relaxed">
                Every node in the OBSDN network is a fully-equipped Tesla Model Y Long Range.
                Sleeper Black configuration. HW3 or HW4 AI architecture. Not a rental —
                a precision instrument.
              </p>
            </div>

            {/* Badge row */}
            <div className="flex flex-wrap gap-2">
              <SpecBadge variant="cobalt">HW4 AI Architecture</SpecBadge>
              <SpecBadge variant="cobalt">Sleeper Black</SpecBadge>
              <SpecBadge>Comfort Suspension</SpecBadge>
              <SpecBadge>Bouncie GPS</SpecBadge>
              <SpecBadge>Dashcam</SpecBadge>
            </div>

            {/* Specs grid */}
            <div className="grid grid-cols-3 gap-px bg-[#3A3A3C] border border-[#3A3A3C] rounded-sm overflow-hidden">
              {specs.map(({ label, value }) => (
                <div key={label} className="bg-obsidian-elevated p-4 flex flex-col gap-1">
                  <span className="font-mono text-xs text-neural-dim tracking-wider uppercase">{label}</span>
                  <span className="font-mono text-sm text-neural-white">{value}</span>
                </div>
              ))}
            </div>

            <GhostButton href="/fleet">FULL HARDWARE SPECS</GhostButton>
          </div>

          {/* Image side */}
          <div className="relative aspect-[4/3] bg-obsidian-elevated rounded-sm overflow-hidden border border-[#3A3A3C]">
            <div className="absolute inset-0 bg-gradient-to-br from-cobalt/5 to-transparent" />
            {/* Placeholder — replace with Cloudinary vehicle image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-mono text-xs text-neural-dim tracking-widest mb-2">VEHICLE IMAGE</div>
                <div className="w-32 h-px bg-[#3A3A3C] mx-auto" />
                <div className="font-mono text-xs text-neural-dim tracking-widest mt-2">MODEL Y LR — SLEEPER BLACK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
