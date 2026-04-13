'use client';
import { cn } from '@/lib/utils';

/**
 * RatingSelector — Component #18
 * Segmented control: 3 options as radio group (a11y: fieldset + legend)
 * Selected: cobalt-500 bg, signal-white text
 * Unselected: void-800 bg, signal-white/60 text
 * Container border: void-600, radius-md
 */

type RatingBucket = '485plus' | '450to484' | 'below450' | null;

const OPTIONS = [
  { id: '485plus'   as const, label: '4.85 – 5.00', sub: 'Meets minimum', eligible: true  },
  { id: '450to484'  as const, label: '4.50 – 4.84', sub: 'Below minimum',  eligible: false },
  { id: 'below450'  as const, label: 'Below 4.50',  sub: 'Below minimum',  eligible: false },
];

interface RatingSelectorProps {
  selected: RatingBucket;
  onSelect: (v: RatingBucket) => void;
}

export function RatingSelector({ selected, onSelect }: RatingSelectorProps) {
  return (
    <fieldset>
      <legend className="font-body text-xs font-medium tracking-label text-signal-white/40 uppercase mb-3">
        Select your current Uber driver rating
      </legend>

      {/* Segmented container */}
      <div
        className="border border-void-600 rounded-md overflow-hidden"
        role="radiogroup"
        aria-label="Rating range"
      >
        {OPTIONS.map((opt, i) => (
          <label
            key={opt.id}
            className={cn(
              'flex items-center justify-between px-5 py-4 cursor-pointer transition-colors duration-fast',
              i < OPTIONS.length - 1 && 'border-b border-void-600',
              selected === opt.id
                ? opt.eligible
                  ? 'bg-cobalt-500 text-signal-white'
                  : 'bg-error-bg text-error border-error/30'
                : 'bg-void-800 text-signal-white/60 hover:bg-void-700'
            )}
          >
            <input
              type="radio"
              name="uber_rating_bucket"
              value={opt.id}
              checked={selected === opt.id}
              onChange={() => onSelect(opt.id)}
              className="sr-only"
              aria-label={`${opt.label} — ${opt.sub}`}
            />
            <div>
              <p className="font-mono text-mono-base font-medium">{opt.label}</p>
              <p className="font-mono text-xs text-signal-white/40 mt-0.5">{opt.sub}</p>
            </div>
            {selected === opt.id && (
              opt.eligible ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 8l4.5 4.5L14 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-error">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            )}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
