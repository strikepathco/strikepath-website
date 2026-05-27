import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | StrikePath',
  description: 'How StrikePath collects, uses, and protects your information.',
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

export default function PrivacyPage() {
  return (
    <main className="noise px-8 sm:px-14 lg:px-28 py-24 md:py-32">
      <div style={{ maxWidth: '42rem' }}>
        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>Legal</span>
        <h1
          className="font-display font-extralight text-bone"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', lineHeight: 0.95, marginBottom: '1.25rem' }}
        >
          Privacy Policy
        </h1>
        <p style={monoSm}>Effective Date: May 26, 2026 &nbsp;·&nbsp; Last Updated: May 26, 2026</p>

        <div className="hairline" style={{ margin: '2rem 0' }} />

        <p style={body}>
          StrikePath ("we," "us," or "our") is operated by Jamie Geist, located in Phoenix, Arizona. This Privacy Policy explains how we collect, use, and protect your information when you visit strikepath.co or purchase our services.
        </p>

        <h2 style={sectionHeading}>Information We Collect</h2>
        <p style={body}>We collect information you provide directly to us, including:</p>
        <ul style={{ ...body, paddingLeft: '1.25rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <li>Name and email address when you contact us or submit a form</li>
          <li>Business information you share during onboarding</li>
          <li>Payment information processed securely through Stripe (we never store your card details)</li>
        </ul>
        <p style={{ ...body, marginTop: '0.75rem' }}>
          We also automatically collect basic usage data including your IP address, browser type, and pages visited through standard web analytics.
        </p>

        <h2 style={sectionHeading}>How We Use Your Information</h2>
        <p style={body}>We use your information to:</p>
        <ul style={{ ...body, paddingLeft: '1.25rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <li>Deliver the services you purchased</li>
          <li>Send onboarding forms and service updates</li>
          <li>Respond to your questions and support requests</li>
          <li>Improve our website and services</li>
        </ul>
        <p style={{ ...body, marginTop: '0.75rem' }}>We do not sell your information to third parties. Ever.</p>

        <h2 style={sectionHeading}>Data Storage</h2>
        <p style={body}>
          Contact form submissions and lead information are stored in Google Sheets accessible only to StrikePath. We do not operate a customer database beyond this.
        </p>

        <h2 style={sectionHeading}>Third-Party Services</h2>
        <p style={body}>We use the following third-party services that may process your data:</p>
        <ul style={{ ...body, paddingLeft: '1.25rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <li>Stripe (payment processing) — stripe.com/privacy</li>
          <li>Vercel (website hosting) — vercel.com/legal/privacy-policy</li>
          <li>Anthropic (AI chatbot) — anthropic.com/privacy</li>
          <li>Tally (onboarding forms) — tally.so/privacy</li>
        </ul>

        <h2 style={sectionHeading}>Cookies</h2>
        <p style={body}>
          We use basic cookies necessary for the site to function. We do not use advertising or tracking cookies.
        </p>

        <h2 style={sectionHeading}>Your Rights</h2>
        <p style={body}>
          You can request to view, update, or delete your personal information at any time by emailing{' '}
          <a href="mailto:contact@strikepath.co" style={{ color: 'var(--gold)', textDecoration: 'none' }}>contact@strikepath.co</a>.
        </p>

        <h2 style={sectionHeading}>Contact</h2>
        <p style={body}>
          For privacy questions:{' '}
          <a href="mailto:contact@strikepath.co" style={{ color: 'var(--gold)', textDecoration: 'none' }}>contact@strikepath.co</a>
        </p>
      </div>
    </main>
  )
}
