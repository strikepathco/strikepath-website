import type { Metadata } from 'next'
import OnboardingPage from '@/app/components/OnboardingPage'

export const metadata: Metadata = {
  title: 'AI Receptionist Standard Onboarding | StrikePath',
  robots: { index: false, follow: false },
}

export default function ReceptionistStandardOnboarding() {
  return (
    <OnboardingPage
      eyebrow="AI Receptionist Standard · Onboarding"
      heading="Let's set up your AI receptionist."
      tallyId="LZkgKp"
      formTitle="AI Receptionist Standard Onboarding Form"
    />
  )
}
