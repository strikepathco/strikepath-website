'use client'
import { useState } from 'react'

type Props = {
  priceId: string
  label?: string
}

export default function CheckoutButton({ priceId, label = 'Get Started' }: Props) {
  const [loading, setLoading] = useState(false)

  if (!priceId) {
    return (
      <a
        href="/contact"
        className="btn-gold"
        style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
      >
        <span>{label}</span>
      </a>
    )
  }

  async function handleClick() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="btn-gold"
      style={{
        opacity: loading ? 0.55 : 1,
        transition: 'opacity 0.3s ease',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <span>{loading ? 'Redirecting…' : label}</span>
    </button>
  )
}
