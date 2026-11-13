import { HTMLMotionProps, motion } from 'framer-motion'

export default function MeIllustrateHair({ ...props }: HTMLMotionProps<'div'>) {
  return (
    <motion.div {...props} aria-hidden="true" className="h-0 w-full" />
  )
}
