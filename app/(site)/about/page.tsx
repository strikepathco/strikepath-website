import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | StrikePath',
  description:
    'StrikePath gives small businesses access to the same AI tools large companies have used for years — chatbots, receptionists, automation, and marketing, built and managed for you.',
  openGraph: {
    title: 'About | StrikePath',
    description:
      'StrikePath gives small businesses access to the same AI tools large companies have used for years — chatbots, receptionists, automation, and marketing, built and managed for you.',
  },
  twitter: {
    title: 'About | StrikePath',
    description:
      'StrikePath gives small businesses access to the same AI tools large companies have used for years — chatbots, receptionists, automation, and marketing, built and managed for you.',
  },
}

const mono: React.CSSProperties = { fontFamily: 'var(--font-mono)' }
const monoXs: React.CSSProperties = { ...mono, fontSize: '0.6rem', fontWeight: 300, letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'var(--gold)' }

const whyItems = [
  'Delivered within 48 hours.',
  'Flat monthly pricing with no setup fees.',
  'No long-term contracts — cancel anytime.',
  'Direct access to our team included with every plan.',
  'Built for businesses without in-house tech teams.',
]

export default function AboutPage() {
  return (
    <main className="px-8 sm:px-14 lg:px-28 py-20 md:py-32" style={{ maxWidth: '52rem' }}>

      {/* ── Hero ── */}
      <span style={{ ...monoXs, display: 'block', marginBottom: '1.5rem' }}>About StrikePath</span>

      <h1
        className="font-display font-extralight text-bone"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.025em', lineHeight: 1, marginBottom: '1.75rem' }}
      >
        We Build the AI. You Run the Business.
      </h1>

      <p className="font-sans font-light" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.125rem)', lineHeight: 1.9, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        StrikePath was built with one goal: give small businesses access to the same AI tools that large companies have been using for years.
      </p>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      {/* ── Mission ── */}
      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
        Our Mission
      </h2>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '1.25rem' }}>
        Most small business owners are doing too many jobs at once — handling calls, chasing leads, managing schedules, and still trying to find time to actually run their business.
      </p>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        AI can handle a big chunk of that. We build it, set it up, and manage it for you.
      </p>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      {/* ── What We Offer ── */}
      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
        What We Offer
      </h2>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        We provide four core services: AI chatbots, AI phone receptionists, workflow automation, and AI-generated marketing content. Every plan is flat monthly pricing with no setup fees and no long-term contracts. After checkout, you fill out a short onboarding form and your setup is delivered within 48 hours.
      </p>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      {/* ── Who We Serve ── */}
      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
        Who We Serve
      </h2>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '1.25rem' }}>
        We work with small and medium-sized businesses across all 50 states. Contractors, restaurants, medical offices, law firms, retail shops, real estate agencies — any business that talks to customers and wants to run more efficiently.
      </p>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        StrikePath is headquartered in Phoenix, Arizona, but everything we build is delivered and managed remotely. Location is never a barrier.
      </p>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      {/* ── Why StrikePath ── */}
      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.75rem' }}>
        Why StrikePath
      </h2>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '3.5rem', listStyle: 'none', padding: 0 }}>
        {whyItems.map((item) => (
          <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <span style={{ color: 'var(--gold)', lineHeight: 1.85 }} aria-hidden="true">—</span>
            <span className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)' }}>{item}</span>
          </li>
        ))}
      </ul>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      {/* ── CTA ── */}
      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
        Ready to Put AI to Work?
      </h2>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '2rem' }}>
        See how Strikepath can help your business save time and operate more efficiently.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/services" className="btn-gold">
          See Our Services →
        </Link>
      </div>

    </main>
  )
}
