'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * StepIndicator — Component #17
 * Dot-based: 8px dots, gap 8px
 * Active: cobalt-500, 12px (animate size)
 * Completed: cobalt-600 (smaller, indicates done)
 * Inactive: void-600
 * Progress bar above dots: cobalt-500 fill, animated width
 */
interface Step { id: number; label: string; }
interface StepIndicatorProps { steps: Step[]; currentStep: number; }

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div
      role="navigation"
      aria-label={`Step ${currentStep} of ${steps.length}`}
    >
      {/* Progress bar */}
      <div className="w-full h-1 bg-void-600 rounded-full overflow-hidden mb-5">
        <motion.div
          className="h-full bg-cobalt-500 rounded-full origin-left"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
        />
      </div>

      {/* Dot row */}
      <div className="flex items-center justify-between">
        {steps.map((step) => {
          const isDone   = step.id < currentStep;
          const isActive = step.id === currentStep;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center gap-2"
              aria-current={isActive ? 'step' : undefined}
            >
              <motion.div
                className={cn(
                  'rounded-full transition-colors duration-base',
                  isDone   && 'bg-cobalt-600',
                  isActive && 'bg-cobalt-500',
                  !isDone && !isActive && 'bg-void-600'
                )}
                animate={{
                  width:  isActive ? 12 : 8,
                  height: isActive ? 12 : 8,
                }}
                transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
              />
              <span
                className={cn(
                  'font-body text-xs tracking-wide hidden sm:block transition-colors duration-fast',
                  isActive ? 'text-cobalt-400' : isDone ? 'text-signal-white/40' : 'text-void-400'
                )}
              >
                {step.label.toUpperCase()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
