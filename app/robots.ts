import { MetadataRoute } from 'next';
import { URL } from '@/data/constants';

// https://en.wikipedia.org/wiki/Robots.txt#Standard
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      //   disallow: '/private/',
    },
    sitemap: `${URL}/sitemap.xml`,
  };
}
