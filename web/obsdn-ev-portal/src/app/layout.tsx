import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://obsdn.ev'),
  title: {
    default: 'OBSDN EV Network — Premium Tesla Operator Program | Triangle, NC',
    template: '%s — OBSDN EV Network',
  },
  description:
    'OBSDN deploys HW4-enabled Tesla Model Y vehicles to elite operators in the Raleigh-Durham market. 4.85+ rated drivers only. Apply for a Node.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://obsdn.ev',
    siteName: 'OBSDN EV Network',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630, alt: 'OBSDN EV Network — Premium Tesla Operator Program' }],
  },
  twitter: { card: 'summary_large_image', site: '@obsdn.ev' },
  robots: { index: true, follow: true },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OBSDN EV Network',
  url: 'https://obsdn.ev',
  sameAs: ['https://instagram.com/obsdn.ev'],
  areaServed: { '@type': 'City', name: 'Raleigh', addressRegion: 'NC' },
  description: 'Premium EV logistics infrastructure for elite rideshare operators in the Triangle.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Syncopate: uppercase Latin subset only for ~60% size reduction */}
        <link
          href="https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap&text=ABCDEFGHIJKLMNOPQRSTUVWXYZ%20.%2F-"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
