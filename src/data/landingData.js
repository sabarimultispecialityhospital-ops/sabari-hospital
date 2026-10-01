export const numbersData = [
  { value: "50+", label: "YEARS OF EXPERIENCE" },
  { value: "100K+", label: "PATIENTS CARED FOR" }
];

export const centresData = [
  { 
    id: "medical-care", 
    num: "01",
    title: "MEDICAL CARE", 
    services: ["Diabetic Care", "Pulmonology", "General Medical Care"],
    image: "/centres/medical-care.png" 
  },
  { 
    id: "surgical-care", 
    num: "02",
    title: "SURGICAL CARE", 
    services: ["Surgical Services", "Anaesthesia & Perioperative Care"],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    id: "womens-health", 
    num: "03",
    title: "WOMEN'S HEALTH", 
    services: ["Obstetrics", "Gynaecology", "Labour & Delivery"],
    image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    id: "cardiac-care", 
    num: "04",
    title: "CARDIAC CARE", 
    services: ["Cardiac Services"],
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    id: "critical-care", 
    num: "05",
    title: "CRITICAL CARE", 
    services: ["Inpatient Care", "Critical Care", "Ambulance Services"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    id: "diagnostics", 
    num: "06",
    title: "DIAGNOSTICS", 
    services: ["Laboratory Services", "Physiotherapy"],
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200" 
  }
];

export const facilitiesData = [
  "ADVANCED DIAGNOSTICS",
  "MODERN OPERATING THEATRES",
  "CRITICAL CARE",
  "PHARMACY & BLOOD SERVICES",
  "PATIENT ACCOMMODATION"
];

export const doctorsData = [
  { 
    id: "dr-saravana-kumar",
    num: "01",
    name: "Dr. Saravana Kumar S",
    displayName: "DR. SARAVANA KUMAR S",
    role: "Chairman & Managing Director",
    speciality: "Anaesthesiologist",
    subSpeciality: "General & Regional Anaesthesia • Perioperative Care",
    experience: "Over 20 years of clinical experience",
    image: "/doctors/doctor-2.png",
    bio: "Dr. Saravana Kumar S is the Chairman and Managing Director of Sabari Hospital. With over two decades of clinical experience in anaesthesiology and critical care, he is recognized for his leadership across professional medical societies and his dedication to patient safety and surgical perioperative care.",
    education: "M.B.B.S. — JSS Medical College, Mysore",
    postgraduate: "Anaesthesiology — Kasturba Medical College, Manipal",
    additionalExperience: "Worked in ICU at GKNM Hospital for 3 years",
    expertise: [
      "General and regional anaesthetic techniques",
      "Perioperative management",
      "Patient safety",
      "Quality clinical care"
    ],
    leadership: [
      "President, Indian Society of Anaesthesiologists, Coimbatore — 2022–2024",
      "Chairman, IMA Nursing Home Board — 2021–2024"
    ],
    recognition: [
      "Best Doctor Award in Anaesthesiology by IMA Coimbatore — 2022"
    ],
    communityContribution: "Participated in free medical camps and health-awareness programmes through Aim for Seva – Swami Dayananda Saraswathi Hospital, Anaikatti",
    qualifications: [
      "M.B.B.S. — JSS Medical College, Mysore",
      "Anaesthesiology — Kasturba Medical College, Manipal",
      "Chairman & Managing Director, Sabari Hospital",
      "President, Indian Society of Anaesthesiologists, Coimbatore (2022–2024)",
      "Chairman, IMA Nursing Home Board (2021–2024)",
      "Best Doctor Award in Anaesthesiology by IMA Coimbatore (2022)"
    ]
  },
  { 
    id: "dr-mangaleswari",
    num: "02",
    name: "Dr. Mangaleswari",
    displayName: "DR. MANGALESWARI",
    role: "Founder",
    speciality: "Obstetrician & Gynaecologist",
    subSpeciality: "Women's Health & High-Risk Pregnancy",
    experience: "50 Years of Experience",
    image: "/doctors/doctor-1.png",
    bio: "Dr. Mangaleswari is the Founder of Sabari Hospital. With 50 years of clinical experience, her practice is centered on compassionate, comprehensive, and personalised care for women across every phase of life.",
    profileFocus: "Compassionate, comprehensive and personalised care for women across all stages of life.",
    obstetricServices: [
      "Comprehensive antenatal care",
      "Postnatal care",
      "Normal pregnancy management",
      "High-risk pregnancy management",
      "Labour and delivery care",
      "Pregnancy-related counselling and guidance",
      "Management of pregnancy complications"
    ],
    gynaecologicalServices: [
      "Menstrual disorders",
      "PCOS and hormonal disorders",
      "Uterine and ovarian conditions",
      "Gynaecological infections",
      "Menopause and midlife women's health",
      "Family planning and contraceptive counselling",
      "Routine women's health and preventive check-ups"
    ],
    recognition: [
      "Lifetime Achievement Award from IMA Coimbatore — 2019"
    ],
    qualifications: [
      "MBBS",
      "DGO (Obstetrics & Gynaecology)",
      "Founder, Sabari Hospital",
      "50 Years of Experience",
      "Lifetime Achievement Award from IMA Coimbatore (2019)"
    ]
  },
  { 
    id: "dr-rashmi-saravanakumar",
    num: "03",
    name: "Dr. Rashmi Saravanakumar",
    displayName: "DR. RASHMI SARAVANAKUMAR",
    role: "General Physician & Diabetologist",
    speciality: "General Physician & Diabetologist",
    subSpeciality: "Metabolic Disorders & Community Health",
    experience: "8 years clinical experience • 15+ years teaching experience",
    image: "/doctors/doctor-3.png",
    bio: "Dr. Rashmi Saravanakumar is a General Physician & Diabetologist focused on personalised, evidence-based treatment plans for general medicine, advanced diabetes, and metabolic disorders. An accomplished researcher with over 40 published papers, three academic books, and multiple prestigious awards.",
    qualificationsTitle: "MD, MBA(HA), CCEBDM",
    academicExperience: "Over 15 years of teaching experience",
    research: "More than 40 research papers in reputed journals",
    books: [
      "Practical Manual for Physiology — 2022",
      "Tamil version — 2023",
      "Physiology Exam Companion — 2025"
    ],
    recognition: [
      "Best Researcher Award in Medicine — International Scientist Awards on Science and Medicine (2021)",
      "ICON OF INDIA Award — Saveetha Institute of Medical and Technical Sciences (2023)",
      "Best Doctor Award under Research category — Indian Medical Association (2023)"
    ],
    qualifications: [
      "MBBS — Coimbatore Medical College",
      "MD Physiology — PSG Institute of Medical Sciences and Research",
      "MBA (HA) — Hospital Administration",
      "CCEBDM — Certificate Course in Evidence Based Diabetes Management",
      "Best Researcher Award in Medicine (2021)",
      "ICON OF INDIA Award (2023)",
      "Best Doctor Award under Research Category — IMA (2023)"
    ]
  },
  { 
    id: "dr-uthara-vijai-kumar",
    num: "04",
    name: "Dr. Uthara Vijai Kumar",
    displayName: "DR. UTHARA VIJAI KUMAR",
    role: "Consultant Pulmonologist",
    speciality: "Consultant Pulmonologist",
    subSpeciality: "Interventional Pulmonology & Sleep Disorders",
    experience: "Consultant Pulmonologist and Head of Department of Respiratory Therapy",
    image: "/doctors/doctor-5.png",
    bio: "Dr. Uthara Vijai Kumar is a Consultant Pulmonologist and Head of Department of Respiratory Therapy at Sri Lakshmi Medical Centre and Hospital, Coimbatore. She has specialized expertise in interventional pulmonology, EBUS, bronchoscopy, lung cancer, and sleep disorders.",
    currentRole: "Consultant Pulmonologist and Head of Department of Respiratory Therapy, Sri Lakshmi Medical Centre and Hospital, Coimbatore",
    areasOfInterest: [
      "Interventional pulmonology",
      "Lung cancer",
      "Sleep disorders",
      "ILD"
    ],
    proceduralSkills: [
      "Thoracentesis",
      "Chest drain",
      "Bronchoscopy including TBNA and TBLB",
      "Endobronchial Ultrasound (EBUS)",
      "Medical Thoracoscopy"
    ],
    academicContributions: [
      "Poster presentations",
      "Original research article",
      "Review article",
      "Book chapter",
      "Faculty participation",
      "Teaching and mentoring"
    ],
    recognition: [
      "Trailblazer Award at NAPCON 2023, Hyderabad"
    ],
    qualifications: [
      "MBBS — Sri Ramachandra University, Chennai (2009)",
      "DNB Respiratory Diseases — Yashoda Hospitals, Hyderabad (2013)",
      "Diploma in Paediatric Pulmonary Medicine — Shishuka Children's Hospital, Bangalore (2025)",
      "Trailblazer Award at NAPCON 2023, Hyderabad"
    ]
  },
  { 
    id: "dr-deepika-mohankumar",
    num: "05",
    name: "Dr. Deepika Mohankumar PT",
    displayName: "DR. DEEPIKA MOHANKUMAR",
    role: "Physiotherapist",
    speciality: "Physiotherapist",
    subSpeciality: "MPT (Orthopaedics)",
    experience: "Physiotherapist • Former GKNM Hospital, Coimbatore (2014–2016)",
    image: "/doctors/doctor-4.png",
    bio: "Dr. Deepika Mohankumar PT is a Physiotherapist holding an MPT in Orthopaedics and life membership with the Indian Association of Physiotherapists (MIAP). She specializes in women's health, antenatal and postnatal care, orthopaedic rehabilitation, and sports therapy.",
    professionalRole: "Physiotherapist",
    qualification: "MPT (Orthopaedics)",
    membership: "MIAP / Life Member — Indian Association of Physiotherapists (IAP Reg: LA-37851)",
    certifications: [
      "Clinical Sports Physiotherapy",
      "Dry Needling",
      "Pelvic Floor Rehabilitation",
      "Therapeutic Taping",
      "MAT Pilates",
      "Trigger Point Therapy",
      "Spine & Pelvic Manipulation Therapy"
    ],
    coreCompetencies: [
      "Women’s Health Physiotherapy",
      "Antenatal and Postnatal Care",
      "Orthopaedic Physiotherapy & Musculoskeletal Rehabilitation",
      "Sports Injury Assessment & Rehabilitation",
      "Pelvic Floor Rehabilitation",
      "Manual Therapy & Manipulation",
      "Dry Needling & Trigger Point Therapy"
    ],
    qualifications: [
      "MPT (Orthopaedics)",
      "MIAP / Life Member — Indian Association of Physiotherapists (Reg: LA-37851)",
      "Former Physiotherapist — GKNM Hospital, Coimbatore (2014–2016)",
      "Certified in Clinical Sports Physiotherapy & Dry Needling",
      "Certified in Pelvic Floor Rehabilitation & MAT Pilates"
    ]
  },
  { 
    id: "dr-deepika-og",
    num: "06",
    name: "Dr. Deepika",
    displayName: "DR. DEEPIKA",
    role: "Associate Professor",
    speciality: "Obstetrician & Gynaecologist",
    subSpeciality: "Endogynaecology & High Risk Obstetrics",
    experience: "Currently working as Associate Professor",
    image: "/doctors/dr-deepika.png",
    bio: "Dr. Deepika is an Obstetrician & Gynaecologist and Associate Professor. She has completed a Post Doctoral Fellowship in Endogynecology and holds a Diploma in Gynaec Endoscopy from Kiel’s University, Germany. Her areas of interest include high risk obstetrics and laparoscopy.",
    professionalRole: "Associate Professor",
    qualification: "MS (OG), PDF (Endogynaec), DGE (Ger)",
    areasOfInterest: [
      "High risk obstetrics",
      "Laparoscopy",
      "Endogynaecology"
    ],
    academicContributions: [
      "Published papers in national and international journals",
      "Presented numerous papers in national conferences"
    ],
    qualifications: [
      "MS (OG)",
      "Post Doctoral Fellowship in Endogynecology — TN Dr MGR University",
      "Diploma in Gynaec Endoscopy (DGE) — Kiel’s University, Germany"
    ]
  }
];

export const timelineData = [
  { step: "01", title: "ARRIVE" },
  { step: "02", title: "UNDERSTAND" },
  { step: "03", title: "TREAT" },
  { step: "04", title: "RECOVER" },
  { step: "05", title: "FOLLOW UP" }
];
