// Sends the formatted appointment request to the hospital's WhatsApp number
// through the Meta WhatsApp Business Cloud API.
//
// Required environment variables (see .env.example):
//   WHATSAPP_ACCESS_TOKEN    - permanent/system-user access token for the app
//   WHATSAPP_PHONE_NUMBER_ID - the Cloud API "from" phone number id
//   WHATSAPP_PHONE_NUMBER    - the hospital's destination WhatsApp number (E.164, no '+')
//
// None of these ever reach the frontend — this module only runs on the server.

const GRAPH_API_VERSION = 'v20.0';

function formatDateLong(isoDate) {
  // isoDate is 'YYYY-MM-DD'
  const [year, month, day] = isoDate.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

function formatTime12h(time24) {
  const [hourStr, minute] = time24.split(':');
  let hour = Number(hourStr);
  const suffix = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  if (hour === 0) hour = 12;
  return `${String(hour).padStart(2, '0')}:${minute} ${suffix}`;
}

/**
 * Builds the exact WhatsApp message text from sanitised appointment data.
 */
export function formatAppointmentMessage(data) {
  const lines = [
    'NEW APPOINTMENT REQUEST',
    '━━━━━━━━━━━━━━━━━━━━',
    '',
    'Patient Name:',
    data.fullName,
    '',
    'Gender:',
    data.gender,
    '',
    'Age:',
    String(data.age),
    '',
    'Phone:',
    data.phone,
    '',
    'Email:',
    data.email || 'Not provided',
    '',
    'Department:',
    data.department,
    '',
    'Preferred Date:',
    formatDateLong(data.date),
    '',
    'Preferred Time:',
    formatTime12h(data.time),
    '',
    'Reason for Visit:',
    data.reason || 'Not specified',
    '',
    '━━━━━━━━━━━━━━━━━━━━',
    'Sabari Hospitals',
    'Appointment Request',
  ];
  return lines.join('\n');
}

/**
 * Sends `message` to the hospital's WhatsApp number via the Cloud API.
 * Throws on failure so the caller can respond with an error state.
 */
export async function sendWhatsAppMessage(message) {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const destinationNumber = process.env.WHATSAPP_PHONE_NUMBER;

  if (!accessToken || !phoneNumberId || !destinationNumber) {
    throw new Error(
      'WhatsApp is not configured. Set WHATSAPP_ACCESS_TOKEN, WHATSAPP_PHONE_NUMBER_ID and WHATSAPP_PHONE_NUMBER.'
    );
  }

  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${phoneNumberId}/messages`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to: destinationNumber,
      type: 'text',
      text: { body: message, preview_url: false },
    }),
  });

  if (!response.ok) {
    let details = '';
    try {
      const errBody = await response.json();
      details = errBody?.error?.message || JSON.stringify(errBody);
    } catch {
      details = await response.text();
    }
    throw new Error(`WhatsApp API request failed (${response.status}): ${details}`);
  }

  return response.json();
}
