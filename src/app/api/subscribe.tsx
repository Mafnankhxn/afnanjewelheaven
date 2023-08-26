// pages/api/subscribe.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // In a real scenario, you would handle the subscription logic here
    // You might want to store the email in a database or integrate with an email service provider
    // For now, we're just sending a success response
    res.status(200).json({ message: 'Subscription successful!' });
  } else {
    res.status(405).end();
  }
}
