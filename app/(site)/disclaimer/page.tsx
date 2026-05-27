import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | StrikePath',
  description: 'Disclaimers regarding StrikePath's AI-powered services and results.',
  robots: { index: false, follow: false },
}

const monoSm: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.62rem',
  fontWeight: 300,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--bone-dim)',
}

const sectionHeading: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 300,
  fontSize: '1rem',
  letterSpacing: '0.04em',
  color: 'var(--gold)',
  textTransform: 'uppercase',
  marginBottom: '0.75rem',
  marginTop: '2.5rem',
}

const body: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 300,
  fontSize: '0.95rem',
  lineHeight: 1.85,
  color: 'var(--bone-dim)',
}

export default function DisclaimerPage() {
  return (
    <main className="noise px-8 sm:px-14 lg:px-28 py-24 md:py-32">
      <div style={{ maxWidth: '42rem' }}>
        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>Legal</span>
        <h1
          className="font-display font-extralight text-bone"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', lineHeight: 0.95, marginBottom: '1.25rem' }}
        >
          Disclaimer
        </h1>
        <p style={monoSm}>Last Updated: May 26, 2026</p>

        <div className="hairline" style={{ margin: '2rem 0' }} />

        <h2 style={{ ...sectionHeading, marginTop: 0 }}>General Disclaimer</h2>
        <p style={body}>
          The services provided by StrikePath (operated by Jamie Geist, Phoenix, AZ) are tools designed to assist your business operations. They are not a substitute for professional legal, financial, medical, or business advice.
        </p>

        <h2 style={sectionHeading}>AI Service Disclaimer</h2>
        <p style={body}>
          StrikePath's AI-powered services — including chatbots, AI receptionists, and automation workflows — are built on third-party AI platforms. While we configure and deliver these tools, we cannot guarantee:
        </p>
        <ul style={{ ...body, paddingLeft: '1.25rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <li>That AI responses will always be accurate, complete, or appropriate</li>
          <li>That automation workflows will be error-free in all circumstances</li>
          <li>Uninterrupted service availability (subject to third-party platform uptime)</li>
        </ul>
        <p style={{ ...body, marginTop: '0.75rem' }}>
          You are responsible for reviewing AI-generated content before using it publicly and for monitoring automated workflows within your business.
        </p>

        <h2 style={sectionHeading}>Results Disclaimer</h2>
        <p style={body}>
          Any mentions of time savings, lead capture, or business improvement are illustrative examples only. Individual results will vary based on your industry, business size, existing systems, and other factors outside StrikePath's control. StrikePath makes no guarantee of specific business outcomes.
        </p>

        <h2 style={sectionHeading}>Third-Party Platforms</h2>
        <p style={body}>
          Our services are built on platforms including Anthropic, Vapi, Make.com, and Manus AI. StrikePath is not responsible for outages, changes, or failures of these third-party platforms.
        </p>

        <h2 style={sectionHeading}>Contact</h2>
        <p style={body}>
          Questions about this disclaimer:{' '}
          <a href="mailto:contact@strikepath.co" style={{ color: 'var(--gold)', textDecoration: 'none' }}>contact@strikepath.co</a>
        </p>
      </div>
    </main>
  )
}
