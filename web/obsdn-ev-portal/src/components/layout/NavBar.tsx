'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GlowButton } from '@/components/ui/GlowButton';

export function NavBar() {
  const pathname = usePathname();
  const isMinimal = pathname === '/waitlist-confirmed' || pathname === '/rejected';
  if (isMinimal) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#3A3A3C]/60 backdrop-blur-md bg-[#0A0A0B]/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-syncopate font-bold text-lg tracking-widest text-neural-white hover:text-cobalt transition-colors">
          OBSDN
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/fleet" className="text-neural-muted hover:text-neural-white transition-colors tracking-wide">FLEET</Link>
          <Link href="/operate" className="text-neural-muted hover:text-neural-white transition-colors tracking-wide">OPERATE</Link>
          <Link href="/contact" className="text-neural-muted hover:text-neural-white transition-colors tracking-wide">CONTACT</Link>
        </nav>
        <GlowButton href="/operate" size="sm">APPLY FOR A NODE</GlowButton>
      </div>
    </header>
  );
}
