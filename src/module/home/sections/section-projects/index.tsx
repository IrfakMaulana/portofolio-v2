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
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVite
} from 'react-icons/si'

const projects: ExperienceRowProps[] = [
  { text1: 'DokumentStudio', text2: 'AI', text3: 'AI Academic Document Generator', color: '#FACC15', fullViewTitle: 'DokumentStudio — AI Academic Document Generator', link: 'https://dokument-generate-delta.vercel.app/', techStack: [{ name: 'Google Gemini API', icon: SiOpenai }, { name: 'Firebase', icon: SiFirebase }, { name: 'Python-docx', icon: SiPython }] },
  { text1: 'WhatsApp Pre-Order Automation', text2: 'Internal', text3: 'Gemini AI bot for structured Google Sheets order processing', color: '#2E9E6C', fullViewImage: '/img/project/project-7.png', fullViewTitle: 'WhatsApp Pre-Order Automation', techStack: [{ name: 'Gemini AI', icon: SiOpenai }, { name: 'Google Sheets API' }] },
  { text1: 'Excel VBA Automation', text2: 'Internal', text3: 'Operational reporting and Purchase Order automation', color: '#0091F8', fullViewImage: '/img/project/project-9.png', fullViewTitle: 'Excel VBA Automation', techStack: [{ name: 'Excel VBA' }, { name: 'Accurate 5' }, { name: 'Firebird' }] },
  { text1: 'WhatsApp Bot Autosender', text2: 'Internal', text3: 'Automated internal announcement distribution', color: '#A3195B', fullViewImage: '/img/project/project-8.png', fullViewTitle: 'WhatsApp Bot Autosender', techStack: [{ name: 'WhatsApp Integration' }] },
  { text1: 'Platform E-commerce Sumber Wangi', text2: 'Web', text3: 'Company e-commerce platform developed through deployment', color: '#0F62FE', fullViewImage: '/img/project/project-5.PNG', fullViewTitle: 'Platform E-commerce Sumber Wangi', link: 'https://sumberwangi.id/', techStack: [{ name: 'Web Development' }] },
  { text1: 'Sumberwangi HR App', text2: 'Internal', text3: 'HR attendance and real-time vehicle location monitoring', color: '#F1592A', fullViewImage: '/img/project/project-6.PNG', fullViewTitle: 'Sumberwangi HR App', techStack: [{ name: 'HR System' }, { name: 'GPS Tracking' }] },
  { text1: 'Coffee Shop Landing Page', text2: 'Web', text3: 'Coffee shop catalog and WhatsApp ordering landing page', color: '#8B5E3C', fullViewImage: '/img/project/project-1.png', fullViewTitle: 'Coffee Shop Landing Page', techStack: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'WhatsApp Integration' }] },
  { text1: 'E-commerce Website', text2: 'Web', text3: 'Laravel and React Inertia e-commerce with payment gateway', color: '#411719', fullViewImage: '/img/project/project-2.png', fullViewTitle: 'E-commerce Website', techStack: [{ name: 'Laravel', icon: SiLaravel }, { name: 'React', icon: SiReact }, { name: 'Payment Gateway' }] },
  { text1: 'Anime Metadata Website', text2: 'Web', text3: 'Anime catalog with metadata, trailers, episodes, trending and ongoing titles', color: '#6C63FF', fullViewImage: '/img/project/project-3.png', fullViewTitle: 'Anime Metadata Website', techStack: [{ name: 'Jikan API' }, { name: 'JavaScript', icon: SiJavascript }] },
  { text1: 'Game Top-up Website', text2: 'Web', text3: 'Game top-up platform for mobile and PC games', color: '#EF4444', fullViewImage: '/img/project/project-4.png', fullViewTitle: 'Game Top-up Website', techStack: [{ name: 'E-commerce' }, { name: 'Web Development' }] }
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
