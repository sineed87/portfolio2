'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import localFont from 'next/font/local'
import gsap from 'gsap'

const montreg = localFont({
  src: '../fonts/montreg.otf',
})

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [showNH, setShowNH] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (progress < 100) {
      const timeout = setTimeout(() => {
        setProgress(prev => prev + 1)
      }, 30)
      return () => clearTimeout(timeout)
    } else {
      // Instantly change text to NH, then zoom in
      setShowNH(true)

      // Zoom in NH
      gsap.to(textRef.current, {
        scale: 150,
        duration: 4,
        ease: 'power4.out',
        onComplete: () => {
          router.push('/')
        },
      })
    }
  }, [progress, router])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#121212] z-50 px-4">
      <div
        ref={textRef}
        className={`${montreg.className} text-6xl font-bold relative select-none whitespace-nowrap max-w-full overflow-visible inline-block origin-center`}
      >
        {/* Gray base text */}
        <span
          className="absolute top-0 left-0 text-gray-500"
          style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden' }}
        >
          {showNH ? 'NH' : 'noirhaus studio'}
        </span>

        {/* Loading bar text */}
        {!showNH && (
          <span
            className="relative text-white"
            style={{
              width: `${progress}%`,
              overflow: 'hidden',
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
          >
            noirhaus studio
          </span>
        )}

        {/* NH full white after 100% */}
        {showNH && (
          <span className="relative text-white inline-block">NH</span>
        )}
      </div>

      {/* Progress number */}
      {!showNH && (
        <div className="mt-6 text-white text-xl">{progress}%</div>
      )}
    </div>
  )
}
