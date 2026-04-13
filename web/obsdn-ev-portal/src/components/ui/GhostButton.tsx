import Link from 'next/link';
import { cn } from '@/lib/utils';

interface GhostButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function GhostButton({ children, href, onClick, type = 'button', size = 'md', className }: GhostButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center font-syncopate font-bold tracking-widest uppercase transition-all duration-200',
    'bg-transparent text-cobalt border border-cobalt rounded-sm',
    'hover:bg-cobalt/10 hover:shadow-[0_0_20px_rgba(45,91,255,0.3)] active:scale-[0.98]',
    {
      'text-xs px-4 py-2': size === 'sm',
      'text-sm px-6 py-3': size === 'md',
      'text-base px-10 py-4': size === 'lg',
    },
    className
  );
  if (href) {
    return <Link href={href} className={base}>{children}</Link>;
  }
  return <button type={type} onClick={onClick} className={base}>{children}</button>;
}
