import { validateAppointment } from '../../server/lib/validate.js';
import { sendAppointmentEmail } from '../../server/lib/email.js';

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

  const result = validateAppointment(body);
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
    await sendAppointmentEmail(result.data);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Appointment request sent to Sabari Hospitals.',
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
    console.error('[netlify-appointments] Failed to deliver email:', err);
    return new Response(
      JSON.stringify({
        success: false,
        message:
          'Unable to send your appointment request right now. Please try again or contact Sabari Hospitals directly.',
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
  path: '/api/appointments',
};
