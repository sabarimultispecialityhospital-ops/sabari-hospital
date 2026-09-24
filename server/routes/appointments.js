import { Router } from 'express';
import { validateAppointment } from '../lib/validate.js';
import { formatAppointmentMessage, sendWhatsAppMessage } from '../lib/whatsapp.js';

export const appointmentsRouter = Router();

// Very small in-memory rate limiter: max 5 submissions per phone/IP per 10 minutes.
// Prevents accidental/abusive repeated WhatsApp sends; not a substitute for a
// real rate-limiting layer (e.g. at the reverse proxy) in production.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionLog = new Map(); // key -> [timestamps]

function isRateLimited(key) {
  const now = Date.now();
  const timestamps = (submissionLog.get(key) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  submissionLog.set(key, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

appointmentsRouter.post('/appointments', async (req, res) => {
  const result = validateAppointment(req.body);

  if (!result.valid) {
    return res.status(400).json({
      success: false,
      message: 'Please correct the highlighted fields and try again.',
      errors: result.errors,
    });
  }

  const rateLimitKey = `${req.ip}:${result.data.phone}`;
  if (isRateLimited(rateLimitKey)) {
    return res.status(429).json({
      success: false,
      message: 'Too many appointment requests submitted recently. Please try again later.',
    });
  }

  const message = formatAppointmentMessage(result.data);

  try {
    await sendWhatsAppMessage(message);
    return res.status(200).json({
      success: true,
      message: 'Appointment request sent to Sabari Hospitals.',
    });
  } catch (err) {
    // Never leak provider/internal error details to the client.
    console.error('[appointments] Failed to deliver WhatsApp message:', err.message);
    return res.status(502).json({
      success: false,
      message: 'Unable to send your appointment request right now. Please try again or contact Sabari Hospitals directly.',
    });
  }
});
