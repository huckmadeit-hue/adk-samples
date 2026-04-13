'use client';
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { applicationSchema, type ApplicationInput } from '@/lib/validations';
import { StepIndicator } from './StepIndicator';
import { RatingSelector } from './RatingSelector';
import { RejectionCard } from './RejectionCard';
import { GlowButton } from '@/components/ui/GlowButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { FormField } from './FormField';

/**
 * MultiStepForm — Component #16
 * 4-step vetting: Rating → Experience → Logistics → Commit
 * AnimatePresence step transitions: slide-in / slide-out X-axis
 * Focus trapped within active step; progress bar animated
 * a11y: aria-label on form, aria-live on errors, fieldset/legend on radio groups
 */

const STEPS = [
  { id: 1, label: 'Rating' },
  { id: 2, label: 'Experience' },
  { id: 3, label: 'Logistics' },
  { id: 4, label: 'Commit' },
];

type RatingBucket = '485plus' | '450to484' | 'below450' | null;

const RATING_VALUE: Record<string, number> = {
  '485plus':  4.92,
  '450to484': 4.65,
  'below450': 4.20,
};

const INPUT_CLASS =
  'w-full h-12 bg-void-800 border border-void-600 rounded-md px-5 py-3 ' +
  'font-mono text-mono-base text-signal-white placeholder-signal-white/20 ' +
  'focus:outline-none focus:border-cobalt-500 focus:shadow-glow-cobalt-sm ' +
  'transition-colors duration-fast';

export function MultiStepForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [prevStep, setPrevStep] = useState(1);
  const [ratingBucket, setRatingBucket] = useState<RatingBucket>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ApplicationInput>({
    resolver: zodResolver(applicationSchema),
    mode: 'onBlur',
  });

  const goNext = () => {
    setPrevStep(step);
    setStep((s) => Math.min(s + 1, STEPS.length));
  };
  const goPrev = () => {
    setPrevStep(step);
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleRatingSelect = (bucket: RatingBucket) => {
    setRatingBucket(bucket);
    if (bucket) setValue('uber_rating', RATING_VALUE[bucket], { shouldValidate: true });
  };

  const onSubmit = async (data: ApplicationInput) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/v1/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Submission failed. Please try again.');
      const { refId } = await res.json();
      router.push(`/waitlist-confirmed?ref=${encodeURIComponent(refId)}`);
    } catch (e: unknown) {
      setSubmitError(e instanceof Error ? e.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Inline rejection gate on step 1
  if (ratingBucket && ratingBucket !== '485plus') {
    return <RejectionCard onRetry={() => { setRatingBucket(null); setValue('uber_rating', 0); }} />;
  }

  const direction = step > prevStep ? 1 : -1;
  const variants = {
    enter:   { opacity: 0, x: direction * 16 },
    center:  { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0, 0, 0.2, 1] } },
    exit:    { opacity: 0, x: direction * -16, transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
  };

  return (
    <div className="w-full max-w-container-sm mx-auto">
      <StepIndicator steps={STEPS} currentStep={step} />

      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        aria-label="OBSDN Operator Application"
        aria-describedby="form-instructions"
        className="mt-10"
        noValidate
      >
        <p id="form-instructions" className="sr-only">
          Four-step operator vetting form. Complete each step to submit your application.
        </p>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {/* ── STEP 1: Rating ── */}
            {step === 1 && (
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="font-display font-bold text-xl text-signal-white mb-1">UBER RATING</h3>
                  <p className="font-body text-sm text-signal-white/60">
                    Select your current Uber driver rating.
                  </p>
                </div>
                <RatingSelector selected={ratingBucket} onSelect={handleRatingSelect} />
                {ratingBucket === '485plus' && (
                  <div className="flex justify-end">
                    <GlowButton type="button" onClick={goNext}>NEXT</GlowButton>
                  </div>
                )}
              </div>
            )}

            {/* ── STEP 2: Experience ── */}
            {step === 2 && (
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-signal-white mb-1">TRIP HISTORY</h3>
                  <p className="font-body text-sm text-signal-white/60">
                    Minimum 1,500 lifetime trips required.
                  </p>
                </div>

                <FormField
                  label="Lifetime Trips"
                  error={errors.lifetime_trips?.message}
                  helper="All-time trip count from the Uber driver app"
                  required
                  htmlFor="lifetime_trips"
                >
                  <input
                    id="lifetime_trips"
                    type="number"
                    min={0}
                    {...register('lifetime_trips', { valueAsNumber: true })}
                    className={INPUT_CLASS}
                    placeholder="e.g. 2,400"
                    aria-required="true"
                  />
                </FormField>

                <FormField label="Full Name" error={errors.full_name?.message} required htmlFor="full_name">
                  <input id="full_name" type="text" {...register('full_name')} className={INPUT_CLASS} placeholder="Your full legal name" aria-required="true" />
                </FormField>

                <FormField label="Email Address" error={errors.email?.message} required htmlFor="email">
                  <input id="email" type="email" {...register('email')} className={INPUT_CLASS} placeholder="you@example.com" aria-required="true" autoComplete="email" />
                </FormField>

                <FormField label="Phone Number" error={errors.phone?.message} required htmlFor="phone">
                  <input id="phone" type="tel" {...register('phone')} className={INPUT_CLASS} placeholder="+1 919 555 0100" aria-required="true" autoComplete="tel" />
                </FormField>

                <div className="flex justify-between pt-2">
                  <GhostButton type="button" onClick={goPrev}>BACK</GhostButton>
                  <GlowButton type="button" onClick={goNext}>NEXT</GlowButton>
                </div>
              </div>
            )}

            {/* ── STEP 3: Logistics ── */}
            {step === 3 && (
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-signal-white mb-1">LOGISTICS</h3>
                  <p className="font-body text-sm text-signal-white/60">
                    Parking and charging requirements.
                  </p>
                </div>

                <fieldset className="flex flex-col gap-3">
                  <legend className="font-body text-xs font-medium tracking-label text-signal-white/40 uppercase mb-1">
                    Infrastructure Requirements
                  </legend>

                  {[
                    {
                      id: 'has_parking',
                      name: 'Dedicated parking available?',
                      desc: 'Garage, driveway, or reserved space',
                      key: 'has_parking' as const,
                    },
                    {
                      id: 'has_home_charging',
                      name: 'Home charging capability?',
                      desc: 'Level 2 (240V) preferred, Level 1 minimum',
                      key: 'has_home_charging' as const,
                    },
                  ].map(({ id, name, desc, key }) => (
                    <label
                      key={id}
                      htmlFor={id}
                      className="flex items-center justify-between h-16 px-5 bg-void-800 border border-void-600 rounded-md cursor-pointer hover:border-cobalt-500/50 transition-colors duration-fast"
                    >
                      <div>
                        <p className="font-mono text-mono-base text-signal-white">{name}</p>
                        <p className="font-mono text-xs text-signal-white/40 mt-0.5">{desc}</p>
                      </div>
                      <input
                        id={id}
                        type="checkbox"
                        {...register(key)}
                        className="w-5 h-5 accent-cobalt-500 flex-shrink-0"
                      />
                    </label>
                  ))}
                </fieldset>

                <div className="flex justify-between pt-2">
                  <GhostButton type="button" onClick={goPrev}>BACK</GhostButton>
                  <GlowButton type="button" onClick={goNext}>NEXT</GlowButton>
                </div>
              </div>
            )}

            {/* ── STEP 4: Commit ── */}
            {step === 4 && (
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-signal-white mb-1">COMMITMENT</h3>
                  <p className="font-body text-sm text-signal-white/60">
                    Review the financial terms before submitting.
                  </p>
                </div>

                {/* Financial terms card */}
                <div className="bg-void-800 border border-void-600 rounded-lg p-5 flex flex-col gap-4">
                  <p className="font-mono text-xs text-cobalt-400 tracking-wider uppercase">Financial Terms</p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Weekly Rate',    value: '$425 / week' },
                      { label: 'Security Deposit', value: '$500 refundable' },
                      { label: 'Deposit Due',     value: 'Before key handoff' },
                      { label: 'Supercharging',   value: 'Billed at cost' },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p className="font-mono text-xs text-signal-white/40 uppercase tracking-wider mb-1">{label}</p>
                        <p className="font-mono text-mono-base text-signal-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DepositAcknowledge — Component #21 */}
                <label
                  htmlFor="deposit_committed"
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <div className="relative mt-0.5 flex-shrink-0">
                    <input
                      id="deposit_committed"
                      type="checkbox"
                      {...register('deposit_committed')}
                      className="sr-only peer"
                      aria-required="true"
                    />
                    {/* Custom checkbox — Component #21 spec */}
                    <div className="w-5 h-5 rounded-sm border-2 border-void-600 bg-void-800 group-hover:border-cobalt-400 peer-checked:bg-cobalt-500 peer-checked:border-cobalt-500 transition-colors duration-instant flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-0 peer-checked:opacity-100 text-signal-white" aria-hidden="true">
                        <path d="M1.5 5l2.5 2.5 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-body text-base text-signal-white/80 leading-relaxed">
                    I understand the{' '}
                    <strong className="text-signal-white">$500 refundable security deposit</strong>
                    {' '}is required before vehicle deployment and will be returned upon satisfactory off-boarding.
                  </p>
                </label>
                {errors.deposit_committed && (
                  <p className="font-mono text-xs text-error" role="alert">
                    {errors.deposit_committed.message}
                  </p>
                )}

                {submitError && (
                  <div className="bg-error-bg border border-error/30 rounded-md p-4" role="alert">
                    <p className="font-body text-sm text-error">{submitError}</p>
                  </div>
                )}

                <div className="flex justify-between pt-2">
                  <GhostButton type="button" onClick={goPrev} disabled={isSubmitting}>
                    BACK
                  </GhostButton>
                  <GlowButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}
                  </GlowButton>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </form>
    </div>
  );
}
