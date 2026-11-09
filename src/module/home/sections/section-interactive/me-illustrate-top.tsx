import { HTMLMotionProps, motion } from 'framer-motion'

export default function MeIllustrateTop({ ...props }: HTMLMotionProps<'div'>) {
  return (
    <motion.div {...props}>
      <svg width="800" height="714" viewBox="0 0 800 714" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
        <image href="/reno-illus-top.png" width="800" height="714" />
      </svg>
    </motion.div>
  )
}
