import React, { useState } from 'react'
import TitleSummaries from '../title-summaries'
import { useTranslation } from 'lib/translations'
import Experience from '../experience'
import TimelineExperience from '../timeline-experience'
import CertificateModal from 'components/common/certificate-modal'

const Experiences = () => {
  const { t, lang } = useTranslation()
  const [isCertModalOpen, setIsCertModalOpen] = useState(false)
  const [activeCertId, setActiveCertId] = useState<string>()
  const text = (id: string, en: string) => (lang === 'id' ? id : en)
  const projects = [
    ['DokumentStudio', 'AI Academic Document Generator', 'https://dokument-generate-delta.vercel.app/'],
    ['WhatsApp Pre-Order Automation', 'Gemini AI PO parsing and Google Sheets integration', undefined],
    ['Excel VBA Automation', 'Operational reporting and Purchase Order automation with Accurate 5 and Firebird', undefined],
    ['WhatsApp Bot Autosender', 'Automated internal announcement distribution through WhatsApp', undefined],
    ['Platform E-commerce Sumber Wangi', 'E-commerce platform developed and deployed for Sumber Wangi', 'https://sumberwangi.id/'],
    ['Sumberwangi HR App', 'Internal HR attendance and real-time vehicle monitoring application', undefined],
    ['Coffee Shop Landing Page', 'Coffee shop catalog and WhatsApp ordering landing page', undefined],
    ['E-commerce Website', 'Laravel and React Inertia e-commerce with payment gateway integration', undefined],
    ['Anime Metadata Website', 'Anime catalog using Jikan API with metadata, trailers, episodes, trending and ongoing titles', undefined],
    ['Game Top-up Website', 'Online top-up platform for popular mobile and PC games', undefined]
  ] as const
  return (
    <div className="CONTAINER MENU-CHANGE-Y-100-STAGGER relative mt-[10vh]">
      <div className="CHILD-STAGGER mb-24" id="experiences"><TitleSummaries text={t('summary_experiences')} observeId="experiences" /><TimelineExperience /></div>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="CHILD-STAGGER" id="selected-project"><TitleSummaries text={t('summary_selected_projects')} observeId="selected-project" /><ul className="list-disc marker:text-white">{projects.map(([title, description, link], index) => <Experience key={title} title={title} className={index ? 'mt-5' : ''} sentences={[text(description, description)]} link={link} />)}</ul></div>
        <div className="CHILD-STAGGER" id="selected-certificate"><TitleSummaries text={t('summary_selected_certificate')} observeId="selected-certificate" /><ul className="list-disc marker:text-white"><Experience title="Programming Fundamentals — Simplilearn" badge={text('Aset perlu disiapkan', 'Asset needed')} sentences={[text('Sertifikat dari Simplilearn.', 'Certificate from Simplilearn.')]} onClick={() => { setActiveCertId('programming-fundamentals'); setIsCertModalOpen(true) }} /><Experience title="TOEFL — Royal English" className="mt-5" badge={text('Aset perlu disiapkan', 'Asset needed')} sentences={[text('Sertifikat dari Royal English.', 'Certificate from Royal English.')]} onClick={() => { setActiveCertId('toefl-royal-english'); setIsCertModalOpen(true) }} /></ul></div>
      </div>
      <div className="CHILD-STAGGER mt-24" id="education"><TitleSummaries text={t('summary_education')} observeId="education" /><ul className="list-disc marker:text-white"><Experience title="Universitas Darul 'Ulum Jombang" sentences={[text('S1 Teknik Informatika · September 2022 — Agustus 2026', 'Bachelor of Informatics Engineering · September 2022 — August 2026'), 'GPA: 3.61']} /><Experience title="SMK Negeri 3 Jombang" className="mt-5" sentences={[text('Teknik Elektronika Industri · Agustus 2019 — Juni 2022', 'Industrial Electronics Engineering · August 2019 — June 2022'), text('Nilai rata-rata: 83.42', 'Average score: 83.42')]} /></ul></div>
      <div className="CHILD-STAGGER mt-24" id="tech"><TitleSummaries text={t('summary_tech')} observeId="tech" /><div className="grid grid-cols-1 gap-4 font-poppins text-base text-secondary lg:grid-cols-2 lg:text-xl"><p><strong>Programming Languages:</strong> JavaScript · TypeScript · Python · PHP · SQL</p><p><strong>Frontend Development:</strong> React.js · Next.js · HTML · CSS</p><p><strong>Backend Development:</strong> Node.js · Laravel · REST API</p><p><strong>Database & Data Management:</strong> Firebird · SQLite · Database Management · SQL Query</p><p><strong>Automation & Integration:</strong> Excel VBA · Google Sheets API · WhatsApp Integration · Telegram Bot API · Gemini AI API · Business Process Automation</p><p><strong>Tools & Platforms:</strong> Git · GitHub · DBeaver · Accurate 5 · Firebase</p></div></div>
      <div className="CHILD-STAGGER mt-24" id="contact"><TitleSummaries text={t('summary_contact')} observeId="contact" /><ul className="list-disc marker:text-white"><Experience title="GitHub" sentences={['IrfakMaulana']} link="https://github.com/IrfakMaulana" /><Experience title="LinkedIn" sentences={['Muhammad Irfa Maulana']} link="https://id.linkedin.com/in/muhammad-irfa-maulana-430a86276" className="mt-5" /><Experience title="Email" sentences={['irfakmaulana05@gmail.com']} link="mailto:irfakmaulana05@gmail.com" className="mt-5" /></ul></div>
      <CertificateModal isOpen={isCertModalOpen} onClose={() => setIsCertModalOpen(false)} initialCertId={activeCertId} />
    </div>
  )
}
export default React.memo(Experiences)
