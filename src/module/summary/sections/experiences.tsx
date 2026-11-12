import React, { useState } from 'react'
import TitleSummaries from '../title-summaries'
import { motion } from 'framer-motion'
import { useTranslation } from 'lib/translations'
import Experience from '../experience'
import TimelineExperience from '../timeline-experience'
import CertificateModal from 'components/common/certificate-modal'
import {
  SiChartdotjs,
  SiDart,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlutter,
  SiGoogle,
  SiHtml5,
  SiIbm,
  SiJavascript,
  SiLaravel,
  SiLinkedin,
  SiMicrosoft,
  SiMysql,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiPython,
  SiReact,
  SiResearchgate,
  SiScikitlearn,
  SiTailwindcss,
  SiVite
} from 'react-icons/si'

const Experiences = () => {
  const { t, lang } = useTranslation()
  const [isCertModalOpen, setIsCertModalOpen] = useState(false)
  const [activeCertId, setActiveCertId] = useState<string | undefined>()

  const handleOpenCertModal = (certId?: string) => {
    setActiveCertId(certId)
    setIsCertModalOpen(true)
  }
  return (
    <div className="CONTAINER MENU-CHANGE-Y-100-STAGGER relative mt-[10vh]">
      <div className="CHILD-STAGGER mb-24" id="experiences">
        <TitleSummaries text={t('summary_experiences')} observeId="experiences" />
        <TimelineExperience />
      </div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="CHILD-STAGGER" id="selected-project">
          <TitleSummaries text={t('summary_selected_projects')} observeId="selected-project" />
          <ul className="list-disc marker:text-white">
            <Experience
              title="SIPENA"
              sentences={[
                lang === 'id'
                  ? 'Sistem Informasi Ujian & Absensi Terintegrasi FEB UNSAP'
                  : 'Integrated Exam & Attendance Information System FEB UNSAP',
                lang === 'id'
                  ? 'System Analyst, System Architect & Lead Backend Ã‚Â· Heartbeat 10s, Anti-Cheat, Cloud Functions & FCM Ã‚Â· 2026'
                  : 'System Analyst, System Architect & Lead Backend Ã‚Â· 10s Heartbeat, Anti-Cheat, Cloud Functions & FCM Ã‚Â· 2026'
              ]}
              link="https://github.com/Renohidayat/feb-unsap-exam"
              techStack={[
                { name: 'Flutter', icon: SiFlutter },
                { name: 'Dart', icon: SiDart },
                { name: 'Firebase', icon: SiFirebase },
                { name: 'Node.js', icon: SiNodedotjs },
                { name: 'React PWA', icon: SiReact }
              ]}
            />
            <Experience
              title="Website FEB UNSAP"
              sentences={[
                lang === 'id'
                  ? 'Pusat Informasi Digital & CMS Portal FEB UNSAP'
                  : 'Official Web Portal & CMS of FEB UNSAP',
                lang === 'id'
                  ? 'Full Stack Web Developer (Project-Based) Ã‚Â· Laravel 11, PHP 8.2, MySQL, Tailwind CSS Ã‚Â· 2025 - 2026'
                  : 'Full Stack Web Developer (Project-Based) Ã‚Â· Laravel 11, PHP 8.2, MySQL, Tailwind CSS Ã‚Â· 2025 - 2026'
              ]}
              link="https://feb.unsap.ac.id/"
              className="mt-5"
              techStack={[
                { name: 'Laravel', icon: SiLaravel },
                { name: 'PHP', icon: SiPhp },
                { name: 'MySQL', icon: SiMysql },
                { name: 'Tailwind CSS', icon: SiTailwindcss },
                { name: 'Vite', icon: SiVite }
              ]}
            />
            <Experience
              title="Jelajah Nusantara AI"
              sentences={[
                lang === 'id'
                  ? 'AI Travel Planner: Itinerary Cerdas, Interactive Map & Visual Budget'
                  : 'AI Travel Planner: Smart Itinerary, Interactive Map & Visual Budget',
                lang === 'id'
                  ? 'Full Stack Monorepo Developer Ã‚Â· ES6 JS, Vite, Node.js, Express, Firebase, DeepSeek AI Ã‚Â· 2026'
                  : 'Full Stack Monorepo Developer Ã‚Â· ES6 JS, Vite, Node.js, Express, Firebase, DeepSeek AI Ã‚Â· 2026'
              ]}
              link="https://jelajah-nusantara-ai.vercel.app/"
              className="mt-5"
              techStack={[
                { name: 'JavaScript', icon: SiJavascript },
                { name: 'Vite', icon: SiVite },
                { name: 'Node.js', icon: SiNodedotjs },
                { name: 'Express', icon: SiExpress },
                { name: 'Firebase', icon: SiFirebase },
                { name: 'DeepSeek AI', icon: SiOpenai }
              ]}
            />
            <Experience
              title="Sentimen Ijazah"
              sentences={[
                lang === 'id'
                  ? 'Riset Machine Learning Sentimen Komentar YouTube Isu Ijazah Jokowi (2.561 Komentar)'
                  : 'Machine Learning YouTube Sentiment Analysis on Jokowi Degree Issue (2,561 Comments)',
                lang === 'id'
                  ? 'Peneliti Utama & Full Stack ML Ã‚Â· SVM-RBF (Akurasi 75.24%), PySastrawi, FastAPI, React Ã‚Â· 2025 - 2026'
                  : 'Lead Researcher & Full Stack ML Ã‚Â· SVM-RBF (75.24% Acc), PySastrawi, FastAPI, React Ã‚Â· 2025 - 2026'
              ]}
              link="https://sentimen-ijazah.vercel.app/"
              className="mt-5"
              techStack={[
                { name: 'Python', icon: SiPython },
                { name: 'Scikit-learn', icon: SiScikitlearn },
                { name: 'FastAPI', icon: SiFastapi },
                { name: 'React', icon: SiReact },
                { name: 'Vite', icon: SiVite }
              ]}
            />
            <Experience
              title="CGMI Assessment App"
              sentences={[
                lang === 'id'
                  ? 'Platform Web Asesmen Tata Kelola Kolaborasi Pemerintah Kab. Sumedang'
                  : 'Collaboration Governance Assessment Platform for Sumedang Regency Government',
                lang === 'id'
                  ? 'Vanilla JS (ES Modules), Tailwind CSS, Firebase, Radar Chart.js Ã‚Â· 2026'
                  : 'Vanilla JS (ES Modules), Tailwind CSS, Firebase, Radar Chart.js Ã‚Â· 2026'
              ]}
              link="https://cgmi-assessmentt.web.app/"
              className="mt-5"
              techStack={[
                { name: 'JavaScript', icon: SiJavascript },
                { name: 'Tailwind CSS', icon: SiTailwindcss },
                { name: 'Firebase', icon: SiFirebase },
                { name: 'Chart.js', icon: SiChartdotjs },
                { name: 'HTML5', icon: SiHtml5 }
              ]}
            />
            <Experience
              title="NimeXx"
              sentences={['Anime Streaming Mobile Application', 'Flutter, Dart, Firebase Ã‚Â· 2025']}
              link="https://apkpure.com/id/nimexx/com.rennv.nimexxv2"
              className="mt-5"
              techStack={[
                { name: 'Flutter', icon: SiFlutter },
                { name: 'Dart', icon: SiDart },
                { name: 'Firebase', icon: SiFirebase }
              ]}
            />
            <Experience
              title="Dapoer Sari Pohaci"
              sentences={['Digitalisasi UMKM Tradisional Serang, Sumedang', 'KKN Pengabdian Masyarakat Ã‚Â· Tailwind CSS, JS, Firebase Ã‚Â· 2026']}
              link="https://dapoer-saripohaci.web.app/"
              className="mt-5"
              techStack={[
                { name: 'Tailwind CSS', icon: SiTailwindcss },
                { name: 'JavaScript', icon: SiJavascript },
                { name: 'Firebase', icon: SiFirebase }
              ]}
            />
          </ul>
        </div>
        <div className="CHILD-STAGGER" id="education">
          <TitleSummaries text={t('summary_education')} observeId="education" />
          <ul className="list-disc marker:text-white">
            <Experience
              title="Universitas Sebelas April"
              sentences={[
                lang === 'id' ? 'Informatika Ã‚Â· Sarjana Komputer (S.Kom.) Ã‚Â· IPK 3.52' : 'Informatics Ã‚Â· Bachelor of Computer Science (S.Kom.) Ã‚Â· GPA 3.52',
                lang === 'id' ? 'Fresh Graduate Ã‚Â· Kab. Sumedang, Provinsi Jawa Barat' : 'Fresh Graduate Ã‚Â· Sumedang Regency, West Java, Indonesia',
                '2022 - 2026'
              ]}
              link="https://unsap.ac.id/"
            />
            <Experience
              title="SMAN 2 Cimalaka"
              sentences={[
                lang === 'id' ? 'Sekolah Menengah Atas (SMA Ã‚Â· 3 Tahun)' : 'Senior High School (SMA Ã‚Â· 3 Years)',
                lang === 'id' ? 'Kab. Sumedang, Provinsi Jawa Barat' : 'Sumedang Regency, West Java',
                '2019 - 2022'
              ]}
              link="https://www.google.com/search?kgmid=%2Fg%2F1hm5kmx3g"
              className="mt-5"
            />
            <Experience
              title="SMP Terpadu El Bustany"
              sentences={[
                lang === 'id' ? 'Sekolah Menengah Pertama (SMP Ã‚Â· 3 Tahun)' : 'Junior High School (SMP Ã‚Â· 3 Years)',
                lang === 'id' ? 'Kec. Bukit, Kab. Bener Meriah, Provinsi Aceh' : 'Bukit, Bener Meriah Regency, Aceh',
                '2016 - 2019'
              ]}
              link="https://www.google.com/goto?url=CAESfAHrOzAVfVZSeOGo6dGXKJNWOpD8lIvK-RIUIixqRD2vXEipLs40Z-eMP1M5FZrYk9mFfPo27f8u6SuBReF6kPtDy4ohHHXtCRLEeRS_kfh37lqME8z4pouUMGw6wbAR-nylPUT_dlm0ZqIAUZGpnJXj-DcK4BL-Rhha5Wg"
              className="mt-5"
            />
            <Experience
              title="SD Negeri Mutiara"
              sentences={[
                lang === 'id' ? 'Sekolah Dasar (SD Ã‚Â· 6 Tahun)' : 'Elementary School (SD Ã‚Â· 6 Years)',
                lang === 'id' ? 'Kec. Bandar, Kab. Bener Meriah, Provinsi Aceh' : 'Bandar, Bener Meriah Regency, Aceh',
                '2010 - 2016'
              ]}
              link="https://www.google.com/search?kgmid=%2Fg%2F11c6cdtz_4"
              className="mt-5"
            />
          </ul>
        </div>
        <div className="CHILD-STAGGER" id="selected-activities">
          <TitleSummaries text={t('summary_selected_activities')} observeId="selected-activities" />
          <ul className="list-disc marker:text-white">
            <Experience
              title="Pengaruh Kesadaran & Persepsi Keamanan Informasi terhadap Pengalaman Ancaman Siber"
              sentences={[
                lang === 'id'
                  ? 'Pendekatan Partial Least Squares Structural Equation Modeling (PLS-SEM)'
                  : 'Partial Least Squares Structural Equation Modeling (PLS-SEM) Approach',
                'ResearchGate Ã‚Â· DOI: 10.13140/RG.2.2.28607.68009 Ã‚Â· Juli 2025'
              ]}
              link="https://www.researchgate.net/publication/393644925_Pengaruh_Kesadaran_dan_Persepsi_terhadap_Keamanan_Informasi_terhadap_Pengalaman_Menghadapi_Ancaman_Siber_Pendekatan_PLS-SEM"
              techStack={[
                { name: 'ResearchGate', icon: SiResearchgate }
              ]}
            />
          </ul>
        </div>
        <div className="CHILD-STAGGER" id="selected-certificate">
          <TitleSummaries text={t('summary_selected_certificate')} observeId="selected-certificate" />
          <ul className="list-disc marker:text-white">
            <Experience title="Programming Fundamentals — Simplilearn" badge={lang === 'id' ? 'Aset perlu disiapkan' : 'Asset needed'} sentences={[lang === 'id' ? 'Sertifikat Programming Fundamentals dari Simplilearn' : 'Programming Fundamentals certificate from Simplilearn', lang === 'id' ? 'Tanggal belum tersedia' : 'Date not available', lang === 'id' ? 'Aset sertifikat belum tersedia' : 'Certificate asset not available']} onClick={() => handleOpenCertModal('programming-fundamentals')}
              techStack={[{ name: 'Programming Fundamentals' }, { name: 'Simplilearn' }]}
            />
            <Experience title="TOEFL — Royal English" badge={lang === 'id' ? 'Aset perlu disiapkan' : 'Asset needed'} sentences={[lang === 'id' ? 'Sertifikat TOEFL dari Royal English' : 'TOEFL certificate from Royal English', lang === 'id' ? 'Tanggal belum tersedia' : 'Date not available', lang === 'id' ? 'Aset sertifikat belum tersedia' : 'Certificate asset not available']} onClick={() => handleOpenCertModal('toefl-royal-english')}
              className="mt-5"
              techStack={[{ name: 'TOEFL' }, { name: 'Royal English' }]}
            />
          </ul>
        </div>
      </div>
      <div className="CHILD-STAGGER mt-24" id="tech">
        <TitleSummaries text={t('summary_tech')} observeId="tech" />
        <p className="font-poppins text-base text-secondary lg:text-2xl">
          Flutter Ã‚Â· Dart Ã‚Â· Laravel Ã‚Â· PHP Ã‚Â· JavaScript Ã‚Â· HTML5 Ã‚Â· CSS3 Ã‚Â· Tailwind CSS Ã‚Â· Firebase Ã‚Â· Cloud Firestore Ã‚Â· Realtime Database Ã‚Â· MySQL Ã‚Â· Python Ã‚Â· FastAPI Ã‚Â· Scikit-learn (SVM, TF-IDF) Ã‚Â· REST API Ã‚Â· Google Cloud Ã‚Â· Git & GitHub Ã‚Â· System Analysis
          <span className="ml-2 font-medium text-yellow-100">Ã‚Â· {t('summary_keep_learning')}</span>
        </p>
      </div>
      <div className="CHILD-STAGGER mt-24" id="contact">
        <TitleSummaries text={t('summary_contact')} observeId="contact" />
        <ul className="list-disc marker:text-white">
          <Experience title="GitHub" sentences={['Placeholder — URL belum tersedia']} className="mt-5" />
          <Experience title="LinkedIn" sentences={['Placeholder — URL belum tersedia']} className="mt-5" />
          <Experience title="Email" sentences={['Placeholder — alamat belum tersedia']} className="mt-5" />
        </ul>
      </div>

      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        initialCertId={activeCertId}
      />
    </div>
  )
}

export default React.memo(Experiences)
