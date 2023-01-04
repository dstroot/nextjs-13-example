import "../styles/globals.css";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Footer2 } from "../components/Footer2";
import { settings } from "../config/configuration";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Get Atlassian StatusPage data from public API
async function getStatus() {
  const res = await fetch(
    `https://${settings.statusPage}.statuspage.io/api/v2/summary.json`,
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
        className={`${inter.variable} font-sans flex flex-col min-h-screen antialiased bg-gray-100 dark:bg-gray-900`}
      >
        <NavBar />
        <main className="container flex-1 px-4 mx-auto">{children}</main>
        <Footer />
        <Footer2 statusData={statusData} />
      </body>
    </html>
  );
}
