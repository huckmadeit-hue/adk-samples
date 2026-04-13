import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[#3A3A3C] bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-mono text-sm text-cobalt tracking-widest">@obsdn.ev</span>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/contact" className="text-neural-muted hover:text-neural-white transition-colors">Contact</Link>
          <Link href="/privacy" className="text-neural-muted hover:text-neural-white transition-colors">Privacy Policy</Link>
        </nav>
        <p className="font-mono text-xs text-neural-dim">
          &copy; {new Date().getFullYear()} OBSDN EV Network. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
