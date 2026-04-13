import { cn } from '@/lib/utils';

type RatingBucket = '485plus' | '450to484' | 'below450' | null;

const OPTIONS = [
  { id: '485plus' as const, label: '4.85 – 5.00', sub: 'Meets OBSDN minimum', eligible: true },
  { id: '450to484' as const, label: '4.50 – 4.84', sub: 'Below minimum', eligible: false },
  { id: 'below450' as const, label: 'Below 4.50', sub: 'Below minimum', eligible: false },
];

interface RatingSelectorProps {
  selected: RatingBucket;
  onSelect: (v: RatingBucket) => void;
}

export function RatingSelector({ selected, onSelect }: RatingSelectorProps) {
  return (
    <div className="flex flex-col gap-3" role="radiogroup" aria-label="Uber rating range">
      {OPTIONS.map((opt) => (
        <button
          key={opt.id}
          type="button"
          role="radio"
          aria-checked={selected === opt.id}
          onClick={() => onSelect(opt.id)}
          className={cn(
            'flex items-center justify-between p-4 rounded-sm border text-left transition-all duration-200',
            selected === opt.id && opt.eligible
              ? 'bg-cobalt/15 border-cobalt text-neural-white'
              : selected === opt.id && !opt.eligible
              ? 'bg-red-500/10 border-red-500/50 text-neural-white'
              : 'bg-obsidian-elevated border-[#3A3A3C] text-neural-muted hover:border-[#5A5A5C]'
          )}
        >
          <div>
            <p className="font-mono text-sm font-medium">{opt.label}</p>
            <p className="font-mono text-xs text-neural-dim mt-0.5">{opt.sub}</p>
          </div>
          {opt.eligible ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-cobalt flex-shrink-0">
              <path d="M2 8l4.5 4.5L14 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-red-400 flex-shrink-0">
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      ))}
    </div>
  );
}
