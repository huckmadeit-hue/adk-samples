import { cn } from '@/lib/utils';

/**
 * SkeletonPulse — Component #26
 * Shimmer animation from void-700 → void-800
 * Used for loading states in TypeformEmbed, dashboard cards, etc.
 */
interface SkeletonPulseProps {
  className?: string;
  height?: string;
  width?: string;
}

export function SkeletonPulse({ className, height = '20px', width = '100%' }: SkeletonPulseProps) {
  return (
    <div
      className={cn(
        'rounded-md overflow-hidden relative',
        'bg-void-800',
        className
      )}
      style={{ height, width }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 bg-shimmer bg-[length:400%_100%] animate-shimmer"
        style={{ backgroundSize: '400% 100%' }}
      />
    </div>
  );
}

export function SkeletonCard({ lines = 3 }: { lines?: number }) {
  return (
    <div className="bg-void-800 border border-void-600 rounded-lg p-6 flex flex-col gap-3" aria-hidden="true">
      <SkeletonPulse height="20px" width="60%" />
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonPulse key={i} height="14px" width={i === lines - 1 ? '80%' : '100%'} />
      ))}
    </div>
  );
}
