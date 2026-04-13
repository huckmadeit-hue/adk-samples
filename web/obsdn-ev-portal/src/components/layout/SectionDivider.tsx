import { cn } from '@/lib/utils';

/**
 * SectionDivider — Component #10
 * 1px border-void-600 hairline
 * Optional label chip: void-800 bg, void-600 border, Inter 500 13px signal-white/40
 */
interface SectionDividerProps {
  label?: string;
  className?: string;
}

export function SectionDivider({ label, className }: SectionDividerProps) {
  if (!label) {
    return <hr className={cn('border-t border-void-600', className)} />;
  }
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <hr className="flex-1 border-t border-void-600" />
      <span className="bg-void-800 border border-void-600 rounded-sm px-3 py-1 font-body text-sm font-medium text-signal-white/40 tracking-wide uppercase whitespace-nowrap">
        {label}
      </span>
      <hr className="flex-1 border-t border-void-600" />
    </div>
  );
}
