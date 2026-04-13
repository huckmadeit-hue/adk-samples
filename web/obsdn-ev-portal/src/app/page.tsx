import type { Metadata } from 'next';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { HardwareSection } from '@/components/home/HardwareSection';
import { EconomicsSection } from '@/components/home/EconomicsSection';

export const metadata: Metadata = {
  title: 'OBSDN EV Network — Premium Tesla Operator Program | Triangle, NC',
  description:
    'OBSDN deploys HW4-enabled Tesla Model Y vehicles to elite operators in the Raleigh-Durham market. 4.85+ rated drivers only. Apply for a Node.',
  alternates: { canonical: 'https://obsdn.ev/' },
  openGraph: {
    title: 'OBSDN EV Network',
    description: 'The neural infrastructure of the Triangle. Apply to operate.',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <HeroSection />
        <HardwareSection />
        <EconomicsSection />
      </main>
      <Footer />
    </>
  );
}
