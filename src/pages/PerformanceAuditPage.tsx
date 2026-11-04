/** Pactly — 30-Day Performance Audit & Final Escrow Settlement */
export default function PerformanceAuditPage() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-[1200px] mx-auto px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-lg">
            <a className="flex items-center gap-space-xs" data-go="/deals" href="/deals">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[20px]">
                  verified_user
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold">
                Pactly
              </span>
            </a>
            <nav data-active-classes="bg-surface-container-high text-on-surface font-semibold rounded-lg" className="hidden md:flex items-center gap-space-xs">
              <a aria-current="page" className="px-space-sm py-1.5 transition-colors bg-surface-container-high text-on-surface font-semibold rounded-lg" data-go="/deals" href="/deals">
                Deals
              </a>
              <a className="px-space-sm py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-go="/invitations/uk-5028" href="/invitations/uk-5028">
                Invitations
              </a>
              <a className="px-space-sm py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-go="/profile" href="/profile">
                Profile
              </a>
              <a className="px-space-sm py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-go="/settings" href="/settings">
                Settings
              </a>
              <a className="px-space-sm py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-go="/help" href="/help">
                Help &amp; Legal
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container/25 text-on-secondary-container">
              <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                IN ESCROW
              </span>
              <span className="font-label-md text-label-md font-bold text-on-surface">
                Rs 4,724,160
              </span>
            </div>
            <div className="flex items-center gap-space-sm pl-space-xs">
              <div className="hidden lg:flex flex-col text-right leading-tight">
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  David Vance
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Lumina Studio • Brand
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
      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-16rem)]">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-96 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="max-w-[1200px] mx-auto px-margin py-space-lg flex flex-col gap-space-lg">
              <div className="flex flex-col gap-space-sm">
                <div className="flex flex-wrap items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
                  <a className="hover:text-primary transition-colors flex items-center gap-1" data-go="/deals" href="/deals">
                    <span className="material-symbols-outlined text-[16px]">
                      folder_shared
                    </span>
                     Deals 
                  </a>
                  <span>
                    /
                  </span>
                  <span className="text-on-surface font-semibold">
                    Deal #UK-5028
                  </span>
                  <span className="text-outline-variant">
                    •
                  </span>
                  <span className="text-on-surface-variant">
                    Lumina Studio Ltd × Charlotte Emily Clark
                  </span>
                  <span>
                    /
                  </span>
                  <span className="text-primary font-semibold">
                    30-Day Performance Audit &amp; Final Settlement
                  </span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pt-space-xs">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-space-xs">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/25 text-on-secondary-container font-label-sm text-label-sm">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                         SETTLEMENT FINALISING 
                      </span>
                      <span className="text-on-surface-variant font-label-sm text-label-sm font-mono uppercase tracking-wider">
                         Model 2.4 English Commercial Standard 
                      </span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                       30-Day Performance Audit &amp; Escrow Discharge 
                    </h1>
                  </div>
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest shadow-sm hover:bg-surface-container-low transition-colors font-label-md text-label-md text-on-surface">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        description
                      </span>
                       Final Ledger PDF 
                    </button>
                    <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest shadow-sm hover:bg-surface-container-low transition-colors font-label-md text-label-md text-on-surface">
                      <span className="material-symbols-outlined text-[18px] text-outline">
                        verified
                      </span>
                       Pact Model 2.4 
                    </button>
                    <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest shadow-sm hover:bg-surface-container-low transition-colors font-label-md text-label-md text-on-surface">
                      <span className="material-symbols-outlined text-[18px] text-secondary">
                        encrypted
                      </span>
                       Audit Cert 
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-space-xs pt-1">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></span>
                     30-DAY WINDOW CONCLUDED (25 Dec 2026) 
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[15px] text-secondary">
                      lock_reset
                    </span>
                     TIKTOK TOKEN AUTO-UNBOUND &amp; REVOKED 
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[15px] text-secondary">
                      payments
                    </span>
                     Rs 777,000DISBURSED (0% DEDUCTION) 
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[15px]">
                      account_balance
                    </span>
                     BARCLAYS CUSTODY FULLY RECONCILED 
                  </span>
                </div>
              </div>
              <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md relative">
                  <div className="flex items-start gap-space-sm">
                    <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[16px]">
                        check
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                        Milestone 1: Deliverable
                      </span>
                      <span className="font-body-sm text-body-sm text-secondary font-medium">
                        Rs 518,000Settled &amp; Disbursed
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Completed 25 Nov 2026
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[16px]">
                        check
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                        Milestone 2: Spark Ads
                      </span>
                      <span className="font-body-sm text-body-sm text-secondary font-medium">
                        Rs 259,000Settled &amp; Disbursed
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Completed 26 Nov 2026
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[16px]">
                        check
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                        30-Day Performance Audit
                      </span>
                      <span className="font-body-sm text-body-sm text-secondary font-medium">
                        SLA Verified (+23% Goal)
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Concluded 25 Dec 2026
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-sm bg-primary/5 p-2 rounded-lg">
                    <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-sm ring-4 ring-primary/20">
                      <span className="material-symbols-outlined text-[16px]">
                        verified
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-md text-label-md text-primary font-bold truncate">
                        Final Statutory Discharge
                      </span>
                      <span className="font-body-sm text-body-sm text-primary font-medium">
                        100% Reconciled
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Ready for Archival
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
                <div className="lg:col-span-8 flex flex-col gap-space-lg">
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm border-b-0">
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                          Campaign Telemetry &amp; SLA Compliance
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                           TikTok Spark Ads &amp; YouTube 30-Day Audit 
                        </h2>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-[16px]">
                          task_alt
                        </span>
                         SLA Covenant Exceeded 
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
                      <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                          Gross Reach
                        </span>
                        <span className="font-headline-md text-headline-md font-bold text-on-surface mt-1">
                          1,482,900
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary font-semibold mt-0.5 flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-[14px]">
                            arrow_upward
                          </span>
                           +23.5% vs 1.2M SLA 
                        </span>
                      </div>
                      <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                          Campaign CTR
                        </span>
                        <span className="font-headline-md text-headline-md font-bold text-primary mt-1">
                          3.84%
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                          Benchmark: 1.45%
                        </span>
                      </div>
                      <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                          Verified Signups
                        </span>
                        <span className="font-headline-md text-headline-md font-bold text-on-surface mt-1">
                          2,140
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary font-semibold mt-0.5">
                          CPA: Rs 777
                        </span>
                      </div>
                      <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                          Ad Spend Boost
                        </span>
                        <span className="font-headline-md text-headline-md font-bold text-on-surface mt-1">
                          Rs 1,665,000
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                          Rs 55,500/day (30 days)
                        </span>
                      </div>
                    </div>
                    <div className="bg-surface-container-low/60 rounded-xl p-space-md flex flex-col gap-space-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">
                          30-Day Conversion Velocity (UTM Attributed)
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          25 Nov – 25 Dec 2026
                        </span>
                      </div>
                      <div className="w-full h-24">
                        <svg preserveAspectRatio="none" viewBox="0 0 600 80" className="w-full h-full text-primary">
                          <defs>
                            <linearGradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="currentColor" stopOpacity="0.3"></stop>
                              <stop offset="100%" stopColor="currentColor" stopOpacity="0.0"></stop>
                            </linearGradient>
                          </defs>
                          <line stroke="#c5c5d7" strokeDasharray="4 4" strokeWidth="1.5" x1="0" x2="600" y1="42" y2="42"></line>
                          <path d="M0,75 L20,68 L50,60 L80,58 L120,40 L160,35 L200,45 L240,25 L280,30 L320,20 L360,28 L400,18 L440,22 L480,12 L520,15 L560,8 L600,6 L600,80 L0,80 Z" fill="url(#chartGrad)"></path>
                          <path d="M0,75 L20,68 L50,60 L80,58 L120,40 L160,35 L200,45 L240,25 L280,30 L320,20 L360,28 L400,18 L440,22 L480,12 L520,15 L560,8 L600,6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
                          <circle cx="560" cy="8" fill="currentColor" r="4"></circle>
                        </svg>
                      </div>
                      <div className="flex flex-wrap items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-0.5 bg-outline-variant"></span>
                          <span>
                            Minimum Target Velocity (40 signups/day)
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                          <span className="text-on-surface font-medium">
                            Audience Demographic Covenant: 88.4% UK/EU Devs (Req. &gt;75%)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                      <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                        <img data-alt="High-resolution studio photograph of a modern software engineer workstation displaying code editor with warm natural sunlight and aesthetic mechanical keyboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsVfT6Y8DDmuER-11Ks1jVf5jWQzq3gdMGoiXzGgWJA6_jwY3qmOKzqo2W6deautz1qWH_Fh1XtTNgVhGjKKtsvTM7y7qtLY7bh05N6NwuWrHHVVFfq3Vhrwl3pKmRIRF3-bWxxJkgog7dP27CcrFsPW9DuYCyFkGQjlPJxJoD_25LOiYsAgeKSkS2Fid58rYKCf5jdO2P4EJxF9uoUuRXRdWznQeRzVnMT6gisseoBVSziEYPo70ToA" className="w-14 h-14 rounded-lg object-cover shrink-0 shadow-sm" />
                        <div className="flex flex-col min-w-0">
                          <span className="font-label-md text-label-md font-semibold text-on-surface truncate">
                            Full Integration YouTube Video
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            14:28 min • Permanent Rights
                          </span>
                          <span className="font-label-sm text-label-sm text-secondary font-medium">
                            108.4k Organic Views
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                        <img data-alt="Vertical screen capture mockup of an aesthetic tech reviewer presenting software tools on TikTok with high-contrast subtitles and minimalist studio background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCiaI4aD7zGq3yaIcrH1Pjc9fQi4ygpo5xb2eREHCxJPKuMA39igdpwZ5TH7ekO3WrRGcwmMtQinzmG23U91tunNupeSiyD7FZjyHUM-2lYDqOBDykURKaYzx71QMZbVXN5rBvJyx_9T_Z-UWQPOHHBbIZfygzU5UBfT6mNyL0EGOfoyn2zPDVLEWDCOtW-BRVlPUfAfTXjzSaYI4CUDStoKY6KQEL0B_SqFGR1kokGUhgJ-k0L82RiA" className="w-14 h-14 rounded-lg object-cover shrink-0 shadow-sm" />
                        <div className="flex flex-col min-w-0">
                          <span className="font-label-md text-label-md font-semibold text-on-surface truncate">
                            TikTok Spark Video #2091
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            30-day Whitelist (Expired)
                          </span>
                          <span className="font-label-sm text-label-sm text-secondary font-medium">
                            1.37M Impressions
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
                    <div className="flex items-start justify-between gap-space-sm">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-xl bg-secondary-container/40 text-on-secondary-container flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[24px] text-secondary">
                            verified_user
                          </span>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                             Statutory Advertising Rights Expiration &amp; Token Unbinding 
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                             All algorithmic commercial authorization grants automatically terminated at campaign conclusion. 
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-secondary-container/20 text-on-secondary-container font-label-sm text-label-sm font-semibold shrink-0">
                         REVOKED • ZERO RESIDUAL ACCESS 
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-sm">
                      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                        <div className="flex items-start gap-space-sm">
                          <span className="material-symbols-outlined text-[20px] text-secondary mt-0.5">
                            key_off
                          </span>
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface font-bold">
                               TikTok Spark Ads Token Revocation 
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                               Authorization code 
                              <code className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-mono text-[12px]">
                                tiktok_spark_auth_v2_98a72b01c4e9...
                              </code>
                               was severed via TikTok Marketing API webhook. 
                            </span>
                          </div>
                        </div>
                        <div className="text-right sm:shrink-0 pl-7 sm:pl-0">
                          <span className="font-label-sm text-label-sm text-secondary font-bold block">
                            Webhook 200 OK
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            25 Dec 2026, 23:59:59 GMT
                          </span>
                        </div>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                        <div className="flex items-start gap-space-sm">
                          <span className="material-symbols-outlined text-[20px] text-secondary mt-0.5">
                            copyright
                          </span>
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface font-bold">
                               Creative IP &amp; Moral Rights Restoration 
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                               Charlotte Emily Clark retains 100% full unencumbered IP rights. Brand boosting rights under Schedule 2 Clause 5.1 formally terminated. 
                            </span>
                          </div>
                        </div>
                        <div className="text-right sm:shrink-0 pl-7 sm:pl-0">
                          <span className="font-label-sm text-label-sm text-on-surface font-medium block">
                            Schedule 2 §5.1
                          </span>
                          <span className="font-label-sm text-label-sm text-secondary font-semibold">
                            Rights Reverted
                          </span>
                        </div>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                        <div className="flex items-start gap-space-sm">
                          <span className="material-symbols-outlined text-[20px] text-primary mt-0.5">
                            public
                          </span>
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface font-bold">
                               Organic Video Retention Agreement 
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                               Primary YouTube video and organic TikTok remain live perpetually with approved UTM attribution link intact. 
                            </span>
                          </div>
                        </div>
                        <div className="text-right sm:shrink-0 pl-7 sm:pl-0">
                          <span className="font-label-sm text-label-sm text-primary font-bold block">
                            Permanent Hosting
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            No Further Royalties
                          </span>
                        </div>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                        <div className="flex items-start gap-space-sm">
                          <span className="material-symbols-outlined text-[20px] text-secondary mt-0.5">
                            verified
                          </span>
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface font-bold">
                               Zero Dispute Claims &amp; Legal Arbitration Clearance 
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                               The 30-day post-delivery dispute window expired with 0 arbitration notices filed with Harrison &amp; Croft LLP. 
                            </span>
                          </div>
                        </div>
                        <div className="text-right sm:shrink-0 pl-7 sm:pl-0">
                          <span className="font-label-sm text-label-sm text-secondary font-bold block">
                            Clear Title &amp; Release
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            Statutory Discharge
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                          Bilateral Escrow Feedback
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Mutual Partnership Review
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 text-tertiary">
                        <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[20px] text-yellow-500">
                          star
                        </span>
                        <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[20px] text-yellow-500">
                          star
                        </span>
                        <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[20px] text-yellow-500">
                          star
                        </span>
                        <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[20px] text-yellow-500">
                          star
                        </span>
                        <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[20px] text-yellow-500">
                          star
                        </span>
                        <span className="font-label-md text-label-md font-bold text-on-surface ml-1">
                          5.0 / 5.0 Both Sides
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between gap-space-sm">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-space-sm">
                            <img data-alt="Portrait photo of Charlotte Emily Clark, a professional British tech content creator in her late 20s with glasses, soft cinematic studio lighting, looking confident and approachable." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwJkJayKZoTfub8JMW-oXdpGcnt_3aa3UBr9-0yWll48jkJH2_HyNkImMGOyRe9Jb4sbLydErRb-srq7l_Od7BK0e0rz1XXldzEYzTeiGA0YpCK2uxAMezoqBoVlKrgsNWimdxHmfNoKj25H2RR5hw0ggfD1nlinGJq70mgwW0NfOY5yZPMjQTgBHyT4IQnCQYrho3zxgsSm6R3xpr8QhH91ibBiMx-w34tzQawgtvuAweBlI1vIhzOA" className="w-10 h-10 rounded-full object-cover" />
                            <div className="flex flex-col leading-tight">
                              <span className="font-label-md text-label-md font-bold text-on-surface">
                                Charlotte Emily Clark
                              </span>
                              <span className="font-label-sm text-label-sm text-on-surface-variant">
                                Verified Independent Creator
                              </span>
                            </div>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface italic">
                             “Brilliant communication, instant milestone payouts via Pactly, and crystal-clear creative guidelines. Would gladly partner with Lumina Studio again!” 
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-2">
                          <span>
                            Rating: Prompt Payout • 5.0
                          </span>
                          <span>
                            26 Dec 2026
                          </span>
                        </div>
                      </div>
                      <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between gap-space-sm">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-space-sm">
                            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">
                               LV 
                            </div>
                            <div className="flex flex-col leading-tight">
                              <span className="font-label-md text-label-md font-bold text-on-surface">
                                David Vance
                              </span>
                              <span className="font-label-sm text-label-sm text-on-surface-variant">
                                Marketing Director • Lumina Studio
                              </span>
                            </div>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface italic">
                             “Top-tier code review content, delivered on time with immediate revisions. Phenomenal conversion rate on the Spark Ads whitelisting. Highly recommended.” 
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-2">
                          <span>
                            Rating: SLA Exceeded • 5.0
                          </span>
                          <span>
                            26 Dec 2026
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end pt-space-xs">
                      <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-variant transition-colors" data-go="/deals/new">
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          repeat
                        </span>
                         Re-hire Charlotte Emily Clark for Q1 2027 Pact 
                      </button>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col gap-space-md">
                    <div className="flex items-start justify-between gap-space-md">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[24px]">
                            gavel
                          </span>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                             Statutory Discharge under English Commercial Law 
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                             Executed under Pactly Standard Model 2.4 • Both parties have discharged 100% of agreed covenants. 
                          </p>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm font-bold uppercase tracking-wider shrink-0">
                         Ready to Archive 
                      </span>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-on-surface-variant font-label-sm text-label-sm">
                        <span className="font-semibold text-on-surface">
                          Dual eIDAS Cryptographic Consensus Stamp:
                        </span>
                        <span className="font-mono text-primary font-semibold">
                          SHA-256: e7f2910c89a01fd4591b32c867fbd3004b12
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                         Barclays Client Trust Vault #A-8291 has zero pending balances, Rs 0outstanding creator liabilities, and is cleared for bilateral statutory archiving. 
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs">
                      <button id="archivePactBtn" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:bg-primary-container transition-all" data-go="/deals/uk-5028/closed">
                        <span className="material-symbols-outlined text-[20px]">
                          archive
                        </span>
                         Acknowledge Final Settlement &amp; Archive Pact #UK-5028 
                      </button>
                      <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors" data-go="/deals/uk-5028/tax-export">
                        <span className="material-symbols-outlined text-[18px]">
                          receipt_long
                        </span>
                         Export Tax &amp; Accounting Packet (HMRC Ready) 
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-space-lg">
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between pb-space-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                          <span className="material-symbols-outlined text-[18px]">
                            account_balance
                          </span>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                            FCA Safeguarded Custody
                          </span>
                          <span className="font-label-md text-label-md font-bold text-on-surface">
                            Vault #A-8291-UKM2
                          </span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                         100% RECONCILED 
                      </span>
                    </div>
                    <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1">
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                        <span>
                          Remaining Vault Balance:
                        </span>
                        <span className="font-mono font-bold text-secondary text-headline-sm text-[18px]">
                          Rs 0GBP
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                        <span>
                          Total Escrow Inflow:
                        </span>
                        <span className="font-mono text-on-surface font-medium">
                          Rs 823,620GBP
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-space-xs pt-1 text-on-surface font-body-sm text-body-sm">
                      <div className="flex items-center justify-between py-1">
                        <span className="text-on-surface-variant flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            check_circle
                          </span>
                           Milestone 1 Net (Delivered) 
                        </span>
                        <span className="font-mono font-semibold text-on-surface">
                          Rs 518,000
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-1">
                        <span className="text-on-surface-variant flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            check_circle
                          </span>
                           Milestone 2 Net (Whitelisting) 
                        </span>
                        <span className="font-mono font-semibold text-on-surface">
                          Rs 259,000
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-1 bg-secondary-container/15 px-2 rounded">
                        <span className="font-semibold text-secondary">
                          Total Net Disbursed to Creator
                        </span>
                        <span className="font-mono font-bold text-secondary">
                          Rs 777,000
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-1 text-on-surface-variant text-[12px]">
                        <span>
                          Creator Platform Deduction (0% Pact Policy)
                        </span>
                        <span className="font-mono font-semibold text-secondary">
                          Rs 0(0%)
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-1 text-on-surface-variant text-[12px]">
                        <span>
                          Brand Custody Fee (6% Pre-funded)
                        </span>
                        <span className="font-mono font-semibold text-on-surface">
                          Rs 46,620
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-1 text-on-surface-variant text-[12px]">
                        <span>
                          Dispute Escrow Holdback
                        </span>
                        <span className="font-mono font-semibold text-on-surface">
                          Rs 0
                        </span>
                      </div>
                    </div>
                    <div className="pt-2 text-on-surface-variant font-label-sm text-label-sm bg-surface-container/50 p-2.5 rounded-lg flex items-center justify-between">
                      <span className="truncate">
                        Disbursed to: Charlotte Clark • NatWest ••••4910
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        done_all
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <h4 className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">
                         Full Chronological Audit Log 
                      </h4>
                      <span className="material-symbols-outlined text-[18px] text-outline">
                        history
                      </span>
                    </div>
                    <div className="flex flex-col gap-3 relative pl-2">
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-1.5"></span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                            25 Dec 2026, 23:59 GMT
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            TikTok Spark Ads token auto-unbound &amp; revoked via webhook.
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-1.5"></span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                            25 Dec 2026, 00:00 GMT
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            30-day performance window concluded. 0 dispute notices logged.
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5"></span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                            26 Nov 2026, 16:15 GMT
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Milestone 2 Rs 259,000Net disbursed via UK Faster Payments.
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-outline-variant shrink-0 mt-1.5"></span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                            25 Nov 2026, 16:02 GMT
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            TikTok Spark token verified by Lumina Studio; ads launched.
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5"></span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                            25 Nov 2026, 14:18 GMT
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Milestone 1 Rs 518,000Net disbursed via UK Faster Payments.
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-outline-variant shrink-0 mt-1.5"></span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                            24 Nov 2026, 14:18 GMT
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Revised deliverable (v2 cut) approved by Lumina Studio.
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-outline-variant shrink-0 mt-1.5"></span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                            14 Nov 2026, 09:30 GMT
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Contract countersigned &amp; Rs 823,620locked in Barclays Escrow.
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="w-full text-center py-1.5 rounded bg-surface-container-low text-primary font-label-sm text-label-sm font-semibold hover:bg-surface-container transition-colors">
                       View All 18 Audit Events 
                    </button>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[20px] text-primary">
                        shield
                      </span>
                      <h4 className="font-label-md text-label-md font-bold text-on-surface">
                        Legal Safeguards &amp; Jurisdiction
                      </h4>
                    </div>
                    <div className="text-on-surface-variant font-body-sm text-body-sm flex flex-col gap-2">
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">
                          check
                        </span>
                        <span>
                          Jurisdiction: England &amp; Wales Commercial Court
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">
                          check
                        </span>
                        <span>
                          Arbitration: Harrison &amp; Croft LLP (Discharged with zero claims)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">
                          check
                        </span>
                        <span>
                          Barclays Bank Trust Custody Safeguarded pursuant to PSR 2017
                        </span>
                      </div>
                    </div>
                    <a className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-primary font-bold pt-2 hover:underline" href="#" onClick={(event) => event.preventDefault()}>
                      <span className="material-symbols-outlined text-[16px]">
                        file_download
                      </span>
                       Download Full Immutable Audit Trail (.JSON / .PDF) 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-xs">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[14px]">
                  gavel
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Pactly Legal &amp; Escrow Infrastructure
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-space-md font-label-md text-label-md">
              <a className="text-on-surface-variant hover:text-primary transition-colors" data-go="/legal" href="/legal">
                Safeguarding Policy
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors" data-go="/legal" href="/legal">
                Commercial Terms
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors" data-go="/legal" href="/legal">
                Arbitration Charter
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
            <p>
              Pactly operates in strict accordance with the UK Electronic Money Regulations 2011 and Payment Services Regulations 2017. Client custody funds are securely segregated and safeguarded via designated FCA-regulated credit institutions under Barclays Client Trust Custody frameworks.
            </p>
            <p>
              All partnership covenants are executed under English Commercial Law Model 2.4. Smart contract milestones release custody funds upon verified delivery or mutual arbitration resolution.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pt-space-md text-on-surface-variant font-label-sm text-label-sm">
            <p>
              © 2025 Pactly Technologies Ltd (UK). All rights reserved.
            </p>
            <div className="flex items-center gap-space-sm">
              <span>
                Status: Tier-1 Vault Connected
              </span>
              <span>
                •
              </span>
              <span>
                Encrypted TLS 1.3 / ISO 27001 Certified
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
