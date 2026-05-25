import type { Metadata } from 'next'
import HeroVideo from '@/app/components/HeroVideo'
import EmailCapture from '@/app/components/EmailCapture'

export const metadata: Metadata = {
  title: 'StrikePath | AI Websites, Automation & Chatbots for Businesses',
  description:
    'StrikePath builds AI-powered websites, automation workflows, and intelligent chatbots that save businesses time and money. Serving businesses nationwide.',
  alternates: {
    canonical: 'https://www.strikepath.co',
  },
  openGraph: {
    title: 'StrikePath | AI Websites, Automation & Chatbots for Businesses',
    description:
      'StrikePath builds AI-powered websites, automation workflows, and intelligent chatbots that save businesses time and money. Serving businesses nationwide.',
    url: 'https://www.strikepath.co',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'StrikePath — AI Websites, Automation & Chatbots' }],
  },
  twitter: {
    title: 'StrikePath | AI Websites, Automation & Chatbots for Businesses',
    description:
      'StrikePath builds AI-powered websites, automation workflows, and intelligent chatbots that save businesses time and money. Serving businesses nationwide.',
    images: ['/og-image.png'],
  },
}

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We understand your business, goals, and pain points through a brief call. No jargon, no lengthy intake forms—just a focused conversation that shapes everything we build.',
  },
  {
    num: '02',
    title: 'Build',
    desc: 'Our AI tools construct your solution while you stay in the loop. You see progress at every stage and can redirect at any point—your input is built into the process, not added after.',
  },
  {
    num: '03',
    title: 'Test & Iterate',
    desc: 'We refine based on your feedback until it is exactly right. Real-world testing against your actual use cases, not hypotheticals.',
  },
  {
    num: '04',
    title: 'Deploy & Scale',
    desc: 'Your solution goes live and we train your team to use it. We stay available after launch—your success is the metric, not the delivery date.',
  },
]

const trustPoints = [
  {
    num: '01',
    title: 'Fast Delivery',
    desc: 'Websites, chatbots, and automations delivered in days, not months. AI tools let us build faster without cutting corners.',
  },
  {
    num: '02',
    title: 'Fixed Pricing',
    desc: 'No hourly rates, no scope creep, no surprises. One price, full delivery—what we quote is what you pay.',
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

          <h1
            className="font-display font-extralight text-bone leading-[0.85] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 10rem)' }}
          >
            StrikePath
          </h1>

          <p
            className="font-display font-light gold-shine"
            style={{
              fontSize: 'clamp(1.1rem, 2.4vw, 1.9rem)',
              lineHeight: 1.3,
              marginTop: '0.75em',
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
              marginTop: '1.25rem',
              maxWidth: '36rem',
            }}
          >
            We build AI websites, automation workflows, and intelligent chatbots
            that save your team time and money—so you can spend less time on
            operations and more time scaling. Serving businesses nationwide.
          </p>

          <div className="hairline" style={{ margin: '2rem 0', maxWidth: '440px' }} />

          <a href="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>
            <span>Start a Project</span>
          </a>

        </div>
      </HeroVideo>

      {/* ── How We Work ── */}
      <section id="process" className="px-8 sm:px-14 lg:px-28 py-24 md:py-32 border-t border-line">

        <span className="eyebrow mb-5">Process</span>
        <h2
          className="font-display font-extralight text-bone"
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
            letterSpacing: '-0.025em',
            lineHeight: 0.9,
            marginTop: '1.25rem',
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
              style={{ paddingLeft: '2.75rem', paddingBottom: i < steps.length - 1 ? '3.25rem' : 0 }}
            >
              <div
                className="absolute"
                style={{
                  left: '0.3125rem',
                  top: '0.3rem',
                  width: '9px',
                  height: '9px',
                  background: i === 0 ? 'var(--gold)' : 'var(--gold-deep)',
                  transform: 'rotate(45deg)',
                }}
              />
              <span className="eyebrow">{num}</span>
              <h3
                className="font-display font-light text-bone"
                style={{ fontSize: 'clamp(1.25rem, 2vw, 1.65rem)', letterSpacing: '-0.01em', marginTop: '0.65rem', marginBottom: '0.6rem' }}
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
      <section className="px-8 sm:px-14 lg:px-28 py-24 md:py-32 border-t border-line">

        <span className="eyebrow mb-5">Why StrikePath</span>
        <h2
          className="font-display font-extralight text-bone"
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
            letterSpacing: '-0.025em',
            lineHeight: 0.9,
            marginTop: '1.25rem',
            marginBottom: '4rem',
          }}
        >
          Built<br />different.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {trustPoints.map(({ num, title, desc }) => (
            <div key={num} style={{ borderTop: '1px solid var(--line)', paddingTop: '1.75rem' }}>
              <span className="eyebrow">{num}</span>
              <h3
                className="font-display font-light text-bone"
                style={{ fontSize: 'clamp(1.25rem, 1.8vw, 1.65rem)', letterSpacing: '-0.01em', marginTop: '1rem', marginBottom: '0.8rem' }}
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

      {/* ── Email contact ── */}
      <section id="contact" className="px-8 sm:px-14 lg:px-28 py-24 md:py-32 border-t border-line">

        <span className="eyebrow mb-5">Get Started</span>
        <h2
          className="font-display font-extralight text-bone"
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
            letterSpacing: '-0.025em',
            lineHeight: 0.9,
            marginTop: '1.25rem',
            marginBottom: '2.5rem',
          }}
        >
          Ready<br />to build?
        </h2>

        <p
          className="font-sans font-light text-bone-dim"
          style={{ fontSize: 'clamp(1rem, 1.4vw, 1.125rem)', lineHeight: 1.9, marginBottom: '2.5rem', maxWidth: '32rem' }}
        >
          Drop your email and we'll reach out within 24 hours with a clear path forward.
        </p>

        <EmailCapture />

      </section>

    </main>
  )
}
