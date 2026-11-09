import React, { useState, useEffect } from 'react'
import PohaciMockup from 'assets/images/dapoer-pohaci-mockup.jpg'
import Pohaci1 from 'assets/images/dapoer-pohaci-1.jpg'
import Pohaci2 from 'assets/images/dapoer-pohaci-2.jpg'

const mediaItems = [
  { src: PohaciMockup, alt: 'Mockup Website Katalog Dapoer Sari Pohaci' },
  { src: Pohaci1, alt: 'Dokumentasi Lapangan Sosialisasi Dapoer Pohaci' },
  { src: Pohaci2, alt: 'Dokumentasi Tim KKN Dapoer Pohaci' }
]

export default function DapoerPohaciHoverPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-white p-2">
      {mediaItems.map((item, idx) => (
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
        {mediaItems.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Lihat media ${idx + 1}`}
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
