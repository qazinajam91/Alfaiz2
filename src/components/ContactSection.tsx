import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Facebook
} from 'lucide-react';
import { ACADEMY_CONFIG, ACADEMY_SERVICES } from '../data/academyData';
import { InquiryFormData } from '../types';
import { IslamicDivider, IslamicStarIcon, CrescentStarIcon } from './IslamicPattern';
import { sendAdmissionInquiryEmail } from '../services/emailService';
import { useLanguage } from '../i18n/LanguageContext';

interface ContactSectionProps {
  preselectedCourse?: string;
  onInquirySubmitted?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  preselectedCourse = '',
  onInquirySubmitted 
}) => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    studentAge: '',
    gender: 'female',
    courseInterest: preselectedCourse || ACADEMY_SERVICES[0]?.title || 'Noorani Qaida for Beginners',
    preferredTiming: 'Flexible / Evening Slot',
    learningMode: 'Online 1-on-1 Individual Sessions',
    contactEmail: '',
    contactPhoneOrWhatsApp: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    if (preselectedCourse) {
      setFormData(prev => ({ ...prev, courseInterest: preselectedCourse }));
    }
  }, [preselectedCourse]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await sendAdmissionInquiryEmail(formData);
      setStatusMessage(result.message);
      setSubmitted(true);
      if (onInquirySubmitted) {
        onInquirySubmitted();
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const getCustomWhatsAppLink = () => {
    return ACADEMY_CONFIG.getWhatsAppUrl(formData.courseInterest, formData.fullName);
  };

  return (
    <section id="contact" className="relative py-20 bg-[#021813] border-t border-[#d4af37]/20">
      {/* Ambience Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-[#d4af37]/30 text-xs text-[#e5c158] font-medium mb-3">
            <Mail size={14} className="text-[#d4af37]" />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="font-urdu text-xl sm:text-2xl text-[#fae29c] font-bold mt-1" dir="rtl">
            داخلہ معلومات اور رابطہ
          </p>

          <IslamicDivider className="my-5" />

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Responsive Layout: Left Info & WhatsApp, Right Admission Form */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Official Contact Channels (col 5 on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Academy Contact Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#06332a] to-[#04241d] border border-[#d4af37]/30 shadow-xl">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-1">
                {t.contact.officialChannels}
              </h3>
              <p className="font-urdu text-xs text-[#fae29c] mb-6" dir="rtl">
                رابطے کے باضابطہ ذرائع
              </p>

              <div className="space-y-4">
                {/* Email Address Card with mailto link */}
                <a
                  href={`mailto:${ACADEMY_CONFIG.email}?subject=Admission%20Inquiry%20-%20Al%20Faiz%20Noor%20UL%20Quran%20Academy`}
                  className="group flex items-start gap-3.5 p-4 rounded-2xl bg-[#031d17]/90 border border-emerald-800/40 hover:border-[#d4af37]/70 hover:bg-[#06332a]/60 transition-all duration-300 shadow-md cursor-pointer block"
                  aria-label={`Send inquiry email to ${ACADEMY_CONFIG.email}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-900/70 border border-[#d4af37]/40 flex items-center justify-center text-[#fae29c] group-hover:scale-105 group-hover:border-[#fae29c] transition-all shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                      {t.contact.officialEmail}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#e5c158] group-hover:text-[#fae29c] group-hover:underline break-all transition-colors block mt-0.5">
                      {ACADEMY_CONFIG.email}
                    </span>
                    <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                      {t.contact.clickToSend}
                    </span>
                  </div>
                </a>

                {/* WhatsApp Chat Card - Entire Card is Clickable, NO Visible Phone Number */}
                <a
                  href={ACADEMY_CONFIG.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 p-4 rounded-2xl bg-[#031d17]/90 border border-emerald-800/40 hover:border-emerald-400/80 hover:bg-[#06332a]/70 transition-all duration-300 shadow-md cursor-pointer block"
                  aria-label="Open WhatsApp Support"
                  title="Click to start a private WhatsApp conversation"
                >
                  <div className="relative w-11 h-11 rounded-xl bg-emerald-900/80 border border-emerald-500/40 flex items-center justify-center text-emerald-300 group-hover:scale-105 group-hover:text-white group-hover:bg-emerald-700 transition-all shrink-0">
                    <MessageCircle className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                      {t.contact.officialWhatsApp}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-emerald-300 group-hover:text-white group-hover:underline transition-colors block mt-0.5">
                      Official WhatsApp Support
                    </span>
                    <p className="text-[11px] text-emerald-400/90 group-hover:text-emerald-300 transition-colors mt-1">
                      Click to start WhatsApp chat
                    </p>
                  </div>
                </a>

                {/* Facebook Official Page Card - Entire Card is Clickable, NO Raw URLs or IDs */}
                <a
                  href={ACADEMY_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 p-4 rounded-2xl bg-[#031d17]/90 border border-emerald-800/40 hover:border-blue-400/70 hover:bg-[#06332a]/60 transition-all duration-300 shadow-md cursor-pointer block"
                  aria-label="Open Al Faiz Noor UL Quran Academy Facebook Page"
                  title="Visit our official Facebook page"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-950/70 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:text-blue-200 group-hover:bg-blue-900 transition-all shrink-0">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                      {t.contact.facebookCommunity}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-blue-300 group-hover:text-white group-hover:underline transition-colors block mt-0.5">
                      Al Faiz Noor UL Quran Academy on Facebook
                    </span>
                    <span className="text-[11px] text-blue-400/90 group-hover:text-blue-300 transition-colors block mt-1">
                      Visit our official Facebook page
                    </span>
                  </div>
                </a>
              </div>

              {/* Trust Box */}
              <div className="mt-6 pt-5 border-t border-emerald-800/40 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-[#e5c158]">
                  <IslamicStarIcon size={14} />
                  <span className="font-semibold">Privacy & Modesty Guaranteed</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  All communications and female student details are handled with utmost confidentiality and respect according to Islamic values. Dedicated female instructors conduct classes for sisters and girls.
                </p>
              </div>

            </div>

            {/* Quick Consultation Badge */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950 via-[#06332a] to-emerald-950 border border-[#d4af37]/30 text-start flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center shrink-0">
                <CrescentStarIcon size={24} className="text-[#fae29c]" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">
                  Free Assessment & Trial Class
                </p>
                <p className="text-[11px] text-emerald-300">
                  Try our 1-on-1 session before committing. No upfront fee required.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Admission Inquiry Form (col 7 on desktop) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#06332a] to-[#04241d] border-2 border-[#d4af37]/35 shadow-2xl shadow-emerald-950/80">
              
              <div className="flex items-center justify-between pb-4 border-b border-emerald-800/40 mb-6">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                    {t.contact.formTitle}
                  </h3>
                  <span className="font-urdu text-xs text-[#fae29c]" dir="rtl">
                    آن لائن داخلہ فارم
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#e5c158] font-medium bg-emerald-950/80 px-3 py-1 rounded-full border border-[#d4af37]/30">
                  <IslamicStarIcon size={12} />
                  <span>Free Trial Ready</span>
                </div>
              </div>

              {submitted ? (
                /* Success Confirmation State */
                <div className="py-8 text-center animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-900 border-2 border-[#d4af37] text-[#fae29c] flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h4 className="font-heading text-xl font-bold text-white mb-1">
                    {t.contact.successTitle} {formData.fullName}!
                  </h4>
                  <p className="font-urdu text-base text-[#e5c158] mb-3" dir="rtl">
                    ہمیں آپ کی داخلہ درخواست موصول ہو چکی ہے
                  </p>

                  <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto leading-relaxed mb-6">
                    {t.contact.successMessage}
                  </p>

                  {statusMessage && (
                    <p className="text-xs text-emerald-400 mb-6 bg-emerald-950/70 py-2 px-4 rounded-xl inline-block border border-emerald-800/60">
                      {statusMessage}
                    </p>
                  )}

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                    <a
                      href={getCustomWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-3 rounded-xl font-heading text-xs font-bold text-[#031d17] bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#c59b27] shadow-lg flex items-center justify-center gap-2 hover:brightness-110"
                    >
                      <MessageCircle className="w-4 h-4 text-[#031d17]" />
                      <span>{t.contact.continueWhatsApp}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-emerald-900/40 border border-emerald-800/50 cursor-pointer"
                    >
                      {t.contact.submitAnother}
                    </button>
                  </div>
                </div>
              ) : (
                /* The Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Age (2 cols on tablet/desktop) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        {t.contact.fullName} <span className="text-[#e5c158]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={t.contact.fullNamePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#031d17] border border-emerald-800/60 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        {t.contact.studentAge} <span className="text-[#e5c158]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.studentAge}
                        onChange={(e) => setFormData({ ...formData, studentAge: e.target.value })}
                        placeholder={t.contact.agePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#031d17] border border-emerald-800/60 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                      />
                    </div>
                  </div>

                  {/* Gender & Course Interested In */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        {t.contact.categoryGender} <span className="text-[#e5c158]">*</span>
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#031d17] border border-emerald-800/60 text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                      >
                        <option value="female">{t.contact.femaleOption}</option>
                        <option value="male">{t.contact.maleOption}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        {t.contact.courseInterested} <span className="text-[#e5c158]">*</span>
                      </label>
                      <select
                        value={formData.courseInterest}
                        onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#031d17] border border-emerald-800/60 text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                      >
                        {ACADEMY_SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Learning Mode & Timing */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        {t.contact.learningMode}
                      </label>
                      <select
                        value={formData.learningMode}
                        onChange={(e) => setFormData({ ...formData, learningMode: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#031d17] border border-emerald-800/60 text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                      >
                        <option value="Online 1-on-1 Individual Sessions">{t.contact.modeOneOnOne}</option>
                        <option value="Weekend Specialized Classes">{t.contact.modeWeekend}</option>
                        <option value="Flexible Self-Paced Schedule">{t.contact.modeFlexible}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        {t.contact.preferredTiming}
                      </label>
                      <select
                        value={formData.preferredTiming}
                        onChange={(e) => setFormData({ ...formData, preferredTiming: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#031d17] border border-emerald-800/60 text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                      >
                        <option value="Flexible / Evening Slot">{t.contact.timingFlexible}</option>
                        <option value="Morning Hours">{t.contact.timingMorning}</option>
                        <option value="Evening Hours">{t.contact.timingEvening}</option>
                        <option value="Weekend Hours">{t.contact.timingWeekend}</option>
                      </select>
                    </div>
                  </div>

                  {/* Contact Email & Phone/WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        {t.contact.emailAddress} <span className="text-[#e5c158]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#031d17] border border-emerald-800/60 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        {t.contact.phoneOrWhatsApp} <span className="text-[#e5c158]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.contactPhoneOrWhatsApp}
                        onChange={(e) => setFormData({ ...formData, contactPhoneOrWhatsApp: e.target.value })}
                        placeholder={t.contact.phonePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#031d17] border border-emerald-800/60 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                      />
                    </div>
                  </div>

                  {/* Message / Special Learning Goals */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">
                      {t.contact.messageNotes}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#031d17] border border-emerald-800/60 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm md:text-base text-[#031d17] bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#c59b27] hover:brightness-110 shadow-lg shadow-[#d4af37]/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>{t.contact.submitting}</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#031d17]" />
                          <span>{t.contact.submitButton}</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      No payment required at inquiry stage. Free trial & assessment scheduled first.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
