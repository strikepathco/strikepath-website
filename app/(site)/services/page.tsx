import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | StrikePath',
  description:
    'AI websites, chatbots, receptionists, automation, and marketing — all at launch pricing. Lock in your rate before prices increase.',
}

type Card = {
  category: string
  name: string
  badge: string
  sale: string
  original: string
  note: string
}

const CARDS: Card[] = [
  {
    category: 'Websites',
    name: 'Basic',
    badge: '-44%',
    sale: '$449',
    original: '$799',
    note: 'One-time · Hostinger-hosted build',
  },
  {
    category: 'Websites',
    name: 'Premium',
    badge: '-48%',
    sale: '$1,299',
    original: '$2,499',
    note: 'One-time · Fully custom-coded',
  },
  {
    category: 'AI Chatbots',
    name: 'Starter',
    badge: '-45%',
    sale: '$497 setup + $79/mo',
    original: '$897 setup + $149/mo',
    note: 'Handles FAQs, captures leads',
  },
  {
    category: 'AI Chatbots',
    name: 'Pro',
    badge: '-45%',
    sale: '$997 setup + $149/mo',
    original: '$1,797 setup + $299/mo',
    note: 'Full CRM integration',
  },
  {
    category: 'AI Receptionist',
    name: 'Standard',
    badge: '-40%',
    sale: '$599 setup + $199/mo',
    original: '$999 setup + $349/mo',
    note: '~100 calls/month included',
  },
  {
    category: 'AI Receptionist',
    name: 'Unlimited',
    badge: '-44%',
    sale: '$999 setup + $349/mo',
    original: '$1,799 setup + $599/mo',
    note: 'Unlimited calls + CRM sync',
  },
  {
    category: 'AI Automation',
    name: 'Single Workflow',
    badge: '-47%',
    sale: '$797',
    original: '$1,497',
    note: 'One-time · Single targeted automation',
  },
  {
    category: 'AI Automation',
    name: 'Multi-Step',
    badge: '-43%',
    sale: '$1,997',
    original: '$3,497',
    note: 'One-time · Multi-platform workflows',
  },
  {
    category: 'AI Automation',
    name: 'Full Stack',
    badge: '-42%',
    sale: '$3,497',
    original: '$5,997',
    note: 'One-time · Complete automation overhaul',
  },
  {
    category: 'AI Marketing',
    name: 'Ad Batch',
    badge: '-40%',
    sale: '$297',
    original: '$497',
    note: 'One-time · 5–10 AI-generated ads',
  },
  {
    category: 'AI Marketing',
    name: 'Monthly Batch',
    badge: '-50%',
    sale: '$197/mo',
    original: '$397/mo',
    note: 'Fresh ads delivered every month',
  },
]

export default function ServicesPage() {
  return (
    <main className="px-8 sm:px-14 lg:px-28 py-20 md:py-32">

      {/* Header */}
      <span className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>Services</span>
      <h1
        className="font-display font-extralight text-bone"
        style={{
          fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
          letterSpacing: '-0.025em',
          lineHeight: 0.9,
          marginBottom: '1.75rem',
        }}
      >
        AI Solutions for<br />Modern Businesses
      </h1>
      <p
        className="font-sans font-light"
        style={{
          fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
          lineHeight: 1.9,
          color: 'rgba(236,227,204,0.60)',
          maxWidth: '42rem',
          marginBottom: '3rem',
        }}
      >
        Every service is available at launch pricing — rates locked for early clients.
        All projects include direct access to our team and no long-term contracts.
      </p>

      {/* ── Urgency bar — full bleed ── */}
      <div
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          background: '#b91c1c',
          padding: '0.75rem 1.5rem',
          textAlign: 'center',
          marginBottom: '3.5rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            fontWeight: 400,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#ffffff',
            margin: 0,
          }}
        >
          Limited Launch Pricing — Deal Ends Soon. Lock in your rate before prices increase.
        </p>
      </div>

      {/* ── Product card grid ── */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{ gap: '1.5rem' }}
      >
        {CARDS.map((card) => (
          <div
            key={`${card.category}-${card.name}`}
            style={{
              position: 'relative',
              background: 'var(--ink-soft)',
              border: '1px solid var(--line)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* Discount badge */}
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                background: '#dc2626',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.2rem 0.55rem',
                borderRadius: '9999px',
              }}
            >
              {card.badge}
            </div>

            {/* Category + name */}
            <div style={{ marginTop: '1.75rem' }}>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  fontWeight: 300,
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '0.625rem',
                }}
              >
                {card.category}
              </p>
              <h2
                className="font-display font-light text-bone"
                style={{
                  fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.1,
                }}
              >
                {card.name}
              </h2>
            </div>

            {/* Pricing */}
            <div style={{ paddingTop: '0.25rem' }}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 200,
                  fontSize: 'clamp(1.35rem, 2vw, 1.75rem)',
                  letterSpacing: '-0.02em',
                  color: 'var(--bone)',
                  lineHeight: 1.2,
                  marginBottom: '0.5rem',
                }}
              >
                {card.sale}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 300,
                  letterSpacing: '0.06em',
                  color: 'rgba(236,227,204,0.35)',
                  textDecoration: 'line-through',
                }}
              >
                {card.original}
              </p>
            </div>

            {/* Note */}
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                fontWeight: 300,
                letterSpacing: '0.12em',
                color: 'rgba(236,227,204,0.45)',
                lineHeight: 1.6,
                flexGrow: 1,
              }}
            >
              {card.note}
            </p>

            {/* CTA */}
            <a
              href="/contact"
              className="btn-gold"
              style={{ textDecoration: 'none', textAlign: 'center' }}
            >
              <span>Get Started</span>
            </a>
          </div>
        ))}
      </div>

    </main>
  )
}
