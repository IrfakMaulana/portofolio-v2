import React from 'react'
import IbmSkillsBuildImg from 'assets/images/ibm-skillsbuild-web-dev.png'
import { FiCheckCircle } from 'react-icons/fi'
import { SiIbm } from 'react-icons/si'
import { useTranslation } from 'lib/translations'

export default function IbmHoverPreview() {
  const { lang } = useTranslation()

  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br from-[#0c1628] via-[#09101d] to-[#050811] p-4 text-white">
      {/* Header Info */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
            <SiIbm className="text-xl" />
          </div>
          <div>
            <h4 className="m-0 font-poppins text-xs font-bold text-white tracking-wide">
              IBM SKILLSBUILD
            </h4>
            <p className="m-0 text-[10px] text-white/50">credly.com · Official Credential</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1 rounded-full bg-blue-400/15 border border-blue-400/30 px-2 py-0.5 text-[10px] font-semibold text-blue-300">
          <FiCheckCircle className="text-[10px]" />
          <span>{lang === 'id' ? 'Terverifikasi' : 'Verified'}</span>
        </span>
      </div>

      {/* Prominent Certificate Preview */}
      <div className="relative my-auto flex h-[180px] w-full items-center justify-center">
        <div className="relative z-10 h-[155px] w-[245px] rounded-lg bg-white shadow-2xl overflow-hidden border-2 border-blue-400/40 transform transition-transform hover:scale-105">
          <img
            src={IbmSkillsBuildImg}
            alt="Web Development Fundamentals - IBM SkillsBuild"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-1 right-1 rounded-md bg-black/85 px-1.5 py-0.5 text-[9px] font-mono text-blue-300 border border-blue-400/30">
            IBM · Credly
          </div>
        </div>
      </div>

      {/* Footer Details */}
      <div className="flex flex-col gap-1 border-t border-white/10 pt-2">
        <div className="flex items-center justify-between text-[11px] font-poppins">
          <span className="font-medium text-blue-300/90">
            Web Development · Client-Server · HTML/CSS/JS
          </span>
          <span className="text-white/40">Nov 2026</span>
        </div>
        <p className="m-0 text-[10px] text-white/50 font-poppins">
          {lang === 'id'
            ? '💡 Klik untuk membuka & melihat sertifikat resmi'
            : '💡 Click to view official verified certificate'}
        </p>
      </div>
    </div>
  )
}

