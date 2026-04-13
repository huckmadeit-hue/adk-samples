import { GhostButton } from '@/components/ui/GhostButton';
import Link from 'next/link';

/**
 * RejectionCard — Component #23
 * void-800 bg, error/40 border, radius-lg, centered
 * role="alert" aria-live="assertive" for screen readers
 * Headline: Syncopate signal-white; Body: Inter signal-white/60
 */
interface RejectionCardProps {
  onRetry?: () => void;
}

export function RejectionCard({ onRetry }: RejectionCardProps) {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className="w-full max-w-container-sm mx-auto"
    >
      <div className="bg-void-800 border border-error/40 rounded-lg px-8 py-10 flex flex-col gap-6 text-center">
        {/* OBSDN icon in void-600 */}
        <div className="w-12 h-12 mx-auto bg-void-700 border border-void-600 rounded-lg flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="8" stroke="#48484A" strokeWidth="1.5" />
            <path d="M10 6v4.5M10 12.5v1" stroke="#48484A" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-display font-bold text-xl text-signal-white">
            STANDARDS NOT MET
          </h3>
          <p className="font-body text-base text-signal-white/60 leading-relaxed">
            OBSDN requires a minimum{' '}
            <strong className="text-signal-white">4.85 Uber rating</strong>{' '}
            for our premium hardware program. This standard protects our operators,
            passengers, and the integrity of the fleet.
          </p>
        </div>

        <div className="border-t border-void-600 pt-6 flex flex-col gap-3 text-left">
          <p className="font-mono text-xs text-signal-white/20 tracking-wider text-center">WHAT YOU CAN DO</p>
          <ol className="flex flex-col gap-2" aria-label="Steps to improve your rating">
            {[
              'Continue driving and focus on 5-star service',
              'Greet every passenger professionally at pickup',
              'Reapply once you reach 4.85 or above',
            ].map((step, i) => (
              <li key={i} className="flex gap-3 font-body text-sm text-signal-white/60">
                <span className="font-mono text-cobalt-400 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
          {onRetry && (
            <GhostButton onClick={onRetry} size="sm">UPDATE RATING</GhostButton>
          )}
          <Link
            href="/rejected"
            className="font-mono text-xs text-signal-white/40 hover:text-signal-white transition-colors duration-fast tracking-wider"
          >
            LEARN MORE &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
