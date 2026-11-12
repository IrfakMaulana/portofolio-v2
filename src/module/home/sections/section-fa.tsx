import { useTransform, motion, HTMLMotionProps } from 'framer-motion'
import useSpeedScrollElement from 'hooks/use-speed-scroll-element'

const FA = (props: HTMLMotionProps<'div'>) => {
  return (
    <motion.div {...props}>
      <svg width="290" height="145" viewBox="0 0 290 145" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <text
          x="50%"
          y="76%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="115"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          letterSpacing="4"
        >
          IM
        </text>
      </svg>
    </motion.div>
  )
}

export default function SectionFA() {
  const { ref, scrollYProgress } = useSpeedScrollElement({ offset: ['start start', 'end end'] })

  const yTopCurtain = useTransform(scrollYProgress, [0.2, 0.8, 1], ['0%', '-10%', '-110%'])
  const yBottomCurtain = useTransform(scrollYProgress, [0.2, 0.8, 1], ['0%', '10%', '110%'])
  const bottomFA = useTransform(scrollYProgress, [0.2, 0.8, 1], ['0%', '0%', '-100%'])
  const topFA = useTransform(scrollYProgress, [0.2, 0.8, 1], ['100%', '100%', '200%'])

  return (
    <section id="section-fa" ref={ref} className="pointer-events-none relative z-20 h-[200vh] w-screen">
      <div className="MENU-CHANGE-SCALE-125 sticky left-0 top-0 flex h-screen w-screen flex-col justify-between overflow-hidden">
        <motion.div style={{ height: '50vh', y: yTopCurtain }} className="relative flex w-screen justify-center overflow-hidden bg-primary">
          <FA className="absolute w-[70%] -translate-y-1/2 xl:w-[50%] 2xl:w-[40%]" style={{ top: topFA }} />
        </motion.div>
        <motion.div style={{ height: '50vh', y: yBottomCurtain }} className="relative flex w-screen justify-center overflow-hidden bg-primary">
          <FA className="absolute w-[70%] -translate-y-1/2 xl:w-[50%] 2xl:w-[40%]" style={{ top: bottomFA }} />
        </motion.div>
      </div>
    </section>
  )
}
