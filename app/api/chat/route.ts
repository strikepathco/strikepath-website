import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT =
  "You are a helpful assistant for StrikePath, an AI agency based in Phoenix, AZ that serves businesses nationwide. You help answer questions about StrikePath's services and pricing. Here are the services: AI Chatbot — Starter $149/mo (FAQs + lead capture), Pro $249/mo (CRM integration + advanced flows). AI Receptionist — Standard $349/mo (~100 calls/month), Premium $549/mo (unlimited calls + CRM sync). AI Automation — Single Workflow $247/mo, Multi-Step $397/mo, Full Stack $697/mo. AI Marketing — Ad Batch $197/mo (5-10 ads/month), Monthly Batch $247/mo. All plans are monthly, no contracts, cancel anytime, delivered within 48 hours. If someone seems ready to buy or asks how to get started, direct them to strikepath.co/services. Keep answers short and helpful."

type Message = { role: 'user' | 'assistant'; content: string }

function extractLead(messages: Message[]) {
  const text = messages.map(m => m.content).join(' ')
  const email = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)?.[0] ?? null
  const name = text.match(/(?:i'?m|my name is|name(?:'s| is))\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i)?.[1] ?? null
  return { email, name }
}

export async function POST(req: NextRequest) {
  try {
    const { messages }: { messages: Message[] } = await req.json()

    const lead = extractLead(messages)
    if (lead.email) {
      console.log('[StrikePath Lead]', lead)
    }

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
    })

    const content = response.content[0].type === 'text' ? response.content[0].text : ''
    return NextResponse.json({ content })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Chat error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
