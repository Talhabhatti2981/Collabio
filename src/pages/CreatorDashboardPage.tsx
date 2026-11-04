/** Pactly — Creator Dashboard */
export default function CreatorDashboardPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="bg-surface-container-low px-margin-mobile lg:px-margin">
          <div className="max-w-7xl mx-auto h-8 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[14px]">
                verified_user
              </span>
              <span>
                Custody under FCA-regulated partner rails • Stripe Connect segregated client balances
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-space-md">
              <span className="flex items-center gap-space-xs text-secondary font-label-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Escrow Status: Protected
              </span>
              <span className="text-outline-variant">
                |
              </span>
              <span>
                UK &amp; Cross-Border Commercial Agreements
              </span>
            </div>
          </div>
        </div>
        <div className="h-16 px-margin-mobile lg:px-margin bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-xl">
              <a className="flex items-center gap-2 group" data-go="/deals" href="/deals">
                <span className="font-headline-md text-headline-md tracking-tight font-bold text-on-surface">
                  Pactly
                </span>
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              </a>
              <nav data-active-classes="bg-primary-container text-on-primary font-label-md rounded-lg" className="hidden lg:flex items-center gap-space-xs">
                <a aria-current="page" className="px-space-md py-space-sm transition-colors flex items-center gap-space-xs bg-primary-container text-on-primary font-label-md rounded-lg" data-go="/deals" href="/deals">
                  Deals
                  <span className="ml-1 px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary text-[10px] font-bold leading-none">
                    2
                  </span>
                </a>
                <a className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-go="/creator" href="/creator">
                  Earnings &amp; Payouts
                </a>
                <a className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-go="/profile" href="/profile">
                  Profile
                </a>
                <a className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-go="/settings" href="/settings">
                  Settings
                </a>
                <a className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-go="/help" href="/help">
                  Help &amp; Legal
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-space-md">
              <div className="hidden sm:flex items-center gap-space-sm px-space-md py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                <span className="material-symbols-outlined text-[16px] text-on-secondary-fixed">
                  lock
                </span>
                <span className="font-semibold">
                  Guaranteed in Escrow:
                </span>
                <span>
                  Rs 1,239,500
                </span>
              </div>
              <div className="flex items-center gap-space-sm pl-space-sm">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary text-[18px]">
                    person
                  </span>
                </div>
                <div className="hidden md:flex flex-col text-left">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    @charlotte_creator
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Creator Account
                  </span>
                </div>
                <button aria-label="User menu" type="button" className="text-on-surface-variant hover:text-on-surface focus:outline-none">
                  <span className="material-symbols-outlined text-[20px]">
                    expand_more
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-24 bg-surface flex-grow">
        <div className="flex flex-col w-full">
          <aside aria-label="Account status alert" className="w-full bg-amber-500/10 px-margin-mobile lg:px-margin py-space-sm border-b border-amber-500/20">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-tertiary-container shrink-0 text-[18px]">
                  verified
                </span>
                <p className="font-body-sm text-body-sm text-tertiary">
                  <strong className="font-semibold text-on-surface">
                    Verify your email to accept or countersign deals.
                  </strong>
                   You can explore the creator dashboard in read-only mode in the meantime. Action buttons remain locked. 
                </p>
              </div>
              <div className="flex items-center gap-space-xs shrink-0 pl-7 sm:pl-0">
                <button type="button" className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-container-lowest text-tertiary font-label-md text-label-md hover:bg-surface-container-low transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[14px]">
                    send
                  </span>
                   Resend verification link 
                </button>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm">
                   42s cooldown 
                </span>
              </div>
            </div>
          </aside>
          <div className="w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-lg pb-space-xl">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-lg">
              <div className="max-w-3xl">
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                    UK Independent Creator Rail
                  </span>
                  <span className="text-outline-variant">
                    •
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Arbitration Ready under English Law
                  </span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  Creator Escrow &amp; Milestone Hub
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                   Track your active brand pacts, upload drafts for approval, and monitor funds guaranteed in segregated Stripe escrow under English law. 
                </p>
              </div>
              <div className="relative group shrink-0">
                <button type="button" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-surface-variant font-label-md text-label-md cursor-pointer shadow-sm" data-go="/deals/new">
                  <span>
                    Create custom pact link
                  </span>
                  <span className="material-symbols-outlined text-[16px]">
                    add
                  </span>
                </button>
                <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex w-72 p-2.5 bg-inverse-surface text-inverse-on-surface rounded-lg shadow-xl font-label-sm text-label-sm z-20 flex-col gap-1 pointer-events-none">
                  <div className="flex items-center gap-1 font-semibold text-secondary-fixed">
                    <span className="material-symbols-outlined text-[14px]">
                      info
                    </span>
                     Brand-Initiated Flow 
                  </div>
                  <p className="text-inverse-on-surface/90">
                    Only brands initiate formal legal pacts, but you can share your unique Pactly creator handle to receive binding inbound briefs.
                  </p>
                </div>
              </div>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              <aside aria-label="Sidebar navigation and escrow status" className="lg:col-span-4 xl:col-span-3 flex flex-col gap-space-md">
                <nav aria-label="Creator dashboard navigation" className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col gap-1">
                  <a className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm" data-go="/deals" href="/deals">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[18px]">
                        handshake
                      </span>
                      <span>
                        Deals
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest text-primary-container font-label-sm text-label-sm font-semibold">
                      2
                    </span>
                  </a>
                  <a className="flex items-center justify-between px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-md text-label-md transition-colors" data-go="/creator" href="/creator">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[18px]">
                        account_balance_wallet
                      </span>
                      <span>
                        Earnings &amp; Payouts
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-medium">
                      Rs 1,239,500
                    </span>
                  </a>
                  <a className="flex items-center justify-between px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-md text-label-md transition-colors" data-go="/complete-profile" href="/complete-profile">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[18px]">
                        badge
                      </span>
                      <span>
                        Profile
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      90%
                    </span>
                  </a>
                  <a className="flex items-center justify-between px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-md text-label-md transition-colors" data-go="/settings" href="/settings">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[18px]">
                        tune
                      </span>
                      <span>
                        Settings
                      </span>
                    </div>
                  </a>
                  <a className="flex items-center justify-between px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-md text-label-md transition-colors" data-go="/legal" href="/legal">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[18px]">
                        gavel
                      </span>
                      <span>
                        Dispute Protocol
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[14px] text-outline">
                      open_in_new
                    </span>
                  </a>
                </nav>
                <section aria-labelledby="guarantee-heading" className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none"></div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        verified_user
                      </span>
                      <span id="guarantee-heading" className="font-label-sm text-label-sm tracking-wider text-secondary font-bold uppercase">
                        Payout Guarantee
                      </span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  </div>
                  <div className="text-headline-lg font-headline-lg text-on-surface tracking-tight mt-1">
                     Rs 1,239,500 
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                     Held in segregated Stripe Escrow under English commercial law. Zero payment chasing; released automatically upon verified milestone delivery. 
                  </p>
                  <div className="mt-4 pt-3 bg-surface-container-low rounded-lg p-3">
                    <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface mb-1.5">
                      <span className="font-medium">
                        2 Funded Pacts Protected
                      </span>
                      <span className="text-secondary font-semibold">
                        100% Bonded
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                      <div style={{ "width": "100%" }} className="h-full bg-secondary rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2 font-label-sm text-label-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-[13px] text-secondary">
                        bolt
                      </span>
                      <span>
                        Payout via UK Faster Payments / BACS
                      </span>
                    </div>
                  </div>
                </section>
                <aside aria-label="Legal protection reassurance" className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center shrink-0 text-primary">
                      <span className="material-symbols-outlined text-[18px]">
                        shield
                      </span>
                    </div>
                    <div>
                      <div className="font-label-sm text-label-sm uppercase tracking-wide font-bold text-primary">
                        Automated Verification
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                         No subjective brand rejections. If requirements listed in the agreed brief are fulfilled, funds release is legally guaranteed. 
                      </p>
                    </div>
                  </div>
                </aside>
                <div className="bg-surface-container-low rounded-xl p-space-md flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-headline-sm shrink-0">
                     CC 
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full ring-2 ring-surface-container-lowest"></span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-label-md text-label-md font-semibold text-on-surface truncate">
                      Charlotte Clark
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      pactly.co.uk/@charlotte_creator
                    </div>
                  </div>
                </div>
              </aside>
              <main className="lg:col-span-8 xl:col-span-9 flex flex-col gap-space-lg">
                <div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-sm">
                  <nav aria-label="Filter deals" className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                    <button type="button" className="px-3 py-1.5 rounded-lg bg-surface-container font-label-md text-label-md text-on-surface font-semibold shadow-xs">
                       All Deals 
                      <span className="ml-1 text-on-surface-variant font-normal">
                        (2)
                      </span>
                    </button>
                    <button type="button" className="px-3 py-1.5 rounded-lg hover:bg-surface-container-low text-on-surface-variant font-label-md text-label-md transition-colors flex items-center gap-1">
                      <span>
                        Action Required
                      </span>
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      <span className="text-on-surface-variant font-normal">
                        (1)
                      </span>
                    </button>
                    <button type="button" className="px-3 py-1.5 rounded-lg hover:bg-surface-container-low text-on-surface-variant font-label-md text-label-md transition-colors">
                       In Progress 
                      <span className="text-on-surface-variant font-normal">
                        (1)
                      </span>
                    </button>
                    <button type="button" className="px-3 py-1.5 rounded-lg hover:bg-surface-container-low text-on-surface-variant font-label-md text-label-md transition-colors">
                       Completed 
                      <span className="text-on-surface-variant font-normal">
                        (3)
                      </span>
                    </button>
                  </nav>
                  <div className="flex items-center justify-end gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-surface-container">
                    <button id="toggle-empty-view-btn" type="button" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors">
                      <span id="empty-state-icon" className="material-symbols-outlined text-[15px]">
                        visibility
                      </span>
                      <span id="empty-state-btn-text">
                        Preview Empty State
                      </span>
                    </button>
                  </div>
                </div>
                <div id="deals-active-container" className="flex flex-col gap-space-md">
                  <article className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md sm:p-space-lg transition-all hover:shadow-md cursor-pointer" data-go="/deals/uk-5028/review">
                    <div className="flex flex-col gap-space-md">
                      <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container-low">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center font-bold text-primary text-headline-sm">
                             LS 
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                                Lumina Studio
                              </h2>
                              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                                #UK-4891
                              </span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              Commercial Partnership • Registered Agency UK
                            </span>
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                           In progress — Draft due 
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center">
                        <div className="md:col-span-7 flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-on-surface font-label-md text-label-md">
                            <span className="material-symbols-outlined text-[18px] text-primary">
                              video_library
                            </span>
                            <span className="font-semibold">
                              Deliverable Scope
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface font-medium">
                             1x Verified Instagram Reel + 30-Day Organic Usage 
                          </p>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm w-fit mt-1">
                            <span className="material-symbols-outlined text-primary text-[15px]">
                              timer
                            </span>
                            <span>
                              Draft upload due in 
                              <strong className="text-on-surface font-semibold">
                                48 hours
                              </strong>
                               (22 Oct 2026, 18:00 BST)
                            </span>
                          </div>
                        </div>
                        <div className="md:col-span-5 bg-surface-container-low/70 rounded-lg p-3.5 flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                              Net Guaranteed Payout
                            </span>
                            <span className="material-symbols-outlined text-secondary text-[16px]">
                              lock
                            </span>
                          </div>
                          <div className="text-headline-md font-headline-md text-secondary font-bold mt-1">
                             Rs 834,720 
                          </div>
                          <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                             Rs 888,000gross brand deposit minus 6% fixed Pactly fee held in escrow. 
                          </p>
                        </div>
                      </div>
                      <div className="pt-space-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm bg-surface-container-low/30 -mx-space-md sm:-mx-space-lg -mb-space-md sm:-mb-space-lg px-space-md sm:px-space-lg py-3 rounded-b-xl">
                        <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[16px] text-primary">
                            info
                          </span>
                          <span>
                            Brand has 3 working days to approve or request changes (max 2 rounds permitted).
                          </span>
                        </div>
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          <button type="button" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm" data-go="/creator/uk-5028/resubmit">
                            <span>
                              Upload Draft for Review
                            </span>
                            <span className="material-symbols-outlined text-[16px]">
                              arrow_forward
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md sm:p-space-lg transition-all hover:shadow-md cursor-pointer" data-go="/creator/uk-5028/sign">
                    <div className="flex flex-col gap-space-md">
                      <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container-low">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center font-bold text-amber-700 text-headline-sm">
                             FN 
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                                Finova UK
                              </h2>
                              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                                #UK-4922
                              </span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              Fintech Services • Standard Pactly Agreement
                            </span>
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-800 font-label-sm text-label-sm font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                           Awaiting signature 
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center">
                        <div className="md:col-span-7 flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-on-surface font-label-md text-label-md">
                            <span className="material-symbols-outlined text-[18px] text-amber-600">
                              movie
                            </span>
                            <span className="font-semibold">
                              Deliverable Scope
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface font-medium">
                             2x TikTok Videos (Tech Fintech showcase) 
                          </p>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary/10 text-secondary font-label-sm text-label-sm w-fit mt-1">
                            <span className="material-symbols-outlined text-[15px]">
                              check_circle
                            </span>
                            <span>
                              Brand already deposited funds into Stripe escrow
                            </span>
                          </div>
                        </div>
                        <div className="md:col-span-5 bg-surface-container-low/70 rounded-lg p-3.5 flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                              Net Guaranteed Payout
                            </span>
                            <span className="material-symbols-outlined text-secondary text-[16px]">
                              lock_clock
                            </span>
                          </div>
                          <div className="text-headline-md font-headline-md text-on-surface font-bold mt-1">
                             Rs 521,700 
                          </div>
                          <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                             (Rs 555,000gross deposit minus 6% escrow service fee) 
                          </p>
                        </div>
                      </div>
                      <div className="pt-space-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm bg-surface-container-low/30 -mx-space-md sm:-mx-space-lg -mb-space-md sm:-mb-space-lg px-space-md sm:px-space-lg py-3 rounded-b-xl">
                        <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-[15px] text-outline">
                            history_edu
                          </span>
                          <span>
                            Amendment 0 of 2 used. You can request specific changes to dates or brief before signing.
                          </span>
                        </div>
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          <button type="button" className="px-3 py-1.5 text-on-surface-variant hover:text-error font-label-sm text-label-sm transition-colors" data-go="/creator">
                             Decline offer 
                          </button>
                          <button type="button" className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container-low transition-colors shadow-sm font-semibold" data-go="/creator/uk-5028/sign">
                            <span>
                              Review &amp; Sign Pact
                            </span>
                            <span className="material-symbols-outlined text-[16px]">
                              edit_document
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md sm:p-space-lg transition-all opacity-95 hover:opacity-100 cursor-pointer" data-go="/deals/uk-5028/closed">
                    <div className="flex flex-col gap-space-md">
                      <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container-low">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center font-bold text-secondary text-headline-sm">
                             BW 
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                                Bloom &amp; Wild Labs
                              </h2>
                              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                                #UK-4820
                              </span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              Direct D2C Brand • Completed 14 Oct 2026
                            </span>
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">
                            check
                          </span>
                           Complete — Paid 
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center">
                        <div className="md:col-span-7 flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-on-surface font-label-md text-label-md">
                            <span className="material-symbols-outlined text-[18px] text-secondary">
                              smart_display
                            </span>
                            <span className="font-semibold">
                              Deliverable Scope
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface font-medium">
                             1x Dedicated YouTube Integration 
                          </p>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm w-fit mt-1">
                            <span className="material-symbols-outlined text-secondary text-[15px]">
                              code
                            </span>
                            <span>
                              Verification Hash: 
                              <code className="font-mono text-on-surface">
                                API Check 0x9b..72e1 verified live link
                              </code>
                            </span>
                          </div>
                        </div>
                        <div className="md:col-span-5 bg-surface-container-low/70 rounded-lg p-3.5 flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                              Released Escrow Payout
                            </span>
                            <span className="material-symbols-outlined text-secondary text-[16px]">
                              payments
                            </span>
                          </div>
                          <div className="text-headline-md font-headline-md text-on-surface font-bold mt-1">
                             Rs 1,147,740 
                          </div>
                          <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                             Paid out directly to Monzo UK (
                            <span className="font-mono">
                              •••4821
                            </span>
                            ) via BACS 
                          </p>
                        </div>
                      </div>
                      <div className="pt-space-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm bg-surface-container-low/30 -mx-space-md sm:-mx-space-lg -mb-space-md sm:-mb-space-lg px-space-md sm:px-space-lg py-3 rounded-b-xl">
                        <span className="font-label-sm text-label-sm text-secondary font-medium flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">
                            receipt_long
                          </span>
                           VAT Invoice &amp; Remittance advice generated automatically 
                        </span>
                        <button type="button" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors shadow-xs">
                          <span className="material-symbols-outlined text-[15px]">
                            download
                          </span>
                          <span>
                            Download Statement &amp; Remittance Advice
                          </span>
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
                <section id="creator-empty-state" className="hidden bg-surface-container-lowest rounded-xl p-space-xl shadow-sm text-center flex-col items-center justify-center gap-space-md">
                  <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-[32px]">
                      folder_open
                    </span>
                  </div>
                  <div className="max-w-md">
                    <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                      No invitations yet
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                       Brands initiate pacts by entering your registered creator email or handle (
                      <strong className="text-on-surface">
                        @charlotte_creator
                      </strong>
                      ). When a brand submits a brief and deposits funds, it will appear here instantly. 
                    </p>
                  </div>
                  <div className="w-full max-w-lg bg-surface-container-low rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-2 overflow-hidden text-left w-full sm:w-auto">
                      <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                        link
                      </span>
                      <span className="font-mono font-body-sm text-body-sm text-on-surface truncate">
                        pactly.co.uk/@charlotte_creator
                      </span>
                    </div>
                    <button type="button" className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm">
                      <span className="material-symbols-outlined text-[16px]">
                        content_copy
                      </span>
                      <span>
                        Copy Invite Link
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center gap-4 text-outline font-label-sm text-label-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-secondary">
                        verified
                      </span>
                       Guaranteed Escrow 
                    </span>
                    <span>
                      •
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-secondary">
                        balance
                      </span>
                       UK Law Protection 
                    </span>
                    <span>
                      •
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-secondary">
                        savings
                      </span>
                       0% Chasing 
                    </span>
                  </div>
                </section>
                <footer className="bg-surface-container-low/60 rounded-xl p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shrink-0 shadow-xs">
                      <span className="material-symbols-outlined text-[20px]">
                        help_outline
                      </span>
                    </div>
                    <div>
                      <div className="font-label-md text-label-md font-semibold text-on-surface">
                        How does Pactly protect creators?
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Brands must fund escrow before you begin work. Upon delivery verification, funds release automatically.
                      </p>
                    </div>
                  </div>
                  <a className="shrink-0 font-label-md text-label-md text-primary font-semibold hover:underline inline-flex items-center gap-1" data-go="/legal" href="/legal">
                     Read Creator Escrow FAQ 
                    <span className="material-symbols-outlined text-[16px]">
                      chevron_right
                    </span>
                  </a>
                </footer>
              </main>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_8px_rgba(0,0,0,0.02)] py-space-xl mt-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-headline-sm tracking-tight font-bold text-on-surface">
                Pactly
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              <span className="font-body-sm text-body-sm text-on-surface-variant ml-2">
                — Independent Escrow Infrastructure for Creator Commerce
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm">
              <a className="text-on-surface-variant hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Escrow Protocol (6%)
              </a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Standard UK Terms
              </a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Arbitration Guidelines
              </a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm pt-space-md font-body-sm text-body-sm text-on-surface-variant">
            <p className="max-w-3xl">
              Pactly acts as an impartial software custodian. Funds held in segregated client escrow accounts powered by authorised payment institutions regulated under the UK Electronic Money Regulations 2011. Registered in England &amp; Wales.
            </p>
            <p className="font-label-sm text-label-sm shrink-0">
              © 2025 Pactly Technologies Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
