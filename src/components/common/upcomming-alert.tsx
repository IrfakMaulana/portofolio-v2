import { StateContext } from 'context/state'
import { AnimatePresence, motion } from 'framer-motion'
import { easeDefault } from 'lib/utils'
import { useTranslation } from 'lib/translations'
import React, { useEffect, useState } from 'react'
import { GrGithub } from 'react-icons/gr'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'
import { TfiClose } from 'react-icons/tfi'

export default function UpCommingAlert() {
  const { state, setState } = React.useContext(StateContext)
  const { t, lang } = useTranslation()
  const [isPaused, setIsPaused] = useState(false)

  const onClose = () => {
    if (setState) {
      setState((prev) => ({
        ...prev,
        showNotif: false
      }))
    }
  }

  // Hilang otomatis dalam 4 detik, jeda jika kursor hover di atas pop-up
  useEffect(() => {
    if (!state?.showNotif || isPaused) return

    const timer = setTimeout(() => {
      onClose()
    }, 4000)

    return () => clearTimeout(timer)
  }, [state?.showNotif, isPaused])

  return (
    <AnimatePresence>
      {state?.showNotif ? (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.5, ease: easeDefault }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="fixed bottom-4 left-4 right-4 z-[99] max-w-sm overflow-hidden rounded-lg bg-white p-4 text-primary shadow-2xl sm:bottom-5 sm:left-auto sm:right-5 sm:p-5"
        >
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <h1 className="m-0 font-spartan text-base font-semibold text-primary sm:text-lg">
                {t('alert_try_new_project')}
              </h1>
              <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700 border border-amber-200">
                {lang === 'id' ? 'Kolaborasi' : 'Collab'}
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Tutup"
              className="text-primary/70 transition-opacity hover:opacity-100"
            >
              <TfiClose size={13} className="font-semibold" />
            </button>
          </div>
          <a
            href="https://github.com/Renohidayat/scriptease_app"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-md p-1.5 -mx-1.5 transition-colors hover:bg-gray-50"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="block font-poppins text-base font-bold text-primary transition-colors group-hover:text-yellow-600">
                  ScriptEase App
                </span>
                <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-600">
                  Open Source
                </span>
              </div>
              <span className="block text-xs text-gray-500 mt-0.5">
                {lang === 'id'
                  ? 'Proyek kolaborasi terbuka di GitHub — yuk berkontribusi!'
                  : 'Open-source collaboration project on GitHub — join & contribute!'}
              </span>
            </div>
            <div className="mt-2.5 flex cursor-pointer items-center gap-2 text-xs font-medium text-primary underline transition-colors group-hover:text-yellow-600">
              <GrGithub className="shrink-0 text-sm text-gray-700" />
              <span className="truncate font-mono">github.com/Renohidayat/scriptease_app</span>
              <LiaExternalLinkAltSolid className="shrink-0 text-sm" />
            </div>
          </a>

          {/* Progress Bar 4 Detik */}
          <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden bg-gray-100">
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: isPaused ? undefined : '0%' }}
              transition={{ duration: 4, ease: 'linear' }}
              className="h-full bg-primary"
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

