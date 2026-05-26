import type { Metadata } from 'next'
import OnboardingPage from '@/app/components/OnboardingPage'

export const metadata: Metadata = {
  title: 'AI Receptionist Onboarding | StrikePath',
  robots: { index: false, follow: false },
}

export default function ReceptionistOnboarding() {
  return (
    <OnboardingPage
      eyebrow="AI Receptionist · Onboarding"
      heading="Let's set up your receptionist."
      tallyId="QKO9lg"
      formTitle="AI Receptionist Onboarding Form"
    />
  )
}
