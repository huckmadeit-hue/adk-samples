import { cn } from '@/lib/utils';

interface SpecBadgeProps {
  children: React.ReactNode;
  variant?: 'cobalt' | 'neural' | 'amber';
  className?: string;
}

export function SpecBadge({ children, variant = 'neural', className }: SpecBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-sm font-mono text-xs tracking-wider border',
        {
          'bg-cobalt/15 border-cobalt/40 text-cobalt': variant === 'cobalt',
          'bg-[#2C2C2E] border-[#3A3A3C] text-neural-muted': variant === 'neural',
          'bg-amber-500/15 border-amber-500/40 text-amber-400': variant === 'amber',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
