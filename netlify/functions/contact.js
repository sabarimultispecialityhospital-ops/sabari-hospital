import { validateContactMessage } from '../../server/lib/validate.js';
import { sendContactMessageEmail } from '../../server/lib/email.js';

export default async (req, context) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ success: false, message: 'Method not allowed' }),
      {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: 'Invalid JSON request body.' }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }

  const result = validateContactMessage(body);
  if (!result.valid) {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Please correct the highlighted fields and try again.',
        errors: result.errors,
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }

  try {
    await sendContactMessageEmail(result.data);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Message sent to Sabari Hospitals. Our team will contact you shortly.',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (err) {
    console.error('[netlify-contact] Failed to deliver contact message email:', err);
    return new Response(
      JSON.stringify({
        success: false,
        message:
          'Unable to send your message right now. Please try again or contact Sabari Hospitals directly.',
      }),
      {
        status: 502,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
};

export const config = {
  path: '/api/contact',
};
