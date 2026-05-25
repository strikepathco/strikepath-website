import type { Metadata } from 'next'
import ContactForm from '@/app/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | StrikePath',
  description:
    'Start your project with StrikePath. Tell us what you need and we will respond within 24 hours with a clear path forward.',
}

export default function ContactPage() {
  return (
    <main className="px-8 sm:px-14 lg:px-28 py-24 md:py-32">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left: headline */}
        <div>
          <span className="eyebrow mb-5">Contact</span>
          <h1
            className="font-display font-extralight text-bone"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
              letterSpacing: '-0.025em',
              lineHeight: 0.9,
              marginTop: '1.25rem',
            }}
          >
            Start your<br />project.
          </h1>
          <p
            className="font-sans font-light text-bone-dim"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
              lineHeight: 1.9,
              marginTop: '2rem',
              maxWidth: '26rem',
            }}
          >
            Tell us what you need. We respond within 24 hours with a clear path
            forward—no obligation, no sales pressure.
          </p>

          <div className="hairline" style={{ margin: '2.5rem 0', maxWidth: '200px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Fixed-price packages — no hourly billing',
              'Response within 24 hours',
              'No long-term contracts',
            ].map((point) => (
              <p
                key={point}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  fontWeight: 300,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--bone-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <span style={{ color: 'var(--gold)', flexShrink: 0 }}>—</span>
                {point}
              </p>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <ContactForm />

      </div>

    </main>
  )
}
