// Sabari Hospitals Facilities Architecture & Experience Data
// 7 Major Categories & 20 Dedicated Sub-Services - 100% Unique Architectural & Clinical Imagery

export const facilityCategories = [
  {
    id: "patient-services",
    number: "01",
    title: "PATIENT SERVICES",
    slug: "patient-services",
    tagline: "EVERY STEP OF YOUR VISIT, THOUGHTFULLY STREAMLINED.",
    shortDescription: "Seamless inpatient admissions, comprehensive patient support navigators, transparent feedback systems, and comfortable recovery spaces.",
    heroImage: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=1200",
    alt: "Patient services reception and welcoming clinical desk",
    services: [
      { slug: "ip-admission-process", title: "IP Admission Process" },
      { slug: "patient-support", title: "Patient Support" },
      { slug: "patient-feedback", title: "Patient Feedback" },
      { slug: "rooms", title: "Rooms" }
    ]
  },
  {
    id: "emergency-critical-care",
    number: "02",
    title: "EMERGENCY & CRITICAL CARE",
    slug: "emergency-critical-care",
    tagline: "24/7 RAPID TRAUMA RESPONSE & INTENSIVE RESUSCITATION.",
    shortDescription: "Advanced life support ambulance fleets, round-the-clock emergency trauma suites, and multi-disciplinary intensive care beds.",
    heroImage: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1200",
    alt: "Emergency critical care resuscitation bay and monitoring",
    services: [
      { slug: "ambulance", title: "Ambulance" },
      { slug: "emergency-services", title: "Emergency Services" },
      { slug: "intensive-care", title: "Intensive Care" }
    ]
  },
  {
    id: "diagnostics",
    number: "03",
    title: "DIAGNOSTICS",
    slug: "diagnostics",
    tagline: "HIGH-PRECISION IMAGING & LABORATORY PATHOLOGY STANDARDS.",
    shortDescription: "Automated biochemistry analyzers, specialized histopathology biopsy services, and cutting-edge digital radiology and imaging systems.",
    heroImage: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1200",
    alt: "Diagnostic pathology laboratory and medical instrumentation",
    services: [
      { slug: "laboratory-services", title: "Laboratory Services" },
      { slug: "histopathology", title: "Histopathology" },
      { slug: "radiology-imaging", title: "Radiology & Imaging" }
    ]
  },
  {
    id: "pharmacy-blood-services",
    number: "04",
    title: "PHARMACY & BLOOD SERVICES",
    slug: "pharmacy-blood-services",
    tagline: "ROUND-THE-CLOCK MEDICATION SAFETY & LIFE-SAVING TRANSFUSIONS.",
    shortDescription: "Full-service 24/7 inpatient & outpatient pharmacy, temperature-monitored pharmaceutical storage, and a certified blood bank facility.",
    heroImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200",
    alt: "Modern hospital pharmacy dispensing counter and medicine inventory",
    services: [
      { slug: "pharmacy", title: "Pharmacy" },
      { slug: "blood-bank", title: "Blood Bank" }
    ]
  },
  {
    id: "infrastructure",
    number: "05",
    title: "INFRASTRUCTURE",
    slug: "infrastructure",
    tagline: "PURPOSE-BUILT ARCHITECTURE FOR CLINICAL EXCELLENCE.",
    shortDescription: "The new super speciality clinical block, advanced laminar airflow modular operation theatres, and medical engineering infrastructure.",
    heroImage: "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?auto=format&fit=crop&q=80&w=1200",
    alt: "Architectural modern hospital building and healthcare infrastructure",
    services: [
      { slug: "new-super-speciality-block", title: "New Super Speciality Block" },
      { slug: "operation-theatre", title: "Operation Theatre" },
      { slug: "modern-medical-infrastructure", title: "Modern Medical Infrastructure" }
    ]
  },
  {
    id: "accommodation",
    number: "06",
    title: "ACCOMMODATION",
    slug: "accommodation",
    tagline: "RESTFUL, HYGIENIC HEALING SPACES FOR PATIENTS & FAMILIES.",
    shortDescription: "Private inpatient suites, executive recovery rooms, companion amenities, and serene healing environments designed for rest and dignity.",
    heroImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
    alt: "Peaceful private hospital inpatient room with modern amenities",
    services: [
      { slug: "rooms", title: "Rooms" },
      { slug: "patient-accommodation", title: "Patient Accommodation" }
    ]
  },
  {
    id: "other-services",
    number: "07",
    title: "OTHER SERVICES",
    slug: "other-services",
    tagline: "EXPRESISED MATERNITY CARE & INSTITUTIONAL HEALTHCARE SERVICES.",
    shortDescription: "Family-focused modern birthing suites, comprehensive hospital scope of clinical services, and departmental governance frameworks.",
    heroImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
    alt: "Specialized clinical consultation suites and hospital support spaces",
    services: [
      { slug: "birthing-centre", title: "Birthing Centre" },
      { slug: "hospital-scope-of-services", title: "Hospital Scope of Services" },
      { slug: "department-scope-of-services", title: "Department Scope of Services" }
    ]
  }
];

// Linear ordered list of all 20 sub-services for sequential prev/next navigation
export const orderedFacilityServices = [
  { categorySlug: "patient-services", serviceSlug: "ip-admission-process" },
  { categorySlug: "patient-services", serviceSlug: "patient-support" },
  { categorySlug: "patient-services", serviceSlug: "patient-feedback" },
  { categorySlug: "patient-services", serviceSlug: "rooms" },
  { categorySlug: "emergency-critical-care", serviceSlug: "ambulance" },
  { categorySlug: "emergency-critical-care", serviceSlug: "emergency-services" },
  { categorySlug: "emergency-critical-care", serviceSlug: "intensive-care" },
  { categorySlug: "diagnostics", serviceSlug: "laboratory-services" },
  { categorySlug: "diagnostics", serviceSlug: "histopathology" },
  { categorySlug: "diagnostics", serviceSlug: "radiology-imaging" },
  { categorySlug: "pharmacy-blood-services", serviceSlug: "pharmacy" },
  { categorySlug: "pharmacy-blood-services", serviceSlug: "blood-bank" },
  { categorySlug: "infrastructure", serviceSlug: "new-super-speciality-block" },
  { categorySlug: "infrastructure", serviceSlug: "operation-theatre" },
  { categorySlug: "infrastructure", serviceSlug: "modern-medical-infrastructure" },
  { categorySlug: "accommodation", serviceSlug: "rooms" },
  { categorySlug: "accommodation", serviceSlug: "patient-accommodation" },
  { categorySlug: "other-services", serviceSlug: "birthing-centre" },
  { categorySlug: "other-services", serviceSlug: "hospital-scope-of-services" },
  { categorySlug: "other-services", serviceSlug: "department-scope-of-services" }
];

// Detailed 20 Individual Facility Services (100% Unique Imagery & Clean Content)
export const facilityServicesData = {
  // --- 01 PATIENT SERVICES ---
  "patient-services/ip-admission-process": {
    slug: "ip-admission-process",
    categorySlug: "patient-services",
    categoryNumber: "01",
    categoryTitle: "PATIENT SERVICES",
    serviceNumber: "01",
    title: "IP ADMISSION PROCESS",
    headline: "STREAMLINED INPATIENT ADMISSION & TRANSITIONAL CARE.",
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    alt: "Inpatient admission administrative desk and patient paperwork",
    introduction: "Our inpatient admission desk coordinates rapid, dignified transitions from outpatient evaluation or emergency arrival directly into clinical accommodation.",
    overview: "The Inpatient Admission Process at Sabari Hospital is organized to minimize administrative wait times for patients and their accompanying families. From bed allocation and medical record verification to insurance pre-authorization and attendant orientation, each step is overseen by dedicated admission counselors.",
    howItWorks: "Upon a physician's admission recommendation, our registration executive verifies patient details, explains room categories, coordinates insurance or corporate clearance, and introduces the patient care navigator who guides the family to their assigned clinical suite.",
    patientInformation: "Please carry your doctor's admission note, government identification proof, health insurance policy documents, and relevant prior medical diagnostic files for immediate processing.",
    relatedServices: [
      { categorySlug: "patient-services", serviceSlug: "rooms", title: "Rooms" },
      { categorySlug: "patient-services", serviceSlug: "patient-support", title: "Patient Support" },
      { categorySlug: "accommodation", serviceSlug: "patient-accommodation", title: "Patient Accommodation" }
    ]
  },

  "patient-services/patient-support": {
    slug: "patient-support",
    categorySlug: "patient-services",
    categoryNumber: "01",
    categoryTitle: "PATIENT SERVICES",
    serviceNumber: "02",
    title: "PATIENT SUPPORT",
    headline: "COMPASSIONATE ASSISTANCE & DEDICATED CARE NAVIGATORS.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200",
    alt: "Patient relations coordinator speaking with patient family",
    introduction: "Patient Support executives assist families with orientation, financial guidance, language facilitation, and coordinated clinical communication throughout their hospital stay.",
    overview: "Navigating hospital services can feel challenging during times of medical concern. Our Patient Support team operates as dedicated advocates for patients, ensuring that families understand treatment schedules, visitor guidelines, and available hospital resources.",
    howItWorks: "Support executives are positioned across all inpatient floors and outpatient waiting lounges, offering personalized help with appointment coordination, wheelchair assistance, and immediate administrative resolution.",
    patientInformation: "Available daily from 7:00 AM to 9:00 PM across all hospital wings. For bedside support, dial our internal support extension from your room telephone.",
    relatedServices: [
      { categorySlug: "patient-services", serviceSlug: "ip-admission-process", title: "IP Admission Process" },
      { categorySlug: "patient-services", serviceSlug: "patient-feedback", title: "Patient Feedback" },
      { categorySlug: "accommodation", serviceSlug: "patient-accommodation", title: "Patient Accommodation" }
    ]
  },

  "patient-services/patient-feedback": {
    slug: "patient-feedback",
    categorySlug: "patient-services",
    categoryNumber: "01",
    categoryTitle: "PATIENT SERVICES",
    serviceNumber: "03",
    title: "PATIENT FEEDBACK",
    headline: "TRANSPARENT QUALITY MONITORING & CONTINUOUS IMPROVEMENT.",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    alt: "Hospital quality improvement and patient feedback desk",
    introduction: "Sabari Hospital maintains a structured, transparent patient feedback framework that actively guides quality assurance, service improvements, and clinical responsiveness.",
    overview: "Every patient's voice informs our clinical and operational standards. We systematically evaluate feedback regarding nursing responsiveness, doctor communication, room cleanliness, dietary care, and billing transparency.",
    howItWorks: "Patients can submit feedback through bedside digital tablets, written feedback forms at nurse stations, or post-discharge telephone follow-ups conducted by our hospital quality assurance team.",
    patientInformation: "All feedback is reviewed directly by hospital leadership and department heads to implement corrective actions and recognize outstanding staff members.",
    relatedServices: [
      { categorySlug: "patient-services", serviceSlug: "patient-support", title: "Patient Support" },
      { categorySlug: "other-services", serviceSlug: "hospital-scope-of-services", title: "Hospital Scope of Services" }
    ]
  },

  "patient-services/rooms": {
    slug: "rooms",
    categorySlug: "patient-services",
    categoryNumber: "01",
    categoryTitle: "PATIENT SERVICES",
    serviceNumber: "04",
    title: "ROOMS",
    headline: "HYGIENIC, WELL-APPOINTED RECOVERY SUITES.",
    heroImage: "https://images.unsplash.com/photo-1586773860383-dab5f3bc1bcc?auto=format&fit=crop&q=80&w=1200",
    alt: "Modern hospital inpatient private room with large window",
    introduction: "Patient rooms are designed around acoustic comfort, natural daylight, infection prevention protocols, and ergonomic attendant seating to facilitate restorative healing.",
    overview: "We offer private suites, semi-private rooms, and specialized care rooms equipped with medical gas lines, multi-position motorized beds, and patient nurse-call systems.",
    howItWorks: "Room selection is finalized during the admission process based on medical requirements and personal preference, with prompt room sanitization before each patient occupancy.",
    patientInformation: "Each room features en-suite bathroom facilities, companion resting couch, high-speed Wi-Fi, and individual climate controls.",
    relatedServices: [
      { categorySlug: "accommodation", serviceSlug: "patient-accommodation", title: "Patient Accommodation" },
      { categorySlug: "patient-services", serviceSlug: "ip-admission-process", title: "IP Admission Process" }
    ]
  },

  // --- 02 EMERGENCY & CRITICAL CARE ---
  "emergency-critical-care/ambulance": {
    slug: "ambulance",
    categorySlug: "emergency-critical-care",
    categoryNumber: "02",
    categoryTitle: "EMERGENCY & CRITICAL CARE",
    serviceNumber: "01",
    title: "AMBULANCE",
    headline: "ROUND-THE-CLOCK ADVANCED LIFE SUPPORT MOBILIZATION.",
    heroImage: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&q=80&w=1200",
    alt: "Emergency ambulance vehicle at hospital emergency trauma bay",
    introduction: "Our emergency ambulance service provides rapid 24/7 pre-hospital resuscitation, paramedic stabilization, and emergency transit across the city and surrounding areas.",
    overview: "Equipped with transport ventilators, multi-parameter defibrillators, oxygen systems, and critical emergency medications, our ambulances function as mobile intensive care units.",
    howItWorks: "Calls to our 24/7 emergency dispatch hotline immediately activate our paramedic response crew, while telemetry relays patient vital parameters to our awaiting trauma team.",
    patientInformation: "Emergency hotline: +1 (800) 123-4567. Keep location landmarks and basic patient condition details ready when contacting dispatch.",
    relatedServices: [
      { categorySlug: "emergency-critical-care", serviceSlug: "emergency-services", title: "Emergency Services" },
      { categorySlug: "emergency-critical-care", serviceSlug: "intensive-care", title: "Intensive Care" }
    ]
  },

  "emergency-critical-care/emergency-services": {
    slug: "emergency-services",
    categorySlug: "emergency-critical-care",
    categoryNumber: "02",
    categoryTitle: "EMERGENCY & CRITICAL CARE",
    serviceNumber: "02",
    title: "EMERGENCY SERVICES",
    headline: "24/7 ACUTE TRAUMA, CARDIAC & MEDICAL TRIAGE.",
    heroImage: "https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&q=80&w=1200",
    alt: "Hospital emergency department clinical triage and trauma team",
    introduction: "Our 24-hour Emergency Department is prepared for sudden medical illnesses, cardiac emergencies, respiratory distress, and acute accidental trauma.",
    overview: "Staffed by emergency physicians, certified trauma nurses, and on-call specialist surgeons, the emergency wing operates dedicated triage, resuscitation, and observation bays.",
    howItWorks: "Upon arrival, patients undergo immediate triage assessment prioritizing life-threatening symptoms, with direct access to digital radiography, CT scanning, and emergency operation theatres.",
    patientInformation: "Immediate zero-delay entry for acute cardiac, stroke, trauma, and respiratory emergencies. Dedicated emergency registration desk.",
    relatedServices: [
      { categorySlug: "emergency-critical-care", serviceSlug: "ambulance", title: "Ambulance" },
      { categorySlug: "emergency-critical-care", serviceSlug: "intensive-care", title: "Intensive Care" },
      { categorySlug: "diagnostics", serviceSlug: "radiology-imaging", title: "Radiology & Imaging" }
    ]
  },

  "emergency-critical-care/intensive-care": {
    slug: "intensive-care",
    categorySlug: "emergency-critical-care",
    categoryNumber: "02",
    categoryTitle: "EMERGENCY & CRITICAL CARE",
    serviceNumber: "03",
    title: "INTENSIVE CARE",
    headline: "COMPREHENSIVE MULTI-DISCIPLINARY ICU LIFE SUPPORT.",
    heroImage: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=1200",
    alt: "High-dependency Intensive Care Unit clinical telemetry monitoring",
    introduction: "Our Intensive Care Unit (ICU) delivers close medical surveillance, advanced hemodynamic monitoring, and targeted life-support interventions for critically ill patients.",
    overview: "Featuring a 1:1 or 1:2 nurse-to-patient ratio, our ICU incorporates invasive vital telemetry, mechanical ventilators, dialysis connectivity, and continuous intensivist oversight.",
    howItWorks: "Admissions follow strict clinical criteria from emergency, surgical theatres, or inpatient wards, managed by a collaborative multidisciplinary critical care team.",
    patientInformation: "Restricted visiting hours apply in the ICU to safeguard patient recovery and minimize infection risks. Attendant briefings occur daily during morning rounds.",
    relatedServices: [
      { categorySlug: "emergency-critical-care", serviceSlug: "emergency-services", title: "Emergency Services" },
      { categorySlug: "infrastructure", serviceSlug: "operation-theatre", title: "Operation Theatre" }
    ]
  },

  // --- 03 DIAGNOSTICS ---
  "diagnostics/laboratory-services": {
    slug: "laboratory-services",
    categorySlug: "diagnostics",
    categoryNumber: "03",
    categoryTitle: "DIAGNOSTICS",
    serviceNumber: "01",
    title: "LABORATORY SERVICES",
    headline: "AUTOMATED BIOCHEMISTRY, HEMATOLOGY & CLINICAL TESTING.",
    heroImage: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=1200",
    alt: "Clinical laboratory diagnostic test tubes and analysis instrumentation",
    introduction: "Our central clinical laboratory operates round-the-clock delivering reliable, quality-controlled testing across clinical biochemistry, hematology, and microbiology.",
    overview: "Equipped with automated diagnostic analyzers, barcoded sample tracking, and computerized result transmission, our laboratory supports rapid clinical decision-making.",
    howItWorks: "Samples collected at outpatient phlebotomy stations or inpatient bedsides are immediately barcoded, processed, and analyzed under stringent internal and external quality control protocols.",
    patientInformation: "Fasting requirements may apply for lipid profiles, blood sugar, and thyroid panels. Outpatient phlebotomy operates from 7:00 AM onwards.",
    relatedServices: [
      { categorySlug: "diagnostics", serviceSlug: "histopathology", title: "Histopathology" },
      { categorySlug: "diagnostics", serviceSlug: "radiology-imaging", title: "Radiology & Imaging" }
    ]
  },

  "diagnostics/histopathology": {
    slug: "histopathology",
    categorySlug: "diagnostics",
    categoryNumber: "03",
    categoryTitle: "DIAGNOSTICS",
    serviceNumber: "02",
    title: "HISTOPATHOLOGY",
    headline: "MICROSCOPIC TISSUE BIOPSY & CELLULAR PATHOLOGY.",
    heroImage: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200",
    alt: "Biopsy specimen slide preparation and high-powered microscope examination",
    introduction: "Our histopathology and cytopathology unit specializes in microscopic examination of tissue biopsies, surgical resection specimens, and fluid cytology.",
    overview: "Accurate tissue diagnosis forms the foundation of modern oncology and surgical medicine. Experienced pathologists evaluate cellular architecture to establish definitive diagnoses.",
    howItWorks: "Tissue specimens excised in surgery are fixed, sectioned, stained with specialized histochemical stains, and examined under high-resolution microscopy by consultant pathologists.",
    patientInformation: "Biopsy processing typically requires 48 to 72 hours for complete histological processing and detailed diagnostic sign-off.",
    relatedServices: [
      { categorySlug: "diagnostics", serviceSlug: "laboratory-services", title: "Laboratory Services" },
      { categorySlug: "infrastructure", serviceSlug: "operation-theatre", title: "Operation Theatre" }
    ]
  },

  "diagnostics/radiology-imaging": {
    slug: "radiology-imaging",
    categorySlug: "diagnostics",
    categoryNumber: "03",
    categoryTitle: "DIAGNOSTICS",
    serviceNumber: "03",
    title: "RADIOLOGY & IMAGING",
    headline: "DIGITAL X-RAY, ULTRASONOGRAPHY & DIAGNOSTIC CLARITY.",
    heroImage: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=1200",
    alt: "Modern digital radiology imaging console and radiological diagnostic display",
    introduction: "The radiology suite offers high-resolution digital X-rays, multi-frequency ultrasonography, color Doppler, and cross-sectional diagnostic imaging.",
    overview: "Our imaging department combines radiation-sparing digital radiography with certified radiologist reporting to evaluate chest, skeletal, abdominal, and vascular conditions.",
    howItWorks: "Imaging procedures are performed by certified radiographers, with immediate digital PACS transmission allowing attending physicians to review scans in real time.",
    patientInformation: "Some abdominal and pelvic scans require drinking water or fasting. Please verify specific scan instructions at the radiology reception.",
    relatedServices: [
      { categorySlug: "diagnostics", serviceSlug: "laboratory-services", title: "Laboratory Services" },
      { categorySlug: "emergency-critical-care", serviceSlug: "emergency-services", title: "Emergency Services" }
    ]
  },

  // --- 04 PHARMACY & BLOOD SERVICES ---
  "pharmacy-blood-services/pharmacy": {
    slug: "pharmacy",
    categorySlug: "pharmacy-blood-services",
    categoryNumber: "04",
    categoryTitle: "PHARMACY & BLOOD SERVICES",
    serviceNumber: "01",
    title: "PHARMACY",
    headline: "24/7 GENUINE PHARMACEUTICAL DISPENSING & STORAGE.",
    heroImage: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1200",
    alt: "Hospital pharmacy dispensary and organized medicine storage",
    introduction: "Our in-house hospital pharmacy operates 24/7, providing authentic pharmaceuticals, emergency medications, surgical disposables, and pharmacist counseling.",
    overview: "Maintaining strict temperature-controlled storage and electronic batch inventory, the pharmacy serves both hospital inpatients and outpatient clinic visitors.",
    howItWorks: "Prescriptions entered into the hospital information system are cross-checked for dosage and drug interactions by registered pharmacists prior to dispensing.",
    patientInformation: "Located on the ground floor near the main lobby. Open 24 hours daily, including weekends and public holidays.",
    relatedServices: [
      { categorySlug: "pharmacy-blood-services", serviceSlug: "blood-bank", title: "Blood Bank" },
      { categorySlug: "patient-services", serviceSlug: "ip-admission-process", title: "IP Admission Process" }
    ]
  },

  "pharmacy-blood-services/blood-bank": {
    slug: "blood-bank",
    categorySlug: "pharmacy-blood-services",
    categoryNumber: "04",
    categoryTitle: "PHARMACY & BLOOD SERVICES",
    serviceNumber: "02",
    title: "BLOOD BANK",
    headline: "SAFE, TESTED BLOOD STORAGE & CROSS-MATCHING CAPABILITY.",
    heroImage: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=1200",
    alt: "Hospital blood bank refrigerated storage and transfusion testing",
    introduction: "Our licensed blood storage and transfusion unit guarantees the availability of screened, cross-matched blood components for surgical, trauma, and medical patients.",
    overview: "Adhering to national transfusion safety guidelines, all blood units undergo rigorous serological screening and mandatory cross-match testing before release.",
    howItWorks: "Physician transfusion requests trigger immediate blood grouping, antibody screening, and cross-matching to provide safe packed red blood cells, plasma, or platelets.",
    patientInformation: "Voluntary donor drives and replacement donation services operate under clinical supervision. Contact the blood bank desk for blood group availability.",
    relatedServices: [
      { categorySlug: "pharmacy-blood-services", serviceSlug: "pharmacy", title: "Pharmacy" },
      { categorySlug: "infrastructure", serviceSlug: "operation-theatre", title: "Operation Theatre" },
      { categorySlug: "emergency-critical-care", serviceSlug: "emergency-services", title: "Emergency Services" }
    ]
  },

  // --- 05 INFRASTRUCTURE ---
  "infrastructure/new-super-speciality-block": {
    slug: "new-super-speciality-block",
    categorySlug: "infrastructure",
    categoryNumber: "05",
    categoryTitle: "INFRASTRUCTURE",
    serviceNumber: "01",
    title: "NEW SUPER SPECIALITY BLOCK",
    headline: "EXPANDED CLINICAL CAPACITY & PURPOSE-BUILT ARCHITECTURE.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    alt: "Modern architectural super speciality hospital building exterior",
    introduction: "The newly constructed Super Speciality Block expands Sabari Hospital's inpatient bed capacity, diagnostic wings, specialist OPD chambers, and critical care units.",
    overview: "Engineered to international healthcare building standards, the facility features wide patient corridors, natural ventilation courtyards, infection-control zoning, and acoustic insulation.",
    howItWorks: "The block houses specialized departments, outpatient consultation suites, dedicated procedure rooms, and centralized patient service desks on each floor.",
    patientInformation: "Direct covered corridor connectivity links the new super speciality block seamlessly with the main hospital campus and emergency trauma entrance.",
    relatedServices: [
      { categorySlug: "infrastructure", serviceSlug: "operation-theatre", title: "Operation Theatre" },
      { categorySlug: "infrastructure", serviceSlug: "modern-medical-infrastructure", title: "Modern Medical Infrastructure" }
    ]
  },

  "infrastructure/operation-theatre": {
    slug: "operation-theatre",
    categorySlug: "infrastructure",
    categoryNumber: "05",
    categoryTitle: "INFRASTRUCTURE",
    serviceNumber: "02",
    title: "OPERATION THEATRE",
    headline: "MODULAR LAMINAR AIR FLOW SURGICAL SUITES.",
    heroImage: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1200",
    alt: "Modular sterile surgical operating theatre suite with LED surgical lighting",
    introduction: "Our modular surgical operating suites incorporate ultra-clean laminar airflow, HEPA filtration, anti-static flooring, and advanced laparoscopic imaging towers.",
    overview: "Designed for surgical precision and zero-infection tolerance, each theatre accommodates general, laparoscopic, orthopedic, gynaecological, and emergency trauma surgery.",
    howItWorks: "Strict three-zone sterile barrier protocols ensure air sterility, positive pressure air currents, and seamless sterile tool circulation for surgical safety.",
    patientInformation: "Patients are monitored in the dedicated Post-Anaesthesia Care Unit (PACU) before transferring back to their recovery rooms.",
    relatedServices: [
      { categorySlug: "infrastructure", serviceSlug: "modern-medical-infrastructure", title: "Modern Medical Infrastructure" },
      { categorySlug: "emergency-critical-care", serviceSlug: "intensive-care", title: "Intensive Care" }
    ]
  },

  "infrastructure/modern-medical-infrastructure": {
    slug: "modern-medical-infrastructure",
    categorySlug: "infrastructure",
    categoryNumber: "05",
    categoryTitle: "INFRASTRUCTURE",
    serviceNumber: "03",
    title: "MODERN MEDICAL INFRASTRUCTURE",
    headline: "CONTINUOUS CENTRAL GAS PIPELINES & UNINTERRUPTED POWER.",
    heroImage: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=1200",
    alt: "Hospital medical engineering infrastructure and clinical systems",
    introduction: "Behind our clinical care lies an engineered hospital infrastructure providing medical oxygen grids, vacuum pipelines, redundant emergency power, and clinical water purification.",
    overview: "Hospital safety depends on continuous support systems. Our infrastructure includes automated dual-generator backup, centralized cryogenic oxygen delivery, and specialized fire containment zoning.",
    howItWorks: "24/7 biomedical engineering and facility maintenance teams continuously monitor medical gas pressures, environmental air changes, and backup electrical grids.",
    patientInformation: "Meets national hospital engineering safety guidelines and fire safety accreditations.",
    relatedServices: [
      { categorySlug: "infrastructure", serviceSlug: "new-super-speciality-block", title: "New Super Speciality Block" },
      { categorySlug: "infrastructure", serviceSlug: "operation-theatre", title: "Operation Theatre" }
    ]
  },

  // --- 06 ACCOMMODATION ---
  "accommodation/rooms": {
    slug: "rooms",
    categorySlug: "accommodation",
    categoryNumber: "06",
    categoryTitle: "ACCOMMODATION",
    serviceNumber: "01",
    title: "ROOMS",
    headline: "COMFORTABLE, DIGNIFIED CLINICAL INPATIENT SUITES.",
    heroImage: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&q=80&w=1200",
    alt: "Private hospital patient room with serene interior and comfortable bed",
    introduction: "Inpatient accommodation at Sabari Hospital is created around privacy, personal comfort, clean air, and attentive bedside nursing care.",
    overview: "Patients can choose from private single rooms, deluxe rooms, and twin sharing accommodation, each featuring ergonomic motorized beds, nurse call buttons, and attached bathrooms.",
    howItWorks: "Room allocation is confirmed during inpatient registration, with daily room sanitization, linen changes, and dietary delivery coordinated seamlessly.",
    patientInformation: "Includes companion couch, reading lighting, TV entertainment, and individual patient wardrobe.",
    relatedServices: [
      { categorySlug: "accommodation", serviceSlug: "patient-accommodation", title: "Patient Accommodation" },
      { categorySlug: "patient-services", serviceSlug: "rooms", title: "Rooms" }
    ]
  },

  "accommodation/patient-accommodation": {
    slug: "patient-accommodation",
    categorySlug: "accommodation",
    categoryNumber: "06",
    categoryTitle: "ACCOMMODATION",
    serviceNumber: "02",
    title: "PATIENT ACCOMMODATION",
    headline: "FAMILY COMFORT, ATTENDANT AMENITIES & SUPPORT SPACES.",
    heroImage: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=1200",
    alt: "Hospital attendant lounge and family rest area with comfortable seating",
    introduction: "Recognizing that healing involves family presence, our patient accommodation services provide dedicated attendant lounges, dietary facilities, and waiting spaces.",
    overview: "Family members of inpatients have access to resting areas, cafeterias, secure locker facilities, and convenient charging stations within the hospital grounds.",
    howItWorks: "Attendant passes issued upon admission allow family members to access patient floors and dedicated overnight attendant facilities.",
    patientInformation: "Visitor passes are managed at the ground floor security reception. One primary attendant is permitted round-the-clock bedside stay in private rooms.",
    relatedServices: [
      { categorySlug: "accommodation", serviceSlug: "rooms", title: "Rooms" },
      { categorySlug: "patient-services", serviceSlug: "patient-support", title: "Patient Support" }
    ]
  },

  // --- 07 OTHER SERVICES ---
  "other-services/birthing-centre": {
    slug: "birthing-centre",
    categorySlug: "other-services",
    categoryNumber: "07",
    categoryTitle: "OTHER SERVICES",
    serviceNumber: "01",
    title: "BIRTHING CENTRE",
    headline: "PRIVATE, WARM & MEDICALLY EQUIPPED MATERNITY BIRTH SUITES.",
    heroImage: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1200",
    alt: "Warm, family-friendly birthing centre suite with modern maternal care equipment",
    introduction: "Our Birthing Centre offers a warm, home-like environment for childbirth while maintaining direct access to emergency obstetric surgical facilities.",
    overview: "Blending compassionate midwifery and obstetric guidance, the birthing suites accommodate labor, delivery, and immediate postpartum recovery in one private, comfortable room.",
    howItWorks: "Expectant mothers are supported throughout labor with continuous foetal monitoring, pain management options, and partner accompaniment.",
    patientInformation: "Prenatal birth suite tours and birth planning sessions can be scheduled through our Women's Health outpatient desk.",
    relatedServices: [
      { categorySlug: "other-services", serviceSlug: "hospital-scope-of-services", title: "Hospital Scope of Services" },
      { categorySlug: "accommodation", serviceSlug: "rooms", title: "Rooms" }
    ]
  },

  "other-services/hospital-scope-of-services": {
    slug: "hospital-scope-of-services",
    categorySlug: "other-services",
    categoryNumber: "07",
    categoryTitle: "OTHER SERVICES",
    serviceNumber: "02",
    title: "HOSPITAL SCOPE OF SERVICES",
    headline: "COMPREHENSIVE CLINICAL DIRECTORY & HEALTHCARE PORTFOLIO.",
    heroImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1200",
    alt: "Institutional hospital clinical management and accredited governance",
    introduction: "The Hospital Scope of Services outlines our authorized medical disciplines, surgical capabilities, diagnostic facilities, and clinical service boundaries.",
    overview: "Sabari Hospital operates as a multi-speciality tertiary healthcare hospital delivering integrated medical care, elective and emergency surgery, and rehabilitation.",
    howItWorks: "Our clinical scope is governed by hospital medical committees and verified annually in accordance with health department accreditations.",
    patientInformation: "Official hospital service catalogs, specialty schedules, and department listings are available at the patient reception desk.",
    relatedServices: [
      { categorySlug: "other-services", serviceSlug: "department-scope-of-services", title: "Department Scope of Services" },
      { categorySlug: "other-services", serviceSlug: "birthing-centre", title: "Birthing Centre" }
    ]
  },

  "other-services/department-scope-of-services": {
    slug: "department-scope-of-services",
    categorySlug: "other-services",
    categoryNumber: "07",
    categoryTitle: "OTHER SERVICES",
    serviceNumber: "03",
    title: "DEPARTMENT SCOPE OF SERVICES",
    headline: "SPECIALTY-SPECIFIC CLINICAL PROTOCOLS & GOVERNANCE.",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
    alt: "Multidisciplinary hospital clinical department heads in meeting",
    introduction: "Department Scope of Services defines the clinical criteria, procedural guidelines, and interdisciplinary referral paths across each hospital department.",
    overview: "Each medical and surgical department adheres to standardized clinical pathways to ensure quality assurance, patient safety, and optimal treatment outcomes.",
    howItWorks: "Department heads review clinical guidelines, audit treatment results, and coordinate multi-speciality tumor and morbidity review boards.",
    patientInformation: "Detailed departmental clinical procedures are coordinated between attending specialists and patient families during consultation.",
    relatedServices: [
      { categorySlug: "other-services", serviceSlug: "hospital-scope-of-services", title: "Hospital Scope of Services" },
      { categorySlug: "patient-services", serviceSlug: "patient-support", title: "Patient Support" }
    ]
  }
};
