import { HTMLMotionProps, motion } from 'framer-motion'

export default function MeIllustrateTop({ ...props }: HTMLMotionProps<'div'>) {
  return (
    <motion.div {...props} aria-hidden="true" className="pointer-events-none absolute inset-0" />
  )
}
