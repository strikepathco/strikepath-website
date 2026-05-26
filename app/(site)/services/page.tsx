import type { Metadata } from 'next'
import CheckoutButton from '@/app/components/CheckoutButton'

export const metadata: Metadata = {
  title: 'Services | StrikePath',
  description:
    'AI chatbots, receptionists, automation, and marketing — straightforward monthly plans, no setup fees, no long-term contracts.',
}

type Tier = {
  name: string
  price: string
  note: string
  priceKey: string
}

type Category = {
  label: string
  eyebrow: string
  tiers: Tier[]
}

const CATEGORIES: Category[] = [
  {
    label: 'AI Chatbots',
    eyebrow: '01',
    tiers: [
      { name: 'Starter',  price: '$149/mo', note: 'Handles FAQs, captures leads',          priceKey: 'STRIPE_CHATBOT_STARTER'           },
      { name: 'Pro',      price: '$249/mo', note: 'CRM integration + advanced flows',       priceKey: 'STRIPE_CHATBOT_PRO'               },
    ],
  },
  {
    label: 'AI Receptionist',
    eyebrow: '02',
    tiers: [
      { name: 'Standard',  price: '$349/mo', note: '~100 calls/month included',           priceKey: 'STRIPE_RECEPTIONIST_STANDARD'     },
      { name: 'Unlimited', price: '$549/mo', note: 'Unlimited calls + CRM sync',          priceKey: 'STRIPE_RECEPTIONIST_UNLIMITED'    },
    ],
  },
  {
    label: 'AI Automation',
    eyebrow: '03',
    tiers: [
      { name: 'Single Workflow', price: '$247/mo', note: 'Single targeted automation',    priceKey: 'STRIPE_AUTOMATION_SINGLE'         },
      { name: 'Multi-Step',      price: '$397/mo', note: 'Multi-platform workflows',      priceKey: 'STRIPE_AUTOMATION_MULTI'          },
      { name: 'Full Stack',      price: '$697/mo', note: 'Complete automation overhaul',  priceKey: 'STRIPE_AUTOMATION_FULLSTACK'      },
    ],
  },
  {
    label: 'AI Marketing',
    eyebrow: '04',
    tiers: [
      { name: 'Ad Batch',      price: '$197/mo', note: '5–10 AI-generated ads monthly',   priceKey: 'STRIPE_MARKETING_ADBATCH'         },
      { name: 'Monthly Batch', price: '$247/mo', note: 'Fresh ads delivered every month',  priceKey: 'STRIPE_MARKETING_MONTHLY'         },
    ],
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
          marginBottom: '5rem',
        }}
      >
        Every plan is billed monthly with no setup fees and no long-term contracts.
        Direct access to our team is included with every service.
      </p>

      {/* Category sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
        {CATEGORIES.map((cat) => {
          const cols = cat.tiers.length === 3 ? 3 : 2
          return (
            <div key={cat.label}>

              {/* Category header */}
              <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--line)' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    fontWeight: 300,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginRight: '1rem',
                  }}
                >
                  {cat.eyebrow}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                    letterSpacing: '-0.015em',
                    color: 'var(--bone)',
                  }}
                >
                  {cat.label}
                </span>
              </div>

              {/* Tier cards */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2${cols === 3 ? ' lg:grid-cols-3' : ''}`}
                style={{ gap: '1.5rem' }}
              >
                {cat.tiers.map((tier) => {
                  const priceId = process.env[tier.priceKey] ?? ''
                  return (
                    <div
                      key={tier.name}
                      style={{
                        background: 'var(--ink-soft)',
                        border: '1px solid var(--line)',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.25rem',
                      }}
                    >
                      {/* Tier name */}
                      <div>
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
                          {cat.label}
                        </p>
                        <h2
                          className="font-display font-light text-bone"
                          style={{
                            fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                            letterSpacing: '-0.01em',
                            lineHeight: 1.1,
                          }}
                        >
                          {tier.name}
                        </h2>
                      </div>

                      {/* Price */}
                      <p
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 200,
                          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                          letterSpacing: '-0.02em',
                          color: 'var(--bone)',
                          lineHeight: 1.1,
                        }}
                      >
                        {tier.price}
                      </p>

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
                        {tier.note}
                      </p>

                      {/* CTA */}
                      <CheckoutButton priceId={priceId} />
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

    </main>
  )
}
