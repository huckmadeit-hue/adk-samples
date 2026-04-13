'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * ScrollReveal — scroll-triggered entry animation
 * opacity: 0 + translateY: 24px → opacity: 1 + translateY: 0
 * Respects prefers-reduced-motion via CSS (@media reduce sets duration 0.01ms)
 */
interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article';
}

export function ScrollReveal({ children, delay = 0, className, as = 'div' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' });

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: [0, 0, 0.2, 1],
        delay,
      }}
    >
      {children}
    </MotionTag>
  );
}
