import AseanAiCareerImg from 'assets/images/asean-ai-career-readiness.jpeg'
import AseanDigitalSafetyImg from 'assets/images/asean-digital-safety-awareness.jpeg'
import AseanMediaLiteracyImg from 'assets/images/asean-media-and-information-literacy.jpeg'
import AseanMicrosoftGuideImg from 'assets/images/asean-microsofts-guide-secure-world.jpeg'
import AseanMisinformationImg from 'assets/images/asean-misinformation-disinformation.jpeg'
import AseanResponsibleCitizensImg from 'assets/images/asean-responsible-digital-citizens.jpeg'
import AseanTechnicalPreventionImg from 'assets/images/asean-technical-prevention-incident-response.jpeg'

export interface AseanCertificate {
  id: string
  title: string
  program: string
  partner: string
  date: {
    id: string
    en: string
  }
  description: {
    id: string
    en: string
  }
  image: string
  pdfUrl: string
  verifyUrl: string
  tags: string[]
}

export const ASEAN_CERTIFICATES: AseanCertificate[] = [
  {
    id: 'ai-career-readiness',
    title: 'AI Career Readiness Training',
    program: 'ASEAN Ahead',
    partner: 'Supported by LinkedIn',
    date: {
      id: '31 Oktober 2026',
      en: 'October 31, 2026'
    },
    description: {
      id: 'Program pelatihan kesiapan karier berbasis kecerdasan buatan dari ASEAN Foundation dan LinkedIn, membekali pemahaman AI terapan, produktivitas generative AI, dan etika kecerdasan buatan.',
      en: 'AI career readiness training by ASEAN Foundation and LinkedIn, equipping foundational applied AI, generative AI workflows, and workplace AI ethics.'
    },
    image: AseanAiCareerImg,
    pdfUrl: '/asean-certs/ai-career-readiness.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    tags: ['AI Readiness', 'LinkedIn', 'Generative AI']
  },
  {
    id: 'digital-safety-awareness',
    title: 'Digital Safety Awareness & Cybersecurity Hygiene',
    program: 'ASEAN Cybersecurity Skilling Programme',
    partner: 'Supported by Infoxchange',
    date: {
      id: '20 Oktober 2026',
      en: 'October 20, 2026'
    },
    description: {
      id: 'Fondasi keamanan informasi personal & organisasi, manajemen kredensial aman, proteksi identitas daring, serta mitigasi rekayasa sosial dan phishing.',
      en: 'Foundational personal and organizational digital security, credential hygiene, identity protection, and social engineering mitigation.'
    },
    image: AseanDigitalSafetyImg,
    pdfUrl: '/asean-certs/digital-safety-awareness.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    tags: ['Cybersecurity', 'Infoxchange', 'Cyber Hygiene']
  },
  {
    id: 'media-and-information-literacy',
    title: 'Media and Information Literacy',
    program: 'ASEAN Digital Literacy Programme',
    partner: 'With support from Google.org',
    date: {
      id: '20 Oktober 2026',
      en: 'October 20, 2026'
    },
    description: {
      id: 'Pelatihan literasi media dan informasi digital dengan dukungan Google.org, memfokuskan kemampuan berpikir kritis dalam menganalisis keabsahan informasi daring.',
      en: 'Media and information literacy curriculum supported by Google.org, sharpening critical thinking in evaluating online sources.'
    },
    image: AseanMediaLiteracyImg,
    pdfUrl: '/asean-certs/media-and-information-literacy.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    tags: ['Digital Literacy', 'Google.org', 'Critical Thinking']
  },
  {
    id: 'microsofts-guide-secure-world',
    title: "Microsoft's Guide to a Secure Digital World",
    program: 'ASEAN Cybersecurity Skilling Programme',
    partner: 'Supported by Infoxchange & Microsoft',
    date: {
      id: '20 Oktober 2026',
      en: 'October 20, 2026'
    },
    description: {
      id: 'Panduan keamanan siber resmi Microsoft dan ASEAN Foundation mengenai lanskap ancaman modern, arsitektur pertahanan dasar, dan ketahanan siber terpadu.',
      en: "Official Microsoft & ASEAN Foundation security guide covering modern threat vectors, foundational defenses, and cyber resilience."
    },
    image: AseanMicrosoftGuideImg,
    pdfUrl: '/asean-certs/microsofts-guide-secure-world.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    tags: ['Cybersecurity', 'Microsoft', 'Security Guide']
  },
  {
    id: 'misinformation-disinformation',
    title: 'Misinformation & Disinformation',
    program: 'ASEAN Digital Literacy Programme',
    partner: 'With support from Google.org',
    date: {
      id: '20 Oktober 2026',
      en: 'October 20, 2026'
    },
    description: {
      id: 'Metodologi verifikasi fakta digital, identifikasi misinformasi vs disinformasi terstruktur, analisis manipulasi media, dan teknik fact-checking.',
      en: 'Digital fact-checking methodologies, distinguishing misinformation vs coordinated disinformation, and media manipulation debunking.'
    },
    image: AseanMisinformationImg,
    pdfUrl: '/asean-certs/misinformation-disinformation.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    tags: ['Fact-checking', 'Google.org', 'Disinformation']
  },
  {
    id: 'responsible-digital-citizens',
    title: 'Responsible Digital Citizens',
    program: 'ASEAN Digital Literacy Programme',
    partner: 'With support from Google.org',
    date: {
      id: '20 Oktober 2026',
      en: 'October 20, 2026'
    },
    description: {
      id: 'Kewargaan digital yang beretika, empati di ruang siber, perlindungan jejak digital (digital footprint), dan partisipasi positif di internet.',
      en: 'Ethical digital citizenship, digital empathy, digital footprint safeguarding, and responsible internet participation.'
    },
    image: AseanResponsibleCitizensImg,
    pdfUrl: '/asean-certs/responsible-digital-citizens.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    tags: ['Digital Citizenship', 'Google.org', 'Ethics']
  },
  {
    id: 'technical-prevention-incident-response',
    title: 'Technical Prevention & Incident Response',
    program: 'ASEAN Cybersecurity Skilling Programme',
    partner: 'Supported by Infoxchange',
    date: {
      id: '31 Oktober 2026',
      en: 'October 31, 2026'
    },
    description: {
      id: 'Penanganan teknis insiden keamanan informasi, strategi defensif berlapis, triage insiden siber, dan prosedur eskalasi mitigasi risiko.',
      en: 'Technical incident handling, defense-in-depth principles, cyber incident triage workflows, and escalation procedures.'
    },
    image: AseanTechnicalPreventionImg,
    pdfUrl: '/asean-certs/technical-prevention-incident-response.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    tags: ['Incident Response', 'Infoxchange', 'Cyber Defense']
  }
]

