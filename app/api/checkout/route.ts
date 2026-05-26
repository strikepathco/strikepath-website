import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-04-22.dahlia' as const,
})

export async function POST(req: NextRequest) {
  try {
    const { priceId } = await req.json()

    if (!priceId) {
      return NextResponse.json({ error: 'Missing priceId' }, { status: 400 })
    }

    const origin = req.headers.get('origin') ?? 'https://www.strikepath.co'

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/contact?checkout=success`,
      cancel_url: `${origin}/services`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Checkout error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
