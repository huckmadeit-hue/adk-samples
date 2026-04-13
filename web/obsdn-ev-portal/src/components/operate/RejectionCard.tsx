import Link from 'next/link';
import { GhostButton } from '@/components/ui/GhostButton';

interface RejectionCardProps {
  onRetry?: () => void;
}

export function RejectionCard({ onRetry }: RejectionCardProps) {
  return (
    <div className="w-full max-w-[560px] mx-auto">
      <div className="bg-obsidian-elevated border border-[#3A3A3C] rounded-sm p-8 flex flex-col gap-6 text-center">
        <div className="w-12 h-12 mx-auto bg-[#3A3A3C] rounded-sm flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-neural-muted">
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10 6v5M10 13.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-syncopate font-bold text-lg text-neural-white">NOT ELIGIBLE YET</h3>
          <p className="text-neural-muted text-sm leading-relaxed">
            OBSDN requires a minimum <strong className="text-neural-white">4.85 Uber rating</strong> for
            our premium hardware program. This standard protects our operators,
            passengers, and the fleet.
          </p>
        </div>

        <div className="border-t border-[#3A3A3C] pt-6 flex flex-col gap-3">
          <p className="font-mono text-xs text-neural-dim tracking-wider">WHAT YOU CAN DO</p>
          <ul className="text-sm text-neural-muted text-left flex flex-col gap-2">
            <li className="flex gap-2"><span className="text-cobalt">01</span> Continue driving to improve your rating</li>
            <li className="flex gap-2"><span className="text-cobalt">02</span> Focus on 5-star service to raise your score</li>
            <li className="flex gap-2"><span className="text-cobalt">03</span> Reapply once you reach 4.85+</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {onRetry && (
            <GhostButton onClick={onRetry} size="sm">UPDATE RATING</GhostButton>
          )}
          <Link
            href="/rejected"
            className="inline-flex items-center justify-center font-mono text-xs text-neural-muted hover:text-neural-white transition-colors tracking-wider"
          >
            LEARN MORE &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
