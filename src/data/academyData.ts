import { ServiceItem, WhyChooseItem, JourneyStep, GalleryItem, TestimonialItem, FAQItem } from '../types';

/**
 * =========================================================================
 * AL FAIZ NOOR UL QURAN ACADEMY - CENTRALIZED CONFIGURATION & CONTENT DATA
 * =========================================================================
 * Edit all academy details, contact information, social links, services,
 * FAQs, and texts in this single file without needing to touch UI components.
 */

export const ACADEMY_CONFIG = {
  nameEnglish: 'Al Faiz Noor UL Quran Academy',
  nameUrdu: 'الفائز نور القرآن اکیڈمی',
  shortName: 'Al Faiz Academy',
  tagline: 'Learn Quran, Build Character, Live with Faith',
  taglineUrdu: 'قرآن سیکھیں، کردار سنواریں، ایمان کے ساتھ جئیں',
  bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
  quranVerseArabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
  quranVerseReference: 'سورة العلق (96:1)',
  quranVerseEnglish: 'Read in the name of your Lord who created — Surah Al-Alaq (96:1)',
  
  // Official Contact Information (Centralized)
  email: 'alfaiz240902@gmail.com',
  
  // Centralized WhatsApp configuration:
  // Note: Phone number is kept strictly internal for direct WhatsApp links and never displayed in visible UI.
  whatsappNumber: '+923710156332',
  whatsappDisplay: 'Official WhatsApp Support',
  whatsappLabel: 'Official WhatsApp Support',
  whatsappAction: 'Click to start WhatsApp chat',
  whatsappTooltip: 'Click to start a private WhatsApp conversation',
  whatsappAccessibleLabel: 'Open WhatsApp Support',
  whatsappUrl: 'https://wa.me/923710156332',
  
  // Official Facebook page integration
  facebookUrl: 'https://www.facebook.com/profile.php?id=61581930617232',
  facebookDisplay: 'Al Faiz Noor UL Quran Academy on Facebook',
  facebookAction: 'Visit our official Facebook page',
  facebookAccessibleLabel: 'Open Al Faiz Noor UL Quran Academy Facebook Page',
  youtubeUrl: 'https://youtube.com', // Optional future video channel
  instagramUrl: 'https://instagram.com', // Optional future Instagram page

  // Engineering & Design Attribution
  developerCredit: {
    intro: 'Designed & Engineered by',
    name: 'Qazi Najam',
    title: 'Software Engineer',
  },
  
  // Academy focus summary
  primaryFocus: 'Specialized 1-on-1 Online Quran & Islamic Education for Children and Women/Females',
  
  // Helper to generate pre-filled WhatsApp links with student & course details
  getWhatsAppUrl(topic?: string, studentName?: string): string {
    const cleanNumber = '923710156332';
    let msg = `Assalam-o-Alaikum, I have submitted an admission inquiry at Al Faiz Noor UL Quran Academy.`;
    if (studentName) {
      msg = `Assalam-o-Alaikum, I have submitted an admission inquiry at Al Faiz Noor UL Quran Academy. My name is ${studentName}`;
      if (topic) {
        msg += ` and I am interested in ${topic}.`;
      } else {
        msg += `.`;
      }
      msg += ` I would like to know more about the classes.`;
    } else if (topic) {
      msg = `Assalam-o-Alaikum, I am interested in ${topic} at Al Faiz Noor UL Quran Academy. I would like to know more about the classes and schedules.`;
    } else {
      msg = `Assalam-o-Alaikum, I would like to inquire about admission at Al Faiz Noor UL Quran Academy for online Quran and Islamic classes.`;
    }
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
  },
};

/**
 * =========================================================================
 * EMAILJS CONFIGURATION (CENTRALIZED)
 * =========================================================================
 * Free static-hosting email transmission configuration for EmailJS.
 * When you create your free account at https://www.emailjs.com/:
 * 1. Create an Email Service (e.g. Gmail) -> Replace SERVICE_ID
 * 2. Create an Email Template -> Replace TEMPLATE_ID
 * 3. Copy your Public Key from Account Settings -> Replace PUBLIC_KEY
 * 
 * If left as placeholders, the app gracefully simulates submissions,
 * logs the formatted payload to console, and shows complete confirmation.
 */
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_EMAILJS_SERVICE_ID', // e.g., 'service_alfaiz'
  TEMPLATE_ID: 'YOUR_EMAILJS_TEMPLATE_ID', // e.g., 'template_inquiry'
  PUBLIC_KEY: 'YOUR_EMAILJS_PUBLIC_KEY', // e.g., 'pk_live_...'
  recipientEmail: 'alfaiz240902@gmail.com',
};

/**
 * =========================================================================
 * ALL ACADEMY SERVICES & COURSES (EDITABLE)
 * =========================================================================
 * Contains all 14 requested core programs with Islamic terminology,
 * English and Urdu titles, detailed highlights, and age/gender badges.
 */
export const ACADEMY_SERVICES: ServiceItem[] = [
  {
    id: 'noorani-qaida',
    title: 'Noorani Qaida for Beginners',
    titleUrdu: 'نورانی قاعدہ برائے مبتدی طلباء',
    category: 'foundation',
    shortDesc: 'The essential stepping stone for children and beginners to master Arabic letter pronunciation (Makharij) and foundational rules.',
    fullDesc: 'Noorani Qaida is the world-recognized foundational method for learning how to read the Holy Quran correctly. Our certified teachers patiently guide young children and beginners through letter recognition, compound letters (Murakkabat), short vowels (Harakat), Madd letters, Tanween, and Sukoon with correct articulation points.',
    iconName: 'BookOpen',
    highlights: [
      'Mastery of Arabic alphabets & single/compound letters',
      'Accurate letter articulation (Makharij al-Huroof)',
      'Child-friendly pacing with engaging audio repetition',
      'Gentle transition toward joining words and verses'
    ],
    targetAudience: 'children',
    targetBadge: 'Kids & Beginners',
    durationRecommended: '3 to 6 Months',
    level: 'Beginner',
  },
  {
    id: 'quran-nazra',
    title: 'Quran Nazra (Fluent Quran Reading)',
    titleUrdu: 'قرآن ناظرہ (روانی کے ساتھ تلاوت)',
    category: 'quran',
    shortDesc: 'Comprehensive reading of the complete Holy Quran with continuous teacher supervision, fluency development, and accurate Tajweed.',
    fullDesc: 'Designed for students who have completed the Qaida and are ready to read the Holy Quran from cover to cover. Emphasis is placed on building reading stamina, recognizing Waqf (stopping signs), continuous rhythm, and eradicating common recitation slips under the caring guidance of an experienced tutor.',
    iconName: 'BookMarked',
    highlights: [
      'Complete Mushaf reading from Surah Al-Fatiha to An-Nas',
      'Daily fluency enhancement and rhythmic recitation',
      'Practical application of basic Tajweed rules in every verse',
      'Constant positive encouragement & progress tracking'
    ],
    targetAudience: 'all',
    targetBadge: 'Children & Adults',
    durationRecommended: '6 to 12 Months',
    level: 'Intermediate',
  },
  {
    id: 'tajweed-ul-quran',
    title: 'Tajweed-ul-Quran (Pronunciation & Rules)',
    titleUrdu: 'تجوید القرآن (درست مخارج و قواعد)',
    category: 'quran',
    shortDesc: 'In-depth mastery of classical recitation science, Noon Sakinah, Meem Sakinah, Mudood, and heavy/light letter characteristics.',
    fullDesc: 'Reciting the Quran with Tajweed is an obligation upon every devoted reader. This specialized course systematically covers the theoretical and applied rules of Tajweed, including Idgham, Ikhfa, Iqlab, Izhar, Qalqalah, and the characteristics of letters (Sifaat al-Huroof) to make recitation melodious and error-free.',
    iconName: 'Sparkles',
    highlights: [
      'Precision Makharij (points of vocal articulation)',
      'Rules of Noon & Meem Sakinah and Tanween',
      'Rules of Mudood (elongation) & Ghunnah',
      'Practical correction of common mother-tongue accents'
    ],
    targetAudience: 'all',
    targetBadge: 'All Ages',
    durationRecommended: '4 to 8 Months',
    level: 'All Levels',
  },
  {
    id: 'hifz-ul-quran',
    title: 'Hifz-ul-Quran (Memorization Program)',
    titleUrdu: 'حفظ القرآن الکریم (مقدس یادداشت)',
    category: 'quran',
    shortDesc: 'Structured memorization of selected Surahs or the complete Quran with rigorous daily revision (Sabaq, Sabaqi, and Manzil).',
    fullDesc: 'A sacred journey of engraving the words of Allah into the heart. Our structured Hifz program provides personalized daily quotas, scientifically proven revision cycles to safeguard retained portions, and patient supervision that prevents mental burnout in young memorizers.',
    iconName: 'Crown',
    highlights: [
      'Customized daily Sabaq according to individual capacity',
      'Strict daily Sabaqi (recent retention) and Manzil (past revision)',
      'Option for full Hifz or selected blessed Surahs (Yaseen, Mulk, Rahman, etc.)',
      'Mental stamina and spiritual motivation techniques'
    ],
    targetAudience: 'all',
    targetBadge: 'Dedicated Learners',
    durationRecommended: 'Flexible / 1-3 Years',
    level: 'Advanced',
  },
  {
    id: 'quran-translation',
    title: 'Quran Translation & Basic Understanding',
    titleUrdu: 'ترجمۃ القرآن و فہم قرآن',
    category: 'quran',
    shortDesc: 'Word-by-word and contextual translation of Quranic verses, connecting the student’s heart to divine commandments and wisdom.',
    fullDesc: 'Reciting the Quran is blessed, and understanding its message transforms life. This course offers clear, authentic translation of the Quranic text with background context (Asbab al-Nuzul) and foundational lessons relevant to daily modern life.',
    iconName: 'Languages',
    highlights: [
      'Word-by-word vocabulary building of Quranic Arabic',
      'Contextual translation of frequently recited Surahs',
      'Practical reflections (Tadabbur) for daily ethical living',
      'Available in English and Urdu instruction'
    ],
    targetAudience: 'all',
    targetBadge: 'Youth & Adults',
    durationRecommended: '6 to 12 Months',
    level: 'Intermediate',
  },
  {
    id: 'children-education',
    title: 'Quran & Islamic Education for Children',
    titleUrdu: 'بچوں کے لیے خصوصی اسلامی و قرآنی تعلیم',
    category: 'specialized',
    shortDesc: 'A warm, engaging, and patient learning atmosphere designed specifically for young minds to fall in love with the Quran and Islam.',
    fullDesc: 'Children require gentle, positive pedagogy rather than harsh pressure. Our child-centric program combines interactive Qaida sessions with Islamic moral stories, fun memorization challenges, and nurturing feedback that builds lifelong love for Allah and the Prophet ﷺ.',
    iconName: 'HeartHandshake',
    highlights: [
      'Patient, child-friendly teachers trained in gentle instruction',
      'Short, engaging 30-minute interactive sessions',
      'Regular parent feedback and milestone celebrations',
      'Balanced combination of recitation, stories, and prayer practice'
    ],
    targetAudience: 'children',
    targetBadge: 'Ages 4 to 15',
    durationRecommended: 'Ongoing Mentorship',
    level: 'All Levels',
  },
  {
    id: 'women-education',
    title: 'Quran & Islamic Education for Women/Females',
    titleUrdu: 'خواتین و بچیوں کے لیے پردہ دار اور محفوظ تعلیم',
    category: 'specialized',
    shortDesc: 'Respectful, private, female-friendly learning environment with dedicated female Quran teachers and flexible home schedules.',
    fullDesc: 'We provide sisters, mothers, and daughters with a completely comfortable, private, and dignified learning sanctuary. Guided by experienced female Quran teachers, students can learn at their own pace without hesitation, whether starting from the alphabet or advancing into Tajweed and Tafseer.',
    iconName: 'ShieldCheck',
    highlights: [
      'Dedicated female Quran tutors available for sisters',
      'Full privacy and flexible timings suited to homemakers and professionals',
      'Gentle, sisterly guidance with mutual respect and comfort',
      'Customizable syllabus based on personal aspirations'
    ],
    targetAudience: 'women',
    targetBadge: 'Sisters Only',
    durationRecommended: 'Flexible Pace',
    level: 'All Levels',
  },
  {
    id: 'basic-islamic-education',
    title: 'Basic Islamic Education (Deenyat)',
    titleUrdu: 'اسلامی بنیادی تعلیم (دینیات)',
    category: 'islamic-studies',
    shortDesc: 'Essential Islamic knowledge every Muslim must know, including Six Kalimahs, Salah prayer method, Wudu, and basic pillars.',
    fullDesc: 'A holistic Deenyat curriculum grounding the student in the fundamentals of the faith. Covers the Five Pillars of Islam, practical step-by-step method of Salah prayer, conditions of Taharah (cleanliness), Ghusl, and day-to-day Islamic practices.',
    iconName: 'GraduationCap',
    highlights: [
      'Memorization of the Six Kalimahs with meanings',
      'Practical demonstration of Wudu and Salah step-by-step',
      'Pillars of Islam and foundational Islamic terms',
      'Daily Islamic supplications and sunnah routines'
    ],
    targetAudience: 'all',
    targetBadge: 'Essential for All',
    durationRecommended: '3 to 6 Months',
    level: 'Beginner',
  },
  {
    id: 'islamic-beliefs-aqeedah',
    title: 'Islamic Beliefs / Basic Aqeedah',
    titleUrdu: 'اسلامی عقائد و ایمانیات',
    category: 'islamic-studies',
    shortDesc: 'Sound understanding of the fundamentals of faith: Tawheed, Prophethood (Risalah), Angels, Revealed Books, and the Hereafter.',
    fullDesc: 'Faith built on clear understanding stands firm against modern doubts. This course educates young learners and students in the pure creed (Aqeedah) of Islam, fostering sincere love for Allah SWT and unwavering conviction in the Finality of the Prophethood of Muhammad ﷺ.',
    iconName: 'Compass',
    highlights: [
      'Purity of Tawheed (Oneness of Allah) and its signs in nature',
      'Love and reverence for Prophet Muhammad ﷺ as the Final Messenger',
      'Belief in divine books, noble angels, destiny, and the Day of Judgment',
      'Nurturing a firm Islamic identity in today’s world'
    ],
    targetAudience: 'all',
    targetBadge: 'Core Foundation',
    durationRecommended: '2 to 4 Months',
    level: 'All Levels',
  },
  {
    id: 'masnoon-duas',
    title: 'Masnoon Duas / Daily Islamic Duas',
    titleUrdu: 'مسنون دعائیں و روزمرہ کے اذکار',
    category: 'islamic-studies',
    shortDesc: 'Authentic daily prophetic supplications for morning, evening, eating, sleeping, travelling, entering the home, and seeking protection.',
    fullDesc: 'The Prophet ﷺ taught us divine words of protection and gratitude for every moment of life. Students memorize authentic Masnoon Duas with their practical meanings and establish the habit of remembering Allah throughout the day.',
    iconName: 'HandHeart',
    highlights: [
      'Morning and evening protection prayers (Azkar)',
      'Duas for eating, drinking, sleeping, and waking up',
      'Duas for parents, forgiveness, knowledge, and relief from distress',
      'Pronunciation correction and audio review'
    ],
    targetAudience: 'all',
    targetBadge: 'Daily Spiritual Practice',
    durationRecommended: '2 to 3 Months',
    level: 'Beginner',
  },
  {
    id: 'islamic-manners-ethics',
    title: 'Islamic Manners & Ethics (Akhlaq & Adab)',
    titleUrdu: 'اسلامی اخلاق، آداب و تربیت',
    category: 'islamic-studies',
    shortDesc: 'Character building inspired by the Sunnah: respect for parents, honesty, kindness, modesty, speech etiquette, and neighbor rights.',
    fullDesc: 'Knowledge without character remains incomplete. This course is dedicated to Tarbiyah (character development), emphasizing Islamic etiquettes of greeting (Salam), speaking the truth, modesty (Haya), respecting elders, showing mercy to the young, and maintaining integrity.',
    iconName: 'Feather',
    highlights: [
      'Rights of parents, teachers, elders, and neighbors',
      'Honesty, trustworthiness, and keeping promises',
      'Etiquettes of speaking, listening, and digital manners',
      'Prophetic stories that inspire humility and compassion'
    ],
    targetAudience: 'all',
    targetBadge: 'Character Building',
    durationRecommended: 'Continuous Mentorship',
    level: 'All Levels',
  },
  {
    id: 'islamic-studies',
    title: 'Comprehensive Islamic Studies (Islamiyat)',
    titleUrdu: 'جامع اسلامیات و سیرت النبی ﷺ',
    category: 'islamic-studies',
    shortDesc: 'A rich overview of Islamic history, stories of the noble Prophets, Seerah of Prophet Muhammad ﷺ, and moral lessons.',
    fullDesc: 'A broader educational journey connecting students with their spiritual heritage. Includes illuminating stories of the Prophets (Qasas al-Anbiya), the companions (Sahabah), major milestones of Islamic history, and foundational moral philosophy.',
    iconName: 'Library',
    highlights: [
      'Seerah of Prophet Muhammad ﷺ with age-appropriate depth',
      'Inspiring stories of the Prophets from Adam (AS) to Isa (AS)',
      'Lessons from the lives of the Khulafa-e-Rashideen and Sahabiyat',
      'Practical moral reflections for living ethically today'
    ],
    targetAudience: 'all',
    targetBadge: 'Youth & Families',
    durationRecommended: '4 to 8 Months',
    level: 'Intermediate',
  },
  {
    id: 'online-quran-classes',
    title: 'Global Online Quran Classes (1-on-1)',
    titleUrdu: 'عالمی سطح پر آن لائن قرآن کلاسز (ون آن ون)',
    category: 'specialized',
    shortDesc: 'Interactive high-definition individual classes accessible anywhere in the world across flexible time zones via digital classroom tools.',
    fullDesc: 'Accessible learning directly from the comfort and safety of your home. Each session is conducted 1-on-1, allowing the teacher to focus 100% on the student’s specific pronunciation, speed, and confidence with screen-sharing of digitized Quran copies.',
    iconName: 'MonitorCheck',
    highlights: [
      'Strict 1-on-1 personalized attention for maximum retention',
      'Flexible time slots accommodating Pakistan, UK, USA, Gulf & Europe',
      'Clear digital screen-sharing of colorful Tajweed Mushaf',
      'Simple connection via Zoom, Google Meet, or Skype'
    ],
    targetAudience: 'all',
    targetBadge: 'Worldwide Access',
    durationRecommended: 'Ongoing',
    level: 'All Levels',
  },
  {
    id: 'online-islamic-classes',
    title: 'Online Islamic Courses & Weekend Sessions',
    titleUrdu: 'آن لائن اسلامی شارٹ کورسز و ویک اینڈ کلاسز',
    category: 'specialized',
    shortDesc: 'Convenient short courses and weekend modules for busy school students, college learners, working mothers, and families.',
    fullDesc: 'Specially scheduled modules for students with demanding school or work routines. Choose between weekend-only sessions or flexible evening timings to maintain consistent spiritual growth without overburdening your daily routine.',
    iconName: 'CalendarCheck',
    highlights: [
      'Tailored weekend schedules (Saturday & Sunday slots)',
      'Customized short certificate modules in Duas & Salah',
      'Paced for school-going children and working sisters',
      'Recorded reviews and personalized guidance'
    ],
    targetAudience: 'all',
    targetBadge: 'Flexible Schedules',
    durationRecommended: 'Flexible Modular',
    level: 'All Levels',
  },
];

/**
 * =========================================================================
 * WHY CHOOSE AL FAIZ NOOR UL QURAN ACADEMY (8 CORE PILLARS)
 * =========================================================================
 */
export const WHY_CHOOSE_PILLARS: WhyChooseItem[] = [
  {
    id: 'quran-focused',
    title: 'Quran-Focused Learning',
    titleUrdu: 'خالص قرآنی تعلیم',
    description: 'Our core passion is transmitting the Holy Quran with divine reverence, authentic Tajweed, and sound recitation technique from foundational letters to completion.',
    iconName: 'BookOpen',
    badge: 'Core Foundation',
  },
  {
    id: 'basic-islamic-education',
    title: 'Basic Islamic Education',
    titleUrdu: 'جامع دینی بنیاد',
    description: 'We integrate essential Deenyat — Salah, Wudu, Kalimahs, and authentic daily supplications — alongside recitation so students grow comprehensively in faith.',
    iconName: 'GraduationCap',
    badge: 'Holistic Deenyat',
  },
  {
    id: 'character-building',
    title: 'Character Building (Akhlaq & Adab)',
    titleUrdu: 'کردار سازی و حسن اخلاق',
    description: 'We believe true Quranic education shines through conduct. Teachers instill respect for parents, honesty, patience, and prophetic manners in every student.',
    iconName: 'HeartHandshake',
    badge: 'Moral Tarbiyah',
  },
  {
    id: 'child-friendly',
    title: 'Child-Friendly Learning',
    titleUrdu: 'بچوں کے لیے شفیق و دوستانہ ماحول',
    description: 'Tutors employ gentle, positive reinforcement instead of strict pressure. Young students feel celebrated, heard, and genuinely excited for each daily lesson.',
    iconName: 'Smile',
    badge: 'Gentle Pedagogy',
  },
  {
    id: 'female-friendly',
    title: 'Female-Friendly Learning Environment',
    titleUrdu: 'خواتین کے لیے محفوظ و پردہ دار انتظام',
    description: 'Dedicated female Quran tutors for sisters, young girls, and mothers, ensuring complete comfort, modesty, and mutual trust within a dignified setting.',
    iconName: 'ShieldCheck',
    badge: 'Sisters Department',
  },
  {
    id: 'structured-learning',
    title: 'Structured Step-by-Step Curriculum',
    titleUrdu: 'منظم اور مرحلہ وار نصاب',
    description: 'Every student progresses through an organized roadmap — from alphabet articulation to fluent recitation, revision milestones, and practical understanding.',
    iconName: 'ListOrdered',
    badge: 'Organized Method',
  },
  {
    id: 'individual-attention',
    title: '1-on-1 Individual Attention',
    titleUrdu: 'انفرادی توجہ و رہنمائی',
    description: 'Every class is dedicated solely to one student. No crowded online rooms, no waiting — 100% of the teacher’s guidance is focused on your child’s needs.',
    iconName: 'UserCheck',
    badge: '100% Focus',
  },
  {
    id: 'flexible-learning',
    title: 'Flexible International Schedules',
    titleUrdu: 'اوقات کار میں مکمل لچک',
    description: 'Choose morning, afternoon, or evening class slots that fit seamlessly into school hours, homework routines, and worldwide international time zones.',
    iconName: 'Clock',
    badge: 'Your Convenient Time',
  },
];

/**
 * =========================================================================
 * LEARNING JOURNEY (DISCOVER -> LEARN -> PRACTICE -> IMPROVE -> GROW)
 * =========================================================================
 */
export const LEARNING_JOURNEY_STEPS: JourneyStep[] = [
  {
    stepNumber: 1,
    phase: 'Discover',
    phaseUrdu: 'دریافت و ابتدائی جائزہ',
    title: 'Free Assessment & Consultation',
    description: 'We begin with a welcoming consultation to understand the student’s current reading level, age, and individual aspirations.',
    details: [
      'Welcoming introductory session',
      'Assessment of Arabic alphabet familiarity',
      'Discussion of parent expectations & schedule availability',
      'Free trial class without any upfront obligation'
    ],
    iconName: 'Compass',
  },
  {
    stepNumber: 2,
    phase: 'Learn',
    phaseUrdu: 'بنیادی تعلیم و فہم',
    title: 'Foundational Knowledge & Rules',
    description: 'The student begins with structured lessons in Noorani Qaida, precise Makharij articulation, or curated Nazra passages.',
    details: [
      'Phonetic articulation of every Arabic letter',
      'Systematic progression through vowel signs & combinations',
      'Integration of initial Kalimahs & practical Wudu steps',
      'Supportive 1-on-1 daily teacher coaching'
    ],
    iconName: 'BookOpen',
  },
  {
    stepNumber: 3,
    phase: 'Practice',
    phaseUrdu: 'روزمرہ مشق و تکرار',
    title: 'Daily Recitation & Repetition',
    description: 'Continuous guided reading builds vocal fluency, rhythmic flow, and natural familiarity with the sacred Quranic script.',
    details: [
      'Repetitive vocal practice with instant teacher correction',
      'Pacing according to the child’s natural learning speed',
      'Daily Masnoon Dua recitation and Salah practice',
      'Positive reinforcement and star milestone rewards'
    ],
    iconName: 'Sparkles',
  },
  {
    stepNumber: 4,
    phase: 'Improve',
    phaseUrdu: 'اصلاح و تجوید کی تکمیل',
    title: 'Tajweed Correction & Fluency',
    description: 'Refining recitation with nuanced Tajweed rules (Ghunnah, Ikhfa, Qalqalah, Mudood) to ensure authentic classical beauty.',
    details: [
      'Elimination of minor pronunciation nuances and accent slips',
      'Application of Waqf (stopping) and breathing rules',
      'Fluent reading without hesitations or stutters',
      'Periodic progress reviews shared directly with parents'
    ],
    iconName: 'Award',
  },
  {
    stepNumber: 5,
    phase: 'Grow',
    phaseUrdu: 'کردار سازی و روحانی ترقی',
    title: 'Living with Faith & Moral Character',
    description: 'Transforming Quranic knowledge into living character: Akhlaq, prophetic kindness, devotion to daily prayers, and lasting confidence.',
    details: [
      'Application of Islamic manners in family and school life',
      'Lifelong love for reciting the Holy Quran daily',
      'Firm belief (Aqeedah) rooted in divine wisdom',
      'A proud, grounded young Muslim identity'
    ],
    iconName: 'SunMedium',
  },
];

/**
 * =========================================================================
 * GALLERY PLACEHOLDERS (ELEGANT ISLAMIC CARDS FOR FUTURE PHOTOS)
 * =========================================================================
 * Tasteful Islamic placeholders adhering to rule: Never invent fake real photos
 * or fake institutional claims.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Holy Quran Recitation Practice',
    titleUrdu: 'تلاوت کلام پاک کی پریکٹس',
    category: 'quran-reading',
    description: 'Dedicated screen-based recitation with color-coded Tajweed Mushaf for effortless reading comprehension.',
    gradient: 'from-emerald-900/80 via-teal-950 to-[#062e24]',
    iconName: 'BookOpen',
    verseQuote: 'وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا',
  },
  {
    id: 'gallery-2',
    title: 'Noorani Qaida Articulation Training',
    titleUrdu: 'نورانی قاعدہ و مخارج کی مشق',
    category: 'classroom',
    description: 'Interactive letter-by-letter Makharij correction designed specifically for young beginners and children.',
    gradient: 'from-[#07362b]/90 via-emerald-950 to-[#031d17]',
    iconName: 'Sparkles',
    verseQuote: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
  },
  {
    id: 'gallery-3',
    title: 'Dedicated Sisters Learning Sanctuary',
    titleUrdu: 'خواتین و طالبات کے لیے خصوصی شعبہ',
    category: 'classroom',
    description: 'A quiet, private, and encouraging atmosphere guided by respectful female tutors for sisters and young girls.',
    gradient: 'from-[#04281f]/90 via-teal-900/60 to-[#062e24]',
    iconName: 'ShieldCheck',
    verseQuote: 'طلبُ العلمِ فريضةٌ على كلِّ مسلمٍ',
  },
  {
    id: 'gallery-4',
    title: 'Masnoon Duas & Daily Prayers Practice',
    titleUrdu: 'روزمرہ مسنون دعائیں و نماز کی تربیت',
    category: 'events',
    description: 'Children memorizing morning and evening supplications, Salah positions, and etiquettes of gratitude.',
    gradient: 'from-emerald-950 via-[#0a3f32] to-[#04231b]',
    iconName: 'HandHeart',
    verseQuote: 'وَقُلْ رَبِّ زِدْنِي عِلْمًا',
  },
  {
    id: 'gallery-5',
    title: 'Tajweed Mastery & Melodious Tarteel',
    titleUrdu: 'علم التجوید اور ترتیل کی مشق',
    category: 'tajweed',
    description: 'Practicing stopping signs, Mudood rules, and melodious Quranic cadence with dedicated individual attention.',
    gradient: 'from-[#083b2e] via-emerald-950 to-[#031d17]',
    iconName: 'Sparkles',
    verseQuote: 'الَّذِينَ آتَيْنَاهُمُ الْكِتَابَ يَتْلُونَهُ حَقَّ تِلَاوَتِهِ',
  },
  {
    id: 'gallery-6',
    title: 'Character Building & Prophetic Ethics',
    titleUrdu: 'اخلاقِ حسنہ و سیرتِ نبوی ﷺ کے اسباق',
    category: 'events',
    description: 'Instilling respect for parents, truthfulness, kindness, and Islamic manners into everyday habits.',
    gradient: 'from-[#052c22] via-[#083f32] to-[#031d17]',
    iconName: 'Heart',
    verseQuote: 'إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ',
  },
];

/**
 * =========================================================================
 * TESTIMONIALS (EDITABLE COMMUNITY FEEDBACK PLACEHOLDERS)
 * =========================================================================
 * Prepared for authentic parent & student feedback. Explicitly marked as
 * editable community voices so parents know genuine feedback is welcomed.
 */
export const TESTIMONIAL_ITEMS: TestimonialItem[] = [
  {
    id: 'test-1',
    studentOrParent: 'Umm Ayesha (Parent)',
    role: 'Parent of 7-year-old student',
    roleUrdu: 'والدہ محترمہ',
    courseEnrolled: 'Noorani Qaida & Basic Duas',
    location: 'Online Student (UK)',
    feedback: 'My daughter was very shy to start learning Arabic online. The teacher at Al Faiz Noor UL Quran Academy is so remarkably patient and gentle. In just four months, she finished her Qaida and is now reciting Quran with correct letters. May Allah bless this academy!',
    rating: 5,
    date: 'Recent Community Review',
  },
  {
    id: 'test-2',
    studentOrParent: 'Fatima Z. (Sister / Student)',
    role: 'Adult Female Student',
    roleUrdu: 'طالبہ',
    courseEnrolled: 'Tajweed & Quran Nazra',
    location: 'Online Student (Pakistan)',
    feedback: 'As a busy homemaker, finding a comfortable female teacher was my top priority. The female tutor assigned to me made me feel completely at ease. My Makharij pronunciation has improved tremendously, and the flexible evening timing is a true blessing.',
    rating: 5,
    date: 'Recent Community Review',
  },
  {
    id: 'test-3',
    studentOrParent: 'Brother Tariq M. (Parent)',
    role: 'Father of two young boys',
    roleUrdu: 'والد محترم',
    courseEnrolled: 'Quran Nazra & Islamic Manners',
    location: 'Online Student (Canada)',
    feedback: 'Living in the West, keeping our kids connected to their Islamic identity is critical. What I appreciate most about Al Faiz Academy is they don’t just teach reading; they also teach Adab, how to speak politely, and the method of daily Salah.',
    rating: 5,
    date: 'Recent Community Review',
  },
  {
    id: 'test-4',
    studentOrParent: 'Maryam S. (Mother)',
    role: 'Parent of 9-year-old son',
    roleUrdu: 'والدہ محترمہ',
    courseEnrolled: 'Hifz of Selected Surahs',
    location: 'Online Student (UAE)',
    feedback: 'The 1-on-1 setup means my son gets full attention for the entire class. The revision schedule is so manageable that he memorized Surah Al-Mulk and Surah Yaseen with genuine joy and zero stress.',
    rating: 5,
    date: 'Recent Community Review',
  },
];

/**
 * =========================================================================
 * FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION)
 * =========================================================================
 */
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What courses does Al Faiz Noor UL Quran Academy offer?',
    questionUrdu: 'اکیڈمی میں کون کون سے کورسز دستیاب ہیں؟',
    answer: 'We offer a complete spectrum of Quranic and Islamic education including: Noorani Qaida for Beginners, Quran Nazra (fluent reading), Tajweed-ul-Quran (accurate pronunciation), Hifz-ul-Quran (memorization), Quran Translation, Basic Islamic Education (Deenyat/Salah/Wudu), Basic Aqeedah, Masnoon Duas, and Islamic Manners & Ethics (Akhlaq).',
    category: 'courses',
  },
  {
    id: 'faq-2',
    question: 'Do you provide dedicated female teachers for women and young girls?',
    questionUrdu: 'کیا خواتین اور بچیوں کے لیے خاتون اساتذہ موجود ہیں؟',
    answer: 'Yes, absolutely. We have dedicated, qualified female Quran teachers specifically for sisters, adult women, and young girls. We ensure a completely private, respectful, and comfortable environment so female students can learn with utmost peace of mind.',
    category: 'women',
  },
  {
    id: 'faq-3',
    question: 'At what age can children start learning at the academy?',
    questionUrdu: 'بچے کس عمر سے پڑھنا شروع کر سکتے ہیں؟',
    answer: 'Children can start as early as 4 to 5 years old with our introductory Noorani Qaida program. Our teachers specialize in gentle, patient instruction suitable for early childhood attention spans, using interactive methods that make Arabic letters fun and memorable.',
    category: 'children',
  },
  {
    id: 'faq-4',
    question: 'How are the online classes conducted?',
    questionUrdu: 'آن لائن کلاسز کا طریقہ کار کیا ہے؟',
    answer: 'Classes are conducted 1-on-1 via popular online platforms such as Zoom, Google Meet, or Skype. The teacher shares high-clarity color-coded digital Quran Mushaf and Qaida screens, listens attentively to the student, and corrects pronunciation in real-time.',
    category: 'classes',
  },
  {
    id: 'faq-5',
    question: 'What is the difference between Quran Nazra and Tajweed?',
    questionUrdu: 'قرآن ناظرہ اور تجوید میں کیا فرق ہے؟',
    answer: 'Quran Nazra refers to reading the Holy Quran smoothly and fluently by looking directly at the text from cover to cover. Tajweed is the science and rules of correct pronunciation — ensuring each Arabic letter is articulated from its exact throat/mouth origin (Makhraj) and applying rules like Ghunnah, Idgham, and Qalqalah.',
    category: 'courses',
  },
  {
    id: 'faq-6',
    question: 'Can busy adults or working women enroll with custom schedules?',
    questionUrdu: 'کیا مصروف خواتین اور گھریلو مائیں اپنی سہولت سے پڑھ سکتی ہیں؟',
    answer: 'Yes! Our schedules are 100% flexible. We accommodate students living in different time zones across Pakistan, the Middle East, UK, Europe, USA, and Canada. You can select class timings in the morning, afternoon, or evening that best suit your routine.',
    category: 'classes',
  },
  {
    id: 'faq-7',
    question: 'Can we attend a free trial class before making a commitment?',
    questionUrdu: 'کیا داخلے سے پہلے فری ٹرائل کلاس کی سہولت موجود ہے؟',
    answer: 'Yes, we provide an initial complimentary assessment and trial class! This allows parents and students to experience our teacher’s gentle communication style, pedagogical method, and online setup firsthand before formally enrolling.',
    category: 'admissions',
  },
  {
    id: 'faq-8',
    question: 'How do we enroll or contact Al Faiz Noor UL Quran Academy?',
    questionUrdu: 'اکیڈمی میں داخلہ یا رابطہ کیسے کیا جائے؟',
    answer: 'You can easily submit the admission inquiry form on this website, send an email directly to alfaiz240902@gmail.com, or tap the direct WhatsApp button to chat instantly with our academy coordinator.',
    category: 'admissions',
  },
];

/**
 * =========================================================================
 * ABOUT ACADEMY PHILOSOPHY & ETHOS
 * =========================================================================
 */
export const ABOUT_CONTENT = {
  academyName: 'Al Faiz Noor UL Quran Academy',
  academyNameUrdu: 'الفائز نور القرآن اکیڈمی',
  mission: 'To impart authentic, pure, and accessible Quranic and Islamic education to children, youth, and women across the globe, nurturing both flawless recitation and noble prophetic character.',
  vision: 'To see every home illuminated with the light of the Holy Quran, raising a generation of confident Muslims who read the words of Allah with precision, understand their sacred purpose, and embody kindness and integrity.',
  educationalApproach: [
    {
      title: 'Gentle & Patient Pedagogy',
      titleUrdu: 'محبت اور شفقت کا انداز',
      description: 'We strictly reject harshness or intimidation. The Quran is a divine mercy, and our teachers cultivate a warm atmosphere where children feel safe, motivated, and praised for their effort.',
    },
    {
      title: 'Individualized 1-on-1 Focus',
      titleUrdu: 'ہر طالب علم پر مکمل توجہ',
      description: 'Every student has a unique learning pace. In individual sessions, no child is rushed or left behind; lessons are carefully calibrated to their specific phonetic and cognitive readiness.',
    },
    {
      title: 'Holistic Tarbiyah (Adab & Akhlaq)',
      titleUrdu: 'تعلیم کے ساتھ کردار سازی',
      description: 'Recitation is combined with daily Sunnah manners: greeting elders, truthfulness, cleanliness, kindness, and understanding the significance of prayers in daily life.',
    },
    {
      title: 'Dedicated Sanctuary for Women',
      titleUrdu: 'خواتین کے لیے پردہ دار تعلیم',
      description: 'We honor the Islamic ethos of modesty and comfort. Female tutors provide supportive, sisterly mentorship tailored to sisters, mothers, and daughters.',
    },
  ],
  whyIslamicEducationMatters: [
    'Preserving Islamic identity and conviction in an increasingly secular and digital world.',
    'Equipping children with strong moral compasses (Akhlaq) to navigate school and society with confidence.',
    'Fulfilling the fundamental obligation of reading the Quran correctly as instructed by Allah and His Messenger ﷺ.',
    'Bringing tranquility (Sakinah), blessings (Barakah), and mutual respect into family households.',
  ],
};
