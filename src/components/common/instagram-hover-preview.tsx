import React from 'react'
import KknIgImg from 'assets/images/kkn-ig.png'

export default function InstagramHoverPreview() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-zinc-950 p-2">
      <img
        src={KknIgImg}
        alt="Dokumentasi & Publikasi Instagram @kkndesaserang2026.archive"
        className="max-h-full max-w-full rounded-xl object-contain shadow-lg"
      />
    </div>
  )
}
