import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

export const runtime = 'edge';

const ratelimiter = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '10 s'),
  analytics: true,
});

export async function GET(req: NextRequest) {
  // rate limit requests
  const ip = req.headers.get('x-forwarded-for');
  const { success } = await ratelimiter.limit(ip || 'api');
  if (!success) {
    return new NextResponse('Rate limit exceeded', { status: 429 });
  }

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
