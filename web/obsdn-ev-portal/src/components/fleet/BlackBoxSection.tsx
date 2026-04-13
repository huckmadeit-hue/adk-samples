import { SpecBadge } from '@/components/ui/SpecBadge';

/**
 * BlackBoxSection — Component #13
 * void-800 bg, cobalt-500/40 border, radius-xl, space-12 padding
 * Left 4px cobalt accent bar
 */
export function BlackBoxSection() {
  return (
    <div className="relative bg-void-800 border border-cobalt-500/40 rounded-xl overflow-hidden p-8 lg:p-12 flex flex-col gap-6">
      {/* Left cobalt accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-cobalt-500" aria-hidden="true" />

      <div className="flex items-center gap-3 pl-2">
        <div className="w-2 h-2 rounded-full bg-cobalt-500 animate-pulse" aria-hidden="true" />
        <p className="font-mono text-xs tracking-caps text-cobalt-500 uppercase">Bouncie System</p>
      </div>

      <h3 className="font-display font-bold text-2xl text-signal-white leading-none pl-2">
        BLACK BOX
        <br />
        GUARANTEE
      </h3>

      <p className="font-body text-base text-signal-white/60 leading-relaxed pl-2">
        Every OBSDN vehicle is equipped with Bouncie GPS telemetry and a dual-channel
        dashcam. Real-time location tracking, speed logging, and incident footage are
        retained for 72 hours. Operators may request clips via the portal.
      </p>

      <div className="grid grid-cols-2 gap-4 pl-2">
        {[
          { label: 'GPS Refresh',       value: '15-sec intervals' },
          { label: 'Dashcam',           value: 'Dual-channel HD' },
          { label: 'Speed Logging',     value: 'Continuous' },
          { label: 'Footage Retention', value: '72 hours' },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-1">
            <span className="font-mono text-xs text-signal-white/40 tracking-wider uppercase">{label}</span>
            <span className="font-mono text-mono-base text-signal-white">{value}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 pl-2">
        <SpecBadge variant="highlight">Bouncie GPS</SpecBadge>
        <SpecBadge>Dual Dashcam</SpecBadge>
        <SpecBadge>85 MPH Limiter</SpecBadge>
      </div>
    </div>
  );
}
