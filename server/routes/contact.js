import { Router } from 'express';
import { validateContactMessage } from '../lib/validate.js';
import { sendContactMessageEmail } from '../lib/email.js';

export const contactRouter = Router();

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionLog = new Map();

function isRateLimited(key) {
  const now = Date.now();
  const timestamps = (submissionLog.get(key) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  submissionLog.set(key, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

contactRouter.post('/contact', async (req, res) => {
  const result = validateContactMessage(req.body);

  if (!result.valid) {
    return res.status(400).json({
      success: false,
      message: 'Please correct the highlighted fields and try again.',
      errors: result.errors,
    });
  }

  const rateLimitKey = `${req.ip}:${result.data.phone || result.data.email}`;
  if (isRateLimited(rateLimitKey)) {
    return res.status(429).json({
      success: false,
      message: 'Too many messages submitted recently. Please try again later.',
    });
  }

  try {
    await sendContactMessageEmail(result.data);
    return res.status(200).json({
      success: true,
      message: 'Message sent to Sabari Hospitals. Our team will contact you shortly.',
    });
  } catch (err) {
    console.error('[contact] Failed to deliver contact message email:', err.message);
    return res.status(502).json({
      success: false,
      message: 'Unable to send your message right now. Please try again or contact Sabari Hospitals directly.',
    });
  }
});
