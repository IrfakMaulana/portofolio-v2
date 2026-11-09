import AseanAiCareerImg from 'assets/images/asean-ai-career-readiness.jpeg'
import AseanDigitalSafetyImg from 'assets/images/asean-digital-safety-awareness.jpeg'
import AseanMediaLiteracyImg from 'assets/images/asean-media-and-information-literacy.jpeg'
import AseanMicrosoftGuideImg from 'assets/images/asean-microsofts-guide-secure-world.jpeg'
import AseanMisinformationImg from 'assets/images/asean-misinformation-disinformation.jpeg'
import AseanResponsibleCitizensImg from 'assets/images/asean-responsible-digital-citizens.jpeg'
import AseanTechnicalPreventionImg from 'assets/images/asean-technical-prevention-incident-response.jpeg'
import IbmSkillsBuildImg from 'assets/images/ibm-skillsbuild-web-dev.png'
import VibeCodingCert from 'assets/images/vibe-coding-cert.png'
import GoogleSkillsImg from 'assets/images/google-skills-badge.png'
import LiterasiDigitalCert from 'assets/images/literasi-digital-cert.jpg'

export type CertificateGroupId = 'ibm' | 'asean' | 'vibe-coding' | 'google-cloud' | 'literasi-digital'

export interface CertificateItem {
  id: string
  groupId: CertificateGroupId
  groupName: {
    id: string
    en: string
  }
  institution: string
  title: string
  program: string
  partner?: string
  date: {
    id: string
    en: string
  }
  description: {
    id: string
    en: string
  }
  image: string
  pdfUrl?: string
  verifyUrl?: string
  verifyLabel?: {
    id: string
    en: string
  }
  credentialId?: string
  tags: string[]
  badge?: {
    id: string
    en: string
  }
  themeColor: string
}

export const CERTIFICATE_GROUPS: {
  id: 'all' | CertificateGroupId
  label: { id: string; en: string }
  count: number
}[] = [
  { id: 'all', label: { id: 'Semua Sertifikat', en: 'All Certificates' }, count: 11 },
  { id: 'ibm', label: { id: 'IBM SkillsBuild', en: 'IBM SkillsBuild' }, count: 1 },
  { id: 'asean', label: { id: 'ASEAN Foundation', en: 'ASEAN Foundation' }, count: 7 },
  { id: 'vibe-coding', label: { id: 'Google Developers', en: 'Google Developers' }, count: 1 },
  { id: 'google-cloud', label: { id: 'Google Cloud', en: 'Google Cloud' }, count: 1 },
  { id: 'literasi-digital', label: { id: 'Kemenkominfo RI', en: 'Kemenkominfo RI' }, count: 1 }
]

export const ALL_CERTIFICATES: CertificateItem[] = [
  // 1. IBM SkillsBuild
  {
    id: 'ibm-skillsbuild-web-dev',
    groupId: 'ibm',
    groupName: {
      id: 'IBM SkillsBuild',
      en: 'IBM SkillsBuild'
    },
    institution: 'IBM SkillsBuild',
    title: 'Web Development Fundamentals',
    program: 'IBM SkillsBuild for Job Seekers & Students',
    partner: 'Supported by Credly',
    date: {
      id: '2 November 2026',
      en: 'November 2, 2026'
    },
    description: {
      id: 'Sertifikasi kompetensi resmi IBM SkillsBuild yang memvalidasi penguasaan arsitektur web modern, fondasi client-server, protokol HTTP, struktur web semantik (HTML5 & CSS3), logika rekayasa JavaScript, dan implementasi web responsif berstandar industri.',
      en: 'Official IBM SkillsBuild certification validating modern web architecture, client-server foundations, HTTP protocols, semantic HTML5/CSS3 structures, JavaScript engineering, and industry-standard responsive web design.'
    },
    image: IbmSkillsBuildImg,
    pdfUrl: '/ibm-skillsbuild-web-dev.pdf',
    verifyUrl: 'https://www.credly.com/badges/fdf11895-7660-4cbb-94b0-d2f460ef2295',
    verifyLabel: {
      id: 'Verifikasi di Credly',
      en: 'Verify on Credly'
    },
    credentialId: 'fdf11895-7660-4cbb-94b0-d2f460ef2295',
    tags: ['Web Development', 'IBM SkillsBuild', 'Credly', 'HTML5 & CSS3', 'JavaScript'],
    badge: {
      id: 'Sertifikat Terverifikasi',
      en: 'Verified Certificate'
    },
    themeColor: '#0F62FE'
  },

  // 2. ASEAN Foundation (7 Certificates)
  {
    id: 'ai-career-readiness',
    groupId: 'asean',
    groupName: {
      id: 'ASEAN Foundation',
      en: 'ASEAN Foundation'
    },
    institution: 'ASEAN Foundation',
    title: 'AI Career Readiness Training',
    program: 'ASEAN Ahead',
    partner: 'Supported by LinkedIn',
    date: {
      id: '31 Oktober 2026',
      en: 'October 31, 2026'
    },
    description: {
      id: 'Program pelatihan kesiapan karier berbasis kecerdasan buatan dari ASEAN Foundation dan LinkedIn, membekali pemahaman AI terapan, produktivitas generative AI, dan etika kecerdasan buatan di lingkungan profesional.',
      en: 'AI career readiness training by ASEAN Foundation and LinkedIn, equipping foundational applied AI, generative AI workflows, and workplace AI ethics.'
    },
    image: AseanAiCareerImg,
    pdfUrl: '/asean-certs/ai-career-readiness.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    verifyLabel: {
      id: 'Portal ASEAN',
      en: 'ASEAN Portal'
    },
    tags: ['AI Readiness', 'LinkedIn', 'Generative AI', 'Future of Work'],
    badge: {
      id: 'ASEAN Ahead · LinkedIn',
      en: 'ASEAN Ahead · LinkedIn'
    },
    themeColor: '#F59E0B'
  },
  {
    id: 'digital-safety-awareness',
    groupId: 'asean',
    groupName: {
      id: 'ASEAN Foundation',
      en: 'ASEAN Foundation'
    },
    institution: 'ASEAN Foundation',
    title: 'Digital Safety Awareness & Cybersecurity Hygiene',
    program: 'ASEAN Cybersecurity Skilling Programme',
    partner: 'Supported by Infoxchange',
    date: {
      id: '20 Oktober 2026',
      en: 'October 20, 2026'
    },
    description: {
      id: 'Fondasi keamanan informasi personal & organisasi, manajemen kredensial aman, proteksi identitas daring, serta mitigasi rekayasa sosial dan serangan phishing.',
      en: 'Foundational personal and organizational digital security, credential hygiene, identity protection, and social engineering mitigation.'
    },
    image: AseanDigitalSafetyImg,
    pdfUrl: '/asean-certs/digital-safety-awareness.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    verifyLabel: {
      id: 'Portal ASEAN',
      en: 'ASEAN Portal'
    },
    tags: ['Cybersecurity', 'Infoxchange', 'Cyber Hygiene', 'Digital Safety'],
    badge: {
      id: 'Cybersecurity Skilling',
      en: 'Cybersecurity Skilling'
    },
    themeColor: '#F59E0B'
  },
  {
    id: 'media-and-information-literacy',
    groupId: 'asean',
    groupName: {
      id: 'ASEAN Foundation',
      en: 'ASEAN Foundation'
    },
    institution: 'ASEAN Foundation',
    title: 'Media and Information Literacy',
    program: 'ASEAN Digital Literacy Programme',
    partner: 'With support from Google.org',
    date: {
      id: '20 Oktober 2026',
      en: 'October 20, 2026'
    },
    description: {
      id: 'Pelatihan literasi media dan informasi digital dengan dukungan Google.org, memfokuskan kemampuan berpikir kritis dalam menganalisis keabsahan dan objektivitas informasi daring.',
      en: 'Media and information literacy curriculum supported by Google.org, sharpening critical thinking in evaluating online sources.'
    },
    image: AseanMediaLiteracyImg,
    pdfUrl: '/asean-certs/media-and-information-literacy.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    verifyLabel: {
      id: 'Portal ASEAN',
      en: 'ASEAN Portal'
    },
    tags: ['Digital Literacy', 'Google.org', 'Critical Thinking', 'Media Literacy'],
    badge: {
      id: 'Google.org Supported',
      en: 'Google.org Supported'
    },
    themeColor: '#F59E0B'
  },
  {
    id: 'microsofts-guide-secure-world',
    groupId: 'asean',
    groupName: {
      id: 'ASEAN Foundation',
      en: 'ASEAN Foundation'
    },
    institution: 'ASEAN Foundation',
    title: "Microsoft's Guide to a Secure Digital World",
    program: 'ASEAN Cybersecurity Skilling Programme',
    partner: 'Supported by Infoxchange & Microsoft',
    date: {
      id: '20 Oktober 2026',
      en: 'October 20, 2026'
    },
    description: {
      id: 'Panduan keamanan siber resmi Microsoft dan ASEAN Foundation mengenai lanskap ancaman siber modern, arsitektur pertahanan dasar, dan ketahanan siber terpadu.',
      en: "Official Microsoft & ASEAN Foundation security guide covering modern threat vectors, foundational defenses, and cyber resilience."
    },
    image: AseanMicrosoftGuideImg,
    pdfUrl: '/asean-certs/microsofts-guide-secure-world.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    verifyLabel: {
      id: 'Portal ASEAN',
      en: 'ASEAN Portal'
    },
    tags: ['Cybersecurity', 'Microsoft', 'Security Guide', 'Infoxchange'],
    badge: {
      id: 'Microsoft & ASEAN',
      en: 'Microsoft & ASEAN'
    },
    themeColor: '#F59E0B'
  },
  {
    id: 'misinformation-disinformation',
    groupId: 'asean',
    groupName: {
      id: 'ASEAN Foundation',
      en: 'ASEAN Foundation'
    },
    institution: 'ASEAN Foundation',
    title: 'Misinformation & Disinformation',
    program: 'ASEAN Digital Literacy Programme',
    partner: 'With support from Google.org',
    date: {
      id: '20 Oktober 2026',
      en: 'October 20, 2026'
    },
    description: {
      id: 'Metodologi verifikasi fakta digital, identifikasi misinformasi vs disinformasi terstruktur, analisis manipulasi media, dan teknik fact-checking di ranah digital.',
      en: 'Digital fact-checking methodologies, distinguishing misinformation vs coordinated disinformation, and media manipulation debunking.'
    },
    image: AseanMisinformationImg,
    pdfUrl: '/asean-certs/misinformation-disinformation.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    verifyLabel: {
      id: 'Portal ASEAN',
      en: 'ASEAN Portal'
    },
    tags: ['Fact-checking', 'Google.org', 'Disinformation', 'Digital Verification'],
    badge: {
      id: 'Google.org Supported',
      en: 'Google.org Supported'
    },
    themeColor: '#F59E0B'
  },
  {
    id: 'responsible-digital-citizens',
    groupId: 'asean',
    groupName: {
      id: 'ASEAN Foundation',
      en: 'ASEAN Foundation'
    },
    institution: 'ASEAN Foundation',
    title: 'Responsible Digital Citizens',
    program: 'ASEAN Digital Literacy Programme',
    partner: 'With support from Google.org',
    date: {
      id: '20 Oktober 2026',
      en: 'October 20, 2026'
    },
    description: {
      id: 'Kewargaan digital yang beretika, empati di ruang siber, perlindungan jejak digital (digital footprint), dan partisipasi positif serta aman di internet.',
      en: 'Ethical digital citizenship, digital empathy, digital footprint safeguarding, and responsible internet participation.'
    },
    image: AseanResponsibleCitizensImg,
    pdfUrl: '/asean-certs/responsible-digital-citizens.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    verifyLabel: {
      id: 'Portal ASEAN',
      en: 'ASEAN Portal'
    },
    tags: ['Digital Citizenship', 'Google.org', 'Ethics', 'Digital Footprint'],
    badge: {
      id: 'Google.org Supported',
      en: 'Google.org Supported'
    },
    themeColor: '#F59E0B'
  },
  {
    id: 'technical-prevention-incident-response',
    groupId: 'asean',
    groupName: {
      id: 'ASEAN Foundation',
      en: 'ASEAN Foundation'
    },
    institution: 'ASEAN Foundation',
    title: 'Technical Prevention & Incident Response',
    program: 'ASEAN Cybersecurity Skilling Programme',
    partner: 'Supported by Infoxchange',
    date: {
      id: '31 Oktober 2026',
      en: 'October 31, 2026'
    },
    description: {
      id: 'Penanganan teknis insiden keamanan informasi, strategi defensif berlapis, triage insiden siber, dan prosedur eskalasi mitigasi risiko sistemik.',
      en: 'Technical incident handling, defense-in-depth principles, cyber incident triage workflows, and escalation procedures.'
    },
    image: AseanTechnicalPreventionImg,
    pdfUrl: '/asean-certs/technical-prevention-incident-response.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    verifyLabel: {
      id: 'Portal ASEAN',
      en: 'ASEAN Portal'
    },
    tags: ['Incident Response', 'Infoxchange', 'Cyber Defense', 'Security Triage'],
    badge: {
      id: 'Cybersecurity Skilling',
      en: 'Cybersecurity Skilling'
    },
    themeColor: '#F59E0B'
  },

  // 3. Google Developer Groups - Vibe Coding Study Jam
  {
    id: 'vibe-coding-study-jam',
    groupId: 'vibe-coding',
    groupName: {
      id: 'Google Developer Groups',
      en: 'Google Developer Groups'
    },
    institution: 'Google Developer Groups',
    title: 'Vibe Coding Study Jam (#JuaraVibeCoding)',
    program: 'Juara Vibe Coding ("Code Less, Build More")',
    partner: 'Google Developers Indonesia',
    date: {
      id: 'Mei 2026',
      en: 'May 2026'
    },
    description: {
      id: 'Sertifikat penyelesaian program #JuaraVibeCoding oleh Google Developer Groups bertema "Code Less, Build More". Fokus pada efisiensi rekayasa perangkat lunak modern, prototipe kilat, dan akselerasi pengembangan aplikasi menggunakan integrasi workflow AI. No Kredensial: JVC2605-ABH7-5MXU.',
      en: 'Certificate of Completion from Google Developer Groups for #JuaraVibeCoding Study Jam ("Code Less, Build More"), focusing on modern software engineering productivity, rapid AI-driven development workflows, and software acceleration. Credential ID: JVC2605-ABH7-5MXU.'
    },
    image: VibeCodingCert,
    pdfUrl: '/vibe-coding-cert.png',
    verifyUrl: 'https://goo.gle/jvc-cert-verifier',
    verifyLabel: {
      id: 'Verifikasi Google',
      en: 'Google Verifier'
    },
    credentialId: 'JVC2605-ABH7-5MXU',
    tags: ['Google Developers', 'Vibe Coding', 'AI Workflows', 'Software Engineering'],
    badge: {
      id: 'Sertifikat Terverifikasi',
      en: 'Verified Certificate'
    },
    themeColor: '#4285F4'
  },

  // 4. Google Cloud
  {
    id: 'google-cloud-foundations',
    groupId: 'google-cloud',
    groupName: {
      id: 'Google Cloud Skills Boost',
      en: 'Google Cloud Skills Boost'
    },
    institution: 'Google Cloud',
    title: 'Google Cloud Computing Foundations & Skill Badges',
    program: 'Google Skills Boost (Gold League · 10.195 Poin)',
    partner: 'Google Cloud Training',
    date: {
      id: 'Juni 2025',
      en: 'June 2025'
    },
    description: {
      id: 'Pencapaian peringkat Gold League (10.195 poin) di Google Skills Boost dengan penyelesaian 8 kredensial resmi Google Cloud, mencakup Fondasi Cloud Computing (Infrastruktur, Data & AI, Networking, Dasar Cloud) serta implementasi praktis Cloud Load Balancing dan Jaringan Aman.',
      en: 'Achieved Gold League (10,195 pts) on Google Skills Boost with 8 verified Google Cloud credentials across Cloud Computing Foundations (Infrastructure, Data & AI, Networking) and hands-on badges in Load Balancing and Security.'
    },
    image: GoogleSkillsImg,
    pdfUrl: '/google-skills-badge.png',
    verifyUrl: 'https://www.skills.google/public_profiles/dbededbb-2448-42df-aa6f-b04942cc5580',
    verifyLabel: {
      id: 'Profil Google Skills',
      en: 'Google Skills Profile'
    },
    tags: ['Google Cloud', 'Cloud Computing', 'Networking', 'Infrastructure', 'Gold League'],
    badge: {
      id: 'Gold League (8 Badges)',
      en: 'Gold League (8 Badges)'
    },
    themeColor: '#34A853'
  },

  // 5. Kemenkominfo RI
  {
    id: 'literasi-digital-kominfo',
    groupId: 'literasi-digital',
    groupName: {
      id: 'Kemenkominfo RI',
      en: 'Ministry of ICT (Kominfo)'
    },
    institution: 'Kemenkominfo RI',
    title: 'Seminar Literasi Digital Mahasiswa',
    program: 'Program Literasi Digital Nasional (Sektor Pendidikan Tinggi)',
    partner: 'Universitas Sebelas April',
    date: {
      id: 'Februari 2024',
      en: 'February 2024'
    },
    description: {
      id: 'Sertifikat resmi Direktorat Pemberdayaan Informatika Kominfo dalam Seminar Literasi Digital di Universitas Sebelas April, bertema "Meningkatkan Peran Mahasiswa Sebagai Agen Perubahan di Era Digital". No Sertifikat: 27737076/23-30519/LITDIG/2024.',
      en: 'Official certificate from Ministry of Communication and Informatics (Kominfo) at Universitas Sebelas April on "Empowering Students as Agents of Change in the Digital Era". Cert No: 27737076/23-30519/LITDIG/2024.'
    },
    image: LiterasiDigitalCert,
    pdfUrl: '/literasi-digital-cert.jpg',
    credentialId: '27737076/23-30519/LITDIG/2024',
    tags: ['Kemenkominfo RI', 'Literasi Digital', 'Digital Literacy', 'Kemahasiswaan'],
    badge: {
      id: 'Sertifikat Resmi',
      en: 'Official Certificate'
    },
    themeColor: '#FBBC05'
  }
]

