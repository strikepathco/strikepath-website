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
      tallyId="obkN8V"
      formTitle="AI Receptionist Onboarding Form"
    />
  )
}
