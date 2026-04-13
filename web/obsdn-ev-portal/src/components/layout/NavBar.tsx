'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowButton } from '@/components/ui/GlowButton';

const NAV_LINKS = [
  { href: '/fleet',   label: 'FLEET' },
  { href: '/operate', label: 'OPERATE' },
  { href: '/contact', label: 'CONTACT' },
];

const MINIMAL_ROUTES = ['/waitlist-confirmed', '/rejected'];

export function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  // Close on Escape — NavBar #03 keyboard spec
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (MINIMAL_ROUTES.some(r => pathname.startsWith(r))) return null;

  return (
    <>
      {/* Main nav bar — 64px height, fixed, backdrop-blur */}
      <header
        className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-void-600/50 backdrop-blur-[20px] bg-void-950/85"
        role="banner"
      >
        <div className="max-w-container-lg mx-auto px-6 h-full flex items-center justify-between">
          {/* BrandMark — small variant, 80px */}
          <Link
            href="/"
            className="font-display font-bold text-lg tracking-widest text-signal-white hover:text-cobalt-400 transition-colors duration-fast"
            aria-label="OBSDN EV Network — Home"
          >
            OBSDN
          </Link>

          {/* Desktop nav links */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-body text-sm font-medium tracking-wide text-signal-white/60 hover:text-signal-white transition-colors duration-fast"
                aria-current={pathname.startsWith(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <GlowButton href="/operate" size="sm">APPLY FOR A NODE</GlowButton>
          </div>

          {/* Mobile hamburger — animated 3-lines → X */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <motion.span
              className="block w-5 h-px bg-signal-white origin-center"
              animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.span
              className="block w-5 h-px bg-signal-white"
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.span
              className="block w-5 h-px bg-signal-white origin-center"
              animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            />
          </button>
        </div>
      </header>

      {/* Mobile slide-down drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
            className="fixed top-16 left-0 right-0 z-40 bg-void-950 border-b border-void-600 md:hidden"
          >
            <nav
              className="px-6 py-8 flex flex-col gap-6"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-display text-base tracking-widest text-signal-white/60 hover:text-signal-white transition-colors duration-fast"
                  aria-current={pathname.startsWith(href) ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-2 border-t border-void-600">
                <GlowButton
                  href="/operate"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  APPLY FOR A NODE
                </GlowButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay scrim behind drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-void-950/60 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
