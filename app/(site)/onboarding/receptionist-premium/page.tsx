import type { Metadata } from 'next'
import OnboardingPage from '@/app/components/OnboardingPage'

export const metadata: Metadata = {
  title: 'AI Receptionist Premium Onboarding | StrikePath',
  robots: { index: false, follow: false },
}

export default function ReceptionistPremiumOnboarding() {
  return (
    <OnboardingPage
      eyebrow="AI Receptionist Premium · Onboarding"
      heading="Let's set up your AI receptionist."
      tallyId="QKO9lg"
      formTitle="AI Receptionist Premium Onboarding Form"
    />
  )
}
