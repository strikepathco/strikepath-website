import Script from 'next/script'

type Props = {
  eyebrow: string
  heading: string
  tallyId: string
  formTitle: string
}

export default function OnboardingPage({ eyebrow, heading, tallyId, formTitle }: Props) {
  const tallyUrl = `https://tally.so/embed/${tallyId}?alignLeft=1&hideTitle=1&transparentBackground=1`

  return (
    <main className="noise px-8 sm:px-14 lg:px-28 py-20 md:py-28">
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />

      <div style={{ maxWidth: '52rem' }}>

        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>
          {eyebrow}
        </span>

        <h1
          className="font-display font-extralight text-bone"
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
            letterSpacing: '-0.025em',
            lineHeight: 0.9,
            marginBottom: '1.75rem',
          }}
        >
          {heading}
        </h1>

        <p
          className="font-sans font-light"
          style={{
            fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
            lineHeight: 1.85,
            color: 'rgba(236, 227, 204, 0.55)',
            maxWidth: '36rem',
            marginBottom: '3rem',
          }}
        >
          Payment confirmed. Fill out the form below and we'll reach out within 24 hours
          to get everything set up — no waiting, no guesswork.
        </p>

        <div className="hairline" style={{ marginBottom: '2.5rem' }} />

        <iframe
          data-tally-src={tallyUrl}
          width="100%"
          height="500"
          title={formTitle}
          style={{ border: 'none', display: 'block' }}
        />

      </div>
    </main>
  )
}
