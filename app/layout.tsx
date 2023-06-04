import '@/styles/globals.css';

// types
import type { Metadata } from 'next';

// components
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Providers } from '@/components/Providers';

// data
import { config } from '@/data/constants';

// font
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// The new Metadata API allows you to define metadata (e.g. meta and
// link tags inside your HTML head element) with an explicit metadata
// configuration in any layout or page that is a Server Component.
// https://beta.nextjs.org/docs/api-reference/metadata
//
// In addition to config-based metadata, the Metadata API now supports
// new file conventions, allowing you to conveniently customize your
// pages for improved SEO and sharing on the web:
//
// opengraph-image.(jpg|png|svg)
// twitter-image.(jpg|png|svg)
// favicon.ico
// icon.(ico|jpg|png|svg)
// sitemap.(xml|js|jsx|ts|tsx)
// robots.(txt|js|jsx|ts|tsx)
// manifest.(json|js|jsx|ts|tsx)

export const metadata: Metadata = {
  // metadataBase is a convenience option to set a base URL prefix for metadata fields
  // that require a fully qualified URL. https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
  metadataBase: new URL('https://example.com'),
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#title
  title: {
    default: 'Acme',
    template: '%s | Acme',
  },
  description: 'NextJS + TailwindCSS minimalist starter kit',
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#basic-fields
  themeColor: '#fff',
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph
  openGraph: {
    title: 'NextJS + TailwindCSS minimalist starter kit',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true, // Prevents search engines from showing snippets of the page in search results.
    noimageindex: true,
    nocache: true, //Prevents search engines from caching the page.
  },
};

// Get Atlassian StatusPage data from public API
async function getStatus() {
  const res = await fetch(`https://${config.statusPage}.statuspage.io/api/v2/summary.json`, {
    next: { revalidate: 30 },
  });
  return res.json();
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  //https://beta.nextjs.org/docs/data-fetching/fetching
  const statusData = await getStatus();

  return (
    <html lang='en'>
      <body
        className={`${inter.variable} grid min-h-full grid-rows-[auto_1fr_auto] bg-white font-sans antialiased transition-colors dark:bg-gray-900`}
      >
        <Providers>
          <NavBar />
          <main className='container px-4 mx-auto'>{children}</main>
          <Footer statusData={statusData} />
        </Providers>
      </body>
    </html>
  );
}

/*
Use grid instead of flex for sticky footer - puts all config onto body or single div:
  `min-h-screen grid grid-rows-[auto_1fr_auto]`
*/
