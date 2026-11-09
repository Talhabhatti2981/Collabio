import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppChrome from './AppChrome'

type Draft = { title: string; deliverables: string; deadline: string; creator: string; budget: string; notes: string }
const blank: Draft = { title: '', deliverables: '', deadline: '', creator: '', budget: '', notes: '' }
const key = 'collabio-deal-draft'
const steps = [
  { title: 'Scope', path: '/deals/new' },
  { title: 'Creator', path: '/deals/new/counterparty' },
  { title: 'Budget', path: '/deals/new/escrow' },
  { title: 'Review', path: '/deals/new/terms' },
]
const control = 'mt-2 min-h-11 w-full rounded-lg border border-ink/60 bg-paper px-3 py-2 text-base outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper'
function loadDraft(): Draft {
  try { return { ...blank, ...JSON.parse(sessionStorage.getItem(key) || '{}') } } catch { return blank }
}
export default function DealWizard({ step }: { step: number }) {
  const navigate = useNavigate()
  const [draft, setDraft] = useState<Draft>(loadDraft)
  function update(field: keyof Draft, value: string) {
    const next = { ...draft, [field]: value }
    setDraft(next)
    sessionStorage.setItem(key, JSON.stringify(next))
  }
  function next(event: FormEvent<HTMLFormElement>) { event.preventDefault(); navigate(steps[step + 1].path) }
  return <AppChrome><div className="mx-auto max-w-[848px] px-4 py-10 sm:px-6 sm:py-12">
    <Link to="/deals" className="text-sm font-semibold text-ink underline-offset-4 hover:underline">← Back to deals</Link>
    <div className="mt-6"><p className="text-sm font-medium text-ink/75">New deal</p><h1 className="mt-2 text-[28px] font-semibold leading-9 tracking-tight sm:text-[32px]">{['Define the work', 'Choose a creator', 'Set the budget', 'Review your draft'][step]}</h1><p className="mt-2 text-base leading-6">{['Describe what you need for this collaboration.', 'Add the person you want to work with.', 'Enter the planned amount for this deal.', 'Check your details before moving forward.'][step]}</p></div>
    <ol aria-label="Deal creation progress" className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 border-t-2 border-ink pt-4 sm:grid-cols-4">{steps.map((item, index) => <li key={item.path} aria-current={step === index ? 'step' : undefined} className={`border-b-2 px-1 py-3 text-sm ${step === index ? 'border-ink font-semibold text-ink' : 'border-line text-ink/75'}`}><span className="mr-2">{index + 1}.</span>{item.title}</li>)}</ol>
    <div className="mt-6 rounded-lg border border-line bg-panel p-5 sm:p-8">
      {step < 3 ? <form onSubmit={next} className="space-y-6">
        {step === 0 && <><div><label htmlFor="title" className="text-sm font-semibold">Deal title</label><input id="title" className={control} value={draft.title} onChange={e => update('title', e.target.value)} required /></div><div><label htmlFor="deliverables" className="text-sm font-semibold">Deliverables</label><textarea id="deliverables" className={control} rows={4} value={draft.deliverables} onChange={e => update('deliverables', e.target.value)} required /></div><div><label htmlFor="deadline" className="text-sm font-semibold">Target date <span className="font-normal">(optional)</span></label><input id="deadline" className={control} type="date" value={draft.deadline} onChange={e => update('deadline', e.target.value)} /></div></>}
        {step === 1 && <div><label htmlFor="creator" className="text-sm font-semibold">Creator email</label><p className="mt-1 text-sm">Enter their email to include it in your draft. No invitation will be sent yet.</p><input id="creator" className={control} type="email" value={draft.creator} onChange={e => update('creator', e.target.value)} required /></div>}
        {step === 2 && <><div><label htmlFor="budget" className="text-sm font-semibold">Planned budget (PKR)</label><input id="budget" className={control} type="number" min="1" step="0.01" value={draft.budget} onChange={e => update('budget', e.target.value)} required /></div><div><label htmlFor="notes" className="text-sm font-semibold">Additional notes <span className="font-normal">(optional)</span></label><textarea id="notes" className={control} rows={3} value={draft.notes} onChange={e => update('notes', e.target.value)} /></div><p className="text-sm leading-6">This is a draft. Payments and escrow are not connected.</p></>}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">{step > 0 ? <Link className="inline-flex min-h-11 items-center rounded-lg border border-ink/50 px-4 text-sm font-semibold" to={steps[step - 1].path}>Back</Link> : <span />}<button className="min-h-11 rounded-lg bg-ink px-5 text-sm font-semibold text-paper hover:bg-ink/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink" type="submit">Continue</button></div>
      </form> : <><dl className="divide-y divide-ink/15">{([['Deal title', draft.title], ['Deliverables', draft.deliverables], ['Target date', draft.deadline], ['Creator email', draft.creator], ['Budget (PKR)', draft.budget], ['Notes', draft.notes]] as const).map(([label, value]) => <div key={label} className="grid gap-1 py-4 first:pt-0 sm:grid-cols-3"><dt className="text-sm font-semibold">{label}</dt><dd className="whitespace-pre-wrap text-sm sm:col-span-2">{value || 'Not provided'}</dd></div>)}</dl><p className="mt-6 border-l-2 border-ink pl-3 text-sm leading-6">Your draft is stored in this browser session only. Deal creation, invitations, and payments are not connected yet.</p><div className="mt-6 flex flex-wrap gap-3"><Link to={steps[2].path} className="inline-flex min-h-11 items-center rounded-lg border border-ink/50 px-4 text-sm font-semibold">Back</Link><Link to="/deals" className="inline-flex min-h-11 items-center rounded-lg bg-ink px-5 text-sm font-semibold text-paper">Return to deals</Link></div></>}
    </div>
  </div></AppChrome>
}
