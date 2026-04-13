import { cn } from '@/lib/utils';

/**
 * StatBlock — Component #09
 * Value: mono-xl (28px), JetBrains Mono 500, cobalt-400
 * Label: Inter 400, 13px (sm), signal-white/40, ALL CAPS, tracking-label
 * Optional sub-label and divider
 */
interface StatBlockProps {
  value: string;
  label: string;
  sub?: string;
  className?: string;
}

export function StatBlock({ value, label, sub, className }: StatBlockProps) {
  return (
    <div className={cn('flex flex-col items-center text-center gap-2', className)}>
      <span className="font-mono text-mono-xl font-medium text-cobalt-400 tabular-nums">
        {value}
      </span>
      <span className="font-body text-sm font-normal text-signal-white/40 tracking-label uppercase">
        {label}
      </span>
      {sub && (
        <span className="font-mono text-xs text-signal-white/20">{sub}</span>
      )}
    </div>
  );
}
