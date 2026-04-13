import { cn } from '@/lib/utils';

interface Step { id: number; label: string; }
interface StepIndicatorProps { steps: Step[]; currentStep: number; }

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center gap-0">
      {steps.map((step, i) => {
        const isDone = step.id < currentStep;
        const isActive = step.id === currentStep;
        return (
          <div key={step.id} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  'w-7 h-7 rounded-sm flex items-center justify-center font-mono text-xs font-medium border transition-all duration-300',
                  isDone && 'bg-cobalt border-cobalt text-white',
                  isActive && 'bg-cobalt/15 border-cobalt text-cobalt',
                  !isDone && !isActive && 'bg-obsidian-elevated border-[#3A3A3C] text-neural-dim'
                )}
              >
                {isDone ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1.5 6l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : step.id}
              </div>
              <span className={cn('font-mono text-[10px] tracking-wider hidden sm:block', isActive ? 'text-cobalt' : 'text-neural-dim')}>
                {step.label.toUpperCase()}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={cn('flex-1 h-px mx-2 mb-5 transition-colors duration-300', isDone ? 'bg-cobalt' : 'bg-[#3A3A3C]')} />
            )}
          </div>
        );
      })}
    </div>
  );
}
