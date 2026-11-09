import React from 'react'
import AseanAiCareerImg from 'assets/images/asean-ai-career-readiness.jpeg'
import AseanDigitalSafetyImg from 'assets/images/asean-digital-safety-awareness.jpeg'
import { FiAward, FiCheckCircle } from 'react-icons/fi'
import { useTranslation } from 'lib/translations'

export default function AseanHoverPreview() {
  const { lang } = useTranslation()

  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br from-[#181820] via-[#101014] to-[#0a0a0c] p-4 text-white">
      {/* Header Info */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-yellow-400/20 text-yellow-300">
            <FiAward className="text-sm" />
          </div>
          <div>
            <h4 className="m-0 font-poppins text-xs font-bold text-white tracking-wide">
              ASEAN FOUNDATION
            </h4>
            <p className="m-0 text-[10px] text-white/50">ada.aseanfoundation.org</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 px-2 py-0.5 text-[10px] font-semibold text-yellow-300">
          <FiCheckCircle className="text-[10px]" />
          <span>7 {lang === 'id' ? 'Sertifikat' : 'Certificates'}</span>
        </span>
      </div>

      {/* Overlapping Certificate Previews */}
      <div className="relative my-auto flex h-[180px] w-full items-center justify-center">
        {/* Background tilted card */}
        <div className="absolute h-[140px] w-[220px] -rotate-6 rounded-lg bg-white shadow-xl overflow-hidden opacity-50 transform -translate-x-12 translate-y-2 border border-black/20">
          <img
            src={AseanDigitalSafetyImg}
            alt="Digital Safety Awareness"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Foreground prominent card */}
        <div className="relative z-10 h-[155px] w-[245px] rotate-2 rounded-lg bg-white shadow-2xl overflow-hidden border-2 border-yellow-400/40 transform translate-x-4">
          <img
            src={AseanAiCareerImg}
            alt="AI Career Readiness"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-1 right-1 rounded-md bg-black/80 px-1.5 py-0.5 text-[9px] font-mono text-white/90">
            1 of 7
          </div>
        </div>
      </div>

      {/* Footer Details */}
      <div className="flex flex-col gap-1 border-t border-white/10 pt-2">
        <div className="flex items-center justify-between text-[11px] font-poppins">
          <span className="font-medium text-yellow-300/90">
            Cybersecurity · AI · Digital Literacy
          </span>
          <span className="text-white/40">Okt 2026</span>
        </div>
        <p className="m-0 text-[10px] text-white/50 font-poppins">
          {lang === 'id'
            ? '💡 Klik untuk melihat & membuka seluruh 7 sertifikat lengkap'
            : '💡 Click to browse & open all 7 full certificates'}
        </p>
      </div>
    </div>
  )
}

