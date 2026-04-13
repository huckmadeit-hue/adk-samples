'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export function GlowButton({ children, href, onClick, type = 'button', size = 'md', disabled, className }: GlowButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center font-syncopate font-bold tracking-widest uppercase transition-all duration-300',
    'bg-cobalt text-white border border-cobalt rounded-sm',
    'hover:bg-cobalt-hover hover:shadow-[0_0_30px_rgba(45,91,255,0.6)] active:scale-[0.98]',
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none',
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
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  );
}
