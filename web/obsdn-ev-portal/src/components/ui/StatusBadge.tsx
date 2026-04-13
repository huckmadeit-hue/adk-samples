import { cn } from '@/lib/utils';

/**
 * StatusBadge — Component #31
 * Pill shape (radius-full), Inter 600, 12px (xs), ALL CAPS, semantic colors
 */
type BadgeStatus = 'active' | 'pending' | 'overdue' | 'waitlist' | 'rejected' | 'success';

const STATUS: Record<BadgeStatus, { label: string; cls: string }> = {
  active:   { label: 'ACTIVE',   cls: 'bg-success-bg text-success border-success/30' },
  success:  { label: 'CONFIRMED', cls: 'bg-success-bg text-success border-success/30' },
  pending:  { label: 'PENDING',  cls: 'bg-warning-bg text-warning border-warning/30' },
  overdue:  { label: 'OVERDUE',  cls: 'bg-error-bg text-error border-error/30' },
  rejected: { label: 'REJECTED', cls: 'bg-error-bg text-error border-error/30' },
  waitlist: { label: 'WAITLIST', cls: 'bg-void-700 text-cobalt-400 border-cobalt-500/30' },
};

export function StatusBadge({ status }: { status: BadgeStatus }) {
  const { label, cls } = STATUS[status];
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full font-body text-xs font-semibold tracking-wide border',
        cls
      )}
    >
      {label}
    </span>
  );
}
