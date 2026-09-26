import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Footer } from '../sections/Footer';

export function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | Sabari Hospitals";
    window.scrollTo(0, 0);
  }, []);

  const [values, setValues] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (fieldValues = values) => {
    const temp = { ...errors };

    if ('fullName' in fieldValues) {
      if (!fieldValues.fullName.trim()) {
        temp.fullName = 'Full name is required';
      } else if (fieldValues.fullName.trim().length < 2) {
        temp.fullName = 'Name must be at least 2 characters';
      } else {
        delete temp.fullName;
      }
    }

    if ('phone' in fieldValues) {
      if (!fieldValues.phone.trim()) {
        temp.phone = 'Phone number is required';
      } else if (!/^[0-9+() -]{7,20}$/.test(fieldValues.phone.trim())) {
        temp.phone = 'Please enter a valid phone number';
      } else {
        delete temp.phone;
      }
    }

    if ('email' in fieldValues) {
      if (!fieldValues.email.trim()) {
        temp.email = 'Email address is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValues.email.trim())) {
        temp.email = 'Please enter a valid email address';
      } else {
        delete temp.email;
      }
    }

    if ('subject' in fieldValues) {
      if (!fieldValues.subject.trim()) {
        temp.subject = 'Subject is required';
      } else if (fieldValues.subject.trim().length < 3) {
        temp.subject = 'Subject must be at least 3 characters';
      } else {
        delete temp.subject;
      }
    }

    if ('message' in fieldValues) {
      if (!fieldValues.message.trim()) {
        temp.message = 'Message is required';
      } else if (fieldValues.message.trim().length < 10) {
        temp.message = 'Message must be at least 10 characters';
      } else {
        delete temp.message;
      }
    }

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      validate({ [name]: value });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validate({ [name]: values[name] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      subject: true,
      message: true
    });

    if (validate(values)) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 500);
    }
  };

  const handleReset = () => {
    setValues({
      fullName: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  };

  return (
    <div className="w-full min-h-screen bg-white text-black flex flex-col justify-between selection:bg-neutral-200">
      
      {/* Main Single-Page Contact Section */}
      <main className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-16 pt-[110px] md:pt-[180px] pb-16 md:pb-32 flex-grow">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Section 01 Intro + Section 02 Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            
            {/* Intro */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-[12px] font-mono tracking-[0.24em] uppercase text-neutral-400 font-semibold mb-6 block"
              >
                CONTACT US
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="text-[44px] sm:text-[68px] md:text-[84px] xl:text-[96px] font-display font-light text-black tracking-tight leading-[0.92] uppercase mb-8 break-words"
              >
                LET'S<br />
                CONNECT.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="text-[16px] sm:text-[18px] text-neutral-600 font-light leading-relaxed max-w-md mb-12 lg:mb-16"
              >
                Whether you have a question, need assistance, or would like to connect with our hospital team, we're here to help.
              </motion.p>
            </div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="space-y-8 pt-10 border-t border-neutral-200"
            >
              {/* Phone */}
              <div>
                <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-neutral-400 block mb-1.5">
                  PHONE
                </span>
                <a
                  href="tel:+914222442200"
                  className="text-[19px] sm:text-[21px] font-medium text-black hover:text-neutral-600 transition-colors inline-block"
                >
                  0422-2442200
                </a>
              </div>

              {/* Email */}
              <div>
                <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-neutral-400 block mb-1.5">
                  EMAIL
                </span>
                <a
                  href="mailto:sabarimultispecialityhospital@gmail.com"
                  className="text-[17px] sm:text-[19px] font-medium text-black hover:text-neutral-600 transition-colors break-all inline-block"
                >
                  sabarimultispecialityhospital@gmail.com
                </a>
              </div>

              {/* Location */}
              <div>
                <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-neutral-400 block mb-1.5">
                  LOCATION
                </span>
                <span className="text-[19px] sm:text-[21px] font-medium text-black block">
                  Coimbatore, Tamil Nadu
                </span>
              </div>

              {/* Address Placeholder */}
              <div>
                <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-neutral-400 block mb-1.5">
                  ADDRESS
                </span>
                <p className="text-[16px] sm:text-[18px] text-neutral-700 font-light leading-relaxed">
                  Sabari Multispeciality Hospital,<br />
                  Coimbatore, Tamil Nadu, India.
                </p>
              </div>

              {/* Optional Location Element */}
              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sabari+Multispeciality+Hospital+Coimbatore+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[12px] font-mono font-semibold tracking-wider uppercase text-black hover:opacity-60 transition-opacity"
                >
                  <span>VIEW LOCATION</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                </a>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Section 03 Contact Form */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <h2 className="text-[32px] sm:text-[42px] font-display font-light text-black tracking-tight uppercase mb-3">
                SEND US A MESSAGE
              </h2>
              <p className="text-[15px] sm:text-[16px] text-neutral-600 font-light leading-relaxed">
                Fill in the details below and our team will get back to you.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="py-16 border-t border-b border-neutral-200"
                >
                  <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-400 block mb-3">
                    ACKNOWLEDGEMENT
                  </span>

                  <h3 className="text-[36px] sm:text-[48px] font-display font-light text-black uppercase tracking-tight mb-4">
                    MESSAGE SENT.
                  </h3>

                  <p className="text-[16px] sm:text-[18px] text-neutral-600 font-light leading-relaxed mb-10 max-w-lg">
                    Thank you. Our team will get back to you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="group inline-flex items-center gap-3 text-[12px] font-mono font-semibold tracking-wider uppercase text-black hover:opacity-60 transition-opacity"
                  >
                    <span>Send Another Message</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                  className="space-y-12"
                >
                  {/* FULL NAME */}
                  <div className="relative">
                    <label
                      htmlFor="fullName"
                      className="block text-[11px] font-mono tracking-[0.2em] uppercase text-black mb-2"
                    >
                      FULL NAME
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your full name"
                      className={`w-full bg-transparent border-b ${errors.fullName && touched.fullName ? 'border-neutral-900' : 'border-neutral-300'} py-3.5 text-[16px] text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors rounded-none`}
                    />
                    {errors.fullName && touched.fullName && (
                      <span className="block text-[11px] font-mono text-neutral-500 mt-1.5">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* PHONE NUMBER */}
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="block text-[11px] font-mono tracking-[0.2em] uppercase text-black mb-2"
                    >
                      PHONE NUMBER
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your phone number"
                      className={`w-full bg-transparent border-b ${errors.phone && touched.phone ? 'border-neutral-900' : 'border-neutral-300'} py-3.5 text-[16px] text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors rounded-none`}
                    />
                    {errors.phone && touched.phone && (
                      <span className="block text-[11px] font-mono text-neutral-500 mt-1.5">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* EMAIL ADDRESS */}
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-mono tracking-[0.2em] uppercase text-black mb-2"
                    >
                      EMAIL ADDRESS
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your email address"
                      className={`w-full bg-transparent border-b ${errors.email && touched.email ? 'border-neutral-900' : 'border-neutral-300'} py-3.5 text-[16px] text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors rounded-none`}
                    />
                    {errors.email && touched.email && (
                      <span className="block text-[11px] font-mono text-neutral-500 mt-1.5">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* SUBJECT */}
                  <div className="relative">
                    <label
                      htmlFor="subject"
                      className="block text-[11px] font-mono tracking-[0.2em] uppercase text-black mb-2"
                    >
                      SUBJECT
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={values.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="How can we help you?"
                      className={`w-full bg-transparent border-b ${errors.subject && touched.subject ? 'border-neutral-900' : 'border-neutral-300'} py-3.5 text-[16px] text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors rounded-none`}
                    />
                    {errors.subject && touched.subject && (
                      <span className="block text-[11px] font-mono text-neutral-500 mt-1.5">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* MESSAGE */}
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="block text-[11px] font-mono tracking-[0.2em] uppercase text-black mb-2"
                    >
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Write your message here..."
                      className={`w-full bg-transparent border-b ${errors.message && touched.message ? 'border-neutral-900' : 'border-neutral-300'} py-3.5 text-[16px] text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors rounded-none resize-none`}
                    />
                    {errors.message && touched.message && (
                      <span className="block text-[11px] font-mono text-neutral-500 mt-1.5">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* SUBMIT BUTTON - Sabari Button Style */}
                  <div className="pt-4 flex items-center justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center gap-3 px-9 py-4 bg-black text-white border border-black text-[13px] font-mono font-semibold tracking-[0.08em] uppercase hover:bg-white hover:text-black transition-all duration-200 disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-200">&rarr;</span>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
