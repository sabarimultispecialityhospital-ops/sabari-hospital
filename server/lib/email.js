import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'node:path';

let transporter = null;
let lastConfigKey = null;

/**
 * Returns a configured Nodemailer transporter using SMTP credentials from process.env.
 * Throws a descriptive error if SMTP credentials are not configured.
 */
export function getMailTransporter() {
  try {
    dotenv.config({ path: path.resolve(process.cwd(), '.env'), override: true });
  } catch {
    // fallback if path resolution fails
    dotenv.config({ override: true });
  }

  const host = process.env.SMTP_HOST?.trim();
  const rawPort = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER?.trim();
  // Strip any internal or surrounding spaces from Google App Passwords
  const pass = process.env.SMTP_PASSWORD?.replace(/\s+/g, '').trim();

  if (!host || !user || !pass) {
    throw new Error(
      'SMTP email is not configured. Please set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD in environment variables.'
    );
  }

  const isGmail = host.toLowerCase().includes('gmail');
  const port = isGmail && (rawPort === 587 || !rawPort) ? 465 : (rawPort || 587);
  const isSecure = port === 465;

  const currentConfigKey = `${host}:${port}:${user}:${pass}`;
  if (!transporter || lastConfigKey !== currentConfigKey) {
    lastConfigKey = currentConfigKey;
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: isSecure,
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
    });
  }

  return transporter;
}

/**
 * Builds the plain-text email body matching the hospital specification.
 * If no specific doctor was selected, the Preferred Doctor line is omitted.
 */
export function formatAppointmentEmailText(data) {
  const fullName = data.fullName || 'Not provided';
  const gender = data.gender || 'Not specified';
  const age = data.age !== undefined && data.age !== null ? String(data.age) : 'Not specified';
  const phone = data.phone || 'Not provided';
  const email = data.email || 'Not provided';
  const department = data.department || 'Not specified';
  const date = data.date || 'Not specified';
  const time = data.time || 'Not specified';
  const reason = data.reason || 'Not specified';

  const doctorVal = typeof data.doctor === 'string' ? data.doctor.trim() : '';
  const isDoctorOmitted = !doctorVal ||
    /^not\s*specified/i.test(doctorVal) ||
    /any\s*specialist/i.test(doctorVal) ||
    doctorVal.toLowerCase() === 'none' ||
    doctorVal.toLowerCase() === 'n/a';

  const doctorLine = !isDoctorOmitted ? `Preferred Doctor: ${doctorVal}\n` : '';

  return `NEW APPOINTMENT REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━

PATIENT DETAILS

Full Name: ${fullName}
Gender: ${gender}
Age: ${age}
Phone Number: ${phone}
Email: ${email}

APPOINTMENT DETAILS

Department / Speciality: ${department}
${doctorLine}Preferred Date: ${date}
Preferred Time: ${time}

REASON FOR VISIT

${reason}

━━━━━━━━━━━━━━━━━━━━━━━━
Sabari Hospitals
Appointment Request`.replace(/\n{3,}/g, '\n\n');
}

/**
 * Builds a clean, professional HTML version of the appointment email.
 * If no specific doctor was selected, the Preferred Doctor row is omitted.
 */
export function formatAppointmentEmailHtml(data) {
  const fullName = data.fullName || 'Not provided';
  const gender = data.gender || 'Not specified';
  const age = data.age !== undefined && data.age !== null ? String(data.age) : 'Not specified';
  const phone = data.phone || 'Not provided';
  const email = data.email || 'Not provided';
  const department = data.department || 'Not specified';
  const date = data.date || 'Not specified';
  const time = data.time || 'Not specified';
  const reason = data.reason || 'Not specified';

  const doctorVal = typeof data.doctor === 'string' ? data.doctor.trim() : '';
  const isDoctorOmitted = !doctorVal ||
    /^not\s*specified/i.test(doctorVal) ||
    /any\s*specialist/i.test(doctorVal) ||
    doctorVal.toLowerCase() === 'none' ||
    doctorVal.toLowerCase() === 'n/a';

  const doctorRow = !isDoctorOmitted ? `
          <tr>
            <td width="38%" style="color: #64748b; font-weight: 500;">Preferred Doctor:</td>
            <td style="color: #0f172a; font-weight: 600;">${doctorVal}</td>
          </tr>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Appointment Request</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f9fa; margin: 0; padding: 24px; color: #1a202c; line-height: 1.5;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.04);">
    <tr>
      <td style="background-color: #0B4A8B; padding: 24px 32px; color: #ffffff;">
        <h1 style="margin: 0; font-size: 20px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase;">New Appointment Request</h1>
        <p style="margin: 6px 0 0 0; font-size: 13px; color: #b8d5f3;">Sabari Hospitals — Digital Appointment Desk</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 28px 32px;">
        <h2 style="font-size: 13px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #00A99D; margin: 0 0 16px 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">Patient Details</h2>
        <table width="100%" border="0" cellspacing="0" cellpadding="4" style="font-size: 14px; margin-bottom: 24px;">
          <tr>
            <td width="38%" style="color: #64748b; font-weight: 500;">Full Name:</td>
            <td style="color: #0f172a; font-weight: 600;">${fullName}</td>
          </tr>
          <tr>
            <td style="color: #64748b; font-weight: 500;">Gender:</td>
            <td style="color: #0f172a;">${gender}</td>
          </tr>
          <tr>
            <td style="color: #64748b; font-weight: 500;">Age:</td>
            <td style="color: #0f172a;">${age}</td>
          </tr>
          <tr>
            <td style="color: #64748b; font-weight: 500;">Phone Number:</td>
            <td style="color: #0f172a; font-weight: 600;"><a href="tel:${phone}" style="color: #0B4A8B; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr>
            <td style="color: #64748b; font-weight: 500;">Email:</td>
            <td style="color: #0f172a;">${email !== 'Not provided' ? `<a href="mailto:${email}" style="color: #0B4A8B; text-decoration: none;">${email}</a>` : 'Not provided'}</td>
          </tr>
        </table>

        <h2 style="font-size: 13px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #00A99D; margin: 0 0 16px 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">Appointment Details</h2>
        <table width="100%" border="0" cellspacing="0" cellpadding="4" style="font-size: 14px; margin-bottom: 24px;">
          <tr>
            <td width="38%" style="color: #64748b; font-weight: 500;">Department / Speciality:</td>
            <td style="color: #0f172a; font-weight: 600;">${department}</td>
          </tr>${doctorRow}
          <tr>
            <td width="38%" style="color: #64748b; font-weight: 500;">Preferred Date:</td>
            <td style="color: #0f172a; font-weight: 600;">${date}</td>
          </tr>
          <tr>
            <td width="38%" style="color: #64748b; font-weight: 500;">Preferred Time:</td>
            <td style="color: #0f172a; font-weight: 600;">${time}</td>
          </tr>
        </table>

        <h2 style="font-size: 13px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #00A99D; margin: 0 0 16px 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">Reason for Visit</h2>
        <div style="background-color: #f8fafc; border-left: 3px solid #00A99D; padding: 12px 16px; font-size: 14px; color: #334155; white-space: pre-wrap; margin-bottom: 24px;">${reason}</div>

        <p style="font-size: 12px; color: #94a3b8; margin: 24px 0 0 0; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center;">
          Sabari Hospitals &bull; Appointment Request Notification
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Sends the appointment email to the hospital using Nodemailer.
 */
export async function sendAppointmentEmail(data) {
  const transporter = getMailTransporter();
  const receiver = process.env.APPOINTMENT_RECEIVER || 'sabarimultispecialityhospital@gmail.com';
  const fromAddress = process.env.SMTP_FROM || `"Sabari Hospitals Appointments" <${process.env.SMTP_USER}>`;

  const textBody = formatAppointmentEmailText(data);
  const htmlBody = formatAppointmentEmailHtml(data);

  const mailOptions = {
    from: fromAddress,
    to: receiver,
    subject: 'New Appointment Request — Sabari Hospitals',
    text: textBody,
    html: htmlBody,
  };

  // Requirement: "Use the patient's submitted email as replyTo, NOT as the From address."
  if (data.email && typeof data.email === 'string' && data.email.trim().length > 0) {
    mailOptions.replyTo = data.email.trim();
  }

  const info = await transporter.sendMail(mailOptions);
  return info;
}
