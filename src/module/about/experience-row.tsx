import Cursor from 'components/common/cursor'
import WithCursorElement from 'components/common/with-cursor-element'
import CursorProvider from 'context/cursor'
import { StateContext } from 'context/state'
import { AnimatePresence, motion } from 'framer-motion'
import { easeDefault } from 'lib/utils'
import React, { useState, useEffect, useMemo, useContext } from 'react'
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2, FiArrowUpRight } from 'react-icons/fi'
import { useLenis } from '@studio-freight/react-lenis'


export type TechItem = {
  name: string
  icon?: React.ComponentType<{ className?: string }>
}

export type ExperienceRowProps = {
  text1?: string | React.ReactElement
  text2?: string | React.ReactElement
  text3?: string | React.ReactElement
  description?: string | React.ReactElement
  color?: string
  image?: any
  hoverElement?: React.ReactNode
  link?: string
  fullViewImage?: string | string[]
  fullViewTitle?: string
  techStack?: TechItem[]
  onRowClick?: () => void
  disableHoverPreview?: boolean
  isCertificatesBundle?: boolean
  certificatesCount?: number
  certificateBadge?: string | React.ReactNode
}

const HoverEffect = ({ children, color, image, hoverElement, text1 }: { children: any } & ExperienceRowProps) => {
  return (
    <CursorProvider>
      <Cursor />
      <WithCursorElement
        state={{
          element: {
            element: (
              <motion.div
                initial={{ height: '0px' }}
                animate={{ height: '360px' }}
                exit={{ scale: 1.1, opacity: 0, transition: { duration: 0.5 } }}
                transition={{ duration: 0.7, ease: easeDefault }}
                className="relative flex w-[480px] max-w-[90vw] items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl p-2.5"
                style={{ backgroundColor: '#ffffff' }}
              >
                {hoverElement ? (
                  hoverElement
                ) : image ? (
                  <motion.img
                    src={image}
                    alt={typeof text1 === 'string' ? text1 : 'image'}
                    className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
                  />
                ) : null}

                {/* Tombol View digeser ke posisi yang pas (sudut kanan atas) agar foto tidak terhalang */}
                <div className="pointer-events-none absolute top-3.5 right-3.5 z-30 flex items-center gap-1.5 rounded-full bg-black/85 px-3 py-1 text-xs font-poppins font-medium text-white shadow-xl backdrop-blur-md border border-white/20">
                  <span className="text-white/90">View</span>
                  <FiArrowUpRight className="text-yellow-300 text-sm" />
                </div>
              </motion.div>
            ),
            key: 'previewExperience',
            type: 'hover'
          } as any
        }}
        fallbackState={{ element: { element: null, type: 'hover', key: new Date().getTime() } }}
      >
        {children}
      </WithCursorElement>
    </CursorProvider>
  )
}

const ExperienceRow = ({
  text1,
  text2,
  text3,
  description,
  color,
  image,
  hoverElement,
  link,
  fullViewImage,
  fullViewTitle,
  techStack,
  onRowClick,
  disableHoverPreview,
  isCertificatesBundle,
  certificatesCount,
  certificateBadge
}: ExperienceRowProps) => {
  const { state } = useContext(StateContext)
  const [hover, setHover] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImgIndex, setModalImgIndex] = useState(0)

  const modalImages: string[] = useMemo(() => {
    if (Array.isArray(fullViewImage)) return fullViewImage
    if (typeof fullViewImage === 'string') return [fullViewImage]
    if (typeof image === 'string') return [image]
    return []
  }, [fullViewImage, image])

  const hasFullViewImage = modalImages.length > 0
  const lenis = useLenis()

  useEffect(() => {
    if (!isModalOpen) return

    lenis?.stop()
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      } else if (e.key === 'ArrowLeft' && modalImages.length > 1) {
        setModalImgIndex((prev) => (prev > 0 ? prev - 1 : modalImages.length - 1))
      } else if (e.key === 'ArrowRight' && modalImages.length > 1) {
        setModalImgIndex((prev) => (prev + 1) % modalImages.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      lenis?.start()
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen, lenis, modalImages.length])

  const onHoverActive = () => {
    if (state?.isSmallDevice) return
    setHover(true)
  }
  const onHoverInactive = () => {
    if (state?.isSmallDevice) return
    setHover(false)
  }

  const handleClick = (e: React.MouseEvent) => {
    if (onRowClick) {
      onRowClick()
      return
    }

    // Di perangkat layar sentuh (mobile): sentuh sekali pada baris akan membuka pop-up pratinjau foto
    if (state?.isSmallDevice) {
      if (hasFullViewImage || hoverElement || image) {
        setModalImgIndex(0)
        setIsModalOpen(true)
        return
      }
      if (link) {
        window.open(link, '_blank')
        return
      }
    }

    // Di perangkat desktop: klik membuka tautan jika ada, atau modal jika ada foto
    if (link) {
      window.open(link, '_blank')
      return
    }
    if (hasFullViewImage || hoverElement || image) {
      setModalImgIndex(0)
      setIsModalOpen(true)
    }
  }

  const currentModalImg = modalImages[modalImgIndex]

  const content = useMemo(
    () => (
      <>
        <motion.button
          onHoverStart={onHoverActive}
          onHoverEnd={onHoverInactive}
          onFocus={onHoverActive}
          onBlur={onHoverInactive}
          className={`CHILD-STAGGER ${
            link || hasFullViewImage || hoverElement || onRowClick ? 'cursor-pointer' : 'cursor-default'
          } group flex w-full max-w-full flex-col gap-2.5 py-6 md:py-8 transition-opacity duration-200 text-left overflow-hidden`}
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', opacity: hover ? 0.95 : 1 }}
          onClick={handleClick}
        >
          {/* Top row: Title on left, Role and Period on right */}
          <div className="flex w-full flex-col sm:flex-row sm:items-baseline justify-between gap-2 min-w-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <h2 className="m-0 font-poppins text-2xl font-semibold tracking-tight text-white transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl md:text-4xl break-words">
                {text1}
              </h2>
              {certificateBadge ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/40 px-2.5 py-0.5 text-xs font-poppins font-medium text-yellow-300">
                  <FiMaximize2 className="text-xs" />
                  <span>{certificateBadge}</span>
                </span>
              ) : isCertificatesBundle ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/40 px-2.5 py-0.5 text-xs font-poppins font-medium text-yellow-300">
                  <FiMaximize2 className="text-xs" />
                  <span>{certificatesCount || 7} Sertifikat</span>
                </span>
              ) : link ? (
                <button
                  type="button"
                  aria-label={`Buka tautan ${typeof text1 === 'string' ? text1 : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(link, '_blank')
                  }}
                  className="flex items-center justify-center p-1 rounded-full text-white/50 transition-colors hover:text-yellow-300 shrink-0"
                  title="Buka tautan website langsung"
                >
                  <FiArrowUpRight className="text-sm sm:text-base" />
                </button>
              ) : hasFullViewImage ? (
                <FiMaximize2
                  className="text-xs sm:text-sm text-white/40 transition-colors group-hover:text-yellow-300 shrink-0"
                  title="Klik untuk melihat pratinjau penuh"
                />
              ) : null}
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-6 sm:justify-end text-left sm:text-right min-w-0">
              <span className="font-poppins text-xs sm:text-sm font-medium text-yellow-300/90 break-words max-w-full sm:max-w-md">
                {text3}
              </span>
              <span className="font-poppins text-xs sm:text-sm text-white/50 shrink-0">
                {text2}
              </span>
            </div>
          </div>

          {/* Tech stack badges */}
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {techStack.map((tech, idx) => {
                const IconComponent = tech.icon
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs font-poppins text-white/75 backdrop-blur-sm transition-all duration-300 group-hover:border-white/25 group-hover:bg-white/[0.08] group-hover:text-white"
                  >
                    {IconComponent && <IconComponent className="text-xs text-yellow-300" />}
                    <span>{tech.name}</span>
                  </span>
                )
              })}
            </div>
          )}

          {/* Bottom row: Brief Background / Biodata singkat */}
          {description && (
            <p className="m-0 font-poppins text-xs sm:text-sm md:text-base leading-relaxed text-white/70 max-w-4xl">
              {description}
            </p>
          )}
        </motion.button>

        {/* Full View Lightbox Modal */}
        <AnimatePresence>
          {isModalOpen && (currentModalImg || hoverElement) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              data-lenis-prevent="true"
              className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-md overscroll-contain"
              onClick={() => setIsModalOpen(false)}
              onWheel={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25, ease: easeDefault }}
                data-lenis-prevent="true"
                className="relative flex max-h-[92vh] max-w-[94vw] sm:max-w-3xl flex-col items-center rounded-2xl bg-[#141418] p-3 sm:p-5 shadow-2xl border border-white/10 overscroll-contain"
                onClick={(e) => e.stopPropagation()}
                onWheel={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex w-full items-center justify-between gap-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 min-w-0">
                    <FiMaximize2 className="text-yellow-300 text-sm shrink-0" />
                    <h3 className="m-0 font-poppins text-sm sm:text-base font-semibold text-white truncate">
                      {fullViewTitle || (typeof text1 === 'string' ? text1 : 'Pratinjau Gambar')}
                    </h3>
                  </div>
                  <button
                    type="button"
                    aria-label="Tutup pratinjau penuh"
                    onClick={() => setIsModalOpen(false)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                  >
                    <FiX className="text-lg" />
                  </button>
                </div>

                {/* Tech stack in modal */}
                {techStack && techStack.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 pb-1 w-full">
                    {techStack.map((tech, idx) => {
                      const IconComponent = tech.icon
                      return (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-0.5 text-xs font-poppins text-white/80"
                        >
                          {IconComponent && <IconComponent className="text-xs text-yellow-300" />}
                          <span>{tech.name}</span>
                        </span>
                      )
                    })}
                  </div>
                )}

                {/* Main Image View */}
                <div className="relative mt-3 flex w-full items-center justify-center overflow-hidden rounded-xl bg-white p-3 min-h-[180px]">
                  {currentModalImg ? (
                    <img
                      src={currentModalImg}
                      alt={typeof text1 === 'string' ? text1 : 'Pratinjau'}
                      className="max-h-[60vh] sm:max-h-[70vh] max-w-[88vw] object-contain rounded-lg"
                    />
                  ) : hoverElement ? (
                    <div className="flex max-h-[60vh] sm:max-h-[70vh] max-w-[88vw] items-center justify-center overflow-hidden rounded-xl p-2">
                      {hoverElement}
                    </div>
                  ) : null}

                  {modalImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        aria-label="Gambar sebelumnya"
                        onClick={() =>
                          setModalImgIndex((prev) => (prev > 0 ? prev - 1 : modalImages.length - 1))
                        }
                        className="absolute left-2 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black/90 active:scale-95"
                      >
                        <FiChevronLeft className="text-xl" />
                      </button>
                      <button
                        type="button"
                        aria-label="Gambar berikutnya"
                        onClick={() => setModalImgIndex((prev) => (prev + 1) % modalImages.length)}
                        className="absolute right-2 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black/90 active:scale-95"
                      >
                        <FiChevronRight className="text-xl" />
                      </button>
                    </>
                  )}
                </div>

                {/* Footer Action */}
                <div className="mt-3 flex w-full flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  {modalImages.length > 1 ? (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-white/50">
                      <span>{modalImgIndex + 1}</span>
                      <span>/</span>
                      <span>{modalImages.length}</span>
                    </div>
                  ) : (
                    <span />
                  )}

                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-2 font-poppins text-xs sm:text-sm font-semibold text-primary transition-all hover:bg-yellow-300 hover:scale-105 active:scale-95 shadow-md"
                    >
                      <span>Kunjungi Website / Proyek</span>
                      <FiArrowUpRight className="text-sm sm:text-base" />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    ),
    [
      hover,
      isModalOpen,
      modalImgIndex,
      currentModalImg,
      modalImages,
      text1,
      text2,
      text3,
      description,
      link,
      hasFullViewImage,
      fullViewTitle,
      hoverElement,
      state?.isSmallDevice
    ]
  )

  if (state?.isSmallDevice || disableHoverPreview) return content

  const previewImage = Array.isArray(fullViewImage) ? fullViewImage[0] : fullViewImage || image

  return (
    <HoverEffect color={color} image={previewImage} hoverElement={hoverElement} text1={text1}>
      {content}
    </HoverEffect>
  )
}

export default React.memo(ExperienceRow)
