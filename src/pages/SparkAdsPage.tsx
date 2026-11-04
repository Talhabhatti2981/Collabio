/** Pactly — Milestone 2: TikTok Spark Ads Whitelisting Activation & Token Submission */
export default function SparkAdsPage() {
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
                Pactly
              </span>
            </div>
            <nav data-active-classes="bg-primary-container text-on-primary font-medium rounded-lg" className="hidden md:flex items-center gap-1">
              <a className="px-3 py-2 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors rounded-lg" data-go="/deals" href="/deals">
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
          <div id="statusToast" className="fixed bottom-6 right-6 z-50 transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-3 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-lg shadow-xl">
            <span className="material-symbols-outlined text-secondary-container text-xl">
              check_circle
            </span>
            <span id="toastMessage" className="font-label-md text-label-md">
              Action successful
            </span>
          </div>
          <section className="w-full bg-surface-container-low/70 py-6">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
                  <a className="hover:text-primary transition-colors" data-go="/deals" href="/deals">
                    Deals
                  </a>
                  <span className="material-symbols-outlined text-sm opacity-40">
                    chevron_right
                  </span>
                  <a className="hover:text-primary transition-colors flex items-center gap-1.5" data-go="/deals/uk-5028/review" href="/deals/uk-5028/review">
                    <span className="font-semibold text-on-surface">
                      Deal #UK-5028
                    </span>
                    <span className="text-xs text-on-surface-variant font-normal">
                      (Lumina Studio × Charlotte Clark)
                    </span>
                  </a>
                  <span className="material-symbols-outlined text-sm opacity-40">
                    chevron_right
                  </span>
                  <span className="text-primary font-semibold">
                    Milestone 2: Spark Ads Whitelisting
                  </span>
                </nav>
                <div className="flex flex-wrap items-center gap-3">
                  <a className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-highest/60 hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors shadow-sm" href="#" onClick={(event) => event.preventDefault()}>
                    <span className="material-symbols-outlined text-base text-primary">
                      description
                    </span>
                     Executed Contract PDF 
                  </a>
                  <a className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-highest/60 hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors shadow-sm" href="#" onClick={(event) => event.preventDefault()}>
                    <span className="material-symbols-outlined text-base text-secondary">
                      account_balance_wallet
                    </span>
                     Escrow Ledger 
                  </a>
                  <a className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-highest/60 hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors shadow-sm" href="#" onClick={(event) => event.preventDefault()}>
                    <span className="material-symbols-outlined text-base text-on-surface-variant">
                      gavel
                    </span>
                     Arbitration Model 2.4 
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold tracking-wide shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                   MILESTONE 2 ACTIVE — ESCROW RING-FENCED (Rs 259,000) 
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-sm">
                    verified
                  </span>
                   MILESTONE 1 SETTLED (Rs 518,000DISBURSED) 
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-sm text-secondary">
                    bolt
                  </span>
                   TIKTOK FOR BUSINESS MARKETING API V1.3 CONNECTED 
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed/30 text-on-tertiary-fixed-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-xs">
                    timer
                  </span>
                   Due 02 Dec 2026 (7d SLA remaining) 
                </span>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface py-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="relative flex items-center justify-between w-full">
                <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-0.5 bg-surface-container-highest -z-0">
                  <div className="h-full bg-secondary w-3/4"></div>
                </div>
                <div className="relative z-10 flex flex-col items-center bg-surface px-2">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-sm">
                    <span className="material-symbols-outlined text-base">
                      check
                    </span>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface font-semibold mt-2">
                    Pact Signed
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    eIDAS Verified
                  </span>
                </div>
                <div className="relative z-10 flex flex-col items-center bg-surface px-2">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-sm">
                    <span className="material-symbols-outlined text-base">
                      check
                    </span>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface font-semibold mt-2">
                    Rs 823,620Funded
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Barclays Custody
                  </span>
                </div>
                <div className="relative z-10 flex flex-col items-center bg-surface px-2">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-sm">
                    <span className="material-symbols-outlined text-base">
                      check
                    </span>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface font-semibold mt-2">
                    Milestone 1
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    Rs 518,000Disbursed
                  </span>
                </div>
                <div className="relative z-10 flex flex-col items-center bg-surface px-3">
                  <div className="w-9 h-9 rounded-full bg-surface ring-4 ring-primary flex items-center justify-center text-primary shadow-md">
                    <div className="w-3.5 h-3.5 rounded-full bg-primary animate-ping"></div>
                  </div>
                  <span className="font-label-md text-label-md text-primary font-bold mt-2">
                    Milestone 2
                  </span>
                  <span className="font-label-sm text-label-sm text-primary font-semibold">
                    Spark Ads Active (Rs 259,000)
                  </span>
                </div>
                <div className="relative z-10 flex flex-col items-center bg-surface px-2">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-outline shadow-sm">
                    <span className="material-symbols-outlined text-base">
                      lock
                    </span>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface-variant font-medium mt-2">
                    Completion
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    All Rights Concluded
                  </span>
                </div>
              </div>
            </div>
          </section>
          <main className="w-full py-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-md relative overflow-hidden">
                  <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-primary/5 blur-2xl pointer-events-none"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                          DELIVERABLE 2 OF 2
                        </span>
                        <span className="text-on-surface-variant font-label-sm text-label-sm">
                          Barclays Vault Ref: #A-8291
                        </span>
                      </div>
                      <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                        30-Day TikTok Spark Ads Whitelisting Authorization
                      </h1>
                      <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                         Authorize organic post amplification for advertiser Lumina Studio Ltd without transferring organic account credentials or underlying creative copyright. 
                      </p>
                    </div>
                    <div className="flex md:flex-col items-end justify-between md:justify-center p-4 rounded-xl bg-surface-container-low min-w-[190px] shadow-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Guaranteed Net Payout
                      </span>
                      <span className="font-headline-xl text-headline-xl text-primary font-bold">
                        Rs 259,000
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">
                          shield_with_heart
                        </span>
                         Zero-Deduction Escrow 
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 pt-5 bg-surface-container-low/40 rounded-lg p-4">
                    <div className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-base">
                          help_outline
                        </span>
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          How to generate this code in the TikTok mobile app (4 steps)
                        </span>
                      </div>
                      <span id="arrowRot" className="material-symbols-outlined text-on-surface-variant text-base transition-transform duration-200">
                        expand_more
                      </span>
                    </div>
                    <div id="tiktokInstructions" className="hidden mt-4 pt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-on-surface-variant font-body-sm text-body-sm">
                      <div className="bg-surface-container-lowest p-3 rounded-lg shadow-sm">
                        <span className="font-label-sm text-label-sm text-primary font-bold block mb-1">
                          STEP 1
                        </span>
                         Open TikTok Video &gt; Tap ⋯ &gt; Select 
                        <strong className="text-on-surface">
                          Ad Settings
                        </strong>
                        . 
                      </div>
                      <div className="bg-surface-container-lowest p-3 rounded-lg shadow-sm">
                        <span className="font-label-sm text-label-sm text-primary font-bold block mb-1">
                          STEP 2
                        </span>
                         Toggle 
                        <strong className="text-on-surface">
                          Ad Authorization
                        </strong>
                         switch to active. 
                      </div>
                      <div className="bg-surface-container-lowest p-3 rounded-lg shadow-sm">
                        <span className="font-label-sm text-label-sm text-primary font-bold block mb-1">
                          STEP 3
                        </span>
                         Select 
                        <strong className="text-on-surface">
                          30 Days
                        </strong>
                         authorization validity. 
                      </div>
                      <div className="bg-surface-container-lowest p-3 rounded-lg shadow-sm">
                        <span className="font-label-sm text-label-sm text-primary font-bold block mb-1">
                          STEP 4
                        </span>
                         Tap 
                        <strong className="text-on-surface">
                          Generate Code
                        </strong>
                         &amp; copy to paste below. 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-md space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-lg">
                          videocam
                        </span>
                      </div>
                      <div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface">
                          Designated TikTok Creative &amp; API Verification
                        </h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Milestone-linked post for advertiser ID 
                          <code className="bg-surface-container-high px-1.5 py-0.5 rounded text-on-surface font-semibold text-xs">
                            ADV-LUMINA-8821
                          </code>
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                       API Synced 
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-surface-container-low shadow-sm">
                    <div className="relative w-full sm:w-28 h-36 rounded-lg overflow-hidden flex-shrink-0 bg-inverse-surface shadow-sm">
                      <img data-alt="Vertical 9:16 smartphone video thumbnail showing a young female tech creator with soft studio lighting presenting three VS Code coding extensions on dual monitors, high-definition tech aesthetic with subtle neon cyan lighting accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ8HAbiORwhAuG4PzsFXjtYr2Y4MaLqeXSjMYgIuTFAs6dg5DqKOAoIaiwFaDW6vQDzuxiEjJUUDN2OyibuKF4GVohQqILv-hHK-bgspefkWlfg5d9amWqgJ8fDqwZghiVO5eeHRw6jWXWc1Xm-a4vLw9k-WcMUKX5hF1tKONXspQUQ-JocgU_9MwcWOsKaTGhYXjoVqwY7stKQ-a1C7S4l2CuznQzGKvhlQ92JccsNjNoWQnybV6LQA" className="w-full h-full object-cover" />
                      <div className="absolute bottom-2 left-2 bg-inverse-surface/80 backdrop-blur text-inverse-on-surface px-1.5 py-0.5 rounded text-[10px] font-semibold flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[12px]">
                          schedule
                        </span>
                         0:42 
                      </div>
                      <div className="absolute top-2 right-2 bg-primary/90 text-on-primary rounded-full p-1 shadow">
                        <span className="material-symbols-outlined text-[14px]">
                          play_arrow
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2 w-full">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                          TikTok Video ID: 7429184029148201984
                        </span>
                        <span className="text-xs text-on-surface-variant">
                          Published 24 Nov 2026, 18:20 GMT
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Top 3 VS Code AI Plugins You Need in 2027 (ft. Lumina Studio)
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-on-surface-variant font-label-md text-label-md pt-1">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base text-on-surface-variant">
                            visibility
                          </span>
                           128.4K Views 
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base text-error">
                            favorite
                          </span>
                           14.2K Likes 
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base text-secondary">
                            mode_comment
                          </span>
                           842 Comments 
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base text-primary">
                            bookmark
                          </span>
                           9.1K Saves 
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label htmlFor="sparkCodeInput" className="font-label-lg text-label-lg text-on-surface font-semibold flex items-center gap-1.5">
                         TikTok Spark Ads Video Authorization Code 
                        <span className="text-error">
                          *
                        </span>
                      </label>
                      <button className="text-primary hover:text-primary-container font-label-md text-label-md flex items-center gap-1 transition-colors">
                        <span className="material-symbols-outlined text-sm">
                          refresh
                        </span>
                         Re-verify Token 
                      </button>
                    </div>
                    <div className="relative">
                      <input id="sparkCodeInput" placeholder="Paste tiktok_spark_auth_v2_... code here" type="text" defaultValue="tiktok_spark_auth_v2_98a72b01c4e92f7a93c048" className="w-full px-4 py-3 bg-surface rounded-lg font-mono text-sm text-on-surface shadow-sm focus:outline-none focus:ring-2 focus:ring-primary pr-36" />
                      <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center">
                        <span id="apiStatusBadge" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-sm">
                            check_circle
                          </span>
                           VALID CODE 
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-secondary text-lg mt-0.5">
                          verified
                        </span>
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold block">
                            Commercial Audio Cleared
                          </span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Audio track is verified under TikTok Commercial Audio Library (CAL).
                          </p>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-secondary text-lg mt-0.5">
                          date_range
                        </span>
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold block">
                            Authorization: 30 Calendar Days
                          </span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Active through 25 Dec 2026, 23:59 GMT (Auto-revocation enforced).
                          </p>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-secondary text-lg mt-0.5">
                          lock_open
                        </span>
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold block">
                            Target Advertiser Bound
                          </span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Restricted strictly to Advertiser ID ADV-LUMINA-8821.
                          </p>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-secondary text-lg mt-0.5">
                          visibility
                        </span>
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold block">
                            Video Status: Public &amp; Eligible
                          </span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            No geographical geoblocks; compliant with UK ASA advertising guidelines.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 pt-2">
                    <label className="font-label-lg text-label-lg text-on-surface font-semibold block">
                       Amplification Destination URL &amp; Campaign UTM Tagging 
                    </label>
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-surface-container-low shadow-sm">
                      <span className="material-symbols-outlined text-primary text-lg">
                        link
                      </span>
                      <span className="font-mono text-xs text-on-surface flex-1 truncate">
                        https://lumina.io/charlotte-tiktok?utm_source=tiktok&amp;utm_medium=spark_ad&amp;utm_campaign=q4_dev_promo
                      </span>
                      <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold flex items-center gap-1 flex-shrink-0">
                        <span className="material-symbols-outlined text-xs">
                          done
                        </span>
                         200 OK 
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 pt-2">
                    <label htmlFor="creatorNotes" className="font-label-lg text-label-lg text-on-surface font-semibold block">
                       Creator Note to Brand (Lumina Studio / David Vance) 
                    </label>
                    <textarea id="creatorNotes" rows={3} className="w-full px-4 py-3 bg-surface rounded-lg font-body-md text-body-md text-on-surface shadow-sm focus:outline-none focus:ring-2 focus:ring-primary leading-relaxed">
                      Hi David! Generated the 30-day Spark Ads authorization code directly for the VS Code AI plugins video. The TikTok commercial music license is cleared and advertiser ID ADV-LUMINA-8821 is granted full organic boost authorization for the next 30 days.
                    </textarea>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-md space-y-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-lg">
                        auto_mode
                      </span>
                    </div>
                    <div>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">
                        Escrow Disbursement Trigger &amp; Autonomous Protocol
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Automated milestone settlement without manual bank transfer overheads
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                        sync_alt
                      </span>
                      <div className="space-y-1">
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          Autonomous TikTok API Ad Spend / Delivery Trigger
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                           Pactly listens directly to the TikTok Marketing API webhook. The ring-fenced 
                          <strong className="text-on-surface font-semibold">
                            Rs 259,000
                          </strong>
                           will disburse immediately via UK Faster Payments to Charlotte Emily Clark once Lumina Studio initiates campaign spend, or automatically within 
                          <strong className="text-on-surface font-semibold">
                            72 hours of token verification
                          </strong>
                           if no formal dispute is registered under Clause 5.1. 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-low/50 space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input defaultChecked={true} type="checkbox" className="mt-1 w-5 h-5 rounded text-primary focus:ring-primary focus:ring-offset-0" />
                      <div className="space-y-1">
                        <span className="font-label-md text-label-md text-on-surface font-semibold block">
                           Statutory Intellectual Property &amp; Advertising Rights Grant 
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                           I, Charlotte Emily Clark (sole trader), hereby grant Lumina Studio Ltd non-exclusive, worldwide paid amplification rights (TikTok Spark Ads) for video 
                          <code className="text-xs bg-surface-container-high px-1 py-0.5 rounded font-mono">
                            #7429184029148201984
                          </code>
                           for exactly 30 calendar days pursuant to Schedule 2 of Pact #UK-5028. All underlying copyright, voice, and trademark rights remain solely with the creator. 
                        </p>
                      </div>
                    </label>
                    <div className="flex flex-wrap items-center justify-between text-xs text-on-surface-variant pt-2">
                      <span className="flex items-center gap-1 font-mono">
                        <span className="material-symbols-outlined text-xs text-secondary">
                          verified_user
                        </span>
                         Digital Signature Hash: eIDAS-SHA256:8b3e819b...991a0 
                      </span>
                      <span>
                        Timestamp: 25 Nov 2026, 16:02:11 GMT
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold transition-all shadow-md flex items-center justify-center gap-2" data-go="/deals/uk-5028/milestone-2">
                        <span>
                          Submit Spark Ads Authorization Code (Milestone 2)
                        </span>
                        <span className="material-symbols-outlined text-base">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                      <button className="px-4 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md font-medium transition-colors">
                         Save Draft 
                      </button>
                      <button title="Print Escrow Summary" className="p-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-colors">
                        <span className="material-symbols-outlined text-base">
                          print
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-md space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">
                        account_balance
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Escrow Trust Vault
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                       Ring-Fenced 
                    </span>
                  </div>
                  <div className="space-y-3 font-body-sm text-body-sm">
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-on-surface-variant">
                        Custody Depository
                      </span>
                      <span className="font-medium text-on-surface text-right">
                        Barclays Bank UK PLC
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-on-surface-variant">
                        Statutory Client Account
                      </span>
                      <span className="font-mono text-xs font-semibold text-on-surface">
                        Vault #A-8291
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-on-surface-variant">
                        Milestone 1 Settlement
                      </span>
                      <span className="font-medium text-secondary">
                        Rs 518,000Disbursed ✓
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 font-semibold text-on-surface bg-surface-container-low px-3 py-2 rounded-lg">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                         Active Milestone 2 
                      </span>
                      <span className="text-primary font-bold">
                        Rs 259,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 text-xs text-on-surface-variant">
                      <span>
                        Statutory Legal Reserve
                      </span>
                      <span>
                        Rs 15,540(Pre-funded)
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2 font-headline-sm text-headline-sm text-on-surface font-bold">
                      <span>
                        Total Remaining in Vault
                      </span>
                      <span>
                        Rs 274,540
                      </span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-surface-container-low space-y-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold block">
                      Target Disbursement Rail
                    </span>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-base">
                          bolt
                        </span>
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          UK Faster Payments
                        </span>
                      </div>
                      <span className="text-xs text-secondary font-medium">
                        &lt;15s SLA
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                       Payee: 
                      <strong className="text-on-surface">
                        Charlotte Emily Clark
                      </strong>
                      <br />
                       NatWest Business Account ••••4910 
                    </p>
                  </div>
                  <div className="pt-1">
                    <span className="font-mono text-[11px] text-on-surface-variant/80 block break-all">
                       Ledger Hash: 3d9a8f21e5c0b7d44810a99ff1e3bc401fa9012 
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-md space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-on-surface-variant text-lg">
                      contract
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      Spark Ads Covenant Scope
                    </h3>
                  </div>
                  <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-base mt-0.5">
                        check_circle
                      </span>
                      <span>
                        <strong className="text-on-surface">
                          Duration:
                        </strong>
                         Exactly 30 Calendar Days from API link activation.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-base mt-0.5">
                        check_circle
                      </span>
                      <span>
                        <strong className="text-on-surface">
                          Placement:
                        </strong>
                         TikTok In-Feed &amp; Dark Post ads only. No broadcast or offline billboard usage.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-base mt-0.5">
                        check_circle
                      </span>
                      <span>
                        <strong className="text-on-surface">
                          Exclusivity:
                        </strong>
                         Non-exclusive organic creator retainership.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-base mt-0.5">
                        check_circle
                      </span>
                      <span>
                        <strong className="text-on-surface">
                          Governing Law:
                        </strong>
                         English Commercial Court Jurisdiction under Pactly Model 2.4.
                      </span>
                    </li>
                  </ul>
                  <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between text-xs">
                    <span className="text-on-surface-variant">
                      Appointed Arbitrator:
                    </span>
                    <span className="font-semibold text-on-surface">
                      Harrison &amp; Croft LLP (Rs 27,750cap)
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-md space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-base">
                        history
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Bilateral Audit Trail
                      </h3>
                    </div>
                    <span className="text-xs text-on-surface-variant">
                      Live Synced
                    </span>
                  </div>
                  <div className="space-y-4 relative pl-4 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-highest">
                    <div className="relative pl-3">
                      <div className="absolute -left-[19px] top-1 w-2.5 h-2.5 rounded-full bg-secondary"></div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">
                        25 Nov 2026, 14:18 GMT
                      </span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold block">
                        Milestone 1 Settled
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Rs 518,000disbursed to NatWest ••••4910 via Faster Payments.
                      </p>
                    </div>
                    <div className="relative pl-3">
                      <div className="absolute -left-[19px] top-1 w-2.5 h-2.5 rounded-full bg-primary"></div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">
                        25 Nov 2026, 14:20 GMT
                      </span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold block">
                        Milestone 2 Unlocked
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Rs 259,000escrow ring-fenced in Barclays Client Vault #A-8291.
                      </p>
                    </div>
                    <div className="relative pl-3">
                      <div className="absolute -left-[19px] top-1 w-2.5 h-2.5 rounded-full bg-primary"></div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">
                        25 Nov 2026, 15:45 GMT
                      </span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold block">
                        TikTok Marketing API Token
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        OAuth2 connection verified with video #7429184029148201984.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </main>
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
              © 2025 Pactly Ltd. All rights reserved. Registered in England &amp; Wales.
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
