const STANDARDS = [
  { title: 'No Smoking Policy', desc: 'Strictly enforced. First violation results in immediate suspension and forfeit of deposit.' },
  { title: '85 MPH Limiter', desc: 'All vehicles are software-limited to 85 MPH via Tesla fleet settings.' },
  { title: 'Meticulous Detailing', desc: 'Interior and exterior must meet OBSDN standards before each weekly check-in.' },
  { title: 'Weekly Inspection', desc: 'In-person or photo-documented inspection required every 7 days.' },
  { title: 'Commercial Charging Only', desc: 'Home charging or Tesla Supercharger only — no third-party DC fast chargers.' },
  { title: 'No Unauthorized Passengers', desc: 'Platform-dispatched rides only. No personal use without prior approval.' },
];

export function StandardsList() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {STANDARDS.map(({ title, desc }) => (
        <div key={title} className="flex gap-4">
          <div className="mt-1 flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-cobalt">
              <path d="M2 8l4.5 4.5L14 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-syncopate text-xs tracking-widest text-neural-white uppercase">{title}</span>
            <span className="text-sm text-neural-muted leading-relaxed">{desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
