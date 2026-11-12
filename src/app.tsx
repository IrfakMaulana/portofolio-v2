import Cursor from 'components/common/cursor'
import Introduction from 'components/common/introduction'
import UpCommingAlert from 'components/common/upcomming-alert'
import Menu from 'components/navigation/menu'
import TopNav from 'components/navigation/top-nav'
import CursorProvider from 'context/cursor'
import LanguageProvider from 'context/language'
import StateProvider, { StateContext } from 'context/state'
import { AnimatePresence, motion } from 'framer-motion'
import { easeDefault, routes } from 'lib/utils'
import { AboutTransition } from 'pages/about'
import { HomeTransition } from 'pages/home'
import { SummaryTransition } from 'pages/summary'
import React, { useContext, useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

const Page = () => {
  const location = useLocation()
  const { state } = useContext(StateContext)
  const containerPageRef = useRef<any>()

  const removeStyleContainer = () => {
    setTimeout(() => {
      if (containerPageRef.current) {
        containerPageRef.current.style.transform = 'inherit'
      }
    }, 500)
  }

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 1000)
  }, [location.pathname])

  // Dynamic Page-Level SEO (Title, Description, Canonical URL, OG Title)
  useEffect(() => {
    let title = "Muhammad Irfa' Maulana — Software Engineer & IT Automation Developer"
    let description =
      "Portfolio Muhammad Irfa' Maulana (IrfakMaulana), Software Engineer & IT Automation Developer focused on fullstack web development, business process automation, and system integration."
    let canonical = ''

    if (location.pathname === routes.about) {
      title = "About — Muhammad Irfa' Maulana | Software Engineer"
      description =
        "About Muhammad Irfa' Maulana, a Software Engineer focused on fullstack development, business process automation, and system integration."
      canonical = ''
    } else if (location.pathname === routes.summary) {
      title = "Summary — Muhammad Irfa' Maulana | Software Engineer"
      description =
        "Summary of Muhammad Irfa' Maulana's experience, education, projects, skills, and certificates."
      canonical = ''
    }

    document.title = title

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) metaDescription.setAttribute('content', description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl && canonical) ogUrl.setAttribute('content', canonical)

    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink && canonical) canonicalLink.setAttribute('href', canonical)
  }, [location.pathname])

  useEffect(() => {
    removeStyleContainer()
  }, [state?.isSplashShow, state?.menuShow, location.pathname])

  if (state?.isSmallDevice === undefined) {
    return <div className="h-screen w-screen bg-primary"></div>
  }

  return (
    <>
      <AnimatePresence mode="sync">
        {state?.isSplashShow && (
          <motion.div
            layout
            key="introduction"
            exit={{ y: '-100vh', borderRadius: '100px' }}
            transition={{ duration: 1, ease: easeDefault }}
            className="self-center"
          >
            <Introduction />
          </motion.div>
        )}
      </AnimatePresence>
      {!state?.isSplashShow && (
        <AnimatePresence mode="wait">
          <React.Fragment key={location.pathname}>
            <TopNav />
            <Routes location={location} key={location.pathname}>
              <Route index element={<HomeTransition />} />
              <Route path={routes.about} element={<AboutTransition />} />
              <Route path={routes.summary} element={<SummaryTransition />} />
            </Routes>
          </React.Fragment>
        </AnimatePresence>
      )}
    </>
  )
}

const App = () => {
  return (
    <>
      <LanguageProvider>
        <StateProvider>
          <CursorProvider>
            <UpCommingAlert />
            <Cursor />
            <Menu />
            <Page />
          </CursorProvider>
        </StateProvider>
      </LanguageProvider>
    </>
  )
}

export default App
