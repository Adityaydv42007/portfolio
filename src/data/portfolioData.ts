import {
  ProjectItem,
  SkillCategory,
  AchievementItem,
  CredentialItem,
  CareerItem,
  Language,
} from '../types/portfolio';

export interface PortfolioConfig {
  personal: {
    name: string;
    monogram: string;
    titleEn: string;
    titleHi: string;
    subtitleEn: string;
    subtitleHi: string;
    locationEn: string;
    locationHi: string;
    phone: string;
    email: string;
    linkedin: string;
    whatsapp: string;
    resumePdfUrl: string;
    portraitPhotoUrl: string;
    isOpenToOpportunities: boolean;
  };
  navigation: {
    id: string;
    labelEn: string;
    labelHi: string;
  }[];
  translations: Record<Language, Record<string, string>>;
  about: {
    introEn: string;
    introHi: string;
    detailedBioEn: string[];
    detailedBioHi: string[];
    corePillarsEn: { title: string; desc: string }[];
    corePillarsHi: { title: string; desc: string }[];
  };
  career: CareerItem[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  credentials: CredentialItem[];
  workshops: {
    titleEn: string;
    titleHi: string;
    institution: string;
    year: string;
    descriptionEn: string;
    descriptionHi: string;
  }[];
}

export const portfolioData: PortfolioConfig = {
  personal: {
    name: 'Aditya Yadav',
    monogram: 'AY',
    titleEn: 'AI · Data Analytics · Technical Education',
    titleHi: 'आर्टिफिशियल इंटेलिजेंस · डेटा एनालिटिक्स · तकनीकी शिक्षा',
    subtitleEn: 'Automating data pipelines, quantitative financial models, and modern AI systems with rigorous discipline and analytical insight.',
    subtitleHi: 'सख्त अनुशासन और विश्लेषणात्मक अंतर्दृष्टि के साथ डेटा पाइपलाइन, मात्रात्मक वित्तीय मॉडल और आधुनिक एआई सिस्टम का निर्माण।',
    locationEn: 'Kanpur, Uttar Pradesh, India',
    locationHi: 'कानपुर, उत्तर प्रदेश, भारत',
    phone: '+91 9956237287',
    email: 'adityaydv42007@gmail.com',
    linkedin: 'https://linkedin.com/in/adityayadav42007',
    whatsapp: 'https://wa.me/919956237287',
    resumePdfUrl: '/assets/aistudio/Aditya_Yadav_Finance_Resume_e8e0c523.pdf',
    portraitPhotoUrl: '/assets/aistudio/photo_f0242c46.jpeg',
    isOpenToOpportunities: true,
  },

  navigation: [
    { id: 'hero', labelEn: 'Home', labelHi: 'होम' },
    { id: 'about', labelEn: 'About', labelHi: 'परिचय' },
    { id: 'journey', labelEn: 'Journey', labelHi: 'सफ़र' },
    { id: 'skills', labelEn: 'Skills', labelHi: 'कौशल' },
    { id: 'projects', labelEn: 'Projects', labelHi: 'परियोजनाएं' },
    { id: 'achievements', labelEn: 'Achievements', labelHi: 'उपलब्धियां' },
    { id: 'credentials', labelEn: 'Credentials', labelHi: 'शिक्षा व प्रमाणन' },
    { id: 'contact', labelEn: 'Contact', labelHi: 'संपर्क' },
  ],

  translations: {
    en: {
      openToOpportunities: 'Open to Opportunities',
      exploreWork: 'Explore My Work',
      viewResume: 'View Resume',
      downloadResume: 'Download Resume',
      aboutHeading: 'About & Perspective',
      aboutKicker: 'Executive Summary',
      journeyHeading: 'Career & Academic Journey',
      journeyKicker: 'Milestones & Progression',
      skillsHeading: 'Skills & Toolset',
      skillsKicker: 'Capabilities Matrix',
      projectsHeading: 'Featured Practical Work',
      projectsKicker: 'Hands-On Projects',
      achievementsHeading: 'Achievements & Industrial Exposure',
      achievementsKicker: 'Milestones & Field Work',
      credentialsHeading: 'Education & Certifications',
      credentialsKicker: 'Formal Credentials',
      workshopsHeading: 'Workshops & Seminars',
      workshopsKicker: 'Continuous Learning',
      contactHeading: 'Get in Touch',
      contactKicker: 'Direct Inquiries',
      allFilter: 'All Projects',
      copySuccess: 'Copied to clipboard!',
      copyLabel: 'Copy',
      closeModal: 'Close',
      previewProject: 'View Project Details',
      previewCertificate: 'View Credential',
      profileCustomizerTitle: 'Portfolio Preferences',
      profileCompletion: 'Profile Readiness',
      downloadPdf: 'Download PDF',
      openNewTab: 'Open in New Tab',
      backToTop: 'Back to Top',
      copyright: 'Aditya Yadav. All rights reserved.',
      quickLinks: 'Navigation',
      contactInfo: 'Direct Contacts',
      toolsUsed: 'Tools & Technologies',
      keyOutcomes: 'Key Outcomes & Practice Scope',
      methodology: 'Methodology & Structure',
      skipIntro: 'Skip Intro',
      statusCompleted: 'Completed',
      statusPursuing: 'Currently Pursuing',
      statusOngoing: 'Ongoing',
      switchTheme: 'Toggle theme',
      switchLanguage: 'Switch to Hindi',
    },
    hi: {
      openToOpportunities: 'उपलब्ध: नए अवसरों के लिए',
      exploreWork: 'मेरा कार्य देखें',
      viewResume: 'बायोडाटा देखें',
      downloadResume: 'बायोडाटा डाउनलोड करें',
      aboutHeading: 'मेरे बारे में और दृष्टिकोण',
      aboutKicker: 'संक्षिप्त विवरण',
      journeyHeading: 'करियर और शैक्षणिक यात्रा',
      journeyKicker: 'मील के पत्थर और प्रगति',
      skillsHeading: 'कौशल और उपकरण',
      skillsKicker: 'क्षमता मैट्रिक्स',
      projectsHeading: 'व्यावहारिक और विश्लेषणात्मक कार्य',
      projectsKicker: 'हैंड्स-ऑन प्रोजेक्ट्स',
      achievementsHeading: 'उपलब्धियां और औद्योगिक अनुभव',
      achievementsKicker: 'व्यावहारिक अनुभव',
      credentialsHeading: 'शिक्षा एवं प्रमाणन',
      credentialsKicker: 'औपचारिक योग्यताएं',
      workshopsHeading: 'कार्यशालाएं और संगोष्ठी',
      workshopsKicker: 'निरंतर सीखना',
      contactHeading: 'सीधा संपर्क करें',
      contactKicker: 'पूछताछ',
      allFilter: 'सभी परियोजनाएं',
      copySuccess: 'क्लिपबोर्ड पर कॉपी हो गया!',
      copyLabel: 'कॉपी करें',
      closeModal: 'बंद करें',
      previewProject: 'परियोजना विवरण देखें',
      previewCertificate: 'प्रमाणपत्र देखें',
      profileCustomizerTitle: 'पोर्टफोलियो प्राथमिकताएं',
      profileCompletion: 'प्रोफ़ाइल तत्परता',
      downloadPdf: 'पीडीएफ डाउनलोड करें',
      openNewTab: 'नई विंडो में खोलें',
      backToTop: 'ऊपर जाएं',
      copyright: 'आदित्य यादव। सर्वाधिकार सुरक्षित।',
      quickLinks: 'नेविगेशन',
      contactInfo: 'सीधा संपर्क विवरण',
      toolsUsed: 'उपकरण एवं तकनीकें',
      keyOutcomes: 'मुख्य परिणाम व अभ्यास का दायरा',
      methodology: 'कार्यप्रणाली एवं संरचना',
      skipIntro: 'छोड़ें (Skip)',
      statusCompleted: 'पूर्ण',
      statusPursuing: 'वर्तमान में अध्ययनरत',
      statusOngoing: 'जारी',
      switchTheme: 'थीम बदलें',
      switchLanguage: 'अंग्रेजी में बदलें (EN)',
    },
  },

  about: {
    introEn: 'BBA student with a solid grounding in financial accounting, business finance, and management fundamentals. Currently expanding expertise through a Master in Financial Accounting at VCEC Tally Academy while integrating practical MS Excel modeling and IBM AI fundamentals.',
    introHi: 'वित्तीय लेखांकन, व्यावसायिक वित्त और प्रबंधन के मूल सिद्धांतों में मजबूत समझ रखने वाले बीबीए छात्र। वर्तमान में वीसीईसी टैली अकादमी से वित्तीय लेखांकन में मास्टर डिग्री के साथ-साथ एमएस एक्सेल मॉडलिंग और आईबीएम एआई फंडामेंटल्स के माध्यम से अपनी विशेषज्ञता का विस्तार कर रहे हैं।',
    detailedBioEn: [
      'My academic and vocational journey centers on combining rigorous accounting disciplines with modern computational tools. Through intensive coursework at Allenhouse Business School, hands-on training at VCEC Tally Academy, and certifications from IBM SkillsBuild, I build reliable workflows for financial reporting, budgeting, and data analysis.',
      'Beyond theoretical finance, I actively study industrial operations, having completed on-site exposure at the Amul processing facility to understand supply chains, production cost control, and logistical management.',
      'I am driven by analytical thinking, attention to detail, and proactive problem-solving, seeking practical opportunities in financial analysis, accounting, and business reporting.'
    ],
    detailedBioHi: [
      'मेरी शैक्षणिक और व्यावसायिक यात्रा कठोर लेखांकन विषयों को आधुनिक तकनीकी उपकरणों के साथ जोड़ने पर केंद्रित है। एलेनहाउस बिजनेस स्कूल में अध्ययन, वीसीईसी टैली अकादमी में व्यावहारिक प्रशिक्षण और आईबीएम स्किल्सबिल्ड से प्रमाणन के माध्यम से, मैं वित्तीय रिपोर्टिंग, बजट और डेटा विश्लेषण के लिए विश्वसनीय कार्यप्रवाह तैयार करता हूं।',
      'सैद्धांतिक वित्त से परे, मैं औद्योगिक संचालन का सक्रिय अध्ययन करता हूं। मैंने आपूर्ति श्रृंखला, उत्पादन लागत नियंत्रण और लॉजिस्टिक प्रबंधन को प्रत्यक्ष समझने के लिए अमूल प्रसंस्करण संयंत्र का औद्योगिक दौरा किया है।',
      'मैं विश्लेषणात्मक सोच, बारीकियों पर ध्यान और सक्रिय समस्या-समाधान द्वारा प्रेरित हूं, और वित्तीय विश्लेषण, लेखांकन और व्यावसायिक रिपोर्टिंग में व्यावहारिक अवसरों की तलाश कर रहा हूं।'
    ],
    corePillarsEn: [
      {
        title: 'Financial Accounting Fundamentals',
        desc: 'Principles of double-entry bookkeeping, ledger account preparation, trial balance verification, and financial reporting standards.'
      },
      {
        title: 'Analytical Data Modeling',
        desc: 'Leveraging MS Excel functions (SUM, AVERAGE, IF, percentage trends) and organized tables for business decision-making.'
      },
      {
        title: 'AI-Assisted Business Research',
        desc: 'Certified in IBM SkillsBuild AI Fundamentals (Language & Vision in AI) to accelerate research and modern business workflows.'
      },
      {
        title: 'Operational Cost Control',
        desc: 'Practical exposure to factory-floor logistics, supply chain distribution, and cost auditing from real-world manufacturing plants.'
      }
    ],
    corePillarsHi: [
      {
        title: 'वित्तीय लेखांकन के मूल सिद्धांत',
        desc: 'दोहरी प्रविष्टि बहीखाता पद्धति, खाता बही तैयार करना, ट्रायल बैलेंस सत्यापन और वित्तीय रिपोर्टिंग मानक।'
      },
      {
        title: 'विश्लेषणात्मक डेटा मॉडलिंग',
        desc: 'व्यावसायिक निर्णय लेने के लिए एमएस एक्सेल फ़ंक्शंस (SUM, AVERAGE, IF, प्रतिशत रुझान) और तालिकाओं का उपयोग।'
      },
      {
        title: 'एआई-सहायता प्राप्त व्यावसायिक अनुसंधान',
        desc: 'आईबीएम स्किल्सबिल्ड एआई फंडामेंटल्स (एआई में भाषा और दृष्टि) में प्रमाणित, जो शोध और आधुनिक व्यावसायिक कार्यों को गति देता है।'
      },
      {
        title: 'परिचालन लागत नियंत्रण',
        desc: 'वास्तविक विनिर्माण संयंत्रों से फैक्ट्री-फ्लोर लॉजिस्टिक्स, आपूर्ति श्रृंखला वितरण और लागत ऑडिटिंग का व्यावहारिक अनुभव।'
      }
    ]
  },

  career: [
    {
      id: 'bba-allenhouse',
      period: '2024 – 2028 (Expected)',
      roleEn: 'Bachelor of Business Administration (BBA) Candidate',
      roleHi: 'बैचलर ऑफ बिजनेस एडमिनिस्ट्रेशन (BBA) छात्र',
      organization: 'Allenhouse Business School',
      location: 'Kanpur, Uttar Pradesh',
      summaryEn: 'Undergraduate business administration program focusing on business finance, managerial economics, organizational communication, and financial accounting.',
      summaryHi: 'व्यावसायिक वित्त, प्रबंधकीय अर्थशास्त्र, संगठनात्मक संचार और वित्तीय लेखांकन पर केंद्रित स्नातक व्यावसायिक प्रशासन कार्यक्रम।',
      bulletPointsEn: [
        'Studying core business management, financial accounting principles, and managerial finance.',
        'Active participant in academic seminars including Fintech Club and Brand Building workshops.',
        'Completed institutional training in advanced MS Excel spreadsheet modeling.'
      ],
      bulletPointsHi: [
        'व्यावसायिक प्रबंधन, वित्तीय लेखांकन सिद्धांतों और प्रबंधकीय वित्त का गहन अध्ययन।',
        'फिनटेक क्लब और ब्रांड निर्माण कार्यशालाओं सहित शैक्षणिक सम्मेलनों में सक्रिय भागीदारी।',
        'उन्नत एमएस एक्सेल स्प्रेडशीट मॉडलिंग में संस्थागत प्रशिक्षण पूरा किया।'
      ]
    },
    {
      id: 'vcec-tally',
      period: 'Currently Pursuing',
      roleEn: 'Master in Financial Accounting Scholar',
      roleHi: 'मास्टर इन फाइनेंशियल अकाउंटिंग शिक्षार्थी',
      organization: 'VCEC Tally Academy',
      location: 'Kanpur, Uttar Pradesh',
      summaryEn: 'Comprehensive vocational training in enterprise financial accounting, computerized bookkeeping using Tally, ledger balancing, and compliance fundamentals.',
      summaryHi: 'एंटरप्राइज वित्तीय लेखांकन, टैली का उपयोग करके कम्प्यूटरीकृत बहीखाता, लेजर संतुलन और अनुपालन मूल सिद्धांतों में व्यावहारिक प्रशिक्षण।',
      bulletPointsEn: [
        'Hands-on practice in voucher entries: sales, purchases, cash receipts, and vendor payments.',
        'Configuring chart of accounts, party ledgers, and inventory master data in Tally.',
        'Extracting trial balance, profit & loss statements, and balance sheet summaries.'
      ],
      bulletPointsHi: [
        'वाउचर प्रविष्टियों में व्यावहारिक अभ्यास: बिक्री, खरीद, नकद प्राप्तियां और भुगतान।',
        'टैली में चार्ट ऑफ अकाउंट्स, पार्टी लेजर और इन्वेंट्री मास्टर डेटा कॉन्फ़िगर करना।',
        'ट्रायल बैलेंस, लाभ और हानि विवरण, और बैलेंस शीट सारांश तैयार करना।'
      ]
    },
    {
      id: 'rg-academy',
      period: 'Completed',
      roleEn: 'Intermediate (Class XII)',
      roleHi: 'इंटरमीडिएट (कक्षा 12वीं)',
      organization: 'R G Academy',
      location: 'Kanpur, Uttar Pradesh',
      summaryEn: 'Higher secondary education establishing analytical foundation, quantitative problem-solving, and disciplined academic study habits.',
      summaryHi: 'उच्चतर माध्यमिक शिक्षा जिसने विश्लेषणात्मक नींव, मात्रात्मक समस्या समाधान और अनुशासित अध्ययन की नींव रखी।',
      bulletPointsEn: [
        'Completed senior secondary curriculum with strong focus on quantitative aptitude and discipline.',
        'Developed foundational communication, mathematical reasoning, and logical problem-solving.'
      ],
      bulletPointsHi: [
        'मात्रात्मक योग्यता और अनुशासन पर मजबूत ध्यान के साथ वरिष्ठ माध्यमिक पाठ्यक्रम पूरा किया।',
        'संवाद कौशल, गणितीय तर्क और तार्किक समस्या-समाधान की मजबूत नींव विकसित की।'
      ]
    }
  ],

  skillCategories: [
    {
      id: 'accounting_finance',
      nameEn: 'Financial Accounting & Core Finance',
      nameHi: 'वित्तीय लेखांकन एवं कोर वित्त',
      skills: [
        {
          name: 'Financial Accounting',
          descriptionEn: 'Double-entry bookkeeping, ledger management, trial balance creation, and journal entries.',
          descriptionHi: 'दोहरी प्रविष्टि बहीखाता, खाता बही प्रबंधन, ट्रायल बैलेंस निर्माण और जर्नल प्रविष्टियां।',
          categoryTag: 'Accounting'
        },
        {
          name: 'Tally & Computerized Accounting',
          descriptionEn: 'Voucher recording (sales, purchase, payments), ledger posting, and accounts reconciliation.',
          descriptionHi: 'वाउचर रिकॉर्डिंग (बिक्री, खरीद, भुगतान), लेजर पोस्टिंग और खातों का समाधान।',
          categoryTag: 'Software'
        },
        {
          name: 'Basic Financial Analysis',
          descriptionEn: 'Analyzing revenue, expense structures, margin changes, and working capital basics.',
          descriptionHi: 'राजस्व, व्यय संरचनाओं, मार्जिन परिवर्तनों और कार्यशील पूंजी का विश्लेषण।',
          categoryTag: 'Analysis'
        },
        {
          name: 'Budgeting Fundamentals',
          descriptionEn: 'Allocating resources, forecasting operating expenditures, and variance monitoring.',
          descriptionHi: 'संसाधनों का आवंटन, परिचालन व्यय का पूर्वानुमान और भिन्नता की निगरानी।',
          categoryTag: 'Budgeting'
        }
      ]
    },
    {
      id: 'data_analytics_tools',
      nameEn: 'Data Analytics & Spreadsheet Modeling',
      nameHi: 'डेटा विश्लेषण एवं स्प्रेडशीट मॉडलिंग',
      skills: [
        {
          name: 'Microsoft Excel',
          descriptionEn: 'Formula calculation (SUM, AVERAGE, IF), percentage variation, data tables, and charting.',
          descriptionHi: 'फ़ॉर्मूला गणना (SUM, AVERAGE, IF), प्रतिशत भिन्नता, डेटा टेबल और चार्टिंग।',
          categoryTag: 'Spreadsheets'
        },
        {
          name: 'Data Organization & Cleansing',
          descriptionEn: 'Structuring raw transactions, categorizing records, eliminating duplicates, and audit readiness.',
          descriptionHi: 'कच्चे लेनदेन को संरचित करना, रिकॉर्ड वर्गीकृत करना और ऑडिट तत्परता सुनिश्चित करना।',
          categoryTag: 'Data Management'
        },
        {
          name: 'Trend & Variance Analysis',
          descriptionEn: 'Evaluating income and expense trajectories over discrete reporting periods.',
          descriptionHi: 'विभिन्न रिपोर्टिंग अवधियों में आय और व्यय के प्रक्षेपवक्र का मूल्यांकन।',
          categoryTag: 'Quantitative'
        }
      ]
    },
    {
      id: 'ai_digital_technology',
      nameEn: 'AI & Emerging Technology Tools',
      nameHi: 'एआई एवं उभरती प्रौद्योगिकी उपकरण',
      skills: [
        {
          name: 'AI Fundamentals (Language & Vision)',
          descriptionEn: 'Certified by IBM SkillsBuild in foundational large language models, NLP, and computer vision concepts.',
          descriptionHi: 'आईबीएम स्किल्सबिल्ड द्वारा प्रमाणित: लार्ज लैंग्वेज मॉडल, एनएलपी और कंप्यूटर विज़न मूल बातें।',
          categoryTag: 'AI & ML'
        },
        {
          name: 'AI-Assisted Research',
          descriptionEn: 'Utilizing AI prompts and generative tools for accelerated literature review, financial research, and drafting.',
          descriptionHi: 'त्वरित साहित्य समीक्षा, वित्तीय शोध और प्रारूपण के लिए एआई उपकरणों का उपयोग।',
          categoryTag: 'Productivity'
        },
        {
          name: 'Digital Marketing Fundamentals',
          descriptionEn: 'Ongoing training in digital reach, online brand presence, and web analytics basics at Allenhouse.',
          descriptionHi: 'एलेनहाउस में डिजिटल पहुंच, ऑनलाइन ब्रांड उपस्थिति और वेब एनालिटिक्स का चल रहा प्रशिक्षण।',
          categoryTag: 'Marketing'
        }
      ]
    },
    {
      id: 'professional_competencies',
      nameEn: 'Analytical & Professional Competencies',
      nameHi: 'विश्लेषणात्मक एवं व्यावसायिक दक्षता',
      skills: [
        {
          name: 'Analytical Thinking',
          descriptionEn: 'Deconstructing complex financial scenarios into logical, quantifiable components.',
          descriptionHi: 'जटिल वित्तीय परिदृश्यों को तार्किक, मापने योग्य घटकों में विभाजित करना।',
          categoryTag: 'Mindset'
        },
        {
          name: 'Attention to Detail',
          descriptionEn: 'Precision in transaction entries, mathematical cross-checks, and ledger reconciliations.',
          descriptionHi: 'लेनदेन प्रविष्टियों, गणितीय सत्यापन और खाता बही समाधान में अत्यधिक सटीकता।',
          categoryTag: 'Execution'
        },
        {
          name: 'Problem-Solving & Communication',
          descriptionEn: 'Articulating financial and operational insights clearly in written reports and verbal briefings.',
          descriptionHi: 'लिखित रिपोर्ट और मौखिक प्रस्तुतियों में वित्तीय और परिचालन अंतर्दृष्टि को स्पष्ट रूप से प्रस्तुत करना।',
          categoryTag: 'Leadership'
        }
      ]
    }
  ],

  projects: [
    {
      id: 'proj-excel-financial-analysis',
      titleEn: 'Financial Data Analysis Using MS Excel',
      titleHi: 'एमएस एक्सेल का उपयोग कर वित्तीय डेटा विश्लेषण',
      category: 'financial_analytics',
      categoryLabelEn: 'Data Analytics & Modeling',
      categoryLabelHi: 'डेटा विश्लेषण और मॉडलिंग',
      descriptionEn: 'Quantitative analysis of sample enterprise financial transactions, structuring income and expenditure sheets, and computing critical financial performance metrics.',
      descriptionHi: 'व्यावसायिक वित्तीय लेनदेन का मात्रात्मक विश्लेषण, आय और व्यय शीट का संरचित प्रबंधन और वित्तीय प्रदर्शन मेट्रिक्स की गणना।',
      methodologyEn: 'Engineered formulas including SUM, AVERAGE, nested IF statements, and period-over-period percentage variance calculations. Built visual summary dashboards with clean charts to display expense trends and cost distribution.',
      methodologyHi: 'SUM, AVERAGE, नेस्टेड IF फ़ंक्शंस और प्रतिशत भिन्नता गणनाओं का उपयोग। व्यय रुझानों और लागत वितरण को प्रदर्शित करने के लिए स्पष्ट चार्ट के साथ दृश्य सारांश डैशबोर्ड का निर्माण।',
      tools: ['MS Excel', 'Formula Modeling (SUM, IF, AVG)', 'Percentage Change', 'Trend Charts', 'Data Tables'],
      keyOutcomesEn: [
        'Modeled sample transaction ledger with multi-category expense categorization.',
        'Calculated monthly cost variances and percentage trend distributions.',
        'Constructed clean summary charts illustrating income versus operating expense ratios.'
      ],
      keyOutcomesHi: [
        'बहु-श्रेणी व्यय वर्गीकरण के साथ नमूना लेनदेन खाता बही का निर्माण।',
        'मासिक लागत भिन्नता और प्रतिशत रुझान वितरण की गणना।',
        'आय बनाम परिचालन व्यय अनुपात को दर्शाने वाले स्पष्ट सारांश चार्ट तैयार किए।'
      ],
      status: 'completed'
    },
    {
      id: 'proj-tally-accounting-practice',
      titleEn: 'Financial Accounting Practice Using Tally',
      titleHi: 'टैली का उपयोग करके वित्तीय लेखांकन अभ्यास',
      category: 'accounting_tally',
      categoryLabelEn: 'Accounting & Systems',
      categoryLabelHi: 'लेखांकन एवं प्रणालियां',
      descriptionEn: 'Practical simulation of end-to-end computerized accounting: recording business transactions, ledger balancing, and generating verifiable financial statements.',
      descriptionHi: 'कम्प्यूटरीकृत लेखांकन का संपूर्ण व्यावहारिक अभ्यास: व्यावसायिक लेनदेन रिकॉर्ड करना, बहीखाता संतुलन और वित्तीय विवरण तैयार करना।',
      methodologyEn: 'Executed double-entry recording for sample sales invoices, purchase orders, debtor receipts, and vendor disbursements. Maintained strict cross-verification of debit and credit balances prior to compiling trial balances.',
      methodologyHi: 'बिक्री चालान, खरीद आदेश, प्राप्तियों और भुगतानों के लिए दोहरी प्रविष्टि रिकॉर्डिंग। ट्रायल बैलेंस संकलित करने से पहले डेबिट और क्रेडिट शेष की कड़ी क्रॉस-सत्यापन।',
      tools: ['TallyPrime / Tally ERP', 'Double-Entry Bookkeeping', 'General Ledger', 'Trial Balance', 'Voucher Processing'],
      keyOutcomesEn: [
        'Processed full-cycle sample sales, purchase, receipt, and payment vouchers.',
        'Maintained structured general ledger and customer/vendor subsidiary ledgers.',
        'Generated a balanced trial balance validating accounting equation equilibrium.'
      ],
      keyOutcomesHi: [
        'बिक्री, खरीद, प्राप्ति और भुगतान वाउचर का पूर्ण चक्र संसाधित किया।',
        'संरचित सामान्य खाता बही और ग्राहक/विक्रेता सहायक बहीखाते बनाए रखे।',
        'लेखांकन समीकरण संतुलन को प्रमाणित करने वाला एक संतुलित ट्रायल बैलेंस तैयार किया।'
      ],
      status: 'completed'
    },
    {
      id: 'proj-ibm-ai-fundamentals',
      titleEn: 'AI Fundamentals & Business Workflows (IBM SkillsBuild)',
      titleHi: 'एआई फंडामेंटल्स एवं व्यावसायिक वर्कफ़्लो (IBM SkillsBuild)',
      category: 'ai_technology',
      categoryLabelEn: 'AI & Modern Tech',
      categoryLabelHi: 'एआई एवं आधुनिक तकनीक',
      descriptionEn: 'Applied study of modern artificial intelligence paradigms focusing on natural language processing and computer vision applications for business intelligence.',
      descriptionHi: 'व्यावसायिक बुद्धिमत्ता के लिए प्राकृतिक भाषा प्रसंस्करण (NLP) और कंप्यूटर विज़न अनुप्रयोगों पर केंद्रित आधुनिक कृत्रिम बुद्धिमत्ता का व्यावहारिक अध्ययन।',
      methodologyEn: 'Completed structured curriculum through IBM SkillsBuild covering supervised learning, language models, image recognition pipelines, and ethical AI deployment in commercial workflows.',
      methodologyHi: 'आईबीएम स्किल्सबिल्ड के माध्यम से पर्यवेक्षित शिक्षण, भाषा मॉडल, छवि पहचान पाइपलाइन और वाणिज्यिक वर्कफ़्लो में नैतिक एआई पर संरचित पाठ्यक्रम पूर्ण किया।',
      tools: ['IBM SkillsBuild', 'Generative AI', 'NLP Principles', 'Computer Vision Concepts', 'AI Ethics'],
      keyOutcomesEn: [
        'Certified by IBM SkillsBuild for AI Fundamentals (Language and Vision in AI).',
        'Evaluated AI-assisted productivity techniques for financial research and document synthesis.',
        'Gained conceptual clarity on algorithmic decision systems and business automation.'
      ],
      keyOutcomesHi: [
        'एआई फंडामेंटल्स (एआई में भाषा और दृष्टि) के लिए आईबीएम स्किल्सबिल्ड द्वारा प्रमाणित।',
        'वित्तीय शोध और दस्तावेज़ संश्लेषण के लिए एआई-सहायता प्राप्त उत्पादकता तकनीकों का मूल्यांकन।',
        'एल्गोरिदमिक निर्णय प्रणालियों और व्यावसायिक स्वचालन पर वैचारिक स्पष्टता प्राप्त की।'
      ],
      status: 'completed'
    },
    {
      id: 'proj-amul-operational-analysis',
      titleEn: 'Industrial Supply Chain & Cost Control Case Study: Amul',
      titleHi: 'औद्योगिक आपूर्ति श्रृंखला और लागत नियंत्रण केस स्टडी: अमूल',
      category: 'business_fintech',
      categoryLabelEn: 'Operational Finance',
      categoryLabelHi: 'परिचालन वित्त',
      descriptionEn: 'Firsthand analytical study of manufacturing workflows, cost-control practices, and logistics distribution observed during the Amul dairy processing plant visit.',
      descriptionHi: 'अमूल डेयरी प्रसंस्करण संयंत्र के दौरे के दौरान देखे गए विनिर्माण वर्कफ़्लो, लागत नियंत्रण प्रथाओं और रसद वितरण का प्रत्यक्ष विश्लेषणात्मक अध्ययन।',
      methodologyEn: 'Field observation and operational documentation examining input procurement, cold-chain logistics, batch quality assurance, packaging line velocity, and overhead minimization strategies.',
      methodologyHi: 'कच्चे माल की खरीद, कोल्ड-चेन लॉजिस्टिक्स, गुणवत्ता आश्वासन, पैकेजिंग लाइन गति और ओवरहेड लागत को कम करने की रणनीतियों का क्षेत्रीय अवलोकन और दस्तावेज़ीकरण।',
      tools: ['Field Research', 'Supply Chain Mapping', 'Cost-Control Observation', 'Operational Workflow Audit'],
      keyOutcomesEn: [
        'Documented supply chain flow from bulk milk collection to automated processing and cold storage.',
        'Analyzed waste reduction and high-efficiency cost management protocols in high-volume production.',
        'Synthesized practical insights bridging academic cost accounting with real-world manufacturing.'
      ],
      keyOutcomesHi: [
        'कच्चे दूध के संग्रह से लेकर स्वचालित प्रसंस्करण और कोल्ड स्टोरेज तक आपूर्ति श्रृंखला प्रवाह का दस्तावेजीकरण।',
        'उच्च-मात्रा उत्पादन में अपशिष्ट न्यूनीकरण और उच्च दक्षता लागत प्रबंधन प्रोटोकॉल का विश्लेषण।',
        'शैक्षणिक लागत लेखांकन को वास्तविक विनिर्माण के साथ जोड़ने वाली व्यावहारिक अंतर्दृष्टि प्राप्त की।'
      ],
      status: 'case_study'
    }
  ],

  achievements: [
    {
      id: 'ach-amul-industrial-visit',
      titleEn: 'Amul Factory Industrial Exposure & Field Study',
      titleHi: 'अमूल फैक्ट्री औद्योगिक अनुभव एवं क्षेत्रीय अध्ययन',
      organization: 'Amul (Gujarat Cooperative Milk Marketing Federation)',
      date: 'Field Study',
      category: 'industrial_exposure',
      descriptionEn: 'Visited Amul Factory and observed production processes, supply chain operations, quality control, and distribution workflows, gaining practical insight into business operations and cost-control practices.',
      descriptionHi: 'अमूल फैक्ट्री का दौरा किया और उत्पादन प्रक्रियाओं, आपूर्ति श्रृंखला संचालन, गुणवत्ता नियंत्रण और वितरण वर्कफ़्लो का अवलोकन किया, जिससे व्यापार संचालन और लागत-नियंत्रण प्रथाओं में व्यावहारिक अंतर्दृष्टि प्राप्त हुई।',
      highlightsEn: [
        'Observed industrial-scale food processing, hygiene compliance, and high-speed packaging.',
        'Gained firsthand exposure to cooperative supply-chain logistics and distribution nodes.',
        'Studied real-world cost minimization and operational quality assurance protocols.'
      ],
      highlightsHi: [
        'औद्योगिक स्तर के खाद्य प्रसंस्करण, स्वच्छता अनुपालन और उच्च गति पैकेजिंग का प्रत्यक्ष अवलोकन।',
        'सहकारी आपूर्ति श्रृंखला रसद और वितरण केंद्रों का प्रत्यक्ष अनुभव प्राप्त किया।',
        'वास्तविक दुनिया में लागत न्यूनीकरण और परिचालन गुणवत्ता आश्वासन प्रोटोकॉल का अध्ययन किया।'
      ]
    },
    {
      id: 'ach-excel-certification',
      titleEn: 'MS Excel Advanced Modeling Training',
      titleHi: 'एमएस एक्सेल उन्नत मॉडलिंग प्रशिक्षण',
      organization: 'Allenhouse Business School',
      date: 'Completed, 2025',
      category: 'certification',
      descriptionEn: 'Completed rigorous curriculum in Microsoft Excel covering logical functions, tabular organization, percentage variance, and business chart presentation.',
      descriptionHi: 'माइक्रोसॉफ्ट एक्सेल में लॉजिकल फ़ंक्शंस, टेबल संगठन, प्रतिशत भिन्नता और व्यावसायिक चार्ट प्रस्तुति को कवर करने वाला गहन पाठ्यक्रम पूरा किया।',
      highlightsEn: [
        'Mastered core functions: SUM, AVERAGE, IF statements, and conditional formatting.',
        'Trained in building structured tables, cross-checks, and financial reporting visual summaries.',
        'Validated through practical assessment on corporate business transaction datasets.'
      ],
      highlightsHi: [
        'कोर फ़ंक्शंस: SUM, AVERAGE, IF स्टेटमेंट और कंडीशनल फ़ॉर्मैटिंग में दक्षता।',
        'संरचित टेबल, क्रॉस-चेक और वित्तीय रिपोर्टिंग विज़ुअल सारांश बनाने में प्रशिक्षित।',
        'कॉर्पोरेट व्यावसायिक लेनदेन डेटासेट पर व्यावहारिक मूल्यांकन के माध्यम से मान्य।'
      ]
    },
    {
      id: 'ach-ibm-ai-certification',
      titleEn: 'IBM SkillsBuild: AI Fundamentals Certification',
      titleHi: 'आईबीएम स्किल्सबिल्ड: एआई फंडामेंटल्स प्रमाणन',
      organization: 'IBM SkillsBuild',
      date: 'Completed, 2026',
      category: 'certification',
      descriptionEn: 'Successfully completed the verified IBM SkillsBuild credential "AI Fundamentals: Language and Vision in AI", building deep conceptual fluency in modern AI architectures.',
      descriptionHi: 'सत्यापित आईबीएम स्किल्सबिल्ड क्रेडेंशियल "एआई फंडामेंटल्स: लैंग्वेज एंड विजन इन एआई" को सफलतापूर्वक पूरा किया, जिससे आधुनिक एआई में गहरी वैचारिक समझ बनी।',
      highlightsEn: [
        'Credentialed in Natural Language Processing (NLP) models, context windows, and prompting.',
        'Studied computer vision architectures, image classification, and multi-modal integration.',
        'Explored responsible AI principles, data privacy considerations, and business automation.'
      ],
      highlightsHi: [
        'प्राकृतिक भाषा प्रसंस्करण (एनएलपी) मॉडल, संदर्भ और प्रॉम्टिंग में प्रमाणित।',
        'कंप्यूटर विज़न आर्किटेक्चर, इमेज वर्गीकरण और मल्टी-मॉडल एकीकरण का अध्ययन किया।',
        'उत्तरदायी एआई सिद्धांतों, डेटा गोपनीयता और व्यावसायिक स्वचालन का अध्ययन किया।'
      ]
    },
    {
      id: 'ach-vcec-tally-mastery',
      titleEn: 'Master in Financial Accounting Progression',
      titleHi: 'वित्तीय लेखांकन में मास्टर डिग्री की प्रगति',
      organization: 'VCEC Tally Academy',
      date: 'Currently Pursuing',
      category: 'academic',
      descriptionEn: 'Actively advancing through the professional Master in Financial Accounting syllabus, bridging accounting theory with computerized execution in Tally.',
      descriptionHi: 'पेशेवर मास्टर इन फाइनेंशियल अकाउंटिंग पाठ्यक्रम में निरंतर प्रगति, लेखांकन सिद्धांत को टैली में व्यावहारिक कार्यान्वयन के साथ जोड़ना।',
      highlightsEn: [
        'Detailed training in general ledger creation, sub-ledgers, and party accounts.',
        'Simulated transactions for sales, inventory tracking, receipts, and bank reconciliation.',
        'Targeted completion with focus on trial balance equilibrium and statutory reporting.'
      ],
      highlightsHi: [
        'सामान्य बहीखाता निर्माण, उप-बहीखाता और पार्टी खातों में विस्तृत प्रशिक्षण।',
        'बिक्री, इन्वेंट्री ट्रैकिंग, प्राप्तियों और बैंक समाधान के लिए सिम्युलेटेड लेनदेन।',
        'ट्रायल बैलेंस संतुलन और वैधानिक रिपोर्टिंग पर विशेष ध्यान के साथ अध्ययन।'
      ]
    }
  ],

  credentials: [
    {
      id: 'cred-bba',
      nameEn: 'Bachelor of Business Administration (BBA)',
      nameHi: 'बैचलर ऑफ बिजनेस एडमिनिस्ट्रेशन (BBA)',
      institution: 'Allenhouse Business School',
      date: 'Expected 2028',
      status: 'pursuing',
      statusLabelEn: 'Expected 2028',
      statusLabelHi: 'अपेक्षित 2028',
      descriptionEn: 'Comprehensive four-year business management degree focusing on corporate finance, accounting, strategic business operations, and organizational behavior.',
      descriptionHi: 'कॉर्पोरेट वित्त, लेखांकन, रणनीतिक व्यावसायिक संचालन और संगठनात्मक व्यवहार पर केंद्रित व्यापक चार वर्षीय व्यवसाय प्रबंधन डिग्री।'
    },
    {
      id: 'cred-tally-master',
      nameEn: 'Master in Financial Accounting',
      nameHi: 'मास्टर इन फाइनेंशियल अकाउंटिंग',
      institution: 'VCEC Tally Academy',
      date: 'Currently Pursuing',
      status: 'pursuing',
      statusLabelEn: 'Currently Pursuing',
      statusLabelHi: 'वर्तमान में अध्ययनरत',
      descriptionEn: 'Specialized diploma in computerized enterprise accounting, covering Tally Prime, trial balance generation, ledger accounts, and business tax fundamentals.',
      descriptionHi: 'कम्प्यूटरीकृत एंटरप्राइज अकाउंटिंग में विशेष डिप्लोमा, जिसमें टैली प्राइम, ट्रायल बैलेंस निर्माण, लेजर अकाउंट्स और बिजनेस टैक्स शामिल हैं।'
    },
    {
      id: 'cred-excel-training',
      nameEn: 'MS Excel Training',
      nameHi: 'एमएस एक्सेल प्रशिक्षण',
      institution: 'Allenhouse Business School',
      date: 'Completed, 2025',
      status: 'completed',
      statusLabelEn: 'Completed 2025',
      statusLabelHi: 'पूर्ण 2025',
      descriptionEn: 'Structured hands-on training in financial spreadsheet operations, functional formulas, data organization, and visual analytics.',
      descriptionHi: 'वित्तीय स्प्रेडशीट संचालन, कार्यात्मक सूत्र, डेटा संगठन और विज़ुअल एनालिटिक्स में संरचित व्यावहारिक प्रशिक्षण।'
    },
    {
      id: 'cred-ibm-ai',
      nameEn: 'AI Fundamentals: Language and Vision in AI',
      nameHi: 'एआई फंडामेंटल्स: लैंग्वेज एंड विजन इन एआई',
      institution: 'IBM SkillsBuild',
      date: 'Completed, 2026',
      status: 'completed',
      statusLabelEn: 'Completed 2026',
      statusLabelHi: 'पूर्ण 2026',
      descriptionEn: 'Verified international credential covering foundational artificial intelligence architectures, NLP models, computer vision systems, and ethics.',
      descriptionHi: 'मूलभूत कृत्रिम बुद्धिमत्ता आर्किटेक्चर, एनएलपी मॉडल, कंप्यूटर विज़न सिस्टम और नैतिकता को कवर करने वाला सत्यापित अंतर्राष्ट्रीय क्रेडेंशियल।'
    },
    {
      id: 'cred-digital-marketing',
      nameEn: 'Digital Marketing Training',
      nameHi: 'डिजिटल मार्केटिंग प्रशिक्षण',
      institution: 'Allenhouse Business School',
      date: 'Ongoing, 2026',
      status: 'ongoing',
      statusLabelEn: 'Ongoing 2026',
      statusLabelHi: 'प्रगति पर 2026',
      descriptionEn: 'Practical training in modern digital presence, content distribution channels, search engine visibility, and brand communication.',
      descriptionHi: 'आधुनिक डिजिटल उपस्थिति, सामग्री वितरण चैनल, सर्च इंजन विजिबिलिटी और ब्रांड संचार में व्यावहारिक प्रशिक्षण।'
    },
    {
      id: 'cred-intermediate',
      nameEn: 'Intermediate (Class XII)',
      nameHi: 'इंटरमीडिएट (कक्षा 12वीं)',
      institution: 'R G Academy',
      date: 'Completed',
      status: 'completed',
      statusLabelEn: 'Graduated',
      statusLabelHi: 'उत्तीर्ण',
      descriptionEn: 'Senior secondary education providing analytical base, mathematical reasoning, and foundation for academic business administration.',
      descriptionHi: 'वरिष्ठ माध्यमिक शिक्षा जिसने विश्लेषणात्मक आधार, गणितीय तर्क और शैक्षणिक व्यवसाय प्रशासन के लिए आधार प्रदान किया।'
    }
  ],

  workshops: [
    {
      titleEn: 'Fintech Club Seminar',
      titleHi: 'फिनटेक क्लब सेमिनार',
      institution: 'Allenhouse Business School',
      year: '2026',
      descriptionEn: 'Participated in discussions on digital payment infrastructures, algorithmic credit evaluation, and the evolving landscape of Indian financial technologies.',
      descriptionHi: 'डिजिटल भुगतान बुनियादी ढांचे, एल्गोरिदमिक क्रेडिट मूल्यांकन और भारतीय वित्तीय प्रौद्योगिकियों के उभरते परिदृश्य पर चर्चा में भाग लिया।'
    },
    {
      titleEn: 'Fundamentals of Brand Building',
      titleHi: 'ब्रांड निर्माण के मूल सिद्धांत',
      institution: 'Allenhouse Business School',
      year: '2026',
      descriptionEn: 'Explored market positioning strategies, corporate communication ethics, consumer trust signals, and multi-channel identity creation.',
      descriptionHi: 'बाजार स्थिति रणनीतियों, कॉर्पोरेट संचार नैतिकता, उपभोक्ता विश्वास संकेतों और मल्टी-चैनल पहचान निर्माण की खोज की।'
    }
  ]
};
