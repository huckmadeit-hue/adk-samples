import { cn } from '@/lib/utils';

type Status = 'active' | 'pending' | 'overdue' | 'waitlist' | 'rejected';

const STATUS_MAP: Record<Status, { label: string; className: string }> = {
  active:    { label: 'ACTIVE',    className: 'bg-cobalt/20 border-cobalt/50 text-cobalt' },
  pending:   { label: 'PENDING',   className: 'bg-amber-500/20 border-amber-500/50 text-amber-400' },
  overdue:   { label: 'OVERDUE',   className: 'bg-red-500/20 border-red-500/50 text-red-400' },
  waitlist:  { label: 'WAITLIST',  className: 'bg-cobalt/20 border-cobalt/50 text-cobalt' },
  rejected:  { label: 'REJECTED',  className: 'bg-red-500/20 border-red-500/50 text-red-400' },
};

export function StatusBadge({ status }: { status: Status }) {
  const { label, className } = STATUS_MAP[status];
  return (
    <span className={cn('inline-flex items-center px-3 py-1 rounded-sm font-mono text-xs tracking-widest border', className)}>
      {label}
    </span>
  );
}
