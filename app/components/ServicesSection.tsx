'use client'
import { useState, useRef } from 'react'

type Tier = {
  name: string
  price: string
  note: string
}

type Service = {
  tab: string
  eyebrow: string
  title: string
  description: string
  tiers: Tier[]
}

const SERVICES: Service[] = [
  {
    tab: 'Chatbots',
    eyebrow: '01 — Chatbots',
    title: 'AI Chatbots',
    description:
      'Intelligent chatbots that handle customer questions, capture leads, and work 24/7 without a salary. Every message answered, every lead logged.',
    tiers: [
      { name: 'Starter', price: '$149/mo', note: 'Handles FAQs, captures leads, and syncs to email.' },
      { name: 'Pro',     price: '$249/mo', note: 'Full CRM integration, custom conversation flows, and priority support.' },
    ],
  },
  {
    tab: 'AI Receptionist',
    eyebrow: '02 — AI Receptionist',
    title: 'AI Receptionist',
    description:
      'A virtual receptionist that answers calls, qualifies leads, and books appointments — no hold music, no missed calls, no overtime.',
    tiers: [
      { name: 'Standard',  price: '$349/mo', note: '~100 calls/month included.' },
      { name: 'Unlimited', price: '$549/mo', note: 'Unlimited calls, CRM sync, and full call transcripts.' },
    ],
  },
  {
    tab: 'Automation',
    eyebrow: '03 — Automation',
    title: 'AI Automation',
    description:
      'Custom workflows that eliminate repetitive tasks and connect your tools — built once, running indefinitely. Your team focuses on decisions, not admin.',
    tiers: [
      { name: 'Single Workflow', price: '$247/mo', note: 'One targeted automation — data sync, notifications, or task routing.' },
      { name: 'Multi-Step',      price: '$397/mo', note: 'Complex multi-step workflows spanning multiple platforms.' },
      { name: 'Full Stack',      price: '$697/mo', note: 'Complete business automation overhaul.' },
    ],
  },
  {
    tab: 'AI Marketing',
    eyebrow: '04 — AI Marketing',
    title: 'AI Marketing',
    description:
      'AI-generated ad creative and copy that moves fast, looks sharp, and drives clicks — without the retainer of a full agency.',
    tiers: [
      { name: 'Ad Batch',      price: '$197/mo', note: '5–10 AI-generated ads — static and copy variants ready to launch.' },
      { name: 'Monthly Batch', price: '$247/mo', note: 'A fresh set of ads delivered every month.' },
    ],
  },
]

const INACTIVE_COLOR = 'rgba(236, 227, 204, 0.40)'

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [fading, setFading] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function selectTab(index: number) {
    if (index === activeTab) return
    if (timerRef.current) clearTimeout(timerRef.current)
    setFading(true)
    timerRef.current = setTimeout(() => {
      setActiveTab(index)
      setFading(false)
    }, 150)
  }

  const service = SERVICES[activeTab]

  return (
    <section
      id="services"
      className="py-20 md:py-32 px-8 sm:px-14 lg:px-28 bg-ink border-t border-line"
    >
      {/* ── Tab row ── */}
      <div
        style={{
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        } as React.CSSProperties}
      >
        <div style={{ display: 'flex', gap: '2.5rem', minWidth: 'max-content' }}>
          {SERVICES.map((s, i) => {
            const isActive = i === activeTab
            return (
              <button
                key={s.tab}
                onClick={() => selectTab(i)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: isActive
                    ? '1px solid var(--gold)'
                    : '1px solid transparent',
                  paddingBottom: '1rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.66rem',
                  fontWeight: 300,
                  textTransform: 'uppercase',
                  letterSpacing: '0.28em',
                  color: isActive ? 'var(--gold)' : INACTIVE_COLOR,
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.color = 'var(--bone)'
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.color = INACTIVE_COLOR
                }}
              >
                {s.tab}
              </button>
            )
          })}
        </div>
      </div>

      <div className="hairline" style={{ marginBottom: '3.5rem' }} />

      {/* ── Content panel ── */}
      <div style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.15s ease' }}>

        <span className="eyebrow" style={{ marginBottom: '1.25rem' }}>
          {service.eyebrow}
        </span>

        <h2
          className="font-display font-extralight text-bone"
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
            letterSpacing: '-0.025em',
            lineHeight: 0.9,
            marginTop: '1.25rem',
            marginBottom: '1.75rem',
          }}
        >
          {service.title}
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
            fontWeight: 300,
            color: 'rgba(236, 227, 204, 0.60)',
            lineHeight: 1.9,
            maxWidth: '42rem',
            marginBottom: '3.5rem',
          }}
        >
          {service.description}
        </p>

        {/* ── Pricing tiers ── */}
        <div style={{ maxWidth: '42rem', marginBottom: '3.5rem' }}>
          {service.tiers.map((tier, i) => (
            <div key={tier.name}>
              {i > 0 && <div className="hairline" style={{ margin: '2rem 0' }} />}
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.63rem',
                  fontWeight: 300,
                  textTransform: 'uppercase',
                  letterSpacing: '0.28em',
                  color: 'var(--gold)',
                  marginBottom: '0.5rem',
                }}
              >
                {tier.name}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 200,
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: 'var(--bone)',
                  marginBottom: '0.45rem',
                }}
              >
                {tier.price}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.63rem',
                  fontWeight: 300,
                  letterSpacing: '0.12em',
                  color: 'rgba(236, 227, 204, 0.40)',
                  lineHeight: 1.65,
                }}
              >
                {tier.note}
              </p>
            </div>
          ))}
        </div>

        <a href="/services" className="btn-gold" style={{ textDecoration: 'none' }}>
          <span>Check Out Our Services</span>
        </a>

      </div>
    </section>
  )
}
