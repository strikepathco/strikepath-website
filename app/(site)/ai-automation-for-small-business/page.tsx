import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation for Small Business | StrikePath',
  description: 'Automated review requests, lead alerts & missed-call text-backs for small businesses. Stop doing manual follow-up — let AI handle it. Starting at $197/mo.',
  openGraph: {
    title: 'AI Automation for Small Business | StrikePath',
    description: 'Automated review requests, lead alerts & missed-call text-backs for small businesses. Stop doing manual follow-up — let AI handle it. Starting at $197/mo.',
  },
  twitter: {
    title: 'AI Automation for Small Business | StrikePath',
    description: 'Automated review requests, lead alerts & missed-call text-backs for small businesses. Stop doing manual follow-up — let AI handle it. Starting at $197/mo.',
  },
}

const faqs = [
  {
    q: 'Do I need special software or tools already set up?',
    a: 'No. We ask about your current tools during the onboarding form and build the automation around what you already use. Most setups require nothing extra on your end.',
  },
  {
    q: 'How fast does the automation respond?',
    a: 'Instantly — or within seconds. When a trigger fires (missed call, new form submission, completed job), the automated message goes out automatically with no delay.',
  },
  {
    q: 'Can I customize what the messages say?',
    a: 'Yes. We write the messages based on your brand voice and get your sign-off before anything goes live. You can always request changes after launch too.',
  },
  {
    q: 'What if I want more than one automation?',
    a: 'Each automation is its own plan. You can subscribe to multiple — for example, run Review Request and Missed Call Text-Back at the same time.',
  },
]

const mono: React.CSSProperties = { fontFamily: 'var(--font-mono)' }
const monoXs: React.CSSProperties = { ...mono, fontSize: '0.6rem', fontWeight: 300, letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'var(--gold)' }

export default function AIAutomationPage() {
  return (
    <main className="px-8 sm:px-14 lg:px-28 py-20 md:py-32" style={{ maxWidth: '52rem' }}>

      <span style={{ ...monoXs, display: 'block', marginBottom: '1.5rem' }}>AI Automation for Small Business</span>

      <h1
        className="font-display font-extralight text-bone"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.025em', lineHeight: 1, marginBottom: '1.75rem' }}
      >
        AI Automation for Small Business
      </h1>

      <p className="font-sans font-light" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.125rem)', lineHeight: 1.9, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        Most small business owners are doing things manually that could be happening automatically. Following up on missed calls. Remembering to ask for a Google review. Texting a lead the moment they fill out a form. These aren't hard — they're just time-consuming. AI automation does them for you, instantly, every time.
      </p>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
        Stop Losing Leads and Reviews to Manual Follow-Up
      </h2>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '1.25rem' }}>
        The reality for most small businesses is simple: if something doesn't happen automatically, it often doesn't happen at all. You mean to follow up with that missed call — and then a job runs long and you forget. You mean to ask for a Google review after a great job — and then the next day arrives and the moment is gone. These small lapses compound into real revenue lost.
      </p>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        Our AI automation workflows are built around the moments that matter most for small businesses. We set them up once, and they run on autopilot from that day forward — no dashboard to log into, no steps to remember.
      </p>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.75rem' }}>
        Three Automations That Pay for Themselves
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3.5rem' }}>
        {[
          {
            name: 'Review Request System',
            price: '$247/mo',
            href: 'https://buy.stripe.com/9B64gsec8dIz0So4bVbsc01',
            desc: 'After every completed job, your customer automatically gets a text asking for a Google review. More 5-star ratings on autopilot — no manual follow-up needed. One new review per week can meaningfully move your Google ranking. Most businesses running this see their review count double within 90 days.',
          },
          {
            name: 'New Lead Alert System',
            price: '$197/mo',
            href: 'https://buy.stripe.com/cNi8wI9VS0VNasYdMvbsc0b',
            desc: 'Every time someone fills out your contact form, you instantly get a text with their name, email, and message. No more logging into email to check for leads. You get notified in seconds so you can follow up while the lead is still warm.',
          },
          {
            name: 'Missed Call Text-Back',
            price: '$297/mo',
            href: 'https://buy.stripe.com/dRm9AMd849sj0So9wfbsc03',
            desc: 'Every missed call instantly triggers a personalized text to the caller — letting them know you saw their call and will be in touch shortly. Keeps the lead warm, prevents them from calling your competitor next, and books more appointments without lifting a finger.',
          },
        ].map(plan => (
          <div key={plan.name} style={{ background: 'var(--ink-soft)', border: '1px solid var(--line)', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              <div>
                <p style={{ ...monoXs, marginBottom: '0.5rem' }}>AI Automation</p>
                <p className="font-display font-light text-bone" style={{ fontSize: '1.2rem', letterSpacing: '-0.01em' }}>{plan.name}</p>
              </div>
              <p className="font-display" style={{ fontWeight: 200, fontSize: '1.5rem', letterSpacing: '-0.02em', color: 'var(--bone)' }}>{plan.price}</p>
            </div>
            <p className="font-sans font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'rgba(236,227,204,0.60)', marginBottom: '1.25rem' }}>{plan.desc}</p>
            <a href={plan.href} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ display: 'inline-block' }}>
              Get Started →
            </a>
          </div>
        ))}
      </div>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
        Set It Once. Let It Run.
      </h2>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '1.25rem' }}>
        Each automation is live within 48 hours of your onboarding form submission. There's no ongoing management required on your end — the system runs in the background and you only hear from it when it's bringing in reviews or notifying you of new leads.
      </p>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        We serve small businesses in all 50 states. No contracts, no setup fees. Cancel anytime.
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
        <a href="/services" className="btn-gold">
          View All Automation Plans →
        </a>
        <a href="/services" style={{ ...mono, fontSize: '0.7rem', fontWeight: 300, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bone-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          See all services
        </a>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Automation for Small Business',
          description: 'Automated workflows for small businesses — review requests, lead alerts, and missed-call text-backs. Starting at $197/mo.',
          provider: { '@type': 'Organization', name: 'StrikePath', url: 'https://www.strikepath.co' },
          areaServed: 'United States',
          offers: [
            { '@type': 'Offer', name: 'Review Request System', price: '247', priceCurrency: 'USD', priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'https://schema.org/RecurringCharge', billingDuration: 'P1M' } },
            { '@type': 'Offer', name: 'New Lead Alert System', price: '197', priceCurrency: 'USD', priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'https://schema.org/RecurringCharge', billingDuration: 'P1M' } },
            { '@type': 'Offer', name: 'Missed Call Text-Back', price: '297', priceCurrency: 'USD', priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'https://schema.org/RecurringCharge', billingDuration: 'P1M' } },
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
