import { cn } from '@/lib/utils';

interface SectionDividerProps {
  label?: string;
  className?: string;
}

export function SectionDivider({ label, className }: SectionDividerProps) {
  if (!label) {
    return <hr className={cn('border-t border-[#3A3A3C]', className)} />;
  }
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <hr className="flex-1 border-t border-[#3A3A3C]" />
      <span className="font-mono text-xs text-neural-dim tracking-widest uppercase">{label}</span>
      <hr className="flex-1 border-t border-[#3A3A3C]" />
    </div>
  );
}
