import Logo from '../components/Logo'

/** Pactly — Deal Creation Wizard (Step 2: Assign Counterparty) */
export default function DealCounterpartyPage() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="h-16 max-w-[1200px] mx-auto px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-xl">
            <a className="flex items-center gap-space-sm" data-go="/deals" href="/deals">
              <Logo className="h-8 w-auto object-contain" />
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
                Pactly
              </span>
            </a>
            <nav data-active-classes="bg-surface-container-high text-primary font-semibold" className="hidden md:flex items-center gap-space-xs">
              <a className="px-3 py-1.5 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/deals" href="/deals">
                Deals
              </a>
              <a className="px-3 py-1.5 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/profile" href="/profile">
                Profile
              </a>
              <a className="px-3 py-1.5 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/settings" href="/settings">
                Settings
              </a>
              <a className="px-3 py-1.5 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/help" href="/help">
                Help &amp; Legal
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex items-center gap-space-sm bg-surface-container-lowest px-3 py-1.5 rounded-full border border-outline-variant/40">
              <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-none">
                  In Escrow
                </span>
                <span className="font-label-lg text-label-lg text-on-surface font-semibold leading-tight">
                  Rs 4,606,500
                </span>
              </div>
            </div>
            <div className="h-7 w-[1px] bg-outline-variant/40 hidden sm:block"></div>
            <div className="relative group flex items-center gap-space-sm pl-1">
              <div className="text-right hidden lg:block">
                <div className="font-label-lg text-label-lg text-on-surface font-semibold leading-tight">
                  Lumina Studio
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
                  Brand account
                </div>
              </div>
              <button aria-label="Account menu" className="flex items-center gap-1.5 p-1 rounded-full hover:bg-surface-container transition-colors">
                <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary font-headline-sm text-headline-sm flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    business
                  </span>
                </div>
                <span className="material-symbols-outlined text-outline text-[18px]">
                  expand_more
                </span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-56 bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-lg py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                <div className="px-4 py-2 border-b border-outline-variant/30 lg:hidden">
                  <div className="font-label-lg text-label-lg text-on-surface font-semibold">
                    Lumina Studio
                  </div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">
                    Brand account · Rs 4,606,500
                  </div>
                </div>
                <a className="flex items-center gap-2 px-4 py-2 font-label-lg text-label-lg text-on-surface hover:bg-surface-container-low transition-colors" data-go="/profile" href="/profile">
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                    person
                  </span>
                  Brand Profile
                </a>
                <a className="flex items-center gap-2 px-4 py-2 font-label-lg text-label-lg text-on-surface hover:bg-surface-container-low transition-colors" data-go="/settings" href="/settings">
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                    tune
                  </span>
                  Billing &amp; Payouts
                </a>
                <a className="flex items-center gap-2 px-4 py-2 font-label-lg text-label-lg text-on-surface hover:bg-surface-container-low transition-colors" data-go="/help" href="/help">
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                    shield
                  </span>
                  Dispute Resolution
                </a>
                <div className="my-1 border-t border-outline-variant/30"></div>
                <a className="flex items-center gap-2 px-4 py-2 font-label-lg text-label-lg text-error hover:bg-error-container/20 transition-colors" data-go="/login" href="/login">
                  <span className="material-symbols-outlined text-[18px] text-error">
                    logout
                  </span>
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[340px] bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent blur-3xl pointer-events-none rounded-full"></div>
            <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin py-space-lg relative z-10 flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
                  <a className="hover:text-primary transition-colors flex items-center gap-1" data-go="/deals" href="/deals">
                    <span className="material-symbols-outlined text-[16px]">
                      folder_open
                    </span>
                     Deals 
                  </a>
                  <span className="material-symbols-outlined text-[14px] text-outline">
                    chevron_right
                  </span>
                  <a className="hover:text-primary transition-colors font-medium" href="#" onClick={(event) => event.preventDefault()}>
                    New Deal (#UK-5028)
                  </a>
                  <span className="material-symbols-outlined text-[14px] text-outline">
                    chevron_right
                  </span>
                  <span className="text-on-surface font-semibold bg-surface-container-high px-2 py-0.5 rounded">
                    Assign Counterparty
                  </span>
                </nav>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                     Draft #UK-5028 
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-fixed/60 text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px]">
                      gavel
                    </span>
                     English Commercial Law Model 2.4 
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px]">
                      verified_user
                    </span>
                     PKR (£) Protected 
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                  <a className="group flex items-center gap-space-sm p-2 rounded-lg hover:bg-surface-container-low transition-colors text-left" data-go="/deals/new" href="/deals/new">
                    <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px]">
                        check
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                        Step 1 • Completed
                      </div>
                      <div className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-primary transition-colors">
                        Scope &amp; Deliverables
                      </div>
                    </div>
                  </a>
                  <div className="flex items-center gap-space-sm p-2 rounded-lg bg-surface-container-high relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                    <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md font-bold shrink-0 shadow-sm">
                       2 
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                          Step 2 • Active
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      </div>
                      <div className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">
                        Assign Counterparty
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm p-2 rounded-lg opacity-60">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest text-outline flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[16px]">
                        lock
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Step 3 • Upcoming
                      </div>
                      <div className="font-headline-sm text-headline-sm text-on-surface truncate">
                        Escrow Funding Lock
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm p-2 rounded-lg opacity-60">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest text-outline flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[16px]">
                        lock
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Step 4 • Final
                      </div>
                      <div className="font-headline-sm text-headline-sm text-on-surface truncate">
                        Legal Terms &amp; Solicitor
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 max-w-3xl">
                <span className="font-label-sm text-label-sm font-semibold tracking-widest text-primary uppercase flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px]">
                    security
                  </span>
                   FCA Segregated Custody Architecture • Jurisdiction: England &amp; Wales 
                </span>
                <h1 className="font-headline-xl text-headline-xl text-on-surface">
                  Assign Contract Counterparty
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
                   Select an enrolled verified creator or invite an external talent partner via encrypted escrow pass. Upon selection, Pactly validates AML/KYC clearance and links payout rails. 
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start pb-space-xl">
                <div className="lg:col-span-8 flex flex-col gap-space-lg">
                  <div className="bg-surface-container-low p-1.5 rounded-xl flex flex-wrap sm:flex-nowrap gap-1 shadow-sm">
                    <button type="button" className="flex-1 py-2 px-3 rounded-lg bg-surface-container-lowest text-primary font-label-lg text-label-lg font-semibold shadow-sm flex items-center justify-center gap-2 transition-all">
                      <span className="material-symbols-outlined text-[18px]">
                        verified
                      </span>
                      <span>
                        Registered Talent
                      </span>
                      <span className="hidden sm:inline-block font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-1.5 py-0.5 rounded-full">
                        Instant
                      </span>
                    </button>
                    <button type="button" className="flex-1 py-2 px-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-lg text-label-lg font-medium flex items-center justify-center gap-2 transition-all">
                      <span className="material-symbols-outlined text-[18px]">
                        forward_to_inbox
                      </span>
                      <span>
                        External Creator Pass
                      </span>
                    </button>
                    <button type="button" className="flex-1 py-2 px-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-lg text-label-lg font-medium flex items-center justify-center gap-2 transition-all">
                      <span className="material-symbols-outlined text-[18px]">
                        history
                      </span>
                      <span>
                        Recent Collaborators
                      </span>
                    </button>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
                    <label htmlFor="talent-search" className="font-label-lg text-label-lg text-on-surface font-semibold flex items-center justify-between">
                      <span>
                        Search Verified Creator Registry
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1 font-semibold">
                        <span className="material-symbols-outlined text-[14px]">
                          format_image_left
                        </span>
                         Direct Companies House &amp; FCA Registry Sync 
                      </span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-outline text-[20px]">
                          search
                        </span>
                      </div>
                      <input id="talent-search" type="text" defaultValue="@charlotte_creator (charlotte@clarkcreative.co.uk)" className="w-full pl-10 pr-24 py-2.5 bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                      <div className="absolute inset-y-0 right-2 flex items-center">
                        <button title="Clear query" type="button" className="bg-surface-container hover:bg-surface-container-high text-on-surface-variant p-1 rounded-md transition-colors">
                          <span className="material-symbols-outlined text-[16px]">
                            close
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary-container/40 text-on-secondary-container">
                      <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                      <span className="font-label-sm text-label-sm font-semibold">
                        Active Registry Match: HM Treasury Sanction Check, PEP &amp; Companies House cleared
                      </span>
                      <span className="material-symbols-outlined text-[16px] ml-auto text-secondary">
                        verified
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold rounded-bl-xl flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        verified
                      </span>
                       Identity Confirmed &amp; KYC Level 3 
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md pt-2">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-primary-container text-on-primary flex items-center justify-center font-headline-lg text-headline-lg font-bold shadow-md">
                           CC 
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center ring-2 ring-surface-container-lowest">
                          <span className="material-symbols-outlined text-[14px] font-bold">
                            check
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                            Charlotte Emily Clark
                          </h3>
                          <span className="font-label-sm text-label-sm px-2 py-0.5 bg-surface-container-high rounded text-on-surface-variant font-medium">
                            Sole Trader / Contractor
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                          <span className="font-medium text-primary">
                            @charlotte_creator
                          </span>
                          <span>
                            •
                          </span>
                          <span>
                            Registered in Bristol, UK
                          </span>
                          <span>
                            •
                          </span>
                          <span className="text-secondary font-medium flex items-center gap-0.5">
                            <span className="material-symbols-outlined text-[14px]">
                              bolt
                            </span>
                             Instant Rails Active 
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-space-xs mt-1">
                      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                        Authenticated Channels &amp; API Handles
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                        <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center gap-space-sm">
                          <div className="w-8 h-8 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-[18px]">
                              play_circle
                            </span>
                          </div>
                          <div className="min-w-0">
                            <div className="font-label-md text-label-md font-semibold text-on-surface truncate">
                              @charlotte_vlogs
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                              <span>
                                184k subs
                              </span>
                              <span className="w-1 h-1 rounded-full bg-secondary"></span>
                              <span className="text-secondary">
                                OAuth Sync
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center gap-space-sm">
                          <div className="w-8 h-8 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-[18px]">
                              photo_camera
                            </span>
                          </div>
                          <div className="min-w-0">
                            <div className="font-label-md text-label-md font-semibold text-on-surface truncate">
                              @charlotte.creates
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                              <span>
                                142k fans
                              </span>
                              <span className="w-1 h-1 rounded-full bg-secondary"></span>
                              <span className="text-secondary">
                                Meta Verified
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center gap-space-sm">
                          <div className="w-8 h-8 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-[18px]">
                              music_video
                            </span>
                          </div>
                          <div className="min-w-0">
                            <div className="font-label-md text-label-md font-semibold text-on-surface truncate">
                              @charlotte_tok
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                              <span>
                                95k fans
                              </span>
                              <span className="w-1 h-1 rounded-full bg-secondary"></span>
                              <span className="text-secondary">
                                Spark Ads Ready
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm bg-surface-container-high/40 p-space-sm rounded-xl">
                      <div className="flex items-center gap-space-sm px-2">
                        <span className="material-symbols-outlined text-secondary text-[22px]">
                          verified
                        </span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            14 / 14 Pacts
                          </div>
                          <div className="font-label-sm text-label-sm text-on-surface-variant">
                            100% On-time Release
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-sm px-2">
                        <span className="material-symbols-outlined text-primary text-[22px]">
                          gavel
                        </span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            Zero Disputes
                          </div>
                          <div className="font-label-sm text-label-sm text-on-surface-variant">
                            Clean Tribunal Ledger
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-sm px-2">
                        <span className="material-symbols-outlined text-tertiary-fixed-dim text-[22px]">
                          schedule
                        </span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            26 Hours
                          </div>
                          <div className="font-label-sm text-label-sm text-on-surface-variant">
                            Avg. Deliverable Review
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px] text-secondary">
                          check_circle
                        </span>
                        <span>
                          <strong>
                            KYC / AML:
                          </strong>
                           HM Treasury Cleared (12 Oct 2026)
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px] text-secondary">
                          account_balance
                        </span>
                        <span>
                          <strong>
                            Banking Rail:
                          </strong>
                           NatWest Business (****4910) Faster Payments
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          contract
                        </span>
                        <span>
                          <strong>
                            Legal Master:
                          </strong>
                           Schedule 4 Pre-Agreed
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          Counterparty Notification &amp; Access Controls
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Configure how Charlotte receives notification of the escrow assignment and acceptance terms.
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-outline">
                        tune
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <label className="flex items-start gap-space-sm p-space-md rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors relative">
                        <input defaultChecked={true} name="invite_method" type="radio" className="mt-1 text-primary focus:ring-primary" />
                        <div className="flex flex-col gap-0.5">
                          <div className="font-label-lg text-label-lg font-semibold text-on-surface flex items-center gap-1.5">
                             Instant In-App &amp; Push 
                            <span className="bg-secondary text-on-secondary font-label-sm text-label-sm px-1.5 py-0.2 rounded font-semibold text-[10px]">
                              FAST
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                             Direct notification to creator mobile app and authenticated email with encrypted acceptance link. 
                          </span>
                        </div>
                      </label>
                      <label className="flex items-start gap-space-sm p-space-md rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
                        <input name="invite_method" type="radio" className="mt-1 text-primary focus:ring-primary" />
                        <div className="flex flex-col gap-0.5">
                          <div className="font-label-lg text-label-lg font-semibold text-on-surface">
                            Encrypted Email Escrow Pass
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                             Generates a single-use cryptographically signed PDF pass with legal preview and signature token. 
                          </span>
                        </div>
                      </label>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-space-xs">
                      <div>
                        <div className="font-label-lg text-label-lg text-on-surface font-semibold">
                          Counterparty Acceptance Window
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">
                          Time allotted for counterparty to sign terms before escrow reservation expires.
                        </div>
                      </div>
                      <select className="bg-surface-container-low font-label-lg text-label-lg text-on-surface px-3 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer">
                        <option selected={true}>
                          48 Hours (Standard Pactly Window)
                        </option>
                        <option>
                          24 Hours (Urgent Priority)
                        </option>
                        <option>
                          72 Hours (Weekend / Multi-stakeholder)
                        </option>
                        <option>
                          5 Working Days (Corporate Legal Review)
                        </option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-space-xs pt-space-xs">
                      <label htmlFor="invite-memo" className="font-label-lg text-label-lg text-on-surface font-semibold flex items-center justify-between">
                        <span>
                          Personalized Memo / Onboarding Instructions
                        </span>
                        <span className="font-label-sm text-label-sm text-outline">
                          Optional • Appears on creator's review portal
                        </span>
                      </label>
                      <textarea id="invite-memo" rows={3} className="w-full p-3 bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none leading-relaxed">
                        Hi Charlotte, thrilled to partner on the Q4 Tech Stack Integration. Milestone terms and escrow funding details are locked inside. Let us know if you need any adjustments to the 18 Nov delivery schedule!
                      </textarea>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-space-sm">
                    <a className="px-5 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg font-medium transition-colors flex items-center gap-2" data-go="/deals/new" href="/deals/new">
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_back
                      </span>
                       Back to Scope &amp; Deliverables 
                    </a>
                    <div className="flex items-center gap-space-sm">
                      <button type="button" className="px-4 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-label-lg text-label-lg font-medium transition-colors">
                         Save Draft 
                      </button>
                      <a className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2" data-go="/deals/new/escrow" href="/deals/new/escrow">
                        <span>
                          Continue to Step 3: Funding Lock
                        </span>
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-space-md sticky top-20">
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          account_balance_wallet
                        </span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Escrow Ledger
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded font-mono font-medium">
                        #UK-5028
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs bg-surface-container-low p-space-sm rounded-lg">
                      <div className="flex items-center justify-between font-label-md text-label-md text-on-surface">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                           Milestone 1: 60s YouTube Integration 
                        </span>
                        <span className="font-semibold">
                          Rs 444,000
                        </span>
                      </div>
                      <div className="flex items-center justify-between font-label-md text-label-md text-on-surface">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                           Milestone 2: Spark Ads Whitelisting (30d) 
                        </span>
                        <span className="font-semibold">
                          Rs 222,000
                        </span>
                      </div>
                      <div className="h-[1px] bg-outline-variant/30 my-1"></div>
                      <div className="flex items-center justify-between font-label-md text-label-md text-on-surface-variant">
                        <span>
                          Gross Creator Compensation
                        </span>
                        <span className="font-bold text-on-surface">
                          Rs 666,000
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 text-on-surface">
                      <div className="flex items-center justify-between font-label-md text-label-md text-on-surface-variant">
                        <span className="flex items-center gap-1">
                           Pactly Custody Fee (6%) 
                          <span title="Brand absorbed fee. Covers FCA trust segregation, automated dispute refereeing, and real-time Faster Payments rails." className="material-symbols-outlined text-[14px] text-outline cursor-help">
                            info
                          </span>
                        </span>
                        <span className="text-on-surface">
                          Rs 39,960
                        </span>
                      </div>
                      <div className="flex items-center justify-between font-label-sm text-label-sm text-secondary font-medium">
                        <span>
                          Fee Policy
                        </span>
                        <span>
                          Brand Absorbed (Zero Creator Fee)
                        </span>
                      </div>
                    </div>
                    <div className="bg-primary text-on-primary p-space-md rounded-xl flex flex-col gap-1 shadow-inner">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim">
                        Required Escrow Lock
                      </span>
                      <div className="flex items-baseline justify-between">
                        <span className="font-headline-xl text-headline-xl font-bold tracking-tight">
                          Rs 705,960
                        </span>
                        <span className="font-label-sm text-label-sm bg-primary-container px-2 py-0.5 rounded text-on-primary">
                          PKR Protected
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-primary-container leading-tight mt-1">
                         Held in ring-fenced Stripe Connect custodial trust under UK Law. 
                      </span>
                    </div>
                    <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1.5">
                      <div className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase tracking-wider">
                        Assigned Payee
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">
                            CC
                          </div>
                          <span className="font-label-md text-label-md text-on-surface font-semibold">
                            Charlotte Clark
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-secondary font-medium flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-[13px]">
                            bolt
                          </span>
                           FPS Ready 
                        </span>
                      </div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center justify-between pt-1">
                        <span>
                          Dispute Cap:
                        </span>
                        <span className="font-semibold text-on-surface">
                          Rs 27,750,000,000ax Arbitral Fee
                        </span>
                      </div>
                    </div>
                    <a className="w-full py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold shadow text-center transition-all flex items-center justify-center gap-2" data-go="/deals/new/escrow" href="/deals/new/escrow">
                      <span>
                        Continue to Step 3: Funding Lock
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </a>
                    <div className="bg-surface-container-high/60 p-space-sm rounded-lg flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                        shield
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                          FCA Regulated Custodial Safeguard
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant leading-normal">
                           Funds will be transferred to an insolvency-remote client escrow account upon Step 3 authorization. The assigned creator cannot access funds until milestone completion is verified. 
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-2">
                    <span className="font-label-sm text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                      Custody Guarantees
                    </span>
                    <div className="flex items-center gap-2 text-on-surface font-label-md text-label-md">
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        check_circle
                      </span>
                      <span>
                        NatWest Ring-Fenced Account
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface font-label-md text-label-md">
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        check_circle
                      </span>
                      <span>
                        Automated Deliverable Signature Tracking
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface font-label-md text-label-md">
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        check_circle
                      </span>
                      <span>
                        14-Day Inactive Auto-Release Rule
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin flex flex-col md:flex-row justify-between items-center gap-space-md text-on-surface-variant">
          <div className="flex items-center gap-space-sm">
            <Logo className="h-6 w-auto object-contain grayscale opacity-70" />
            <span className="font-label-md text-label-md">
              © 2025 Pactly Escrow Ltd. Registered in England &amp; Wales (No. 14298102). Regulated trust custody rails via FCA authorised institutions.
            </span>
          </div>
          <div className="flex items-center gap-space-lg font-label-md text-label-md">
            <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
              English Commercial Jurisdiction
            </a>
            <a className="hover:text-on-surface transition-colors" data-go="/welcome" href="/welcome">
              6% Fixed Escrow Fee
            </a>
            <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
              Arbitration &amp; Security
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
