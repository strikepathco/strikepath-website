'use client'
import { useEffect, useRef } from 'react'

export default function HeroVideo({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    // Pause immediately — scroll drives currentTime, not playback
    const onLoaded = () => {
      video.pause()
      sync()
    }
    video.addEventListener('loadedmetadata', onLoaded)
    if (video.readyState >= 1) onLoaded()

    let ticking = false

    function sync() {
      if (!section || !video || !video.duration) return
      const scrolled = -section.getBoundingClientRect().top
      const scrollable = section.offsetHeight - window.innerHeight
      const progress = scrollable > 0 ? scrolled / scrollable : 0
      const clampedProgress = Math.max(0, Math.min(1, progress))
      video.currentTime = Math.min(clampedProgress * video.duration, video.duration)
    }

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        sync()
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      video.removeEventListener('loadedmetadata', onLoaded)
    }
  }, [])

  return (
    <section ref={sectionRef} style={{ height: '200vh' }}>
      {/* Sticky container locks to viewport while user scrolls the 200vh section */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <video
          ref={videoRef}
          src="/strikepath-hero.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay — heavier at bottom where text lives */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(15,11,6,0.18) 0%, rgba(15,11,6,0.55) 55%, rgba(15,11,6,0.85) 100%)',
          }}
        />

        {/* Hero content — full height, flex aligns to bottom */}
        <div className="relative z-10 h-full flex flex-col justify-end">
          {children}
        </div>
      </div>
    </section>
  )
}
