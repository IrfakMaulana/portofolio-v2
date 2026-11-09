import React from 'react'
import ResearchGateImg from 'assets/images/researchgate-paper.png'

export default function ResearchGateHoverPreview() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white p-3">
      <img
        src={ResearchGateImg}
        alt="Publikasi ResearchGate M. Reno Hidayat - Keamanan Informasi PLS-SEM"
        className="max-h-full max-w-full object-contain shadow-sm"
      />
    </div>
  )
}
