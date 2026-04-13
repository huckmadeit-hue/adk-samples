import { GhostButton } from '@/components/ui/GhostButton';
import Link from 'next/link';

/**
 * ConfirmationCard — Component #24
 * void-800 bg, success/40 border, radius-lg
 * role="status" aria-live="polite" for screen readers
 * Headline: Syncopate; Reference ID: JetBrains Mono cobalt-400
 */
interface ConfirmationCardProps {
  refId: string;
  email?: string;
}

export function ConfirmationCard({ refId, email }: ConfirmationCardProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="w-full flex flex-col items-center gap-10 text-center"
    >
      {/* BrandMark — large variant */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-cobalt-500 animate-pulse" aria-hidden="true" />
        <span className="font-display font-bold text-xl tracking-widest text-signal-white">OBSDN</span>
      </div>

      <div className="w-full max-w-container-sm bg-void-800 border border-success/40 rounded-lg px-8 py-10 flex flex-col gap-6">
        {/* Success icon */}
        <div className="w-12 h-12 mx-auto bg-success-bg border border-success/40 rounded-lg flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 10l5 5L17 5" stroke="#30D158" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-display font-bold text-xl text-signal-white">
            NODE REQUEST RECEIVED
          </h1>
          <p className="font-body text-base text-signal-white/60 leading-relaxed">
            {email
              ? <>You’ll receive a confirmation at <strong className="text-signal-white">{email}</strong>.</>  
              : 'Your application is in the queue.'}{' '}
            Expect a call within <strong className="text-signal-white">48 hours</strong>.
          </p>
        </div>

        {/* Reference ID */}
        <div className="border-t border-void-600 pt-5 flex flex-col gap-2">
          <p className="font-mono text-xs text-signal-white/20 tracking-wider">REFERENCE ID</p>
          <p
            className="font-mono text-mono-lg text-cobalt-400 tracking-widest"
            aria-label={`Reference ID: ${refId}`}
          >
            {refId}
          </p>
        </div>

        {/* Next steps timeline */}
        <div className="bg-void-950 border border-void-600 rounded-md p-5 text-left">
          <p className="font-mono text-xs text-signal-white/20 tracking-wider mb-4">NEXT STEPS</p>
          <ol className="flex flex-col gap-3" aria-label="Application process">
            {[
              'Check your inbox for email confirmation',
              'OBSDN team reviews your application',
              'Phone or video interview scheduled',
              'Deposit collection + vehicle deployment',
            ].map((step, i) => (
              <li key={i} className="flex gap-3 font-body text-sm text-signal-white/60">
                <span className="font-mono text-cobalt-400 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <GhostButton href="/">RETURN TO OBSDN.EV</GhostButton>
        <Link
          href="/contact"
          className="font-mono text-xs text-signal-white/20 hover:text-signal-white transition-colors duration-fast tracking-wider"
        >
          Questions? Contact us &rarr;
        </Link>
      </div>
    </div>
  );
}
