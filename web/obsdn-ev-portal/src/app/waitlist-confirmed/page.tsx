import type { Metadata } from 'next';
import Link from 'next/link';
import { GhostButton } from '@/components/ui/GhostButton';

export const metadata: Metadata = {
  title: 'Application Received',
  robots: { index: false, follow: false },
};

export default function WaitlistConfirmedPage({
  searchParams,
}: {
  searchParams: { ref?: string };
}) {
  const refId = searchParams.ref ?? 'OBSDN-PENDING';

  return (
    <main className="min-h-screen bg-obsidian flex flex-col items-center justify-center px-6 py-20">
      {/* Ambient glow */}
      <div aria-hidden className="fixed inset-0 bg-ambient-gradient opacity-40 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-10 max-w-lg w-full text-center">
        {/* Brand mark */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cobalt animate-pulse" />
          <span className="font-syncopate font-bold text-2xl tracking-widest text-neural-white">OBSDN</span>
        </div>

        {/* Confirmation card */}
        <div className="w-full bg-obsidian-elevated border border-[#3A3A3C] rounded-sm p-8 flex flex-col gap-6">
          <div className="w-12 h-12 mx-auto bg-cobalt/15 border border-cobalt/40 rounded-sm flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-cobalt">
              <path d="M3 10l5 5L17 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-syncopate font-bold text-xl text-neural-white">NODE REQUEST RECEIVED</h1>
            <p className="text-neural-muted text-sm leading-relaxed">
              Your application is in the queue. You&apos;ll receive a confirmation email shortly.
              Expect a call or message within <strong className="text-neural-white">48 hours</strong>.
            </p>
          </div>

          <div className="border-t border-[#3A3A3C] pt-5 flex flex-col gap-2">
            <p className="font-mono text-xs text-neural-dim tracking-wider">REFERENCE ID</p>
            <p className="font-mono text-sm text-cobalt tracking-widest">{refId}</p>
          </div>

          <div className="bg-obsidian border border-[#3A3A3C] rounded-sm p-4 text-left">
            <p className="font-mono text-xs text-neural-dim tracking-wider mb-3">NEXT STEPS</p>
            <ol className="flex flex-col gap-2 text-sm text-neural-muted">
              <li className="flex gap-2"><span className="text-cobalt font-mono">01</span> Check your inbox for confirmation</li>
              <li className="flex gap-2"><span className="text-cobalt font-mono">02</span> OBSDN team reviews your application</li>
              <li className="flex gap-2"><span className="text-cobalt font-mono">03</span> Phone or video interview scheduled</li>
              <li className="flex gap-2"><span className="text-cobalt font-mono">04</span> Deposit + vehicle deployment</li>
            </ol>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <GhostButton href="/">RETURN TO OBSDN.EV</GhostButton>
          <Link
            href="/contact"
            className="font-mono text-xs text-neural-dim hover:text-neural-white transition-colors tracking-wider"
          >
            Questions? Contact us &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
