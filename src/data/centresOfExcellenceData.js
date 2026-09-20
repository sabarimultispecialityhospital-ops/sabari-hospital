// Centre of Excellence Unified Data Architecture
// Covers 6 Main Categories and 14 Dedicated Sub-Services - With 100% Unique Photography

export const centreCategories = [
  {
    id: "medical-care",
    number: "01",
    title: "MEDICAL CARE",
    slug: "medical-care",
    tagline: "CARE THAT UNDERSTANDS THE WHOLE YOU.",
    shortDescription: "Comprehensive diagnostic assessment, chronic disease management, and integrated internal medicine delivered by experienced physicians.",
    heroImage: "/centres/medical-care.jpg",
    alt: "Physician consultation in internal medicine suite",
    services: [
      {
        slug: "diabetic-care",
        title: "Diabetic Care"
      },
      {
        slug: "pulmonology",
        title: "Pulmonology"
      },
      {
        slug: "general-medical-care",
        title: "General Medical Care"
      }
    ]
  },
  {
    id: "surgical-care",
    number: "02",
    title: "SURGICAL CARE",
    slug: "surgical-care",
    tagline: "PRECISION SURGICAL INTERVENTION & PERIOPERATIVE SAFETY.",
    shortDescription: "Advanced surgical theatres, minimally invasive procedures, and comprehensive perioperative anaesthetic management focused on safety and recovery.",
    heroImage: "/centres/surgical-care.jpg",
    alt: "Surgical team in sterile operating theatre",
    services: [
      {
        slug: "surgical-services",
        title: "Surgical Services"
      },
      {
        slug: "anaesthesia-perioperative-care",
        title: "Anaesthesia & Perioperative Care"
      }
    ]
  },
  {
    id: "womens-health",
    number: "03",
    title: "WOMEN'S HEALTH",
    slug: "womens-health",
    tagline: "DIGNIFIED, CONTINUOUS CARE ACROSS EVERY STAGE OF LIFE.",
    shortDescription: "Empathetic clinical support spanning routine gynaecological wellness, high-risk antenatal care, and modern labour & delivery facilities.",
    heroImage: "/centres/womens-health.jpg",
    alt: "Healthcare specialist in compassionate clinical consultation",
    services: [
      {
        slug: "obstetrics",
        title: "Obstetrics"
      },
      {
        slug: "gynaecology",
        title: "Gynaecology"
      },
      {
        slug: "labour-delivery",
        title: "Labour & Delivery"
      }
    ]
  },
  {
    id: "cardiac-care",
    number: "04",
    title: "CARDIAC CARE",
    slug: "cardiac-care",
    tagline: "DEDICATED CARDIOVASCULAR HEALTH & PREVENTIVE EXCELLENCE.",
    shortDescription: "Specialist cardiovascular assessment, clinical monitoring, ECG/Echocardiography, and preventative heart wellness management.",
    heroImage: "/centres/cardiac-care.jpg",
    alt: "Cardiology consultation and heart health diagnostic suite",
    services: [
      {
        slug: "cardiac-services",
        title: "Cardiac Services"
      }
    ]
  },
  {
    id: "critical-care",
    number: "05",
    title: "CRITICAL CARE",
    slug: "critical-care",
    tagline: "24/7 RAPID RESPONSE, INTENSIVE MONITORING & RESUSCITATION.",
    shortDescription: "Round-the-clock intensive care unit (ICU), dedicated acute resuscitation protocols, inpatient accommodation, and rapid emergency ambulance dispatch.",
    heroImage: "/centres/critical-care.jpg",
    alt: "Intensive care unit and clinical monitoring station",
    services: [
      {
        slug: "inpatient-care",
        title: "Inpatient Care"
      },
      {
        slug: "critical-care",
        title: "Critical Care"
      },
      {
        slug: "ambulance-services",
        title: "Ambulance Services"
      }
    ]
  },
  {
    id: "diagnostics",
    number: "06",
    title: "DIAGNOSTICS",
    slug: "diagnostics",
    tagline: "ACCURACY, CLARITY & SCIENTIFIC PATHOLOGY STANDARDS.",
    shortDescription: "High-precision laboratory pathology diagnostics, digital radiology, and structured physical rehabilitation to restore mobility and health.",
    heroImage: "/centres/diagnostics.jpg",
    alt: "Diagnostic pathology laboratory and medical instrumentation",
    services: [
      {
        slug: "laboratory-services",
        title: "Laboratory Services"
      },
      {
        slug: "physiotherapy",
        title: "Physiotherapy"
      }
    ]
  }
];

// Linear ordered list of all 14 sub-services for prev/next indexing
export const orderedSubServices = [
  { categorySlug: "medical-care", serviceSlug: "diabetic-care" },
  { categorySlug: "medical-care", serviceSlug: "pulmonology" },
  { categorySlug: "medical-care", serviceSlug: "general-medical-care" },
  { categorySlug: "surgical-care", serviceSlug: "surgical-services" },
  { categorySlug: "surgical-care", serviceSlug: "anaesthesia-perioperative-care" },
  { categorySlug: "womens-health", serviceSlug: "obstetrics" },
  { categorySlug: "womens-health", serviceSlug: "gynaecology" },
  { categorySlug: "womens-health", serviceSlug: "labour-delivery" },
  { categorySlug: "cardiac-care", serviceSlug: "cardiac-services" },
  { categorySlug: "critical-care", serviceSlug: "inpatient-care" },
  { categorySlug: "critical-care", serviceSlug: "critical-care" },
  { categorySlug: "critical-care", serviceSlug: "ambulance-services" },
  { categorySlug: "diagnostics", serviceSlug: "laboratory-services" },
  { categorySlug: "diagnostics", serviceSlug: "physiotherapy" }
];

// Detailed Sub-Service Data (14 dedicated services, each with 100% unique imagery)
export const subServicesData = {
  // --- MEDICAL CARE ---
  "medical-care/diabetic-care": {
    slug: "diabetic-care",
    categorySlug: "medical-care",
    categoryNumber: "01",
    categoryTitle: "MEDICAL CARE",
    serviceNumber: "01",
    title: "DIABETIC CARE",
    headline: "COMPREHENSIVE GLYCAEMIC MANAGEMENT & LONG-TERM WELLNESS.",
    heroImage: "/centres/diabetic-care.jpg",
    alt: "Clinical endocrinology and blood glucose assessment",
    introduction: "Diabetic care at Sabari Hospital is structured around evidence-based glycaemic control, patient education, and proactive prevention of microvascular and macrovascular complications.",
    whyItMatters: "Diabetes mellitus is a chronic condition that demands consistent monitoring of blood glucose, HbA1c, renal function, and cardiovascular health. Structured intervention reduces long-term systemic risks and preserves quality of life.",
    ourApproach: "Our diabetology team combines regular biomarker testing, personalised nutrition counseling, lifestyle modifications, and medication titration to create sustainable management plans tailored to each individual.",
    keyServices: [
      "Type 1 and Type 2 diabetes comprehensive outpatient care",
      "Continuous glucose monitoring and routine HbA1c evaluations",
      "Diabetic foot examinations and peripheral neuropathy screening",
      "Nutritional therapy, weight management, and lifestyle education",
      "Co-management of diabetic kidney and cardiovascular risks"
    ],
    relatedServices: [
      { categorySlug: "medical-care", serviceSlug: "pulmonology", title: "Pulmonology" },
      { categorySlug: "medical-care", serviceSlug: "general-medical-care", title: "General Medical Care" },
      { categorySlug: "diagnostics", serviceSlug: "laboratory-services", title: "Laboratory Services" }
    ]
  },

  "medical-care/pulmonology": {
    slug: "pulmonology",
    categorySlug: "medical-care",
    categoryNumber: "01",
    categoryTitle: "MEDICAL CARE",
    serviceNumber: "02",
    title: "PULMONOLOGY",
    headline: "ADVANCED RESPIRATORY MEDICINE & PULMONARY CARE.",
    heroImage: "/centres/pulmonology.jpg",
    alt: "Pulmonary diagnostic consultation and chest health review",
    introduction: "Our pulmonology service offers specialist diagnosis, monitoring, and therapeutic interventions for acute and chronic conditions of the respiratory system, lungs, and bronchial passages.",
    whyItMatters: "Respiratory conditions such as asthma, COPD, chronic cough, and sleep-related breathing disorders can severely restrict daily activity. Early spirometry and clinical assessment prevent irreversible decline in lung function.",
    ourApproach: "Led by certified pulmonologists, care integrates diagnostic spirometry, digital chest imaging, allergy evaluations, and respiratory rehabilitation in close coordination with critical care and internal medicine.",
    keyServices: [
      "Clinical evaluation of asthma, chronic bronchitis, and COPD",
      "Pulmonary function testing (Spirometry) and lung capacity checks",
      "Diagnosis and management of sleep apnoea and nocturnal dyspnoea",
      "Post-respiratory infection recovery and pulmonary rehabilitation",
      "Smoking cessation guidance and chronic cough investigations"
    ],
    relatedServices: [
      { categorySlug: "medical-care", serviceSlug: "general-medical-care", title: "General Medical Care" },
      { categorySlug: "critical-care", serviceSlug: "critical-care", title: "Critical Care" },
      { categorySlug: "diagnostics", serviceSlug: "physiotherapy", title: "Physiotherapy" }
    ]
  },

  "medical-care/general-medical-care": {
    slug: "general-medical-care",
    categorySlug: "medical-care",
    categoryNumber: "01",
    categoryTitle: "MEDICAL CARE",
    serviceNumber: "03",
    title: "GENERAL MEDICAL CARE",
    headline: "PATIENT-CENTRED INTERNAL MEDICINE & PREVENTIVE HEALTH.",
    heroImage: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=1200",
    alt: "General physician discussing treatment with patient",
    introduction: "General medical care provides comprehensive adult primary and secondary healthcare, coordinating preventative evaluations, acute illness management, and multi-specialty referrals.",
    whyItMatters: "Broad-spectrum internal medicine ensures early detection of systemic conditions, continuous oversight of complex medical histories, and rationalized medication therapy.",
    ourApproach: "Our general physicians conduct thorough, unhurried clinical histories, review lifestyle markers, and integrate laboratory diagnostics to diagnose common fevers, infections, metabolic disorders, and geriatric health concerns.",
    keyServices: [
      "Comprehensive annual health check-ups and preventive screenings",
      "Acute fever, seasonal illness, and viral infection management",
      "Hypertension and metabolic syndrome diagnosis and stabilization",
      "Adult immunization, health risk stratification, and preventive guidance",
      "Integrated coordination with surgical, cardiac, and diagnostic teams"
    ],
    relatedServices: [
      { categorySlug: "medical-care", serviceSlug: "diabetic-care", title: "Diabetic Care" },
      { categorySlug: "cardiac-care", serviceSlug: "cardiac-services", title: "Cardiac Services" },
      { categorySlug: "diagnostics", serviceSlug: "laboratory-services", title: "Laboratory Services" }
    ]
  },

  // --- SURGICAL CARE ---
  "surgical-care/surgical-services": {
    slug: "surgical-services",
    categorySlug: "surgical-care",
    categoryNumber: "02",
    categoryTitle: "SURGICAL CARE",
    serviceNumber: "01",
    title: "SURGICAL SERVICES",
    headline: "MINIMALLY INVASIVE & GENERAL SURGICAL EXCELLENCE.",
    heroImage: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80&w=1200",
    alt: "Surgeons performing procedure in modern sterile operation theatre",
    introduction: "Our surgical department delivers planned elective and emergency procedures across general, laparoscopic, gastrointestinal, and trauma surgery within high-specification laminar air flow theatres.",
    whyItMatters: "Modern surgical practice emphasizes precision technique, minimal tissue trauma, reduced infection rates, and accelerated postoperative recovery for optimal clinical outcomes.",
    ourApproach: "Operating within stringent sterilization protocols, our surgeons employ laparoscopy whenever clinically indicated to minimize incision size, reduce postoperative discomfort, and speed return to normal activities.",
    keyServices: [
      "Minimally invasive laparoscopic cholecystectomy, appendectomy, and hernia repairs",
      "General abdominal surgery, gastrointestinal interventions, and biopsy procedures",
      "Elective soft-tissue, thyroid, and endocrine surgical management",
      "Pre-operative diagnostic workup and post-operative surgical wound monitoring",
      "Seamless round-the-clock emergency surgical availability"
    ],
    relatedServices: [
      { categorySlug: "surgical-care", serviceSlug: "anaesthesia-perioperative-care", title: "Anaesthesia & Perioperative Care" },
      { categorySlug: "critical-care", serviceSlug: "inpatient-care", title: "Inpatient Care" },
      { categorySlug: "diagnostics", serviceSlug: "laboratory-services", title: "Laboratory Services" }
    ]
  },

  "surgical-care/anaesthesia-perioperative-care": {
    slug: "anaesthesia-perioperative-care",
    categorySlug: "surgical-care",
    categoryNumber: "02",
    categoryTitle: "SURGICAL CARE",
    serviceNumber: "02",
    title: "ANAESTHESIA & PERIOPERATIVE CARE",
    headline: "SAFETY, MULTIMODAL ANALGESIA & CRITICAL MONITORING.",
    heroImage: "https://images.unsplash.com/photo-1583912267670-6575ad472688?auto=format&fit=crop&q=80&w=1200",
    alt: "Anaesthesiologist monitoring patient vital signs during procedure",
    introduction: "Dedicated anaesthesiology and perioperative care ensure patient stability, haemodynamic control, and pain relief before, during, and after surgical operations.",
    whyItMatters: "Comprehensive pre-anaesthesia evaluation and advanced intra-operative monitoring safeguard patients across diverse age groups, co-morbidities, and procedure complexities.",
    ourApproach: "Led by senior anaesthesiologists, we formulate tailored anaesthetic plans utilizing general anaesthesia, regional nerve blocks, spinal/epidural techniques, and multimodal post-operative analgesia.",
    keyServices: [
      "Thorough pre-anaesthetic clinical review and physiological risk assessment",
      "General, spinal, epidural, and peripheral regional nerve block anaesthesia",
      "Continuous haemodynamic, oxygenation, and depth of anaesthesia monitoring",
      "Post-anaesthesia care unit (PACU) recovery oversight and emergency stabilization",
      "Multimodal pain management strategies for smooth post-surgical healing"
    ],
    relatedServices: [
      { categorySlug: "surgical-care", serviceSlug: "surgical-services", title: "Surgical Services" },
      { categorySlug: "critical-care", serviceSlug: "critical-care", title: "Critical Care" },
      { categorySlug: "womens-health", serviceSlug: "labour-delivery", title: "Labour & Delivery" }
    ]
  },

  // --- WOMEN'S HEALTH ---
  "womens-health/obstetrics": {
    slug: "obstetrics",
    categorySlug: "womens-health",
    categoryNumber: "03",
    categoryTitle: "WOMEN'S HEALTH",
    serviceNumber: "01",
    title: "OBSTETRICS",
    headline: "NURTURING ANTENATAL CARE & MATERNAL SAFETY.",
    heroImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1200",
    alt: "Obstetrician providing attentive antenatal consultation to expecting mother",
    introduction: "Our obstetrics service accompanies expecting mothers through every phase of pregnancy, providing continuous antenatal screenings, maternal health evaluations, and ultrasound coordination.",
    whyItMatters: "Attentive maternal-foetal monitoring ensures early detection of gestational diabetes, pre-eclampsia, and foetal growth conditions, safeguarding mother and child throughout pregnancy.",
    ourApproach: "We blend clinical vigilance with warm, reassuring guidance. Every expectant family receives individualized birth planning, nutritional counseling, and responsive specialist access.",
    keyServices: [
      "Routine antenatal care checks, maternal vitals, and foetal heartbeat monitoring",
      "Screening for gestational diabetes, pregnancy-induced hypertension, and anaemia",
      "Foetal growth and anomaly ultrasound coordination",
      "Pre-conception counseling, genetic screening referrals, and prenatal nutrition",
      "Emergency obstetric response and high-risk pregnancy co-management"
    ],
    relatedServices: [
      { categorySlug: "womens-health", serviceSlug: "gynaecology", title: "Gynaecology" },
      { categorySlug: "womens-health", serviceSlug: "labour-delivery", title: "Labour & Delivery" },
      { categorySlug: "diagnostics", serviceSlug: "laboratory-services", title: "Laboratory Services" }
    ]
  },

  "womens-health/gynaecology": {
    slug: "gynaecology",
    categorySlug: "womens-health",
    categoryNumber: "03",
    categoryTitle: "WOMEN'S HEALTH",
    serviceNumber: "02",
    title: "GYNAECOLOGY",
    headline: "CONFIDENTIAL, EXPERT HEALTHCARE ACROSS EVERY LIFE STAGE.",
    heroImage: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1200",
    alt: "Gynaecological consultation room with calm, private atmosphere",
    introduction: "Sabari Hospital's gynaecology clinic provides compassionate outpatient consultations and surgical solutions for reproductive health, hormonal balance, and wellness throughout a woman's lifetime.",
    whyItMatters: "Proactive gynaecological checks and early cervical and breast screenings facilitate timely diagnosis of benign and malignant conditions, preserving health and peace of mind.",
    ourApproach: "Our female healthcare specialists prioritize privacy, comfort, and informed decision-making, offering empathetic counsel for menstrual health, fertility concerns, and menopausal care.",
    keyServices: [
      "Routine pelvic examinations, Pap smear screenings, and HPV evaluations",
      "Diagnosis and management of menstrual irregularities, PCOS, and endometriosis",
      "Fibroid evaluations, pelvic pain assessment, and minimally invasive gynaecologic surgery",
      "Menopause transition counseling, bone density screening, and hormone guidance",
      "Family planning counseling, reproductive health reviews, and wellness guidance"
    ],
    relatedServices: [
      { categorySlug: "womens-health", serviceSlug: "obstetrics", title: "Obstetrics" },
      { categorySlug: "surgical-care", serviceSlug: "surgical-services", title: "Surgical Services" },
      { categorySlug: "diagnostics", serviceSlug: "laboratory-services", title: "Laboratory Services" }
    ]
  },

  "womens-health/labour-delivery": {
    slug: "labour-delivery",
    categorySlug: "womens-health",
    categoryNumber: "03",
    categoryTitle: "WOMEN'S HEALTH",
    serviceNumber: "03",
    title: "LABOUR & DELIVERY",
    headline: "SAFE, SUPPORTIVE & MODERN MATERNITY BIRTH SUITES.",
    heroImage: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1200",
    alt: "Modern equipped maternity birth suite with continuous monitoring",
    introduction: "Our labour and delivery suite is designed to provide a calm, secure, and medically prepared environment for welcoming new life into the world with dignity.",
    whyItMatters: "A safe birth experience requires seamless coordination between obstetricians, certified midwives, anaesthetists, and neonatologists ready for normal and complex deliveries.",
    ourApproach: "We support natural physiological birth while maintaining immediate access to surgical theatres and neonatal resuscitation equipment should emergency care become necessary.",
    keyServices: [
      "Modern birthing suites equipped with continuous cardiotocography (CTG) monitoring",
      "Epidural analgesia and pain relief administered by specialist anaesthetists",
      "Comprehensive normal vaginal delivery and planned or emergency caesarean section",
      "Immediate newborn assessment, thermal care, and breastfeeding initiation support",
      "Postpartum inpatient recovery rooms and dedicated maternal nursing support"
    ],
    relatedServices: [
      { categorySlug: "womens-health", serviceSlug: "obstetrics", title: "Obstetrics" },
      { categorySlug: "surgical-care", serviceSlug: "anaesthesia-perioperative-care", title: "Anaesthesia & Perioperative Care" },
      { categorySlug: "critical-care", serviceSlug: "inpatient-care", title: "Inpatient Care" }
    ]
  },

  // --- CARDIAC CARE ---
  "cardiac-care/cardiac-services": {
    slug: "cardiac-services",
    categorySlug: "cardiac-care",
    categoryNumber: "04",
    categoryTitle: "CARDIAC CARE",
    serviceNumber: "01",
    title: "CARDIAC SERVICES",
    headline: "PREVENTIVE CARDIOLOGY & CLINICAL HEART EVALUATIONS.",
    heroImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1200",
    alt: "Cardiac diagnostic monitor and echocardiogram analysis",
    introduction: "Cardiac Services at Sabari Hospital delivers thorough cardiovascular assessments, diagnostic ECG/Echocardiography, hypertension management, and preventative risk stratification.",
    whyItMatters: "Cardiovascular diseases remain a leading health challenge. Regular screening and prompt evaluation of chest symptoms, palpitations, or shortness of breath are crucial for heart health.",
    ourApproach: "Our medical team utilizes standard non-invasive diagnostic tools, blood biomarker profiling, and structured lifestyle guidance to diagnose cardiovascular conditions and prevent cardiac events.",
    keyServices: [
      "12-Lead Electrocardiography (ECG) and clinical heart rhythm evaluations",
      "Hypertension workup, ambulatory blood pressure monitoring, and medical titration",
      "Cardiovascular risk assessment for patients with diabetes and hyperlipidaemia",
      "Evaluation of chest discomfort, shortness of breath, and palpitations",
      "Emergency cardiac stabilization protocols and rapid specialist referrals"
    ],
    relatedServices: [
      { categorySlug: "medical-care", serviceSlug: "general-medical-care", title: "General Medical Care" },
      { categorySlug: "medical-care", serviceSlug: "diabetic-care", title: "Diabetic Care" },
      { categorySlug: "critical-care", serviceSlug: "critical-care", title: "Critical Care" }
    ]
  },

  // --- CRITICAL CARE ---
  "critical-care/inpatient-care": {
    slug: "inpatient-care",
    categorySlug: "critical-care",
    categoryNumber: "05",
    categoryTitle: "CRITICAL CARE",
    serviceNumber: "01",
    title: "INPATIENT CARE",
    headline: "ATTENTIVE NURSING & MODERN HOSPITAL ACCOMMODATION.",
    heroImage: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1200",
    alt: "Comfortable inpatient hospital room with clean clinical design",
    introduction: "Inpatient Care provides comfortable, hygienic, and closely monitored accommodation for patients undergoing medical observation, surgical recovery, or post-acute medical stabilization.",
    whyItMatters: "A restful healing environment combined with responsive nursing oversight ensures that clinical therapies are administered promptly and recovery is closely monitored.",
    ourApproach: "Patients receive daily physician rounds, 24/7 dedicated nursing attention, tailored dietary plans, and seamless access to diagnostic and pharmacy services.",
    keyServices: [
      "Private and semi-private clinical rooms with patient call systems",
      "24/7 registered nursing supervision, vitals tracking, and medication administration",
      "Daily attending physician visits and multidisciplinary care reviews",
      "In-hospital nutrition and dietary planning tailored to clinical needs",
      "Coordinated discharge planning with medication and home care instructions"
    ],
    relatedServices: [
      { categorySlug: "critical-care", serviceSlug: "critical-care", title: "Critical Care" },
      { categorySlug: "surgical-care", serviceSlug: "surgical-services", title: "Surgical Services" },
      { categorySlug: "diagnostics", serviceSlug: "physiotherapy", title: "Physiotherapy" }
    ]
  },

  "critical-care/critical-care": {
    slug: "critical-care",
    categorySlug: "critical-care",
    categoryNumber: "05",
    categoryTitle: "CRITICAL CARE",
    serviceNumber: "02",
    title: "CRITICAL CARE",
    headline: "24/7 INTENSIVE CARE UNIT (ICU) & ADVANCED LIFE SUPPORT.",
    heroImage: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&q=80&w=1200",
    alt: "Modern Intensive Care Unit with vital life support technology",
    introduction: "Our Intensive Care Unit (ICU) is equipped for the continuous observation, life support, and targeted medical treatment of critically ill patients facing acute organ dysfunction.",
    whyItMatters: "Acute medical crises demand rapid multi-system monitoring, invasive airway and haemodynamic support, and round-the-clock intensivist oversight to safeguard patient survival.",
    ourApproach: "Operating on low nurse-to-patient ratios, our intensive care unit combines mechanical ventilation, multi-parameter monitoring, and strict infection control protocols under experienced critical care supervision.",
    keyServices: [
      "Advanced multiparameter vital monitoring (ECG, invasive BP, oxygenation, ETCO2)",
      "Mechanical ventilation support and non-invasive positive pressure therapies",
      "Management of acute respiratory distress, severe sepsis, and metabolic crises",
      "Post-major surgical intensive monitoring and haemodynamic stabilization",
      "Dedicated, certified critical care nursing and rapid response teams"
    ],
    relatedServices: [
      { categorySlug: "critical-care", serviceSlug: "ambulance-services", title: "Ambulance Services" },
      { categorySlug: "surgical-care", serviceSlug: "anaesthesia-perioperative-care", title: "Anaesthesia & Perioperative Care" },
      { categorySlug: "medical-care", serviceSlug: "pulmonology", title: "Pulmonology" }
    ]
  },

  "critical-care/ambulance-services": {
    slug: "ambulance-services",
    categorySlug: "critical-care",
    categoryNumber: "05",
    categoryTitle: "CRITICAL CARE",
    serviceNumber: "03",
    title: "AMBULANCE SERVICES",
    headline: "RAPID EMERGENCY RESPONSE & PRE-HOSPITAL TRANSPORT.",
    heroImage: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80&w=1200",
    alt: "Emergency medical ambulance with life support transport capability",
    introduction: "Sabari Hospital operates round-the-clock emergency ambulance services equipped with essential life-support systems to safely transport acute medical and trauma patients to our emergency facility.",
    whyItMatters: "Timely pre-hospital intervention and rapid transit during critical medical windows significantly reduce mortality in cardiac, stroke, and trauma emergencies.",
    ourApproach: "Our ambulance fleet is manned by trained paramedics and emergency medical technicians capable of basic and advanced cardiac life support, oxygen therapy, and real-time hospital dispatch coordination.",
    keyServices: [
      "24/7 dedicated emergency dispatch hotline and rapid response mobilization",
      "Onboard oxygen systems, defibrillator, suction, and emergency medications",
      "Trained paramedics for patient stabilization, splinting, and transit care",
      "Inter-facility patient transfers and critical medical repatriation",
      "Direct handover protocol to the hospital emergency resuscitation team"
    ],
    relatedServices: [
      { categorySlug: "critical-care", serviceSlug: "critical-care", title: "Critical Care" },
      { categorySlug: "critical-care", serviceSlug: "inpatient-care", title: "Inpatient Care" },
      { categorySlug: "surgical-care", serviceSlug: "surgical-services", title: "Surgical Services" }
    ]
  },

  // --- DIAGNOSTICS ---
  "diagnostics/laboratory-services": {
    slug: "laboratory-services",
    categorySlug: "diagnostics",
    categoryNumber: "06",
    categoryTitle: "DIAGNOSTICS",
    serviceNumber: "01",
    title: "LABORATORY SERVICES",
    headline: "QUALITY PATHOLOGY, BIOCHEMISTRY & ACCURATE TESTING.",
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
    alt: "Clinical laboratory diagnostic equipment and microscope",
    introduction: "Our central clinical laboratory operates high-precision automated analyzers covering clinical biochemistry, haematology, clinical pathology, and microbiology.",
    whyItMatters: "Clinical decisions rely heavily on accurate, timely laboratory findings. Rigorous internal quality control ensures doctors receive dependable diagnostic data.",
    ourApproach: "Staffed by qualified medical laboratory technicians and pathologists, the lab operates with standardized calibration protocols, rapid sample processing, and direct digital reporting.",
    keyServices: [
      "Complete blood count (CBC), ESR, and peripheral blood smear examinations",
      "Routine biochemistry including renal, liver, lipid, and cardiac biomarker profiles",
      "Glycated haemoglobin (HbA1c), fasting glucose, and oral glucose tolerance tests",
      "Urinalysis, stool examinations, and infectious disease screenings",
      "Rapid turnaround time for emergency inpatient and ICU sample analysis"
    ],
    relatedServices: [
      { categorySlug: "diagnostics", serviceSlug: "physiotherapy", title: "Physiotherapy" },
      { categorySlug: "medical-care", serviceSlug: "diabetic-care", title: "Diabetic Care" },
      { categorySlug: "medical-care", serviceSlug: "general-medical-care", title: "General Medical Care" }
    ]
  },

  "diagnostics/physiotherapy": {
    slug: "physiotherapy",
    categorySlug: "diagnostics",
    categoryNumber: "06",
    categoryTitle: "DIAGNOSTICS",
    serviceNumber: "02",
    title: "PHYSIOTHERAPY",
    headline: "EVIDENCE-BASED REHABILITATION & FUNCTIONAL RECOVERY.",
    heroImage: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=1200",
    alt: "Physiotherapist guiding patient through mobility rehabilitation",
    introduction: "Our physiotherapy and physical rehabilitation department helps patients recover physical function, relieve chronic pain, and regain independence following injury, surgery, or prolonged hospitalization.",
    whyItMatters: "Targeted physical therapy accelerates mobility recovery, reduces reliance on pain medication, restores joint motion, and prevents secondary muscular atrophy.",
    ourApproach: "Qualified physiotherapists perform customized biomechanical assessments and deliver hands-on manual therapy, therapeutic exercise regimens, electrotherapy, and ergonomic guidance.",
    keyServices: [
      "Post-operative orthopaedic and surgical rehabilitation (joint replacement, fractures)",
      "Management of chronic musculoskeletal back, neck, and shoulder discomfort",
      "Neurological rehabilitation for stroke recovery and balance improvement",
      "Chest physiotherapy and breathing exercises for respiratory patients",
      "Personalized home exercise programming and posture counseling"
    ],
    relatedServices: [
      { categorySlug: "diagnostics", serviceSlug: "laboratory-services", title: "Laboratory Services" },
      { categorySlug: "surgical-care", serviceSlug: "surgical-services", title: "Surgical Services" },
      { categorySlug: "medical-care", serviceSlug: "pulmonology", title: "Pulmonology" }
    ]
  }
};
