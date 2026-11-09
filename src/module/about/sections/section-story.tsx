/* eslint-disable react/no-unescaped-entities */
import Magnet from 'components/effect/magnet'
import { useTranslation } from 'lib/translations'
import LetterSpacingTitle from 'module/about/letter-spacing-title'
import { motion } from 'framer-motion'
import { easeDefault } from 'lib/utils'
import { AiOutlineArrowDown } from 'react-icons/ai'

export default function SectionStory() {
  const { t, lang } = useTranslation()

  return (
    <section id="section-story-about" className="CONTAINER">
      <div className="h-[10vh] md:h-[15vh] lg:h-[30vh]"></div>
      <Magnet strength={10} className="z-[-10] mt-4 w-fit">
        <motion.div
          animate={{ width: '100px' }}
          initial={{ width: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          transition={{ duration: 1, ease: easeDefault }}
          className="MENU-CHANGE-OPACITY-0 flex h-[100px] items-center justify-center bg-yellow-300"
        >
          <Magnet>
            <AiOutlineArrowDown className="text-8xl" />
          </Magnet>
        </motion.div>
      </Magnet>
      <LetterSpacingTitle>{t('about_story_title')}</LetterSpacingTitle>
      <div className="MENU-CHANGE-Y-200-STAGGER flex max-w-3xl flex-col gap-6 pb-[10vh]">
        {lang === 'id' ? (
          <>
            <p className="CHILD-STAGGER font-poppins text-lg text-secondary lg:text-2xl">
              Saya Reno, lulusan Informatika dari Universitas Sebelas April. Saya tertarik pada software engineering, pengembangan aplikasi web dan mobile, sistem backend, cloud computing, serta Artificial Intelligence (AI).
            </p>
            <p className="CHILD-STAGGER font-poppins text-lg text-secondary lg:text-2xl">
              Saya telah mengerjakan berbagai proyek, mulai dari website institusi dan aplikasi mobile hingga platform perencanaan perjalanan berbasis AI dan penelitian analisis sentimen. Dalam proses pengembangan, saya terbiasa memahami kebutuhan sistem, merancang solusi, mengembangkan fitur, mengintegrasikan API, serta melakukan pengujian dan debugging.
            </p>
            <p className="CHILD-STAGGER font-poppins text-lg text-secondary lg:text-2xl">
              Saya terus mengembangkan kemampuan melalui pengerjaan proyek, pembelajaran mandiri, dan eksplorasi teknologi baru. Saya terbuka untuk berkolaborasi dalam membangun produk digital yang bermanfaat, mudah digunakan, dan dapat dikembangkan sesuai kebutuhan.
            </p>
          </>
        ) : (
          <>
            <p className="CHILD-STAGGER font-poppins text-lg text-secondary lg:text-2xl">
              I am Reno, an Informatics graduate from Universitas Sebelas April. I am interested in software engineering, web and mobile app development, backend systems, cloud computing, and Artificial Intelligence (AI).
            </p>
            <p className="CHILD-STAGGER font-poppins text-lg text-secondary lg:text-2xl">
              I have worked on various projects, ranging from institutional websites and mobile applications to AI-based travel planning platforms and sentiment analysis research. Throughout the development process, I am accustomed to understanding system requirements, designing solutions, developing features, integrating APIs, as well as testing and debugging.
            </p>
            <p className="CHILD-STAGGER font-poppins text-lg text-secondary lg:text-2xl">
              I continuously improve my skills through project execution, self-directed learning, and exploring new technologies. I am open to collaborating in building digital products that are useful, easy to use, and scalable to meet needs.
            </p>
          </>
        )}
      </div>
    </section>
  )
}
