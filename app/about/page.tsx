import Notebook from '@/components/Notebook';

// types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  // description: 'NextJS + TailwindCSS minimalist starter kit',
  // openGraph: {
  //   title: 'NextJS + TailwindCSS minimalist starter kit',
  //   description: 'The React Framework for the Web',
  //   url: 'https://nextjs.org',
  //   siteName: 'Next.js',
  //   images: [
  //     {
  //       url: 'https://nextjs.org/og.png',
  //       width: 800,
  //       height: 600,
  //     },
  //   ],
  //   locale: 'en-US',
  //   type: 'website',
  // },
};

export default function Index() {
  return (
    <>
      <h1 className='mb-12 text-6xl text-gray-900 dark:text-gray-100'>About</h1>
      <Notebook />
    </>
  );
}
