export type Language = 'en' | 'ur' | 'ar';

export interface TranslationDict {
  langCode: Language;
  langName: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  fontClass: string;

  nav: {
    home: string;
    services: string;
    about: string;
    whyUs: string;
    journey: string;
    gallery: string;
    faq: string;
    contact: string;
    admissionBtn: string;
    whatsapp: string;
    onlineAcademy: string;
  };

  hero: {
    bismillah: string;
    welcomeBadge: string;
    mainTitlePrefix: string;
    mainTitleHighlight: string;
    academyUrdu: string;
    tagline: string;
    taglineSub: string;
    intro: string;
    quranVerseArabic: string;
    quranVerseTranslation: string;
    ctaPrimary: string;
    ctaSecondary: string;
    admissionsOpen: string;
    whatsappConsultation: string;
    badges: {
      femaleTutors: string;
      femaleTutorsSub: string;
      oneOnOne: string;
      childPatience: string;
      childPatienceSub: string;
      freeTrial: string;
    };
  };

  services: {
    badge: string;
    title: string;
    subtitle: string;
    allCourses: string;
    foundation: string;
    quranTajweed: string;
    kidsWomen: string;
    deenyatEthics: string;
    categories: {
      all: string;
      foundation: string;
      quran: string;
      specialized: string;
      islamicStudies: string;
    };
    learnMore: string;
    inquireNow: string;
    viewDetails: string;
    recommendedDuration: string;
    levelLabel: string;
    targetLabel: string;
  };

  about: {
    badge: string;
    title: string;
    subtitle: string;
    intro: string;
    missionTitle: string;
    visionTitle: string;
    valuesTitle: string;
  };

  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
  };

  contact: {
    badge: string;
    title: string;
    subtitle: string;
    officialChannels: string;
    officialEmail: string;
    clickToSend: string;
    officialWhatsApp: string;
    clickToChat: string;
    facebookCommunity: string;
    formTitle: string;
    formSubtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    emailAddress: string;
    emailPlaceholder: string;
    phoneOrWhatsApp: string;
    phonePlaceholder: string;
    studentAge: string;
    agePlaceholder: string;
    categoryGender: string;
    femaleOption: string;
    maleOption: string;
    courseInterested: string;
    learningMode: string;
    modeOneOnOne: string;
    modeWeekend: string;
    modeFlexible: string;
    preferredTiming: string;
    timingFlexible: string;
    timingMorning: string;
    timingEvening: string;
    timingWeekend: string;
    messageNotes: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    continueWhatsApp: string;
    doneButton: string;
    submitAnother: string;
    whatsappNow: string;
    age: string;
    gender: string;
    female: string;
    male: string;
    selectCourse: string;
    phone: string;
    notes: string;
  };

  footer: {
    rights: string;
    quickLinks: string;
    courses: string;
    contactUs: string;
    designedFor: string;
  };
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    langCode: 'en',
    langName: 'English',
    nativeName: 'English',
    direction: 'ltr',
    fontClass: 'font-sans',
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      whyUs: 'Why Us',
      journey: 'Journey',
      gallery: 'Gallery',
      faq: 'FAQ',
      contact: 'Contact',
      admissionBtn: 'Admission / Enroll',
      whatsapp: 'WhatsApp',
      onlineAcademy: 'Online Academy',
    },
    hero: {
      bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      welcomeBadge: 'Welcome to Al Faiz Academy',
      mainTitlePrefix: 'Al Faiz Noor UL Quran',
      mainTitleHighlight: 'Academy',
      academyUrdu: 'الفائز نور القرآن اکیڈمی',
      tagline: 'Learn Quran, Build Character, Live with Faith',
      taglineSub: 'قرآن سیکھیں، کردار سنواریں، ایمان کے ساتھ جئیں',
      intro: 'A serene, trust-centered online Islamic academy dedicated to nurturing young minds and sisters. We provide structured 1-on-1 personalized Quran reading, flawless Tajweed, essential Deenyat, and moral Tarbiyah (ethics & manners) from the comfort and privacy of your home.',
      quranVerseArabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
      quranVerseTranslation: 'Read in the name of your Lord who created — Surah Al-Alaq (96:1)',
      ctaPrimary: 'Start Your Learning Journey',
      ctaSecondary: 'Explore Our Services',
      admissionsOpen: 'Admissions Open',
      whatsappConsultation: 'Chat instantly on WhatsApp for consultation',
      badges: {
        femaleTutors: 'Dedicated Female Tutors',
        femaleTutorsSub: 'Safe & Private Environment',
        oneOnOne: '1-on-1 Individual Sessions',
        childPatience: 'Child-Centric Patience',
        childPatienceSub: 'Patience & Encouragement',
        freeTrial: 'Free Assessment Class',
      },
    },
    services: {
      badge: 'Comprehensive Islamic Curriculum',
      title: 'Our Academy Services & Courses',
      subtitle: 'Tailored programs crafted with love and patience for children, youth, and women. Every course includes 1-on-1 personalized attention, flexible hours, and qualified mentorship.',
      allCourses: 'All Programs',
      foundation: 'Foundation (Qaida)',
      quranTajweed: 'Quran & Tajweed',
      kidsWomen: 'Kids & Women Focus',
      deenyatEthics: 'Deenyat & Ethics',
      categories: {
        all: 'All Programs',
        foundation: 'Foundation (Qaida)',
        quran: 'Quran & Tajweed',
        specialized: 'Kids & Women Focus',
        islamicStudies: 'Deenyat & Ethics',
      },
      learnMore: 'Learn More',
      inquireNow: 'Inquire Now',
      viewDetails: 'Course Details',
      recommendedDuration: 'Recommended Duration',
      levelLabel: 'Difficulty Level',
      targetLabel: 'Target Students',
    },
    about: {
      badge: 'About Our Institution',
      title: 'About Al Faiz Noor UL Quran Academy',
      subtitle: 'A sacred online learning environment built upon sincere dedication to the Holy Quran, Tajweed accuracy, and timeless Islamic Tarbiyah.',
      intro: 'Founded with sincere devotion to the preservation and teaching of the Holy Quran, Al Faiz Noor UL Quran Academy is dedicated to providing high-quality, authentic, and compassionate Quranic instruction across the globe with a special emphasis on children and sisters.',
      missionTitle: 'Our Mission',
      visionTitle: 'Our Vision',
      valuesTitle: 'Our Core Values',
    },
    whyUs: {
      badge: 'Why Al Faiz Academy',
      title: 'Dedicated to Excellence & Trust',
      subtitle: 'We provide individual attention, certified female and male tutors, flexible scheduling, and a caring, patient atmosphere for your family.',
    },
    contact: {
      badge: 'Admission & Direct Contact',
      title: 'Contact Al Faiz Academy & Enroll',
      subtitle: 'Begin your child’s or sister’s sacred Quranic learning journey today. Fill out the inquiry form below, send an email, or reach out directly on WhatsApp for prompt consultation.',
      officialChannels: 'Official Communication Channels',
      officialEmail: 'Official Academy Email',
      clickToSend: 'Click to send email directly',
      officialWhatsApp: 'Official WhatsApp Support',
      clickToChat: 'Click to start WhatsApp chat',
      facebookCommunity: 'Official Facebook Page',
      formTitle: 'Online Admission Inquiry Form',
      formSubtitle: 'Fill out this brief form to schedule your complimentary assessment class.',
      fullName: 'Student / Parent Full Name',
      fullNamePlaceholder: 'e.g. Fatima / Zayd / Brother Ali',
      emailAddress: 'Email Address',
      emailPlaceholder: 'e.g. yourname@example.com',
      phoneOrWhatsApp: 'WhatsApp / Phone Number',
      phonePlaceholder: 'e.g. +92 300 1234567 or international',
      studentAge: 'Student Age',
      agePlaceholder: 'e.g. 7 or Adult',
      categoryGender: 'Student Category / Gender',
      femaleOption: 'Female / Sister',
      maleOption: 'Male (Child/Youth)',
      courseInterested: 'Course / Service Interested In',
      learningMode: 'Preferred Learning Mode',
      modeOneOnOne: '1-on-1 Online Class (Recommended)',
      modeWeekend: 'Weekend-Only Module',
      modeFlexible: 'Flexible Self-Paced Schedule',
      preferredTiming: 'Preferred Class Timing',
      timingFlexible: 'Flexible / Afternoon or Evening Slot',
      timingMorning: 'Morning Hours',
      timingEvening: 'Evening Hours',
      timingWeekend: 'Weekend Hours',
      messageNotes: 'Message / Special Requests (Optional)',
      messagePlaceholder: 'Please mention any specific goals, prior Quran reading level, or preferred class times...',
      submitButton: 'Submit Admission Inquiry',
      submitting: 'Processing Submission...',
      successTitle: 'JazakAllahu Khairan!',
      successMessage: 'Your admission inquiry has been received. Our team will review your details and contact you shortly for your free assessment class.',
      continueWhatsApp: 'Continue on WhatsApp',
      doneButton: 'Done',
      submitAnother: 'Submit Another Inquiry',
      whatsappNow: 'Chat on WhatsApp',
      age: 'Student Age',
      gender: 'Student Category / Gender',
      female: 'Female / Sister',
      male: 'Male (Child/Youth)',
      selectCourse: 'Selected Course',
      phone: 'WhatsApp / Phone',
      notes: 'Notes / Preferred Time (Optional)',
    },
    footer: {
      rights: 'All rights reserved.',
      quickLinks: 'Navigation Links',
      courses: 'Featured Courses',
      contactUs: 'Direct Academy Contact',
      designedFor: 'Dedicated to children and sisters worldwide.',
    },
  },

  ur: {
    langCode: 'ur',
    langName: 'اردو',
    nativeName: 'اردو',
    direction: 'rtl',
    fontClass: 'font-urdu',
    nav: {
      home: 'صفحۂ اول',
      services: 'کورسز و خدمات',
      about: 'اکیڈمی کا تعارف',
      whyUs: 'ہمارا انتخاب کیوں',
      journey: 'تعلیمی مراحل',
      gallery: 'تصاویر و نمائش',
      faq: 'اکثر پوچھے گئے سوالات',
      contact: 'داخلہ و رابطہ',
      admissionBtn: 'آن لائن داخلہ / رجسٹریشن',
      whatsapp: 'واٹس ایپ',
      onlineAcademy: 'آن لائن اکیڈمی',
    },
    hero: {
      bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      welcomeBadge: 'الفائز نور القرآن اکیڈمی میں خوش آمدید',
      mainTitlePrefix: 'الفائز نور القرآن',
      mainTitleHighlight: 'اکیڈمی',
      academyUrdu: 'الفائز نور القرآن اکیڈمی',
      tagline: 'قرآن سیکھیں، کردار سنواریں، ایمان کے ساتھ جئیں',
      taglineSub: 'بچوں اور خواتین کے لیے خصوصی آن لائن قرآنی و دینی تعلیم',
      intro: 'ایک پُرسکون اور قابلِ اعتماد آن لائن اسلامی اکیڈمی جو خاص طور پر بچوں اور خواتین کی دینی و اخلاقی تربیت کے لیے قائم کی گئی ہے۔ ہم گھر کے پُروقار ماحول میں ون آن ون انفرادی توجہ کے ساتھ نورانی قاعدہ، تجوید، حفظ اور بنیادی دینیات سکھاتے ہیں۔',
      quranVerseArabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
      quranVerseTranslation: 'پڑھو اپنے رب کے نام سے جس نے پیدا کیا — سورۃ العلق (96:1)',
      ctaPrimary: 'تعلیمی سفر کا آغاز کریں',
      ctaSecondary: 'ہمارے کورسز دیکھیں',
      admissionsOpen: 'داخلے جاری ہیں',
      whatsappConsultation: 'فوری رہنمائی کے لیے واٹس ایپ پر رابطہ کریں',
      badges: {
        femaleTutors: 'باصلاحیت معلمہ اساتذہ',
        femaleTutorsSub: 'پردہ دار اور محفوظ ماحول',
        oneOnOne: 'انفرادی کلاسز (ون آن ون)',
        childPatience: 'بچوں کے ساتھ شفقت و محبت',
        childPatienceSub: 'صبر اور حوصلہ افزائی',
        freeTrial: 'مفت ٹرائل کلاس کی سہولت',
      },
    },
    services: {
      badge: 'جامع اسلامی و قرآنی نصاب',
      title: 'اکیڈمی کے کورسز اور خدمات',
      subtitle: 'بچوں، نوجوانوں اور خواتین کے لیے محبت اور صبر کے ساتھ تیار کیے گئے خصوصی تعلیمی پروگرام۔ ہر کورس میں انفرادی رہنمائی اور لچکدار اوقات میسر ہیں۔',
      allCourses: 'تمام کورسز',
      foundation: 'بنیادی قاعدہ',
      quranTajweed: 'قرآن و تجوید',
      kidsWomen: 'بچے اور خواتین',
      deenyatEthics: 'دینیات و اخلاقیات',
      categories: {
        all: 'تمام کورسز',
        foundation: 'بنیادی قاعدہ',
        quran: 'قرآن و تجوید',
        specialized: 'بچے اور خواتین',
        islamicStudies: 'دینیات و اخلاقیات',
      },
      learnMore: 'مزید تفصیلات',
      inquireNow: 'داخلہ معلومات',
      viewDetails: 'کورس کی تفصیل',
      recommendedDuration: 'مجوزہ دورانیہ',
      levelLabel: 'تعلیمی درجہ',
      targetLabel: 'طلباء کی کیٹیگری',
    },
    about: {
      badge: 'اکیڈمی کا تعارف',
      title: 'الفائز نور القرآن اکیڈمی کا مشن اور ویژن',
      subtitle: 'ایک پُرسکون اور پُراعتماد آن لائن تعلیمی ادارہ جو قرآنی علوم، درست تجوید اور اسلامی اخلاق و کردار سنوارنے کے لیے وقف ہے۔',
      intro: 'قرآن پاک کی تعلیم کو عام کرنے اور نئی نسل کے دلوں میں عشقِ رسول ﷺ پیدا کرنے کے لیے وقف، الفائز نور القرآن اکیڈمی پوری دنیا میں اعلیٰ معیاری اور مستند تعلیم فراہم کرتی ہے۔',
      missionTitle: 'ہمارا مشن',
      visionTitle: 'ہمارا نصب العین',
      valuesTitle: 'ہمارے بنیادی اصول',
    },
    whyUs: {
      badge: 'ہمارا انتخاب کیوں؟',
      title: 'اعتماد، فضیلت اور انفرادی توجہ',
      subtitle: 'ہم ہر طالب علم کو ون آن ون انفرادی توجہ، باصلاحیت خواتین و مرد اساتذہ اور لچکدار اوقات کار فراہم کرتے ہیں۔',
    },
    contact: {
      badge: 'داخلہ اور براہِ راست رابطہ',
      title: 'الفائز اکیڈمی سے رابطہ اور داخلہ',
      subtitle: 'اپنے بچے یا بہن کے مبارک قرآنی سفر کا آج ہی آغاز فرمائیں۔ ذیل میں فارم پُر کریں یا فوری رہنمائی کے لیے واٹس ایپ پر رابطہ فرمائیں۔',
      officialChannels: 'رابطے کے باضابطہ ذرائع',
      officialEmail: 'اکیڈمی کا آفیشل ای میل',
      clickToSend: 'براہ راست ای میل بھیجیں',
      officialWhatsApp: 'آفیشل واٹس ایپ سپورٹ',
      clickToChat: 'واٹس ایپ پر میسج بھیجیں',
      facebookCommunity: 'آفیشل فیس بک پیج',
      formTitle: 'آن لائن داخلہ انکوائری فارم',
      formSubtitle: 'مفت ٹرائل کلاس کے لیے بنیادی معلومات درج فرمائیں۔',
      fullName: 'طالب علم / سرپرست کا پورا نام',
      fullNamePlaceholder: 'مثلاً: فاطمہ / محمد علی / احمد',
      emailAddress: 'ای میل ایڈریس',
      emailPlaceholder: 'آپ کا ای میل پتہ',
      phoneOrWhatsApp: 'واٹس ایپ یا فون نمبر',
      phonePlaceholder: 'مثلاً: 0300 1234567',
      studentAge: 'طالب علم کی عمر',
      agePlaceholder: 'مثلاً: 6 سال یا بالغ',
      categoryGender: 'کیٹیگری / صنف',
      femaleOption: 'خواتین / بچیاں',
      maleOption: 'طلباء / بچے',
      courseInterested: 'مطلوبہ کورس منتخب کریں',
      learningMode: 'پڑھنے کا طریقہ کار',
      modeOneOnOne: 'ون آن ون انفرادی آن لائن کلاس',
      modeWeekend: 'صرف ہفتہ اور اتوار (ویک اینڈ)',
      modeFlexible: 'لچکدار اوقات کار',
      preferredTiming: 'کلاس کا پسندیدہ وقت',
      timingFlexible: 'لچکدار / شام کا وقت',
      timingMorning: 'صبح کے اوقات',
      timingEvening: 'شام کے اوقات',
      timingWeekend: 'ہفتہ اور اتوار کے اوقات',
      messageNotes: 'کوئی خاص بات یا پیغام (اختیاری)',
      messagePlaceholder: 'کوئی مخصوص ہدایات یا ٹائمنگ درج فرمائیں...',
      submitButton: 'داخلہ درخواست جمع کروائیں',
      submitting: 'درخواست بھیجی جا رہی ہے...',
      successTitle: 'جزاکم اللہ خیراً!',
      successMessage: 'آپ کی داخلہ انکوائری کامیابی کے ساتھ موصول ہو چکی ہے۔ ہماری ٹیم جلد ہی مفت ٹرائل کے سلسلے میں آپ سے رابطہ کرے گی۔',
      continueWhatsApp: 'واٹس ایپ پر بات چیت جاری رکھیں',
      doneButton: 'مکمل ہو گیا',
      submitAnother: 'ایک اور درخواست جمع کروائیں',
      whatsappNow: 'واٹس ایپ پر رابطہ کریں',
      age: 'طالب علم کی عمر',
      gender: 'طالب علم کی صنف',
      female: 'خواتین / بچیاں',
      male: 'طلباء / بچے',
      selectCourse: 'مطلوبہ کورس',
      phone: 'واٹس ایپ یا فون نمبر',
      notes: 'اضافی پیغام یا پسندیدہ اوقات',
    },
    footer: {
      rights: 'تمام جملہ حقوق محفوظ ہیں۔',
      quickLinks: 'فوری روابط',
      courses: 'اہم کورسز',
      contactUs: 'اکیڈمی سے رابطہ',
      designedFor: 'دنیا بھر کے معصوم بچوں اور خواتین کے لیے وقف۔',
    },
  },

  ar: {
    langCode: 'ar',
    langName: 'العربية',
    nativeName: 'العربية',
    direction: 'rtl',
    fontClass: 'font-arabic',
    nav: {
      home: 'الرئيسية',
      services: 'الدورات والخدمات',
      about: 'عن الأكاديمية',
      whyUs: 'لماذا تختارنا',
      journey: 'المسار التعليمي',
      gallery: 'معرض الأنشطة',
      faq: 'الأسئلة الشائعة',
      contact: 'التسجيل والتواصل',
      admissionBtn: 'التسجيل والالتحاق',
      whatsapp: 'واتساب',
      onlineAcademy: 'أكاديمية إلكترونية',
    },
    hero: {
      bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      welcomeBadge: 'مرحباً بكم في أكاديمية الفائز نور القرآن',
      mainTitlePrefix: 'أكاديمية الفائز',
      mainTitleHighlight: 'نور القرآن',
      academyUrdu: 'الفائز نور القرآن اکیڈمی',
      tagline: 'تعلم القرآن، اصنع الأخلاق، وعش بالإيمان',
      taglineSub: 'تعليم قرآني وإسلامي متميز للأطفال والنساء عبر الإنترنت',
      intro: 'أكاديمية إسلامية عبر الإنترنت مكرسة لتعليم القرآن الكريم وعلومه للأطفال والأخوات. نوفر تعليماً فردياً مباشراً (1-on-1) لقراءة القرآن، وإتقان التجويد، والحفظ، والدراسات الإسلامية والآداب النبوية.',
      quranVerseArabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
      quranVerseTranslation: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ — سورة العلق (96:1)',
      ctaPrimary: 'ابدأ رحلتك التعليمية',
      ctaSecondary: 'استكشف برامجنا',
      admissionsOpen: 'التسجيل مفتوح حالياً',
      whatsappConsultation: 'تواصل مباشرة عبر واتساب للاستفسار والتسجيل',
      badges: {
        femaleTutors: 'معلمات متخصصات ومجازات',
        femaleTutorsSub: 'بيئة تعليمية مريحة وخاصة',
        oneOnOne: 'دروس فردية مباشرة (1-on-1)',
        childPatience: 'صبر وتشجيع مستمر للأطفال',
        childPatienceSub: 'أسلوب تربوي لطيف ومحبب',
        freeTrial: 'حصة تقييمية مجانية',
      },
    },
    services: {
      badge: 'مناهج إسلامية وقرآنية متكاملة',
      title: 'برامج ودورات الأكاديمية',
      subtitle: 'برامج مخصصة مصممة بعناية فائقة للأطفال والناشئة والأخوات، مع معلمين مؤهلين ومواعيد مرنة تناسبكم.',
      allCourses: 'جميع البرامج',
      foundation: 'القاعدة التأسيسية',
      quranTajweed: 'القرآن والتجويد',
      kidsWomen: 'الأطفال والنساء',
      deenyatEthics: 'الدراسات الإسلامية',
      categories: {
        all: 'جميع البرامج',
        foundation: 'القاعدة التأسيسية',
        quran: 'القرآن والتجويد',
        specialized: 'الأطفال والنساء',
        islamicStudies: 'الدراسات الإسلامية',
      },
      learnMore: 'معرفة المزيد',
      inquireNow: 'طلب الالتحاق',
      viewDetails: 'تفاصيل الدورة',
      recommendedDuration: 'المدة المقترحة',
      levelLabel: 'المستوى',
      targetLabel: 'الفئة المستهدفة',
    },
    about: {
      badge: 'عن المؤسسة',
      title: 'نبذة عن أكاديمية الفائز نور القرآن',
      subtitle: 'بيئة تعليمية قرآنية إلكترونية مباركة تعتمد على الاتقان والتجويد والتربية الإسلامية السمحة للأطفال والنساء.',
      intro: 'تأسست الأكاديمية خدمة لكتاب الله تعالى، وتهدف إلى تقديم تعليم قرآني متميز وراسخ للمسلمين في شتى بقاع الأرض.',
      missionTitle: 'رسالتنا',
      visionTitle: 'رؤيتنا',
      valuesTitle: 'قيمنا الأساسية',
    },
    whyUs: {
      badge: 'لماذا أكاديمية الفائز',
      title: 'التميز، الأمانة، والاهتمام الفردي',
      subtitle: 'نقدم دروساً فردية مخصصة، ومعلمات متخصصات، وأوقاتاً مرنة تضمن راحة الأسرة المسلمة.',
    },
    contact: {
      badge: 'التسجيل والتواصل المباشر',
      title: 'تواصل مع أكاديمية الفائز والتحق الآن',
      subtitle: 'ابدأ الرحلة المباركة لتعلم كتاب الله لك أو لأولادك اليوم. املأ النموذج أو تواصل معنا مباشرة عبر واتساب.',
      officialChannels: 'قنوات التواصل الرسمية',
      officialEmail: 'البريد الإلكتروني الرسمي',
      clickToSend: 'انقر للإرسال عبر البريد',
      officialWhatsApp: 'الدعم عبر واتساب',
      clickToChat: 'انقر للمحادثة الفورية',
      facebookCommunity: 'الصفحة الرسمية على فيسبوك',
      formTitle: 'نموذج طلب التسجيل والاستفسار',
      formSubtitle: 'يرجى تدوين البيانات لحجز الحصة التقييمية المجانية.',
      fullName: 'اسم الطالب أو ولي الأمر',
      fullNamePlaceholder: 'مثال: فاطمة / زياد',
      emailAddress: 'البريد الإلكتروني',
      emailPlaceholder: 'example@gmail.com',
      phoneOrWhatsApp: 'رقم الهاتف أو واتساب',
      phonePlaceholder: 'مثال: 1234567 300 92+',
      studentAge: 'عمر الطالب',
      agePlaceholder: 'مثال: 8 سنوات أو بالغ',
      categoryGender: 'الفئة / الجنس',
      femaleOption: 'أنثى / أخوات وبنات',
      maleOption: 'ذكر (أطفال وفتيان)',
      courseInterested: 'الدورة المرغوبة',
      learningMode: 'طريقة التعلم المفضلة',
      modeOneOnOne: 'جلسات فردية مباشرة (موصى بها)',
      modeWeekend: 'جلسات نهاية الأسبوع',
      modeFlexible: 'مواعيد مرنة',
      preferredTiming: 'التوقيت المفضل',
      timingFlexible: 'مرن / فترة مسائية',
      timingMorning: 'فترة صباحية',
      timingEvening: 'فترة مسائية',
      timingWeekend: 'عطلة نهاية الأسبوع',
      messageNotes: 'ملاحظات أو أسئلة إضافية (اختياري)',
      messagePlaceholder: 'اكتب أي ملاحظات أو أوقات تناسبك...',
      submitButton: 'إرسال طلب التسجيل',
      submitting: 'جاري الإرسال...',
      successTitle: 'جزاكم الله خيراً!',
      successMessage: 'تم استلام طلبكم بنجاح. سيتواصل معكم فريق الأكاديمية لترتيب الحصة التقييمية المجانية.',
      continueWhatsApp: 'المتابعة عبر واتساب مباشرة',
      doneButton: 'تم',
      submitAnother: 'إرسال طلب آخر',
      whatsappNow: 'تواصل عبر واتساب',
      age: 'عمر الطالب',
      gender: 'الفئة / الجنس',
      female: 'أنثى / أخوات وبنات',
      male: 'ذكر (أطفال وفتيان)',
      selectCourse: 'الدورة المختارة',
      phone: 'رقم الهاتف أو واتساب',
      notes: 'ملاحظات أو مواعيد مفضلة',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      quickLinks: 'روابط سريعة',
      courses: 'الدورات البارزة',
      contactUs: 'التواصل المباشر',
      designedFor: 'مخصص لخدمة كتاب الله لأطفال وأخوات المسلمين حول العالم.',
    },
  },
};
