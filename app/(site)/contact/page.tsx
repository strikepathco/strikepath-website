import type { Metadata } from 'next'
import ContactForm from '@/app/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | StrikePath',
  description:
    'Get in touch with StrikePath. We respond within 24 hours with a clear path forward.',
}

export default function ContactPage() {
  return (
    <main className="px-8 sm:px-14 lg:px-28 py-24 md:py-32">
      <div style={{ maxWidth: '36rem' }}>
        <span className="eyebrow mb-5">Contact</span>
        <h1
          className="font-display font-extralight text-bone"
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
            letterSpacing: '-0.025em',
            lineHeight: 0.9,
            marginTop: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          Get in touch.
        </h1>
        <ContactForm />
      </div>
    </main>
  )
}
