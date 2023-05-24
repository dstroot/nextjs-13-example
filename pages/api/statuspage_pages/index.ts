import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let status = {};
  try {
    status = await fetch('https://9f5hpdsv6r8j.statuspage.io/api/v2/summary.json').then((res) =>
      res.json()
    );
  } catch (err) {
    return res.status(400).json(err);
  }

  return res.status(200).json(status);
}

// https://manage.statuspage.io/pages/9f5hpdsv6r8j
