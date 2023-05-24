import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  const res = await fetch('https://9f5hpdsv6r8j.statuspage.io/api/v2/summary.json', {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
    // headers: {
    //   'Content-Type': 'application/json',
    //   'API-Key': process.env.DATA_API_KEY,
    // },
  });

  const data = await res.json();

  return NextResponse.json({ data });
}
