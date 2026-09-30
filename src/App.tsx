// @ts-nocheck
/* eslint-disable */
import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';

// --- THEME ---
const theme = {
  bgBase: 'bg-[#F7F5F0]',
  bgAlt: 'bg-[#EFEADF]',
  bgDark: 'bg-[#1A362D]',
  textDark: 'text-[#1A362D]',
  textLight: 'text-[#F7F5F0]',
  accentText: 'text-[#C28C54]',
  accentBg: 'bg-[#C28C54]',
};

// --- LANGUAGE CONTEXT ---
const LangContext = createContext({
  isHindi: false,
  setIsHindi: () => {},
});
const useLang = () => useContext(LangContext);

// --- TRANSLATIONS ---
const translations = {
  en: {
    nav: {
      about: 'About', founder: 'Founder', journey: 'Journey', projects: 'Initiatives', connect: 'Connect',
      aboutLong: 'About Us', projectsLong: 'Initiatives', journeyLong: 'Our Journey', connectLong: 'Contact',
      langToggle: 'हिंदी',
    },
    hero: {
      established: 'Established 2003',
      line1: 'Care that reaches',
      line2: 'where it is needed.',
      desc: 'A vision to serve society through sustainable, impactful initiatives in healthcare, education, environment, and animal welfare.',
      explore: 'Explore Our Work',
      ourFounder: 'Our Founder',
    },
    marquee: ['Healthcare', 'Education', 'Library', 'Environment', 'Jeevdaya', 'Social Welfare'],
    stats: { years: 'Years of Service', projects: 'Active Projects', lives: 'Lives Impacted', pillars: 'Core Pillars' },
    about: {
      history: 'Our History',
      heading1: 'A legacy built on',
      heading2: 'compassion.',
      descPrefix: 'Founded on',
      descSuffix: 'with the objective of promoting social welfare, education, healthcare, and community development. The Trust was established by',
      descEnd: 'with a profound vision to serve society.',
      regTitle: 'Registration Details',
      regdNo: 'Regd. No:',
      pan: 'PAN:',
      regAt: 'Registered At:',
    },
    trustees: {
      leadership: 'Leadership',
      heading1: 'Board of',
      heading2: 'Trustees',
      desc: 'Guiding our vision and ensuring every initiative creates lasting, sustainable impact for the community.',
      role: 'Managing Trustee',
    },
    founder: {
      ourFounder: 'Our Founder',
      title: 'Founder & Visionary',
      heading1: 'The vision of',
      quote: 'True wealth is measured not by what we accumulate, but by what we give back to the world that shaped us.',
      bio: 'With a lifelong commitment to service and a deep belief that compassion must be practiced, not preached, Shri Narendra Mulchand Punamiya established the Trust in 2003. His vision continues to guide every initiative — from hospital corridors to mountain trails.',
      signed: 'Signed',
      since: 'Since',
      founder: 'Founder',
    },
    journey: {
      label: 'Our Journey',
      heading1: 'Two decades of',
      heading2: 'impact.',
      desc: 'From a single act of compassion to six pillars of service — every year added a new chapter.',
      milestones: [
        { title: 'The Trust is Born', desc: 'Founded on 27th November with a vision to serve society across health, education, and community welfare.' },
        { title: 'Healthcare Expansion', desc: 'Adopted the local hospital, launched the dialysis centre, and began annual eye camps.' },
        { title: 'Education Initiative', desc: 'Began distribution of school kits, funded fees for children in financial need, and supported schools.' },
        { title: 'Environment Wing', desc: 'Launched the Aravali cleaning drive and annual tree plantation campaigns.' },
        { title: 'Animal Welfare (Jeevdaya)', desc: 'Renovated the Pashu hospital and began organizing regular Pashu Chikitsa camps.' },
        { title: 'Six Pillars Strong', desc: 'Now operating across healthcare, education, library, environment, animal welfare, and social support.' },
      ],
    },
    gallery: {
      label: 'Moments of Impact',
      heading1: 'Life in',
      heading2: 'Motion',
      desc: 'A glimpse into the everyday work of the Trust — from hospital corridors to mountain trails.',
      view: 'View',
      captions: [
        { text: "Dialysis Centre", tag: "Healthcare" },
        { text: "Hospital Wing", tag: "Healthcare" },
        { text: "Hospital Ward", tag: "Healthcare" },
        { text: "Medical Camp", tag: "Healthcare" },
        { text: "School Kits", tag: "Education" },
        { text: "Classroom Support", tag: "Education" },
        { text: "Extracurricular Activities", tag: "Education" },
        { text: "Community Library", tag: "Library" },
        { text: "Reading Program", tag: "Library" },
        { text: "Digital Learning", tag: "Library" },
        { text: "Aravali Clean-Up", tag: "Environment" },
        { text: "Tree Plantation", tag: "Environment" },
        { text: "Forest Support", tag: "Environment" },
        { text: "Pashu Hospital", tag: "Jeevdaya" },
        { text: "Chara Vitaran", tag: "Jeevdaya" },
        { text: "Animal Care Camp", tag: "Jeevdaya" },
        { text: "Family Support", tag: "Social" },
        { text: "Relief Distribution", tag: "Social" },
        { text: "Community Outreach", tag: "Social" },
      ],
    },
    projectsSection: {
      label: 'Six Ways We Stand Beside A Community',
      heading1: 'Compassion in',
      heading2: 'Practice',
      viewDetails: 'View Details',
    },
    difference: {
      heading1: 'What makes our approach',
      heading2: 'different?',
      desc: "We don't just donate; we build and sustain ecosystems. The circle includes every living being. From a hospital corridor to a school courtyard, from a library shelf to the Aravali hills, the Trust supports the places that hold a community together.",
      points: [
        'Holistic view bridging health, education & nature.',
        'Continuous on-ground involvement, not just periodic.',
        'Focusing on animals (Jeevdaya) as equals in our rural life.',
      ],
    },
    testimonials: {
      label: 'Voices',
      heading1: 'Stories from the',
      heading2: 'ground',
      quotes: [
        { quote: "The dialysis centre saved my father's life. The Trust did not just fund it — they run it with dignity.", author: 'Ramesh P.', role: 'Beneficiary Family' },
        { quote: 'Every year, my children receive school kits they would never have had. It changes how they see their future.', author: 'Sunita M.', role: 'Parent' },
        { quote: 'The Aravali cleaning drive is relentless. Six kilometres, every year. Their commitment is unmatched.', author: 'Forest Dept.', role: 'Partner Organization' },
      ],
    },
    projectDetail: {
      home: 'HOME', projects: 'PROJECTS',
      overview: 'Initiative Overview',
      whatWeDo: 'What We Do',
      groundReality: 'Ground Reality',
      completeGallery: 'Complete Gallery',
      expandImage: 'Expand Image',
    },
    footer: {
      marqueeItems: ['Compassion in Practice', 'Serving since 2003', 'Jeevdaya · Healthcare · Education', 'Aravali · Community · Knowledge'],
      newsletterHeading: 'Stay connected with our work.',
      newsletterDesc: 'Receive updates on new initiatives, camps, and drives.',
      newsletterPlaceholder: 'your@email.com',
      subscribe: 'Subscribe',
      brandDesc: 'A legacy built on compassion. Established in 2003 with a vision to serve society across healthcare, education, environment, animal welfare, and community upliftment.',
      exploreTitle: 'Explore',
      exploreLinks: ['About', 'Founder', 'Journey', 'Initiatives', 'Impact'],
      pillarsTitle: 'Our Pillars',
      visitTitle: 'Visit Us',
      contactHeading: 'Send us a message.',
      contactDesc: 'Have questions about our initiatives or wish to partner with us? Reach out to the Trust administration — we reply within 48 hours.',
      name: 'Your Name',
      namePlaceholder: 'John Doe',
      email: 'Email',
      emailPlaceholder: 'john@example.com',
      message: 'Message',
      messagePlaceholder: 'How can we help?',
      send: 'Send Message',
      privacy: 'Privacy',
      terms: 'Terms',
      tagline: 'Compassion in Practice.',
      rights: 'All rights reserved.',
    },
  },
  hi: {
    nav: {
      about: 'हमारे बारे में', founder: 'संस्थापक', journey: 'यात्रा', projects: 'पहलें', connect: 'संपर्क',
      aboutLong: 'हमारे बारे में', projectsLong: 'पहलें', journeyLong: 'हमारी यात्रा', connectLong: 'संपर्क',
      langToggle: 'EN',
    },
    hero: {
      established: 'स्थापित 2003',
      line1: 'देखभाल जो पहुँचती है',
      line2: 'वहाँ जहाँ ज़रूरत है।',
      desc: 'स्वास्थ्य, शिक्षा, पर्यावरण और पशु कल्याण में सतत, प्रभावी पहलों के माध्यम से समाज की सेवा का एक दृष्टिकोण।',
      explore: 'हमारा काम देखें',
      ourFounder: 'हमारे संस्थापक',
    },
    marquee: ['स्वास्थ्य सेवा', 'शिक्षा', 'पुस्तकालय', 'पर्यावरण', 'जीवदया', 'सामाजिक कल्याण'],
    stats: { years: 'सेवा के वर्ष', projects: 'सक्रिय परियोजनाएं', lives: 'प्रभावित जीवन', pillars: 'मुख्य स्तंभ' },
    about: {
      history: 'हमारा इतिहास',
      heading1: 'करुणा पर आधारित',
      heading2: 'विरासत।',
      descPrefix: '',
      descSuffix: 'को स्थापित, सामाजिक कल्याण, शिक्षा, स्वास्थ्य सेवा और समुदाय विकास को बढ़ावा देने के उद्देश्य से। ट्रस्ट की स्थापना',
      descEnd: 'ने समाज की सेवा के गहन दृष्टिकोण के साथ की थी।',
      regTitle: 'पंजीकरण विवरण',
      regdNo: 'पंजीकरण सं:',
      pan: 'पैन:',
      regAt: 'पंजीकृत पता:',
    },
    trustees: {
      leadership: 'नेतृत्व',
      heading1: 'न्यासी',
      heading2: 'मंडल',
      desc: 'हमारी दृष्टि का मार्गदर्शन करना और यह सुनिश्चित करना कि हर पहल समुदाय के लिए स्थायी, सतत प्रभाव पैदा करे।',
      role: 'प्रबंध न्यासी',
    },
    founder: {
      ourFounder: 'हमारे संस्थापक',
      title: 'संस्थापक और दूरदर्शी',
      heading1: 'की दृष्टि',
      quote: 'सच्चा धन इस बात से नहीं मापा जाता कि हम क्या जमा करते हैं, बल्कि इस बात से कि हम उस दुनिया को क्या वापस देते हैं जिसने हमें आकार दिया।',
      bio: 'सेवा के प्रति आजीवन प्रतिबद्धता और इस गहन विश्वास के साथ कि करुणा का अभ्यास किया जाना चाहिए, न कि उपदेश दिया जाना चाहिए, श्री नरेंद्र मूलचंद पुनामिया ने 2003 में ट्रस्ट की स्थापना की। उनकी दृष्टि हर पहल का मार्गदर्शन करती रहती है — अस्पताल के गलियारों से लेकर पहाड़ी रास्तों तक।',
      signed: 'हस्ताक्षरित',
      since: 'से',
      founder: 'संस्थापक',
    },
    journey: {
      label: 'हमारी यात्रा',
      heading1: 'दो दशकों का',
      heading2: 'प्रभाव।',
      desc: 'करुणा के एक कार्य से सेवा के छह स्तंभों तक — हर साल एक नया अध्याय जोड़ा।',
      milestones: [
        { title: 'ट्रस्ट का जन्म', desc: '27 नवंबर को स्वास्थ्य, शिक्षा और समुदाय कल्याण में सेवा के दृष्टिकोण से स्थापित।' },
        { title: 'स्वास्थ्य सेवा विस्तार', desc: 'स्थानीय अस्पताल को अपनाया, डायलिसिस केंद्र शुरू किया और वार्षिक नेत्र शिविर शुरू किए।' },
        { title: 'शिक्षा पहल', desc: 'स्कूल किट वितरित करना शुरू किया, आर्थिक जरूरत वाले बच्चों की फीस का भुगतान किया।' },
        { title: 'पर्यावरण विंग', desc: 'अरावली सफाई अभियान और वार्षिक वृक्षारोपण अभियान शुरू किए।' },
        { title: 'पशु कल्याण (जीवदया)', desc: 'पशु अस्पताल का जीर्णोद्धार किया और नियमित पशु चिकित्सा शिविर आयोजित करना शुरू किया।' },
        { title: 'छह स्तंभ मजबूत', desc: 'अब स्वास्थ्य, शिक्षा, पुस्तकालय, पर्यावरण, पशु कल्याण और सामाजिक सहायता में कार्यरत।' },
      ],
    },
    gallery: {
      label: 'प्रभाव के क्षण',
      heading1: 'गति में',
      heading2: 'जीवन',
      desc: 'ट्रस्ट के रोज़मर्रा के काम की एक झलक — अस्पताल के गलियारों से लेकर पहाड़ी रास्तों तक।',
      view: 'देखें',
      captions: [
        { text: "डायलिसिस केंद्र", tag: "स्वास्थ्य" },
        { text: "अस्पताल विंग", tag: "स्वास्थ्य" },
        { text: "अस्पताल वार्ड", tag: "स्वास्थ्य" },
        { text: "चिकित्सा शिविर", tag: "स्वास्थ्य" },
        { text: "स्कूल किट", tag: "शिक्षा" },
        { text: "कक्षा सहायता", tag: "शिक्षा" },
        { text: "पाठ्येतर गतिविधियाँ", tag: "शिक्षा" },
        { text: "समुदाय पुस्तकालय", tag: "पुस्तकालय" },
        { text: "पठन कार्यक्रम", tag: "पुस्तकालय" },
        { text: "डिजिटल शिक्षा", tag: "पुस्तकालय" },
        { text: "अरावली सफाई", tag: "पर्यावरण" },
        { text: "वृक्षारोपण", tag: "पर्यावरण" },
        { text: "वन सहायता", tag: "पर्यावरण" },
        { text: "पशु अस्पताल", tag: "जीवदया" },
        { text: "चारा वितरण", tag: "जीवदया" },
        { text: "पशु देखभाल शिविर", tag: "जीवदया" },
        { text: "परिवार सहायता", tag: "सामाजिक" },
        { text: "राहत वितरण", tag: "सामाजिक" },
        { text: "समुदाय आउटरीच", tag: "सामाजिक" },
      ],
    },
    projectsSection: {
      label: 'समुदाय के साथ खड़े होने के छह तरीके',
      heading1: 'व्यवहार में',
      heading2: 'करुणा',
      viewDetails: 'विवरण देखें',
    },
    difference: {
      heading1: 'हमारा दृष्टिकोण क्या',
      heading2: 'अलग बनाता है?',
      desc: 'हम केवल दान नहीं करते; हम पारिस्थितिक तंत्र बनाते और बनाए रखते हैं। चक्र में हर जीवित प्राणी शामिल है। अस्पताल के गलियारे से लेकर स्कूल के आँगन तक, पुस्तकालय की शेल्फ से लेकर अरावली की पहाड़ियों तक, ट्रस्ट उन जगहों का समर्थन करता है जो समुदाय को एक साथ रखती हैं।',
      points: [
        'स्वास्थ्य, शिक्षा और प्रकृति को जोड़ने वाला समग्र दृष्टिकोण।',
        'निरंतर ज़मीनी भागीदारी, न कि केवल समय-समय पर।',
        'हमारे ग्रामीण जीवन में जानवरों (जीवदया) को बराबर का दर्जा देना।',
      ],
    },
    testimonials: {
      label: 'आवाज़ें',
      heading1: 'ज़मीन से',
      heading2: 'कहानियाँ',
      quotes: [
        { quote: 'डायलिसिस केंद्र ने मेरे पिता की जान बचाई। ट्रस्ट ने न केवल इसे वित्त पोषित किया, बल्कि गरिमा के साथ चलाया।', author: 'रमेश पी.', role: 'लाभार्थी परिवार' },
        { quote: 'हर साल, मेरे बच्चों को स्कूल किट मिलती है जो उन्हें कभी नहीं मिलती। यह उनके भविष्य के प्रति उनके दृष्टिकोण को बदल देता है।', author: 'सुनीता एम.', role: 'अभिभावक' },
        { quote: 'अरावली सफाई अभियान अथक है। छह किलोमीटर, हर साल। उनकी प्रतिबद्धता बेजोड़ है।', author: 'वन विभाग', role: 'साझेदार संगठन' },
      ],
    },
    projectDetail: {
      home: 'होम', projects: 'परियोजनाएं',
      overview: 'पहल अवलोकन',
      whatWeDo: 'हम क्या करते हैं',
      groundReality: 'ज़मीनी वास्तविकता',
      completeGallery: 'पूरी गैलरी',
      expandImage: 'छवि बड़ी करें',
    },
    footer: {
      marqueeItems: ['व्यवहार में करुणा', '2003 से सेवा में', 'जीवदया · स्वास्थ्य · शिक्षा', 'अरावली · समुदाय · ज्ञान'],
      newsletterHeading: 'हमारे काम से जुड़े रहें।',
      newsletterDesc: 'नई पहलों, शिविरों और अभियानों पर अपडेट प्राप्त करें।',
      newsletterPlaceholder: 'आपका@ईमेल.com',
      subscribe: 'सदस्यता लें',
      brandDesc: 'करुणा पर आधारित एक विरासत। 2003 में स्थापित, स्वास्थ्य, शिक्षा, पर्यावरण, पशु कल्याण और सामुदायिक उत्थान में समाज की सेवा के दृष्टिकोण के साथ।',
      exploreTitle: 'अन्वेषण करें',
      exploreLinks: ['हमारे बारे में', 'संस्थापक', 'यात्रा', 'पहलें', 'प्रभाव'],
      pillarsTitle: 'हमारे स्तंभ',
      visitTitle: 'हमसे मिलें',
      contactHeading: 'हमें संदेश भेजें।',
      contactDesc: 'हमारी पहलों के बारे में प्रश्न हैं या हमारे साथ साझेदारी करना चाहते हैं? ट्रस्ट प्रशासन से संपर्क करें — हम 48 घंटे के भीतर जवाब देते हैं।',
      name: 'आपका नाम',
      namePlaceholder: 'जॉन डो',
      email: 'ईमेल',
      emailPlaceholder: 'john@example.com',
      message: 'संदेश',
      messagePlaceholder: 'हम कैसे मदद कर सकते हैं?',
      send: 'संदेश भेजें',
      privacy: 'गोपनीयता',
      terms: 'शर्तें',
      tagline: 'व्यवहार में करुणा।',
      rights: 'सर्वाधिकार सुरक्षित।',
    },
  },
};

// --- DATA ---
const trustInfo = {
  name: "Shri Mulchand Tarachand Punamiya Charitable Trust",
  founded: "27th November 2003",
  foundedHi: "27 नवंबर 2003",
  founder: "Shri Narendra Mulchand Punamiya",
  regNo: "E21650",
  pan: "AADTS9660B",
  address: "‘Punit’, Himachal CHS Ltd., Opp. Sundar Nagar, S.V. Road, Malad (West), Mumbai – 400 064.",
  addressHi: "'पुनीत', हिमाचल CHS लि., सुंदर नगर के सामने, एस.वी. रोड, मालाड (पश्चिम), मुंबई – 400 064।",
  email: "info@punamiyatrust.org",
  phone: "+91 22 2801 XXXX",
};

const founderData = {
  name: "Shri Narendra Mulchand Punamiya",
  img: "",
  signature: "N. M. Punamiya",
};

const journeyMilestones = [
  { year: "2003" },
  { year: "2008" },
  { year: "2012" },
  { year: "2016" },
  { year: "2019" },
  { year: "2024" },
];

const trusteesData = [
  { name: "Shri Neemit Punamiya", img: "pics/trustee1.jpeg" },
  { name: "Shri Punit Punamiya", img: "pics/trustee2.jpeg" },
];

const projectsData = [
  {
    id: 'healthcare',
    title: 'Healthcare Initiatives',
    titleHi: 'स्वास्थ्य पहलें',
    shortDesc: 'Modernizing hospitals, running dialysis centers, and organizing regular medical camps.',
    shortDescHi: 'अस्पतालों का आधुनिकीकरण, डायलिसिस केंद्र चलाना और नियमित चिकित्सा शिविर आयोजित करना।',
    icon: (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    details: [
      "Adoption and support of local hospitals for infrastructure and operational needs.",
      "Modernization and upgradation of hospital facilities.",
      "Running a dedicated Dialysis centre and clean laundry inside hospital premises.",
      "Eye camp organized every year specifically on founder's day."
    ],
    detailsHi: [
      "बुनियादी ढांचे और परिचालन आवश्यकताओं के लिए स्थानीय अस्पतालों को अपनाना और समर्थन।",
      "अस्पताल सुविधाओं का आधुनिकीकरण और उन्नयन।",
      "अस्पताल परिसर के भीतर समर्पित डायलिसिस केंद्र और स्वच्छ लॉन्ड्री चलाना।",
      "हर साल विशेष रूप से संस्थापक दिवस पर नेत्र शिविर आयोजित किया जाता है।"
    ],
    images: [
      "pics/health1.jpeg",
      "pics/health3.jpeg",
      "pics/health4.jpeg",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 'education',
    title: 'Education & Student Welfare',
    titleHi: 'शिक्षा और छात्र कल्याण',
    shortDesc: 'Supporting schools, providing teachers, and distributing comprehensive school kits.',
    shortDescHi: 'स्कूलों का समर्थन, शिक्षकों की व्यवस्था और व्यापक स्कूल किट वितरित करना।',
    icon: (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14v7" /></svg>,
    details: [
      "Supporting and managing operations of educational institutions.",
      "Providing qualified teachers in under-resourced schools.",
      "Distribution of school kits every year (Bag, Books, water bottles, geometry box).",
      "Funding education fees for kids in severe financial need."
    ],
    detailsHi: [
      "शैक्षणिक संस्थानों के संचालन का समर्थन और प्रबंधन।",
      "कम संसाधन वाले स्कूलों में योग्य शिक्षक उपलब्ध कराना।",
      "हर साल स्कूल किट का वितरण (बैग, किताबें, पानी की बोतलें, ज्यामिति बॉक्स)।",
      "गंभीर वित्तीय जरूरत वाले बच्चों की शिक्षा फीस का भुगतान।"
    ],
    images: [
      "pics/school2.jpeg",
      "pics/class1.jpeg",
      "pics/sports2.jpeg"
    ]
  },
  {
    id: 'library',
    title: 'Library & Knowledge',
    titleHi: 'पुस्तकालय और ज्ञान',
    shortDesc: 'Running community libraries with free access to diverse reading materials.',
    shortDescHi: 'विविध पठन सामग्री तक मुफ्त पहुंच के साथ समुदाय पुस्तकालय चलाना।',
    icon: (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    details: [
      "Establishment, maintenance, and running of community libraries.",
      "Providing free access to books, reading material, and study resources.",
      "Running awareness programs to promote literacy and reading culture.",
      "Supporting digital learning systems and educational tools."
    ],
    detailsHi: [
      "समुदाय पुस्तकालयों की स्थापना, रखरखाव और संचालन।",
      "किताबों, पठन सामग्री और अध्ययन संसाधनों तक मुफ्त पहुंच।",
      "साक्षरता और पठन संस्कृति को बढ़ावा देने के लिए जागरूकता कार्यक्रम चलाना।",
      "डिजिटल शिक्षण प्रणालियों और शैक्षिक उपकरणों का समर्थन।"
    ],
    images: [
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 'environment',
    title: 'Environmental Initiatives',
    titleHi: 'पर्यावरण पहलें',
    shortDesc: 'Aravali cleaning campaigns, tree plantations, and forestry support.',
    shortDescHi: 'अरावली सफाई अभियान, वृक्षारोपण और वानिकी समर्थन।',
    icon: (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    details: [
      "Cleaning at the Aravali (every year after Parshuram Mahadev mela, covering 6 km).",
      "Providing manpower to the forest department for cleaning invasive Lantana Plants.",
      "Organizing massive, large-scale Tree Plantation drives.",
      "Supporting cleanliness initiatives and Swachh Bharat activities."
    ],
    detailsHi: [
      "अरावली में सफाई (हर साल परशुराम महादेव मेले के बाद, 6 किमी कवर)।",
      "आक्रामक लैंटाना पौधों की सफाई के लिए वन विभाग को जनशक्ति उपलब्ध कराना।",
      "बड़े पैमाने पर वृक्षारोपण अभियान आयोजित करना।",
      "स्वच्छता पहलों और स्वच्छ भारत गतिविधियों का समर्थन।"
    ],
    images: [
      "pics/enn2.jpeg",
      "pics/enn1.jpeg",
      "pics/enn4.jpeg"
    ]
  },
  {
    id: 'animal',
    title: 'Animal Welfare (Jeevdaya)',
    titleHi: 'पशु कल्याण (जीवदया)',
    shortDesc: 'Renovating Pashu hospitals, organizing Chikitsa camps, and Chara Vitaran.',
    shortDescHi: 'पशु अस्पतालों का जीर्णोद्धार, चिकित्सा शिविर और चारा वितरण।',
    icon: (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    details: [
      "Annual contribution for chara vitaran by Godwad Jeevdaya trust.",
      "Extensive renovation and modernization of the local Pashu hospital.",
      "Organizing Pashu Chikitsa camps for rural livestock.",
      "Practical expressions of care for the animals that sustain rural life."
    ],
    detailsHi: [
      "गोडवाड़ जीवदया ट्रस्ट द्वारा चारा वितरण के लिए वार्षिक योगदान।",
      "स्थानीय पशु अस्पताल का व्यापक जीर्णोद्धार और आधुनिकीकरण।",
      "ग्रामीण पशुओं के लिए पशु चिकित्सा शिविर आयोजित करना।",
      "ग्रामीण जीवन को बनाए रखने वाले जानवरों की देखभाल की व्यावहारिक अभिव्यक्ति।"
    ],
    images: [
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1527525443983-6e60c75fff50?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 'social',
    title: 'Social Welfare',
    titleHi: 'सामाजिक कल्याण',
    shortDesc: 'Aiding economically weaker families and disaster relief efforts.',
    shortDescHi: 'आर्थिक रूप से कमजोर परिवारों और आपदा राहत प्रयासों में सहायता।',
    icon: (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    details: [
      "Support to economically weaker families through targeted welfare programs.",
      "Distribution of essential items like food grains, clothing, and seasonal kits.",
      "Assistance during natural calamities, emergencies, and relief situations.",
      "Organizing cultural, social awareness, and community development programs."
    ],
    detailsHi: [
      "लक्षित कल्याण कार्यक्रमों के माध्यम से आर्थिक रूप से कमजोर परिवारों को सहायता।",
      "खाद्यान्न, कपड़े और मौसमी किट जैसी आवश्यक वस्तुओं का वितरण।",
      "प्राकृतिक आपदाओं, आपात स्थितियों और राहत स्थितियों के दौरान सहायता।",
      "सांस्कृतिक, सामाजिक जागरूकता और समुदाय विकास कार्यक्रम आयोजित करना।"
    ],
    images: [
      "pics/family1.jpeg",
      "pics/social1.jpeg",
      "https://images.unsplash.com/photo-1593113589914-07553f6580f1?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

const heroImages = [
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2813&auto=format&fit=crop"
];

// Helper to localize project object
const localizeProject = (p, isHindi) => isHindi ? {
  ...p,
  title: p.titleHi || p.title,
  shortDesc: p.shortDescHi || p.shortDesc,
  details: p.detailsHi || p.details,
} : p;

// --- GRAIN OVERLAY ---
const GrainOverlay = () => (
  <div
    className="pointer-events-none fixed inset-0 z-[150] opacity-[0.05] mix-blend-overlay"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundSize: '180px 180px',
    }}
  />
);

// --- SCROLL PROGRESS ---
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C28C54] via-[#E0A96D] to-[#C28C54] origin-left z-[200]"
      style={{ scaleX }}
    />
  );
};

// --- FADE IN ---
const FadeIn = ({ children, delay = 0, direction = 'up', className = '', distance = 60 }) => {
  const dirs = { up: { y: distance, x: 0 }, down: { y: -distance, x: 0 }, left: { x: distance, y: 0 }, right: { x: -distance, y: 0 }, none: { x: 0, y: 0 } };
  const d = dirs[direction] || dirs.up;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...d, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

// --- ANIMATED COUNTER ---
const AnimatedCounter = ({ target, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  useEffect(() => {
    if (!isInView) return;
    let startTime;
    let raf;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, duration]);
  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
};

// --- MAGNETIC BUTTON ---
const MagneticButton = ({ children, className = '', onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

// --- ROTATING BADGE ---
const RotatingBadge = ({ text = "• COMPASSION • IN • PRACTICE • SINCE • 2003 ", color = "#C28C54" }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
    className="w-28 h-28 md:w-32 md:h-32"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <path id="circ" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
      </defs>
      <text fill={color} fontSize="7.2" fontWeight="700" letterSpacing="1.5">
        <textPath href="#circ" startOffset="0">{text}{text}</textPath>
      </text>
      <circle cx="50" cy="50" r="3.5" fill={color} />
    </svg>
  </motion.div>
);

// --- TILT CARD ---
const TiltCard = ({ children, className = '', intensity = 8 }) => {
  const ref = useRef(null);
  const [transform, setTransform] = useState('');
  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(1000px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale(1.02)`);
  };
  const handleLeave = () => setTransform('');
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform, transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)' }}
      className={className}
    >
      {children}
    </div>
  );
};

// --- LIGHTBOX ---
const Lightbox = ({ src, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = src ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [src]);
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 md:p-12 animate-fade-in" onClick={onClose}>
      <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
        <motion.img
          src={src}
          alt="Expanded"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          className="absolute top-4 right-4 md:-top-8 md:-right-8 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all"
          onClick={onClose}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>
  );
};

// --- TORN EDGES ---
const TornEdgeLeft = () => (
  <svg preserveAspectRatio="none" viewBox="0 0 100 100" className={`absolute top-0 left-0 h-full w-1/3 md:w-1/4 ${theme.accentText} opacity-80 mix-blend-multiply pointer-events-none`}>
    <path d="M0,0 L100,0 C80,20 90,40 60,60 C40,80 70,90 100,100 L0,100 Z" fill="currentColor" />
  </svg>
);
const TornEdgeRight = () => (
  <svg preserveAspectRatio="none" viewBox="0 0 100 100" className={`absolute top-0 right-0 h-full w-1/3 md:w-1/4 ${theme.accentText} opacity-80 mix-blend-multiply pointer-events-none`}>
    <path d="M100,0 L0,0 C20,20 10,40 40,60 C60,80 30,90 0,100 L100,100 Z" fill="currentColor" />
  </svg>
);

// --- LOGO ICON ---
const TrustLogoIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-[#C28C54]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
    <path d="M50 10 L15 25 C15 60 30 85 50 95 C70 85 85 60 85 25 Z" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M50 80 C50 80 50 45 35 35 C50 35 50 45 50 60 C50 45 50 35 65 35 C50 45 50 80 50 80 Z" fill="currentColor" />
  </svg>
);

// --- MARQUEE ---
const MarqueeBanner = ({ items, bg = "#1A362D", textColor = "#F7F5F0", accent = "#C28C54" }) => (
  <div className="overflow-hidden py-6 md:py-8 border-y border-[#C28C54]/20" style={{ backgroundColor: bg }}>
    <motion.div
      className="flex gap-10 md:gap-16 whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    >
      {[...items, ...items].map((item, i) => (
        <span key={i} className="flex items-center gap-10 md:gap-16 text-2xl md:text-4xl font-serif italic" style={{ color: textColor }}>
          {item}
          <span style={{ color: accent }}>✦</span>
        </span>
      ))}
    </motion.div>
  </div>
);

// --- NAVBAR ---
const Navbar = ({ currentView, setCurrentView }) => {
  const { isHindi, setIsHindi } = useLang();
  const t = isHindi ? translations.hi : translations.en;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goHome = (sectionId) => {
    setCurrentView('home');
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || currentView !== 'home' ? `${theme.bgDark} shadow-xl py-3 border-b border-white/10` : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => goHome('home')}
        >
          <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
            <TrustLogoIcon />
          </motion.div>
          <div className="flex flex-col">
            <span className={`font-serif text-lg md:text-xl tracking-wide transition-colors ${scrolled || currentView !== 'home' ? theme.textLight : 'text-white'} group-hover:text-[#C28C54]`}>
              S.M.T. Punamiya
            </span>
            <span className={`text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold ${theme.accentText}`}>
              Charitable Trust
            </span>
          </div>
        </motion.div>

        <div className="flex items-center gap-6">
          <div className={`hidden md:flex space-x-8 text-sm tracking-widest uppercase font-semibold font-sans ${scrolled || currentView !== 'home' ? 'text-white/80' : 'text-white/90'}`}>
            {[
              { id: 'about', label: t.nav.about },
              { id: 'founder', label: t.nav.founder },
              { id: 'journey', label: t.nav.journey },
              { id: 'projects', label: t.nav.projects },
              { id: 'connect', label: t.nav.connect },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => goHome(item.id)}
                whileHover={{ y: -2 }}
                className="hover:text-[#C28C54] transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#C28C54] group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsHindi(!isHindi)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all hover:bg-white/10 ${scrolled || currentView !== 'home' ? 'border-white/30 text-white' : 'border-white/50 text-white'}`}
          >
            {t.nav.langToggle}
          </motion.button>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`absolute top-full left-0 w-full ${theme.bgDark} border-t border-white/10 flex flex-col p-6 space-y-4 md:hidden shadow-xl`}
        >
          <button onClick={() => goHome('about')} className="text-white text-left text-lg font-serif">{t.nav.aboutLong}</button>
          <button onClick={() => goHome('founder')} className="text-white text-left text-lg font-serif">{t.nav.founder}</button>
          <button onClick={() => goHome('journey')} className="text-white text-left text-lg font-serif">{t.nav.journeyLong}</button>
          <button onClick={() => goHome('projects')} className="text-white text-left text-lg font-serif">{t.nav.projectsLong}</button>
          <button onClick={() => goHome('connect')} className="text-white text-left text-lg font-serif">{t.nav.connectLong}</button>
        </motion.div>
      )}
    </nav>
  );
};

// --- HERO ---
const CinematicHero = () => {
  const { isHindi } = useLang();
  const t = isHindi ? translations.hi : translations.en;
  const ref = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentIdx((p) => (p + 1) % heroImages.length), 7000);
    return () => clearInterval(timer);
  }, []);

  const headlineWords = t.hero.line1.split(" ");

  return (
    <section ref={ref} id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        {heroImages.map((src, idx) => (
          <div key={idx} className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${idx === currentIdx ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-full h-[130%] overflow-hidden">
              <div className="w-full h-full hero-kenburns">
                <img src={src} className="w-full h-full object-cover object-center" alt="" />
              </div>
            </div>
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A362D]/85 via-[#1A362D]/45 to-[#1A362D]/95" />
      </motion.div>

      <motion.div className="absolute top-1/4 left-[10%] w-40 h-40 rounded-full bg-[#C28C54]/25 blur-3xl pointer-events-none" animate={{ y: [0, -40, 0], scale: [1, 1.15, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-1/4 right-[15%] w-56 h-56 rounded-full bg-[#C28C54]/15 blur-3xl pointer-events-none" animate={{ y: [0, 50, 0], scale: [1, 1.2, 1] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

      <motion.div style={{ y: textY, opacity }} className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          className={`${theme.accentText} uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6 flex items-center justify-center gap-4`}>
          <span className="w-8 h-[1px] bg-[#C28C54]"></span>
          {t.hero.established}
          <span className="w-8 h-[1px] bg-[#C28C54]"></span>
        </motion.p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
          {headlineWords.map((word, i) => (
            <motion.span key={i} className="inline-block mr-3 md:mr-4"
              initial={{ opacity: 0, y: 60, rotateX: -40 }} animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 0.6 + i * 0.12 }}>
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span className="italic font-light"
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 1.1 }}>
            {t.hero.line2}
          </motion.span>
        </h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }}
          className="text-lg md:text-2xl text-white/80 font-light max-w-3xl mx-auto mb-12">
          {t.hero.desc}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className={`${theme.accentBg} text-[#F7F5F0] hover:bg-[#A37341] px-10 py-4 rounded-full uppercase tracking-widest text-sm font-semibold transition-colors shadow-2xl`}
          >
            {t.hero.explore}
          </MagneticButton>
          <MagneticButton
            onClick={() => document.getElementById('founder').scrollIntoView({ behavior: 'smooth' })}
            className={`border-2 border-white/40 text-white hover:border-[#C28C54] hover:text-[#C28C54] px-10 py-4 rounded-full uppercase tracking-widest text-sm font-semibold transition-colors backdrop-blur-sm`}
          >
            {t.hero.ourFounder}
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <motion.div className="w-1.5 h-1.5 bg-white/60 rounded-full" animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
};

// --- STATS ---
const StatsSection = () => {
  const { isHindi } = useLang();
  const t = isHindi ? translations.hi : translations.en;
  return (
    <section className={`${theme.accentBg} py-20 relative z-30 shadow-2xl overflow-hidden`}>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div className="absolute inset-0"
          style={{ backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
          animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
        {[
          { value: 20, suffix: "+", label: t.stats.years },
          { value: 15, suffix: "+", label: t.stats.projects },
          { value: 100, suffix: "k+", label: t.stats.lives },
          { value: 6, suffix: "", label: t.stats.pillars },
        ].map((stat, idx) => (
          <motion.div key={idx}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.12 }} className="text-center py-4">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#1A362D] font-bold mb-3">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="uppercase tracking-widest text-xs md:text-sm text-white font-semibold">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- ABOUT ---
const AboutSection = () => {
  const { isHindi } = useLang();
  const t = isHindi ? translations.hi : translations.en;
  return (
    <section id="about" className={`py-24 md:py-28 ${theme.bgBase} relative`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <div className={`absolute -inset-4 border border-[#C28C54]/30 rounded-t-full rounded-b-xl transform -rotate-3`}></div>
              <motion.img src="pics/home1.jpeg" alt="History"
                className="relative rounded-t-full rounded-b-xl shadow-2xl object-cover aspect-[3/4] w-full"
                whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} />
              <div className="absolute -top-4 -right-4 md:-right-8">
                <RotatingBadge text="• EST • 2003 • PUNIT • TRUST " />
              </div>
            </div>
          </FadeIn>
          <div className="space-y-6">
            <FadeIn delay={100}>
              <div className="inline-flex items-center space-x-4 mb-2">
                <span className="w-12 h-[1px] bg-[#C28C54]"></span>
                <span className={`${theme.accentText} uppercase tracking-widest text-sm font-bold`}>{t.about.history}</span>
              </div>
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif ${theme.textDark} leading-tight`}>
                {t.about.heading1} <span className="italic">{t.about.heading2}</span>
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className={`text-lg md:text-xl text-[#1A362D]/70 font-light leading-relaxed`}>
                {isHindi
                  ? `${trustInfo.foundedHi} ${t.about.descSuffix} ${trustInfo.founder} ${t.about.descEnd}`
                  : `${t.about.descPrefix} ${trustInfo.founded} ${t.about.descSuffix} ${trustInfo.founder} ${t.about.descEnd}`}
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className={`p-6 md:p-8 ${theme.bgAlt} rounded-2xl border border-[#1A362D]/5 mt-6`}>
                <h3 className={`text-xl font-serif ${theme.textDark} mb-4`}>{t.about.regTitle}</h3>
                <ul className={`space-y-2 text-[#1A362D]/80 font-mono text-xs md:text-sm break-words`}>
                  <li><strong>{t.about.regdNo}</strong> {trustInfo.regNo}</li>
                  <li><strong>{t.about.pan}</strong> {trustInfo.pan}</li>
                  <li><strong>{t.about.regAt}</strong> {isHindi ? trustInfo.addressHi : trustInfo.address}</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- TRUSTEES SECTION ---
const TrusteesSection = () => {
  const { isHindi } = useLang();
  const t = isHindi ? translations.hi : translations.en;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const bgX = useTransform(scrollYProgress, [0, 1], ["-25%", "15%"]);
  const bgX2 = useTransform(scrollYProgress, [0, 1], ["15%", "-25%"]);
  const gridY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const ringRotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-32 bg-[#EFEADF] border-t border-[#1A362D]/10"
    >
      <motion.div
        style={{ x: bgX }}
        className="absolute top-12 left-0 flex items-center pointer-events-none whitespace-nowrap"
      >
        <span className="text-[18vw] md:text-[14vw] font-serif text-[#1A362D]/[0.05] leading-none">TRUSTEES</span>
        <span className="text-[18vw] md:text-[14vw] font-serif text-[#C28C54]/[0.15] leading-none ml-16">·</span>
        <span className="text-[18vw] md:text-[14vw] font-serif italic text-[#1A362D]/[0.04] leading-none ml-16">LEADERSHIP</span>
      </motion.div>

      <motion.div
        style={{ x: bgX2 }}
        className="absolute bottom-16 right-0 flex items-center pointer-events-none whitespace-nowrap"
      >
        <span className="text-[18vw] md:text-[14vw] font-serif italic text-[#1A362D]/[0.04] leading-none">GUIDANCE</span>
        <span className="text-[18vw] md:text-[14vw] font-serif text-[#C28C54]/[0.15] leading-none ml-16">·</span>
        <span className="text-[18vw] md:text-[14vw] font-serif text-[#1A362D]/[0.05] leading-none ml-16">STEWARDSHIP</span>
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-10 w-72 h-72 rounded-full bg-[#C28C54]/15 blur-3xl pointer-events-none"
        animate={{ y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#C28C54]/10 blur-3xl pointer-events-none"
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="text-center mb-16">
            <span className={`${theme.accentText} uppercase tracking-widest text-sm font-bold block mb-4`}>{t.trustees.leadership}</span>
            <h3 className={`text-4xl md:text-5xl lg:text-6xl font-serif ${theme.textDark}`}>
              {t.trustees.heading1} <span className="italic">{t.trustees.heading2}</span>
            </h3>
            <p className="text-[#1A362D]/60 mt-4 max-w-2xl mx-auto text-lg">
              {t.trustees.desc}
            </p>
          </div>
        </FadeIn>

        <motion.div style={{ y: gridY }} className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {trusteesData.map((trustee, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <motion.div
                style={{ rotate: ringRotate }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 md:w-72 md:h-72 rounded-full border border-dashed border-[#C28C54]/40 pointer-events-none"
              />
              <motion.div
                style={{ rotate: ringRotate2 }}
                className="absolute top-4 left-1/2 -translate-x-1/2 w-64 h-64 md:w-72 md:h-72 rounded-full border border-dotted border-[#C28C54]/20 pointer-events-none"
              />

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-56 h-56 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-[6px] border-white shadow-2xl group-hover:border-[#C28C54] transition-colors duration-500"
              >
                <img
                  src={trustee.img}
                  alt={trustee.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A362D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              <div className="text-center mt-8">
                <h4 className={`text-2xl md:text-3xl font-serif ${theme.textDark} font-semibold mb-2 group-hover:text-[#C28C54] transition-colors duration-300`}>
                  {trustee.name}
                </h4>
                <p className={`text-sm tracking-widest uppercase font-bold ${theme.accentText}`}>
                  {t.trustees.role}
                </p>
                <motion.div
                  className="mt-4 h-[2px] bg-[#C28C54] mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: 60 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + idx * 0.2 }}
                />
              </div>

              <div className="absolute top-0 left-6 w-8 h-8 border-t-2 border-l-2 border-[#C28C54] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-6 w-8 h-8 border-b-2 border-r-2 border-[#C28C54] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- FOUNDER SPOTLIGHT ---
const FounderSpotlight = () => {
  const { isHindi } = useLang();
  const t = isHindi ? translations.hi : translations.en;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgText = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} id="founder" className="relative py-24 md:py-32 bg-[#1A362D] overflow-hidden">
      <motion.div style={{ x: bgText }} className="absolute inset-y-0 -left-1/4 flex items-center pointer-events-none whitespace-nowrap">
        <span className="text-[22vw] font-serif text-[#C28C54]/[0.06] leading-none">FOUNDER</span>
        <span className="text-[22vw] font-serif text-[#C28C54]/[0.06] leading-none ml-20">VISION</span>
        <span className="text-[22vw] font-serif text-[#C28C54]/[0.06] leading-none ml-20">LEGACY</span>
      </motion.div>

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C28C54]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C28C54]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <motion.div style={{ y: imgY }} className="lg:col-span-5 relative">
          <FadeIn direction="right">
            <div className="relative mx-auto max-w-md">
              <motion.div
                className="absolute -inset-6 rounded-full border border-[#C28C54]/30"
                animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{ borderStyle: 'dashed' }}
              />
              <motion.div
                className="absolute -inset-12 rounded-full border border-[#C28C54]/15"
                animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                style={{ borderStyle: 'dotted' }}
              />

              <div className="relative w-full aspect-square rounded-full overflow-hidden border-8 border-[#C28C54]/30 shadow-2xl">
                <img src={founderData.img} alt={founderData.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A362D]/40 to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-2 md:right-4 bg-[#C28C54] text-[#1A362D] rounded-full px-5 py-3 shadow-2xl">
                <p className="font-serif font-bold text-sm leading-tight text-center">
                  {t.founder.founder}<br /><span className="text-[10px] tracking-widest uppercase">2003</span>
                </p>
              </motion.div>
            </div>
          </FadeIn>
        </motion.div>

        <div className="lg:col-span-7 text-white">
          <FadeIn>
            <span className={`${theme.accentText} uppercase tracking-widest text-sm font-bold block mb-5 flex items-center gap-3`}>
              <span className="w-8 h-[1px] bg-[#C28C54]"></span>
              {t.founder.ourFounder} · {t.founder.title}
            </span>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              {t.founder.heading1} <br />
              <span className="italic text-[#C28C54]">{founderData.name}</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <blockquote className="text-xl md:text-2xl font-serif italic text-white/85 leading-relaxed mb-8 border-l-4 border-[#C28C54] pl-6 py-2">
              &quot;{t.founder.quote}&quot;
            </blockquote>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-lg text-white/60 font-light leading-relaxed mb-10 max-w-2xl">
              {t.founder.bio}
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="flex items-center gap-6">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-[#C28C54] font-bold mb-1">{t.founder.signed}</p>
                <motion.p
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                  className="font-serif italic text-3xl md:text-4xl text-[#C28C54]">
                  {founderData.signature}
                </motion.p>
              </div>
              <div className="hidden sm:block w-[1px] h-12 bg-white/20" />
              <div className="hidden sm:block">
                <p className="text-[10px] tracking-widest uppercase text-white/40 font-bold mb-1">{t.founder.since}</p>
                <p className="font-serif text-2xl text-white/80">2003</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// --- JOURNEY TIMELINE ---
const JourneyTimeline = () => {
  const { isHindi } = useLang();
  const t = isHindi ? translations.hi : translations.en;
  const milestones = journeyMilestones.map((m, i) => ({
    year: m.year,
    title: t.journey.milestones[i].title,
    desc: t.journey.milestones[i].desc,
  }));

  return (
    <section id="journey" className={`py-24 md:py-32 ${theme.bgBase} relative overflow-hidden`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="text-center mb-20">
            <span className={`${theme.accentText} uppercase tracking-widest text-sm font-bold block mb-4`}>{t.journey.label}</span>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif ${theme.textDark} leading-tight`}>
              {t.journey.heading1} <span className="italic">{t.journey.heading2}</span>
            </h2>
            <p className="text-[#1A362D]/60 mt-6 max-w-2xl mx-auto text-lg">
              {t.journey.desc}
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#C28C54]/40 to-transparent -translate-x-1/2" />

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-center mb-12 md:mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-[#1A362D]/5 hover:shadow-2xl transition-shadow duration-500 group">
                    <div className="flex items-center gap-3 mb-3" style={{ justifyContent: isLeft ? 'flex-end' : 'flex-start' }}>
                      <span className={`text-xs font-bold tracking-widest uppercase ${theme.accentText}`}>{m.year}</span>
                      <span className="w-8 h-[1px] bg-[#C28C54]" />
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-serif ${theme.textDark} mb-3 group-hover:text-[#C28C54] transition-colors`}>{m.title}</h3>
                    <p className="text-[#1A362D]/70 leading-relaxed">{m.desc}</p>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#C28C54] border-4 border-[#F7F5F0] shadow-lg z-10"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#C28C54]"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- MASONRY GALLERY ---
const HomeMasonryGallery = ({ onImageClick }) => {
  const { isHindi } = useLang();
  const t = isHindi ? translations.hi : translations.en;

  const rawImages = [
    ...projectsData[0].images, ...projectsData[1].images,
    ...projectsData[2].images, ...projectsData[3].images,
    ...projectsData[4].images, ...projectsData[5].images,
  ];

  const galleryImages = rawImages.map((src, idx) => ({
    src,
    caption: t.gallery.captions[idx % t.gallery.captions.length].text,
    tag: t.gallery.captions[idx % t.gallery.captions.length].tag,
    idx,
  }));

  const enterAnimations = [
    { initial: { opacity: 0, y: 80, rotate: -4, scale: 0.9 } },
    { initial: { opacity: 0, x: -60, scale: 0.9 } },
    { initial: { opacity: 0, y: 60, rotate: 3, scale: 0.9 } },
    { initial: { opacity: 0, x: 60, scale: 0.9 } },
    { initial: { opacity: 0, scale: 0.7, rotate: 6 } },
    { initial: { opacity: 0, y: -60, scale: 0.9 } },
  ];

  return (
    <section className={`py-24 ${theme.bgAlt} relative overflow-hidden`}>
      <motion.div
        className="absolute top-20 left-0 w-72 h-72 rounded-full bg-[#C28C54]/10 blur-3xl pointer-events-none"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-[#1A362D]/[0.05] blur-3xl pointer-events-none"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className={`${theme.accentText} uppercase tracking-widest text-sm font-bold block mb-4`}>
            {t.gallery.label}
          </span>
          <h2 className={`text-4xl md:text-5xl font-serif ${theme.textDark}`}>
            {t.gallery.heading1} <span className="italic">{t.gallery.heading2}</span>
          </h2>
          <p className="text-[#1A362D]/60 mt-4 max-w-2xl mx-auto text-lg">
            {t.gallery.desc}
          </p>
        </motion.div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((item, idx) => {
            const anim = enterAnimations[idx % enterAnimations.length];
            return (
              <motion.div
                key={idx}
                initial={anim.initial}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (idx % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.04, zIndex: 20, rotate: 1 }}
                className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-2xl cursor-zoom-in relative group"
                onClick={() => onImageClick(item.src)}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    loading="lazy"
                    alt={item.caption}
                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-[900ms] ease-out"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#1A362D]/95 via-[#1A362D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100">
                  <motion.div
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "120%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
                  />
                </div>

                <div className="absolute top-3 right-3 z-30 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span className="bg-[#C28C54] text-[#1A362D] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 z-30 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-serif text-lg leading-tight">{item.caption}</p>
                  <div className="flex items-center gap-2 mt-2 text-[#C28C54] text-[10px] font-bold uppercase tracking-widest">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    {t.gallery.view}
                  </div>
                </div>

                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#C28C54] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#C28C54] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

                <div className="absolute top-3 left-3 z-30 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="bg-[#1A362D]/70 backdrop-blur-sm text-white/90 text-[10px] font-bold px-2 py-1 rounded">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- HORIZONTAL PROJECTS (desktop) ---
const HorizontalProjects = ({ onImageClick, setCurrentView }) => {
  const { isHindi } = useLang();
  const t = isHindi ? translations.hi : translations.en;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section ref={containerRef} id="projects" className="relative h-[400vh] bg-[#1A362D] hidden md:block">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 w-full">
          <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className={`${theme.accentText} uppercase tracking-widest text-sm font-bold block mb-4`}>
            {t.projectsSection.label}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-serif text-white">
            {t.projectsSection.heading1} <span className="italic">{t.projectsSection.heading2}</span>
          </motion.h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 pl-[8vw] will-change-transform">
          {projectsData.map((rawProject) => {
            const project = localizeProject(rawProject, isHindi);
            return (
              <motion.div key={project.id}
                className="w-[42vw] flex-shrink-0 group cursor-pointer"
                whileHover={{ y: -10 }} transition={{ duration: 0.3 }}
                onClick={() => setCurrentView(`project-${project.id}`)}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
                  <img src={project.images[0]} alt={project.title}
                    className="w-full aspect-[4/5] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <rawProject.icon className={`w-8 h-8 ${theme.accentText} mb-4`} />
                    <h3 className="text-3xl lg:text-4xl font-serif text-white mb-3">{project.title}</h3>
                    <p className="text-white/70 text-base leading-relaxed line-clamp-2">{project.shortDesc}</p>
                    <div className="flex items-center gap-2 mt-6 text-[#C28C54] font-bold uppercase tracking-widest text-xs">
                      {t.projectsSection.viewDetails}
                      <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div className="h-full bg-[#C28C54] rounded-full origin-left" style={{ scaleX: scrollYProgress }} />
        </div>
      </div>
    </section>
  );
};

// --- MOBILE PROJECTS LIST ---
const MobileProjectsList = ({ onImageClick, setCurrentView }) => {
  const { isHindi } = useLang();
  const t = isHindi ? translations.hi : translations.en;
  return (
    <section className="md:hidden bg-[#1A362D] py-20">
      <div className="px-6 mb-10">
        <span className={`${theme.accentText} uppercase tracking-widest text-sm font-bold block mb-4`}>
          {t.projectsSection.label}
        </span>
        <h2 className="text-4xl font-serif text-white">{t.projectsSection.heading1} <span className="italic">{t.projectsSection.heading2}</span></h2>
      </div>
      <div className="space-y-8 px-6">
        {projectsData.map((rawProject) => {
          const project = localizeProject(rawProject, isHindi);
          return (
            <motion.div key={project.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="cursor-pointer" onClick={() => setCurrentView(`project-${project.id}`)}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
                <img src={project.images[0]} alt={project.title} className="w-full aspect-[4/5] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <rawProject.icon className={`w-7 h-7 ${theme.accentText} mb-3`} />
                  <h3 className="text-2xl font-serif text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{project.shortDesc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

// --- PARALLAX DIFFERENCE ---
const ParallaxDifferenceSection = () => {
  const { isHindi } = useLang();
  const t = isHindi ? translations.hi : translations.en;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} id="difference" className="relative overflow-hidden py-24 md:py-32">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img src="pics/clean1.jpeg" className="w-full h-full object-cover" alt="" />
      </motion.div>
      <div className="absolute inset-0 bg-[#1A362D]/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight text-white">
              {t.difference.heading1} <span className={`${theme.accentText} italic`}>{t.difference.heading2}</span>
            </h2>
            <p className="text-xl text-white/70 font-light leading-relaxed mb-10">
              {t.difference.desc}
            </p>
            <ul className="space-y-6">
              {t.difference.points.map((point, i) => (
                <motion.li key={i}
                  initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="flex items-center space-x-4">
                  <span className="w-3 h-3 bg-[#C28C54] rounded-full flex-shrink-0" />
                  <span className="text-lg text-white/90">{point}</span>
                </motion.li>
              ))}
            </ul>
          </FadeIn>
        </div>
        <FadeIn delay={200}>
          <TiltCard className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="pics/meghadam1.jpeg" alt="Community work" className="w-full h-full object-cover" />
            <div className="absolute -top-6 -left-6 md:-left-8">
              <RotatingBadge text="• SERVICE • BEFORE • SELF • " />
            </div>
          </TiltCard>
        </FadeIn>
      </div>
    </section>
  );
};

// --- TESTIMONIALS ---
const TestimonialsSection = () => {
  const { isHindi } = useLang();
  const t = isHindi ? translations.hi : translations.en;
  const [idx, setIdx] = useState(0);
  const quotes = t.testimonials.quotes;

  useEffect(() => {
    const timer = setInterval(() => setIdx((p) => (p + 1) % quotes.length), 6000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  useEffect(() => { setIdx(0); }, [isHindi]);

  return (
    <section className={`py-24 md:py-32 ${theme.bgBase} relative overflow-hidden`}>
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[18rem] md:text-[24rem] font-serif text-[#C28C54]/5 leading-none pointer-events-none select-none">
        &quot;
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <FadeIn>
          <div className="text-center mb-14">
            <span className={`${theme.accentText} uppercase tracking-widest text-sm font-bold block mb-4`}>{t.testimonials.label}</span>
            <h2 className={`text-4xl md:text-5xl font-serif ${theme.textDark}`}>
              {t.testimonials.heading1} <span className="italic">{t.testimonials.heading2}</span>
            </h2>
          </div>
        </FadeIn>

        <div className="relative min-h-[280px] md:min-h-[240px]">
          {quotes.map((q, i) => (
            <motion.div
              key={`${isHindi}-${i}`}
              animate={{
                opacity: i === idx ? 1 : 0,
                y: i === idx ? 0 : 20,
                scale: i === idx ? 1 : 0.95,
                pointerEvents: i === idx ? 'auto' : 'none',
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 text-center"
            >
              <p className={`text-2xl md:text-3xl lg:text-4xl font-serif italic ${theme.textDark} leading-relaxed mb-8 max-w-3xl mx-auto`}>
                &quot;{q.quote}&quot;
              </p>
              <p className={`${theme.accentText} font-bold tracking-widest uppercase text-sm`}>{q.author}</p>
              <p className="text-[#1A362D]/50 text-xs mt-1">{q.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {quotes.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all duration-500 ${i === idx ? 'w-10 bg-[#C28C54]' : 'w-2 bg-[#1A362D]/20'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PROJECT DETAIL VIEW ---
const ProjectDetailView = ({ project: rawProject, setCurrentView, onImageClick }) => {
  const { isHindi } = useLang();
  const t = isHindi ? translations.hi : translations.en;
  const project = localizeProject(rawProject, isHindi);
  const masonryImages = Array.from({ length: 16 }).map((_, i) => `${project.images[i % project.images.length]}&sig=${i}`);

  return (
    <div className={`min-h-screen ${theme.bgBase} pb-16 animate-fade-in`}>
      <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden bg-black flex items-center justify-center pt-16">
        <motion.img src={project.images[0]} className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
          initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} />
        <TornEdgeLeft />
        <TornEdgeRight />

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-7xl font-serif text-white font-bold mb-6 drop-shadow-xl">
            {project.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="font-sans font-bold text-xs md:text-sm tracking-[0.2em] uppercase text-white/90">
            <span className={`cursor-pointer hover:text-[#C28C54] transition-colors`} onClick={() => setCurrentView('home')}>{t.projectDetail.home}</span>
            <span className="mx-3">&gt;</span>
            <span>{t.projectDetail.projects}</span>
            <span className="mx-3">&gt;</span>
            <span className={theme.accentText}>{project.title.toUpperCase()}</span>
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn direction="left">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl lg:sticky lg:top-32 border-4 border-[#EFEADF] cursor-zoom-in group relative"
              onClick={() => onImageClick(project.images[1] || project.images[0])}>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10 flex items-center justify-center">
                <span className="bg-[#1A362D]/80 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm shadow-lg text-sm font-semibold tracking-wider">
                  {t.projectDetail.expandImage}
                </span>
              </div>
              <img src={project.images[1] || project.images[0]} alt={project.title} className="w-full h-full aspect-[4/3] object-cover" />
            </div>
          </FadeIn>
          <div>
            <FadeIn direction="right">
              <span className={`${theme.accentText} uppercase tracking-widest text-sm font-bold block mb-4`}>{t.projectDetail.overview}</span>
              <h2 className={`text-4xl md:text-5xl font-serif ${theme.textDark} mb-10`}>{t.projectDetail.whatWeDo}</h2>
            </FadeIn>
            <div className="space-y-5 font-sans">
              {project.details.map((detail, idx) => (
                <motion.div key={idx}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`p-6 rounded-2xl border border-[#1A362D]/10 bg-white shadow-sm flex items-start gap-4`}>
                  <span className={`w-8 h-8 rounded-full ${theme.accentBg} text-white flex items-center justify-center flex-shrink-0 mt-1`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className={`text-[#1A362D]/80 leading-relaxed text-lg`}>{detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`py-20 ${theme.bgAlt} border-t border-[#1A362D]/10`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <span className={`${theme.accentText} uppercase tracking-widest text-sm font-bold block mb-4`}>{t.projectDetail.groundReality}</span>
            <h2 className={`text-4xl md:text-5xl font-serif ${theme.textDark} mt-2`}>{t.projectDetail.completeGallery}</h2>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {masonryImages.map((src, idx) => (
              <motion.div key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.06 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                className="break-inside-avoid rounded-xl overflow-hidden shadow-md cursor-zoom-in group relative"
                onClick={() => onImageClick(src)}>
                <div className="absolute inset-0 bg-[#1A362D]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img src={src} loading="lazy" alt={`Gallery ${idx + 1}`} className="w-full h-auto object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- FULL FOOTER ---
const FullFooter = () => {
  const { isHindi } = useLang();
  const t = isHindi ? translations.hi : translations.en;
  const year = new Date().getFullYear();
  const [subOpen, setSubOpen] = useState(false);

  return (
    <footer id="connect" className="relative bg-[#1A362D] text-[#F7F5F0] overflow-hidden">
      <div className="border-b border-white/10">
        <MarqueeBanner
          items={t.footer.marqueeItems}
          bg="#1A362D"
          textColor="#F7F5F0"
          accent="#C28C54"
        />
      </div>

      <motion.div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-[#C28C54]/10 blur-3xl pointer-events-none"
        animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-20 left-0 w-72 h-72 rounded-full bg-[#C28C54]/8 blur-3xl pointer-events-none"
        animate={{ y: [0, -30, 0], scale: [1, 1.15, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-16">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-10 items-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-sm">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif mb-3">{t.footer.newsletterHeading}</h3>
              <p className="text-white/60 text-lg">{t.footer.newsletterDesc}</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder={t.footer.newsletterPlaceholder}
                className="flex-1 bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C28C54] transition-colors" />
              <MagneticButton className="bg-[#C28C54] text-[#1A362D] hover:bg-[#E0A96D] px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-colors whitespace-nowrap">
                {t.footer.subscribe}
              </MagneticButton>
            </form>
          </div>
        </FadeIn>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <FadeIn>
              <div className="flex items-center gap-3 mb-5">
                <TrustLogoIcon />
                <div className="flex flex-col">
                  <span className="font-serif text-xl text-white">S.M.T. Punamiya</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C28C54]">Charitable Trust</span>
                </div>
              </div>
              <p className="text-white/60 leading-relaxed mb-6 max-w-sm">
                {t.footer.brandDesc}
              </p>
              <div className="flex gap-3">
                {[
                  { name: 'Facebook', d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                  { name: 'Instagram', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                  { name: 'Twitter', d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                  { name: 'YouTube', d: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
                ].map((s) => (
                  <motion.a key={s.name} href="#" whileHover={{ y: -4, backgroundColor: '#C28C54' }}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d={s.d} /></svg>
                  </motion.a>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-2">
            <FadeIn delay={100}>
              <h4 className="text-sm uppercase tracking-widest font-bold text-[#C28C54] mb-5">{t.footer.exploreTitle}</h4>
              <ul className="space-y-3 text-white/70">
                {[
                  { label: t.footer.exploreLinks[0], id: 'about' },
                  { label: t.footer.exploreLinks[1], id: 'founder' },
                  { label: t.footer.exploreLinks[2], id: 'journey' },
                  { label: t.footer.exploreLinks[3], id: 'projects' },
                  { label: t.footer.exploreLinks[4], id: 'difference' },
                ].map((link) => (
                  <li key={link.id}>
                    <button onClick={() => {
                      const el = document.getElementById(link.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }} className="hover:text-[#C28C54] transition-colors">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div className="lg:col-span-3">
            <FadeIn delay={200}>
              <h4 className="text-sm uppercase tracking-widest font-bold text-[#C28C54] mb-5">{t.footer.pillarsTitle}</h4>
              <ul className="space-y-3 text-white/70">
                {projectsData.map((p) => (
                  <li key={p.id}>
                    <span className="hover:text-[#C28C54] transition-colors cursor-default">
                      {isHindi ? (p.titleHi || p.title) : p.title}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div className="lg:col-span-3">
            <FadeIn delay={300}>
              <h4 className="text-sm uppercase tracking-widest font-bold text-[#C28C54] mb-5">{t.footer.visitTitle}</h4>
              <address className="not-italic text-white/70 leading-relaxed mb-5">
                {isHindi ? trustInfo.addressHi : trustInfo.address}
              </address>
              <div className="space-y-2 text-white/70">
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C28C54]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>{trustInfo.email}</span>
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C28C54]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>{trustInfo.phone}</span>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <FadeIn>
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 md:p-12 grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">{t.footer.contactHeading}</h3>
              <p className="text-white/60 leading-relaxed">
                {t.footer.contactDesc}
              </p>
            </div>
            <form className="lg:col-span-3 grid sm:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="sm:col-span-1">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#C28C54] mb-2">{t.footer.name}</label>
                <input type="text" placeholder={t.footer.namePlaceholder}
                  className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#C28C54] transition-colors" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#C28C54] mb-2">{t.footer.email}</label>
                <input type="email" placeholder={t.footer.emailPlaceholder}
                  className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#C28C54] transition-colors" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#C28C54] mb-2">{t.footer.message}</label>
                <textarea rows="3" placeholder={t.footer.messagePlaceholder}
                  className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#C28C54] transition-colors resize-none" />
              </div>
              <div className="sm:col-span-2">
                <MagneticButton className="w-full sm:w-auto bg-[#C28C54] text-[#1A362D] hover:bg-[#E0A96D] px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-colors">
                  {t.footer.send}
                </MagneticButton>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-xs md:text-sm">
          <p>&copy; {year} {trustInfo.name}. {t.footer.rights}</p>
          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-[#C28C54] transition-colors">{t.footer.privacy}</span>
            <span className="cursor-pointer hover:text-[#C28C54] transition-colors">{t.footer.terms}</span>
            <span className="font-serif italic text-base text-[#C28C54]">{t.footer.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- HOME VIEW ---
const HomeView = ({ setCurrentView, onImageClick }) => {
  const { isHindi } = useLang();
  const t = isHindi ? translations.hi : translations.en;
  return (
    <>
      <CinematicHero />
      <MarqueeBanner
        items={t.marquee}
        bg="#C28C54"
        textColor="#1A362D"
        accent="#1A362D"
      />
      <StatsSection />
      <AboutSection />
      <TrusteesSection />
      <FounderSpotlight />
      <JourneyTimeline />
      <HomeMasonryGallery onImageClick={onImageClick} />
      <HorizontalProjects onImageClick={onImageClick} setCurrentView={setCurrentView} />
      <MobileProjectsList onImageClick={onImageClick} setCurrentView={setCurrentView} />
      <ParallaxDifferenceSection />
      <TestimonialsSection />
    </>
  );
};

// --- APP ---
export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isHindi, setIsHindi] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [currentView]);

  useEffect(() => {
    if (!document.getElementById('custom-fonts')) {
      const link = document.createElement('link');
      link.id = 'custom-fonts';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  const renderView = () => {
    if (currentView === 'home') {
      return (
        <>
          <HomeView setCurrentView={setCurrentView} onImageClick={setSelectedImage} />
          <FullFooter />
        </>
      );
    }
    if (currentView.startsWith('project-')) {
      const projectId = currentView.split('-')[1];
      const project = projectsData.find(p => p.id === projectId);
      if (project) {
        return (
          <>
            <ProjectDetailView project={project} setCurrentView={setCurrentView} onImageClick={setSelectedImage} />
            <FullFooter />
          </>
        );
      }
    }
    return (
      <>
        <HomeView setCurrentView={setCurrentView} onImageClick={setSelectedImage} />
        <FullFooter />
      </>
    );
  };

  return (
    <LangContext.Provider value={{ isHindi, setIsHindi }}>
      <div className={`font-sans ${theme.bgBase} antialiased selection:bg-[#C28C54] selection:text-white`}>
        <style>{`
          .font-serif { font-family: 'Playfair Display', serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
          html { scroll-behavior: smooth; }
          body { overflow-x: hidden; }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; opacity: 0; }
          @keyframes kenburns {
            0%   { transform: scale(1.08) translate(0, 0); }
            100% { transform: scale(1.2) translate(-1%, -1%); }
          }
          .hero-kenburns { animation: kenburns 14s ease-out infinite alternate; will-change: transform; }
          ::-webkit-scrollbar { width: 10px; }
          ::-webkit-scrollbar-track { background: #F7F5F0; }
          ::-webkit-scrollbar-thumb { background: #C28C54; border-radius: 5px; }
          ::-webkit-scrollbar-thumb:hover { background: #A37341; }
        `}</style>

        <ScrollProgress />
        <GrainOverlay />
        <Navbar currentView={currentView} setCurrentView={setCurrentView} />
        <Lightbox src={selectedImage} onClose={() => setSelectedImage(null)} />

        <div key={currentView} className="animate-fade-in">
          {renderView()}
        </div>
      </div>
    </LangContext.Provider>
  );
}