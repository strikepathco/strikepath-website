import type { Metadata } from 'next'
import CheckoutButton from '@/app/components/CheckoutButton'

const LANDING_PAGES: Record<string, string> = {
  'AI Chatbots':     '/ai-chatbot-for-small-business',
  'AI Receptionist': '/ai-receptionist-for-small-business',
  'AI Automation':   '/ai-automation-for-small-business',
  'AI Marketing':    '/ai-marketing-for-small-business',
}

export const metadata: Metadata = {
  title: 'AI Chatbot, Receptionist & Automation Plans | StrikePath',
  description: 'AI chatbots, receptionists, automation & marketing on simple monthly plans. No setup fees, no contracts. Delivered within 48 hours, starting at $149/mo.',
  openGraph: {
    title: 'AI Chatbot, Receptionist & Automation Plans | StrikePath',
    description: 'AI chatbots, receptionists, automation & marketing on simple monthly plans. No setup fees, no contracts. Delivered within 48 hours, starting at $149/mo.',
  },
  twitter: {
    title: 'AI Chatbot, Receptionist & Automation Plans | StrikePath',
    description: 'AI chatbots, receptionists, automation & marketing on simple monthly plans. No setup fees, no contracts. Delivered within 48 hours, starting at $149/mo.',
  },
}

type Tier = {
  name: string
  price: string
  note: string
  priceKey: string
  checkoutUrl?: string
  howItWorksPath?: string
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
      { name: 'Starter',  price: '$149/mo', note: 'A 24/7 AI chatbot trained on your business. Answers common customer questions instantly, captures lead info, and never misses a visitor — even at 2am.', priceKey: 'STRIPE_CHATBOT_STARTER', checkoutUrl: 'https://buy.stripe.com/7sYaEQgkgfQHeJebEnbsc09', howItWorksPath: '/how-it-works/chatbot-starter' },
      { name: 'Pro',      price: '$249/mo', note: 'Everything in Starter plus automatically logs every lead to a live dashboard we set up for you. Track every name, email, and phone number your chatbot collects — all in one place.', priceKey: 'STRIPE_CHATBOT_PRO', checkoutUrl: 'https://buy.stripe.com/7sYbIU8ROcEv58EaAjbsc08', howItWorksPath: '/how-it-works/chatbot-pro' },
    ],
  },
  {
    label: 'AI Receptionist',
    eyebrow: '02',
    successPath: '/onboarding/receptionist',
    tiers: [
      { name: 'Standard',  price: '$349/mo', note: 'An AI phone agent that answers calls, handles FAQs, and takes messages — up to 100 calls per month. Sounds human, works around the clock, never puts anyone on hold.', priceKey: 'STRIPE_RECEPTIONIST_STANDARD', checkoutUrl: 'https://buy.stripe.com/aFacMYc40cEvgRmcIrbsc0a', howItWorksPath: '/how-it-works/receptionist-standard' },
      { name: 'Premium', price: '$549/mo', note: 'All the features of Standard with no call limits. Includes full CRM sync so every call is automatically logged with caller info and conversation summary.', priceKey: 'STRIPE_RECEPTIONIST_UNLIMITED', checkoutUrl: 'https://buy.stripe.com/00w9AM0libArgRm4bVbsc07', howItWorksPath: '/how-it-works/receptionist-premium' },
    ],
  },
  {
    label: 'AI Automation',
    eyebrow: '03',
    successPath: '/onboarding/automation',
    tiers: [
      { name: 'Review Request System',        price: '$247/mo', note: 'After every completed job, your customer automatically gets a text asking for a Google review. More 5-star ratings on autopilot, no manual follow-up needed.',                                               priceKey: 'STRIPE_AUTOMATION_REVIEW_REQUEST',  checkoutUrl: 'https://buy.stripe.com/9B64gsec8dIz0So4bVbsc01', howItWorksPath: '/how-it-works/review-request' },
      { name: 'New Lead Alert System',         price: '$197/mo', note: 'Every time someone fills out your contact form, you instantly get a text with their name, email, and message. Never miss a lead again.',                                                              priceKey: 'STRIPE_AUTOMATION_NEW_LEAD_ALERT',  checkoutUrl: 'https://buy.stripe.com/cNi8wI9VS0VNasYdMvbsc0b', howItWorksPath: '/how-it-works/new-lead-alert' },
      { name: 'Missed Call Text-Back',        price: '$297/mo', note: 'Every missed call instantly gets a personalized text so no lead goes cold. Turn missed opportunities into booked appointments without ever picking up the phone.',                                            priceKey: 'STRIPE_AUTOMATION_MISSED_CALL',     checkoutUrl: 'https://buy.stripe.com/dRm9AMd849sj0So9wfbsc03', howItWorksPath: '/how-it-works/missed-call' },
    ],
  },
  {
    label: 'AI Marketing',
    eyebrow: '04',
    successPath: '/onboarding/marketing',
    tiers: [
      { name: 'Ad Batch',          price: '$197/mo', note: '5–10 AI-generated ads delivered every month, ready to run on any platform. Scroll-stopping visuals and copy built around your brand and target audience.', priceKey: 'STRIPE_MARKETING_ADBATCH',  checkoutUrl: 'https://buy.stripe.com/9B6cMY8RO33V0SogYHbsc06', howItWorksPath: '/how-it-works/marketing-basic' },
      { name: 'Marketing Premium', price: '$497/mo', note: '10–15 static ads + short-form video ads + carousel posts monthly. Built from your brand photos. Full content suite ready to post across Instagram, TikTok, and Facebook.', priceKey: 'STRIPE_MARKETING_PREMIUM', checkoutUrl: 'https://buy.stripe.com/14A9AM6JG6g7dFa8sbbsc04', howItWorksPath: '/how-it-works/marketing-premium' },
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
              <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
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
                {LANDING_PAGES[cat.label] && (
                  <a
                    href={LANDING_PAGES[cat.label]}
                    className="svc-learn-more"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.55rem',
                      fontWeight: 300,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'color 0.25s ease',
                    }}
                  >
                    Learn more →
                  </a>
                )}
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

                      {tier.howItWorksPath && (
                        <a
                          href={tier.howItWorksPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '9px',
                            fontWeight: 400,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'var(--gold)',
                            border: '1px solid var(--gold)',
                            borderRadius: '3px',
                            padding: '2px 6px',
                            whiteSpace: 'nowrap',
                            lineHeight: 1,
                            textDecoration: 'none',
                            display: 'inline-block',
                            alignSelf: 'flex-start',
                          }}
                        >
                          How It Works →
                        </a>
                      )}

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

      {/* ── FAQ ── */}
      <div style={{ marginTop: '6rem', paddingTop: '4rem', borderTop: '1px solid var(--line)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 300, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '1rem' }}>Common Questions</span>
        <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '2.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ maxWidth: '48rem' }}>
          {([
            { q: 'What\'s included with every plan?', a: 'Every plan includes direct access to our team, a 48-hour delivery guarantee, and no setup fees. You pay one flat monthly rate and we handle everything.' },
            { q: 'Can I switch plans or cancel anytime?', a: 'Yes — all plans are month-to-month. You can cancel anytime, no questions asked, and there are no cancellation fees or long-term commitments.' },
            { q: 'Do I need any technical knowledge to get started?', a: 'None at all. After checkout you fill out a simple 5-minute onboarding form. We take it from there and deliver your service fully set up and ready to use.' },
            { q: 'How do I get started?', a: 'Pick the plan that fits your business, click the Get Started button, and complete checkout. You\'ll be redirected to a short onboarding form — that\'s everything we need to build your service.' },
          ] as { q: string; a: string }[]).map(({ q, a }) => (
            <div key={q} style={{ borderBottom: '1px solid var(--line)', padding: '1.5rem 0' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', color: 'var(--bone)', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{q}</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.75, color: 'rgba(236,227,204,0.65)' }}>{a}</p>
            </div>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'What\'s included with every plan?', acceptedAnswer: { '@type': 'Answer', text: 'Every plan includes direct access to our team, a 48-hour delivery guarantee, and no setup fees. You pay one flat monthly rate and we handle everything.' } },
            { '@type': 'Question', name: 'Can I switch plans or cancel anytime?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — all plans are month-to-month. You can cancel anytime, no questions asked, and there are no cancellation fees or long-term commitments.' } },
            { '@type': 'Question', name: 'Do I need any technical knowledge to get started?', acceptedAnswer: { '@type': 'Answer', text: 'None at all. After checkout you fill out a simple 5-minute onboarding form. We take it from there and deliver your service fully set up and ready to use.' } },
            { '@type': 'Question', name: 'How do I get started?', acceptedAnswer: { '@type': 'Answer', text: 'Pick the plan that fits your business, click the Get Started button, and complete checkout. You\'ll be redirected to a short onboarding form — that\'s everything we need to build your service.' } },
          ],
        }) }} />
      </div>

    </main>
  )
}
