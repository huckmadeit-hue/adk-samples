import { cn } from '@/lib/utils';

interface FormFieldProps {
  label: string;
  error?: string;
  helper?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({ label, error, helper, children, className }: FormFieldProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label className="font-mono text-xs tracking-wider text-neural-muted uppercase">{label}</label>
      {children}
      {helper && !error && <p className="font-mono text-xs text-neural-dim">{helper}</p>}
      {error && <p className="font-mono text-xs text-red-400">{error}</p>}
    </div>
  );
}
