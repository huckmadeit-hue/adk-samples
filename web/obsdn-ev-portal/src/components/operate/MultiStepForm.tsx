'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { applicationSchema, type ApplicationInput } from '@/lib/validations';
import { StepIndicator } from './StepIndicator';
import { RatingSelector } from './RatingSelector';
import { RejectionCard } from './RejectionCard';
import { GlowButton } from '@/components/ui/GlowButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { FormField } from './FormField';

const STEPS = [
  { id: 1, label: 'Rating' },
  { id: 2, label: 'Experience' },
  { id: 3, label: 'Logistics' },
  { id: 4, label: 'Commit' },
];

type RatingBucket = '485plus' | '450to484' | 'below450' | null;

export function MultiStepForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [ratingBucket, setRatingBucket] = useState<RatingBucket>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ApplicationInput>({
    resolver: zodResolver(applicationSchema),
    mode: 'onBlur',
  });

  const ratingBucketToValue: Record<string, number> = {
    '485plus': 4.9,
    '450to484': 4.65,
    'below450': 4.2,
  };

  const handleRatingSelect = (bucket: RatingBucket) => {
    setRatingBucket(bucket);
    if (bucket) {
      setValue('uber_rating', ratingBucketToValue[bucket], { shouldValidate: true });
    }
  };

  const goNext = () => setStep((s) => Math.min(s + 1, 4));
  const goPrev = () => setStep((s) => Math.max(s - 1, 1));

  const onSubmit = async (data: ApplicationInput) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/v1/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Submission failed. Please try again.');
      const { refId } = await res.json();
      router.push(`/waitlist-confirmed?ref=${refId}`);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Inline rejection on step 1
  if (ratingBucket && ratingBucket !== '485plus') {
    return <RejectionCard onRetry={() => { setRatingBucket(null); setValue('uber_rating', 0); }} />;
  }

  return (
    <div className="w-full max-w-[560px] mx-auto">
      <StepIndicator steps={STEPS} currentStep={step} />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-6">
        {/* Step 1 — Rating */}
        {step === 1 && (
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-syncopate font-bold text-lg text-neural-white mb-1">UBER RATING</h3>
              <p className="text-sm text-neural-muted">Select your current Uber driver rating.</p>
            </div>
            <RatingSelector selected={ratingBucket} onSelect={handleRatingSelect} />
            {ratingBucket === '485plus' && (
              <div className="flex justify-end">
                <GlowButton type="button" onClick={goNext}>NEXT</GlowButton>
              </div>
            )}
          </div>
        )}

        {/* Step 2 — Experience */}
        {step === 2 && (
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-syncopate font-bold text-lg text-neural-white mb-1">TRIP HISTORY</h3>
              <p className="text-sm text-neural-muted">Minimum 1,500 lifetime trips required.</p>
            </div>
            <FormField
              label="Lifetime Trips"
              error={errors.lifetime_trips?.message}
              helper="Your all-time trip count from the Uber driver app"
            >
              <input
                type="number"
                min={0}
                {...register('lifetime_trips', { valueAsNumber: true })}
                className="w-full bg-obsidian-elevated border border-[#3A3A3C] rounded-sm px-4 py-3 font-mono text-neural-white placeholder-neural-dim focus:outline-none focus:border-cobalt transition-colors"
                placeholder="e.g. 2,400"
              />
            </FormField>
            <FormField label="Full Name" error={errors.full_name?.message}>
              <input
                type="text"
                {...register('full_name')}
                className="w-full bg-obsidian-elevated border border-[#3A3A3C] rounded-sm px-4 py-3 font-mono text-neural-white placeholder-neural-dim focus:outline-none focus:border-cobalt transition-colors"
                placeholder="Your full legal name"
              />
            </FormField>
            <FormField label="Email Address" error={errors.email?.message}>
              <input
                type="email"
                {...register('email')}
                className="w-full bg-obsidian-elevated border border-[#3A3A3C] rounded-sm px-4 py-3 font-mono text-neural-white placeholder-neural-dim focus:outline-none focus:border-cobalt transition-colors"
                placeholder="you@example.com"
              />
            </FormField>
            <FormField label="Phone Number" error={errors.phone?.message}>
              <input
                type="tel"
                {...register('phone')}
                className="w-full bg-obsidian-elevated border border-[#3A3A3C] rounded-sm px-4 py-3 font-mono text-neural-white placeholder-neural-dim focus:outline-none focus:border-cobalt transition-colors"
                placeholder="+1 919 555 0100"
              />
            </FormField>
            <div className="flex justify-between">
              <GhostButton type="button" onClick={goPrev}>BACK</GhostButton>
              <GlowButton type="button" onClick={goNext}>NEXT</GlowButton>
            </div>
          </div>
        )}

        {/* Step 3 — Logistics */}
        {step === 3 && (
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-syncopate font-bold text-lg text-neural-white mb-1">LOGISTICS</h3>
              <p className="text-sm text-neural-muted">Parking and charging requirements.</p>
            </div>

            <div className="flex flex-col gap-4">
              <label className="flex items-center justify-between p-4 bg-obsidian-elevated border border-[#3A3A3C] rounded-sm cursor-pointer hover:border-cobalt/50 transition-colors">
                <div>
                  <p className="font-mono text-sm text-neural-white">Dedicated parking available?</p>
                  <p className="text-xs text-neural-muted mt-0.5">Garage, driveway, or reserved space</p>
                </div>
                <input
                  type="checkbox"
                  {...register('has_parking')}
                  className="w-5 h-5 accent-cobalt"
                />
              </label>

              <label className="flex items-center justify-between p-4 bg-obsidian-elevated border border-[#3A3A3C] rounded-sm cursor-pointer hover:border-cobalt/50 transition-colors">
                <div>
                  <p className="font-mono text-sm text-neural-white">Home charging capability?</p>
                  <p className="text-xs text-neural-muted mt-0.5">Level 2 (240V) preferred, Level 1 minimum</p>
                </div>
                <input
                  type="checkbox"
                  {...register('has_home_charging')}
                  className="w-5 h-5 accent-cobalt"
                />
              </label>
            </div>

            <div className="flex justify-between">
              <GhostButton type="button" onClick={goPrev}>BACK</GhostButton>
              <GlowButton type="button" onClick={goNext}>NEXT</GlowButton>
            </div>
          </div>
        )}

        {/* Step 4 — Commit */}
        {step === 4 && (
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-syncopate font-bold text-lg text-neural-white mb-1">COMMITMENT</h3>
              <p className="text-sm text-neural-muted">Review the deposit terms before submitting.</p>
            </div>

            <div className="bg-obsidian-elevated border border-[#3A3A3C] rounded-sm p-5 flex flex-col gap-3">
              <p className="font-mono text-xs text-cobalt tracking-widest">FINANCIAL TERMS</p>
              <div className="grid grid-cols-2 gap-3 font-mono text-sm">
                <div><p className="text-neural-dim text-xs">Weekly Rate</p><p className="text-neural-white mt-1">$425 / week</p></div>
                <div><p className="text-neural-dim text-xs">Security Deposit</p><p className="text-neural-white mt-1">$500 (refundable)</p></div>
                <div><p className="text-neural-dim text-xs">Deposit Due</p><p className="text-neural-white mt-1">Before key handoff</p></div>
                <div><p className="text-neural-dim text-xs">Supercharging</p><p className="text-neural-white mt-1">Charged at cost</p></div>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register('deposit_committed')}
                className="mt-1 w-5 h-5 accent-cobalt flex-shrink-0"
              />
              <p className="text-sm text-neural-muted leading-relaxed">
                I understand the <strong className="text-neural-white">$500 refundable security deposit</strong> is
                required before vehicle deployment and will be refunded upon satisfactory off-boarding.
              </p>
            </label>
            {errors.deposit_committed && (
              <p className="text-xs text-red-400">{errors.deposit_committed.message}</p>
            )}

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-sm p-4">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <div className="flex justify-between">
              <GhostButton type="button" onClick={goPrev}>BACK</GhostButton>
              <GlowButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}
              </GlowButton>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
