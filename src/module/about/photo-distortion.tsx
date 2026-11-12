import { motion } from 'framer-motion'
import { easeDefault } from 'lib/utils'
import Magnet from 'components/effect/magnet'

const PhotoDistortion = () => {
  return (
    <Magnet className="z-10" strength={15}>
      <motion.div
        initial={{ height: '0.1px', y: '200px', opacity: 0 }}
        animate={{ height: '100%', y: 0, opacity: 1 }}
        transition={{ ease: easeDefault, duration: 1, delay: 0.5, opacity: { duration: 0.2 } }}
        className="group relative flex w-fit items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-zinc-900/60 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-white/40 hover:shadow-yellow-500/10"
      >
        <motion.img
          src="/img/personal/formal.jpeg"
          alt="Muhammad Irfa' Maulana"
          className="h-[65vh] max-h-[640px] w-auto aspect-[3/4] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-20" />
      </motion.div>
    </Magnet>
  )
}

export default PhotoDistortion
