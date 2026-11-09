import Magnet from 'components/effect/magnet'
import ParallaxMarquee from 'components/effect/parallax-marquee'
import { useTranslation } from 'lib/translations'
import { IconType } from 'react-icons'
import {
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiPython,
  SiTailwindcss
} from 'react-icons/si'

type Tech = { label: string; Icon: IconType }

const rowOne: Tech[] = [
  { label: 'Flutter', Icon: SiFlutter },
  { label: 'Dart', Icon: SiDart },
  { label: 'Laravel', Icon: SiLaravel },
  { label: 'PHP', Icon: SiPhp },
  { label: 'JavaScript', Icon: SiJavascript },
  { label: 'HTML5', Icon: SiHtml5 },
  { label: 'TailwindCSS', Icon: SiTailwindcss }
]

const rowTwo: Tech[] = [
  { label: 'Firebase', Icon: SiFirebase },
  { label: 'MySQL', Icon: SiMysql },
  { label: 'Python', Icon: SiPython },
  { label: 'Google Cloud', Icon: SiGooglecloud },
  { label: 'Git', Icon: SiGit }
]

const Pill = ({ label, Icon }: Tech) => (
  <Magnet strength={20} className="mx-3 inline-block w-fit">
    <div className="flex items-center gap-3 rounded-full bg-primary px-6 py-3 font-poppins text-lg text-secondary">
      <Icon className="text-xl" />
      {label}
    </div>
  </Magnet>
)

export default function SectionTechStack() {
  const { t } = useTranslation()

  return (
    <section className="relative z-10 w-full overflow-hidden bg-secondary py-20">
      <h2 className="CONTAINER MENU-CHANGE-Y-100 mb-10 font-poppins text-4xl font-medium text-primary md:text-6xl lg:text-7xl">
        {t('home_tech_stack_title')}
      </h2>
      <div className="flex flex-col gap-y-6">
        <ParallaxMarquee baseVelocity={-1.5}>
          <div className="flex items-center">
            {rowOne.map((tech) => (
              <Pill key={tech.label} {...tech} />
            ))}
          </div>
        </ParallaxMarquee>
        <ParallaxMarquee baseVelocity={1.5}>
          <div className="flex items-center">
            {rowTwo.map((tech) => (
              <Pill key={tech.label} {...tech} />
            ))}
          </div>
        </ParallaxMarquee>
      </div>
    </section>
  )
}
