'use client'
import { useState, useRef, useEffect } from 'react'
import Vapi from '@vapi-ai/web'

type Status = 'idle' | 'connecting' | 'active'

export default function VapiButton() {
  const statusRef = useRef<Status>('idle')
  const vapiRef   = useRef<InstanceType<typeof Vapi> | null>(null)
  const [display, setDisplay] = useState<Status>('idle')

  function setStatus(s: Status) {
    statusRef.current = s
    setDisplay(s)
  }

  useEffect(() => {
    return () => { vapiRef.current?.stop() }
  }, [])

  function handleClick() {
    if (statusRef.current === 'connecting') return
    if (statusRef.current === 'active') {
      vapiRef.current?.stop()
      return
    }

    // idle — start call
    const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_KEY!)
    vapiRef.current = vapi

    vapi.on('call-start', () => setStatus('active'))
    vapi.on('call-end',   () => { setStatus('idle'); vapiRef.current = null })
    vapi.on('error',      (e) => { console.error('Vapi error:', e); setStatus('idle'); vapiRef.current = null })

    vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID!)
    setStatus('connecting')
  }

  const isIdle       = display === 'idle'
  const isConnecting = display === 'connecting'
  const isActive     = display === 'active'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <style>{`
        @keyframes vapi-connecting {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 0.25; }
        }
        @keyframes vapi-dot-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>

      <button
        onClick={handleClick}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          fontWeight: 400,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          padding: '0.75rem 2rem',
          border: `1px solid ${isActive ? '#ef4444' : 'var(--gold)'}`,
          background: 'transparent',
          color: isActive ? '#ef4444' : 'var(--gold)',
          cursor: isConnecting ? 'not-allowed' : 'pointer',
          pointerEvents: isConnecting ? 'none' : 'auto',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          animation: isConnecting ? 'vapi-connecting 1.2s ease-in-out infinite' : 'none',
          transition: 'border-color 0.2s ease, color 0.2s ease',
        }}
      >
        {isIdle       && 'Try Our AI Receptionist Live →'}
        {isConnecting && 'Connecting...'}
        {isActive     && (
          <>
            <span style={{ animation: 'vapi-dot-pulse 1.5s ease-in-out infinite' }}>●</span>
            {" You're Live — Click to Hang Up"}
          </>
        )}
      </button>
    </div>
  )
}
