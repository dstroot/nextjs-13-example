import '@/styles/globals.css';
import type { Metadata } from 'next';

// components
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Providers } from '@/components/Providers';

// data
import { config } from '@/data/constants';

// fonts
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  openGraph: {
    title: 'Next.js',
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
      {/* <head /> */}
      <body
        className={`${inter.variable} font-sans antialiased transition-colors bg-white dark:bg-gray-900 min-h-screen grid grid-rows-[auto_1fr_auto]`}
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

min-h-screen grid grid-rows-[auto_1fr_auto]

*/
