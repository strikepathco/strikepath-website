import type { Metadata } from 'next'
import HeroVideo from '@/app/components/HeroVideo'

export const metadata: Metadata = {
  title: 'StrikePath | AI Chatbots, Automation, Receptionists & Marketing for Businesses',
  description:
    'StrikePath builds AI-powered chatbots, automation workflows, AI receptionists, and marketing tools that save businesses time and money. Serving businesses nationwide.',
  alternates: {
    canonical: 'https://www.strikepath.co',
  },
  openGraph: {
    title: 'StrikePath | AI Chatbots, Automation, Receptionists & Marketing for Businesses',
    description:
      'StrikePath builds AI-powered chatbots, automation workflows, AI receptionists, and marketing tools that save businesses time and money. Serving businesses nationwide.',
    url: 'https://www.strikepath.co',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'StrikePath — AI Chatbots, Automation, Receptionists & Marketing' }],
  },
  twitter: {
    title: 'StrikePath | AI Chatbots, Automation, Receptionists & Marketing for Businesses',
    description:
      'StrikePath builds AI-powered chatbots, automation workflows, AI receptionists, and marketing tools that save businesses time and money. Serving businesses nationwide.',
    images: ['/og-image.png'],
  },
}

const steps = [
  {
    num: '01',
    title: 'Choose Your Service',
    desc: 'Browse the services, pick the tier that fits your business, and check out. No sales call required.',
  },
  {
    num: '02',
    title: 'Fill the Onboarding Form',
    desc: 'Right after payment you'll get a short form. It takes under 5 minutes and gives us everything we need to build your service.',
  },
  {
    num: '03',
    title: 'We Build It',
    desc: 'Our AI-powered build process gets to work immediately. No back and forth, no waiting weeks.',
  },
  {
    num: '04',
    title: 'Delivered in 24 Hours',
    desc: 'Your service is live and handed off to you within 24 hours. Ready to use from day one.',
  },
]

const trustPoints = [
  {
    num: '01',
    title: 'Fast Delivery',
    desc: 'Chatbots, automations, AI receptionists, and marketing tools delivered in days, not months. AI tools let us build faster without cutting corners.',
  },
  {
    num: '02',
    title: 'Simple Monthly Pricing',
    desc: 'No contracts, no setup fees, no surprises. One monthly rate, cancel anytime.',
  },
  {
    num: '03',
    title: 'Nationwide',
    desc: 'We serve businesses across all 50 states, entirely remote. Location has never been a barrier to great work.',
  },
]

export default function HomePage() {
  return (
    <main className="noise">

      {/* ── Hero ── */}
      <HeroVideo>
        <div className="px-8 sm:px-14 lg:px-28 pb-16 sm:pb-20" style={{ maxWidth: '72rem' }}>

          <p
            className="font-display font-light gold-shine"
            style={{
              fontSize: 'clamp(1.1rem, 2.4vw, 1.9rem)',
              lineHeight: 1.3,
              marginTop: '1.25rem',
              maxWidth: '32rem',
            }}
          >
            Your business runs on AI.<br />So you focus on growth.
          </p>

          <p
            className="font-sans font-light text-bone-dim"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
              lineHeight: 1.9,
              marginTop: '1.5rem',
              maxWidth: '36rem',
            }}
          >
            We build AI chatbots, automation workflows, AI receptionists, and marketing tools
            that save your team time and money—so you can spend less time on
            operations and more time scaling. Serving businesses nationwide.
          </p>

          <div className="hairline" style={{ margin: '2.5rem 0', maxWidth: '440px' }} />

          <a href="/services" className="btn-gold" style={{ textDecoration: 'none' }}>
            <span>Check Out Our Services</span>
          </a>

        </div>
      </HeroVideo>

      {/* ── How We Work ── */}
      <section id="process" className="px-8 sm:px-14 lg:px-28 py-24 md:py-32 border-t border-line">

        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>Process</span>
        <h2
          className="font-display font-extralight text-bone"
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
            letterSpacing: '-0.025em',
            lineHeight: 0.9,
            marginBottom: '4rem',
          }}
        >
          How We<br />Work
        </h2>

        <div className="relative" style={{ maxWidth: '42rem' }}>
          <div
            className="absolute"
            style={{
              left: '0.6875rem',
              top: '0.5rem',
              bottom: '1rem',
              width: '1px',
              background: 'linear-gradient(to bottom, var(--gold-deep) 0%, var(--line-strong) 50%, var(--line) 80%, transparent 100%)',
            }}
          />
          {steps.map(({ num, title, desc }, i) => (
            <div
              key={num}
              className="relative"
              style={{ paddingLeft: '2.75rem', paddingBottom: i < steps.length - 1 ? '3.5rem' : 0 }}
            >
              <div
                className="absolute"
                style={{
                  left: '0.3125rem',
                  top: '0.35rem',
                  width: '9px',
                  height: '9px',
                  background: i === 0 ? 'var(--gold)' : 'var(--gold-deep)',
                  transform: 'rotate(45deg)',
                }}
              />
              <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>{num}</span>
              <h3
                className="font-display font-light text-bone"
                style={{ fontSize: 'clamp(1.25rem, 2vw, 1.65rem)', letterSpacing: '-0.01em', marginBottom: '0.75rem' }}
              >
                {title}
              </h3>
              <p className="font-sans font-light text-bone-dim" style={{ fontSize: '1rem', lineHeight: 1.85 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ── Why StrikePath ── */}
      <section className="px-8 sm:px-14 lg:px-28 py-24 md:py-32 border-t border-line" style={{ textAlign: 'center' }}>

        <h2
          className="font-display font-extralight text-bone"
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
            letterSpacing: '-0.025em',
            lineHeight: 0.95,
            marginBottom: '1.25rem',
          }}
        >
          Why StrikePath
        </h2>

        <p
          className="font-display font-light"
          style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 2.25rem)',
            letterSpacing: '-0.02em',
            color: 'rgba(236,227,204,0.65)',
            marginBottom: '4rem',
          }}
        >
          Built different.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8" style={{ textAlign: 'left' }}>
          {trustPoints.map(({ num, title, desc }) => (
            <div
              key={num}
              style={{
                borderTop: '1px solid var(--line)',
                paddingTop: '2rem',
              }}
            >
              <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>{num}</span>
              <h3
                className="font-display font-light text-bone"
                style={{ fontSize: 'clamp(1.25rem, 1.8vw, 1.65rem)', letterSpacing: '-0.01em', marginBottom: '0.9rem' }}
              >
                {title}
              </h3>
              <p className="font-sans font-light text-bone-dim" style={{ fontSize: '1rem', lineHeight: 1.85 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ── Bottom CTA line ── */}
      <div
        className="px-8 sm:px-14 lg:px-28 py-16 border-t border-line"
        style={{ textAlign: 'center' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            fontWeight: 300,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--bone-dim)',
          }}
        >
          Ready to start?{' '}
          <a
            href="/services"
            style={{
              color: 'var(--gold)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--gold-deep)',
              paddingBottom: '1px',
              transition: 'color 0.2s ease, border-color 0.2s ease',
            }}
          >
            Visit our services
          </a>
        </p>
      </div>

    </main>
  )
}
