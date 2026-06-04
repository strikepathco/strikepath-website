'use client'
import { useState, FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mwvzljzb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 200,
          fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
          letterSpacing: '-0.02em',
          color: 'var(--bone)',
        }}
      >
        We'll be in touch within 48 hours.
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-end', maxWidth: '36rem' }}
    >
      <div style={{ flex: 1, minWidth: '200px' }}>
        <input
          type="email"
          name="email"
          className="input-field"
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="btn-gold"
        disabled={status === 'sending'}
        style={{ opacity: status === 'sending' ? 0.55 : 1, transition: 'opacity 0.3s ease', flexShrink: 0 }}
      >
        <span>{status === 'sending' ? 'Sending…' : 'Get in Touch'}</span>
      </button>
      {status === 'error' && (
        <p style={{ width: '100%', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--gold)' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
