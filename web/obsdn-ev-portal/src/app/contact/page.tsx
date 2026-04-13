'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { FormField } from '@/components/operate/FormField';
import { GlowButton } from '@/components/ui/GlowButton';
import { contactSchema, type ContactInput } from '@/lib/validations';

const INPUT_CLASS =
  'w-full h-12 bg-void-800 border border-void-600 rounded-md px-5 py-3 ' +
  'font-mono text-mono-base text-signal-white placeholder-signal-white/20 ' +
  'focus:outline-none focus:border-cobalt-500 focus:shadow-glow-cobalt-sm ' +
  'transition-colors duration-fast';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setError(null);
    try {
      const res = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to send. Please try again.');
      setSubmitted(true);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Something went wrong.');
    }
  };

  return (
    <>
      <NavBar />
      <main id="main-content" tabIndex={-1} className="min-h-[100dvh] bg-void-950 pt-16">
        <section className="py-24 lg:py-32">
          <div className="max-w-container-md mx-auto px-6 flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs tracking-caps text-cobalt-500 uppercase">Get In Touch</p>
              <h1 className="font-display font-bold text-3xl text-signal-white leading-none">CONTACT</h1>
              <p className="font-body text-base text-signal-white/60 leading-relaxed max-w-lg">
                For partnership, financing, press, or operational inquiries.
                We respond to every serious inbound within 24 business hours.
              </p>
            </div>

            {submitted ? (
              <div
                className="bg-void-800 border border-success/40 rounded-lg p-10 flex flex-col items-center gap-4 text-center"
                role="status"
                aria-live="polite"
              >
                <div className="w-12 h-12 bg-success-bg border border-success/40 rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M3 10l5 5L17 5" stroke="#30D158" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="font-display font-bold text-xl text-signal-white">MESSAGE SENT</h2>
                <p className="font-body text-base text-signal-white/60">We’ll respond within 24 business hours.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
                aria-label="Contact form"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Name" error={errors.name?.message} required htmlFor="contact_name">
                    <input id="contact_name" type="text" {...register('name')} className={INPUT_CLASS} placeholder="Your name" autoComplete="name" />
                  </FormField>
                  <FormField label="Email" error={errors.email?.message} required htmlFor="contact_email">
                    <input id="contact_email" type="email" {...register('email')} className={INPUT_CLASS} placeholder="you@example.com" autoComplete="email" />
                  </FormField>
                </div>
                <FormField label="Subject" error={errors.subject?.message} required htmlFor="contact_subject">
                  <input id="contact_subject" type="text" {...register('subject')} className={INPUT_CLASS} placeholder="Partnership / Press / Operations" />
                </FormField>
                <FormField label="Message" error={errors.message?.message} required htmlFor="contact_message">
                  <textarea
                    id="contact_message"
                    {...register('message')}
                    rows={6}
                    className={INPUT_CLASS + ' h-auto resize-none py-4'}
                    placeholder="Tell us about your inquiry..."
                  />
                </FormField>

                {error && (
                  <div className="bg-error-bg border border-error/30 rounded-md p-4" role="alert">
                    <p className="font-body text-sm text-error">{error}</p>
                  </div>
                )}

                <GlowButton type="submit" disabled={isSubmitting} size="md">
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </GlowButton>
              </form>
            )}

            <div className="border-t border-void-600 pt-8">
              <p className="font-mono text-xs text-signal-white/40">
                OBSDN EV Network &mdash; Raleigh–Durham–Chapel Hill, NC
              </p>
              <a
                href="mailto:hello@obsdn.ev"
                className="font-mono text-xs text-cobalt-400 hover:text-cobalt-300 transition-colors duration-fast mt-2 block"
              >
                hello@obsdn.ev
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
