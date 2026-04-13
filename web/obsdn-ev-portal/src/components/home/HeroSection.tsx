'use client';
import { motion } from 'framer-motion';
import { GlowButton } from '@/components/ui/GlowButton';
import { GhostButton } from '@/components/ui/GhostButton';

/**
 * HeroSection — Component #04
 * 100dvh; ambient radial glow breathing animation (4s)
 * Staggered entry: badge → headline → sub → CTAs → stat bar
 * Respects prefers-reduced-motion via CSS (duration override)
 */

const CONTAINER = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const ITEM = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-void-950"
      aria-label="OBSDN EV Network — Hero"
    >
      {/* AmbientBackground — Component #28: breathing radial glow */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 20% 90%, rgba(45,91,255,0.08) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* Noise texture overlay — 3% opacity per spec */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content — staggered entry */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 max-w-[960px] mx-auto"
        variants={CONTAINER}
        initial="hidden"
        animate="show"
      >
        {/* Market badge */}
        <motion.p
          variants={ITEM}
          className="font-mono text-xs tracking-caps text-cobalt-500 uppercase"
        >
          Raleigh – Durham – Chapel Hill
        </motion.p>

        {/* Hero headline — text-hero: clamp(56px,8vw,96px) Syncopate */}
        <motion.h1
          variants={ITEM}
          className="font-display font-bold text-hero leading-none tracking-widest text-signal-white uppercase"
        >
          THE NEURAL
          <br />
          INFRASTRUCTURE
          <br />
          OF THE TRIANGLE
        </motion.h1>

        {/* Sub-headline — Inter 400, 17px (md), signal-60 */}
        <motion.p
          variants={ITEM}
          className="font-body text-md text-signal-white/60 max-w-xl leading-relaxed"
        >
          We provide the hardware. You operate the system.
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={ITEM}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <GlowButton href="/operate" size="lg">APPLY FOR A NODE</GlowButton>
          <GhostButton href="/fleet" size="lg">VIEW THE FLEET</GhostButton>
        </motion.div>

        {/* Stat bar */}
        <motion.div
          variants={ITEM}
          className="flex items-center gap-6 mt-4"
          aria-label="Key requirements"
        >
          {[
            '4.85+ RATING',
            '1,500+ TRIPS',
            'HW4 FLEET',
          ].map((stat, i, arr) => (
            <span key={stat} className="flex items-center gap-6">
              <span className="font-mono text-xs text-signal-white/20 tracking-wider">{stat}</span>
              {i < arr.length - 1 && (
                <span className="w-px h-3 bg-void-600" aria-hidden="true" />
              )}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-signal-white/20">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
            <rect x="6.5" y="5" width="3" height="5" rx="1.5" fill="currentColor" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
