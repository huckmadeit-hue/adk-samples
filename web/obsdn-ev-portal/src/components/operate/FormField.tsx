import { cn } from '@/lib/utils';

/**
 * FormField — Component #22
 * Label: Inter 500, 13px (sm), signal-white/40, ALL CAPS, tracking-label
 * Input slot: H=48px, void-800 bg, void-600 border, radius-md
 * Helper: void-300 default / error red below
 */
interface FormFieldProps {
  label: string;
  error?: string;
  helper?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
  htmlFor?: string;
}

export function FormField({
  label,
  error,
  helper,
  children,
  className,
  required,
  htmlFor,
}: FormFieldProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label
        htmlFor={htmlFor}
        className="font-body text-xs font-medium tracking-label text-signal-white/40 uppercase"
      >
        {label}{required && <span className="text-cobalt-400 ml-1" aria-hidden="true">*</span>}
      </label>
      {children}
      {helper && !error && (
        <p className="font-mono text-xs text-void-300">{helper}</p>
      )}
      {error && (
        <p className="font-mono text-xs text-error" role="alert" aria-live="assertive">{error}</p>
      )}
    </div>
  );
}
