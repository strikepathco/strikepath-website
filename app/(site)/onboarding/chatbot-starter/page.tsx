import type { Metadata } from 'next'
import OnboardingPage from '@/app/components/OnboardingPage'

export const metadata: Metadata = {
  title: 'AI Chatbot Starter Onboarding | StrikePath',
  robots: { index: false, follow: false },
}

export default function ChatbotStarterOnboarding() {
  return (
    <OnboardingPage
      eyebrow="AI Chatbot Starter · Onboarding"
      heading="Let's build your chatbot."
      tallyId="TALLY_FORM_ID"
      formTitle="AI Chatbot Starter Onboarding Form"
    />
  )
}
