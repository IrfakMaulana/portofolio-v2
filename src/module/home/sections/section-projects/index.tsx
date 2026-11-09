import Magnet from 'components/effect/magnet'
import { motion } from 'framer-motion'
import { easeDefault, routes } from 'lib/utils'
import { useTranslation } from 'lib/translations'
import ExperienceRow, { ExperienceRowProps } from 'module/about/experience-row'
import { AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {
  SiChartdotjs,
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiVite
} from 'react-icons/si'

import SipenaHoverPreview from 'components/common/sipena-hover-preview'
import FebUnsapHoverPreview from 'components/common/feb-unsap-hover-preview'
import JelajahHoverPreview from 'components/common/jelajah-hover-preview'
import NimexxHoverPreview from 'components/common/nimexx-hover-preview'
import CgmiHoverPreview from 'components/common/cgmi-hover-preview'

import SipenaLogo from 'assets/images/sipena-logo.png'
import FebMockup1 from 'assets/images/feb-mockup-1.jpg'
import FebMockup2 from 'assets/images/feb-mockup-2.png'
import FebMockup3 from 'assets/images/feb-mockup-3.png'
import JelajahMockup from 'assets/images/jelajah-nusantara-mockup.png'
import Nimexx1 from 'assets/images/nimexx-mockup-1.png'
import Nimexx2 from 'assets/images/nimexx-mockup-2.jpg'
import CgmiMockup from 'assets/images/cgmi-mockup.png'

const projects: ExperienceRowProps[] = [
  {
    text1: 'SIPENA',
    text2: '2026',
    text3: 'System Analyst, Architect & Lead Backend',
    color: '#2E9E6C',
    hoverElement: <SipenaHoverPreview />,
    fullViewImage: SipenaLogo,
    fullViewTitle: 'SIPENA - Sistem Informasi Ujian & Absensi FEB UNSAP',
    link: 'https://github.com/Renohidayat/feb-unsap-exam',
    techStack: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'Dart', icon: SiDart },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'React PWA', icon: SiReact }
    ]
  },
  {
    text1: 'Website FEB UNSAP',
    text2: '2025 - 2026',
    text3: 'Full Stack Web Developer (CMS Fakultas)',
    color: '#0091F8',
    hoverElement: <FebUnsapHoverPreview />,
    fullViewImage: [FebMockup1, FebMockup2, FebMockup3],
    fullViewTitle: 'Portal Resmi FEB UNSAP (Laravel & MySQL)',
    link: 'https://feb.unsap.ac.id/',
    techStack: [
      { name: 'Laravel', icon: SiLaravel },
      { name: 'PHP', icon: SiPhp },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Vite', icon: SiVite }
    ]
  },
  {
    text1: 'Jelajah Nusantara AI',
    text2: '2026',
    text3: 'AI Travel Planner (Monorepo)',
    color: '#A3195B',
    hoverElement: <JelajahHoverPreview />,
    fullViewImage: JelajahMockup,
    fullViewTitle: 'Jelajah Nusantara AI - Intelligent Travel Planner',
    link: 'https://jelajah-nusantara-ai.vercel.app/',
    techStack: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Vite', icon: SiVite },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'DeepSeek AI', icon: SiOpenai }
    ]
  },
  {
    text1: 'CGMI Assessment',
    text2: '2026',
    text3: 'Civic GovTech SPA (Kab. Sumedang)',
    color: '#0F62FE',
    hoverElement: <CgmiHoverPreview />,
    fullViewImage: CgmiMockup,
    fullViewTitle: 'CGMI Assessment App - Collaboration Governance Maturity Index (Kab. Sumedang)',
    link: 'https://cgmi-assessmentt.web.app/',
    techStack: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Chart.js', icon: SiChartdotjs },
      { name: 'HTML5', icon: SiHtml5 }
    ]
  },
  {
    text1: 'NimeXx',
    text2: '2025',
    text3: 'Mobile App (Flutter)',
    color: '#411719',
    hoverElement: <NimexxHoverPreview />,
    fullViewImage: [Nimexx1, Nimexx2],
    fullViewTitle: 'NimeXx Mobile App (Flutter & Firebase)',
    link: 'https://apkpure.com/id/nimexx/com.rennv.nimexxv2',
    techStack: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'Dart', icon: SiDart },
      { name: 'Firebase', icon: SiFirebase }
    ]
  }
]

export default function SectionProjects() {
  const { t } = useTranslation()

  return (
    <section id="section-projects" className="relative z-10 w-full bg-primary pt-10 pb-16">
      <div className="CONTAINER">
        <div className="pt-8 pb-10 md:pt-14 md:pb-14">
          <Magnet strength={10} className="mb-6 w-fit">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.8, ease: easeDefault as any }}
              className="flex h-[80px] items-center justify-center bg-yellow-300 text-primary"
            >
              <AiOutlineArrowDown className="text-4xl" />
            </motion.div>
          </Magnet>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between border-b border-white/10 pb-8">
            <div>
              <h2 className="font-display text-5xl font-medium tracking-tight text-secondary sm:text-6xl md:text-7xl lg:text-8xl">
                {t('home_selected_work')}
              </h2>
            </div>
            <p className="max-w-xl font-poppins text-base text-secondary opacity-70 md:text-lg lg:text-right leading-relaxed lg:pb-2">
              {t('home_selected_work_lead')}
            </p>
          </div>
        </div>

        <div className="MENU-CHANGE-Y-100-STAGGER">
          {projects.map((project, i) => (
            <ExperienceRow {...project} key={i} />
          ))}
        </div>

        <div className="flex justify-center pt-14 md:justify-end">
          <Magnet strength={15}>
            <Link
              to={routes.about}
              className="group flex items-center gap-3 font-poppins text-lg text-secondary opacity-80 transition-opacity hover:opacity-100"
            >
              {t('home_selected_work_more')}
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-solid border-secondary transition-colors group-hover:bg-yellow-400 group-hover:text-primary">
                <AiOutlineArrowRight className="-rotate-45" />
              </span>
            </Link>
          </Magnet>
        </div>
      </div>
    </section>
  )
}
