'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const MotionLink = motion(Link);

interface GhostButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

const SIZE: Record<string, string> = {
  sm: 'h-9 px-4 text-xs min-w-[120px]',
  md: 'h-12 px-5 text-base min-w-[180px]',
  lg: 'h-14 px-8 text-base min-w-[200px]',
};

const BASE =
  'inline-flex items-center justify-center font-body font-semibold tracking-wide uppercase rounded-md ' +
  'bg-transparent text-cobalt-500 border border-cobalt-500 ' +
  'transition-colors duration-fast ease-standard ' +
  'hover:bg-cobalt-500/10 hover:border-cobalt-400 hover:shadow-glow-cobalt-sm ' +
  'active:bg-cobalt-500/20 ' +
  'disabled:opacity-40 disabled:cursor-not-allowed ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt-500 focus-visible:outline-offset-2';

export function GhostButton({
  children,
  href,
  onClick,
  type = 'button',
  size = 'md',
  disabled,
  className,
}: GhostButtonProps) {
  const cls = cn(BASE, SIZE[size], className);
  const tap = disabled ? {} : { scale: 0.98 };

  if (href) {
    return (
      <MotionLink
        href={href}
        className={cls}
        whileTap={tap}
        transition={{ duration: 0.1, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      whileTap={tap}
      transition={{ duration: 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.button>
  );
}
