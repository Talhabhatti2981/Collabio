import AppChrome from '../components/AppChrome'
import { pkr } from '../money'

const channels = [
  ['YouTube', '@charlotte.creates'],
  ['TikTok', '@charlotte_vlogs'],
  ['Instagram', '@charlotte_creator'],
]

export default function ProfilePage() {
  return (
    <AppChrome>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-space-lg px-margin-mobile py-space-lg lg:px-margin">
        <div className="flex flex-col justify-between gap-space-md rounded-xl bg-surface-container-lowest p-6 shadow-sm sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary font-headline-md text-headline-md text-on-primary">
              CC
            </div>
            <div>
              <p className="font-label-sm text-label-sm font-semibold tracking-wider text-primary uppercase">Profile</p>
              <h1 className="font-headline-lg text-headline-lg font-semibold tracking-tight text-on-surface">Charlotte Emily Clark</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">@charlotte_creator · KYC Level 3 UK · Creator and brand signatory</p>
            </div>
          </div>
          <a className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 font-label-lg text-label-lg font-semibold text-on-primary hover:bg-primary-container" data-go="/settings" href="/settings">
            Account settings
          </a>
        </div>

        <section className="grid gap-space-md lg:grid-cols-2">
          <article className="rounded-xl bg-surface-container-lowest p-6 shadow-sm">
            <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Brand identity</h2>
            <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Lumina Studio Ltd · Active UK limited company</p>
            <dl className="mt-4 space-y-3 font-body-md text-body-md">
              <div className="flex justify-between gap-4">
                <dt className="text-on-surface-variant">Companies House</dt>
                <dd className="font-medium text-on-surface">14298102</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-on-surface-variant">Registered office</dt>
                <dd className="text-right font-medium text-on-surface">71–75 Shelton Street, London WC2H 9JQ</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-on-surface-variant">Jurisdiction</dt>
                <dd className="font-medium text-on-surface">England & Wales</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-on-surface-variant">Work email</dt>
                <dd className="font-medium text-on-surface">charlotte@creativestudio.co.uk</dd>
              </div>
            </dl>
          </article>

          <article className="rounded-xl bg-surface-container-lowest p-6 shadow-sm">
            <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Creator channels</h2>
            <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Handles locked to Deal #UK-5028.</p>
            <ul className="mt-4 space-y-3">
              {channels.map(([network, handle]) => (
                <li key={network} className="flex items-center justify-between rounded-lg bg-surface-container-low px-4 py-3">
                  <span className="font-label-lg text-label-lg text-on-surface-variant">{network}</span>
                  <span className="font-label-lg text-label-lg font-semibold text-on-surface">{handle}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="grid gap-space-md sm:grid-cols-3">
          {[
            ['Open deals', '2'],
            ['In escrow', pkr(3350)],
            ['Completed payouts', pkr(950)],
          ].map(([label, value]) => (
            <article key={label} className="rounded-xl bg-surface-container-lowest p-5 shadow-sm">
              <p className="font-label-sm text-label-sm text-on-surface-variant">{label}</p>
              <p className="mt-1 font-headline-sm text-headline-sm font-semibold text-on-surface">{value}</p>
            </article>
          ))}
        </section>

        <div className="flex flex-wrap gap-3">
          <a className="inline-flex h-11 items-center justify-center rounded-lg border border-outline-variant bg-surface-container-lowest px-5 font-label-lg text-label-lg font-medium text-on-surface hover:bg-surface-container" data-go="/deals" href="/deals">
            Back to deals
          </a>
          <a className="inline-flex h-11 items-center justify-center rounded-lg border border-outline-variant bg-surface-container-lowest px-5 font-label-lg text-label-lg font-medium text-on-surface hover:bg-surface-container" data-go="/help" href="/help">
            Help & Legal
          </a>
        </div>
      </div>
    </AppChrome>
  )
}
