/** Pactly — Deal Close & Archival Completed (Deal #UK-5028) */
export default function DealClosedPage() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-[1200px] mx-auto px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-lg">
            <a className="flex items-center gap-space-xs text-primary font-headline-md font-semibold tracking-tight" data-go="/deals" href="/deals">
              <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-on-primary font-bold text-sm">
                P
              </span>
              <span>
                Pactly
              </span>
            </a>
            <nav data-active-classes="bg-surface-container text-primary font-label-md rounded-lg px-space-sm py-1.5" className="hidden lg:flex items-center gap-space-sm">
              <a aria-current="page" className="transition-colors bg-surface-container text-primary font-label-md rounded-lg px-space-sm py-1.5" data-go="/deals" href="/deals">
                Deals
              </a>
              <a className="text-on-surface-variant hover:text-on-surface font-label-md px-space-sm py-1.5 transition-colors" data-go="/invitations/uk-5028" href="/invitations/uk-5028">
                Invitations
              </a>
              <a className="text-on-surface-variant hover:text-on-surface font-label-md px-space-sm py-1.5 transition-colors" data-go="/profile" href="/profile">
                Profile
              </a>
              <a className="text-on-surface-variant hover:text-on-surface font-label-md px-space-sm py-1.5 transition-colors" data-go="/settings" href="/settings">
                Settings
              </a>
              <a className="text-on-surface-variant hover:text-on-surface font-label-md px-space-sm py-1.5 transition-colors" data-go="/help" href="/help">
                Help & Legal
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container text-secondary font-label-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>
                Rs 0RECONCILED
              </span>
            </div>
            <div className="flex items-center gap-space-sm pl-space-xs">
              <div className="hidden md:flex flex-col text-right">
                <span className="font-label-md text-on-surface leading-tight">
                  David Vance
                </span>
                <span className="font-label-sm text-on-surface-variant leading-tight">
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
      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-14rem)]">
        <div className="flex flex-col w-full">
          <div className="max-w-[1200px] w-full mx-auto px-margin-mobile sm:px-gutter md:px-margin py-space-md sm:py-space-lg flex flex-col gap-space-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm pb-space-xs">
              <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-md text-on-surface-variant flex-wrap">
                <a className="hover:text-primary transition-colors" data-go="/deals" href="/deals">
                  Deals
                </a>
                <span className="text-outline-variant font-normal">
                  /
                </span>
                <span className="text-on-surface font-label-md truncate max-w-[280px] sm:max-w-md">
                  Deal #UK-5028 (Lumina Studio × Charlotte Clark)
                </span>
                <span className="text-outline-variant font-normal">
                  /
                </span>
                <span className="text-secondary font-label-sm px-2 py-0.5 rounded-full bg-secondary/10 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                   Archived Record 
                </span>
              </nav>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-label-sm text-outline px-2.5 py-1 rounded-full bg-surface-container flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">
                    lock
                  </span>
                   IMMUTABLE READ-ONLY 
                </span>
                <span className="font-label-sm text-secondary px-2.5 py-1 rounded-full bg-secondary/10 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    verified
                  </span>
                   eIDAS LEVEL 3 
                </span>
              </div>
            </div>
            <section className="rounded-xl bg-surface-container-low p-space-md sm:p-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md shadow-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-72 h-72 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>
              <div className="flex items-start gap-space-md z-10">
                <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-secondary shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">
                    shield_lock
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-label-sm font-semibold tracking-wider text-secondary uppercase bg-secondary/15 px-2 py-0.5 rounded">
                       Pact Discharged & Permanently Archived 
                    </span>
                    <span className="font-label-sm text-on-surface-variant font-mono">
                      SEALED: 25 DEC 2026, 17:45 GMT
                    </span>
                  </div>
                  <p className="font-body-sm text-on-surface-variant max-w-3xl leading-relaxed">
                     This partnership pact has reached terminal closure under English Commercial Law Model 2.4. Custody obligations with Barclays Bank UK PLC are discharged at Rs 0reconciled liability, ad tokens have been programmatically unlinked, and verified tax packets have been synced with Xero. This record is cryptographically sealed for 6 years statutory HMRC retention. 
                  </p>
                </div>
              </div>
              <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-2 shrink-0 z-10 pt-2 md:pt-0">
                <span className="font-label-sm text-outline-variant uppercase">
                  Custody Status
                </span>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest text-secondary font-label-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                   Rs 0RECONCILED 
                </div>
              </div>
            </section>
            <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg pb-space-xs">
              <div className="flex flex-col gap-space-sm max-w-2xl">
                <div className="flex items-center gap-space-sm flex-wrap">
                  <span className="font-label-md font-semibold text-primary px-2.5 py-0.5 rounded-lg bg-surface-container">
                     UK ESCROW #UK-5028 
                  </span>
                  <span className="font-label-sm text-on-surface-variant">
                    Model Contract 2.4 (Commercial Influencer Boosting)
                  </span>
                </div>
                <h1 className="font-headline-xl text-on-surface tracking-tight leading-tight">
                   Full-Stack DevTool Launch & TikTok Boost 
                </h1>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-sm font-bold">
                       L 
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-on-surface leading-none font-semibold">
                        Lumina Studio Ltd
                      </span>
                      <span className="font-label-sm text-on-surface-variant leading-tight">
                        David Vance (Brand Lead)
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[18px]">
                    handshake
                  </span>
                  <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-on-secondary font-label-sm font-bold">
                       C 
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-on-surface leading-none font-semibold">
                        Charlotte Emily Clark
                      </span>
                      <span className="font-label-sm text-on-surface-variant leading-tight">
                        @charlotte.tech (Developer Advocate)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <button id="download-zip-btn" type="button" className="h-10 px-4 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-lg shadow-sm flex items-center gap-2 transition-colors">
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    folder_zip
                  </span>
                  <span>
                    Download Archive (.ZIP • 1.15 MB)
                  </span>
                </button>
                <a className="h-10 px-4 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-lg shadow-sm flex items-center gap-2 transition-colors" data-go="/settings/sync" href="/settings/sync">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    cloud_done
                  </span>
                  <span>
                    View Xero Packet
                  </span>
                </a>
                <button type="button" className="h-10 px-4 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-lg shadow-sm flex items-center gap-2 transition-all" data-go="/deals/new">
                  <span className="material-symbols-outlined text-[18px]">
                    replay
                  </span>
                  <span>
                    Re-hire Charlotte Clark
                  </span>
                </button>
                <div id="more-actions-container" className="relative inline-block text-left">
                  <button id="more-actions-btn" type="button" className="w-10 h-10 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container shadow-sm flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-[20px]">
                      more_vert
                    </span>
                  </button>
                  <div id="more-actions-menu" className="hidden absolute right-0 mt-2 w-56 rounded-xl bg-surface-container-lowest shadow-xl py-1.5 z-30">
                    <button className="w-full text-left px-4 py-2 font-body-sm text-on-surface hover:bg-surface-container flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-outline">
                        print
                      </span>
                       Print Escrow Certificate 
                    </button>
                    <button className="w-full text-left px-4 py-2 font-body-sm text-on-surface hover:bg-surface-container flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-outline">
                        fingerprint
                      </span>
                       Verify SHA-256 Checksum 
                    </button>
                    <button className="w-full text-left px-4 py-2 font-body-sm text-on-surface hover:bg-surface-container flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-outline">
                        data_object
                      </span>
                       Export JSON Cold Ledger 
                    </button>
                  </div>
                </div>
              </div>
            </header>
            <section className="rounded-xl bg-surface-container-lowest p-space-md sm:p-space-lg shadow-sm">
              <div className="flex items-center justify-between pb-space-sm">
                <span className="font-label-sm font-semibold tracking-wider uppercase text-outline">
                  Statutory Escrow Lifecycle
                </span>
                <span className="font-label-sm text-secondary font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    task_alt
                  </span>
                   Discharged in Full (4 of 4 Milestones Reconciled) 
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md pt-space-xs relative">
                <div className="hidden md:block absolute top-7 left-8 right-8 h-0.5 bg-secondary/30 pointer-events-none -z-0"></div>
                <div className="flex md:flex-col items-start gap-space-sm relative z-10">
                  <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-sm font-label-sm font-bold">
                    <span className="material-symbols-outlined text-[18px]">
                      check
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-label-md font-semibold text-on-surface">
                      1. Pact Signed & Escrow Locked
                    </span>
                    <span className="font-body-sm text-on-surface-variant">
                      14 Nov 2026 • Rs 823,620Locked
                    </span>
                    <span className="font-label-sm text-secondary">
                      Barclays Vault Segregated
                    </span>
                  </div>
                </div>
                <div className="flex md:flex-col items-start gap-space-sm relative z-10">
                  <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-sm font-label-sm font-bold">
                    <span className="material-symbols-outlined text-[18px]">
                      check
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-label-md font-semibold text-on-surface">
                      2. M1: YouTube Settled
                    </span>
                    <span className="font-body-sm text-on-surface-variant">
                      28 Nov 2026 • Rs 518,000Net
                    </span>
                    <span className="font-label-sm text-secondary">
                      Faster Payments Released
                    </span>
                  </div>
                </div>
                <div className="flex md:flex-col items-start gap-space-sm relative z-10">
                  <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-sm font-label-sm font-bold">
                    <span className="material-symbols-outlined text-[18px]">
                      check
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-label-md font-semibold text-on-surface">
                      3. M2: Spark Ads Settled
                    </span>
                    <span className="font-body-sm text-on-surface-variant">
                      12 Dec 2026 • Rs 259,000Net
                    </span>
                    <span className="font-label-sm text-secondary">
                      Faster Payments Released
                    </span>
                  </div>
                </div>
                <div className="flex md:flex-col items-start gap-space-sm relative z-10">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-sm font-label-sm font-bold ring-4 ring-primary/10">
                    <span className="material-symbols-outlined text-[18px]">
                      archive
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-label-md font-semibold text-on-surface">
                      4. Token Revocation & Archival
                    </span>
                    <span className="font-body-sm text-on-surface-variant">
                      25 Dec 2026 • Rs 0Balance
                    </span>
                    <span className="font-label-sm text-primary font-semibold">
                      Ledger Sealed & Immutabilized
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              <main className="lg:col-span-8 flex flex-col gap-space-lg">
                <section className="rounded-xl bg-surface-container-lowest p-space-md sm:p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">
                        verified
                      </span>
                      <h2 className="font-headline-sm text-on-surface">
                        Deliverables & Verified Performance
                      </h2>
                    </div>
                    <span className="font-label-sm text-secondary px-2.5 py-0.5 rounded-full bg-secondary/10">
                       Mutual Sign-off Confirmed 
                    </span>
                  </div>
                  <div className="rounded-xl bg-surface-container-low p-space-md flex flex-col gap-space-sm">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-space-sm">
                        <span className="w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center text-primary font-label-sm font-bold">
                           M1 
                        </span>
                        <span className="font-label-lg text-on-surface font-semibold">
                           60-Second Dedicated YouTube Video Integration 
                        </span>
                      </div>
                      <span className="font-label-md font-mono text-secondary font-semibold">
                         Rs 518,000GBP Settled 
                      </span>
                    </div>
                    <p className="font-body-sm text-on-surface-variant">
                       Delivered within long-form technical review episode: 
                      <em className="text-on-surface not-italic font-medium">
                        "Top 5 Dev Tools for 2027: Building Local-First Cloud Stacks"
                      </em>
                      . Includes live CLI demonstration and unique voucher link anchor. 
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-body-sm">
                      <div className="bg-surface-container-lowest p-2.5 rounded-lg flex flex-col">
                        <span className="font-label-sm text-outline">
                          Verified Views
                        </span>
                        <span className="font-label-lg font-semibold text-on-surface">
                          108,412
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest p-2.5 rounded-lg flex flex-col">
                        <span className="font-label-sm text-outline">
                          Video Runtime
                        </span>
                        <span className="font-label-lg font-semibold text-on-surface">
                          14m 28s
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest p-2.5 rounded-lg flex flex-col">
                        <span className="font-label-sm text-outline">
                          Hosting Terms
                        </span>
                        <span className="font-label-lg font-semibold text-on-surface">
                          Perpetual
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest p-2.5 rounded-lg flex flex-col">
                        <span className="font-label-sm text-outline">
                          Payout Method
                        </span>
                        <span className="font-label-lg font-semibold text-secondary">
                          Faster Payments
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1 font-label-sm text-outline flex-wrap gap-2">
                      <span className="font-mono">
                        IPFS Hash: QmX89b...3cE9f
                      </span>
                      <span>
                        Signed off by David Vance: 28 Nov 2026 14:12 GMT
                      </span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-surface-container-low p-space-md flex flex-col gap-space-sm">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-space-sm">
                        <span className="w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center text-primary font-label-sm font-bold">
                           M2 
                        </span>
                        <span className="font-label-lg text-on-surface font-semibold">
                           30-Day TikTok Spark Ads Commercial Boosting Token 
                        </span>
                      </div>
                      <span className="font-label-md font-mono text-secondary font-semibold">
                         Rs 259,000GBP Settled 
                      </span>
                    </div>
                    <p className="font-body-sm text-on-surface-variant">
                       Commercial boosting authorization for creator post 
                      <code className="font-mono text-on-surface bg-surface-container px-1 py-0.5 rounded text-xs">
                        @charlotte.tech/video/739102849102
                      </code>
                      . The 30-day boosting duration expired at 25 Dec 2026 23:59 GMT and was programmatically deactivated. 
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-body-sm">
                      <div className="bg-surface-container-lowest p-2.5 rounded-lg flex flex-col">
                        <span className="font-label-sm text-outline">
                          Paid Gross Reach
                        </span>
                        <span className="font-label-lg font-semibold text-on-surface">
                          1.48M Views
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest p-2.5 rounded-lg flex flex-col">
                        <span className="font-label-sm text-outline">
                          Verified Signups
                        </span>
                        <span className="font-label-lg font-semibold text-secondary">
                          2,140 trials
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest p-2.5 rounded-lg flex flex-col">
                        <span className="font-label-sm text-outline">
                          Token Life
                        </span>
                        <span className="font-label-lg font-semibold text-error">
                          EXPIRED
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest p-2.5 rounded-lg flex flex-col">
                        <span className="font-label-sm text-outline">
                          De-Auth Status
                        </span>
                        <span className="font-label-lg font-semibold text-secondary">
                          Revoked & Cut
                        </span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-surface-container-highest p-3 flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant shrink-0 mt-0.5">
                        key_off
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-label-sm font-semibold text-on-surface">
                          API Handshake Deprovisioned
                        </span>
                        <p className="font-label-sm font-mono text-on-surface-variant break-all">
                           TOKEN: tiktok_spark_auth_v2_98a72b01c4e976f0d4ba82 (REVOKED: 25-DEC-2026 23:59:00 UTC) 
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="rounded-xl bg-surface-container-lowest p-space-md sm:p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">
                        stars
                      </span>
                      <h2 className="font-headline-sm text-on-surface">
                        Bilateral Partner Testimonials
                      </h2>
                    </div>
                    <span className="font-label-sm text-on-surface-variant font-mono">
                      Pactly Verified 5.0 ★
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between gap-space-md">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary font-label-md font-bold flex items-center justify-center">
                               C 
                            </div>
                            <div className="flex flex-col">
                              <span className="font-label-md font-semibold text-on-surface">
                                Charlotte Emily Clark
                              </span>
                              <span className="font-label-sm text-on-surface-variant">
                                Creator Review of Lumina Studio
                              </span>
                            </div>
                          </div>
                          <div className="flex text-amber-500 font-label-md">
                             ★★★★★ 
                          </div>
                        </div>
                        <blockquote className="font-body-sm text-on-surface italic pt-1">
                           “Brilliant communication, instant milestone payouts via Pactly, and crystal-clear creative guidelines. Would gladly partner with Lumina Studio again!” 
                        </blockquote>
                      </div>
                      <span className="font-label-sm text-outline font-mono">
                        Recorded 24 Dec 2026 • Bilateral reveal
                      </span>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between gap-space-md">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary text-on-primary font-label-md font-bold flex items-center justify-center">
                               D 
                            </div>
                            <div className="flex flex-col">
                              <span className="font-label-md font-semibold text-on-surface">
                                David Vance
                              </span>
                              <span className="font-label-sm text-on-surface-variant">
                                Brand Review of Charlotte Clark
                              </span>
                            </div>
                          </div>
                          <div className="flex text-amber-500 font-label-md">
                             ★★★★★ 
                          </div>
                        </div>
                        <blockquote className="font-body-sm text-on-surface italic pt-1">
                           “Top-tier code review content, delivered on time with immediate revisions. Phenomenal conversion rate on the Spark Ads whitelisting. Highly recommended.” 
                        </blockquote>
                      </div>
                      <span className="font-label-sm text-outline font-mono">
                        Recorded 25 Dec 2026 • Bilateral reveal
                      </span>
                    </div>
                  </div>
                </section>
                <section id="accounting-card" className="rounded-xl bg-surface-container-lowest p-space-md sm:p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        receipt_long
                      </span>
                      <h2 className="font-headline-sm text-on-surface">
                        HMRC Tax & General Ledger Audit
                      </h2>
                    </div>
                    <span className="font-label-sm text-secondary bg-secondary/10 px-2 py-0.5 rounded-full flex items-center gap-1 font-semibold">
                      <span className="material-symbols-outlined text-[14px]">
                        sync
                      </span>
                       Synced to ERP 
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                    <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col">
                      <span className="font-label-sm text-outline">
                        Xero Journal ID
                      </span>
                      <span className="font-label-md font-mono font-semibold text-on-surface">
                        #SYNC-XERO-UK5028
                      </span>
                      <span className="font-label-sm text-on-surface-variant">
                        Status: Posted & Matched
                      </span>
                    </div>
                    <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col">
                      <span className="font-label-sm text-outline">
                        VAT Protocol
                      </span>
                      <span className="font-label-md font-semibold text-on-surface">
                        S.55A VATA 1994
                      </span>
                      <span className="font-label-sm text-on-surface-variant">
                        Small Trader Exemption
                      </span>
                    </div>
                    <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col">
                      <span className="font-label-sm text-outline">
                        Audited Gross Expense
                      </span>
                      <span className="font-label-md font-mono font-semibold text-secondary">
                        Rs 823,620GBP
                      </span>
                      <span className="font-label-sm text-on-surface-variant">
                        0% Deductions on Creator
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pt-space-xs">
                    <span className="font-label-sm font-semibold text-outline uppercase tracking-wider">
                      Archived Evidential Attachments
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            description
                          </span>
                          <div className="flex flex-col">
                            <span className="font-label-md font-semibold text-on-surface">
                              VAT-Compliant-Invoice-5028.pdf
                            </span>
                            <span className="font-label-sm text-outline">
                              284 KB • Digitally Certified
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-outline text-[18px]">
                          download
                        </span>
                      </div>
                      <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            account_balance
                          </span>
                          <div className="flex flex-col">
                            <span className="font-label-md font-semibold text-on-surface">
                              Barclays-Vault-Ledger-Extract.pdf
                            </span>
                            <span className="font-label-sm text-outline">
                              188 KB • Bank Reconciled
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-outline text-[18px]">
                          download
                        </span>
                      </div>
                      <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            gavel
                          </span>
                          <div className="flex flex-col">
                            <span className="font-label-md font-semibold text-on-surface">
                              English-Law-Model-2.4-Executed.pdf
                            </span>
                            <span className="font-label-sm text-outline">
                              412 KB • eIDAS Dual Signed
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-outline text-[18px]">
                          download
                        </span>
                      </div>
                      <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            security
                          </span>
                          <div className="flex flex-col">
                            <span className="font-label-md font-semibold text-on-surface">
                              Cold-Archival-SHA256-Receipt.json
                            </span>
                            <span className="font-label-sm text-outline">
                              48 KB • Cryptographic Seal
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-outline text-[18px]">
                          download
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
              <aside className="lg:col-span-4 flex flex-col gap-space-lg">
                <section className="rounded-xl bg-surface-container-lowest p-space-md sm:p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        account_balance_wallet
                      </span>
                      <h3 className="font-headline-sm text-on-surface">
                        Escrow Custody Vault
                      </h3>
                    </div>
                    <span className="font-label-sm font-mono text-outline">
                      #A-8291-UKM2
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-3.5 rounded-xl flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-on-surface-variant">
                        Custodian Financial Institution
                      </span>
                      <span className="font-label-md font-semibold text-on-surface">
                        Barclays Bank UK PLC
                      </span>
                      <span className="font-label-sm text-secondary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">
                          lock
                        </span>
                         Segregated Tier-1 Account 
                      </span>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">
                       BARC 
                    </span>
                  </div>
                  <div className="flex flex-col gap-2.5 font-body-sm">
                    <div className="flex items-center justify-between py-1">
                      <div className="flex flex-col">
                        <span className="text-on-surface font-medium">
                          Inbound Brand Funding
                        </span>
                        <span className="text-outline text-xs">
                          14 Nov 2026 • Stripe / Faster Pay
                        </span>
                      </div>
                      <span className="font-mono text-on-surface font-semibold">
                        +Rs 823,620
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <div className="flex flex-col">
                        <span className="text-on-surface font-medium">
                          Milestone 1 Settlement (M1)
                        </span>
                        <span className="text-outline text-xs">
                          28 Nov 2026 • Faster Payments
                        </span>
                      </div>
                      <span className="font-mono text-secondary font-semibold">
                        -Rs 518,000
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <div className="flex flex-col">
                        <span className="text-on-surface font-medium">
                          Milestone 2 Settlement (M2)
                        </span>
                        <span className="text-outline text-xs">
                          12 Dec 2026 • Faster Payments
                        </span>
                      </div>
                      <span className="font-mono text-secondary font-semibold">
                        -Rs 259,000
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <div className="flex flex-col">
                        <span className="text-on-surface font-medium">
                          Pactly Platform Fee (6%)
                        </span>
                        <span className="text-outline text-xs">
                          Retained from Brand Gross
                        </span>
                      </div>
                      <span className="font-mono text-outline font-semibold">
                        -Rs 46,620
                      </span>
                    </div>
                    <div className="pt-3 mt-1 bg-surface-container rounded-lg p-3 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-label-sm font-semibold text-on-surface uppercase">
                          Current Vault Liability
                        </span>
                        <span className="text-xs text-secondary font-medium">
                          Full Custody Discharge Signed
                        </span>
                      </div>
                      <span className="font-mono text-headline-sm font-bold text-secondary">
                        Rs 0GBP
                      </span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-high flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[20px] text-secondary">
                      verified_user
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-sm font-semibold text-on-surface">
                        FCA Statutory Custody Rule Discharge
                      </span>
                      <span className="font-label-sm text-on-surface-variant leading-tight">
                        Zero outstanding balance verified under statutory escrow protocol.
                      </span>
                    </div>
                  </div>
                </section>
                <section className="rounded-xl bg-surface-container-lowest p-space-md sm:p-space-lg shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center gap-2 pb-space-xs">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      policy
                    </span>
                    <h3 className="font-headline-sm text-on-surface">
                      Rights & IP Status
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-2.5 font-body-sm text-on-surface">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <div>
                        <strong className="font-medium">
                          Organic YouTube Hosting:
                        </strong>
                        <p className="text-on-surface-variant text-xs">
                          Perpetual worldwide non-exclusive creator license maintained on channel.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[18px] text-error shrink-0 mt-0.5">
                        do_not_disturb_on
                      </span>
                      <div>
                        <strong className="font-medium">
                          Paid TikTok Boosting:
                        </strong>
                        <p className="text-on-surface-variant text-xs">
                          Terminated & Expired. Lumina Studio holds no further commercial ad rights.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                        verified
                      </span>
                      <div>
                        <strong className="font-medium">
                          Dispute Window Lapsed:
                        </strong>
                        <p className="text-on-surface-variant text-xs">
                          Harrison & Croft LLP arbitration term ended with 0 disputes lodged.
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>
                <section className="rounded-xl bg-surface-container-lowest p-space-md sm:p-space-lg shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-outline text-[20px]">
                        history_edu
                      </span>
                      <h3 className="font-headline-sm text-on-surface">
                        Audit Ledger
                      </h3>
                    </div>
                    <span className="font-label-sm font-mono text-outline">
                      SHA-256
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-container font-mono text-xs text-on-surface-variant break-all select-all">
                     Root: e7f2910c89a01fd4591b32c867fbd3004b12aa982 
                  </div>
                  <div className="relative flex flex-col gap-3 pt-2 text-xs font-mono">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-1"></span>
                      <div className="flex flex-col">
                        <span className="text-on-surface font-semibold">
                          COLD ARCHIVE RECORD SEALED
                        </span>
                        <span className="text-outline">
                          25-DEC-2026 17:45:02 UTC
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-outline shrink-0 mt-1"></span>
                      <div className="flex flex-col">
                        <span className="text-on-surface">
                          Xero Journal Sync Confirmed
                        </span>
                        <span className="text-outline">
                          25-DEC-2026 17:42:19 UTC
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-outline shrink-0 mt-1"></span>
                      <div className="flex flex-col">
                        <span className="text-on-surface">
                          Spark Token Deactivated
                        </span>
                        <span className="text-outline">
                          25-DEC-2026 14:00:00 UTC
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-outline shrink-0 mt-1"></span>
                      <div className="flex flex-col">
                        <span className="text-on-surface">
                          Milestone 2 Faster Payment Confirmed
                        </span>
                        <span className="text-outline">
                          12-DEC-2026 09:30:11 UTC
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-outline shrink-0 mt-1"></span>
                      <div className="flex flex-col">
                        <span className="text-on-surface">
                          Milestone 1 Faster Payment Confirmed
                        </span>
                        <span className="text-outline">
                          28-NOV-2026 14:15:44 UTC
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-outline shrink-0 mt-1"></span>
                      <div className="flex flex-col">
                        <span className="text-on-surface">
                          Escrow Inbound Rs 823,620Locked
                        </span>
                        <span className="text-outline">
                          14-NOV-2026 10:04:12 UTC
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(0,0,0,0.02)] mt-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin py-space-xl flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-xs text-primary font-headline-sm font-semibold tracking-tight">
                <span className="w-5 h-5 rounded bg-primary flex items-center justify-center text-on-primary font-bold text-xs">
                  P
                </span>
                <span>
                  Pactly Escrow & Contracts
                </span>
              </div>
              <p className="font-body-sm text-on-surface-variant max-w-xl">
                Pactly Ltd is an appointed representative authorized and regulated under statutory UK custodial framework. Client custody funds are ring-fenced in segregated tier-one escrow accounts.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-md text-on-surface-variant font-label-md">
              <a className="hover:text-on-surface transition-colors" data-go="/deals/uk-5028/audit" href="/deals/uk-5028/audit">
                Audit Protocol
              </a>
              <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Statutory Custody Terms
              </a>
              <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Dispute Arbitration
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm pt-space-md font-body-sm text-outline">
            <p>
              © 2025 Pactly Technologies Ltd. All rights reserved. Registered in England & Wales.
            </p>
            <div className="flex items-center gap-space-md">
              <span className="flex items-center gap-1 font-label-sm text-secondary">
                <span className="material-symbols-outlined text-[14px]">
                  verified_user
                </span>
                FCA Authorized Custody Rail
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
