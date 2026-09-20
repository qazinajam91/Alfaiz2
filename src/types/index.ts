export interface ServiceItem {
  id: string;
  title: string;
  titleUrdu: string;
  category: 'foundation' | 'quran' | 'islamic-studies' | 'specialized';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
  targetAudience: 'children' | 'women' | 'all';
  targetBadge: string;
  durationRecommended: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
}

export interface WhyChooseItem {
  id: string;
  title: string;
  titleUrdu: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface JourneyStep {
  stepNumber: number;
  phase: string;
  phaseUrdu: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleUrdu: string;
  category: 'classroom' | 'tajweed' | 'quran-reading' | 'events';
  description: string;
  gradient: string;
  iconName: string;
  verseQuote?: string;
}

export interface TestimonialItem {
  id: string;
  studentOrParent: string;
  role: string;
  roleUrdu: string;
  courseEnrolled: string;
  location: string;
  feedback: string;
  feedbackUrdu?: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  questionUrdu: string;
  answer: string;
  category: 'admissions' | 'courses' | 'children' | 'women' | 'classes';
}

export interface InquiryFormData {
  fullName: string;
  studentAge: string;
  gender: 'female' | 'male' | 'not-specified';
  courseInterest: string;
  preferredTiming: string;
  learningMode: string;
  contactEmail: string;
  contactPhoneOrWhatsApp: string;
  notes: string;
}
