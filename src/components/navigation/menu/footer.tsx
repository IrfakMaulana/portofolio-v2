import Magnet from 'components/effect/magnet'
import { motion } from 'framer-motion'
import { easeDefault } from 'lib/utils'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { GrGithub, GrLinkedin } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'
import { BLUR_HOVER_LINK } from '.'
import StaggerSlideElementMenu from './stagger-slide-element-menu'

export default function MenuFooter() {
  return (
    <div className={`relative w-full ${BLUR_HOVER_LINK}`}>
      <motion.div
        whileInView={{ width: '100%' }}
        initial={{ width: 0 }}
        transition={{ delay: 0.6, ease: easeDefault, duration: 1 }}
        viewport={{ amount: 'all' }}
        className="h-[3px] bg-primary md:h-[6px]"
      />
      <StaggerSlideElementMenu
        startDelay={1}
        className="mb-10 font-display text-3xl font-semibold leading-[1.2] md:mb-0 md:text-5xl lg:text-7xl"
        tag="h2"
      >
        MUHAMMAD IRFA' MAULANA
      </StaggerSlideElementMenu>
      <div className="mb-10 flex flex-col gap-2 md:hidden">
        <a href="#" onClick={(event) => event.preventDefault()} className="flex items-end gap-2">
          <GrLinkedin className="mt-1 text-xl text-primary" />
          <span className="font-poppins font-light underline">LinkedIn</span>
        </a>
        <a href="#" onClick={(event) => event.preventDefault()} className="flex items-end gap-2">
          <GrGithub className="text-xl !text-primary" />
          <span className="font-poppins font-light underline">Github</span>
        </a>
        <a href="#" onClick={(event) => event.preventDefault()} className="flex items-end gap-2">
          <MdEmail className="text-xl !text-primary" />
          <span className="font-poppins font-light underline">Email</span>
        </a>
      </div>
      <StaggerSlideElementMenu
        startDelay={1.2}
        className="hidden w-fit origin-bottom items-baseline gap-x-10 bg-primary px-3 pb-2 pt-3 md:flex"
        tag="div"
      >
        <a href="#" onClick={(event) => event.preventDefault()} className="flex items-baseline" title="LinkedIn">
          <GrLinkedin className="mt-1 text-xl text-white" />
        </a>
        <a href="#" onClick={(event) => event.preventDefault()} className="flex items-baseline" title="GitHub">
          <GrGithub className="text-xl !text-white" />
        </a>
        <a href="#" onClick={(event) => event.preventDefault()} className="flex items-baseline" title="Email">
          <MdEmail className="text-xl !text-white" />
        </a>
      </StaggerSlideElementMenu>
      <Magnet className="absolute bottom-0 right-0 hidden md:block" strength={10}>
        <motion.div
          whileInView={{ width: '100px' }}
          viewport={{ amount: 'all' }}
          initial={{ width: 0 }}
          transition={{ duration: 1, ease: easeDefault }}
          className="flex h-[100px] items-center justify-center bg-secondary"
        >
          <Magnet>
            <AiOutlineArrowRight className="text-9xl text-primary" />
          </Magnet>
        </motion.div>
      </Magnet>
    </div>
  )
}
