import { useState, type ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { pkr } from '../money'
import Icon from './Icon'

type RowProps = {
  icon: string
  children: ReactNode
  strike?: boolean
  tone?: 'muted' | 'offer'
}

function Row({ icon, children, strike = false, tone = 'muted' }: RowProps) {
  const text =
    tone === 'offer' ? 'font-medium text-on-surface' : 'text-on-surface-variant'
  return (
    <div className={`flex items-center gap-2 ${text}`}>
      <Icon className="text-[16px]" name={icon} />
      <span className={strike ? 'line-through' : undefined}>{children}</span>
    </div>
  )
}

export default function CounterOfferPage() {
  const navigate = useNavigate()
  const [authorized, setAuthorized] = useState(false)
  const [rail, setRail] = useState<'bank' | 'card'>('bank')

  return (
    <main className="min-h-screen w-full bg-surface pt-16">
      <div className="mx-auto w-full max-w-[1200px] px-margin-mobile py-8 md:px-margin md:py-10">
        <div className="flex flex-col justify-between gap-4 border-b border-outline-variant/30 pb-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
            <Link className="flex items-center gap-1 transition-colors hover:text-primary" to="/deals">
              <Icon className="text-[16px]" name="folder_open" />
              Deals
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="font-medium text-on-surface">Deal #UK-5028 (Lumina × Charlotte)</span>
            <span className="text-outline-variant">/</span>
            <span className="font-semibold text-primary">Review Counter-Proposal</span>
          </div>
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-surface-container-high px-3 py-1.5 font-label-sm text-label-sm text-on-surface shadow-sm sm:self-auto">
            <Icon className="animate-pulse text-[16px] text-tertiary" name="timer" />
            <span className="font-semibold text-tertiary">48h Review Window:</span>
            <span className="font-medium text-on-surface">41 hrs 14 mins remaining</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-surface-container-highest px-2.5 py-1 font-label-sm text-label-sm font-semibold tracking-wide text-on-surface-variant uppercase">
                Deal #UK-5028
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-tertiary-fixed/40 px-2.5 py-1 font-label-sm text-label-sm font-bold text-tertiary">
                <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
                Creator Redline Submitted
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-fixed/60 px-2.5 py-1 font-label-sm text-label-sm font-semibold text-primary">
                Action Required: Review & Top-Up Escrow
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl tracking-tight text-on-surface">
              Review Creator Counter-Offer & Authorize Escrow Top-Up
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Charlotte Emily Clark has proposed 3 bilateral modifications to Deal #UK-5028. To
              execute the revised pact, approve the redline schedule and fund the {pkr(318)} escrow
              delta into the segregated custody vault.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3 rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-3.5 shadow-sm">
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-high font-headline-sm text-headline-sm font-semibold text-primary">
                CC
              </div>
              <span
                className="absolute -right-0.5 -bottom-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-on-secondary"
                title="KYC Level 3 Verified"
              >
                <Icon className="text-[12px] font-bold" name="verified" />
              </span>
            </div>
            <div>
              <div className="font-headline-sm text-headline-sm text-on-surface">
                Charlotte Emily Clark
              </div>
              <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                <span>@charlotte_creator</span>
                <span>•</span>
                <span className="font-semibold text-secondary">KYC Level 3 UK</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-outline-variant/40 bg-surface-container-low p-4 md:flex-row md:items-center md:p-5">
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
              <Icon className="text-[24px]" name="lock" />
            </div>
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                Current {pkr(1908)} Escrow Preserved
              </h2>
              <p className="mt-0.5 font-body-md text-body-md text-on-surface-variant">
                Your existing deposit remains 100% safeguarded under UK Electronic Money
                Regulations 2011 in Barclays Commercial client trust. Accepting this counter-offer
                requires locking an additional {pkr(318)}.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 rounded-lg border border-outline-variant/40 bg-surface-container-lowest px-3 py-1.5 font-label-sm text-label-sm text-on-surface">
            <Icon className="text-[16px] text-secondary" name="account_balance" />
            <span>Client Trust Vault A-8291</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-7 xl:col-span-8">
            <div className="relative overflow-hidden rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-sm">
              <div className="absolute top-0 left-0 h-full w-1.5 bg-primary-container" />
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className="text-[20px] text-primary" name="chat" />
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    Creator Cover Note
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  18 Oct 2026, 16:45 GMT
                </span>
              </div>
              <blockquote className="rounded-lg bg-surface-container-low/60 p-4 font-body-md text-body-md text-on-surface italic">
                “Hi David, thanks for the contract! We’ve adjusted Milestone 1 to {pkr(1400)} to
                accommodate our custom 4K studio grading and 3D product motion mockup, plus shifted
                the live date by 7 days to Nov 25 so we have proper time for your team to review
                the unlisted cut. Spark Ads rate aligned with our 30-day whitelisting standard.
                Excited to get this rolling!”
              </blockquote>
            </div>

            <div className="flex flex-col justify-between gap-3 pt-2 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Contract Schedule Redline
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Side-by-side comparison between Initial Agreed Agreement and Charlotte's Proposal
                </p>
              </div>
              <div className="flex items-center gap-1.5 self-start rounded-lg bg-surface-container-high p-1 font-label-sm text-label-sm sm:self-auto">
                <button
                  className="rounded-md bg-surface-container-lowest px-2.5 py-1 font-semibold text-on-surface shadow-sm"
                  type="button"
                >
                  Split Diff
                </button>
                <button
                  className="rounded-md px-2.5 py-1 text-on-surface-variant hover:text-on-surface"
                  type="button"
                >
                  Changes Only (3)
                </button>
              </div>
            </div>

            <article className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-outline-variant/30 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 font-label-md text-label-md font-bold text-primary">
                    1
                  </span>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      Milestone 1: 60s–90s Dedicated YouTube Integration
                    </h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Primary Deliverable • Production Phase
                    </span>
                  </div>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-secondary-container/40 px-3 py-1 font-label-sm text-label-sm font-semibold text-on-secondary-container">
                  <Icon className="text-[14px]" name="trending_up" />
                  MODIFIED (+{pkr(200)}, +7 DAYS)
                </span>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2.5 rounded-lg bg-surface-container-low/50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-semibold text-on-surface-variant uppercase">
                      Initial Agreed Draft
                    </span>
                    <span className="font-headline-sm text-headline-sm text-outline line-through">
                      {pkr(1200)}
                    </span>
                  </div>
                  <div className="space-y-1.5 font-body-sm text-body-sm">
                    <Row icon="calendar_today" strike>
                      Due: 18 Nov 2026
                    </Row>
                    <Row icon="videocam">0:00–3:00 placement in video body</Row>
                    <Row icon="draw">Standard editing pass & 1 round of revisions</Row>
                  </div>
                </div>
                <div className="space-y-2.5 rounded-lg border-l-2 border-primary bg-primary-fixed/20 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-semibold text-primary uppercase">
                      Creator Counter-Offer
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                        {pkr(1400)}
                      </span>
                      <span className="font-label-sm text-label-sm font-bold text-secondary">
                        (+{pkr(200)})
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1.5 font-body-sm text-body-sm">
                    <div className="flex items-center gap-2 font-medium text-on-surface">
                      <Icon className="text-[16px] text-secondary" name="update" />
                      <span>
                        Due: 25 Nov 2026{' '}
                        <span className="font-semibold text-secondary">(+7 Days)</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 font-medium text-on-surface">
                      <Icon className="text-[16px] text-primary" name="high_quality" />
                      <span>High-retention 3:00–6:00 mid-roll window</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium text-on-surface">
                      <Icon className="text-[16px] text-primary" name="view_in_ar" />
                      <span>Custom 4K studio grade + 3D product motion mockup</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-outline-variant/30 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 font-label-md text-label-md font-bold text-primary">
                    2
                  </span>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      Milestone 2: 30-Day Spark Ads Whitelisting Authorization
                    </h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Paid Media Amplification Token
                    </span>
                  </div>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-secondary-container/40 px-3 py-1 font-label-sm text-label-sm font-semibold text-on-secondary-container">
                  <Icon className="text-[14px]" name="trending_up" />
                  MODIFIED (+{pkr(100)})
                </span>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2.5 rounded-lg bg-surface-container-low/50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-semibold text-on-surface-variant uppercase">
                      Initial Agreed Draft
                    </span>
                    <span className="font-headline-sm text-headline-sm text-outline line-through">
                      {pkr(600)}
                    </span>
                  </div>
                  <div className="space-y-1.5 font-body-sm text-body-sm">
                    <Row icon="calendar_today" strike>
                      Due: 25 Nov 2026
                    </Row>
                    <Row icon="tag">Standard 30-day whitelisting authorization</Row>
                  </div>
                </div>
                <div className="space-y-2.5 rounded-lg border-l-2 border-primary bg-primary-fixed/20 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-semibold text-primary uppercase">
                      Creator Counter-Offer
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                        {pkr(700)}
                      </span>
                      <span className="font-label-sm text-label-sm font-bold text-secondary">
                        (+{pkr(100)})
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1.5 font-body-sm text-body-sm">
                    <div className="flex items-center gap-2 font-medium text-on-surface">
                      <Icon className="text-[16px] text-secondary" name="update" />
                      <span>
                        Due: 2 Dec 2026{' '}
                        <span className="font-semibold text-secondary">(Aligned to Milestone 1)</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 font-medium text-on-surface">
                      <Icon className="text-[16px] text-primary" name="campaign" />
                      <span>TikTok Spark Ads token issuance via Creator Center</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-outline-variant/30 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-container-highest font-label-md text-label-md font-bold text-on-surface-variant">
                    §
                  </span>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      Schedule 3: Intellectual Property & Whitelisting Scope
                    </h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Licensing Rights Rider
                    </span>
                  </div>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-surface-container-high px-3 py-1 font-label-sm text-label-sm font-semibold text-on-surface">
                  <Icon className="text-[14px] text-secondary" name="gavel" />
                  LEGAL CLARIFICATION ACCEPTED
                </span>
              </div>
              <div className="mt-4 space-y-2 rounded-lg bg-surface-container-low/50 p-4">
                <div className="font-label-sm text-label-sm font-semibold text-on-surface-variant">
                  Clarification wording added by Creator:
                </div>
                <p className="font-body-sm text-body-sm leading-relaxed text-on-surface">
                  “Whitelisting rights granted under Milestone 2 are strictly confined to digital
                  TikTok Spark Ads paid campaigns targeted to UK/EU audiences. Broadcast linear TV,
                  out-of-home (OOH), and unapproved affiliate reselling remain expressly excluded
                  without executing a separate commercial rights rider.”
                </p>
              </div>
            </article>

            <div className="flex items-start gap-4 rounded-xl border border-outline-variant/40 bg-surface-container-low p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-on-surface">
                <Icon className="text-[20px] text-primary" name="balance" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    Harrison & Croft LLP Review Status
                  </span>
                  <span className="flex items-center gap-1 font-label-sm text-label-sm font-semibold text-secondary">
                    <Icon className="text-[14px]" name="check_circle" /> Pre-Approved Model
                  </span>
                </div>
                <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                  Harrison & Croft LLP (SRA Regulated): Proposed redline conforms with Standard
                  Creator Model 2.4. Statutory {pkr(75)} fast-track arbitration clause and escrow release
                  thresholds are maintained without jurisdictional risk.
                </p>
              </div>
            </div>
          </div>

          <aside className="sticky top-20 flex flex-col gap-5 lg:col-span-5 xl:col-span-4">
            <div className="rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-md">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
                <div>
                  <span className="font-label-sm text-label-sm font-semibold text-on-surface-variant uppercase">
                    Settlement Summary
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    Escrow Top-Up Ledger
                  </h2>
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <Icon className="text-[18px]" name="verified_user" />
                </span>
              </div>

              <div className="space-y-3 border-b border-outline-variant/30 py-4 font-body-md text-body-md">
                {(
                  [
                    { label: 'Existing Escrow Locked:', value: pkr(1908), strong: true },
                    { label: 'Revised Creator Net:', value: pkr(2100), strong: false },
                    { label: 'Pactly 6% Custody Fee:', value: pkr(126), strong: false },
                    { label: 'Total Revised Commitment:', value: pkr(2226), strong: true },
                  ] as const
                ).map(({ label, value, strong }) => (
                  <div key={label} className="flex items-center justify-between text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      {label}
                      {label.startsWith('Pactly') && (
                        <Icon
                          className="cursor-help text-[14px] text-outline"
                          name="help"
                        />
                      )}
                    </span>
                    <span className={strong ? 'font-semibold text-on-surface' : 'font-medium text-on-surface'}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl bg-surface-container p-4">
                <div>
                  <span className="font-label-sm text-label-sm font-bold text-primary uppercase">
                    Required Escrow Top-Up
                  </span>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    {pkr(300)} comp + {pkr(18)} fee
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-headline-xl text-headline-xl font-bold text-primary">
                    {pkr(318)}
                  </span>
                  <span className="block font-label-sm text-label-sm font-medium text-on-surface-variant">
                    GBP
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <span className="block font-label-sm text-label-sm font-semibold text-on-surface-variant uppercase">
                  Select Funding Rail
                </span>
                <label
                  className={`flex cursor-pointer items-start gap-3 rounded-xl p-3.5 transition-colors ${
                    rail === 'bank'
                      ? 'border-2 border-primary bg-primary-fixed/10'
                      : 'border border-outline-variant/60 bg-surface-container-lowest hover:bg-surface-container-low'
                  }`}
                >
                  <input
                    checked={rail === 'bank'}
                    className="mt-1 h-4 w-4 border-outline-variant text-primary"
                    name="payment_rail"
                    type="radio"
                    onChange={() => setRail('bank')}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-label-lg text-label-lg font-semibold text-on-surface">
                        Barclays Commercial UK
                      </span>
                      <span className="rounded bg-secondary/15 px-2 py-0.5 text-[11px] font-bold text-secondary">
                        0% Rail Fee
                      </span>
                    </div>
                    <p className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">
                      •••• 8219 • Available: {pkr(46342)}
                    </p>
                    <span className="mt-1 block font-label-sm text-label-sm font-medium text-secondary">
                      Instant settlement via Faster Payments
                    </span>
                  </div>
                </label>
                <label
                  className={`flex cursor-pointer items-start gap-3 rounded-xl p-3.5 transition-colors ${
                    rail === 'card'
                      ? 'border-2 border-primary bg-primary-fixed/10'
                      : 'border border-outline-variant/60 bg-surface-container-lowest hover:bg-surface-container-low'
                  }`}
                >
                  <input
                    checked={rail === 'card'}
                    className="mt-1 h-4 w-4 border-outline-variant text-primary"
                    name="payment_rail"
                    type="radio"
                    onChange={() => setRail('card')}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-label-lg text-label-lg font-medium text-on-surface">
                        Corporate Mastercard
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        +{pkr(4.45)} (1.4%)
                      </span>
                    </div>
                    <p className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">
                      •••• 3920 • Exp 09/28
                    </p>
                  </div>
                </label>
              </div>

              <div className="mt-5 border-t border-outline-variant/30 pt-4">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    checked={authorized}
                    className="mt-1 h-4 w-4 rounded border-outline-variant text-primary"
                    type="checkbox"
                    onChange={(event) => setAuthorized(event.target.checked)}
                  />
                  <span className="font-body-sm text-body-sm leading-snug text-on-surface-variant">
                    I, <strong className="font-semibold text-on-surface">David Vance</strong>,
                    confirm authorization to debit{' '}
                    <strong className="font-semibold text-on-surface">{pkr(318)}</strong> from Barclays
                    Commercial UK to ring-fenced Stripe/Pactly client custody vault, legally
                    amending Deal #UK-5028 under English Commercial Law Model 2.4.
                  </span>
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 font-label-lg text-label-lg font-semibold text-on-primary shadow-sm transition-all hover:bg-[#3242C2] active:bg-[#2B38A8] disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={!authorized}
                  type="button"
                  onClick={() => navigate('/deals/uk-5028/top-up-settled')}
                >
                  <Icon className="text-[18px]" name="lock" />
                  Accept Revisions & Top Up {pkr(318)} Escrow
                </button>
                <button
                  className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-outline-variant bg-surface-container-lowest px-4 font-label-lg text-label-lg font-medium text-on-surface transition-all hover:border-outline hover:bg-surface-container"
                  type="button"
                  onClick={() => navigate('/creator/uk-5028/revise')}
                >
                  <Icon className="text-[18px]" name="edit_note" />
                  Counter-Propose / Request Further Edit
                </button>
                <button
                  className="w-full rounded-lg py-2 text-center font-label-sm text-label-sm font-medium text-error transition-colors hover:bg-error-container/20"
                  type="button"
                  onClick={() => navigate('/deals')}
                >
                  Reject Counter-Offer & Revert to Original Draft
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 border-t border-outline-variant/30 pt-3 font-label-sm text-label-sm text-on-surface-variant">
                <Icon className="text-[16px] text-secondary" name="shield" />
                <span>Segregated client funds safeguarded by FCA authorized rails</span>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-4 font-body-sm text-body-sm text-on-surface-variant shadow-sm">
              <div>
                <div className="font-medium text-on-surface">Lumina Studio Ltd</div>
                <div className="font-label-sm text-label-sm">Total Active Escrow: {pkr(12450)}</div>
              </div>
              <Link className="font-label-sm text-label-sm font-semibold text-primary hover:underline" to="/deals/uk-5028">
                Vault Analytics →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
