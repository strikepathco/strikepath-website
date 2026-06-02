import type { Metadata } from 'next'
import OnboardingPage from '@/app/components/OnboardingPage'

export const metadata: Metadata = {
  title: 'AI Marketing Ad Batch Onboarding | StrikePath',
  robots: { index: false, follow: false },
}

export default function MarketingBasicOnboarding() {
  return (
    <OnboardingPage
      eyebrow="AI Marketing Ad Batch · Onboarding"
      heading="Let's launch your AI marketing."
      tallyId="TALLY_FORM_ID"
      formTitle="AI Marketing Ad Batch Onboarding Form"
    />
  )
}
