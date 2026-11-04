/** Pactly — Escrow Top-Up Settled & Revised Pact Dispatched Modal */
export default function TopUpSettledPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-[1200px] mx-auto px-margin flex items-center justify-between gap-space-lg">
          <div className="flex items-center gap-space-xl">
            <a className="flex items-center gap-space-xs text-primary font-headline-md text-headline-md tracking-tight focus:outline-none" data-go="/deals" href="/deals">
              <span className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                P
              </span>
              <span className="font-headline-md text-headline-md text-on-surface">
                Pactly
              </span>
            </a>
            <nav data-active-classes="text-primary font-semibold border-b-2 border-primary" className="hidden md:flex items-center gap-space-lg h-16">
              <a aria-current="page" className="flex items-center gap-space-xs h-full transition-colors text-primary font-semibold border-b-2 border-primary" data-go="/deals" href="/deals">
                Deals
                <span className="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  3 Active
                </span>
              </a>
              <a className="text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg h-full flex items-center transition-colors" data-go="/invitations/uk-5028" href="/invitations/uk-5028">
                Invitations
              </a>
              <a className="text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg h-full flex items-center transition-colors" data-go="/profile" href="/profile">
                Profile
              </a>
              <a className="text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg h-full flex items-center transition-colors" data-go="/settings" href="/settings">
                Settings
              </a>
              <a className="text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg h-full flex items-center transition-colors" data-go="/help" href="/help">
                Help &amp; Legal
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-low text-secondary font-label-sm text-label-sm">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Rs 4,724,160
              </span>
              <span className="text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
                In Escrow
              </span>
            </div>
            <div className="flex items-center gap-space-sm pl-space-sm bg-surface-container-lowest">
              <div className="text-right hidden lg:block leading-tight">
                <p className="font-label-md text-label-md text-on-surface font-semibold">
                  Lumina Studio
                </p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Brand Account
                </p>
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
      <main className="w-full pt-16 bg-background flex-1 max-w-[1200px] mx-auto px-margin py-space-xl">
        <div className="flex flex-col w-full relative">
          <div aria-hidden="true" className="w-full pointer-events-none select-none opacity-40 blur-[5px] scale-[0.995] transition-all duration-300">
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm mb-space-lg">
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    Deal #UK-5028: Lumina Studio Ltd &amp; Charlotte Emily Clark
                  </span>
                </div>
                <span className="px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                  Counter-Offer Accepted
                </span>
              </div>
              <div className="grid grid-cols-3 gap-space-md">
                <div className="p-space-md bg-surface-container-low rounded-lg">
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Original Principal
                  </p>
                  <p className="font-headline-md text-headline-md text-on-surface">
                    Rs 705,960
                  </p>
                </div>
                <div className="p-space-md bg-surface-container rounded-lg">
                  <p className="font-label-sm text-label-sm text-primary">
                    Required Top-Up
                  </p>
                  <p className="font-headline-md text-headline-md text-primary">
                    +Rs 117,660
                  </p>
                </div>
                <div className="p-space-md bg-surface-container-high rounded-lg">
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Consolidated Total
                  </p>
                  <p className="font-headline-md text-headline-md text-on-surface">
                    Rs 823,620
                  </p>
                </div>
              </div>
            </div>
            <div className="h-64 bg-surface-container-lowest rounded-xl shadow-sm p-space-lg">
              <div className="w-1/3 h-4 bg-surface-container-high rounded mb-space-sm"></div>
              <div className="w-2/3 h-3 bg-surface-container-low rounded mb-space-lg"></div>
              <div className="grid grid-cols-2 gap-space-lg">
                <div className="h-32 bg-surface-container-low rounded-lg"></div>
                <div className="h-32 bg-surface-container-low rounded-lg"></div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-inverse-surface/45 backdrop-blur-sm flex items-center justify-center p-gutter-mobile sm:p-gutter overflow-y-auto">
            <div className="relative w-full max-w-[860px] bg-surface-container-lowest rounded-xl shadow-[0_20px_25px_-5px_rgba(17,24,39,0.08),0_8px_10px_-6px_rgba(17,24,39,0.03)] my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              <div className="h-1.5 w-full bg-gradient-to-r from-secondary-container via-primary-container to-secondary"></div>
              <div className="px-space-lg pt-space-lg pb-space-md">
                <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-sm">
                  <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                    <span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface font-semibold tracking-wide">
                      DEAL REF #UK-5028
                    </span>
                    <span className="text-outline">
                      •
                    </span>
                    <span className="flex items-center gap-1 font-medium text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px] text-secondary">
                        verified_user
                      </span>
                       FCA Regulated Custody Ledger 
                    </span>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold tracking-tight">
                      <span className="material-symbols-outlined text-[14px]">
                        lock
                      </span>
                       STATUS: REVISED ESCROW CONSOLIDATED &amp; PACT DISPATCHED 
                    </span>
                    <button aria-label="Close dialog" type="button" className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors">
                      <span className="material-symbols-outlined text-[20px]">
                        close
                      </span>
                    </button>
                  </div>
                </div>
                <div className="pr-space-md">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                     Escrow Top-Up Settled &amp; Revised Pact Dispatched 
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
                     The supplementary 
                    <strong className="text-on-surface font-semibold">
                      Rs 117,660
                    </strong>
                     escrow delta has settled via Barclays Faster Payments. Total bilateral commitment of 
                    <strong className="text-on-surface font-semibold">
                      Rs 823,620
                    </strong>
                     is now securely ring-fenced in custodial trust and bilateral amendments have been cryptographically dispatched to Charlotte Emily Clark. 
                  </p>
                </div>
              </div>
              <div className="px-space-lg pb-space-lg flex flex-col gap-space-lg max-h-[calc(85vh-160px)] overflow-y-auto">
                <div className="bg-surface-container-low rounded-xl p-space-lg relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-secondary-container/20 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-lg relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md font-semibold tracking-wide uppercase">
                        <span className="material-symbols-outlined text-[18px]">
                          account_balance
                        </span>
                         Consolidated Ring-Fenced Escrow 
                      </div>
                      <div className="flex items-baseline gap-space-sm mt-1">
                        <span className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                          Rs 823,620
                        </span>
                        <span className="font-label-lg text-label-lg text-on-surface-variant font-medium">
                          PKR
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        <span>
                          Rs 705,960Initial Locked + Rs 117,660Top-Up Settled (100% Insolvency Remote under UK Electronic Money Regulations 2011)
                        </span>
                      </p>
                    </div>
                    <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex items-center gap-space-sm self-start shrink-0">
                      <div className="w-10 h-10 rounded-full bg-secondary-container/40 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-[24px]">
                          shield
                        </span>
                      </div>
                      <div className="leading-tight pr-space-xs">
                        <div className="flex items-center gap-1 text-on-surface font-label-sm text-label-sm font-semibold">
                           FCA Safeguarded 
                          <span className="material-symbols-outlined text-[14px] text-secondary">
                            check_circle
                          </span>
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          Statutory Client Trust
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-md grid grid-cols-1 sm:grid-cols-2 gap-x-space-lg gap-y-space-sm bg-surface-container-lowest p-space-md rounded-lg">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider">
                        Custodial Vault Reference
                      </span>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight font-mono text-[13px]">
                          VAULT-GB-STRIPE-5028-CUSTODY
                        </span>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-medium">
                           NatWest / Barclays Clearing 
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider">
                        Settlement Rail &amp; Reference
                      </span>
                      <div className="font-body-sm text-body-sm text-on-surface font-medium mt-0.5 truncate">
                         Barclays Commercial UK (•••• 8219) — Instant (Ref: TXN-PACT-5028-TOPUP) 
                      </div>
                    </div>
                    <div className="sm:col-span-2 mt-1 pt-space-xs flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                      <div className="flex items-center gap-space-xs min-w-0">
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant shrink-0">
                          fingerprint
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant truncate font-mono">
                           SHA-256: 3d9a8f21e5c0b71946e3820fa9487c6109f2b84236a9081e7d21c54839bc401f 
                        </span>
                      </div>
                      <button type="button" className="shrink-0 px-space-xs py-0.5 rounded bg-surface-container-high hover:bg-surface-container text-primary font-label-sm text-label-sm font-semibold transition-colors">
                         Copy Hash 
                      </button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
                  <div className="md:col-span-7 bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-space-xs mb-space-sm">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[18px] text-primary">
                            view_timeline
                          </span>
                           Revised Deliverable Allocation 
                        </h3>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          2 Bilateral Milestones
                        </span>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container-low mb-space-xs">
                        <div className="flex items-start justify-between gap-space-xs">
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              <p className="font-label-lg text-label-lg text-on-surface font-semibold">
                                Milestone 1: 60s–90s Dedicated YouTube Integration
                              </p>
                            </div>
                            <p className="font-body-sm text-body-sm text-on-surface-variant ml-3 mt-0.5">
                               Due 25 Nov 2026 (+7 Days Approved) • Unlisted 4K draft approval + live broadcast YouTube API verification. 
                            </p>
                          </div>
                          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold shrink-0">
                            Rs 518,000
                          </span>
                        </div>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container-low mb-space-xs">
                        <div className="flex items-start justify-between gap-space-xs">
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                              <p className="font-label-lg text-label-lg text-on-surface font-semibold">
                                Milestone 2: 30-Day Spark Ads Whitelisting
                              </p>
                            </div>
                            <p className="font-body-sm text-body-sm text-on-surface-variant ml-3 mt-0.5">
                               Due 2 Dec 2026 • Instant release upon verified TikTok Spark Ads authorization token delivery. 
                            </p>
                          </div>
                          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold shrink-0">
                            Rs 259,000
                          </span>
                        </div>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container flex items-center justify-between text-on-surface-variant">
                        <div className="flex items-center gap-1 text-on-surface">
                          <span className="material-symbols-outlined text-[16px] text-primary">
                            verified
                          </span>
                          <span className="font-label-md text-label-md font-medium">
                            Pactly 6% Custody Fee: 100% Brand Absorbed
                          </span>
                          <span className="text-secondary font-label-sm text-label-sm font-semibold">
                            (Rs 0fee for Creator)
                          </span>
                        </div>
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          Rs 46,620
                        </span>
                      </div>
                    </div>
                    <div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface">
                      <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                        Consolidated Escrow Principal
                      </span>
                      <span className="font-headline-sm text-headline-sm font-bold text-primary">
                        Rs 823,620
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-5 bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-space-xs mb-space-sm">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[18px] text-secondary">
                            handshake
                          </span>
                           Designated Counterparty 
                        </h3>
                        <span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                          Verified
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex items-start gap-space-sm mb-space-sm">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high shrink-0 relative">
                          <img data-alt="Professional editorial portrait of Charlotte Emily Clark, a creative UK content producer with warm studio lighting, neutral minimalist backdrop, sharp focus, professional demeanor and contemporary styling." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA4UaqyiyVQKpspXvi9yUZER09mUJ-Li_m9M2t5H3QiP9S4YJDm3aPn2Vsnn-2KfJshAqzDkUZwQF_GqF75lolR7X0cYA_I-qmfIj8jzzgGKOY1kOSL-82_cZ1qywoda4whRAuBNPRSsRHBMX63MXeJb0tUyv9Jzffjbk89kU-jmhcg31v5bsF_CPlTmCcKx8SkRIFhHAb5i_BkBmO7Y0vT79O75YmrH10brSWqz5OD419OP8JA_O3Tg" className="w-full h-full object-cover" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1">
                            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">
                              Charlotte Emily Clark
                            </span>
                            <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-secondary text-[16px]">
                              check_circle
                            </span>
                          </div>
                          <p className="font-label-sm text-label-sm text-on-surface-variant truncate">
                            @charlotte_creator • Sole Trader
                          </p>
                          <span className="inline-block mt-1 px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-medium">
                            KYC Level 3 Verified UK
                          </span>
                        </div>
                      </div>
                      <div className="space-y-space-xs text-on-surface-variant font-body-sm text-body-sm">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[16px] text-outline">
                            account_balance_wallet
                          </span>
                          <span>
                            Rail: 
                            <strong>
                              NatWest Business
                            </strong>
                             (•••• 4910)
                          </span>
                        </div>
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[16px] text-outline">
                            mark_email_read
                          </span>
                          <span className="truncate">
                            Dispatched to: 
                            <strong>
                              charlotte@clarkcreative.co.uk
                            </strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[16px] text-outline">
                            sms
                          </span>
                          <span>
                            SMS alert: 
                            <strong>
                              +44 7700 ••••18
                            </strong>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-sm p-space-xs rounded bg-surface-container-lowest font-label-sm text-label-sm text-on-surface-variant flex items-center justify-between">
                      <span>
                        eIDAS Qualified Timestamp
                      </span>
                      <span className="font-mono text-[11px] text-on-surface font-medium">
                        2026-10-24 14:32:09 UTC
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-space-md">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        alt_route
                      </span>
                       Active Escrow &amp; Execution Lifecycle 
                    </h3>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                       Live Pipeline Active 
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-space-xs">
                          <span className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm text-label-sm font-bold">
                            <span className="material-symbols-outlined text-[14px]">
                              check
                            </span>
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                            Settled
                          </span>
                        </div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          1. Top-Up Settled &amp; Sealed
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                           Barclays Faster Payments cleared. Cryptographic pact hash generated &amp; sealed. 
                        </p>
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary mt-space-sm font-medium">
                        Completed Just Now
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-space-xs">
                          <span className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm text-label-sm font-bold">
                            <span className="material-symbols-outlined text-[14px]">
                              check
                            </span>
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                            Dispatched
                          </span>
                        </div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          2. Dispatched to Creator
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                           Charlotte received direct passkey token via encrypted email and SMS alert. 
                        </p>
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary mt-space-sm font-medium">
                        Pact Sent
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-primary-container/10 rounded-bl-full pointer-events-none"></div>
                      <div>
                        <div className="flex items-center justify-between mb-space-xs">
                          <span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">
                             3 
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span>
                             Active 48h 
                          </span>
                        </div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          3. 48-Hour Acceptance
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                           48h window restarted. Charlotte reviews revised contract addendum to countersign. 
                        </p>
                      </div>
                      <div className="mt-space-sm flex items-center gap-1 font-label-sm text-label-sm text-tertiary-container font-semibold">
                        <span className="material-symbols-outlined text-[14px]">
                          timer
                        </span>
                         47h 59m remaining 
                      </div>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col justify-between opacity-80">
                      <div>
                        <div className="flex items-center justify-between mb-space-xs">
                          <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm font-semibold">
                             4 
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                            Standby
                          </span>
                        </div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          4. Autonomous API Verification
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                           YouTube Data API v3 &amp; TikTok Ads Manager listeners armed for auto-release upon delivery. 
                        </p>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant mt-space-sm font-medium">
                        Awaiting Countersignature
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low px-space-lg py-space-md flex flex-col gap-space-sm">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <button type="button" className="inline-flex items-center gap-1.5 px-space-sm py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md font-medium shadow-sm transition-colors">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        download
                      </span>
                      <span>
                        Download Revised Pact &amp; Custody Certificate (PDF)
                      </span>
                    </button>
                    <button type="button" className="inline-flex items-center gap-1.5 px-space-sm py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md font-medium shadow-sm transition-colors">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                        link
                      </span>
                      <span>
                        Copy Direct Review Link
                      </span>
                    </button>
                  </div>
                  <a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold shadow-md hover:shadow-lg transition-all focus:outline-none" data-go="/deals" href="/deals">
                    <span>
                      Go to Deals Dashboard
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="flex items-center justify-between gap-space-sm pt-space-xs text-on-surface-variant">
                  <p className="font-label-sm text-label-sm text-outline flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-secondary">
                      gavel
                    </span>
                     All client funds held in ring-fenced segregated accounts under FCA regulatory supervision. Protected by Senior Courts of England &amp; Wales statutory dispute protocol. 
                  </p>
                  <span className="font-label-sm text-label-sm text-outline font-mono hidden md:inline-block">
                    TXN #PACT-5028-20261024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest mt-auto shadow-[0_-1px_6px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1200px] mx-auto px-margin py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter text-on-surface-variant font-body-sm text-body-sm">
            <div className="md:col-span-8 flex flex-col gap-space-xs">
              <p className="font-label-md text-label-md text-on-surface font-semibold">
                FCA Regulated Safeguarding &amp; Escrow Protocols
              </p>
              <p className="text-on-surface-variant">
                Pactly Escrow Ltd acts as an independent referee. All transaction funds are held in segregated client bank accounts protected under the UK Payment Services Regulations (PSR 2017) and FCA safeguarding requirements. Governed exclusively under English Commercial Jurisdiction.
              </p>
              <p className="text-on-surface-variant">
                Company Registration No. 14289410 | Transparent fixed escrow service fee applied on milestone completion.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col md:items-end justify-between gap-space-md">
              <div className="flex flex-wrap gap-space-md text-on-surface-variant">
                <a className="hover:text-on-surface transition-colors font-label-sm text-label-sm" data-go="/legal" href="/legal">
                  Dispute Rules
                </a>
                <a className="hover:text-on-surface transition-colors font-label-sm text-label-sm" data-go="/legal" href="/legal">
                  Escrow Agreement
                </a>
                <a className="hover:text-on-surface transition-colors font-label-sm text-label-sm" data-go="/legal" href="/legal">
                  Privacy Notice
                </a>
                <a className="hover:text-on-surface transition-colors font-label-sm text-label-sm" data-go="/legal" href="/legal">
                  Regulatory Status
                </a>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                © 2024 Pactly Escrow Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
