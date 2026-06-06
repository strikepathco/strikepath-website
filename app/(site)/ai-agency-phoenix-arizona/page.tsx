import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Agency in Phoenix, Arizona | StrikePath',
  description: 'StrikePath is a Phoenix-based AI agency building chatbots, AI receptionists, automation, and marketing for small businesses across Arizona and all 50 states.',
  openGraph: {
    title: 'AI Agency in Phoenix, Arizona | StrikePath',
    description: 'StrikePath is a Phoenix-based AI agency building chatbots, AI receptionists, automation, and marketing for small businesses across Arizona and all 50 states.',
  },
  twitter: {
    title: 'AI Agency in Phoenix, Arizona | StrikePath',
    description: 'StrikePath is a Phoenix-based AI agency building chatbots, AI receptionists, automation, and marketing for small businesses across Arizona and all 50 states.',
  },
}

const faqs = [
  {
    q: 'Are you based in Phoenix?',
    a: 'Yes — StrikePath is headquartered in Phoenix, Arizona. While we serve businesses in all 50 states, we have a deep focus on the Arizona small business market.',
  },
  {
    q: 'Do I have to be in Phoenix or Arizona to work with you?',
    a: 'Not at all. Everything we build is delivered remotely, so we work with businesses across the entire country. Your location has never been a barrier.',
  },
  {
    q: 'What types of businesses do you typically work with?',
    a: 'We work with all kinds of small businesses — home service companies, contractors, salons, dental and medical offices, restaurants, retail shops, real estate agents, law firms, and more.',
  },
  {
    q: 'How is StrikePath different from a traditional marketing agency?',
    a: 'Traditional agencies charge large retainers, take weeks to deliver, and lock you into contracts. We use AI to build faster and pass those savings on to you — with flat monthly pricing, no setup fees, and no long-term commitments.',
  },
]

const mono: React.CSSProperties = { fontFamily: 'var(--font-mono)' }
const monoXs: React.CSSProperties = { ...mono, fontSize: '0.6rem', fontWeight: 300, letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'var(--gold)' }

export default function AIAgencyPhoenixPage() {
  return (
    <main className="px-8 sm:px-14 lg:px-28 py-20 md:py-32" style={{ maxWidth: '52rem' }}>

      <span style={{ ...monoXs, display: 'block', marginBottom: '1.5rem' }}>AI Agency · Phoenix, Arizona</span>

      <h1
        className="font-display font-extralight text-bone"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.025em', lineHeight: 1, marginBottom: '1.75rem' }}
      >
        AI Agency in Phoenix, Arizona
      </h1>

      <p className="font-sans font-light" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.125rem)', lineHeight: 1.9, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        StrikePath is a Phoenix-based AI agency built specifically for small business owners. We build done-for-you AI tools — chatbots, receptionists, automation workflows, and marketing creatives — that help businesses save time, capture more leads, and compete with companies twice their size. And we do it in 48 hours, at a flat monthly rate, with no contracts.
      </p>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
        Built in Phoenix. Built for Small Business.
      </h2>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '1.25rem' }}>
        The Phoenix metro area is one of the fastest-growing small business markets in the country. From Scottsdale to Mesa, Chandler to Peoria, local business owners are competing for the same customers — and the ones winning are the ones who've made their businesses faster and more responsive. AI is how they're doing it.
      </p>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        We built StrikePath because we saw a gap: big-market AI tools and agencies weren't accessible to small business owners in terms of price or simplicity. So we built a better model — AI-first processes that let us deliver professional results in a fraction of the time and cost of a traditional agency.
      </p>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.75rem' }}>
        What We Build
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3.5rem' }}>
        {[
          {
            label: 'AI Chatbot',
            price: 'from $149/mo',
            href: '/ai-chatbot-for-small-business',
            desc: 'A 24/7 chatbot trained on your business. Answers questions, captures lead info, and handles website visitors automatically — even while you sleep.',
          },
          {
            label: 'AI Receptionist',
            price: 'from $349/mo',
            href: '/ai-receptionist-for-small-business',
            desc: 'An AI phone agent that answers every inbound call, handles FAQs, takes messages, and sounds completely natural. No missed calls, no hold music.',
          },
          {
            label: 'AI Automation',
            price: 'from $197/mo',
            href: '/ai-automation-for-small-business',
            desc: 'Automated workflows for the tasks that keep slipping: review requests after jobs, instant lead alerts from form submissions, and missed-call text-backs.',
          },
          {
            label: 'AI Marketing',
            price: 'from $197/mo',
            href: '/ai-marketing-for-small-business',
            desc: 'Fresh ad creatives delivered every month — static images, video ads, and carousel posts built around your brand and ready to run on Facebook, Instagram, and TikTok.',
          },
        ].map(svc => (
          <div key={svc.label} style={{ background: 'var(--ink-soft)', border: '1px solid var(--line)', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <p className="font-display font-light text-bone" style={{ fontSize: '1.15rem', letterSpacing: '-0.01em' }}>{svc.label}</p>
              <p style={{ ...monoXs }}>{svc.price}</p>
            </div>
            <p className="font-sans font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'rgba(236,227,204,0.60)' }}>{svc.desc}</p>
            <a href={svc.href} style={{ ...mono, fontSize: '0.6rem', fontWeight: 300, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>
              Learn more →
            </a>
          </div>
        ))}
      </div>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
        Why Phoenix Small Businesses Choose StrikePath
      </h2>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '1.25rem' }}>
        Phoenix is a competitive market. Whether you're a landscaping company in Tempe, a home service business in Gilbert, a salon in Scottsdale, or a contractor in Glendale — your customers expect fast responses, professional communication, and a business that feels bigger than it is. Our AI tools help you deliver exactly that, starting within 48 hours.
      </p>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '1.25rem' }}>
        We understand the Arizona small business landscape — the seasonality, the competition, the customer expectations. Everything we build is designed to help you capture more of the leads already coming your way and convert them faster.
      </p>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        And while we're rooted in Phoenix, we serve small businesses in all 50 states. The same 48-hour delivery, flat pricing, and no-contract approach applies no matter where you are.
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
          See All Services & Pricing →
        </a>
        <a href="/contact" style={{ ...mono, fontSize: '0.7rem', fontWeight: 300, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bone-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          Get in touch
        </a>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'StrikePath',
          description: 'AI agency in Phoenix, Arizona building chatbots, AI receptionists, automation, and marketing for small businesses nationwide.',
          url: 'https://www.strikepath.co',
          telephone: '+1-928-356-0570',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Phoenix',
            addressRegion: 'AZ',
            addressCountry: 'US',
          },
          areaServed: ['Phoenix', 'Scottsdale', 'Mesa', 'Tempe', 'Chandler', 'Gilbert', 'Glendale', 'Peoria', 'Arizona', 'United States'],
          priceRange: '$149–$549/mo',
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
