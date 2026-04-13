import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/login/', '/api/', '/waitlist-confirmed', '/rejected'],
      },
    ],
    sitemap: 'https://obsdn.ev/sitemap.xml',
  };
}
