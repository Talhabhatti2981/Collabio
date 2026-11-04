import Logo from '../components/Logo'

/** Pactly — Invite a Creator (Known vs Unknown states) */
export default function InviteCreatorPage() {
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
          <div className="max-w-[1200px] w-full mx-auto px-margin py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" data-go="/deals" href="/deals">
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_back
                  </span>
                   Deals 
                </a>
                <span className="text-outline-variant font-body-sm text-body-sm">
                  /
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  Deal #UK-5012
                </span>
                <span className="text-outline-variant font-body-sm text-body-sm">
                  /
                </span>
                <span className="font-label-md text-label-md text-primary font-semibold">
                  Recipient Counterparty
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full self-start md:self-auto shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium tracking-wide">
                  UK Independent Creator Rail • English Commercial Jurisdiction
                </span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
              <div>
                <div className="inline-block font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold mb-1">
                  Milestone 1 • Identification Stage
                </div>
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                  Invite Creator to Deal #UK-5012
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-2xl">
                   Assign a legal counterparty to this agreement. Pactly checks whether the creator holds an active verified profile or issues a secure escrow onboarding pass. 
                </p>
              </div>
              <div id="state-toggle-wrapper" className="bg-surface-container-high p-1 rounded-xl flex items-center gap-1 shadow-inner self-start lg:self-auto">
                <button id="btn-state-a" className="px-3.5 py-2 rounded-lg font-label-md text-label-md transition-all flex items-center gap-2 bg-surface-container-lowest text-primary font-semibold shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">
                    verified_user
                  </span>
                  <span>
                    Known Creator 
                    <span className="font-label-sm text-label-sm text-secondary bg-secondary-fixed/50 px-1.5 py-0.5 rounded-full ml-0.5">
                      Matched
                    </span>
                  </span>
                </button>
                <button id="btn-state-b" className="px-3.5 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant transition-all flex items-center gap-2 hover:text-on-surface">
                  <span className="material-symbols-outlined text-[16px]">
                    mail
                  </span>
                  <span>
                    Unknown Creator 
                    <span className="font-label-sm text-label-sm opacity-60">
                      Off-Rail
                    </span>
                  </span>
                </button>
                <button id="btn-state-split" className="px-3 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant transition-all flex items-center gap-1.5 hover:text-on-surface">
                  <span className="material-symbols-outlined text-[16px]">
                    splitscreen
                  </span>
                  <span>
                    Compare
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm text-label-sm font-bold">
                    <span className="material-symbols-outlined text-[16px]">
                      check
                    </span>
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface font-semibold">
                      1. Commercial Scope
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Terms &amp; Deliverables Set
                    </div>
                  </div>
                </div>
                <div className="h-0.5 flex-1 bg-secondary hidden sm:block"></div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">
                     2 
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-primary font-semibold">
                      2. Assign Counterparty
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Identification &amp; Onboarding
                    </div>
                  </div>
                </div>
                <div className="h-0.5 flex-1 bg-surface-container-highest hidden sm:block"></div>
                <div className="flex items-center gap-3 opacity-50">
                  <div className="w-7 h-7 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm font-bold">
                     3 
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface font-semibold">
                      3. Ring-Fenced Escrow
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Rs 666,000Custody Lock
                    </div>
                  </div>
                </div>
                <div className="h-0.5 flex-1 bg-surface-container-highest hidden sm:block"></div>
                <div className="flex items-center gap-3 opacity-50">
                  <div className="w-7 h-7 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm font-bold">
                     4 
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface font-semibold">
                      4. Mutual Execution
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Solicitor Counter-Sign
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              <div id="left-column" className="lg:col-span-8 flex flex-col gap-6">
                <div id="view-state-a" className="flex flex-col gap-6">
                  <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface">
                          Creator Verification Lookup
                        </h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                          Enter a verified handle, legal registration name, or verified email address.
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-secondary font-label-sm text-label-sm flex items-center gap-1 font-semibold">
                        <span className="material-symbols-outlined text-[15px]">
                          format_image_left
                        </span>
                         Active Registry Match 
                      </span>
                    </div>
                    <div className="relative mb-5">
                      <span className="material-symbols-outlined absolute left-3.5 top-3 text-outline text-[20px]">
                        search
                      </span>
                      <input readOnly={true} type="text" defaultValue="@charlotte_creator (charlotte@clarkcreative.co.uk)" className="w-full bg-surface-container-low text-on-surface pl-10 pr-28 py-2.5 rounded-lg font-body-md text-body-md focus:outline-none cursor-default font-medium" />
                      <button className="absolute right-2 top-2 px-2.5 py-1 text-primary hover:bg-surface-container rounded-lg font-label-sm text-label-sm font-semibold transition-colors">
                         Change 
                      </button>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-5 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-xl bg-primary-container text-on-primary font-headline-md text-headline-md flex items-center justify-center shadow-sm">
                               CC 
                            </div>
                            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-sm">
                              <span className="material-symbols-outlined text-[14px]">
                                check
                              </span>
                            </span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-headline-md text-headline-md text-on-surface">
                                Charlotte Clark
                              </h3>
                              <span className="font-label-md text-label-md text-on-surface-variant font-mono">
                                @charlotte_creator
                              </span>
                              <span className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant rounded font-label-sm text-label-sm">
                                Sole Trader
                              </span>
                            </div>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                               Independent Digital Creator • London, United Kingdom • Member since March 2024 
                            </p>
                            <div className="flex flex-wrap items-center gap-3 mt-3">
                              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-lowest shadow-sm">
                                <span className="material-symbols-outlined text-[16px] text-primary">
                                  photo_camera
                                </span>
                                <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                                  @charlotte.creates
                                </span>
                                <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                                  • 142k
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-lowest shadow-sm">
                                <span className="material-symbols-outlined text-[16px] text-primary">
                                  video_library
                                </span>
                                <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                                  @charlotte_vlogs
                                </span>
                                <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                                  • 88k
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5 px-2 py-1 text-secondary font-label-sm text-label-sm">
                                <span className="material-symbols-outlined text-[15px]">
                                  verified
                                </span>
                                <span>
                                  OAuth Authenticated
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-surface-container-lowest px-4 py-3 rounded-lg shadow-sm text-right shrink-0">
                          <div className="font-headline-sm text-headline-sm text-secondary font-bold">
                            14 / 14
                          </div>
                          <div className="font-label-sm text-label-sm text-on-surface-variant">
                            Pacts Completed (100%)
                          </div>
                          <div className="font-label-sm text-label-sm text-primary mt-1 font-semibold">
                            Zero Disputes Logged
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 pt-4 bg-surface-container-lowest rounded-lg p-3">
                        <div className="flex items-start gap-2.5">
                          <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                            verified_user
                          </span>
                          <div>
                            <div className="font-label-sm text-label-sm text-on-surface font-semibold">
                              KYC / AML Verified
                            </div>
                            <div className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                              HM Treasury sanction checked
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                            account_balance
                          </span>
                          <div>
                            <div className="font-label-sm text-label-sm text-on-surface font-semibold">
                              Faster Payments Ready
                            </div>
                            <div className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                              Direct UK clearing rail linked
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                            gavel
                          </span>
                          <div>
                            <div className="font-label-sm text-label-sm text-on-surface font-semibold">
                              Pre-Executed Master Terms
                            </div>
                            <div className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                              Standard English Law model
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-4 rounded-xl bg-surface-container-high flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">
                        bolt
                      </span>
                      <div>
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          Instant In-App Voucher Transmission
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                           Because Charlotte is an enrolled counterparty, she will receive a signed push dispatch on her Pactly app instantly. No account onboarding wait-time is required before bilateral milestone countersigning. 
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                      <button className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">
                          person_add
                        </span>
                         Invite someone else instead 
                      </button>
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high font-label-md text-label-md text-on-surface font-medium transition-colors">
                           Save Draft 
                        </button>
                        <button className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label-md text-label-md font-semibold transition-all shadow-sm flex items-center justify-center gap-2" data-go="/invitations/uk-5028">
                          <span>
                            Send Deal Voucher &amp; Deposit
                          </span>
                          <span className="material-symbols-outlined text-[18px]">
                            arrow_forward
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">
                            description
                          </span>
                        </div>
                        <div>
                          <h4 className="font-headline-sm text-headline-sm text-on-surface">
                            Standard UK Creator Model Agreement (Schedule 4)
                          </h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Pre-verified by Pactly Legal Referee Panel • Jurisdiction: Senior Courts of England and Wales
                          </p>
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded bg-secondary-container/30 text-secondary font-label-sm text-label-sm font-semibold">
                        Countersign Ready
                      </span>
                    </div>
                  </div>
                </div>
                <div id="view-state-b" className="hidden flex flex-col gap-6">
                  <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface">
                          Invite Non-Registered Creator
                        </h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                          Dispatch an un-gated cryptographic proposal link. The creator does not need an existing account to review.
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1 font-semibold">
                        <span className="material-symbols-outlined text-[15px]">
                          send
                        </span>
                         Direct Passkey Rail 
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
                        <label className="md:col-span-4 font-label-md text-label-md text-on-surface font-medium">
                           Creator Legal or Trading Name 
                          <span className="block font-body-sm text-body-sm text-on-surface-variant font-normal">
                            Registered name or entity
                          </span>
                        </label>
                        <div className="md:col-span-8">
                          <input placeholder="e.g. Eleanor Vance / EV Media Ltd" type="text" defaultValue="Marcus Sterling" className="w-full bg-surface-container-low text-on-surface px-4 py-2.5 rounded-lg font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
                        <label className="md:col-span-4 font-label-md text-label-md text-on-surface font-medium">
                           Creator Direct Email Address 
                          <span className="block font-body-sm text-body-sm text-on-surface-variant font-normal">
                            For legal notice &amp; invitation pass
                          </span>
                        </label>
                        <div className="md:col-span-8">
                          <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">
                              mail
                            </span>
                            <input placeholder="creator@management.agency" type="email" defaultValue="marcus@sterlingmedia.uk" className="w-full bg-surface-container-low text-on-surface pl-10 pr-4 py-2.5 rounded-lg font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20" />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
                        <label className="md:col-span-4 font-label-md text-label-md text-on-surface font-medium">
                           Primary Channel or Handle 
                          <span className="block font-body-sm text-body-sm text-on-surface-variant font-normal">
                            Where deliverable will be posted
                          </span>
                        </label>
                        <div className="md:col-span-8">
                          <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">
                              link
                            </span>
                            <input placeholder="@username or channel URL" type="text" defaultValue="@marcus_media (YouTube, 320k subscribers)" className="w-full bg-surface-container-low text-on-surface pl-10 pr-4 py-2.5 rounded-lg font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 bg-surface-container-low rounded-xl p-5 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          verified
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">
                          Pactly Escrow Custody Assurance: What happens next?
                        </h3>
                      </div>
                      <div className="space-y-4 text-on-surface">
                        <div className="flex items-start gap-3 bg-surface-container-lowest p-3.5 rounded-lg shadow-sm">
                          <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                             1 
                          </div>
                          <div>
                            <div className="font-label-md text-label-md font-semibold">
                              Single-Click Cryptographic Access Link
                            </div>
                            <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                               Marcus receives a cryptographically signed deal invite link valid for 
                              <strong>
                                7 days
                              </strong>
                               via email. He can inspect the un-gated brief, exact deliverable requirements, and total compensation (Rs 666,000) without downloading any software. 
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-surface-container-lowest p-3.5 rounded-lg shadow-sm">
                          <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                             2 
                          </div>
                          <div>
                            <div className="font-label-md text-label-md font-semibold">
                              Frictionless 90-Second Identity &amp; Payout Rails
                            </div>
                            <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                               To countersign and lock in the job, Marcus completes a streamlined 90-second onboarding: connecting his UK Faster Payments payout account and reviewing standard statutory compliance terms. 
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-surface-container-lowest p-3.5 rounded-lg shadow-sm">
                          <div className="w-6 h-6 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                             3 
                          </div>
                          <div>
                            <div className="font-label-md text-label-md font-semibold">
                              Ring-Fenced Zero-Risk Custody
                            </div>
                            <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                               Your Rs 666,000deposit sits in a legally isolated trust account with FCA-authorised partners. If Marcus declines the offer or the 7-day token expires unacknowledged, funds return instantly to your brand wallet without deduction. 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                      <button className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">
                          search
                        </span>
                         Switch back to registered creators 
                      </button>
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high font-label-md text-label-md text-on-surface font-medium transition-colors">
                           Save Draft Pass 
                        </button>
                        <button className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label-md text-label-md font-semibold transition-all shadow-sm flex items-center justify-center gap-2" data-go="/invitations/uk-5028">
                          <span>
                            Dispatch Secure Invitation Link
                          </span>
                          <span className="material-symbols-outlined text-[18px]">
                            send
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="view-state-split" className="hidden flex flex-col gap-6">
                  <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                    <div className="mb-4">
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">
                        Architectural Comparison: Identity Rails
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Review how Pactly handles verified counterparty velocity versus off-platform creator onboarding.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-surface-container-low rounded-xl p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-2 py-0.5 rounded bg-secondary-container/50 text-secondary font-label-sm text-label-sm font-semibold">
                              State A: On-Platform
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                              Instant Rails
                            </span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface">
                            Verified Member Match
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            Creator exists in Pactly UK Trust Registry with pre-verified KYC and verified bank mandates.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface">
                              <span className="material-symbols-outlined text-[16px] text-secondary">
                                check_circle
                              </span>
                               Immediate In-App Voucher &amp; Push 
                            </div>
                            <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface">
                              <span className="material-symbols-outlined text-[16px] text-secondary">
                                check_circle
                              </span>
                               0 onboarding steps before signing 
                            </div>
                            <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface">
                              <span className="material-symbols-outlined text-[16px] text-secondary">
                                check_circle
                              </span>
                               Historical dispute score accessible 
                            </div>
                          </div>
                        </div>
                        <button className="mt-6 w-full py-2 bg-surface-container-lowest hover:bg-surface-container text-primary font-label-md text-label-md font-semibold rounded-lg transition-colors">
                           Select State A Flow 
                        </button>
                      </div>
                      <div className="bg-surface-container-low rounded-xl p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-semibold">
                              State B: Off-Platform
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                              7-Day Pass
                            </span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface">
                            External Invitation Pass
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            Single-click tokenized invite link dispatched via email. No friction to preview.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface">
                              <span className="material-symbols-outlined text-[16px] text-primary">
                                mail
                              </span>
                               Un-gated read-only deal portal 
                            </div>
                            <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface">
                              <span className="material-symbols-outlined text-[16px] text-primary">
                                timer
                              </span>
                               90-second automated profile setup 
                            </div>
                            <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface">
                              <span className="material-symbols-outlined text-[16px] text-primary">
                                undo
                              </span>
                               Automatic 100% refund on expiration 
                            </div>
                          </div>
                        </div>
                        <button className="mt-6 w-full py-2 bg-surface-container-lowest hover:bg-surface-container text-primary font-label-md text-label-md font-semibold rounded-lg transition-colors">
                           Select State B Flow 
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between pb-4">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                        Deal Overview
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Deal #UK-5012
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-secondary font-label-sm text-label-sm font-semibold">
                       Draft Locked 
                    </span>
                  </div>
                  <div className="py-4 space-y-3">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">
                        Deliverable Scope
                      </span>
                      <p className="font-body-md text-body-md text-on-surface font-semibold mt-0.5">
                         1x 60s Dedicated YouTube Sponsorship + 30-Day Paid Whitelisting Rights 
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Milestone Target
                      </span>
                      <span className="font-label-md text-label-md text-on-surface font-mono font-medium">
                        14 Nov 2026 • 17:00 GMT
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Draft Initiator
                      </span>
                      <span className="font-label-md text-label-md text-on-surface font-medium">
                        Lumina Studio
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 bg-surface-container-low -mx-6 px-6 pb-5 mt-2 rounded-b-xl">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase tracking-wider block mb-3">
                      Custody Breakdown
                    </span>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-body-sm">
                        <span className="text-on-surface-variant">
                          Gross Creator Compensation
                        </span>
                        <span className="font-mono font-semibold text-on-surface">
                          Rs 666,000
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-body-sm">
                        <span className="text-on-surface-variant flex items-center gap-1">
                           Pactly Custody Fee (6%) 
                          <span title="Fixed impartial custody &amp; solicitor arbitration fee" className="material-symbols-outlined text-[14px] text-outline">
                            info
                          </span>
                        </span>
                        <span className="font-mono text-on-surface-variant">
                          Rs 39,960
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-body-sm">
                        <span className="text-on-surface-variant">
                          Brand Absorbed Share
                        </span>
                        <span className="font-mono text-secondary font-medium">
                          -Rs 39,960
                        </span>
                      </div>
                      <div className="pt-3 flex justify-between items-baseline">
                        <div>
                          <span className="font-label-md text-label-md text-on-surface font-bold block">
                            Total Escrow Deposit
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            Held in FCA-supervised trust
                          </span>
                        </div>
                        <span className="font-headline-md text-headline-md text-primary font-bold font-mono">
                          Rs 666,000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      account_balance
                    </span>
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Protected Escrow Custody
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                     Funds deposited for Deal #UK-5012 are placed in bankruptcy-remote statutory custody under the supervision of the English Legal Jurisdiction. Release requires bilateral electronic approval or arbitrator resolution. 
                  </p>
                  <div className="pt-2 flex items-center justify-between text-label-sm text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px] text-secondary">
                        lock
                      </span>
                       FCA Regulated Custodian 
                    </span>
                    <a className="text-primary hover:underline font-medium" href="#" onClick={(event) => event.preventDefault()}>
                      Arbitration Rules
                    </a>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-xl p-4 flex items-center justify-between gap-3 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-outline text-[20px]">
                      support_agent
                    </span>
                    <div className="font-label-sm text-label-sm text-on-surface">
                       Need custom agency multi-sign or split invoice? 
                    </div>
                  </div>
                  <button className="px-2.5 py-1 text-primary hover:bg-surface-container rounded font-label-sm text-label-sm font-semibold shrink-0">
                     Talk to Referee 
                  </button>
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
