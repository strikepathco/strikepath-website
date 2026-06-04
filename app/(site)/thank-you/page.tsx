import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You | StrikePath',
  description: 'Your purchase is confirmed. Our team will reach out within 48 hours.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <main className="px-8 sm:px-14 lg:px-28 py-24 md:py-32">
      <div style={{ maxWidth: '36rem' }}>

        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>
          Purchase confirmed
        </span>

        <h1
          className="font-display font-extralight text-bone"
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
            letterSpacing: '-0.025em',
            lineHeight: 0.9,
            marginBottom: '2rem',
          }}
        >
          What happens<br />next?
        </h1>

        <div className="hairline" style={{ marginBottom: '2rem', maxWidth: '200px' }} />

        <p
          className="font-sans font-light text-bone-dim"
          style={{
            fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
            lineHeight: 1.9,
            marginBottom: '2rem',
          }}
        >
          Our team will reach out within 48 hours to get everything set up for you.
        </p>

        <a
          href="https://billing.stripe.com/p/login/eVq9AMgkgbArcB6aAjbsc00"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            fontWeight: 300,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--bone-dim)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--line)',
            paddingBottom: '0.1em',
            transition: 'color 0.2s ease, border-color 0.2s ease',
          }}
        >
          Manage or cancel subscription
        </a>

      </div>
    </main>
  )
}
