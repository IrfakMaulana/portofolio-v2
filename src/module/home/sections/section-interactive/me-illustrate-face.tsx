import { HTMLMotionProps, motion } from 'framer-motion'

type Props = HTMLMotionProps<'div'> & {
  onClickLeftEar: () => void
}

export default function MeIllustrateFace({ onClickLeftEar, ...props }: Props) {
  return (
    <motion.div {...props}>
      <svg width="375" height="666" viewBox="0 0 375 666" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
        <image href="/img/personal/remove.png" width="375" height="666" preserveAspectRatio="xMidYMid meet" />
        {/* Interactive clickable ear area to reset Scribby drawing */}
        <circle
          cx="670"
          cy="120"
          r="40"
          fill="transparent"
          onClick={onClickLeftEar}
          className="pointer-events-auto cursor-pointer"
        />
      </svg>
    </motion.div>
  )
}
