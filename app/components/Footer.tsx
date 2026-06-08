'use client'

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61590551584911',
    icon: (
      <path
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        fill="currentColor"
      />
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zander-geist-b0572b410/',
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" fill="currentColor" />
        <rect x="2" y="9" width="4" height="12" fill="currentColor" />
        <circle cx="4" cy="4" r="2" fill="currentColor" />
      </>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/StrikePathco',
    icon: (
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="currentColor"
      />
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/strikepathai/',
    icon: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="px-8 sm:px-14 lg:px-28"
      style={{
        paddingTop: '0',
        paddingBottom: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '0.65rem',
      }}
    >
      <div className="hairline" style={{ width: '100%', marginBottom: '0.9rem' }} />

      {/* Logo + wordmark */}
      <a
        href="/"
        aria-label="StrikePath — home"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
      >
        <img
          src="/strikepath-logo.png"
          alt=""
          aria-hidden="true"
          style={{ height: '24px', width: 'auto', display: 'block', background: 'none' }}
        />
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '1rem',
            letterSpacing: '-0.02em',
            color: 'var(--bone)',
            lineHeight: 1,
          }}
        >
          StrikePath
        </span>
      </a>

      {/* Copyright + About */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            fontWeight: 300,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--bone-dim)',
          }}
        >
          © {year} StrikePath
        </p>
        <a
          href="/about"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.55rem',
            fontWeight: 300,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--bone-dim)',
            textDecoration: 'none',
            transition: 'color 0.25s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--bone-dim)' }}
        >
          About
        </a>
      </div>

      {/* Legal links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms of Service', href: '/terms' },
          { label: 'Disclaimer', href: '/disclaimer' },
        ].map(({ label, href }) => (
          <a
            key={href}
            href={href}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              fontWeight: 300,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--bone-dim)',
              textDecoration: 'none',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--bone-dim)' }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Phone */}
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          fontWeight: 300,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
        }}
      >
        <span style={{ color: 'rgba(236,227,204,0.55)' }}>Customer Service:</span>
        <a
          href="tel:+19283560570"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            fontWeight: 300,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            textDecoration: 'none',
            transition: 'color 0.25s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--bone)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--gold)' }}
        >
          +1 (928) 356-0570
        </a>
      </p>

      {/* Social icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {SOCIALS.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold)',
              transition: 'color 0.25s ease',
              lineHeight: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--bone)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--gold)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {icon}
            </svg>
          </a>
        ))}
      </div>

      {/* Subscription management */}
      <a
        href="https://billing.stripe.com/p/login/eVq9AMgkgbArcB6aAjbsc00"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.55rem',
          fontWeight: 300,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--bone-dim)',
          textDecoration: 'none',
          transition: 'color 0.25s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)' }}
        onMouseLeave={e => { e.currentTarget.style.color = 'var(--bone-dim)' }}
      >
        Manage or cancel subscription
      </a>

    </footer>
  )
}
