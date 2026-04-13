import type { Metadata } from 'next';
import { ConfirmationCard } from '@/components/operate/ConfirmationCard';

export const metadata: Metadata = {
  title: 'Application Received',
  robots: { index: false, follow: false },
};

export default function WaitlistConfirmedPage({
  searchParams,
}: {
  searchParams: { ref?: string; email?: string };
}) {
  const refId = searchParams.ref ?? 'OBSDN-PENDING';
  const email = searchParams.email;

  return (
    <main
      className="min-h-[100dvh] bg-void-950 flex flex-col items-center justify-center px-6 py-20"
      id="main-content"
    >
      {/* AmbientBackground */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(45,91,255,0.07) 0%, transparent 70%)' }}
      />
      <div className="relative z-10 w-full">
        <ConfirmationCard refId={refId} email={email} />
      </div>
    </main>
  );
}
