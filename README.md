This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Key Ideas

1. Learn Typescript. The application should be written 100% in Typescript and we want to take advantage of TS tooling. By setting a base URL and paths it will make our imports much easier:

```json
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["components/*"],
      "@/pages/*": ["pages/*"],
      "@/lib/*": ["lib/*"],
      "@/styles/*": ["styles/*"],
      "@/data/*": ["data/*"]
    },
```

2. Your 404 page can be "active" and simply redirect you to home.

```js
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/*
  simple 404 function to redirect to home
*/
export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, []);

  return null;
}
```

3. "Providers" pattern for Theme and Framer Motion. They must run on the client. Context providers are typically rendered near the root of an application to share global concerns, like the current theme. Because context is not supported in Server Components, trying to create a context at the root of your application will cause an error. To fix this, create your context and render its provider inside of a Client Component:

```js
'use client';

import { ThemeProvider } from 'next-themes';
import { LazyMotion, domAnimation } from 'framer-motion';

// see: https://beta.nextjs.org/docs/rendering/server-and-client-components
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class'>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </ThemeProvider>
  );
};
```

4. Use Prettier `.prettierrc`:

```json
{
  "useTabs": false,
  "printWidth": 100,
  "semi": true,
  "jsxSingleQuote": true,
  "singleQuote": true
}
```

5. Metadata for SEO: https://nikolasbarwicki.com/articles/seo-in-next-js-13-with-metadata-api