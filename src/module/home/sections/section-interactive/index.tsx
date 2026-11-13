/* eslint-disable react/no-unescaped-entities */
import Magnet from 'components/effect/magnet'
import ParallaxMarquee from 'components/effect/parallax-marquee'
import { StateContext } from 'context/state'
import { AnimatePresence, motion, useAnimate, useTransform } from 'framer-motion'
import useSpeedScrollElement from 'hooks/use-speed-scroll-element'
import Scribby from 'lib/scribby'
import { easeDefault } from 'lib/utils'
import { useTranslation } from 'lib/translations'
import HandRock from 'module/home/sections/section-interactive/hand-rock'
import MeIllustrateFace from 'module/home/sections/section-interactive/me-illustrate-face'
import MeIllustrateHair from 'module/home/sections/section-interactive/me-illustrate-hair'
import MeIllustrateTop from 'module/home/sections/section-interactive/me-illustrate-top'
import SectionInteractiveMobile from 'module/mobile/home/section-interactive'
import { memo, useContext, useEffect, useRef, useState, lazy, Suspense } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai'
import { GrGithub, GrLinkedin } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'
import HandPeace from './hand-peace'

const ExpertiseSnake = lazy(() => import('./expertise-snake'))

const Default = () => {
  const { t, lang } = useTranslation()
  const [containerScope, containerAnimate] = useAnimate()

  const { ref: refHand, scrollYProgress: scrollYHand } = useSpeedScrollElement({ offset: ['start end', 'end start'] })
  const scrollSpeedHand = useTransform(scrollYHand, [0, 0.2, 0.9, 1], [0, -400, 400, 300])
  const scrollSpeedDesc = useTransform(scrollYHand, [0, 1], [0, -300])

  const { ref: refExpertise, scrollYProgress: scrollYExpertise } = useSpeedScrollElement({ offset: ['start start', 'end end'] })
  const [startIllus, setStartIllus] = useState(0)
  const [illusScope, illusAnimate] = useAnimate()
  const scaleIllus = useTransform(scrollYExpertise, [0, 0.2], [0, 1])
  const scaleScrollIllus = useTransform(scrollYExpertise, [0, 0.2, 1], [1, 1, 1.05])
  const blurScrollIllus = useTransform(
    scrollYExpertise,
    [0, 0.2, 0.9, 1],
    ['blur(0px)', 'blur(0px)', 'blur(0px) grayscale(0)', 'blur(5px) grayscale(1)']
  )

  scaleIllus.on('change', (val) => {
    if (val === 0) {
      setStartIllus(val)
      return
    }
    if (val === 1) {
      setStartIllus(val)
    }
  })

  const scribbyPaint = useRef<any>()

  const onClickLeftEar = () => {
    scribbyPaint.current.reset()
  }

  useEffect(() => {
    scribbyPaint.current = new Scribby(document.getElementById('drawing-container'))
    scribbyPaint.current.setAttrStroke('white')
    scribbyPaint.current.setAttrStrokeWidth(10)
  }, [])

  useEffect(() => {
    if (startIllus === 1) {
      containerAnimate([[containerScope.current, { backgroundColor: '#FFC436' }, { ease: easeDefault as any, duration: 0.5 }]])
      illusAnimate([
        [illusScope.current, { scale: 1.2, y: '45vh' }, { ease: easeDefault as any, duration: 0.7 }],
        ['#hair-illustration', { y: '-35vh' }, { ease: easeDefault as any, duration: 0.7, at: '<' }]
      ])
      return
    }
    illusAnimate([
      ['#hair-illustration', { y: 0 }, { ease: easeDefault as any, duration: 0.7 }],
      [illusScope.current, { scale: 1, y: 0 }, { ease: easeDefault as any, duration: 0.7, at: '<' }]
    ])
    containerAnimate([[containerScope.current, { backgroundColor: '#EAE5DF' }, { ease: easeDefault as any, duration: 0.5 }]])
  }, [startIllus])

  return (
    <motion.section ref={containerScope} className="relative z-10 mt-[-100vh] w-screen bg-secondary">
      <div className="container relative mx-auto w-full">
        <div className="relative h-[30vh]">
          <div className="absolute bottom-0">
            <Magnet strength={10} className="MENU-CHANGE-Y-200 z-[-10] mt-4 w-fit">
              <motion.div
                animate={{ width: '100px' }}
                initial={{ width: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                transition={{ duration: 1, ease: easeDefault }}
                className="flex h-[100px] items-center justify-center bg-yellow-300"
              >
                <Magnet>
                  <AiOutlineArrowDown className="text-8xl" />
                </Magnet>
              </motion.div>
            </Magnet>
          </div>
        </div>
        <div className="h-[100vh]">
          <h2 className="MENU-CHANGE-Y-100 sticky top-[10%] font-poppins text-8xl font-medium text-primary">{t('home_welcome_interactive')}</h2>
        </div>
        <div ref={refHand} className="MENU-CHANGE-SCALE-125 flex w-full justify-end">
          <motion.div style={{ y: scrollSpeedHand }}>
            <HandRock />
          </motion.div>
        </div>
        <motion.p style={{ y: scrollSpeedDesc }} className="CONTAINER MENU-CHANGE-Y-100  pointer-events-none mt-20 text-4xl text-gray-600">
          {lang === 'id' ? (
            <>
              Halo, saya <span className="font-semibold text-primary">Muhammad Irfa' Maulana</span>, seorang{' '}
              <span className="font-semibold text-primary">Software Engineer & IT Automation Developer</span> dengan latar belakang Fullstack Web Development. Saya membangun aplikasi web, sistem backend, dan solusi otomasi untuk menyelesaikan masalah bisnis nyata.
            </>
          ) : (
            <>
              Hello, I&apos;m <span className="font-semibold text-primary">Muhammad Irfa' Maulana</span>, a{' '}
              <span className="font-semibold text-primary">Software Engineer & IT Automation Developer</span> with a background in Fullstack Web Development. I build web applications, backend systems, and automation solutions that solve real-world business problems.
            </>
          )}
        </motion.p>
        <AnimatePresence>
          <Magnet strength={10} className="MENU-CHANGE-Y-200 z-[-10] mt-4 w-fit">
            <motion.div
              animate={{ width: '100px' }}
              initial={{ width: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              transition={{ duration: 1, ease: easeDefault }}
              className="flex h-[100px] items-center justify-center bg-yellow-300"
            >
              <Magnet>
                <AiOutlineArrowDown className="text-8xl" />
              </Magnet>
            </motion.div>
          </Magnet>
        </AnimatePresence>
        <div className="h-[50vh]">
          <h2 className="MENU-CHANGE-Y-100 sticky top-[10%] mb-[10%] font-poppins text-8xl font-medium text-primary">
            {t('home_selected_expertise')}
          </h2>
        </div>
        <div ref={refExpertise} className="relative flex h-[300vh] w-full justify-center">
          <div className="w-fit">
            <motion.div className="absolute left-0 top-0 flex h-screen w-full flex-col gap-y-2">
              <ParallaxMarquee baseVelocity={-3} speed={2000}>
                <div className="MENU-CHANGE-Y-200 mb-4 flex items-center overflow-visible font-poppins text-9xl text-yellow-400">
                  <span>{t('home_building_app_art')}</span>
                  <Magnet strength={10}>
                    <div className="group mx-7 flex h-[100px] w-[100px] items-center justify-center rounded-full border border-solid border-yellow-400 hover:bg-yellow-400">
                      <Magnet>
                        <AiOutlineArrowRight className="text-5xl transition-transform duration-200 hover:scale-150 group-hover:text-white" />
                      </Magnet>
                    </div>
                  </Magnet>
                </div>
              </ParallaxMarquee>
              <ParallaxMarquee baseVelocity={1}>
                <div className="MENU-CHANGE-Y-100 mb-4 flex items-center overflow-visible font-poppins text-9xl text-yellow-400">
                  <span>{t('home_everything_canvas')}</span>
                  <Magnet strength={10}>
                    <div className="group mx-7 flex h-[100px] w-[100px] items-center justify-center rounded-full border border-solid border-yellow-400 hover:bg-yellow-400">
                      <Magnet>
                        <AiOutlineArrowRight className="text-5xl transition-transform duration-200 hover:scale-150 group-hover:text-white" />
                      </Magnet>
                    </div>
                  </Magnet>
                </div>
              </ParallaxMarquee>
            </motion.div>
            <motion.div style={{ scale: scaleScrollIllus, filter: blurScrollIllus }} className="sticky top-[10%]">
              <motion.div ref={illusScope} className="relative flex w-[22vw] min-w-[280px] max-w-[420px] flex-col">
                <MeIllustrateHair id="hair-illustration" className="relative z-10" />
                <div id="face-illustration" className="relative">
                  <MeIllustrateTop className="pointer-events-none absolute left-0 top-0 w-full" />
                  <Suspense>
                    <ExpertiseSnake scrollY={scrollYExpertise} />
                  </Suspense>
                  <MeIllustrateFace onClickLeftEar={onClickLeftEar} className="pointer-events-none relative z-10" />
                  <div className="absolute left-1/2 top-[55%] z-0 h-screen w-screen -translate-x-1/2">
                    <div
                      className="relative z-10 w-[100vw] overflow-hidden bg-[#151A20]"
                      style={{ borderRadius: '100% 100% 0 0', cursor: 'url(/pencil.png) 0 130, auto' }}
                    >
                      <svg id="drawing-container" className="h-full w-full " width="600" height="400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="relative z-10 h-[150vh] w-full bg-secondary">
        <div className="container mx-auto pt-[5%]">
          <Magnet strength={10} className="MENU-CHANGE-Y-200 z-[-10] mt-4 w-fit">
            <motion.div
              animate={{ width: '100px' }}
              initial={{ width: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              transition={{ duration: 1, ease: easeDefault }}
              className="flex h-[100px] items-center justify-center bg-yellow-300"
            >
              <Magnet>
                <AiOutlineArrowDown className="text-8xl" />
              </Magnet>
            </motion.div>
          </Magnet>
          <div className="h-[50vh] ">
            <h2 className="MENU-CHANGE-Y-100 sticky top-[10%] mb-[10%] font-poppins text-8xl font-medium text-primary">
              {t('home_lets_collaborate')}
            </h2>
          </div>
          <div className="MENU-CHANGE-SCALE-80 flex w-full justify-center ">
            <HandPeace />
          </div>
          <motion.p className="CONTAINER MENU-CHANGE-Y-100 pointer-events-none mt-20 text-4xl text-gray-500">
            {lang === 'id' ? (
              <>
                Saya bukan sekadar <span className="font-semibold text-primary">developer</span>. Saya seorang pemecah masalah, pemikir kreatif, dan
                partner dalam perjalanan digital Anda. Mari wujudkan <span className="font-semibold text-primary">ide-ide Anda</span> dan ciptakan
                pengalaman yang berkesan bagi audiens Anda. Siap memulai perjalanan ini bersama? Hubungi saya, dan mari kita jadikan web tempat yang
                lebih menarik, satu proyek interaktif dalam satu waktu.
              </>
            ) : (
              <>
                I'm not just a <span className="font-semibold text-primary">developer</span>. I'm a problem solver, a creative thinker, and a partner
                in your digital journey. Let's bring your <span className="font-semibold text-primary">ideas to life</span> and create experiences
                that resonate with your audience. Ready to embark on this journey together? Reach out, and let's make the web a more exciting place,
                one interactive project at a time.
              </>
            )}
          </motion.p>
          <div className="CONTAINER MENU-CHANGE-Y-100 mt-14 flex items-center gap-6">
            <Magnet strength={20}>
              <a
                href="https://github.com/IrfakMaulana"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="group flex h-[70px] w-[70px] items-center justify-center rounded-full border border-solid border-primary text-primary transition-colors hover:bg-yellow-400"
              >
                <GrGithub className="text-2xl" />
              </a>
            </Magnet>
            <Magnet strength={20}>
              <a
                href="https://id.linkedin.com/in/muhammad-irfa-maulana-430a86276"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group flex h-[70px] w-[70px] items-center justify-center rounded-full border border-solid border-primary text-primary transition-colors hover:bg-yellow-400"
              >
                <GrLinkedin className="text-2xl" />
              </a>
            </Magnet>
            <Magnet strength={20}>
              <a
                href="mailto:irfakmaulana05@gmail.com"
                aria-label="Email"
                className="group flex h-[70px] w-[70px] items-center justify-center rounded-full border border-solid border-primary text-primary transition-colors hover:bg-yellow-400"
              >
                <MdEmail className="text-2xl" />
              </a>
            </Magnet>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

const SectionInteractive = () => {
  const { state } = useContext(StateContext)

  if (state?.isSmallDevice) return <SectionInteractiveMobile />
  return <Default />
}

export default memo(SectionInteractive)
