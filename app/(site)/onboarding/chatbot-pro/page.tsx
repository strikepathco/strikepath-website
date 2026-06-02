import type { Metadata } from 'next'
import OnboardingPage from '@/app/components/OnboardingPage'

export const metadata: Metadata = {
  title: 'AI Chatbot Pro Onboarding | StrikePath',
  robots: { index: false, follow: false },
}

export default function ChatbotProOnboarding() {
  return (
    <OnboardingPage
      eyebrow="AI Chatbot Pro · Onboarding"
      heading="Let's build your Pro chatbot."
      tallyId="J9Wjb4"
      formTitle="AI Chatbot Pro Onboarding Form"
    />
  )
}
