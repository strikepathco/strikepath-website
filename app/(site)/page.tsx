import HeroVideo from '@/app/components/HeroVideo'
import ContactForm from '@/app/components/ContactForm'

const features = [
  {
    num: '01',
    title: 'AI Websites',
    desc: 'Conversion-ready sites built in days, not months. Engineered around your goals from the first line of code.',
  },
  {
    num: '02',
    title: 'AI Automation',
    desc: 'Workflows that handle repetitive tasks automatically—so your team focuses on decisions, not admin.',
  },
  {
    num: '03',
    title: 'AI Chatbots',
    desc: 'Customer service running 24/7. Every question answered, every lead captured, every hour of the day.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We understand your business, goals, and pain points through a brief call. No jargon, no lengthy intake forms—just a focused conversation that shapes everything we build.',
  },
  {
    num: '02',
    title: 'Build',
    desc: 'Our AI tools construct your solution while you stay in the loop. You see progress at every stage and can redirect at any point—your input is built into the process, not added after.',
  },
  {
    num: '03',
    title: 'Test & Iterate',
    desc: 'We refine based on your feedback until it is exactly right. Real-world testing against your actual use cases, not hypotheticals.',
  },
  {
    num: '04',
    title: 'Deploy & Scale',
    desc: 'Your solution goes live and we train your team to use it. We stay available after launch—your success is the metric, not the delivery date.',
  },
]

export default function HomePage() {
  return (
    <main className="noise">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <HeroVideo>
        <div className="px-8 sm:px-14 lg:px-28 pb-16 sm:pb-20" style={{ maxWidth: '72rem' }}>

          <h1
            className="font-display font-extralight text-bone leading-[0.85] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 10rem)' }}
          >
            StrikePath
          </h1>

          <p
            className="font-display font-light gold-shine"
            style={{
              fontSize: 'clamp(1.1rem, 2.4vw, 1.9rem)',
              lineHeight: 1.3,
              marginTop: '0.75em',
              maxWidth: '32rem',
            }}
          >
            Your business runs on AI.<br />So you focus on growth.
          </p>

          <p
            className="font-sans font-light text-bone-dim"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
              lineHeight: 1.9,
              marginTop: '1.25rem',
              maxWidth: '36rem',
            }}
          >
            We build AI websites, automation workflows, and intelligent chatbots
            that save your team time and money—so you can spend less time on
            operations and more time scaling. Serving businesses nationwide.
          </p>

          <div className="hairline" style={{ margin: '2rem 0', maxWidth: '440px' }} />

          <div className="flex flex-wrap gap-4 items-center">
            <button className="btn-gold"><span>Start a project</span></button>
            <button className="btn-ghost">See our work →</button>
          </div>

        </div>
      </HeroVideo>

      {/* ── Feature grid ─────────────────────────────────────────────────────── */}
      <section id="services" className="px-8 sm:px-14 lg:px-28 pt-20 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {features.map(({ num, title, desc }) => (
            <div
              key={num}
              style={{ borderTop: '1px solid var(--line)', paddingTop: '1.75rem' }}
            >
              <span className="eyebrow">{num}</span>
              <h3
                className="font-display font-light text-bone"
                style={{
                  fontSize: 'clamp(1.25rem, 1.8vw, 1.65rem)',
                  letterSpacing: '-0.01em',
                  marginTop: '1rem',
                  marginBottom: '0.8rem',
                }}
              >
                {title}
              </h3>
              <p
                className="font-sans font-light text-bone-dim"
                style={{ fontSize: '1rem', lineHeight: 1.85 }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How We Work ──────────────────────────────────────────────────────── */}
      <section id="process" className="px-8 sm:px-14 lg:px-28 pb-28 md:pb-36">

        {/* Section header */}
        <span className="eyebrow mb-5">Process</span>
        <h2
          className="font-display font-extralight text-bone"
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
            letterSpacing: '-0.025em',
            lineHeight: 0.9,
            marginTop: '1.25rem',
            marginBottom: '4rem',
          }}
        >
          How We<br />Work
        </h2>

        {/* Timeline */}
        <div className="relative" style={{ maxWidth: '42rem' }}>

          {/* Vertical connector line */}
          <div
            className="absolute"
            style={{
              left: '0.6875rem',
              top: '0.5rem',
              bottom: '1rem',
              width: '1px',
              background: 'linear-gradient(to bottom, var(--gold-deep) 0%, var(--line-strong) 50%, var(--line) 80%, transparent 100%)',
            }}
          />

          {steps.map(({ num, title, desc }, i) => (
            <div
              key={num}
              className="relative"
              style={{ paddingLeft: '2.75rem', paddingBottom: i < steps.length - 1 ? '3.25rem' : 0 }}
            >
              {/* Diamond marker on the line */}
              <div
                className="absolute"
                style={{
                  left: '0.3125rem',
                  top: '0.3rem',
                  width: '9px',
                  height: '9px',
                  background: i === 0 ? 'var(--gold)' : 'var(--gold-deep)',
                  transform: 'rotate(45deg)',
                  flexShrink: 0,
                }}
              />

              <span className="eyebrow">{num}</span>
              <h3
                className="font-display font-light text-bone"
                style={{
                  fontSize: 'clamp(1.25rem, 2vw, 1.65rem)',
                  letterSpacing: '-0.01em',
                  marginTop: '0.65rem',
                  marginBottom: '0.6rem',
                }}
              >
                {title}
              </h3>
              <p
                className="font-sans font-light text-bone-dim"
                style={{ fontSize: '1rem', lineHeight: 1.85 }}
              >
                {desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────────── */}
      <section id="contact" className="px-8 sm:px-14 lg:px-28 pb-28 md:pb-36">

        <div className="hairline" style={{ marginBottom: '4rem' }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: headline */}
          <div>
            <span className="eyebrow mb-5">Contact</span>
            <h2
              className="font-display font-extralight text-bone"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
                letterSpacing: '-0.025em',
                lineHeight: 0.9,
                marginTop: '1.25rem',
              }}
            >
              Ready to build<br />something great?
            </h2>
            <p
              className="font-sans font-light text-bone-dim"
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
                lineHeight: 1.9,
                marginTop: '2rem',
                maxWidth: '26rem',
              }}
            >
              Tell us about your project. We'll respond within 24 hours with a clear
              path forward—no obligation, no sales pressure.
            </p>
          </div>

          {/* Right: form */}
          <ContactForm />

        </div>
      </section>

    </main>
  )
}
