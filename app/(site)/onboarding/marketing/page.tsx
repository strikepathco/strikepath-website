import type { Metadata } from 'next'
import OnboardingPage from '@/app/components/OnboardingPage'

export const metadata: Metadata = {
  title: 'AI Marketing Onboarding | StrikePath',
  robots: { index: false, follow: false },
}

export default function MarketingOnboarding() {
  return (
    <OnboardingPage
      eyebrow="AI Marketing · Onboarding"
      heading="Let's launch your campaigns."
      tallyId="Xx2AaO"
      formTitle="AI Marketing Onboarding Form"
    />
  )
}
