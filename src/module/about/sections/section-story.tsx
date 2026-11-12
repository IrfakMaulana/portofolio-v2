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
              Saya adalah Software Engineer dengan latar belakang Fullstack Web Development dan pengalaman dalam pengembangan aplikasi, otomasi proses bisnis, serta integrasi sistem. Saya berfokus membangun solusi perangkat lunak yang efisien, terstruktur, dan mampu menyelesaikan kebutuhan nyata.
            </p>
            <p className="CHILD-STAGGER font-poppins text-lg text-secondary lg:text-2xl">
              Saya memiliki pengalaman mengembangkan aplikasi web, sistem backend, REST API, serta berbagai solusi otomasi menggunakan JavaScript, TypeScript, Node.js, Python, PHP, Laravel, Next.js, dan Excel VBA. Saya juga memiliki ketertarikan pada pengelolaan database, integrasi sistem, dan pengembangan aplikasi internal untuk meningkatkan efisiensi operasional.
            </p>
            <p className="CHILD-STAGGER font-poppins text-lg text-secondary lg:text-2xl">
              Bagi saya, pengembangan perangkat lunak bukan hanya tentang menulis kode, tetapi juga memahami permasalahan, merancang solusi yang tepat, dan membangun sistem yang dapat digunakan serta dikembangkan dalam jangka panjang.
            </p>
          </>
        ) : (
          <>
            <p className="CHILD-STAGGER font-poppins text-lg text-secondary lg:text-2xl">
              I am a Software Engineer with a background in Fullstack Web Development and experience in application development, business process automation, and system integration. I focus on building efficient, structured, and solution-oriented software.
            </p>
            <p className="CHILD-STAGGER font-poppins text-lg text-secondary lg:text-2xl">
              My experience includes developing web applications, backend systems, REST APIs, and automation solutions using JavaScript, TypeScript, Node.js, Python, PHP, Laravel, Next.js, and Excel VBA. I am also interested in database management, system integration, and internal application development to improve operational efficiency.
            </p>
            <p className="CHILD-STAGGER font-poppins text-lg text-secondary lg:text-2xl">
              To me, software development is not just about writing code. It is about understanding problems, designing effective solutions, and building systems that are useful, maintainable, and scalable.
            </p>
          </>
        )}
      </div>
    </section>
  )
}
