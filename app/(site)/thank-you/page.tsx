import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You | StrikePath',
  description: 'Your purchase is confirmed. Our team will reach out within 24 hours.',
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
            marginBottom: '3rem',
          }}
        >
          Our team will reach out within 24 hours to get everything set up for you.
        </p>

      </div>
    </main>
  )
}
