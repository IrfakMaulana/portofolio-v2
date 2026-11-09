import React from 'react'
import GoogleSkillsImg from 'assets/images/google-skills-badge.png'
import { FiCheckCircle } from 'react-icons/fi'
import { SiGooglecloud } from 'react-icons/si'
import { useTranslation } from 'lib/translations'

export default function GoogleSkillsHoverPreview() {
  const { lang } = useTranslation()

  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br from-[#0c221a] via-[#091712] to-[#060e0b] p-4 text-white">
      {/* Header Info */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-500/20 text-green-400">
            <SiGooglecloud className="text-sm" />
          </div>
          <div>
            <h4 className="m-0 font-poppins text-xs font-bold text-white tracking-wide">
              GOOGLE CLOUD
            </h4>
            <p className="m-0 text-[10px] text-white/50">skills.google · Skills Boost</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1 rounded-full bg-green-400/15 border border-green-400/30 px-2 py-0.5 text-[10px] font-semibold text-green-300">
          <FiCheckCircle className="text-[10px]" />
          <span>Gold League</span>
        </span>
      </div>

      {/* Prominent Certificate Preview */}
      <div className="relative my-auto flex h-[180px] w-full items-center justify-center">
        <div className="relative z-10 h-[155px] w-[245px] rounded-lg bg-white shadow-2xl overflow-hidden border-2 border-green-400/40 transform transition-transform hover:scale-105">
          <img
            src={GoogleSkillsImg}
            alt="Profil Google Skills Boost M. Reno Hidayat - Gold League"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-1 right-1 rounded-md bg-black/85 px-1.5 py-0.5 text-[9px] font-mono text-green-300 border border-green-400/30">
            10.195 Pts · 8 Badges
          </div>
        </div>
      </div>

      {/* Footer Details */}
      <div className="flex flex-col gap-1 border-t border-white/10 pt-2">
        <div className="flex items-center justify-between text-[11px] font-poppins">
          <span className="font-medium text-green-300/90">
            Cloud Computing · Infrastructure · Networking
          </span>
          <span className="text-white/40">Juni 2025</span>
        </div>
        <p className="m-0 text-[10px] text-white/50 font-poppins">
          {lang === 'id'
            ? '💡 Klik untuk membuka & melihat kredensial profil'
            : '💡 Click to view official credentials profile'}
        </p>
      </div>
    </div>
  )
}
