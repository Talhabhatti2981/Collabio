/** Collabio — Revision Request Modal (Brand Feedback & Timestamped Redline) */
export default function RevisionRequestPage() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-xl">
            <a className="flex items-center gap-space-xs" data-go="/deals" href="/deals">
              <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[20px]">
                  verified_user
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
                Collabio
              </span>
            </a>
            <nav data-active-classes="bg-primary-container text-on-primary font-medium rounded-lg px-3 py-1.5" className="hidden lg:flex items-center gap-space-sm">
              <a aria-current="page" className="transition-colors bg-primary-container text-on-primary font-medium rounded-lg px-3 py-1.5" data-go="/deals" href="/deals">
                Deals
              </a>
              <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface px-3 py-1.5 rounded-lg transition-colors" data-go="/invitations/uk-5028" href="/invitations/uk-5028">
                Invitations
              </a>
              <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface px-3 py-1.5 rounded-lg transition-colors" data-go="/profile" href="/profile">
                Profile
              </a>
              <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface px-3 py-1.5 rounded-lg transition-colors" data-go="/settings" href="/settings">
                Settings
              </a>
              <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface px-3 py-1.5 rounded-lg transition-colors" data-go="/help" href="/help">
                Help & Legal
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex items-center gap-space-xs bg-secondary-container/30 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm text-on-secondary-container uppercase font-semibold">
                Rs 4,724,160IN ESCROW
              </span>
            </div>
            <div className="flex items-center gap-space-sm pl-space-xs py-1 pr-3 rounded-full bg-surface-container-low">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className="font-label-md text-label-md text-on-surface font-medium leading-none">
                  Lumina Studio
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-none mt-0.5">
                  Brand Account
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-160px)]">
        <div className="flex flex-col w-full relative">
          <div className="w-full filter blur-[6px] opacity-40 pointer-events-none select-none max-w-7xl mx-auto px-6 lg:px-12 py-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-headline-lg text-headline-lg text-on-surface">
                    Deal #UK-5028: Q2 Product Launch Campaign
                  </span>
                  <span className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-2.5 py-1 rounded-full uppercase font-medium">
                    Bilateral Pact
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Lumina Studio • Charlotte Emily Clark • Barclays Ring-Fenced Escrow
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-surface-container-lowest px-4 py-2 rounded-lg shadow-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block">
                    Total Escrow Vault
                  </span>
                  <span className="font-headline-md text-headline-md text-on-surface">
                    Rs 1,036,000
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="font-headline-sm text-headline-sm">
                  Deliverable Milestone 1: 60s–90s YouTube Integration
                </span>
                <span className="bg-primary/10 text-primary font-label-md text-label-md px-3 py-1 rounded-full">
                  In Review (31h 42m remaining)
                </span>
              </div>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-8 bg-surface-container-low h-64 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant">
                    smart_display
                  </span>
                </div>
                <div className="col-span-4 space-y-4">
                  <div className="p-4 bg-surface-container-low rounded-lg space-y-2">
                    <span className="font-label-md text-label-md text-on-surface-variant">
                      Barclays Client Vault A-8291
                    </span>
                    <div className="font-headline-md text-headline-md text-secondary">
                      Rs 518,000Allocated
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Ring-fenced under English Commercial Law Framework 2017
                    </p>
                  </div>
                  <button className="w-full bg-primary text-on-primary py-2.5 rounded-lg font-label-lg text-label-lg" data-go="/deals/uk-5028/release">
                    Approve & Release Funds
                  </button>
                  <button className="w-full bg-surface-container-high text-on-surface py-2.5 rounded-lg font-label-lg text-label-lg" data-go="/deals/uk-5028/revision">
                    Request Revision (1/2)
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-on-background/45 backdrop-blur-[2px] overflow-y-auto">
            <div className="relative w-full max-w-[880px] my-auto bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[942px]">
              <div className="px-6 sm:px-8 pt-6 pb-5 bg-surface-container-lowest flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                       DEAL #UK-5028 
                    </span>
                    <span className="bg-primary/10 text-primary font-label-sm text-label-sm px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                       MILESTONE 1 REVISION DRAFT 
                    </span>
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                       ROUND 1 OF 2 CONTRACTUALLY ALLOWED 
                    </span>
                  </div>
                  <button aria-label="Close modal" type="button" className="text-on-surface-variant hover:text-on-surface p-1.5 rounded-lg hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined text-[20px] leading-none">
                      close
                    </span>
                  </button>
                </div>
                <div className="pr-6">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Request Deliverable Revision (Milestone 1)
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                     Submit actionable timestamped feedback to Charlotte Emily Clark. Under English Commercial Law Model 2.4, this uses 1 of your 2 contractual revision rounds and resets the bilateral timeline. 
                  </p>
                </div>
              </div>
              <div className="overflow-y-auto px-6 sm:px-8 py-5 space-y-6">
                <div className="rounded-xl p-4 sm:p-5 bg-surface-container-low flex flex-col sm:flex-row gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      verified_user
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-tertiary text-[18px]">
                          pause_circle
                        </span>
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          Anti-Ghosting Review Window Paused
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                         Submitting this formal revision request halts the 48-hour auto-release timer (
                        <span className="font-semibold text-tertiary font-label-sm text-label-sm">
                          31h 42m remaining
                        </span>
                        ). Once dispatched, Charlotte receives a 72-hour turnaround window to upload revised assets. 
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          account_balance
                        </span>
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          Custodial Escrow Protection Active
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        <span className="font-semibold text-on-surface font-label-sm text-label-sm">
                          Rs 518,000
                        </span>
                         remains 100% ring-fenced in Barclays Client Custody Vault A-8291. Funds cannot be withdrawn or returned while bilateral revision is active. 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[24px]">
                        video_library
                      </span>
                    </div>
                    <div className="min-w-0">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold block">
                        Target Deliverable
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
                        Milestone 1 — 60s–90s Dedicated YouTube Integration
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                         Draft: 
                        <span className="text-on-surface font-medium">
                          Top 5 Developer Tools for 2027 (ft. Lumina Studio)
                        </span>
                         • Unlisted YouTube Draft (12:45 total, Sponsor window 03:14 – 04:32) 
                      </p>
                    </div>
                  </div>
                  <div className="text-left md:text-right shrink-0">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-medium">
                      Net Escrow Value
                    </span>
                    <span className="font-headline-md text-headline-md text-secondary font-bold">
                      Rs 518,000
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-headline-sm text-headline-sm text-on-surface">
                        Timestamped Redline Annotations
                      </span>
                      <span className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full font-semibold">
                        2 Points Added
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Sponsor Window: 03:14 – 04:32 (88s)
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-3.5 rounded-xl space-y-2">
                    <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>
                        03:14 (Intro Hook)
                      </span>
                      <span className="font-semibold text-primary">
                        Integration Playhead (88 seconds total)
                      </span>
                      <span>
                        04:32 (Outro CTA)
                      </span>
                    </div>
                    <div className="relative w-full h-3 bg-surface-container-high rounded-full overflow-visible">
                      <div className="absolute inset-y-0 left-[20%] right-[15%] bg-primary/20 rounded-full"></div>
                      <div title="03:22 - Logo Overlay" className="absolute top-1/2 -translate-y-1/2 left-[28%] w-4 h-4 bg-tertiary-container border-2 border-white rounded-full shadow cursor-pointer group">
                        <span className="absolute -top-7 -translate-x-1/2 left-1/2 bg-on-background text-on-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          03:22
                        </span>
                      </div>
                      <div title="03:58 - CTA Discount Code" className="absolute top-1/2 -translate-y-1/2 left-[62%] w-4 h-4 bg-primary-container border-2 border-white rounded-full shadow cursor-pointer group">
                        <span className="absolute -top-7 -translate-x-1/2 left-1/2 bg-on-background text-on-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          03:58
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="bg-surface-container-high font-label-md text-label-md text-on-surface font-bold px-2 py-0.5 rounded flex items-center gap-1 font-mono">
                            <span className="material-symbols-outlined text-[14px]">
                              timer
                            </span>
                             03:22 
                          </span>
                          <span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full font-medium">
                             Visual Brand Asset / Overlay 
                          </span>
                        </div>
                        <span className="bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">
                            check_circle
                          </span>
                           Actionable • Within Original Brief Scope 
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                         The Lumina Studio CLI dashboard logo overlay in the top-left corner is obscured by the dark IDE code syntax highlight. Please swap to the high-contrast light monochrome SVG badge (Schedule 1 asset pack) so it remains legible. 
                      </p>
                    </div>
                    <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="bg-surface-container-high font-label-md text-label-md text-on-surface font-bold px-2 py-0.5 rounded flex items-center gap-1 font-mono">
                            <span className="material-symbols-outlined text-[14px]">
                              timer
                            </span>
                             03:58 
                          </span>
                          <span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full font-medium">
                             Verbal CTA & Discount Code Callout 
                          </span>
                        </div>
                        <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">
                            warning
                          </span>
                           Contractual Discrepancy • Within Scope 
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                         At 03:58 you mention “use code CHARLOTTE”, but the bilateral pact agreement specifically requires verbal mention of 
                        <span className="font-semibold text-primary font-mono">
                          “code CHARLOTTE20 for 20% off your annual license”
                        </span>
                         as registered with the affiliate tracking engine. 
                      </p>
                    </div>
                  </div>
                  <div className="p-3 bg-surface-container-low rounded-xl flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <div className="flex items-center gap-2 sm:w-36 shrink-0">
                      <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                        Time:
                      </span>
                      <input placeholder="MM:SS" type="text" className="w-full bg-surface-container-lowest px-2.5 py-1.5 rounded-lg font-label-md text-label-md text-on-surface outline-none focus:bg-surface-container-lowest font-mono" />
                    </div>
                    <input placeholder="Describe concise revision requirement (e.g. Adjust verbal CTA wording)..." type="text" className="flex-1 bg-surface-container-lowest px-3 py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface outline-none focus:bg-surface-container-lowest" />
                    <button type="button" className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-3 py-1.5 rounded-lg font-label-md text-label-md flex items-center justify-center gap-1 transition-colors shrink-0">
                      <span className="material-symbols-outlined text-[16px]">
                        add
                      </span>
                       Add Marker 
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="font-headline-sm text-headline-sm text-on-surface block">
                       Bilateral Revision Memo & Cover Directive 
                    </label>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Visible directly to Charlotte Emily Clark
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm focus-within:ring-2 focus-within:ring-primary/20">
                    <textarea rows={4} className="w-full bg-transparent outline-none font-body-md text-body-md text-on-surface resize-none leading-relaxed">
                      Hey Charlotte! The draft integration is looking fantastic overall—great pacing and the terminal demo at 03:30 is super sharp. Just these two quick fixes: swap the corner logo overlay to the high-contrast variant at 03:22, and clarify the exact coupon code as “CHARLOTTE20” at 03:58. Once re-uploaded, we will approve and trigger instant Faster Payments release!
                    </textarea>
                  </div>
                  <div className="bg-surface-container-low p-3.5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary text-[22px]">
                        attach_file
                      </span>
                      <div>
                        <span className="font-label-md text-label-md text-on-surface font-medium block">
                          Attached Assets for Charlotte
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Lumina_CLI_Light_Badge.svg (24 KB) • Schedule_1_Asset_Pack.zip
                        </span>
                      </div>
                    </div>
                    <button type="button" className="bg-surface-container-lowest hover:bg-surface-container-high text-on-surface px-3 py-1 rounded-lg font-label-sm text-label-sm font-medium transition-colors shadow-sm self-end sm:self-auto">
                       + Attach Extra File 
                    </button>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        gavel
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                        Harrison & Croft Revision Compliance Check
                      </span>
                    </div>
                    <span className="bg-secondary-container/50 text-on-secondary-container font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                       PASSED 
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-on-surface-variant">
                    <div className="bg-surface-container-low p-3 rounded-lg space-y-1">
                      <span className="font-label-md text-label-md text-on-surface font-semibold block">
                        Contractual Revision Rounds
                      </span>
                      <p className="font-body-sm text-body-sm">
                         Round 1 of 2 will be deducted upon submission. 
                        <span className="font-semibold text-on-surface">
                          1 contractual round remains
                        </span>
                         for this milestone if additional corrections are required. 
                      </p>
                    </div>
                    <div className="bg-surface-container-low p-3 rounded-lg space-y-1">
                      <span className="font-label-md text-label-md text-on-surface font-semibold block">
                        Out-of-Scope Warning
                      </span>
                      <p className="font-body-sm text-body-sm">
                         Revision requests must strictly conform to Schedule 1. Demanding concept pivots or longer runtimes requires an Escrow Scope Amendment Addendum. 
                      </p>
                    </div>
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer pt-1 select-none">
                    <input defaultChecked={true} type="checkbox" className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary/20 accent-primary" />
                    <span className="font-body-sm text-body-sm text-on-surface">
                       I confirm these revision requests fall strictly within the agreed 
                      <strong className="text-on-surface">
                        Schedule 1 deliverable scope
                      </strong>
                       and do not constitute a commercial re-brief or scope creep under English Commercial Law Framework 2.4. 
                    </span>
                  </label>
                </div>
              </div>
              <div className="px-6 sm:px-8 py-4 bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">
                    info
                  </span>
                  <span className="font-label-sm text-label-sm">
                     Remaining revision allowance after dispatch: 
                    <strong className="text-on-surface font-semibold">
                      1 Round
                    </strong>
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-end gap-2.5 w-full sm:w-auto">
                  <button type="button" className="bg-surface-container-lowest hover:bg-surface-container-high text-on-surface px-3.5 py-2 rounded-lg font-label-lg text-label-lg font-medium transition-colors shadow-sm">
                     Save Draft 
                  </button>
                  <button type="button" className="bg-surface-container-lowest hover:bg-surface-container-high text-on-surface px-3.5 py-2 rounded-lg font-label-lg text-label-lg font-medium transition-colors shadow-sm">
                     Cancel & Return 
                  </button>
                  <button type="button" className="bg-primary hover:bg-primary-container text-on-primary px-5 py-2.5 rounded-lg font-label-lg text-label-lg font-semibold shadow-md flex items-center gap-2 transition-all" data-go="/creator/uk-5028/resubmit">
                    <div className="flex flex-col text-left">
                      <span>
                        Dispatch Revision Request (Round 1/2) →
                      </span>
                      <span className="font-label-sm text-label-sm text-on-primary-container font-normal leading-tight">
                        Pauses 48h clock • Grants 72h creator turnaround
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-low shadow-[0_-1px_6px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-secondary text-[18px]">
                shield
              </span>
              <span className="font-label-sm text-label-sm text-on-surface font-semibold uppercase tracking-wider">
                Client Safeguarding & Regulatory Protection
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl">
              Collabio Ltd acts as an impartial custody referee. Client funds are safeguarded in ring-fenced designated accounts held with UK authorized credit institutions pursuant to FCA regulatory standards under the Payment Services Regulations 2017.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-lg text-on-surface-variant">
            <a className="font-label-sm text-label-sm hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
              Escrow Safeguard Terms
            </a>
            <a className="font-label-sm text-label-sm hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
              UK Legal Framework
            </a>
            <a className="font-label-sm text-label-sm hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
              Dispute Arbitration
            </a>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              © 2025 Collabio Ltd. Registered in England & Wales.
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
