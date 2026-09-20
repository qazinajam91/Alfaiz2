import React, { useState, useEffect } from 'react';
import { X, GraduationCap, CheckCircle2, MessageCircle, Send, Loader2 } from 'lucide-react';
import { ACADEMY_CONFIG, ACADEMY_SERVICES } from '../data/academyData';
import { IslamicStarIcon } from './IslamicPattern';
import { useLanguage } from '../i18n/LanguageContext';
import { sendAdmissionInquiryEmail } from '../services/emailService';
import { InquiryFormData } from '../types';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  preselectedCourse = '',
}) => {
  const { t, isRTL } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'female' | 'male'>('female');
  const [course, setCourse] = useState(preselectedCourse || ACADEMY_SERVICES[0]?.title);
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (preselectedCourse) {
      setCourse(preselectedCourse);
    }
  }, [preselectedCourse]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const inquiryPayload: InquiryFormData = {
      fullName,
      studentAge: age,
      gender,
      contactPhoneOrWhatsApp: phone,
      contactEmail: 'no-reply@alfaizacademy.org',
      courseInterest: course,
      learningMode: 'one-on-one',
      preferredTiming: 'Flexible / Evening',
      notes,
    };

    try {
      await sendAdmissionInquiryEmail(inquiryPayload);
      setIsDone(true);
    } catch {
      setIsDone(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsAppLink = ACADEMY_CONFIG.getWhatsAppUrl(course, `${fullName} (${gender}, Age: ${age || 'N/A'})`);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#06332a] via-[#04241d] to-[#021813] rounded-3xl border-2 border-[#d4af37]/40 shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white bg-emerald-900/50 hover:bg-emerald-900 border border-emerald-700/40 cursor-pointer"
          aria-label="Close admission modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isDone ? (
          <div className="py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-900 border-2 border-[#d4af37] text-[#fae29c] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-1">
              JazakAllah Khair, {fullName}!
            </h3>
            <p className="font-urdu text-sm text-[#e5c158] mb-3" dir="rtl">
              آپ کی درخواست کامیابی سے موصول ہوگئی ہے
            </p>
            <p className="text-xs sm:text-sm text-slate-200 mb-6 leading-relaxed">
              We have noted your interest in <strong>{course}</strong>. Our team will contact you shortly to arrange your free assessment class.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 rounded-xl font-heading text-xs font-bold text-[#031d17] bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#c59b27] shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:brightness-110"
                aria-label="Open WhatsApp Support"
                title="Open WhatsApp Support"
              >
                <MessageCircle className="w-4 h-4 text-[#031d17]" />
                <span>{t.contact.whatsappNow}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsDone(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-emerald-900/40 border border-emerald-800/50 cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-900 border border-[#d4af37]/40 flex items-center justify-center text-[#fae29c]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#e5c158] flex items-center gap-1">
                  <IslamicStarIcon size={12} />
                  Complimentary Assessment
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                  Enroll at Al Faiz Academy
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-300 mb-4">
              Fill in basic student details to schedule your free 1-on-1 trial session.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  {t.contact.fullName} <span className="text-[#e5c158]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Fatima / Zayd"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#031d17] border border-emerald-800/60 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    {t.contact.age} <span className="text-[#e5c158]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="e.g. 7 or Adult"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#031d17] border border-emerald-800/60 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    {t.contact.gender}
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as 'female' | 'male')}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#031d17] border border-emerald-800/60 text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="female">{t.contact.female}</option>
                    <option value="male">{t.contact.male}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  {t.contact.selectCourse}
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#031d17] border border-emerald-800/60 text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4af37]"
                >
                  {ACADEMY_SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  {t.contact.phone} <span className="text-[#e5c158]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+92 300 1234567"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#031d17] border border-emerald-800/60 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  {t.contact.notes}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any specific timings or questions..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#031d17] border border-emerald-800/60 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl font-heading font-bold text-xs sm:text-sm text-[#031d17] bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#c59b27] hover:brightness-110 shadow-lg shadow-[#d4af37]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#031d17]" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#031d17]" />
                      <span>{t.contact.submitButton}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
