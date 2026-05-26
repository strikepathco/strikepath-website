import type { Metadata } from 'next'
import OnboardingPage from '@/app/components/OnboardingPage'

export const metadata: Metadata = {
  title: 'AI Automation Onboarding | StrikePath',
  robots: { index: false, follow: false },
}

export default function AutomationOnboarding() {
  return (
    <OnboardingPage
      eyebrow="AI Automation · Onboarding"
      heading="Let's automate your workflow."
      tallyId="obkN8V"
      formTitle="AI Automation Onboarding Form"
    />
  )
}
