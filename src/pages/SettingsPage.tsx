import { useState } from 'react'
import AppChrome from '../components/AppChrome'
import { pkr } from '../money'

export default function SettingsPage() {
  const [saved, setSaved] = useState(false)
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [payoutAlerts, setPayoutAlerts] = useState(true)
  const [twoFactor, setTwoFactor] = useState(true)

  return (
    <AppChrome>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-space-lg px-margin-mobile py-space-lg lg:px-margin">
        <div className="flex flex-col justify-between gap-space-md sm:flex-row sm:items-end">
          <div>
            <p className="font-label-sm text-label-sm font-semibold tracking-wider text-primary uppercase">Account</p>
            <h1 className="mt-1 font-headline-lg text-headline-lg font-semibold tracking-tight text-on-surface">Settings</h1>
            <p className="mt-1 max-w-2xl font-body-md text-body-md text-on-surface-variant">
              Billing, payout rails, and alerts for Lumina Studio and @charlotte_creator.
            </p>
          </div>
          <button
            className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 font-label-lg text-label-lg font-semibold text-on-primary hover:bg-primary-container"
            type="button"
            onClick={() => setSaved(true)}
          >
            {saved ? 'Settings saved' : 'Save settings'}
          </button>
        </div>

        <section className="grid gap-space-md lg:grid-cols-2">
          <article className="rounded-xl bg-surface-container-lowest p-6 shadow-sm">
            <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Brand profile</h2>
            <dl className="mt-4 space-y-3 font-body-md text-body-md">
              <div className="flex justify-between gap-4">
                <dt className="text-on-surface-variant">Legal name</dt>
                <dd className="font-medium text-on-surface">Lumina Studio Ltd</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-on-surface-variant">Companies House</dt>
                <dd className="font-medium text-on-surface">14298102</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-on-surface-variant">Work email</dt>
                <dd className="font-medium text-on-surface">charlotte@creativestudio.co.uk</dd>
              </div>
            </dl>
            <a className="mt-5 inline-flex font-label-md text-label-md font-semibold text-primary hover:underline" data-go="/complete-profile" href="/complete-profile">
              Edit legal identity
            </a>
          </article>

          <article className="rounded-xl bg-surface-container-lowest p-6 shadow-sm">
            <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Billing & payouts</h2>
            <dl className="mt-4 space-y-3 font-body-md text-body-md">
              <div className="flex justify-between gap-4">
                <dt className="text-on-surface-variant">Custody rail</dt>
                <dd className="font-medium text-on-surface">Barclays Commercial •••• 8219</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-on-surface-variant">In escrow</dt>
                <dd className="font-medium text-on-surface">{pkr(3350)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-on-surface-variant">Platform fee</dt>
                <dd className="font-medium text-on-surface">6% fixed</dd>
              </div>
            </dl>
            <a className="mt-5 inline-flex font-label-md text-label-md font-semibold text-primary hover:underline" data-go="/settings/sync" href="/settings/sync">
              Open Xero / QuickBooks sync
            </a>
          </article>
        </section>

        <section className="rounded-xl bg-surface-container-lowest p-6 shadow-sm">
          <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Alerts & security</h2>
          <div className="mt-4 divide-y divide-outline-variant/30">
            <label className="flex items-center justify-between gap-4 py-4">
              <span>
                <span className="block font-label-lg text-label-lg font-semibold text-on-surface">Deal email alerts</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Counter-offers, signatures, and the 48-hour review window.</span>
              </span>
              <input checked={emailAlerts} className="h-4 w-4" type="checkbox" onChange={(event) => setEmailAlerts(event.target.checked)} />
            </label>
            <label className="flex items-center justify-between gap-4 py-4">
              <span>
                <span className="block font-label-lg text-label-lg font-semibold text-on-surface">Payout alerts</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Faster Payments receipts and escrow releases.</span>
              </span>
              <input checked={payoutAlerts} className="h-4 w-4" type="checkbox" onChange={(event) => setPayoutAlerts(event.target.checked)} />
            </label>
            <label className="flex items-center justify-between gap-4 py-4">
              <span>
                <span className="block font-label-lg text-label-lg font-semibold text-on-surface">Two-factor sign-in</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Required before a top-up or payout release.</span>
              </span>
              <input checked={twoFactor} className="h-4 w-4" type="checkbox" onChange={(event) => setTwoFactor(event.target.checked)} />
            </label>
          </div>
        </section>

        <div className="flex justify-end">
          <a className="font-label-lg text-label-lg font-semibold text-error hover:underline" data-go="/login" href="/login">
            Sign out
          </a>
        </div>
      </div>
    </AppChrome>
  )
}
