import { MetadataRoute } from 'next';

// https://www.w3.org/TR/appmanifest/#:~:text=A%20application%20manifest%20is%20a,which%20the%20manifest%20was%20fetched.

export default function manifest(): MetadataRoute.Manifest {
  return {
    lang: 'en',
    name: 'Next.js',
    short_name: 'Next.js',
    description: 'A random advice generator',
    theme_color: '#000000',
    background_color: '#000000',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    icons: [
      {
        src: '/icon3.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'icon4.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
