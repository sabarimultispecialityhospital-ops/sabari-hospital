import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactForm({ presetSubject = '', onClearPreset }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    preferredMethod: 'Email',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (presetSubject) {
      setFormData(prev => ({ ...prev, subject: presetSubject }));
    }
  }, [presetSubject]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate swift submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      subject: '',
      preferredMethod: 'Email',
      message: ''
    });
    if (onClearPreset) onClearPreset();
  };

  return (
    <section id="enquiry" className="w-full py-16 md:py-24 border-b border-neutral-200 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-4">
            <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-neutral-400 block mb-2">
              02 // DIRECT ENQUIRY
            </span>
            <h2 className="text-[32px] sm:text-[44px] font-display font-light text-black tracking-tight uppercase mb-6 leading-[1.05]">
              HOW CAN WE HELP?
            </h2>
            <p className="text-[15px] text-neutral-600 font-light leading-relaxed mb-8">
              Whether preparing for a medical admission, seeking clinical clarification, or requesting medical records, our concierge desk is dedicated to responsive, confidential care.
            </p>

            <div className="space-y-4 pt-6 border-t border-neutral-200 text-[13px] text-neutral-500 font-light">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-black font-medium">01.</span>
                <span>Inquiries reviewed by clinical patient relations daily.</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-black font-medium">02.</span>
                <span>Confidential handling protected under medical privacy protocols.</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-black font-medium">03.</span>
                <span>For emergency resuscitation, please dial our emergency line immediately.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Minimalist Form */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="py-16 px-8 border border-neutral-200 bg-neutral-50/50 flex flex-col items-start justify-center"
                >
                  <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-emerald-600 font-semibold mb-3">
                    MESSAGE TRANSMITTED SUCCESSFULLY
                  </span>
                  <h3 className="text-[26px] sm:text-[32px] font-display font-light text-black uppercase mb-4">
                    Thank You, {formData.fullName || 'Patient'}.
                  </h3>
                  <p className="text-[15px] text-neutral-600 font-light leading-relaxed max-w-lg mb-8">
                    Your enquiry regarding <span className="font-medium text-black">"{formData.subject || 'General Consultation'}"</span> has been assigned to our patient relations coordinator. We will reach you via {formData.preferredMethod.toLowerCase()} shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-[12px] font-mono font-semibold tracking-wider uppercase text-black hover:opacity-70 transition-opacity"
                  >
                    <span>Send Another Message</span>
                    <span>&rarr;</span>
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-10"
                >
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative">
                      <label htmlFor="fullName" className="block text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-500 mb-2">
                        FULL NAME *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-transparent border-b border-neutral-300 py-3 text-[16px] text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors rounded-none"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="phone" className="block text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-500 mb-2">
                        PHONE NUMBER *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +1 (555) 000-0000"
                        className="w-full bg-transparent border-b border-neutral-300 py-3 text-[16px] text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors rounded-none"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Preferred Contact Method */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative">
                      <label htmlFor="email" className="block text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-500 mb-2">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. eleanor@domain.com"
                        className="w-full bg-transparent border-b border-neutral-300 py-3 text-[16px] text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors rounded-none"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="preferredMethod" className="block text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-500 mb-2">
                        PREFERRED CONTACT METHOD
                      </label>
                      <select
                        id="preferredMethod"
                        name="preferredMethod"
                        value={formData.preferredMethod}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-neutral-300 py-3 text-[16px] text-black focus:outline-none focus:border-black transition-colors rounded-none cursor-pointer"
                      >
                        <option value="Email">Email Communication</option>
                        <option value="Phone">Phone Call / Voice</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Subject */}
                  <div className="relative">
                    <label htmlFor="subject" className="block text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-500 mb-2">
                      SUBJECT *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Outpatient Inquiry / Admission Planning / Feedback"
                      className="w-full bg-transparent border-b border-neutral-300 py-3 text-[16px] text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors rounded-none"
                    />
                  </div>

                  {/* Row 4: Message */}
                  <div className="relative">
                    <label htmlFor="message" className="block text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-500 mb-2">
                      MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please detail your medical enquiry, required specialty, or patient reference if applicable..."
                      className="w-full bg-transparent border-b border-neutral-300 py-3 text-[16px] text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors rounded-none resize-none"
                    ></textarea>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-[12px] text-neutral-400 font-light">
                      * Required fields. All information remains confidential.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white text-[13px] font-mono font-semibold tracking-wider uppercase hover:bg-neutral-800 transition-colors disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'TRANSMITTING...' : 'SEND ENQUIRY'}</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-200">&rarr;</span>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
