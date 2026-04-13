'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { FormField } from '@/components/operate/FormField';
import { GlowButton } from '@/components/ui/GlowButton';
import { contactSchema, type ContactInput } from '@/lib/validations';

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

  const inputClass = 'w-full bg-obsidian-elevated border border-[#3A3A3C] rounded-sm px-4 py-3 font-mono text-sm text-neural-white placeholder-neural-dim focus:outline-none focus:border-cobalt transition-colors';

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-obsidian pt-16">
        <section className="py-24 lg:py-32">
          <div className="max-w-2xl mx-auto px-6 flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs tracking-[0.3em] text-cobalt uppercase">Get In Touch</p>
              <h1 className="font-syncopate font-bold text-4xl text-neural-white">CONTACT</h1>
              <p className="text-neural-muted leading-relaxed">
                For partnership, financing, press, or operational inquiries.
                We respond to every serious inbound within 24 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-obsidian-elevated border border-cobalt/40 rounded-sm p-8 flex flex-col items-center gap-4 text-center">
                <div className="w-10 h-10 bg-cobalt/15 rounded-sm flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-cobalt">
                    <path d="M2.5 9l4 4L15.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="font-syncopate font-bold text-lg text-neural-white">MESSAGE SENT</h2>
                <p className="text-neural-muted text-sm">We&apos;ll respond within 24 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Name" error={errors.name?.message}>
                    <input type="text" {...register('name')} className={inputClass} placeholder="Your name" />
                  </FormField>
                  <FormField label="Email" error={errors.email?.message}>
                    <input type="email" {...register('email')} className={inputClass} placeholder="you@example.com" />
                  </FormField>
                </div>
                <FormField label="Subject" error={errors.subject?.message}>
                  <input type="text" {...register('subject')} className={inputClass} placeholder="Partnership / Press / Operations" />
                </FormField>
                <FormField label="Message" error={errors.message?.message}>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className={inputClass + ' resize-none'}
                    placeholder="Tell us about your inquiry..."
                  />
                </FormField>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-sm p-4">
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                )}

                <GlowButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </GlowButton>
              </form>
            )}

            <div className="border-t border-[#3A3A3C] pt-8 font-mono text-xs text-neural-dim">
              <p>OBSDN EV Network &mdash; Raleigh–Durham–Chapel Hill, NC</p>
              <a href="mailto:hello@obsdn.ev" className="text-cobalt hover:underline mt-1 block">hello@obsdn.ev</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
