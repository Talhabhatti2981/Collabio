import AppChrome from '../components/AppChrome'

const topics = [
  {
    title: 'How escrow works',
    body: 'The brand locks the creator fee before work starts. Pactly holds it in a segregated client account until the milestone is approved or the 48-hour review window ends.',
    to: '/deals/uk-5028',
    action: 'Open the live deal',
  },
  {
    title: 'Counter-offers',
    body: 'A creator can redline dates, fees, and usage rights. The brand reviews the schedule and tops up the escrow difference before the revised pact is dispatched.',
    to: '/deals/uk-5028/review',
    action: 'Review the counter-offer',
  },
  {
    title: 'Payouts and the 6% fee',
    body: 'The custody fee is 6% of the creator net. Releases go out by Faster Payments from the Barclays client vault. Statements can be sent to Xero or QuickBooks.',
    to: '/settings',
    action: 'Open billing settings',
  },
  {
    title: 'Disputes and arbitration',
    body: 'Model 2.4 caps fast-track solicitor arbitration. Either party can pause a milestone and ask the Pactly referee before funds move.',
    to: '/legal',
    action: 'Read the dispute terms',
  },
]

const faqs = [
  ['When does the 48-hour clock start?', 'When a deliverable or counter-offer is submitted. If the brand does not act, the milestone follows the signed auto-release clause.'],
  ['Can I change the payout account?', 'Yes. Settings keeps the Barclays commercial rail and the backup card. A change applies to the next release, not funds already in flight.'],
  ['Who can sign a pact?', 'A brand signatory and the creator. Both identities are checked before the first escrow lock.'],
]

export default function HelpPage() {
  return (
    <AppChrome>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-space-lg px-margin-mobile py-space-lg lg:px-margin">
        <div>
          <p className="font-label-sm text-label-sm font-semibold tracking-wider text-primary uppercase">Support</p>
          <h1 className="mt-1 font-headline-lg text-headline-lg font-semibold tracking-tight text-on-surface">Help & Legal</h1>
          <p className="mt-1 max-w-2xl font-body-md text-body-md text-on-surface-variant">
            Escrow, revisions, and the English-law terms behind Deal #UK-5028.
          </p>
        </div>

        <div className="grid gap-space-md md:grid-cols-2">
          {topics.map((topic) => (
            <article key={topic.title} className="flex flex-col rounded-xl bg-surface-container-lowest p-6 shadow-sm">
              <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">{topic.title}</h2>
              <p className="mt-2 flex-1 font-body-md text-body-md text-on-surface-variant">{topic.body}</p>
              <a className="mt-4 font-label-md text-label-md font-semibold text-primary hover:underline" data-go={topic.to} href={topic.to}>
                {topic.action}
              </a>
            </article>
          ))}
        </div>

        <section className="rounded-xl bg-surface-container-lowest p-6 shadow-sm">
          <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Common questions</h2>
          <div className="mt-4 divide-y divide-outline-variant/30">
            {faqs.map(([question, answer]) => (
              <div key={question} className="py-4">
                <h3 className="font-label-lg text-label-lg font-semibold text-on-surface">{question}</h3>
                <p className="mt-1 font-body-md text-body-md text-on-surface-variant">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col justify-between gap-4 rounded-xl bg-primary-container p-6 text-on-primary sm:flex-row sm:items-center">
          <div>
            <h2 className="font-headline-sm text-headline-sm font-semibold">Talk to the escrow referee</h2>
            <p className="mt-1 font-body-md text-body-md text-on-primary/90">support@pactly.co.uk · replies on business days, 9:00–17:30 UK.</p>
          </div>
          <a className="inline-flex h-11 items-center justify-center rounded-lg bg-surface-container-lowest px-5 font-label-lg text-label-lg font-semibold text-primary" data-go="/legal" href="/legal">
            Open the full terms
          </a>
        </section>
      </div>
    </AppChrome>
  )
}
