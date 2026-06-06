import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Marketing for Small Business | StrikePath',
  description: 'Monthly AI-generated ad creatives for small businesses — static ads, video ads, and carousel posts. Starting at $197/mo, delivered every month.',
  openGraph: {
    title: 'AI Marketing for Small Business | StrikePath',
    description: 'Monthly AI-generated ad creatives for small businesses — static ads, video ads, and carousel posts. Starting at $197/mo, delivered every month.',
  },
  twitter: {
    title: 'AI Marketing for Small Business | StrikePath',
    description: 'Monthly AI-generated ad creatives for small businesses — static ads, video ads, and carousel posts. Starting at $197/mo, delivered every month.',
  },
}

const faqs = [
  {
    q: 'Do you need my logo and brand colors?',
    a: 'Yes — we ask for your brand assets in the onboarding form. If you don\'t have formal brand guidelines, just share some examples of the look and feel you like and we\'ll work from there.',
  },
  {
    q: 'Which platforms can I use the ads on?',
    a: 'The ads are ready to run on Facebook, Instagram, TikTok, Google Display, and any other platform that accepts image or video uploads. We format them for multiple dimensions.',
  },
  {
    q: 'What if I don\'t love an ad that was created?',
    a: 'We include revision requests in every plan. If something isn\'t right, tell us and we\'ll fix it. Our goal is creatives you\'re proud to run.',
  },
  {
    q: 'Do I have to run ads myself, or do you do that too?',
    a: 'We deliver the creatives — the actual ad copy, images, and videos. Running and managing your ad campaigns is a separate service. These plans are specifically for high-quality creative assets delivered monthly.',
  },
]

const mono: React.CSSProperties = { fontFamily: 'var(--font-mono)' }
const monoXs: React.CSSProperties = { ...mono, fontSize: '0.6rem', fontWeight: 300, letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'var(--gold)' }

export default function AIMarketingPage() {
  return (
    <main className="px-8 sm:px-14 lg:px-28 py-20 md:py-32" style={{ maxWidth: '52rem' }}>

      <span style={{ ...monoXs, display: 'block', marginBottom: '1.5rem' }}>AI Marketing for Small Business</span>

      <h1
        className="font-display font-extralight text-bone"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.025em', lineHeight: 1, marginBottom: '1.75rem' }}
      >
        AI Marketing for Small Business
      </h1>

      <p className="font-sans font-light" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.125rem)', lineHeight: 1.9, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        Running ads for your small business requires a steady flow of fresh creatives. But creating scroll-stopping images and videos takes time, software, and skill most business owners don't have — and hiring a creative agency costs thousands. AI marketing solves that problem with professional ad creatives delivered to your inbox every month.
      </p>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
        Fresh Ad Creatives. Every Month. No Agency Fees.
      </h2>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '1.25rem' }}>
        The biggest reason small business ads underperform is creative fatigue — the same image running for months until the algorithm stops showing it to anyone new. A consistent flow of fresh creatives keeps your ads performing, your brand visible, and your cost-per-click low.
      </p>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        We use AI to generate ad creatives that are built around your brand, your services, and your target audience. Every deliverable is reviewed by our team before it reaches you — so you get professional-quality output without the professional-agency price tag.
      </p>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.75rem' }}>
        Plans Built for Small Business
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
        {[
          {
            name: 'Ad Batch',
            price: '$197/mo',
            desc: '5–10 AI-generated ads delivered every month, ready to run on any platform. Scroll-stopping visuals and copy built around your brand and target audience.',
            href: 'https://buy.stripe.com/9B6cMY8RO33V0SogYHbsc06',
          },
          {
            name: 'Marketing Premium',
            price: '$497/mo',
            desc: '10–15 static ads + short-form video ads + carousel posts monthly. Built from your brand photos. Full content suite ready to post across Instagram, TikTok, and Facebook.',
            href: 'https://buy.stripe.com/14A9AM6JG6g7dFa8sbbsc04',
          },
        ].map(plan => (
          <div key={plan.name} style={{ background: 'var(--ink-soft)', border: '1px solid var(--line)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ ...monoXs }}>AI Marketing</p>
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
        Who This Works For
      </h2>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '1.25rem' }}>
        Our AI marketing plans are built for small business owners who are already running — or want to start running — paid social ads on Facebook, Instagram, or TikTok. If you've been using the same creative for months, struggling to come up with new ideas, or spending too much on a designer just to get ads made, this is the better way.
      </p>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        We deliver every month like clockwork. No creative blocks, no back-and-forth delays, no agency retainers. Just fresh, on-brand ad creatives ready to run.
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
        <a href="https://buy.stripe.com/9B6cMY8RO33V0SogYHbsc06" target="_blank" rel="noopener noreferrer" className="btn-gold">
          Start with Ad Batch — $197/mo →
        </a>
        <a href="/services" style={{ ...mono, fontSize: '0.7rem', fontWeight: 300, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bone-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          View all services
        </a>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Marketing for Small Business',
          description: 'Monthly AI-generated ad creatives for small businesses — static ads, video ads, and carousel posts. Starting at $197/mo.',
          provider: { '@type': 'Organization', name: 'StrikePath', url: 'https://www.strikepath.co' },
          areaServed: 'United States',
          offers: [
            { '@type': 'Offer', name: 'Ad Batch', price: '197', priceCurrency: 'USD', priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'https://schema.org/RecurringCharge', billingDuration: 'P1M' } },
            { '@type': 'Offer', name: 'Marketing Premium', price: '497', priceCurrency: 'USD', priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'https://schema.org/RecurringCharge', billingDuration: 'P1M' } },
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
