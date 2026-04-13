import { SpecBadge } from '@/components/ui/SpecBadge';

export function BlackBoxSection() {
  return (
    <div className="bg-obsidian-elevated border border-[#3A3A3C] rounded-sm p-8 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
        <p className="font-mono text-xs tracking-[0.3em] text-cobalt uppercase">Bouncie System</p>
      </div>

      <h3 className="font-syncopate font-bold text-xl text-neural-white leading-tight">
        BLACK BOX
        <br />
        GUARANTEE
      </h3>

      <p className="text-neural-muted leading-relaxed text-sm">
        Every OBSDN vehicle is equipped with Bouncie GPS telemetry and a dual-channel
        dashcam. Real-time location tracking, speed logging, and incident footage are
        retained for 72 hours. Operators can request clips through the portal.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {[
          { label: 'GPS Refresh', value: '15-second intervals' },
          { label: 'Dashcam', value: 'Dual-channel HD' },
          { label: 'Speed Logging', value: 'Continuous' },
          { label: 'Footage Retention', value: '72 hours' },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-1">
            <span className="font-mono text-xs text-neural-dim tracking-wider">{label}</span>
            <span className="font-mono text-sm text-neural-white">{value}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <SpecBadge variant="cobalt">Bouncie GPS</SpecBadge>
        <SpecBadge>Dual Dashcam</SpecBadge>
        <SpecBadge>Speed Limiter 85 MPH</SpecBadge>
      </div>
    </div>
  );
}
