'use client'
import { useState, ChangeEvent, FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.72rem',
  fontWeight: 300,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: 'var(--bone-dim)',
  marginBottom: '0.5rem',
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mwvzljzb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div>
        <span className="eyebrow mb-5">Message received</span>
        <p
          className="font-display font-extralight text-bone"
          style={{
            fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
            letterSpacing: '-0.025em',
            lineHeight: 0.95,
            marginTop: '1.25rem',
          }}
        >
          We'll be in touch<br />within 24 hours.
        </p>
        <div className="hairline" style={{ margin: '2rem 0', maxWidth: '200px' }} />
        <p
          className="font-sans font-light text-bone-dim"
          style={{ fontSize: '0.875rem', lineHeight: 1.85 }}
        >
          Expect a response shortly. We look forward to learning about your project.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>

      {/* Name + Email */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2"
        style={{ gap: '2rem', marginBottom: '2.5rem' }}
      >
        <div>
          <label htmlFor="cf-name" style={labelStyle}>Name</label>
          <input
            id="cf-name"
            type="text"
            name="name"
            className="input-field"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cf-email" style={labelStyle}>Email</label>
          <input
            id="cf-email"
            type="email"
            name="email"
            className="input-field"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Submit */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
        <button
          type="submit"
          className="btn-gold"
          disabled={status === 'sending'}
          style={{ opacity: status === 'sending' ? 0.55 : 1, transition: 'opacity 0.3s ease' }}
        >
          <span>{status === 'sending' ? 'Sending…' : 'Start Your Project'}</span>
        </button>

        {status === 'error' && (
          <p
            className="font-sans font-light"
            style={{ fontSize: '0.9rem', color: 'var(--gold)', letterSpacing: '0.03em' }}
          >
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </div>

    </form>
  )
}
