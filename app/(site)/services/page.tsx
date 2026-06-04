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
  checkoutUrl?: string
}

type Category = {
  label: string
  eyebrow: string
  successPath: string
  tiers: Tier[]
}

const CATEGORIES: Category[] = [
  {
    label: 'AI Chatbots',
    eyebrow: '01',
    successPath: '/onboarding/chatbot',
    tiers: [
      { name: 'Starter',  price: '$149/mo', note: 'A 24/7 AI chatbot trained on your business. Answers common customer questions instantly, captures lead info, and never misses a visitor — even at 2am.', priceKey: 'STRIPE_CHATBOT_STARTER', checkoutUrl: 'https://buy.stripe.com/7sYaEQgkgfQHeJebEnbsc09' },
      { name: 'Pro',      price: '$249/mo', note: 'Everything in Starter plus automatically logs every lead to a live dashboard we set up for you. Track every name, email, and phone number your chatbot collects — all in one place.', priceKey: 'STRIPE_CHATBOT_PRO', checkoutUrl: 'https://buy.stripe.com/7sYbIU8ROcEv58EaAjbsc08' },
    ],
  },
  {
    label: 'AI Receptionist',
    eyebrow: '02',
    successPath: '/onboarding/receptionist',
    tiers: [
      { name: 'Standard',  price: '$349/mo', note: 'An AI phone agent that answers calls, handles FAQs, and takes messages — up to 100 calls per month. Sounds human, works around the clock, never puts anyone on hold.', priceKey: 'STRIPE_RECEPTIONIST_STANDARD', checkoutUrl: 'https://buy.stripe.com/aFacMYc40cEvgRmcIrbsc0a' },
      { name: 'Unlimited', price: '$549/mo', note: 'All the features of Standard with no call limits. Includes full CRM sync so every call is automatically logged with caller info and conversation summary.', priceKey: 'STRIPE_RECEPTIONIST_UNLIMITED', checkoutUrl: 'https://buy.stripe.com/00w9AM0libArgRm4bVbsc07' },
    ],
  },
  {
    label: 'AI Automation',
    eyebrow: '03',
    successPath: '/onboarding/automation',
    tiers: [
      { name: 'Review Request System',        price: '$247/mo', note: 'After every completed job, your customer automatically gets a text asking for a Google review. More 5-star ratings on autopilot, no manual follow-up needed.',                                               priceKey: 'STRIPE_AUTOMATION_REVIEW_REQUEST',  checkoutUrl: 'https://buy.stripe.com/9B64gsec8dIz0So4bVbsc01' },
      { name: 'New Lead Alert System',         price: '$197/mo', note: 'Every time someone fills out your contact form, you instantly get a text with their name, email, and message. Never miss a lead again.',                                                              priceKey: 'STRIPE_AUTOMATION_NEW_LEAD_ALERT',  checkoutUrl: 'https://buy.stripe.com/cNi8wI9VS0VNasYdMvbsc0b' },
      { name: 'Missed Call Text-Back',        price: '$297/mo', note: 'Every missed call instantly gets a personalized text so no lead goes cold. Turn missed opportunities into booked appointments without ever picking up the phone.',                                            priceKey: 'STRIPE_AUTOMATION_MISSED_CALL',     checkoutUrl: 'https://buy.stripe.com/dRm9AMd849sj0So9wfbsc03' },
    ],
  },
  {
    label: 'AI Marketing',
    eyebrow: '04',
    successPath: '/onboarding/marketing',
    tiers: [
      { name: 'Ad Batch',          price: '$197/mo', note: '5–10 AI-generated ads delivered every month, ready to run on any platform. Scroll-stopping visuals and copy built around your brand and target audience.', priceKey: 'STRIPE_MARKETING_ADBATCH',  checkoutUrl: 'https://buy.stripe.com/9B6cMY8RO33V0SogYHbsc06' },
      { name: 'Marketing Premium', price: '$497/mo', note: '10–15 static ads + short-form video ads + carousel posts monthly. Built from your brand photos. Full content suite ready to post across Instagram, TikTok, and Facebook.', priceKey: 'STRIPE_MARKETING_PREMIUM', checkoutUrl: 'https://buy.stripe.com/14A9AM6JG6g7dFa8sbbsc04' },
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
        Direct access to our team is included with every service.{' '}
        After checkout, you'll fill a quick 5-minute form — that's everything we need to get started.
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
                        {tier.price}{' '}
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '9px',
                          fontWeight: 400,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--gold)',
                          border: '1px solid var(--gold)',
                          borderRadius: '3px',
                          padding: '2px 6px',
                          verticalAlign: 'middle',
                          whiteSpace: 'nowrap',
                          lineHeight: 1,
                        }}>Launch Special</span>
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
                      <CheckoutButton priceId={priceId} successPath={cat.successPath} checkoutUrl={tier.checkoutUrl} />
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
