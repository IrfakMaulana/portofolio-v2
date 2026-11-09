import React from 'react'
import JelajahMockup from 'assets/images/jelajah-nusantara-mockup.png'

export default function JelajahHoverPreview() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-white p-2">
      <img
        src={JelajahMockup}
        alt="Mockup Platform Jelajah Nusantara AI"
        className="max-h-full max-w-full rounded-xl object-contain shadow-lg"
      />
    </div>
  )
}
