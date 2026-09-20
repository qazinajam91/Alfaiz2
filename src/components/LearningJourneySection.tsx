import React, { useState } from 'react';
import { Compass, BookOpen, Sparkles, Award, SunMedium, ArrowRight, CheckCircle2 } from 'lucide-react';
import { LEARNING_JOURNEY_STEPS } from '../data/academyData';
import { IslamicDivider, IslamicStarIcon, CrescentStarIcon } from './IslamicPattern';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Compass,
  BookOpen,
  Sparkles,
  Award,
  SunMedium,
};

export const LearningJourneySection: React.FC<{ onOpenAdmission: () => void }> = ({ onOpenAdmission }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const selectedStepData = LEARNING_JOURNEY_STEPS.find(s => s.stepNumber === activeStep) || LEARNING_JOURNEY_STEPS[0];
  const StepIcon = iconMap[selectedStepData.iconName] || BookOpen;

  return (
    <section id="journey" className="relative py-20 bg-[#021813] border-t border-[#d4af37]/20">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-[#d4af37]/30 text-xs text-[#e5c158] font-medium mb-3">
            <Compass size={14} className="text-[#d4af37]" />
            <span>Structured Progression</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            The Student's Learning Journey
          </h2>
          <p className="font-urdu text-xl sm:text-2xl text-[#fae29c] font-bold mt-1" dir="rtl">
            طالب علم کا تعلیمی و تربیتی سفر
          </p>

          <IslamicDivider className="my-5" />

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From the very first Arabic letter to fluent recitation and living Islamic character.
            Our proven five-stage learning pathway ensures clarity, confidence, and steady spiritual growth.
          </p>
        </div>

        {/* Stepper Navigation: 5 Steps (Horizontal on tablet/desktop, scrollable/wrapped on mobile) */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 p-2 rounded-2xl bg-[#04251e] border border-emerald-800/40">
            {LEARNING_JOURNEY_STEPS.map((step) => {
              const Icon = iconMap[step.iconName] || BookOpen;
              const isActive = activeStep === step.stepNumber;

              return (
                <button
                  key={step.stepNumber}
                  type="button"
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`p-3 sm:p-4 rounded-xl transition-all duration-300 flex flex-col items-center text-center cursor-pointer relative ${
                    isActive
                      ? 'bg-gradient-to-b from-[#063a2f] to-[#04281f] border border-[#d4af37] shadow-lg shadow-[#d4af37]/15 scale-[1.02]'
                      : 'hover:bg-emerald-900/30 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-1.5 transition-colors ${
                      isActive
                        ? 'bg-[#d4af37] text-[#031d17]'
                        : 'bg-emerald-950 text-emerald-300 border border-emerald-800/60'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className={`text-[10px] sm:text-xs uppercase tracking-wider font-semibold ${
                    isActive ? 'text-[#e5c158]' : 'text-slate-400'
                  }`}>
                    Stage 0{step.stepNumber}
                  </span>

                  <span className={`text-xs sm:text-sm font-bold font-heading mt-0.5 ${
                    isActive ? 'text-white' : 'text-slate-300'
                  }`}>
                    {step.phase}
                  </span>

                  <span className="font-urdu text-[11px] text-emerald-300/80 mt-0.5" dir="rtl">
                    {step.phaseUrdu}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Display Box */}
        <div className="mt-8 max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#06332a] via-[#04251e] to-[#021813] border-2 border-[#d4af37]/35 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-emerald-950/90">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Icon & Phase Identity */}
            <div className="md:col-span-4 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-emerald-800/40 pb-6 md:pb-0 md:pr-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#084b3d] to-[#04281f] border-2 border-[#d4af37]/60 flex items-center justify-center text-[#fae29c] shadow-xl mb-3">
                <StepIcon className="w-10 h-10 text-[#fae29c]" />
              </div>

              <span className="text-xs font-semibold text-[#e5c158] uppercase tracking-widest">
                Stage {selectedStepData.stepNumber} of 5
              </span>

              <h3 className="font-heading text-2xl font-bold text-white mt-1">
                {selectedStepData.phase}
              </h3>

              <p className="font-urdu text-base text-emerald-300 mt-0.5 font-bold" dir="rtl">
                {selectedStepData.phaseUrdu}
              </p>
            </div>

            {/* Right Detailed Description & Bullet Checklist */}
            <div className="md:col-span-8 flex flex-col justify-between">
              <div>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-white mb-2">
                  {selectedStepData.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {selectedStepData.description}
                </p>

                <div className="space-y-2.5">
                  {selectedStepData.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#fae29c] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls between steps */}
              <div className="mt-8 pt-4 border-t border-emerald-800/30 flex items-center justify-between">
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                    activeStep === 1
                      ? 'opacity-30 border-slate-700 text-slate-600 cursor-not-allowed'
                      : 'border-emerald-700/50 text-emerald-200 hover:bg-emerald-900/50'
                  }`}
                >
                  ← Previous Stage
                </button>

                {activeStep < 5 ? (
                  <button
                    onClick={() => setActiveStep(prev => Math.min(5, prev + 1))}
                    className="text-xs font-semibold px-4 py-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-900 text-[#fae29c] border border-[#d4af37]/30 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Next Stage ({LEARNING_JOURNEY_STEPS[activeStep].phase})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={onOpenAdmission}
                    className="text-xs font-heading font-bold px-4 py-1.5 rounded-lg bg-[#d4af37] text-[#031d17] hover:brightness-110 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Start Stage 1 Today</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
