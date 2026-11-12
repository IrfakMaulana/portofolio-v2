/* eslint-disable react/no-unescaped-entities */
import CountUp from 'components/effect/count-up'
import { motion } from 'framer-motion'
import { stats } from 'lib/stats'
import { useTranslation } from 'lib/translations'
import StaggerElementFooter from 'module/footer/stagger-element'
import React from 'react'

const Description = () => {
  const [hover, setHover] = React.useState(false)
  const { t, lang } = useTranslation()

  return (
    <div className="CONTAINER relative min-h-screen pt-28 md:pt-36">
      {/* Graduation Photo on the Right (Lowered slightly so it balances perfectly on screen) */}
      <div className="pointer-events-none absolute right-0 top-4 sm:top-6 md:top-8 lg:top-3 xl:top-2 z-0 flex select-none justify-end overflow-hidden lg:z-10">
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[460px] xl:w-[520px]"
        >
          {/* White glow effect behind photo */}
          <div className="absolute inset-0 top-[12%] scale-90 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.08)_45%,transparent_70%)] blur-2xl" />

          <img
            src="/img/personal/full-badanv2.png"
            alt="Muhammad Irfa' Maulana"
            className="relative aspect-[4/5] h-auto w-full object-cover object-top opacity-90 transition-opacity duration-700 md:opacity-95 lg:opacity-100"
          />

          {/* Smooth bottom fade into natural site background */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-primary to-transparent" />
        </motion.div>
      </div>

      {/* Text Content - constrained width on lg+ so it never overlaps the photo */}
      <div className="relative z-10 w-full lg:max-w-[55%] xl:max-w-[58%]">
        <h1 className="MENU-CHANGE-SCALE-125 font-display text-5xl font-semibold text-secondary lg:text-7xl">{t('summary_title')}</h1>
        <div className="mt-8 flex flex-col md:mt-12">
          <h2 className="MENU-CHANGE-Y-100 max-w-[65%] font-poppins text-5xl font-semibold text-white lg:max-w-none lg:text-8xl">Muhammad Irfa' Maulana</h2>
          <p className="MENU-CHANGE-Y-100 mt-4 max-w-[70%] font-poppins text-2xl text-secondary lg:max-w-none lg:text-3xl">{t('summary_role_line')}</p>
          <p className="MENU-CHANGE-Y-200 mt-10 text-justify font-poppins text-lg text-secondary lg:text-left lg:text-xl">
            {lang === 'id' ? (
              <>
                <span className="font-semibold text-white">Halo</span>, saya Muhammad Irfa' Maulana, seorang Software Engineer dengan fokus pada fullstack web development, otomasi proses bisnis, dan integrasi sistem.
                <br /><br />
                Saya mengembangkan aplikasi web, backend, REST API, serta solusi otomasi menggunakan JavaScript, TypeScript, Node.js, Python, PHP, Laravel, Next.js, dan Excel VBA.
                <br /><br />
                Terbuka untuk kolaborasi dan peluang baru.
              </>
            ) : (
              <>
                <span className="font-semibold text-white">Hello</span>, I am Muhammad Irfa' Maulana, a Software Engineer focused on fullstack web development, business process automation, and system integration.
                <br /><br />
                I develop web applications, backend systems, REST APIs, and automation solutions using JavaScript, TypeScript, Node.js, Python, PHP, Laravel, Next.js, and Excel VBA.
                <br /><br />
                Open to collaboration and new opportunities.
              </>
            )}
          </p>
          <p className="MENU-CHANGE-Y-200 mt-6 font-poppins text-base text-secondary opacity-70 lg:text-lg">{t('summary_languages')}</p>
          <div className="MENU-CHANGE-Y-200 mt-10 grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0">
            {stats.map((stat) => (
              <div key={stat.labelKey} className="flex flex-col">
                <p className="font-poppins text-3xl font-semibold text-white lg:text-4xl">
                  <CountUp target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="mt-1 font-poppins text-sm text-secondary opacity-70">{t(stat.labelKey)}</p>
              </div>
            ))}
          </div>
          <a
            href="#"
            onClick={(event) => event.preventDefault()}
            target="_blank"
            download
            title={t('summary_download_cv_title')}
            className="MENU-CHANGE-Y-200 mt-10 w-fit"
            rel="noreferrer"
          >
            <motion.div
              onHoverStart={() => setHover(true)}
              onHoverEnd={() => setHover(false)}
              className="relative rounded border border-white px-5 py-2 font-poppins capitalize text-white"
            >
              <span className="text-xl opacity-0">{t('summary_download_cv_title')}</span>
              <StaggerElementFooter
                aria-hidden
                to="0"
                triger={hover}
                from="-130%"
                perLetter
                tag="h2"
                className="pointer-events-none absolute left-1/2 top-1/2 z-10 m-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-xl font-medium leading-[1.3] text-white"
              >
                {t('summary_download_cv')}
              </StaggerElementFooter>
              <StaggerElementFooter
                aria-hidden
                to="130%"
                from="0"
                triger={hover}
                perLetter
                tag="h2"
                className="pointer-events-none absolute left-1/2 top-1/2 z-10 m-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-xl font-medium leading-[1.3] text-white"
              >
                {t('summary_download_cv')}
              </StaggerElementFooter>
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Description)
