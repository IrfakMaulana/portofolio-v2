import { HTMLMotionProps, motion } from 'framer-motion'

export default function MeIllustrateHair({ ...props }: HTMLMotionProps<'div'>) {
  return (
    <motion.div {...props}>
      <svg width="800" height="230" viewBox="0 0 800 230" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
        <image href="/reno-illus-hair.png" width="800" height="230" />
      </svg>
    </motion.div>
  )
}
