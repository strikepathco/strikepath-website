'use client'
import { useState, useRef, useEffect } from 'react'
import Vapi from '@vapi-ai/web'

type CallState = 'idle' | 'connecting' | 'active'

export default function VapiButton() {
  const [state, setState] = useState<CallState>('idle')
  const [micError, setMicError] = useState(false)
  const vapiRef = useRef<Vapi | null>(null)

  useEffect(() => {
    return () => {
      vapiRef.current?.stop()
    }
  }, [])

  async function startCall() {
    setMicError(false)
    setState('connecting')
    try {
      const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_KEY!)
      vapiRef.current = vapi

      vapi.on('call-start', () => setState('active'))
      vapi.on('call-end', () => {
        setState('idle')
        vapiRef.current = null
      })
      vapi.on('error', (err) => {
        const msg = String((err as { message?: string })?.message ?? err ?? '')
        if (msg.toLowerCase().includes('permission') || msg.toLowerCase().includes('notallowed')) {
          setMicError(true)
        }
        setState('idle')
        vapiRef.current = null
      })

      await vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID!)
    } catch (err: unknown) {
      const name = (err as { name?: string })?.name ?? ''
      const msg  = (err as { message?: string })?.message ?? ''
      if (name === 'NotAllowedError' || msg.toLowerCase().includes('permission')) {
        setMicError(true)
      }
      setState('idle')
      vapiRef.current = null
    }
  }

  function endCall() {
    vapiRef.current?.stop()
    setState('idle')
    vapiRef.current = null
  }

  const isIdle       = state === 'idle'
  const isConnecting = state === 'connecting'
  const isActive     = state === 'active'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <style>{`
        @keyframes vapi-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
        @keyframes vapi-dot-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.4); opacity: 0.6; }
        }
      `}</style>

      <button
        onClick={isActive ? endCall : isIdle ? startCall : undefined}
        disabled={isConnecting}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          fontWeight: 400,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          padding: '0.75rem 2rem',
          border: `1px solid ${isActive ? '#e05c1a' : 'var(--gold)'}`,
          background: isActive ? 'rgba(224,92,26,0.08)' : 'transparent',
          color: isActive ? '#e05c1a' : 'var(--gold)',
          cursor: isConnecting ? 'default' : 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          animation: isConnecting ? 'vapi-pulse 1.2s ease-in-out infinite' : 'none',
          transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease',
        }}
      >
        {isActive && (
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#e05c1a',
            flexShrink: 0,
            animation: 'vapi-dot-pulse 1s ease-in-out infinite',
          }} />
        )}
        {isIdle       && 'Try Our AI Receptionist Live →'}
        {isConnecting && 'Connecting...'}
        {isActive     && 'Live — End Call'}
      </button>

      {micError && (
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.58rem',
          fontWeight: 300,
          letterSpacing: '0.12em',
          color: '#e05c1a',
          marginTop: '0.6rem',
          textAlign: 'center',
        }}>
          Microphone access is required to try this.
        </p>
      )}
    </div>
  )
}
