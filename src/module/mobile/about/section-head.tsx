import SpeedScrollElement from 'components/effect/speed-scroll-element'
import { motion } from 'framer-motion'
import { easeDefault } from 'lib/utils'
import { useTranslation } from 'lib/translations'
import StaggerSlideElementAbout from 'module/about/stagger-slide-about'

export const StackedImage = () => {
  return (
    <motion.div
      initial={{ height: '0.1px', y: '100px', opacity: 0 }}
      animate={{ height: '100%', y: 0, opacity: 1 }}
      transition={{ ease: easeDefault, duration: 0.8, delay: 0.3, opacity: { duration: 0.2 } }}
      className="relative flex w-[85%] max-w-[340px] items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-zinc-900/60 shadow-2xl"
    >
      <motion.img src="/me.jpg" alt="M. Reno Hidayat" className="w-full aspect-[3/4] object-cover object-top" />
    </motion.div>
  )
}

export default function SectionHeadMobile() {
  const { t } = useTranslation()
  const aboutMeBase = t('about_me_marquee').replace(/\s*-\s*$/, '')
  const aboutMeHeading = `${aboutMeBase} - ${aboutMeBase} - ${aboutMeBase}`

  return (
    <div className="MENU-CHANGE-Y-100-STAGGER w-full max-w-full overflow-x-hidden">
      <motion.h1 style={{ x: -100 }} className="CHILD-STAGGER mt-2 whitespace-nowrap font-display text-6xl font-semibold text-secondary">
        {aboutMeHeading}
      </motion.h1>
      <motion.h1 style={{ x: -200 }} className="CHILD-STAGGER mt-2 whitespace-nowrap font-display text-6xl font-semibold text-secondary">
        {aboutMeHeading}
      </motion.h1>
      <motion.h1 style={{ x: -300 }} className="CHILD-STAGGER mt-2 whitespace-nowrap font-display text-6xl font-semibold text-secondary">
        {aboutMeHeading}
      </motion.h1>
      <div className="h-[10vh]"></div>
      <div className="CONTAINER">
        <div className="flex min-h-[100vh] flex-col items-center justify-center">
          <StackedImage />
          <SpeedScrollElement speed={-500} className="pointer-events-none z-[90]">
            <StaggerSlideElementAbout className=" MENU-CHANGE-Y-200 pointer-events-none font-display text-5xl font-semibold leading-[1] text-white md:text-8xl">
              M. RENO HIDAYAT
            </StaggerSlideElementAbout>
          </SpeedScrollElement>
        </div>
      </div>
    </div>
  )
}
