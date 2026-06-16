import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | StrikePath',
  description: "Terms governing your use of StrikePath's website and services.",
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

export default function TermsPage() {
  return (
    <main className="noise px-8 sm:px-14 lg:px-28 py-24 md:py-32">
      <div style={{ maxWidth: '42rem' }}>
        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>Legal</span>
        <h1
          className="font-display font-extralight text-bone"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', lineHeight: 0.95, marginBottom: '1.25rem' }}
        >
          Terms of Service
        </h1>
        <p style={monoSm}>Effective Date: May 26, 2026 &nbsp;·&nbsp; Last Updated: May 26, 2026</p>

        <div className="hairline" style={{ margin: '2rem 0' }} />

        <p style={body}>
          These Terms of Service ("Terms") govern your use of StrikePath's website and services. By purchasing or using any StrikePath service, you agree to these Terms. StrikePath is operated by Jamie Geist, Phoenix, Arizona.
        </p>

        <h2 style={sectionHeading}>Services</h2>
        <p style={body}>
          StrikePath provides AI-powered services including chatbots, automation workflows, AI receptionists, and AI marketing tools. All services are delivered on a monthly subscription basis.
        </p>

        <h2 style={sectionHeading}>Payment and Billing</h2>
        <ul style={{ ...body, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <li>All plans are billed monthly</li>
          <li>Payment is processed through Stripe</li>
          <li>Billing begins on the date of purchase</li>
          <li>Subscriptions automatically renew each month until cancelled</li>
        </ul>

        <h2 style={sectionHeading}>Cancellation</h2>
        <p style={body}>
          You may cancel your subscription at any time by contacting{' '}
          <a href="mailto:contact@strikepath.co" style={{ color: 'var(--gold)', textDecoration: 'none' }}>contact@strikepath.co</a>.
          {' '}Cancellation takes effect at the end of your current billing period. You will not be charged for the following month.
        </p>

        <h2 style={sectionHeading}>Refund Policy</h2>
        <p style={body}>
          All sales are final. We do not offer refunds for dissatisfaction with results, partial months, or unused services. The only exception is if StrikePath fails to deliver your service within 48 hours of receiving your completed onboarding form — in that case, you may request a full refund within 72 hours of purchase by emailing contact@strikepath.co. By purchasing, you acknowledge and agree to this policy.
        </p>

        <h2 style={sectionHeading}>Delivery</h2>
        <p style={body}>
          StrikePath aims to deliver all services within 48 hours of receiving your completed onboarding form. Delivery timelines depend on you submitting accurate and complete onboarding information.
        </p>

        <h2 style={sectionHeading}>Your Responsibilities</h2>
        <p style={body}>You agree to:</p>
        <ul style={{ ...body, paddingLeft: '1.25rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <li>Provide accurate business information during onboarding</li>
          <li>Use our services only for lawful business purposes</li>
          <li>Not resell or redistribute StrikePath's work without written permission</li>
        </ul>

        <h2 style={sectionHeading}>Limitation of Liability</h2>
        <p style={body}>
          StrikePath's services are provided "as is." We are not liable for any indirect, incidental, or consequential damages arising from your use of our services, including but not limited to lost revenue, missed calls, or automation errors. Our total liability to you shall not exceed the amount you paid in the most recent billing month. Clients acknowledge that AI services involve inherent unpredictability and agree that StrikePath is not liable for any harm caused by AI-generated outputs delivered to their customers.
        </p>

        <h2 style={sectionHeading}>Disclaimer of Warranties</h2>
        <p style={body}>
          We do not guarantee specific business results, lead generation outcomes, call volumes, or revenue increases from our services. StrikePath makes no warranties, express or implied, regarding merchantability, fitness for a particular purpose, or uninterrupted service. AI-generated outputs including chatbot responses, receptionist conversations, and automated messages may be inaccurate, incomplete, or inappropriate for certain situations. Clients are solely responsible for reviewing all AI-generated output before use. StrikePath does not guarantee the accuracy of any AI-generated content.
        </p>

        <h2 style={sectionHeading}>Changes to Services</h2>
        <p style={body}>
          StrikePath reserves the right to modify, update, or discontinue any service with 30 days' notice to active subscribers.
        </p>

        <h2 style={sectionHeading}>Contact</h2>
        <p style={body}>
          For questions about these Terms:{' '}
          <a href="mailto:contact@strikepath.co" style={{ color: 'var(--gold)', textDecoration: 'none' }}>contact@strikepath.co</a>
        </p>

        <h2 style={sectionHeading}>Governing Law</h2>
        <p style={body}>
          These Terms are governed by the laws of the State of Arizona. Any disputes arising from these Terms or your use of StrikePath services shall be resolved in the courts of Maricopa County, Arizona. You consent to personal jurisdiction in Arizona.
        </p>
      </div>
    </main>
  )
}
