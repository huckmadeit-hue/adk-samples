/**
 * StandardsList — Component #15
 * List items 48px height, border-bottom void-600, cobalt-400 checkmark icon
 * Text: Inter 400, 15px (base), signal-white/80
 */

const STANDARDS = [
  {
    title: 'No Smoking Policy',
    desc: 'Strictly enforced. First violation results in immediate suspension and deposit forfeiture.',
  },
  {
    title: '85 MPH Speed Limiter',
    desc: 'All vehicles are software-limited to 85 MPH via Tesla fleet management settings.',
  },
  {
    title: 'Meticulous Detailing',
    desc: 'Interior and exterior must meet OBSDN standards before each weekly check-in.',
  },
  {
    title: 'Weekly Inspection',
    desc: 'In-person or photo-documented inspection required every 7 days without exception.',
  },
  {
    title: 'Authorized Charging Only',
    desc: 'Home Level 2 or Tesla Supercharger only — no third-party DC fast chargers.',
  },
  {
    title: 'Platform Dispatch Only',
    desc: 'Platform-dispatched rides exclusively. Personal use requires prior written approval.',
  },
];

export function StandardsList() {
  return (
    <ul
      className="divide-y divide-void-600"
      aria-label="OBSDN system standards"
    >
      {STANDARDS.map(({ title, desc }) => (
        <li
          key={title}
          className="flex items-start gap-4 py-5 first:pt-0 last:pb-0"
        >
          {/* Cobalt-400 checkmark */}
          <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M2 8l4.5 4.5L14 3.5"
                stroke="#5277FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-body text-base font-medium text-signal-white/80">
              {title}
            </span>
            <span className="font-body text-sm text-signal-white/40 leading-relaxed">
              {desc}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
