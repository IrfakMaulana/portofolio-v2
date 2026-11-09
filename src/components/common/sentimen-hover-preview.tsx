import React from 'react'
import SentimenMockup from 'assets/images/sentimen-ijazah-mockup.jpg'

export default function SentimenHoverPreview() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-white p-2">
      <img
        src={SentimenMockup}
        alt="Mockup Evaluasi Model SVM Analisis Sentimen"
        className="max-h-full max-w-full rounded-xl object-contain shadow-lg"
      />
    </div>
  )
}
