import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Receptionist Standard — How It Works | StrikePath',
  description: 'See exactly how the AI Receptionist Standard works, what you need to get started, and what we handle for you.',
}

const sectionLabel: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.55rem',
  fontWeight: 300,
  letterSpacing: '0.24em',
  textTransform: 'uppercase',
  color: 'var(--gold)',
  display: 'block',
  marginBottom: '1.25rem',
}

const body: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 300,
  fontSize: '0.95rem',
  lineHeight: 1.85,
  color: 'rgba(236, 227, 204, 0.70)',
}

export default function HowItWorksReceptionistStandard() {
  return (
    <main className="px-8 sm:px-14 lg:px-28 py-20 md:py-32">
      <div style={{ maxWidth: '42rem' }}>

        <span style={sectionLabel}>How It Works</span>
        <h1
          className="font-display font-extralight text-bone"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', lineHeight: 0.95, marginBottom: '0.75rem' }}
        >
          AI Receptionist — Standard
        </h1>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 300, letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '3rem' }}>
          $349/mo
        </p>

        <div className="hairline" style={{ marginBottom: '3rem' }} />

        {/* What You Need Ready */}
        <section style={{ marginBottom: '3rem' }}>
          <span style={sectionLabel}>What You Need Ready</span>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              'What your business does in one sentence',
              'What you want the receptionist to handle (answer calls, book appointments, take messages, transfer calls)',
              'Your business hours',
              'Your booking system (Calendly, Acuity, or none)',
              'The most common reasons people call you',
              'Calls it should never handle and should always forward to you',
              'A name for your receptionist',
              'Tone preference (formal or conversational)',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', gap: '0.75rem', ...body }}>
                <span style={{ color: 'var(--gold)', flexShrink: 0 }}>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="hairline" style={{ marginBottom: '3rem' }} />

        {/* The Process */}
        <section style={{ marginBottom: '3rem' }}>
          <span style={sectionLabel}>The Process</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              'Pay → you\'ll land on a short form. Fill it out — takes under 5 minutes.',
              'We build and configure your AI receptionist within 48 hours.',
              'You get an email with a new local phone number for your business.',
              'Forward your existing business number to the new one we give you. Takes 2 minutes in your phone settings.',
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 400, color: 'var(--gold)', flexShrink: 0, minWidth: '1.2rem', paddingTop: '0.18rem' }}>{i + 1}.</span>
                <p style={body}>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="hairline" style={{ marginBottom: '3rem' }} />

        {/* You do vs We do */}
        <section style={{ marginBottom: '3rem' }}>
          <span style={sectionLabel}>What You Do vs What We Do</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <p style={body}>
              <span style={{ color: 'var(--bone)', fontWeight: 400 }}>You do:</span> fill the form, forward your existing number to the one we give you.
            </p>
            <p style={body}>
              <span style={{ color: 'var(--bone)', fontWeight: 400 }}>We do:</span> everything else.
            </p>
          </div>
        </section>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 300, letterSpacing: '0.16em', color: 'var(--gold)', marginBottom: '3rem' }}>
          Live within 48 hours of your form submission.
        </p>

        <a
          href="https://buy.stripe.com/aFacMYc40cEvgRmcIrbsc0a"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            fontWeight: 400,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#000',
            background: 'var(--gold)',
            padding: '0.75rem 1.75rem',
            textDecoration: 'none',
          }}
        >
          Get Started →
        </a>

      </div>
    </main>
  )
}
