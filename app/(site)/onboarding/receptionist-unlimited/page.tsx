import type { Metadata } from 'next'
import OnboardingPage from '@/app/components/OnboardingPage'

export const metadata: Metadata = {
  title: 'AI Receptionist Unlimited Onboarding | StrikePath',
  robots: { index: false, follow: false },
}

export default function ReceptionistUnlimitedOnboarding() {
  return (
    <OnboardingPage
      eyebrow="AI Receptionist Unlimited · Onboarding"
      heading="Let's set up your AI receptionist."
      tallyId="QKO9lg"
      formTitle="AI Receptionist Unlimited Onboarding Form"
    />
  )
}
