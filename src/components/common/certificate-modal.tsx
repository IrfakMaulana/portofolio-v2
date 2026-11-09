import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiFileText,
  FiExternalLink,
  FiCheckCircle,
  FiAward
} from 'react-icons/fi'
import {
  ALL_CERTIFICATES,
  CERTIFICATE_GROUPS,
  CertificateItem,
  CertificateGroupId
} from 'lib/certificates'
import { useTranslation } from 'lib/translations'
import { easeDefault } from 'lib/utils'
import { useLenis } from '@studio-freight/react-lenis'

export interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  initialCertId?: string
  initialGroupId?: 'all' | CertificateGroupId
  initialIndex?: number
}

export default function CertificateModal({
  isOpen,
  onClose,
  initialCertId,
  initialGroupId = 'all',
  initialIndex = 0
}: CertificateModalProps) {
  const { lang } = useTranslation()
  const lenis = useLenis()

  const [selectedGroup, setSelectedGroup] = useState<'all' | CertificateGroupId>(initialGroupId)
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  // Sync initial state when modal opens
  useEffect(() => {
    if (!isOpen) return

    if (initialCertId) {
      const foundCert = ALL_CERTIFICATES.find((c) => c.id === initialCertId)
      if (foundCert) {
        setSelectedGroup(foundCert.groupId)
        const groupCerts = ALL_CERTIFICATES.filter((c) => c.groupId === foundCert.groupId)
        const idx = groupCerts.findIndex((c) => c.id === initialCertId)
        setCurrentIndex(idx >= 0 ? idx : 0)
        return
      }
    }

    if (initialGroupId && initialGroupId !== 'all') {
      setSelectedGroup(initialGroupId)
      setCurrentIndex(0)
    } else {
      setSelectedGroup('all')
      setCurrentIndex(initialIndex >= 0 && initialIndex < ALL_CERTIFICATES.length ? initialIndex : 0)
    }
  }, [isOpen, initialCertId, initialGroupId, initialIndex])

  // Lock body scroll and stop Lenis while modal is open
  useEffect(() => {
    if (!isOpen) return

    lenis?.stop()
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      lenis?.start()
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen, lenis])

  // Get active filtered certificates
  const filteredCerts = useMemo(() => {
    if (selectedGroup === 'all') return ALL_CERTIFICATES
    return ALL_CERTIFICATES.filter((c) => c.groupId === selectedGroup)
  }, [selectedGroup])

  const safeIndex = Math.min(Math.max(0, currentIndex), Math.max(0, filteredCerts.length - 1))
  const activeCert: CertificateItem = filteredCerts[safeIndex] || ALL_CERTIFICATES[0]

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredCerts.length - 1))
  }

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % filteredCerts.length)
  }

  const handleSelectGroup = (groupId: 'all' | CertificateGroupId) => {
    setSelectedGroup(groupId)
    setCurrentIndex(0)
  }

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredCerts.length - 1))
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % filteredCerts.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, filteredCerts.length])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        data-lenis-prevent="true"
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/92 p-2 sm:p-4 md:p-6 backdrop-blur-md overscroll-contain"
        onClick={onClose}
        onWheel={(e) => e.stopPropagation()}
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 15 }}
          transition={{ duration: 0.25, ease: easeDefault }}
          data-lenis-prevent="true"
          className="relative flex w-full max-w-5xl max-h-[95vh] flex-col rounded-2xl bg-[#141418] p-3 sm:p-5 md:p-6 shadow-2xl border border-white/10 text-left my-auto overflow-hidden overscroll-contain"
          onClick={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex w-full items-start justify-between gap-3 pb-3 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                style={{
                  backgroundColor: `${activeCert.themeColor}20`,
                  borderColor: `${activeCert.themeColor}40`,
                  color: activeCert.themeColor
                }}
              >
                <FiAward className="text-xl" />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="m-0 font-poppins text-base sm:text-lg md:text-xl font-bold text-white tracking-tight">
                    {activeCert.institution}
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 px-2.5 py-0.5 text-xs font-poppins font-medium text-yellow-300">
                    <FiCheckCircle className="text-[11px]" />
                    <span>
                      {activeCert.badge
                        ? activeCert.badge[lang]
                        : lang === 'id'
                        ? 'Sertifikat Terverifikasi'
                        : 'Verified Certificate'}
                    </span>
                  </span>
                </div>
                <p className="m-0 text-xs text-white/50 font-poppins truncate">
                  {lang === 'id'
                    ? 'Koleksi Sertifikasi Resmi: Web Dev, Cybersecurity, AI Readiness, Cloud & Literasi'
                    : 'Official Certifications: Web Dev, Cybersecurity, AI Readiness, Cloud & Literacy'}
                </p>
              </div>
            </div>

            <button
              type="button"
              aria-label="Tutup pratinjau"
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Institution Filter Tabs */}
          <div
            data-lenis-prevent="true"
            className="flex items-center gap-1.5 overflow-x-auto py-2.5 border-b border-white/5 shrink-0 scrollbar-thin scrollbar-thumb-white/20"
          >
            {CERTIFICATE_GROUPS.map((group) => {
              const isActive = selectedGroup === group.id
              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => handleSelectGroup(group.id)}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 font-poppins text-xs transition-all ${
                    isActive
                      ? 'bg-yellow-400 font-semibold text-black shadow-md'
                      : 'border border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{group.label[lang]}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                      isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-white/60'
                    }`}
                  >
                    {group.count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Scrollable Center Body (contains Certificate Image + Info) */}
          <div
            data-lenis-prevent="true"
            className="flex-1 overflow-y-auto overscroll-contain py-3 pr-1 space-y-3 scrollbar-thin scrollbar-thumb-white/20"
          >
            {/* Certificate Main Stage */}
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-white/5 border border-white/10 p-2 sm:p-3">
              <div className="relative flex w-full items-center justify-center min-h-[160px] sm:min-h-[220px] md:min-h-[280px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeCert.id}
                    src={activeCert.image}
                    alt={activeCert.title}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="max-h-[34vh] sm:max-h-[38vh] md:max-h-[42vh] max-w-full object-contain rounded-lg shadow-2xl bg-white"
                  />
                </AnimatePresence>

                {/* Prev / Next floating arrows (if multiple certs in group) */}
                {filteredCerts.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Sertifikat sebelumnya"
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black/75 text-white shadow-lg backdrop-blur-sm border border-white/20 transition-all hover:bg-yellow-400 hover:text-black hover:scale-110 active:scale-95"
                    >
                      <FiChevronLeft className="text-xl sm:text-2xl" />
                    </button>

                    <button
                      type="button"
                      aria-label="Sertifikat berikutnya"
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black/75 text-white shadow-lg backdrop-blur-sm border border-white/20 transition-all hover:bg-yellow-400 hover:text-black hover:scale-110 active:scale-95"
                    >
                      <FiChevronRight className="text-xl sm:text-2xl" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Active Certificate Info & Actions */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 rounded-xl bg-white/[0.03] border border-white/5 p-3 sm:p-4">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-semibold text-yellow-300">
                    {String(safeIndex + 1).padStart(2, '0')} / {String(filteredCerts.length).padStart(2, '0')}
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-xs font-poppins font-medium text-yellow-300/90">
                    {activeCert.program}
                  </span>
                  {activeCert.partner && (
                    <>
                      <span className="text-white/30">•</span>
                      <span className="text-xs font-poppins text-white/50">
                        {activeCert.partner}
                      </span>
                    </>
                  )}
                  <span className="text-white/30">•</span>
                  <span className="text-xs font-poppins text-white/40">
                    {activeCert.date[lang]}
                  </span>
                </div>

                <h4 className="m-0 font-poppins text-sm sm:text-base md:text-lg font-semibold text-white tracking-tight">
                  {activeCert.title}
                </h4>
                <p className="mt-1 mb-2 font-poppins text-xs text-white/70 leading-relaxed max-w-3xl">
                  {activeCert.description[lang]}
                </p>

                {/* Tag badges */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {activeCert.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] sm:text-[11px] font-poppins text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {activeCert.pdfUrl && (
                  <a
                    href={activeCert.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 sm:px-4 sm:py-2 font-poppins text-xs sm:text-sm font-medium text-white transition-all hover:bg-white/20 hover:border-white/40 active:scale-95"
                  >
                    <FiFileText className="text-yellow-300 text-sm sm:text-base" />
                    <span>
                      {activeCert.pdfUrl.endsWith('.pdf')
                        ? lang === 'id'
                          ? 'Buka PDF Asli'
                          : 'Open Original PDF'
                        : lang === 'id'
                        ? 'Buka Dokumen Asli'
                        : 'Open Original File'}
                    </span>
                  </a>
                )}

                {activeCert.verifyUrl && (
                  <a
                    href={activeCert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-3.5 py-1.5 sm:px-4 sm:py-2 font-poppins text-xs sm:text-sm font-semibold text-primary transition-all hover:bg-yellow-300 hover:scale-105 active:scale-95 shadow-md"
                  >
                    <span>
                      {activeCert.verifyLabel
                        ? activeCert.verifyLabel[lang]
                        : lang === 'id'
                        ? 'Verifikasi Kredensial'
                        : 'Verify Credential'}
                    </span>
                    <FiExternalLink className="text-xs sm:text-sm" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Thumbnails Strip */}
          <div className="pt-2 sm:pt-3 border-t border-white/10 shrink-0">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-poppins text-[11px] sm:text-xs font-medium text-white/60">
                {lang === 'id' ? 'Pilih Sertifikat untuk Melihat Detail:' : 'Select Certificate to View:'}
              </span>
              <span className="font-mono text-[11px] sm:text-xs text-white/40">
                {safeIndex + 1} of {filteredCerts.length}
              </span>
            </div>

            <div
              data-lenis-prevent="true"
              className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-white/20"
            >
              {filteredCerts.map((cert, index) => {
                const isActive = index === safeIndex
                return (
                  <button
                    key={cert.id}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Pilih ${cert.title}`}
                    className={`group relative flex shrink-0 items-center gap-2 rounded-xl border p-1.5 transition-all text-left ${
                      isActive
                        ? 'border-yellow-400 bg-yellow-400/15 shadow-lg ring-1 ring-yellow-400/40'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="h-10 w-14 sm:h-12 sm:w-16 overflow-hidden rounded-md bg-white border border-black/20 shrink-0">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="max-w-[130px] sm:max-w-[170px] pr-1">
                      <p
                        className={`m-0 truncate font-poppins text-[10px] sm:text-[11px] font-semibold leading-tight ${
                          isActive ? 'text-yellow-300' : 'text-white/80 group-hover:text-white'
                        }`}
                      >
                        {cert.title}
                      </p>
                      <p className="m-0 truncate font-poppins text-[9px] text-white/45">
                        {cert.institution}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

