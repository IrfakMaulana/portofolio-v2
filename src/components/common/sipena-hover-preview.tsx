import React from 'react'
import SipenaLogo from 'assets/images/sipena-logo.png'

export default function SipenaHoverPreview() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white p-6">
      <img
        src={SipenaLogo}
        alt="Logo SiPENA FEB"
        className="max-h-full max-w-full object-contain"
      />
    </div>
  )
}
