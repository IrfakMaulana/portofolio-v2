import { motion } from 'framer-motion'

export default function NodeSnake({ offsetDistance, pathLength, opacity }: any) {
  const path = 'M285 35C325 100 315 185 240 222C160 262 55 232 22 160C-8 95 42 28 125 20C185 14 250 12 285 35'
  return (
    <div id="containerPath" className="absolute right-[-30%] top-[-30%]">
      <motion.p
        className="absolute left-0 top-0 z-10 whitespace-nowrap px-10 font-poppins font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
        style={{
          offsetDistance,
          offsetPath: `path("${path}")`,
          opacity
        }}
      >
        AI & ML
      </motion.p>
      <svg className="h-full w-full" width="330" height="250" viewBox="0 0 330 250" fill="none">
        <motion.path
          className="drop-shadow-lg"
          id="idea1"
          d={path}
          stroke="#539E43"
          strokeWidth="31"
          strokeLinecap="round"
          style={{ pathLength, opacity }}
        />
      </svg>
    </div>
  )
}
