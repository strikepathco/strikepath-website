import type { Metadata } from 'next'
import OnboardingPage from '@/app/components/OnboardingPage'

export const metadata: Metadata = {
  title: 'AI Marketing Premium Onboarding | StrikePath',
  robots: { index: false, follow: false },
}

export default function MarketingPremiumOnboarding() {
  return (
    <OnboardingPage
      eyebrow="AI Marketing Premium · Onboarding"
      heading="Let's launch your AI marketing."
      tallyId="D4MY7R"
      formTitle="AI Marketing Premium Onboarding Form"
    />
  )
}
