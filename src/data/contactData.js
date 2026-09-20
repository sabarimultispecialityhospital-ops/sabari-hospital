// Sabari Hospitals Contact Experience Data

export const contactData = {
  hero: {
    eyebrow: "SABARI HOSPITALS / CONTACT",
    titleLine1: "WE'RE HERE",
    titleLine2: "WHEN YOU",
    titleLine3: "NEED US.",
    supportingText: "For appointments, patient support, general enquiries and assistance, reach the Sabari Hospitals team.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1400",
    imageAlt: "Sabari Hospitals serene reception atrium with natural daylight and stone concierge desk",
    caption: "CENTRAL RECEPTION & PATIENT CONCIERGE ATRIUM"
  },

  information: {
    sectionTitle: "GET IN TOUCH",
    description: "Our patient relations executives and clinical coordinators are stationed to assist you with transparent consultations, admissions, and family guidance.",
    channels: [
      {
        label: "PHONE",
        primary: "+1 (800) 123-4567",
        secondary: "Mon – Sat, 8:00 AM – 8:00 PM IST",
        action: "CALL US →",
        href: "tel:+18001234567"
      },
      {
        label: "EMAIL",
        primary: "care@sabarihospitals.com",
        secondary: "Responses within 2 business hours",
        action: "EMAIL US →",
        href: "mailto:care@sabarihospitals.com"
      },
      {
        label: "CAMPUS ADDRESS",
        primary: "123 Medical Boulevard",
        secondary: "Healthcare District, City, ST 12345",
        action: "GET DIRECTIONS →",
        href: "#find-sabari"
      },
      {
        label: "24/7 EMERGENCY",
        primary: "+1 (800) 123-4567",
        secondary: "Dedicated trauma resuscitation desk",
        action: "EMERGENCY HOTLINE →",
        href: "tel:+18001234567",
        isEmergency: true
      }
    ]
  },

  support: {
    title: "PATIENT SUPPORT",
    copy: "Need help before, during or after your visit? Our team is available to guide you.",
    services: [
      {
        id: "patient-support",
        title: "Patient Support Desk",
        description: "Assistance with room reservations, language interpretation, insurance pre-authorization, and personal care guides.",
        actionLabel: "Contact Support Desk →",
        type: "support"
      },
      {
        id: "patient-feedback",
        title: "Patient Feedback & Experience",
        description: "Your voice shapes our clinical standards. Share your observations, compliments, or suggestions directly with hospital administration.",
        actionLabel: "Submit Feedback →",
        type: "feedback"
      },
      {
        id: "appointment-assistance",
        title: "Appointment Assistance",
        description: "Direct liaison to connect you with the appropriate medical specialty, diagnostic timing, and pre-consultation preparations.",
        actionLabel: "Book Appointment →",
        href: "/book-appointment",
        type: "appointment"
      }
    ]
  },

  location: {
    title: "FIND SABARI",
    address: "123 Medical Boulevard, Healthcare District, City, ST 12345",
    landmark: "Directly accessible via Main Arterial Road, Gate 1 & 2",
    timings: [
      { label: "Outpatient Services (OPD)", hours: "08:00 AM – 08:00 PM (Monday – Saturday)" },
      { label: "Emergency & Trauma Bay", hours: "24 Hours / 7 Days a Week" },
      { label: "Diagnostic Imaging & Labs", hours: "24 Hours Service" },
      { label: "Inpatient Visiting Hours", hours: "11:00 AM – 01:00 PM & 05:00 PM – 07:00 PM" }
    ],
    parking: "Complimentary underground and surface valet parking available for patients and attendants at Gate 1."
  },

  emergency: {
    title: "NEED IMMEDIATE CARE?",
    supportingText: "For medical emergencies, contact our emergency team or visit the hospital immediately.",
    phone: "+1 (800) 123-4567",
    actionText: "EMERGENCY CONTACT →"
  },

  careers: {
    title: "WORK WITH SABARI",
    text: "Explore opportunities to contribute to compassionate, high-quality healthcare.",
    ctaText: "VIEW CAREERS →",
    href: "/about/careers"
  }
};
