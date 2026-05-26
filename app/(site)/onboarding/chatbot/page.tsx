import type { Metadata } from 'next'
import OnboardingPage from '@/app/components/OnboardingPage'

export const metadata: Metadata = {
  title: 'AI Chatbot Onboarding | StrikePath',
  robots: { index: false, follow: false },
}

export default function ChatbotOnboarding() {
  return (
    <OnboardingPage
      eyebrow="AI Chatbot · Onboarding"
      heading="Let's build your chatbot."
      tallyId="Xx2AaO"
      formTitle="AI Chatbot Onboarding Form"
    />
  )
}
