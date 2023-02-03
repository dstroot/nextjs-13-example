import "@/styles/globals.css";

// components
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";

// data
import { config } from "@/data/constants";

// fonts
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Get Atlassian StatusPage data from public API
async function getStatus() {
  const res = await fetch(
    `https://${config.statusPage}.statuspage.io/api/v2/summary.json`,
    { next: { revalidate: 30 } }
  );
  return res.json();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //https://beta.nextjs.org/docs/data-fetching/fetching
  const statusData = await getStatus();

  return (
    <html lang="en">
      <head />
      <body
        className={`${inter.variable} font-sans antialiased transition-colors bg-white dark:bg-gray-900 min-h-screen grid grid-rows-[auto_1fr_auto]`}
      >
        <Providers>
          <NavBar />
          <main className="container px-4 mx-auto">{children}</main>
          <Footer statusData={statusData} />
        </Providers>
      </body>
    </html>
  );
}

/*
Use grid instead of flex for sticky footer

min-h-screen grid grid-rows-[auto_1fr_auto]

*/
