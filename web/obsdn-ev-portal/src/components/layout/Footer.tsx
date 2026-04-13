import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-void-600 bg-void-950" role="contentinfo">
      <div className="max-w-container-lg mx-auto px-6 py-10">
        {/* Desktop: 3-column | Mobile: stacked center */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <span className="font-mono text-mono-base text-cobalt-500 tracking-brand">
            @obsdn.ev
          </span>

          <nav
            className="flex items-center gap-6"
            aria-label="Footer navigation"
          >
            <Link
              href="/contact"
              className="font-body text-signal-white/60 hover:text-signal-white transition-colors duration-fast"
            >
              Contact
            </Link>
            <span className="w-px h-3 bg-void-600" aria-hidden="true" />
            <Link
              href="/privacy"
              className="font-body text-signal-white/60 hover:text-signal-white transition-colors duration-fast"
            >
              Privacy Policy
            </Link>
          </nav>

          <p className="font-mono text-xs text-signal-white/20">
            &copy; {new Date().getFullYear()} OBSDN EV Network
          </p>
        </div>
      </div>
    </footer>
  );
}
