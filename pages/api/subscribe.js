import Joi from 'joi';
import { prisma } from '@/lib/prisma';

const schema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  turnstileToken: Joi.string().required(),
});

async function validateTurnstile(token) {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
    }),
  });

  const data = await res.json();
  return data.success === true;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const valid = await validateTurnstile(value.turnstileToken);
  if (!valid) {
    return res.status(400).json({ message: 'Bot verification failed.' });
  }

  await prisma.marketUpdateSubscriber.upsert({
    where: { email: value.email },
    update: {},
    create: { email: value.email },
  });

  return res.status(200).json({ message: 'Subscribed.' });
}