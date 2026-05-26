'use client'
import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'Services',    href: '/services' },
  { label: 'How We Work', href: '/#process' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      {/* ── Bar ── */}
      <header
        className="fixed top-0 inset-x-0 z-50 flex items-center h-16 px-8 sm:px-14 lg:px-28"
        style={{
          transition: 'background 0.4s ease, border-color 0.4s ease',
          background: scrolled ? 'rgba(15,11,6,0.95)' : 'transparent',
          borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        }}
      >
        {/* Logo + wordmark */}
        <a
          href="/"
          aria-label="StrikePath — home"
          style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexShrink: 0, textDecoration: 'none' }}
        >
          <img
            src="/strikepath-logo.png"
            alt=""
            aria-hidden="true"
            style={{ height: '48px', width: 'auto', display: 'block', background: 'none' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: '1.05rem',
              letterSpacing: '-0.02em',
              color: 'var(--bone)',
              lineHeight: 1,
            }}
          >
            StrikePath
          </span>
        </a>

        {/* Desktop links */}
        <nav
          className="hidden md:flex items-center pr-8"
          style={{ marginLeft: 'auto', gap: '2.5rem' }}
        >
          {LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                fontWeight: 300,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--bone-dim)',
                textDecoration: 'none',
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--bone)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--bone-dim)' }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden"
          style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{
              display: 'block', width: '22px', height: '1px',
              background: 'var(--bone)', transformOrigin: 'center',
              transition: 'transform 0.3s ease',
              transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1px',
              background: 'var(--bone)',
              transition: 'opacity 0.3s ease',
              opacity: open ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1px',
              background: 'var(--bone)', transformOrigin: 'center',
              transition: 'transform 0.3s ease',
              transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }} />
          </div>
        </button>
      </header>

      {/* ── Mobile overlay ── */}
      <div
        aria-hidden={!open}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 45,
          background: 'var(--ink)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '2rem 2rem 3rem',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
          transition: 'opacity 0.35s ease',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 200,
                fontSize: 'clamp(2.2rem, 9vw, 3.75rem)',
                letterSpacing: '-0.025em',
                lineHeight: 1,
                color: 'var(--bone)',
                textDecoration: 'none',
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <p
          style={{
            marginTop: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            fontWeight: 300,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--bone-dim)',
          }}
        >
          Phoenix, Arizona
        </p>
      </div>
    </>
  )
}
