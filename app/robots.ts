import { MetadataRoute } from 'next';
import { meta } from '@/data/constants';

// https://en.wikipedia.org/wiki/Robots.txt#Standard
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      //   disallow: '/private/',
    },
    sitemap: `${meta.URL}/sitemap.xml`,
  };
}
