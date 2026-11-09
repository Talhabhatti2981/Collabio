import { useState } from 'react'
import { Link } from 'react-router-dom'
import AppChrome from '../components/AppChrome'

type DealStatus = 'active' | 'completed' | 'draft'
export type BrandDeal = { id: string; title: string; creator: string; status: DealStatus; href: string; detail?: string }

type Props = { deals?: BrandDeal[] }
const filters: { value: 'all' | DealStatus; label: string }[] = [
  { value: 'all', label: 'All deals' }, { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' }, { value: 'draft', label: 'Drafts' },
]

export default function BrandDashboardPage({ deals = [] }: Props) {
  const [filter, setFilter] = useState<(typeof filters)[number]['value']>('all')
  const visibleDeals = filter === 'all' ? deals : deals.filter((deal) => deal.status === filter)
  return (
    <AppChrome>
      <div className="mx-auto max-w-[848px] px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div><h1 className="text-[28px] font-semibold tracking-tight sm:text-[32px]">Deals</h1><p className="mt-2 max-w-xl text-base leading-6">Keep track of your creator partnerships in one place.</p></div>
          <Link to="/deals/new" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-ink px-5 text-sm font-semibold text-paper hover:bg-ink/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">Start a deal <span aria-hidden="true" className="ml-3 text-lg">+</span></Link>
        </div>
        <section aria-labelledby="deals-heading" className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-ink pb-3"><h2 id="deals-heading" className="text-xl font-semibold">Your deals</h2><span className="text-sm">{deals.length} {deals.length === 1 ? 'deal' : 'deals'}</span></div>
          <div aria-label="Filter deals" className="mt-5 flex flex-wrap gap-2">
            {filters.map((item) => <button key={item.value} type="button" aria-pressed={filter === item.value} onClick={() => setFilter(item.value)} className={`min-h-11 rounded-lg px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${filter === item.value ? 'bg-ink text-paper' : 'border border-ink/40 hover:bg-ink/10'}`}>{item.label}</button>)}
          </div>
          {visibleDeals.length ? <div className="mt-6 grid gap-4">{visibleDeals.map((deal) => <article key={deal.id} className="rounded-lg border border-line bg-panel p-5 sm:p-6"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-sm font-semibold text-ink">{deal.status}</p><h3 className="mt-2 text-lg font-semibold">{deal.title}</h3><p className="mt-1 text-sm">{deal.creator}</p>{deal.detail && <p className="mt-3 text-sm">{deal.detail}</p>}</div><Link to={deal.href} className="inline-flex min-h-11 items-center rounded-lg border border-ink/50 px-4 text-sm font-semibold hover:bg-ink/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">View deal</Link></div></article>)}</div> : <div className="mt-6 rounded-lg border border-line bg-panel px-6 py-8 text-left"><h3 className="text-lg font-semibold">{filter === 'all' ? 'No deals to show yet' : `No ${filter} deals`}</h3><p className="mt-2 max-w-md text-sm leading-6 text-ink/75">{filter === 'all' ? 'When deals are available, you can manage them here.' : 'Try another filter to see more deals.'}</p>{filter === 'all' && <Link to="/deals/new" className="mt-5 inline-flex min-h-11 items-center rounded-lg border border-ink/50 px-4 text-sm font-semibold hover:bg-ink/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">Start a deal</Link>}</div>}
        </section>
      </div>
    </AppChrome>
  )
}
