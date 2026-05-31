'use client'
import { useState } from 'react'

type TabId = 'chatbot' | 'receptionist' | 'automation' | 'marketing'

const TABS: { id: TabId; label: string }[] = [
  { id: 'chatbot',      label: 'AI Chatbot' },
  { id: 'receptionist', label: 'AI Receptionist' },
  { id: 'automation',   label: 'AI Automation' },
  { id: 'marketing',    label: 'AI Marketing' },
]

const HEADLINES: Record<TabId, string> = {
  chatbot:      'How much does answering the same questions cost you?',
  receptionist: 'What is your phone eating every week?',
  automation:   'The cost of doing it the old way.',
  marketing:    'What does ad creation actually cost you?',
}

// ── style constants ──────────────────────────────────────────────────────────

const monoXs: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.58rem',
  fontWeight: 300,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--bone-dim)',
}

// ── helpers ──────────────────────────────────────────────────────────────────

function dollar(n: number) {
  return '$' + Math.round(n).toLocaleString('en-US')
}

// ── Slider ───────────────────────────────────────────────────────────────────

function Slider({
  label, min, max, step = 1, value, onChange, display,
}: {
  label: string; min: number; max: number; step?: number
  value: number; onChange: (v: number) => void; display: string
}) {
  const pct = Math.round(((value - min) / (max - min)) * 100)
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.65rem' }}>
        <span style={monoXs}>{label}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 400, color: 'var(--gold)', letterSpacing: '0.06em' }}>
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="roi-slider"
        style={{ '--roi-fill': `${pct}%` } as React.CSSProperties}
      />
    </div>
  )
}

// ── PlanSelect ───────────────────────────────────────────────────────────────

function PlanSelect({
  value, onChange, options,
}: {
  value: string; onChange: (v: string) => void
  options: { value: string; label: string }[]
}) {
  return (
    <div>
      <span style={{ ...monoXs, display: 'block', marginBottom: '0.65rem' }}>Plan</span>
      <div style={{ position: 'relative' }}>
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          className="roi-select"
          style={{
            width: '100%',
            background: 'var(--ink-panel)',
            border: '1px solid var(--line)',
            color: 'var(--bone)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.1em',
            padding: '0.65rem 2rem 0.65rem 0.75rem',
            cursor: 'pointer',
            outline: 'none',
            appearance: 'none',
            WebkitAppearance: 'none',
            borderRadius: '0',
          } as React.CSSProperties}
        >
          {options.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <span style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--bone-dim)', pointerEvents: 'none', fontSize: '0.55rem' }}>▾</span>
      </div>
    </div>
  )
}

// ── Main ─────────────────────────────────────────────────────────────────────

export default function ROICalculator() {
  const [activeTab, setActiveTab] = useState<TabId>('chatbot')

  // chatbot
  const [cbInquiries, setCbInquiries] = useState(50)
  const [cbMinutes,   setCbMinutes]   = useState(10)
  const [cbRate,      setCbRate]      = useState(50)
  const [cbPlan,      setCbPlan]      = useState('1788')

  // receptionist
  const [recCalls,   setRecCalls]   = useState(50)
  const [recMinutes, setRecMinutes] = useState(8)
  const [recRate,    setRecRate]    = useState(50)
  const [recPlan,    setRecPlan]    = useState('4188')

  // automation
  const [autoHours, setAutoHours] = useState(10)
  const [autoRate,  setAutoRate]  = useState(50)
  const [autoWeeks, setAutoWeeks] = useState(48)
  const [autoPlan,  setAutoPlan]  = useState('3564')

  // marketing
  const [mktHours, setMktHours] = useState(5)
  const [mktRate,  setMktRate]  = useState(50)
  const [mktSpend, setMktSpend] = useState(500)
  const [mktPlan,  setMktPlan]  = useState('2364')

  // ── calculations ─────────────────────────────────────────────────────────

  const { annualCost, savings, investment } = (() => {
    if (activeTab === 'chatbot') {
      const c = ((cbInquiries * cbMinutes) / 60) * 48 * cbRate
      return { annualCost: c, savings: c * 0.80, investment: Number(cbPlan) }
    }
    if (activeTab === 'receptionist') {
      const c = ((recCalls * recMinutes) / 60) * 48 * recRate
      return { annualCost: c, savings: c * 0.75, investment: Number(recPlan) }
    }
    if (activeTab === 'automation') {
      const c = autoHours * autoWeeks * autoRate
      return { annualCost: c, savings: c * 0.60, investment: Number(autoPlan) }
    }
    // marketing
    const c = mktHours * 48 * mktRate + mktSpend * 12
    return { annualCost: c, savings: c * 0.70, investment: Number(mktPlan) }
  })()

  const roiPct         = investment > 0 ? ((savings - investment) / investment) * 100 : 0
  const paybackMonths  = savings > 0 ? Math.ceil(investment / (savings / 12)) : null

  const metrics = [
    { label: 'Annual cost',       value: dollar(annualCost),                                                          accent: false },
    { label: 'Est. annual savings', value: dollar(savings),                                                           accent: true  },
    { label: 'First-year ROI',    value: roiPct >= 0 ? `+${Math.round(roiPct)}%` : `${Math.round(roiPct)}%`,         accent: roiPct > 0 },
    { label: 'Payback period',    value: paybackMonths !== null ? `${paybackMonths} mo` : '—',                        accent: false },
  ]

  return (
    <>
      <style>{`
        .roi-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 3px;
          border-radius: 2px;
          background: linear-gradient(
            to right,
            var(--gold) 0%,
            var(--gold) var(--roi-fill),
            var(--line) var(--roi-fill),
            var(--line) 100%
          );
          cursor: pointer;
          outline: none;
          display: block;
        }
        .roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--gold);
          border: 2px solid #000;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .roi-slider::-webkit-slider-thumb:hover {
          transform: scale(1.25);
          box-shadow: 0 0 0 4px rgba(232,160,76,0.20);
        }
        .roi-slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--gold);
          border: 2px solid #000;
          cursor: pointer;
        }
        .roi-select option {
          background: #111;
          color: #ece3cc;
        }
        @keyframes roi-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .roi-tab-content { animation: roi-in 0.22s ease both; }
      `}</style>

      {/* Tab switcher */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        {TABS.map(tab => {
          const active = tab.id === activeTab
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                fontWeight: active ? 400 : 300,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '0.5rem 1.1rem',
                borderRadius: '9999px',
                border: `1px solid ${active ? 'var(--gold)' : 'var(--line-strong)'}`,
                background: active ? 'var(--gold)' : 'transparent',
                color: active ? '#000' : 'var(--bone-dim)',
                cursor: 'pointer',
                transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Tab content — key triggers fade-in animation on tab switch */}
      <div key={activeTab} className="roi-tab-content">
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 300,
          fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)',
          color: 'var(--bone-dim)',
          lineHeight: 1.75,
          marginBottom: '2rem',
        }}>
          {HEADLINES[activeTab]}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
        }}>

          {/* Inputs */}
          <div>
            {activeTab === 'chatbot' && <>
              <Slider label="Customer inquiries / week" min={1}  max={200} value={cbInquiries} onChange={setCbInquiries} display={String(cbInquiries)} />
              <Slider label="Avg. time per inquiry"     min={2}  max={30}  value={cbMinutes}   onChange={setCbMinutes}   display={`${cbMinutes} min`} />
              <Slider label="Your hourly rate"          min={25} max={500} step={5} value={cbRate} onChange={setCbRate} display={`$${cbRate}/hr`} />
              <PlanSelect value={cbPlan} onChange={setCbPlan} options={[
                { value: '1788', label: 'Starter — $149/mo ($1,788/yr)' },
                { value: '2988', label: 'Pro — $249/mo ($2,988/yr)' },
              ]} />
            </>}

            {activeTab === 'receptionist' && <>
              <Slider label="Calls per week"     min={1}  max={200} value={recCalls}   onChange={setRecCalls}   display={String(recCalls)} />
              <Slider label="Avg. call length"   min={2}  max={20}  value={recMinutes} onChange={setRecMinutes} display={`${recMinutes} min`} />
              <Slider label="Your hourly rate"   min={25} max={500} step={5} value={recRate} onChange={setRecRate} display={`$${recRate}/hr`} />
              <PlanSelect value={recPlan} onChange={setRecPlan} options={[
                { value: '4188', label: 'Standard — $349/mo ($4,188/yr)' },
                { value: '6588', label: 'Unlimited — $549/mo ($6,588/yr)' },
              ]} />
            </>}

            {activeTab === 'automation' && <>
              <Slider label="Hours / week on manual tasks" min={1}  max={40}  value={autoHours} onChange={setAutoHours} display={`${autoHours} hrs`} />
              <Slider label="Your hourly rate"             min={25} max={500} step={5} value={autoRate} onChange={setAutoRate} display={`$${autoRate}/hr`} />
              <Slider label="Working weeks / year"         min={30} max={52}  value={autoWeeks} onChange={setAutoWeeks} display={`${autoWeeks} wks`} />
              <PlanSelect value={autoPlan} onChange={setAutoPlan} options={[
                { value: '3564', label: 'Single Workflow — $297/mo ($3,564/yr)' },
                { value: '4764', label: 'Multi-Step — $397/mo ($4,764/yr)' },
                { value: '8364', label: 'Full Stack — $697/mo ($8,364/yr)' },
              ]} />
            </>}

            {activeTab === 'marketing' && <>
              <Slider label="Hours / week on marketing"         min={1}  max={20}   value={mktHours} onChange={setMktHours} display={`${mktHours} hrs`} />
              <Slider label="Your hourly rate"                  min={25} max={500}  step={5} value={mktRate} onChange={setMktRate} display={`$${mktRate}/hr`} />
              <Slider label="Monthly freelancer / agency spend" min={0}  max={5000} step={50} value={mktSpend} onChange={setMktSpend} display={`$${mktSpend.toLocaleString()}/mo`} />
              <PlanSelect value={mktPlan} onChange={setMktPlan} options={[
                { value: '2364', label: 'Ad Batch — $197/mo ($2,364/yr)' },
                { value: '5964', label: 'Marketing Premium — $497/mo ($5,964/yr)' },
              ]} />
            </>}
          </div>

          {/* Results */}
          <div style={{ background: 'var(--ink-soft)', border: '1px solid var(--line)' }}>
            {/* 2×2 metric grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              {metrics.map((m, i) => (
                <div key={m.label} style={{
                  padding: '1.5rem 1.25rem',
                  borderBottom: i < 2 ? '1px solid var(--line)' : 'none',
                  borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none',
                }}>
                  <p style={monoXs}>{m.label}</p>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 200,
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                    letterSpacing: '-0.02em',
                    color: m.accent ? 'var(--gold)' : 'var(--bone)',
                    lineHeight: 1.1,
                    marginTop: '0.35rem',
                  }}>
                    {m.value}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ padding: '1.5rem 1.25rem', borderTop: '1px solid var(--line)' }}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '0.88rem',
                color: 'var(--bone-dim)',
                lineHeight: 1.7,
                marginBottom: '1.1rem',
              }}>
                Your business could save{' '}
                <span style={{ color: 'var(--gold)', fontWeight: 400 }}>{dollar(savings)}</span>{' '}
                this year.
              </p>
              <a
                href="/services"
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  fontWeight: 400,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#000',
                  background: 'var(--gold)',
                  padding: '0.6rem 1.4rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.8' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
              >
                Get Started →
              </a>
            </div>
          </div>

        </div>

        {/* Footnote */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.52rem',
          fontWeight: 300,
          letterSpacing: '0.14em',
          color: 'rgba(236,227,204,0.28)',
          marginTop: '1.5rem',
          lineHeight: 1.7,
        }}>
          *Projected savings based on estimated inputs. Actual results vary and are not guaranteed.
        </p>
      </div>
    </>
  )
}
