import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 })
  }

  const { name, email, message, phone, service } = body
  const source = typeof body.source === 'string' ? body.source : 'contact'

  if (typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
    return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (typeof email !== 'string' || !emailRegex.test(email.trim())) {
    return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 })
  }

  if (typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 2000) {
    return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 })
  }

  if (phone !== undefined && phone !== null && phone !== '') {
    if (typeof phone !== 'string' || phone.length > 30) {
      return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 })
    }
  }

  if (service !== undefined && typeof service !== 'string') {
    return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 })
  }

  // TODO: database insert
  const fRes = await fetch('https://formspree.io/f/mwvzljzb', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      phone: phone ?? '',
      'service-type': service ?? '',
      source,
    }),
  })

  if (!fRes.ok) {
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
