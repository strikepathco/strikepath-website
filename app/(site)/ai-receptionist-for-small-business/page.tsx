import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Receptionist for Small Business | StrikePath',
  description: 'An AI receptionist that answers every call, handles FAQs, and takes messages 24/7. No missed calls, no hold music. Starting at $349/mo.',
  openGraph: {
    title: 'AI Receptionist for Small Business | StrikePath',
    description: 'An AI receptionist that answers every call, handles FAQs, and takes messages 24/7. No missed calls, no hold music. Starting at $349/mo.',
  },
  twitter: {
    title: 'AI Receptionist for Small Business | StrikePath',
    description: 'An AI receptionist that answers every call, handles FAQs, and takes messages 24/7. No missed calls, no hold music. Starting at $349/mo.',
  },
}

const faqs = [
  {
    q: 'Does it sound like a real person?',
    a: 'Yes. The AI receptionist uses natural, conversational speech — not a robotic voice. Most callers won\'t know they\'re speaking with an AI unless you tell them.',
  },
  {
    q: 'What if someone wants to speak with a real person?',
    a: 'The receptionist can transfer the call or take a message for your team to follow up. You configure exactly how you want those situations handled.',
  },
  {
    q: 'How does the setup work?',
    a: 'After checkout, you fill out a short onboarding form with your business info, FAQs, and call handling preferences. We build and configure your AI receptionist within 48 hours.',
  },
  {
    q: 'Can it handle appointment booking?',
    a: 'The receptionist collects the caller\'s name, number, and reason for calling, then delivers that info to you instantly so your team can follow up and confirm. Scheduling system integration is available as a custom add-on — ask us about it.',
  },
]

const mono: React.CSSProperties = { fontFamily: 'var(--font-mono)' }
const monoXs: React.CSSProperties = { ...mono, fontSize: '0.6rem', fontWeight: 300, letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'var(--gold)' }

export default function AIReceptionistPage() {
  return (
    <main className="px-8 sm:px-14 lg:px-28 py-20 md:py-32" style={{ maxWidth: '52rem' }}>

      <span style={{ ...monoXs, display: 'block', marginBottom: '1.5rem' }}>AI Receptionist for Small Business</span>

      <h1
        className="font-display font-extralight text-bone"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.025em', lineHeight: 1, marginBottom: '1.75rem' }}
      >
        AI Receptionist for Small Business
      </h1>

      <p className="font-sans font-light" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.125rem)', lineHeight: 1.9, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        Every missed call is a missed customer. For a small business, that adds up fast — especially when you're on a job, with a customer, or it's 7pm on a Friday. An AI receptionist answers every single call, handles questions, and takes messages so nothing slips through the cracks.
      </p>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
        Your Phone — Answered. Every Time.
      </h2>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '1.25rem' }}>
        Hiring a human receptionist costs $35,000–$50,000 per year — and they can only handle one call at a time, only during business hours. Your AI receptionist costs a flat monthly rate, works 24/7, never calls in sick, and can handle multiple calls simultaneously without putting anyone on hold.
      </p>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        We train the receptionist on your specific business — your services, service area, hours, FAQs, and exactly how you want calls handled. When someone calls, they get a fast, professional, on-brand response every time.
      </p>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
        What the AI Receptionist Handles
      </h2>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3.5rem' }}>
        {[
          'Answers inbound calls with a professional, natural-sounding voice',
          'Responds to FAQs about your services, pricing, and availability',
          'Takes detailed messages and delivers them to you instantly',
          'Collects caller name, number, and reason for calling',
          'Handles calls 24/7 — nights, weekends, and holidays',
          'Transfers calls or escalates to a human when needed',
        ].map(item => (
          <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--gold)', lineHeight: 1.6, flexShrink: 0 }}>→</span>
            <span className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(236,227,204,0.70)' }}>{item}</span>
          </li>
        ))}
      </ul>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.75rem' }}>
        Plans Built for Small Business
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
        {[
          {
            name: 'Standard',
            price: '$349/mo',
            desc: 'An AI phone agent that answers calls, handles FAQs, and takes messages — up to 100 calls per month. Sounds human, works around the clock, never puts anyone on hold.',
            href: 'https://buy.stripe.com/aFacMYc40cEvgRmcIrbsc0a',
          },
          {
            name: 'Premium',
            price: '$549/mo',
            desc: 'All the features of Standard with no call limits. Includes full CRM sync so every call is automatically logged with caller info and a conversation summary.',
            href: 'https://buy.stripe.com/00w9AM0libArgRm4bVbsc07',
          },
        ].map(plan => (
          <div key={plan.name} style={{ background: 'var(--ink-soft)', border: '1px solid var(--line)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ ...monoXs }}>AI Receptionist</p>
            <p className="font-display font-light text-bone" style={{ fontSize: '1.25rem', letterSpacing: '-0.01em' }}>{plan.name}</p>
            <p className="font-display" style={{ fontWeight: 200, fontSize: '1.75rem', letterSpacing: '-0.02em', color: 'var(--bone)' }}>{plan.price}</p>
            <p className="font-sans font-light" style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(236,227,204,0.55)', flexGrow: 1 }}>{plan.desc}</p>
            <a href={plan.href} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ textAlign: 'center', display: 'block', marginTop: '0.5rem' }}>
              Get Started →
            </a>
          </div>
        ))}
      </div>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
        Who This Is Built For
      </h2>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '1.25rem' }}>
        The AI receptionist is a perfect fit for any small business that relies on phone calls — home service companies, contractors, salons, dental offices, law firms, real estate agents, and more. If you've ever missed a call while on a job, lost a lead because you couldn't get to the phone, or spent money on voicemail that nobody actually uses, this solves all of that.
      </p>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        We serve businesses in all 50 states and have the same setup ready within 48 hours regardless of where you're located.
      </p>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
        Frequently Asked Questions
      </h2>
      <div style={{ marginBottom: '3.5rem' }}>
        {faqs.map(({ q, a }) => (
          <div key={q} style={{ borderBottom: '1px solid var(--line)', padding: '1.5rem 0' }}>
            <p className="font-display font-light text-bone" style={{ fontSize: '1.05rem', letterSpacing: '-0.01em', marginBottom: '0.5rem' }}>{q}</p>
            <p className="font-sans font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'rgba(236,227,204,0.65)' }}>{a}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="https://buy.stripe.com/aFacMYc40cEvgRmcIrbsc0a" target="_blank" rel="noopener noreferrer" className="btn-gold">
          Start with Standard — $349/mo →
        </a>
        <a href="/services" style={{ ...mono, fontSize: '0.7rem', fontWeight: 300, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bone-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          View all services
        </a>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Receptionist for Small Business',
          description: 'A 24/7 AI phone receptionist that answers calls, handles FAQs, and takes messages for small businesses. Starting at $349/mo.',
          provider: { '@type': 'Organization', name: 'StrikePath', url: 'https://www.strikepath.co' },
          areaServed: 'United States',
          offers: [
            { '@type': 'Offer', name: 'Standard', price: '349', priceCurrency: 'USD', priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'https://schema.org/RecurringCharge', billingDuration: 'P1M' } },
            { '@type': 'Offer', name: 'Premium', price: '549', priceCurrency: 'USD', priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'https://schema.org/RecurringCharge', billingDuration: 'P1M' } },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
        },
      ]) }} />

    </main>
  )
}
