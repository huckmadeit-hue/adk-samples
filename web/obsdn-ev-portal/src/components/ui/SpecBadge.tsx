import { cn } from '@/lib/utils';

/**
 * SpecBadge — Component #06
 * Default: void-700 bg, void-600 border, cobalt-400 text, mono-sm, radius-sm, 4px 8px padding
 * highlight variant adds a cobalt-tinted background for HW version / key specs
 */
interface SpecBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'highlight';
  className?: string;
}

export function SpecBadge({ children, variant = 'default', className }: SpecBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-1 rounded-sm font-mono text-mono-sm border',
        variant === 'highlight'
          ? 'bg-cobalt-500/15 border-cobalt-500/40 text-cobalt-400'
          : 'bg-void-700 border-void-600 text-cobalt-400',
        className
      )}
    >
      {children}
    </span>
  );
}
