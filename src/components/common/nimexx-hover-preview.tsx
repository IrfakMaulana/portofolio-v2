import React, { useState, useEffect } from 'react'
import Nimexx1 from 'assets/images/nimexx-mockup-1.png'
import Nimexx2 from 'assets/images/nimexx-mockup-2.jpg'

const mockups = [
  { src: Nimexx1, alt: 'Mockup Aplikasi NimeXx Mobile' },
  { src: Nimexx2, alt: 'Tampilan Fitur Lengkap NimeXx Mobile' }
]

export default function NimexxHoverPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0))
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-white p-2">
      {mockups.map((item, idx) => (
        <img
          key={idx}
          src={item.src}
          alt={item.alt}
          className={`max-h-full max-w-full rounded-xl object-contain shadow-lg transition-opacity duration-500 ease-in-out ${
            currentIndex === idx ? 'opacity-100' : 'hidden opacity-0'
          }`}
        />
      ))}

      {/* Minimal indicator dots */}
      <div className="absolute bottom-2.5 right-3 flex items-center gap-1.5 rounded-full bg-black/70 px-2 py-1 backdrop-blur-sm">
        {mockups.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Lihat mockup NimeXx ${idx + 1}`}
            onClick={(e) => {
              e.stopPropagation()
              setCurrentIndex(idx)
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === idx ? 'w-4 bg-white' : 'w-1.5 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
