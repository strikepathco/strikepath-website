import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | StrikePath',
  description:
    'Helping small and medium-sized businesses use AI to save time, capture more leads, and improve customer communication.',
  openGraph: {
    title: 'About | StrikePath',
    description:
      'Helping small and medium-sized businesses use AI to save time, capture more leads, and improve customer communication.',
  },
  twitter: {
    title: 'About | StrikePath',
    description:
      'Helping small and medium-sized businesses use AI to save time, capture more leads, and improve customer communication.',
  },
}

const mono: React.CSSProperties = { fontFamily: 'var(--font-mono)' }
const monoXs: React.CSSProperties = { ...mono, fontSize: '0.6rem', fontWeight: 300, letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'var(--gold)' }

const services = [
  {
    name: 'AI Chatbots',
    desc: 'Custom website chatbots that answer questions, capture leads, and provide customer support 24/7.',
  },
  {
    name: 'AI Receptionists',
    desc: 'AI-powered phone agents that answer calls, qualify leads, and schedule appointments.',
  },
  {
    name: 'AI Automations',
    desc: 'Automated workflows that eliminate repetitive tasks and improve operational efficiency.',
  },
  {
    name: 'AI Marketing',
    desc: 'AI-assisted marketing systems that help businesses create and manage campaigns more effectively.',
  },
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
        About Strikepath
      </h1>

      <p className="font-sans font-light" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.125rem)', lineHeight: 1.9, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        Helping small and medium-sized businesses use AI to save time, capture more leads, and improve customer communication.
      </p>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      {/* ── Mission ── */}
      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
        Our Mission
      </h2>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '1.25rem' }}>
        Strikepath helps businesses implement practical AI solutions that reduce manual work and improve customer experiences. We build AI chatbots, AI receptionists, automations, and marketing systems designed to create real business value without unnecessary complexity.
      </p>
      <p className="font-sans font-light" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(236,227,204,0.65)', marginBottom: '3.5rem' }}>
        Based in Arizona, we focus on straightforward solutions that help business owners spend less time on repetitive tasks and more time growing their business.
      </p>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      {/* ── What We Do ── */}
      <h2 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '1.75rem' }}>
        What We Do
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
        {services.map((s) => (
          <div key={s.name} style={{ background: 'var(--ink-soft)', border: '1px solid var(--line)', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <p className="font-display font-light text-bone" style={{ fontSize: '1.15rem', letterSpacing: '-0.01em' }}>{s.name}</p>
            <p className="font-sans font-light" style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'rgba(236,227,204,0.60)' }}>{s.desc}</p>
          </div>
        ))}
      </div>

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
        <Link href="/contact" style={{ ...mono, fontSize: '0.7rem', fontWeight: 300, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bone-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          Get in touch
        </Link>
      </div>

    </main>
  )
}
