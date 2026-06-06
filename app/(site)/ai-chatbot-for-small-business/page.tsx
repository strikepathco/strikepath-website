import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Chatbot for Small Business | StrikePath',
  description: 'A 24/7 AI chatbot trained on your business — answers questions, captures leads, and never sleeps. Starting at $149/mo, live within 48 hours.',
  openGraph: {
    title: 'AI Chatbot for Small Business | StrikePath',
    description: 'A 24/7 AI chatbot trained on your business — answers questions, captures leads, and never sleeps. Starting at $149/mo, live within 48 hours.',
  },
  twitter: {
    title: 'AI Chatbot for Small Business | StrikePath',
    description: 'A 24/7 AI chatbot trained on your business — answers questions, captures leads, and never sleeps. Starting at $149/mo, live within 48 hours.',
  },
}

const faqs = [
  {
    q: 'How long does setup take?',
    a: 'Your AI chatbot is live within 48 hours of you completing the onboarding form. Fill it out after checkout and we handle everything from there.',
  },
  {
    q: 'Do I need to know how to code?',
    a: 'Not at all. We build, train, and install the chatbot on your website for you. You just tell us about your business and we take care of the rest.',
  },
  {
    q: 'What happens when someone asks something the chatbot doesn\'t know?',
    a: 'The chatbot is trained to handle that gracefully — it can collect the visitor\'s contact info so you can follow up, or direct them to call or email you.',
  },
  {
    q: 'Can I cancel if it\'s not a good fit?',
    a: 'Yes. All plans are month-to-month with no contracts. Cancel anytime, no questions asked.',
  },
]

const mono: React.CSSProperties = { fontFamily: 'var(--font-mono)' }
const monoXs: React.CSSProperties = { ...mono, fontSize: '0.6rem', fontWeight: 300, letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'var(--gold)' }

export default function AIChatbotPage() {
  return (
    <main className="px-8 sm:px-14 lg:px-28 py-20 md:py-32" style={{ maxWidth: '52rem' }}>

      <span style={{ ...monoXs, display: 'block', marginBottom: '1.5rem' }}>AI Chatbot for Small Business</span>

      <h1
        className="font-display font-extralight text-bone"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.025em', lineHeight: 1, marginBottom: '1.75rem' }}
      >
        AI Chatbot for Small Business
      </h1>

      <p className="font-sans font-light" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.125rem)', lineHeight: 1.9, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        Every visitor who lands on your website is a potential customer. But most of them leave without ever reaching out — because they had a quick question and nobody was there to answer it. An AI chatbot solves that problem around the clock, without you having to hire anyone.
      </p>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
        Answer Every Question. Capture Every Lead. 24/7.
      </h2>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '2rem' }}>
        Small business owners wear a lot of hats. Between managing jobs, serving customers, and running the day-to-day, answering repetitive website questions is the last thing you should be doing manually. Your AI chatbot learns your business — your services, hours, pricing, FAQs — and handles those conversations automatically, even at 2am on a Sunday.
      </p>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        When someone lands on your site and types "Do you serve [city]?" or "How much does this cost?" — your chatbot answers instantly. When they're ready to take the next step, it collects their name, email, and phone number so you can follow up. You wake up in the morning with leads in your inbox that would have otherwise been lost.
      </p>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
        What Your AI Chatbot Can Do
      </h2>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3.5rem' }}>
        {[
          'Answer common customer questions instantly — no wait, no hold music',
          'Capture lead contact info (name, email, phone) automatically',
          'Explain your services, pricing, and service area',
          'Handle multiple conversations simultaneously — no limit on volume',
          'Work on any website: WordPress, Wix, Squarespace, Webflow, custom builds',
          'Respond in seconds, day or night, including weekends and holidays',
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
            name: 'Starter',
            price: '$149/mo',
            desc: 'A 24/7 AI chatbot trained on your business. Answers common customer questions instantly, captures lead info, and never misses a visitor — even at 2am.',
            href: 'https://buy.stripe.com/7sYaEQgkgfQHeJebEnbsc09',
          },
          {
            name: 'Pro',
            price: '$249/mo',
            desc: 'Everything in Starter plus automatic lead logging to a live dashboard we set up for you. Track every name, email, and phone number your chatbot collects — all in one place.',
            href: 'https://buy.stripe.com/7sYbIU8ROcEv58EaAjbsc08',
          },
        ].map(plan => (
          <div key={plan.name} style={{ background: 'var(--ink-soft)', border: '1px solid var(--line)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ ...monoXs }}>AI Chatbot</p>
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
        Why Small Business Owners Choose StrikePath
      </h2>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '1.25rem' }}>
        Traditional agencies charge thousands of dollars in setup fees just to get a chatbot live — and then charge you again every time you want to update it. StrikePath is different. We built our process around AI so we can deliver faster, at a fraction of the cost, with no long-term commitment required.
      </p>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        We work with small business owners across all 50 states — plumbers, landscapers, salons, home service companies, dental offices, real estate agents, and more. If you have a website and you're tired of missing leads, an AI chatbot is one of the highest-return tools you can add to your business today.
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
        <a href="https://buy.stripe.com/7sYaEQgkgfQHeJebEnbsc09" target="_blank" rel="noopener noreferrer" className="btn-gold">
          Start with Starter — $149/mo →
        </a>
        <a href="/services" style={{ ...mono, fontSize: '0.7rem', fontWeight: 300, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bone-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          View all services
        </a>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Chatbot for Small Business',
          description: 'A 24/7 AI chatbot trained on your business that answers questions, captures leads, and works around the clock. Starting at $149/mo.',
          provider: { '@type': 'Organization', name: 'StrikePath', url: 'https://www.strikepath.co' },
          areaServed: 'United States',
          offers: [
            { '@type': 'Offer', name: 'Starter', price: '149', priceCurrency: 'USD', priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'https://schema.org/RecurringCharge', billingDuration: 'P1M' } },
            { '@type': 'Offer', name: 'Pro', price: '249', priceCurrency: 'USD', priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'https://schema.org/RecurringCharge', billingDuration: 'P1M' } },
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
