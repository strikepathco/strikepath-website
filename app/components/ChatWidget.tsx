'use client'
import { useState, useRef, useEffect } from 'react'

type Message = { role: 'user' | 'assistant'; content: string }

const INITIAL: Message[] = [
  { role: 'assistant', content: "Hi! I'm the StrikePath assistant. Ask me anything about our AI services and pricing." },
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(INITIAL)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  async function send() {
    if (!input.trim() || loading) return
    const next: Message[] = [...messages, { role: 'user', content: input.trim() }]
    setMessages(next)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.content ?? 'Sorry, something went wrong. Try again.' },
      ])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Try again.' }])
    } finally {
      setLoading(false)
    }
  }

  function onKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  return (
    <>
      {/* ── Chat window ── */}
      {open && (
        <div style={{
          position: 'fixed', bottom: '88px', right: '24px',
          width: '360px', maxHeight: '520px',
          background: '#0a0a0a', border: '1px solid rgba(224,92,26,0.30)',
          borderRadius: '16px', display: 'flex', flexDirection: 'column',
          overflow: 'hidden', zIndex: 9998,
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
        }}>

          {/* Header */}
          <div style={{
            padding: '14px 16px', borderBottom: '1px solid rgba(224,92,26,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#e05c1a' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#ece3cc' }}>
                StrikePath AI
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              style={{ background: 'none', border: 'none', color: 'rgba(236,227,204,0.45)', cursor: 'pointer', fontSize: '1rem', lineHeight: 1, padding: '2px' }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '86%',
                  background: m.role === 'user' ? '#e05c1a' : '#111111',
                  color: m.role === 'user' ? '#fff' : '#ece3cc',
                  borderRadius: m.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                  padding: '9px 13px',
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div style={{ alignSelf: 'flex-start', color: 'rgba(236,227,204,0.35)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>
                •••
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: '12px 14px', borderTop: '1px solid rgba(224,92,26,0.18)', display: 'flex', gap: '8px' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKey}
              placeholder="Ask anything..."
              style={{
                flex: 1, background: '#111111',
                border: '1px solid rgba(224,92,26,0.22)', borderRadius: '8px',
                padding: '8px 12px', color: '#ece3cc',
                fontSize: '0.875rem', fontFamily: 'var(--font-sans)', outline: 'none',
              }}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              style={{
                background: '#e05c1a', border: 'none', borderRadius: '8px',
                padding: '8px 13px', color: '#fff',
                cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                opacity: loading || !input.trim() ? 0.45 : 1,
                fontSize: '1rem', lineHeight: 1,
                transition: 'opacity 0.2s',
              }}
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* ── Bubble button ── */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        style={{
          position: 'fixed', bottom: '24px', right: '24px',
          width: '54px', height: '54px', borderRadius: '50%',
          background: '#e05c1a', border: 'none', cursor: 'pointer',
          zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(224,92,26,0.45)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.08)'
          e.currentTarget.style.boxShadow = '0 6px 28px rgba(224,92,26,0.60)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(224,92,26,0.45)'
        }}
      >
        {open ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2L14 14M14 2L2 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 2C6.03 2 2 5.69 2 10.2c0 2.52 1.28 4.77 3.3 6.26L4.5 20l4.03-2.12c.81.2 1.62.32 2.47.32 4.97 0 9-3.69 9-8.2S15.97 2 11 2z" fill="white"/>
          </svg>
        )}
      </button>
    </>
  )
}
