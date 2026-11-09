/** Collabio — Active Deal Management & Live Milestone Monitor */
export default function ActiveDealPage() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-headline-sm text-headline-sm text-on-primary font-bold tracking-tight">
                P
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">
                Collabio
              </span>
            </div>
            <nav data-active-classes="bg-primary-container text-on-primary font-medium rounded-lg" className="hidden md:flex items-center gap-1">
              <a aria-current="page" className="flex items-center gap-2 px-3 py-2 transition-colors bg-primary-container text-on-primary font-medium rounded-lg" data-go="/deals" href="/deals">
                <span className="text-inherit">
                  Deals
                </span>
                <span className="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  3 Active
                </span>
              </a>
              <a className="px-3 py-2 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors rounded-lg" data-go="/invitations/uk-5028" href="/invitations/uk-5028">
                Invitations
              </a>
              <a className="px-3 py-2 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors rounded-lg" data-go="/profile" href="/profile">
                Profile
              </a>
              <a className="px-3 py-2 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors rounded-lg" data-go="/settings" href="/settings">
                Settings
              </a>
              <a className="px-3 py-2 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors rounded-lg" data-go="/help" href="/help">
                Help &amp; Legal
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/30">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-md text-label-md text-on-surface font-semibold tracking-wide">
                Rs 4,724,160IN ESCROW
              </span>
            </div>
            <div className="flex items-center gap-3 pl-2">
              <div className="hidden xl:flex flex-col text-right">
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Lumina Studio
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Brand Account
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-16 bg-surface">
        <div className="flex flex-col w-full">
          <section className="w-full bg-surface-container-low px-6 lg:px-12 py-3">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-on-surface-variant font-label-sm text-label-sm">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-semibold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                   ACTIVE EXECUTION — ESCROW RING-FENCED 
                </span>
                <span className="text-outline-variant">
                  •
                </span>
                <span className="flex items-center gap-1 text-on-surface">
                  <span className="material-symbols-outlined text-[15px] text-secondary">
                    verified
                  </span>
                   eIDAS Dual-Countersigned: 20 Oct 2026 
                </span>
                <span className="text-outline-variant">
                  •
                </span>
                <span className="font-mono text-[11px] text-on-surface-variant">
                  VAULT-GB-STRIPE-5028-CUSTODY
                </span>
                <span className="text-outline-variant">
                  •
                </span>
                <span>
                  SRA Regulated: Harrison &amp; Croft LLP
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-2.5 py-1 rounded bg-surface text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-1.5 font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px] text-primary">
                    download
                  </span>
                   Executed Pact (PDF) 
                </button>
                <button className="px-2.5 py-1 rounded bg-surface text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-1.5 font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px] text-primary">
                    webhook
                  </span>
                   Audit &amp; Webhooks 
                </button>
              </div>
            </div>
          </section>
          <section className="w-full px-6 lg:px-12 pt-6 pb-2">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
              <nav className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                <a className="hover:text-primary transition-colors" data-go="/deals" href="/deals">
                  Deals
                </a>
                <span className="material-symbols-outlined text-[16px] text-outline">
                  chevron_right
                </span>
                <span className="text-on-surface font-semibold">
                  Deal #UK-5028 (Lumina Studio × Charlotte Emily Clark)
                </span>
                <span className="material-symbols-outlined text-[16px] text-outline">
                  chevron_right
                </span>
                <span className="text-primary font-medium">
                  Active Deal Monitor
                </span>
              </nav>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-secondary">
                    shield
                  </span>
                   Barclays Segregated Trust Account 
                </span>
                <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                    history_edu
                  </span>
                   Bilateral Agreement Redline 
                </button>
              </div>
            </div>
          </section>
          <section className="w-full px-6 lg:px-12 py-4">
            <div className="max-w-7xl mx-auto bg-surface-container-lowest rounded-xl p-6 lg:p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold tracking-wider uppercase bg-primary/10 text-primary">
                      Fixed Milestone Contract
                    </span>
                    <span className="text-outline-variant font-mono text-[12px]">
                      REF: 5028-GB
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                     Deal #UK-5028: Q4 Tech Stack Integration &amp; TikTok Amplification 
                  </h1>
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-1 font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        person
                      </span>
                      <span>
                        Creator: 
                        <strong className="text-on-surface font-semibold">
                          Charlotte Emily Clark
                        </strong>
                         (@charlotte_creator)
                      </span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm text-[10px]">
                        KYC Lv.3 Verified
                      </span>
                    </div>
                    <span className="text-outline-variant">
                      •
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-outline">
                        account_balance
                      </span>
                      <span>
                        NatWest Business (••••4910)
                      </span>
                    </div>
                    <span className="text-outline-variant">
                      •
                    </span>
                    <div>
                      <span>
                        Brand Lead: 
                        <strong className="text-on-surface">
                          David Vance
                        </strong>
                         (MD, Lumina Studio Ltd)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-80 bg-surface-container-low rounded-xl p-4 flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-on-surface-variant">
                      Production Stage
                    </span>
                    <span className="text-primary font-bold">
                      45% Complete
                    </span>
                  </div>
                  <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
                    <div style={{ "width": "45%" }} className="bg-primary h-full rounded-full transition-all duration-500"></div>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                    <span className="text-secondary font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                       M1: In Review (48h) 
                    </span>
                    <span>
                      M2: Scheduled Dec 02
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 bg-surface-container-low/40 -mx-6 -mb-6 lg:-mx-8 lg:-mb-8 p-6 lg:p-8 rounded-b-xl">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[15px] text-secondary">
                      lock
                    </span>
                     Ring-Fenced in Escrow 
                  </div>
                  <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                     Rs 823,620
                    <span className="text-on-surface-variant font-normal text-headline-sm">
                      .00
                    </span>
                  </div>
                  <p className="font-label-sm text-label-sm text-secondary font-medium">
                    100% Client Trust Protected
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[15px] text-primary">
                      payments
                    </span>
                     Creator Net Payout 
                  </div>
                  <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                     Rs 777,000
                    <span className="text-on-surface-variant font-normal text-headline-sm">
                      .00
                    </span>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    0% deduction from creator
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[15px] text-outline">
                      task_alt
                    </span>
                     Settled to Date 
                  </div>
                  <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                     Rs 0
                    <span className="text-on-surface-variant font-normal text-headline-sm">
                      .00
                    </span>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    0 of 2 Milestones settled
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[15px] text-outline">
                      receipt_long
                    </span>
                     Safeguarding Fee 
                  </div>
                  <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                     Rs 46,620
                    <span className="text-on-surface-variant font-normal text-headline-sm">
                      .00
                    </span>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    FCA statutory ring-fence paid
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full px-6 lg:px-12 py-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-6">
                <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm">
                  <div className="flex items-center justify-between max-w-xl mx-auto px-2">
                    <div className="flex flex-col items-center text-center space-y-1">
                      <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px]">
                          check
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                        1. Pact Signed
                      </span>
                    </div>
                    <div className="flex-1 h-0.5 bg-secondary mx-2"></div>
                    <div className="flex flex-col items-center text-center space-y-1">
                      <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px]">
                          check
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                        2. Escrow Funded
                      </span>
                    </div>
                    <div className="flex-1 h-0.5 bg-secondary mx-2"></div>
                    <div className="flex flex-col items-center text-center space-y-1">
                      <div className="w-7 h-7 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center font-label-sm text-label-sm shadow-sm ring-2 ring-primary">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                      </div>
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        3. M1 In Review
                      </span>
                    </div>
                    <div className="flex-1 h-0.5 bg-surface-variant mx-2"></div>
                    <div className="flex flex-col items-center text-center space-y-1">
                      <div className="w-7 h-7 rounded-full bg-surface-container-low text-outline flex items-center justify-center font-label-sm text-label-sm">
                         4 
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        4. M2 Queued
                      </span>
                    </div>
                    <div className="flex-1 h-0.5 bg-surface-variant mx-2"></div>
                    <div className="flex flex-col items-center text-center space-y-1">
                      <div className="w-7 h-7 rounded-full bg-surface-container-low text-outline flex items-center justify-center font-label-sm text-label-sm">
                         5 
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        5. Completed
                      </span>
                    </div>
                  </div>
                </div>
                <article className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6 bg-surface-container-low/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-label-sm text-label-sm font-bold text-primary uppercase tracking-wide">
                          Milestone 1 of 2
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                           SUBMITTED FOR REVIEW — 48H ANTI-GHOSTING ACTIVE 
                        </span>
                      </div>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                         60s–90s Dedicated YouTube Integration 
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                         Targeted placement in main feed video. Submitted 2 days early on 23 Nov 2026. 
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-headline-md text-headline-md text-on-surface font-bold">
                        Rs 518,000
                      </div>
                      <div className="font-label-sm text-label-sm text-secondary font-medium">
                        Net Creator Escrow
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="bg-surface-container rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary-container flex-shrink-0">
                          <span className="material-symbols-outlined text-[20px]">
                            timer
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-label-md text-label-md text-on-surface font-bold">
                              Anti-Ghosting Protocol (Clause 4.2)
                            </span>
                            <span className="px-2 py-0.5 rounded bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold">
                               31h 42m remaining 
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 max-w-xl">
                             If Lumina Studio does not submit actionable revision requests or approve within 48 hours, 
                            <strong className="text-on-surface">
                              Rs 518,000
                            </strong>
                             will automatically release to Charlotte via NatWest Faster Payments. 
                          </p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0 self-end md:self-center">
                        <span className="font-label-sm text-label-sm text-outline">
                          Auto-release: 25 Nov, 14:18 GMT
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            smart_display
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            Item 1: Unlisted YouTube Draft Video
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
                          <span className="material-symbols-outlined text-[16px]">
                            check_circle
                          </span>
                           Video Draft Ready for Inspection 
                        </span>
                      </div>
                      <div className="bg-surface-container-low rounded-xl p-4 flex flex-col md:flex-row gap-5 items-center">
                        <div className="relative w-full md:w-64 aspect-video rounded-lg overflow-hidden bg-inverse-surface flex-shrink-0 group cursor-pointer shadow-sm">
                          <img data-alt="A clean, cinematic creator workspace video thumbnail showcasing modern tech desk accessories, dual monitors displaying code and Lumina Studio UI, with soft natural lighting and high fidelity 4k camera finish." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAs-LiPwZMT-1zoy6a4yzex1Aq29tTDzKbbLN8_Du99-M2OnUpC0HZIPOqwXUglSP7UF_f58ZWvpjUA6JaI6Res4CadFTvJMv_FsGT4ZQ2zmSTkyqpnNKf9BXo1Ri8NW-IsFFx0PWUpO2Vs9TQbVnMAJv-37HiGHzwy7LM5qzuxA_cbjtdvRYznmTyU7Qxut5taeksUj6B2EzshDCNqe5RBwFSFV_L9tQI4ZqZbDTCIW_6FHtfS28fzA" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-inverse-surface/40 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-[24px]">
                                play_arrow
                              </span>
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-[10px]">
                             12:45 
                          </div>
                        </div>
                        <div className="space-y-2 flex-1 w-full">
                          <div className="flex items-center justify-between">
                            <span className="font-label-sm text-label-sm text-outline font-mono">
                              ID: xK98dF2_w1q
                            </span>
                            <a target="_blank" className="text-primary font-label-sm text-label-sm hover:underline flex items-center gap-1" href="https://youtu.be/xK98dF2_w1q">
                               Open in YouTube 
                              <span className="material-symbols-outlined text-[13px]">
                                open_in_new
                              </span>
                            </a>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-tight">
                             Top 5 Developer Tools for 2027 (ft. Lumina Studio) 
                          </h3>
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              timelapse
                            </span>
                            <span>
                              Sponsor Segment: 
                              <strong>
                                03:14 – 04:32
                              </strong>
                               (88s total duration)
                            </span>
                            <span className="px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-container text-[10px] font-bold">
                              Complies (≥60s)
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                             Video uploaded as Unlisted. Audio balance, graphic overlays, and CTA verbal call-out verified by automated media scan. 
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            chat
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            Item 2: Pinned Comment &amp; Tracking URL Verification
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">
                            done_all
                          </span>
                           Automated Token Match: PASS 
                        </span>
                      </div>
                      <div className="bg-surface-container-low rounded-xl p-4 font-body-sm text-body-sm text-on-surface space-y-2">
                        <div className="text-on-surface-variant font-label-sm text-label-sm">
                          Submitted Pinned Comment Copy:
                        </div>
                        <div className="p-3 bg-surface-container-lowest rounded-lg font-mono text-[13px] text-on-surface leading-relaxed">
                           “Huge thanks to Lumina Studio for sponsoring this video! If you want to streamline your workflow, claim an exclusive 20% discount with code 
                          <span className="bg-secondary-container/40 text-on-secondary-container px-1 py-0.5 rounded font-bold">
                            CHARLOTTE20
                          </span>
                           at 
                          <a className="text-primary underline" href="#" onClick={(event) => event.preventDefault()}>
                            https://lumina.io/charlotte
                          </a>
                          ” 
                        </div>
                        <div className="flex items-center gap-4 text-on-surface-variant font-label-sm text-label-sm pt-1">
                          <span className="flex items-center gap-1 text-secondary">
                            <span className="material-symbols-outlined text-[14px]">
                              check
                            </span>
                             Promo Code Valid 
                          </span>
                          <span className="flex items-center gap-1 text-secondary">
                            <span className="material-symbols-outlined text-[14px]">
                              check
                            </span>
                             UTM Campaign Appended 
                          </span>
                          <span className="flex items-center gap-1 text-secondary">
                            <span className="material-symbols-outlined text-[14px]">
                              check
                            </span>
                             ASA/CAP #ad Disclosure Included 
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            sync
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            Item 3: YouTube Data API v3 Autonomous Release Monitor
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-primary font-medium flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                           Polling Active 
                        </span>
                      </div>
                      <div className="bg-surface-container-low rounded-xl p-4 flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">
                            cloud_sync
                          </span>
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant space-y-1">
                          <p className="text-on-surface font-medium">
                            Autonomous Release Webhook Connected: 
                            <code className="text-primary font-mono text-[12px]">
                              @CharlotteClarkTech
                            </code>
                          </p>
                          <p>
                             Once Charlotte sets the video privacy state to 
                            <strong>
                              Public
                            </strong>
                            , Collabio’s webhook triggers verification of the public publish event, matching timestamp and metadata within 180 seconds to execute automated escrow payout.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 bg-surface-container-low/50 -mx-6 -mb-6 p-6 rounded-b-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-2 shadow-sm font-semibold" data-go="/deals/uk-5028/release">
                          <span className="material-symbols-outlined text-[18px]">
                            lock_open
                          </span>
                           Approve Deliverable &amp; Release Rs 518,000 
                        </button>
                        <button className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-surface text-on-surface hover:bg-surface-container-high transition-colors font-label-lg text-label-lg shadow-sm flex items-center justify-center gap-1.5" data-go="/deals/uk-5028/revision">
                          <span className="material-symbols-outlined text-[18px] text-outline">
                            rate_review
                          </span>
                           Request Revision (1/2) 
                        </button>
                      </div>
                      <button className="text-on-surface-variant hover:text-error transition-colors font-label-sm text-label-sm flex items-center gap-1" data-go="/legal">
                        <span className="material-symbols-outlined text-[16px]">
                          gavel
                        </span>
                         Initiate Dispute (Rs 27,750solicitor arbitration cap) 
                      </button>
                    </div>
                  </div>
                </article>
                <article className="bg-surface-container-lowest rounded-xl shadow-sm p-6 space-y-4 opacity-90">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-label-sm font-bold text-outline uppercase tracking-wide">
                          Milestone 2 of 2
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                           QUEUED — AWAITING MILESTONE 1 APPROVAL 
                        </span>
                      </div>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                         30-Day Spark Ads Whitelisting Authorization 
                      </h2>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-headline-md text-headline-md text-on-surface font-bold">
                        Rs 259,000
                      </div>
                      <div className="font-label-sm text-label-sm text-outline">
                        Net Creator Escrow
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-surface-container-low rounded-xl space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex items-center gap-2 text-on-surface font-medium">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        verified_user
                      </span>
                       Deliverable: TikTok Spark Ads Code Submission &amp; Identity Whitelist
                    </div>
                    <p>
                       Awaiting creator code submission. When submitted, Collabio API validates code format, authentication window (minimum 30 calendar days), and paid usage rights directly via TikTok Marketing API.
                    </p>
                    <div className="flex items-center gap-4 text-on-surface-variant font-label-sm text-label-sm pt-2">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px] text-outline">
                          event
                        </span>
                         Due: 02 Dec 2026 
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px] text-outline">
                          bolt
                        </span>
                         Scheduled Release: Instant upon API authorization 
                      </span>
                    </div>
                  </div>
                </article>
                <article className="bg-surface-container-lowest rounded-xl shadow-sm p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        history
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                        Bilateral Activity &amp; Message Audit Log
                      </h2>
                    </div>
                    <span className="font-label-sm text-label-sm text-outline">
                      Immutable Timestamped Ledger
                    </span>
                  </div>
                  <div className="space-y-4 pl-2">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[16px]">
                          upload_file
                        </span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between font-label-sm text-label-sm">
                          <span className="text-on-surface font-semibold">
                            Charlotte Emily Clark uploaded Unlisted YouTube draft video link &amp; sponsor metadata
                          </span>
                          <span className="text-outline">
                            23 Nov, 14:18 GMT
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                           “Here is the draft review cut for Milestone 1! The Lumina Studio spotlight is placed seamlessly right after the developer CLI walkthrough.” 
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[16px]">
                          verified
                        </span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between font-label-sm text-label-sm">
                          <span className="text-on-surface font-semibold">
                            Collabio Automated Checker verified sponsor duration: 88 seconds
                          </span>
                          <span className="text-outline">
                            23 Nov, 14:18 GMT
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                           Automated frame analysis confirmed brand presence from 03:14 to 04:32. Minimum threshold of 60 seconds met. 
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-surface-container-high text-tertiary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[16px]">
                          hourglass_top
                        </span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between font-label-sm text-label-sm">
                          <span className="text-on-surface font-semibold">
                            48-Hour Anti-Ghosting review timer initiated
                          </span>
                          <span className="text-outline">
                            23 Nov, 14:18 GMT
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                           Timer expiration benchmark set for 25 Nov 2026 at 14:18 GMT. 
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[16px]">
                          draw
                        </span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between font-label-sm text-label-sm">
                          <span className="text-on-surface font-semibold">
                            Revised Pact countersigned by Charlotte Emily Clark and David Vance
                          </span>
                          <span className="text-outline">
                            20 Nov, 16:45 GMT
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                           eIDAS digital certificate hash generated and distributed. 
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[16px]">
                          account_balance_wallet
                        </span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between font-label-sm text-label-sm">
                          <span className="text-on-surface font-semibold">
                            Rs 823,620Escrow settled into Barclays Statutory Trust Vault
                          </span>
                          <span className="text-outline">
                            20 Nov, 16:42 GMT
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                           Settled via Barclays UK Faster Payments. Vault ref: GB-STRIPE-5028. 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t-0 bg-surface-container-low rounded-xl p-4 space-y-3">
                    <span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        chat_bubble
                      </span>
                       Send Bilateral Note (Logged to Escrow Audit Ledger) 
                    </span>
                    <div className="relative">
                      <textarea placeholder="Leave constructive feedback, request video revisions, or message Charlotte directly..." rows={2} className="w-full rounded-lg bg-surface-container-lowest p-3 font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button title="Attach file" className="p-1.5 rounded hover:bg-surface-container text-outline hover:text-on-surface transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            attach_file
                          </span>
                        </button>
                        <span className="font-label-sm text-label-sm text-outline">
                          Supports PDF, MP4, PNG (Max 50MB)
                        </span>
                      </div>
                      <button className="px-4 py-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-colors flex items-center gap-1.5 shadow-sm">
                        <span>
                          Send Note
                        </span>
                        <span className="material-symbols-outlined text-[15px]">
                          send
                        </span>
                      </button>
                    </div>
                  </div>
                </article>
              </div>
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                <aside className="bg-surface-container-lowest rounded-xl shadow-sm p-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        account_balance
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Custodial Trust Vault
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                       Live &amp; Segregated 
                    </span>
                  </div>
                  <div className="space-y-3 font-body-sm text-body-sm">
                    <div className="p-3 bg-surface-container-low rounded-lg space-y-1">
                      <div className="text-on-surface-variant font-label-sm text-label-sm">
                        Depository Institution
                      </div>
                      <div className="font-semibold text-on-surface">
                        Barclays Bank UK PLC (Commercial Escrow)
                      </div>
                      <div className="text-on-surface-variant font-mono text-[12px]">
                        Client Trust Vault A-8291
                      </div>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-lg space-y-1">
                      <div className="text-on-surface-variant font-label-sm text-label-sm">
                        Segregated Account Number (IBAN)
                      </div>
                      <div className="font-mono text-[13px] font-semibold text-on-surface">
                        GB89 BARC 2000 0012 3456 78
                      </div>
                      <div className="font-label-sm text-[11px] text-secondary flex items-center gap-1 font-semibold">
                        <span className="material-symbols-outlined text-[13px]">
                          shield
                        </span>
                         Insolvency Remote Statutory Protection 
                      </div>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-lg space-y-1">
                      <div className="text-on-surface-variant font-label-sm text-label-sm">
                        Cryptographic Release Hash
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] text-on-surface truncate pr-2">
                          3d9a8f21e5c0b7...bc401f
                        </span>
                        <button title="Copy SHA-256 Hash" className="text-primary hover:text-primary-container p-1 rounded">
                          <span className="material-symbols-outlined text-[16px]">
                            content_copy
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
                      <span>
                        Payout Rail:
                      </span>
                      <span className="font-semibold text-on-surface flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                         UK Faster Payments (&lt;15s) 
                      </span>
                    </div>
                  </div>
                </aside>
                <aside className="bg-surface-container-lowest rounded-xl shadow-sm p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        api
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        YouTube Data API v3
                      </h3>
                    </div>
                    <span className="flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
                      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                       Connected 
                    </span>
                  </div>
                  <div className="space-y-2.5 font-body-sm text-body-sm">
                    <div className="flex items-center justify-between py-1 bg-surface-container-low px-3 rounded-lg">
                      <span className="text-on-surface-variant">
                        Target Channel
                      </span>
                      <span className="font-mono text-[12px] text-on-surface font-medium">
                        UC_x9K0qL2aZ93
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 bg-surface-container-low px-3 rounded-lg">
                      <span className="text-on-surface-variant">
                        Webhook Listener
                      </span>
                      <span className="font-mono text-[12px] text-secondary font-semibold">
                        ACTIVE
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 bg-surface-container-low px-3 rounded-lg">
                      <span className="text-on-surface-variant">
                        Release SLA
                      </span>
                      <span className="font-semibold text-on-surface">
                        &lt; 60 seconds
                      </span>
                    </div>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
                     Collabio receives real-time publish events directly from Google Cloud Platform. Payout execution triggers autonomously without manual bank intervention.
                  </p>
                </aside>
                <aside className="bg-surface-container-lowest rounded-xl shadow-sm p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary text-[20px]">
                        gavel
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Harrison &amp; Croft Terms
                      </h3>
                    </div>
                    <span className="font-label-sm text-label-sm text-outline font-mono">
                      Model 2.4
                    </span>
                  </div>
                  <div className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] text-secondary flex-shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>
                        <strong>
                          Revision Policy:
                        </strong>
                         2 iterations included; substantial scope changes require escrow adjustment.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] text-secondary flex-shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>
                        <strong>
                          Arbitration Cap:
                        </strong>
                         Capped at Rs 27,750for independent SRA solicitor adjudication.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] text-secondary flex-shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>
                        <strong>
                          Commercial Rights:
                        </strong>
                         Lumina Studio receives perpetual 30-day organic and paid Spark Ads rights upon settlement.
                      </span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button className="w-full py-2 px-3 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface transition-colors font-label-md text-label-md flex items-center justify-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        support_agent
                      </span>
                       Contact Collabio Escrow Referee
                    </button>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-surface-container-low shadow-[0_-1px_4px_rgba(0,0,0,0.02)] mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-outline-variant/20">
            <div className="space-y-1.5 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base">
                  verified_user
                </span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  FCA Regulated Safeguarding &amp; Escrow Protocols
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Funds are safeguarded in segregated statutory client trust accounts in accordance with UK Electronic Money Regulations. English Commercial Court Jurisdiction applies to all mutual pact covenants.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-label-md text-label-md text-on-surface-variant">
              <a className="hover:text-primary transition-colors" data-go="/legal" href="/legal">
                Dispute Rules
              </a>
              <a className="hover:text-primary transition-colors" data-go="/legal" href="/legal">
                Escrow Agreement
              </a>
              <a className="hover:text-primary transition-colors" data-go="/legal" href="/legal">
                Privacy Notice
              </a>
              <a className="hover:text-primary transition-colors" data-go="/legal" href="/legal">
                Regulatory Status
              </a>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-on-surface-variant font-label-sm text-label-sm">
            <span>
              © 2025 Collabio Ltd. All rights reserved. Registered in England &amp; Wales.
            </span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                FCA Reference #941824
              </span>
              <span>
                UK English Jurisdiction
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
