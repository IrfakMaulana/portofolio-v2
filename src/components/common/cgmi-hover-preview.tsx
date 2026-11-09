import React from 'react'
import CgmiMockup from 'assets/images/cgmi-mockup.png'

export default function CgmiHoverPreview() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-white p-2">
      <img
        src={CgmiMockup}
        alt="Mockup Aplikasi CGMI Assessment App - Kab. Sumedang"
        className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
      />
    </div>
  )
}
