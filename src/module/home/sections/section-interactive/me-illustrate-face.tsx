import { HTMLMotionProps, motion } from 'framer-motion'

type Props = HTMLMotionProps<'div'> & {
  onClickLeftEar: () => void
}

export default function MeIllustrateFace({ onClickLeftEar, ...props }: Props) {
  return (
    <motion.div {...props}>
      <svg width="800" height="714" viewBox="0 0 800 714" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
        <image href="/img/personal/full-badan.jpeg" width="800" height="714" preserveAspectRatio="xMidYMid slice" />
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
