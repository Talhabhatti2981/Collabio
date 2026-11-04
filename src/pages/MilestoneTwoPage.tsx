/** Pactly — Milestone 2: Brand Review & Campaign Launch (TikTok Spark Ads) */
export default function MilestoneTwoPage() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-[1200px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-lg">
            <div className="flex items-center gap-space-xs">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  verified_user
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface">
                Pactly
              </span>
            </div>
            <nav data-active-classes="bg-surface-container text-primary font-label-md text-label-md rounded-lg" className="hidden lg:flex items-center gap-space-xs">
              <div className="relative flex items-center">
                <a aria-current="page" className="flex items-center gap-space-xs px-space-sm py-space-xs transition-colors bg-surface-container text-primary font-label-md text-label-md rounded-lg" data-go="/deals" href="/deals">
                  <span>
                    Deals
                  </span>
                  <span className="px-space-xs py-[1px] bg-primary-container text-on-primary rounded-full font-label-sm text-label-sm leading-none">
                    3
                  </span>
                </a>
              </div>
              <a className="px-space-sm py-space-xs rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/invitations/uk-5028" href="/invitations/uk-5028">
                Invitations
              </a>
              <a className="px-space-sm py-space-xs rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/profile" href="/profile">
                Profile
              </a>
              <a className="px-space-sm py-space-xs rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/settings" href="/settings">
                Settings
              </a>
              <a className="px-space-sm py-space-xs rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/help" href="/help">
                Help & Legal
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-xs rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                In Escrow
              </span>
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                Rs 4,724,160
              </span>
            </div>
            <div className="flex items-center gap-space-sm bg-surface-container-low pl-space-sm pr-space-md py-space-xs rounded-full">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className="font-label-md text-label-md text-on-surface leading-tight">
                  David Vance
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
                  Lumina Studio • Brand
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-16 bg-background min-h-[calc(100vh-64px)]">
        <div className="flex flex-col w-full">
          <div className="w-full bg-surface-container-lowest border-b border-surface-container shadow-sm">
            <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin py-space-sm flex flex-col md:flex-row md:items-center md:justify-between gap-space-sm">
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <a className="hover:text-primary transition-colors flex items-center gap-1" data-go="/deals" href="/deals">
                  <span className="material-symbols-outlined text-[16px]">
                    folder_open
                  </span>
                  <span>
                    Deals
                  </span>
                </a>
                <span>
                  /
                </span>
                <a className="hover:text-primary transition-colors font-medium text-on-surface" data-go="/deals/uk-5028/review" href="/deals/uk-5028/review">
                  Deal #UK-5028
                </a>
                <span className="text-outline-variant font-normal">
                  (Lumina Studio × Charlotte Clark)
                </span>
                <span>
                  /
                </span>
                <span className="text-primary font-semibold">
                  Milestone 2: Brand Review & Spark Ads
                </span>
              </div>
              <div className="flex items-center gap-space-sm flex-wrap">
                <button type="button" className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[15px] text-primary">
                    description
                  </span>
                  <span>
                    Inspect Executed Pact PDF
                  </span>
                </button>
                <button type="button" className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[15px] text-secondary">
                    account_balance
                  </span>
                  <span>
                    Barclays Escrow Ledger
                  </span>
                </button>
                <button type="button" className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[15px] text-on-surface-variant">
                    gavel
                  </span>
                  <span>
                    Model 2.4 Terms
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin py-space-md w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm mb-space-md">
              <div className="bg-surface-container-lowest p-space-sm rounded-lg border border-surface-container flex items-center gap-space-sm shadow-sm">
                <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">
                    verified
                  </span>
                </div>
                <div className="min-w-0">
                  <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Milestone State
                  </span>
                  <span className="block font-label-md text-label-md font-semibold text-secondary truncate">
                    Ready for Brand Activation
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-sm rounded-lg border border-surface-container flex items-center gap-space-sm shadow-sm">
                <div className="w-8 h-8 rounded-full bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">
                    cloud_done
                  </span>
                </div>
                <div className="min-w-0">
                  <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Submitted by Creator
                  </span>
                  <span className="block font-label-md text-label-md font-semibold text-on-surface truncate">
                    25 Nov 2026, 16:02 GMT
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-sm rounded-lg border border-surface-container flex items-center gap-space-sm shadow-sm">
                <div className="w-8 h-8 rounded-full bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">
                    lock
                  </span>
                </div>
                <div className="min-w-0">
                  <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Escrow Protected
                  </span>
                  <span className="block font-label-md text-label-md font-semibold text-on-surface truncate">
                    Rs 259,000in Barclays Custody
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-sm rounded-lg border border-surface-container flex items-center gap-space-sm shadow-sm">
                <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">
                    sync_alt
                  </span>
                </div>
                <div className="min-w-0">
                  <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    TikTok Marketing API
                  </span>
                  <span className="block font-label-md text-label-md font-semibold text-secondary truncate">
                    v1.3 Handshake Verified
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-md border border-surface-container mb-space-lg shadow-sm">
              <div className="flex items-center justify-between text-center relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-surface-container -translate-y-1/2 z-0 hidden sm:block"></div>
                <div className="absolute top-1/2 left-0 w-1/2 h-0.5 bg-secondary -translate-y-1/2 z-0 hidden sm:block"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow">
                    <span className="material-symbols-outlined text-[16px]">
                      check
                    </span>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface font-medium mt-1">
                    1. Video Delivered
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary">
                    Settled Rs 518,000
                  </span>
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-surface-container-lowest border-2 border-primary text-primary flex items-center justify-center shadow">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                  </div>
                  <span className="font-label-md text-label-md text-primary font-bold mt-1">
                    2. Spark Ads Launch
                  </span>
                  <span className="font-label-sm text-label-sm text-primary font-medium">
                    Under Review (Rs 259,000)
                  </span>
                </div>
                <div className="relative z-10 flex flex-col items-center opacity-60">
                  <div className="w-7 h-7 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center">
                    <span className="font-label-sm text-label-sm font-semibold">
                      3
                    </span>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface-variant font-medium mt-1">
                    3. Performance Audit
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Day 30 SLA
                  </span>
                </div>
                <div className="relative z-10 flex flex-col items-center opacity-60">
                  <div className="w-7 h-7 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center">
                    <span className="font-label-sm text-label-sm font-semibold">
                      4
                    </span>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface-variant font-medium mt-1">
                    4. Final Escrow Close
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Archived
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              <div className="lg:col-span-8 flex flex-col gap-space-lg">
                <div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg border border-surface-container shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-space-sm pb-space-sm border-b border-surface-container">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-semibold mb-1">
                         SCHEDULE 2 DELIVERABLE 
                      </span>
                      <h1 className="font-headline-md text-headline-md text-on-surface">
                        Milestone 2: 30-Day TikTok Spark Ads Whitelisting Authorization
                      </h1>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      <span className="block font-headline-md text-headline-md text-secondary font-bold">
                        Rs 259,000Net
                      </span>
                      <span className="block font-label-sm text-label-sm text-on-surface-variant">
                        Barclays Vault #A-8291
                      </span>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
                     Creator Charlotte Emily Clark has provided an authentic TikTok Spark Ads authorization token, granting 30-day whitelisting permissions to advertiser account 
                    <code className="px-1.5 py-0.5 rounded bg-surface-container font-mono text-[12px] text-on-surface">
                      Lumina Studio Ltd (ADV-LUMINA-8821)
                    </code>
                    . Verify clearance, bind campaign targeting, and authorize release protocol below. 
                  </p>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg border border-surface-container shadow-sm">
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary">
                        live_tv
                      </span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">
                        Spark Ads Creative & API Clearance
                      </h2>
                    </div>
                    <span className="px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                       LIVE API PULSE: 200 OK 
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md bg-surface-container-low rounded-lg p-space-md border border-surface-container">
                    <div className="md:col-span-4 relative group rounded-lg overflow-hidden bg-on-surface aspect-[9/16] max-h-[260px] md:max-h-none flex items-center justify-center">
                      <img data-alt="Vertical TikTok developer tech review video thumbnail framed in 9 to 16 ratio showing a female creator at a desk with dual studio monitors displaying dark mode VS Code and terminal windows, warm cinematic studio rim lighting in indigo and teal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATeN33KxpUOefks9tVA1WaJoRpmovs27i1hkScow-cEOAgxEUome9l-gZyPQbe-qE7D69-2US4e4ss883UBjCUbUWWbmM6mEWteHjl2M_nuoWmd7W2QbjNczOrvFKay840_VRxCiJdxNXUcZikDfMMy4L-5qj17CKTvLS3fM-DkuQRh_8xOxiI9H9Pcy6gWxAMjzr-UdOJIyQPcpXlqqmA-yr2XsFsZpL5cZiqDCVFLceYpufRmPOn5w" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-3">
                        <span className="self-end px-1.5 py-0.5 rounded bg-black/60 text-white font-label-sm text-label-sm">
                          0:42
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/90 text-primary mx-auto my-auto flex items-center justify-center shadow-md">
                          <span className="material-symbols-outlined text-[24px]">
                            play_arrow
                          </span>
                        </div>
                        <span className="text-white font-label-sm text-label-sm truncate">
                          @charlotte.tech
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-8 flex flex-col justify-between gap-space-sm">
                      <div>
                        <span className="text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                          Selected Organic Creative
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">
                          Top 3 VS Code AI Plugins You Need in 2027 (ft. Lumina Studio)
                        </h3>
                        <span className="font-body-sm text-body-sm text-on-surface-variant block mt-0.5">
                          Published organically on 24 Nov 2026, 18:30 GMT • Audio: Commercial Cleared
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-space-xs py-space-xs border-y border-surface-container bg-surface-container-lowest rounded-md px-space-xs">
                        <div className="text-center">
                          <span className="font-label-sm text-label-sm text-on-surface-variant block">
                            Views
                          </span>
                          <span className="font-label-md text-label-md font-bold text-on-surface">
                            128.4K
                          </span>
                        </div>
                        <div className="text-center">
                          <span className="font-label-sm text-label-sm text-on-surface-variant block">
                            Likes
                          </span>
                          <span className="font-label-md text-label-md font-bold text-on-surface">
                            14.2K
                          </span>
                        </div>
                        <div className="text-center">
                          <span className="font-label-sm text-label-sm text-on-surface-variant block">
                            Comments
                          </span>
                          <span className="font-label-md text-label-md font-bold text-on-surface">
                            842
                          </span>
                        </div>
                        <div className="text-center">
                          <span className="font-label-sm text-label-sm text-on-surface-variant block">
                            Saves
                          </span>
                          <span className="font-label-md text-label-md font-bold text-on-surface">
                            9.1K
                          </span>
                        </div>
                      </div>
                      <div>
                        <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 font-semibold">
                          Tiktok Spark Ads Authorization Code
                        </label>
                        <div className="flex items-center gap-space-xs bg-surface-container-lowest border border-surface-container rounded-lg p-space-xs">
                          <span className="font-mono text-label-sm text-label-sm text-on-surface px-space-xs truncate select-all">
                            tiktok_spark_auth_v2_98a72b01c4e92f7a93c048
                          </span>
                          <button type="button" className="ml-auto px- space-xs py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm font-semibold shrink-0 transition-colors">
                             COPY 
                          </button>
                          <span className="px-space-xs py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold shrink-0">
                             API VALIDATED 
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <a rel="noopener noreferrer" target="_blank" className="inline-flex items-center gap-1 text-primary hover:underline font-label-md text-label-md font-semibold" href="https://ads.tiktok.com">
                          <span>
                            Open in TikTok Ads Manager
                          </span>
                          <span className="material-symbols-outlined text-[15px]">
                            open_in_new
                          </span>
                        </a>
                        <span className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                           30-Day Window Engaged 
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-md">
                    <h4 className="font-label-md text-label-md font-bold text-on-surface mb-space-sm uppercase tracking-wider">
                      Automated 4-Point API Clearances
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                      <div className="flex items-start gap-space-xs bg-surface-container-low p-space-sm rounded-lg border border-surface-container">
                        <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                          check_circle
                        </span>
                        <div>
                          <span className="block font-label-md text-label-md font-semibold text-on-surface">
                            CAL Commercial Audio Cleared
                          </span>
                          <span className="block font-body-sm text-body-sm text-on-surface-variant">
                            Royalty-free commercial library sound tag verified for paid boost.
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-xs bg-surface-container-low p-space-sm rounded-lg border border-surface-container">
                        <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                          check_circle
                        </span>
                        <div>
                          <span className="block font-label-md text-label-md font-semibold text-on-surface">
                            30-Day Authorization Window
                          </span>
                          <span className="block font-body-sm text-body-sm text-on-surface-variant">
                            Valid from 25 Nov 2026 to 25 Dec 2026, 23:59 GMT.
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-xs bg-surface-container-low p-space-sm rounded-lg border border-surface-container">
                        <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                          check_circle
                        </span>
                        <div>
                          <span className="block font-label-md text-label-md font-semibold text-on-surface">
                            Target Advertiser ID Binding
                          </span>
                          <span className="block font-body-sm text-body-sm text-on-surface-variant">
                            Strictly restricted to Lumina Studio Ltd (ADV-LUMINA-8821).
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-xs bg-surface-container-low p-space-sm rounded-lg border border-surface-container">
                        <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                          check_circle
                        </span>
                        <div>
                          <span className="block font-label-md text-label-md font-semibold text-on-surface">
                            UK ASA/CAP Compliance
                          </span>
                          <span className="block font-body-sm text-body-sm text-on-surface-variant">
                            Original caption includes '#ad #sponsored' metadata tags.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg border border-surface-container shadow-sm">
                  <div className="flex items-center justify-between mb-space-md">
                    <div>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">
                        Spark Ads Campaign Parameters
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Configure programmatic delivery parameters before releasing escrow funds.
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant">
                      tune
                    </span>
                  </div>
                  <div className="space-y-space-md">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                          Target TikTok Ad Account
                        </label>
                        <div className="flex items-center justify-between px-space-sm py-2 rounded-lg bg-surface-container-low border border-surface-container text-on-surface font-body-md text-body-md">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                            <span>
                              ADV-LUMINA-8821 (Lumina UK)
                            </span>
                          </div>
                          <span className="text-on-surface-variant text-label-sm font-label-sm">
                            OAuth2 Active
                          </span>
                        </div>
                      </div>
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                          Target Ad Campaign
                        </label>
                        <select className="w-full px-space-sm py-2 rounded-lg bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md text-body-md focus:border-primary focus:outline-none">
                          <option selected={true}>
                            Q4 Developer Tooling Drive - Spark Boost
                          </option>
                          <option>
                            2027 General Brand Awareness UK
                          </option>
                          <option>
                            Software Eng Acquisition Phase 2
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                          Daily Advertising Budget
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-label-md">
                            £
                          </span>
                          <input type="text" defaultValue="150.00" className="w-full pl-7 pr-space-sm py-2 rounded-lg bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md text-body-md focus:border-primary focus:outline-none" />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-label-sm text-label-sm">
                            PKR / Day
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 block">
                          Est. Reach: 45,000 – 62,000 UK engineers daily.
                        </span>
                      </div>
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                          Campaign Optimization Objective
                        </label>
                        <div className="px-space-sm py-2 rounded-lg bg-surface-container-low border border-surface-container text-on-surface font-body-md text-body-md flex items-center justify-between">
                          <span>
                            Conversions / Free Trial Signups
                          </span>
                          <span className="material-symbols-outlined text-[18px] text-secondary">
                            trending_up
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 block">
                          Pixel ID: #PX-LUMINA-4402 verified.
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="font-label-md text-label-md text-on-surface font-semibold">
                          Whitelist Duration Covenant
                        </label>
                        <span className="font-label-sm text-label-sm text-secondary font-bold">
                          30 Days Remaining (Auto-revokes 25 Dec 2026, 23:59 GMT)
                        </span>
                      </div>
                      <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                        <div className="bg-secondary h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                        Destination Webhook & UTM Link
                      </label>
                      <div className="flex items-center gap-space-xs bg-surface-container-low border border-surface-container rounded-lg p-space-xs">
                        <span className="material-symbols-outlined text-secondary text-[18px] pl-1">
                          link
                        </span>
                        <span className="font-mono text-[12px] text-on-surface truncate">
                          https://lumina.io/charlotte-tiktok?utm_source=tiktok&utm_medium=spark_ad&utm_campaign=dev_tools_2027
                        </span>
                        <span className="ml-auto px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold shrink-0">
                           HTTP 200 OK 
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg border border-surface-container shadow-sm">
                  <div className="flex items-center gap-space-xs mb-space-md">
                    <span className="material-symbols-outlined text-primary">
                      chat
                    </span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Deliverable Notes & Audit Thread
                    </h2>
                  </div>
                  <div className="flex items-start gap-space-sm bg-surface-container-low p-space-md rounded-lg border border-surface-container mb-space-md">
                    <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-label-md shrink-0">
                       CC 
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-label-md text-label-md font-semibold text-on-surface">
                            Charlotte Emily Clark
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant ml-2">
                            Digital Creator • Partner
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Today at 16:02 GMT
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface mt-2 bg-surface-container-lowest p-space-sm rounded-lg border border-surface-container">
                         “Hi David! Generated the 30-day Spark Ads authorization code directly for the VS Code AI plugins video. The TikTok commercial music license is cleared and advertiser ID 
                        <code className="text-primary font-mono font-semibold">
                          ADV-LUMINA-8821
                        </code>
                         is granted full organic boost authorization for the next 30 days. Ready for your campaign launch!” 
                      </p>
                      <div className="flex items-center gap-space-xs mt-2 text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px] text-secondary">
                          verified_user
                        </span>
                        <span>
                          Cryptographically signed with Charlotte's verified Pactly key
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                      Add Bilateral Memorandum (Optional Record for Custody Ledger)
                    </label>
                    <div className="relative">
                      <textarea placeholder="e.g. Approved. Launching Rs 55,500/day ad spend targeting UK senior software developers from 18:00 GMT." rows={2} className="w-full p-space-sm rounded-lg bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md text-body-md focus:border-primary focus:outline-none resize-none"></textarea>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg border-2 border-primary-container shadow-md">
                  <div className="flex items-center gap-space-xs mb-space-sm">
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      gavel
                    </span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Escrow Disbursement Authorization
                    </h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                     Choose how the safeguarded Rs 259,000Net Milestone 2 payment will disburse to Charlotte Emily Clark’s NatWest account. 
                  </p>
                  <div className="space-y-space-sm mb-space-md">
                    <label className="flex items-start gap-space-sm p-space-sm rounded-lg border-2 border-primary bg-primary-fixed/20 cursor-pointer">
                      <input defaultChecked={true} name="escrow_protocol" type="radio" className="mt-1 text-primary focus:ring-primary h-4 w-4" />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-space-xs flex-wrap">
                          <span className="font-label-md text-label-md font-bold text-on-surface">
                            Autonomous API Spend Trigger (Recommended)
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                            ZERO FRICTION
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                           Disburse Rs 259,000Net automatically upon the first Rs 3,700ad spend detected on TikTok Marketing API, or unconditionally after 72 hours of token validation. Protects against invalid credentials. 
                        </p>
                      </div>
                    </label>
                    <label className="flex items-start gap-space-sm p-space-sm rounded-lg border border-surface-container bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer">
                      <input name="escrow_protocol" type="radio" className="mt-1 text-primary focus:ring-primary h-4 w-4" />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-space-xs">
                          <span className="font-label-md text-label-md font-bold text-on-surface">
                            Immediate Unconditional Release
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                           Disburse Rs 259,000Net to Charlotte’s NatWest Business account immediately upon pressing 'Approve & Launch' right now. 
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low border border-surface-container mb-space-md">
                    <label className="flex items-start gap-space-sm cursor-pointer">
                      <input defaultChecked={true} id="legal_vesting" type="checkbox" className="mt-1 rounded text-primary focus:ring-primary h-4 w-4" />
                      <span className="font-body-sm text-body-sm text-on-surface">
                         I, 
                        <strong>
                          David Vance
                        </strong>
                         (Managing Director, Lumina Studio Ltd), confirm approval of the Spark Ads whitelisting token and ad parameters. Upon release, 30-day paid advertising amplification rights legally vest under 
                        <strong>
                          Schedule 2 of Pact #UK-5028
                        </strong>
                        . Validated via eIDAS Digital Signature standard under English Commercial Law. 
                      </span>
                    </label>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-space-sm">
                    <button type="button" className="w-full sm:flex-1 py-3 px-space-md rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-sm transition-all transform active:scale-[0.99]" data-go="/deals/uk-5028/launched">
                      <span className="material-symbols-outlined text-[20px]">
                        rocket_launch
                      </span>
                      <span>
                        Approve Deliverable & Launch Campaign (Rs 259,000Armed)
                      </span>
                    </button>
                    <div className="flex items-center gap-space-xs w-full sm:w-auto">
                      <button type="button" className="flex-1 sm:flex-initial py-3 px-space-sm rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md font-medium transition-colors" data-go="/deals/uk-5028/revision">
                         Request Revision 
                      </button>
                      <button type="button" className="flex-1 sm:flex-initial py-3 px-space-sm rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md font-medium transition-colors">
                         Save Draft 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-20">
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-surface-container shadow-sm">
                  <div className="flex items-center justify-between pb-space-xs border-b border-surface-container mb-space-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        account_balance
                      </span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">
                        Barclays Custody Ledger
                      </h2>
                    </div>
                    <span className="font-mono text-label-sm text-label-sm text-on-surface-variant">
                      #A-8291
                    </span>
                  </div>
                  <div className="space-y-space-xs mb-space-md">
                    <div className="flex items-center justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">
                        Bank & Account:
                      </span>
                      <span className="font-medium text-on-surface">
                        Barclays UK PLC (Segregated Trust)
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">
                        Deal Ref:
                      </span>
                      <span className="font-medium text-on-surface">
                        UK-5028-LUM-CC
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">
                        Regulatory Status:
                      </span>
                      <span className="text-secondary font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                         FCA Safeguarded 
                      </span>
                    </div>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low border border-surface-container space-y-2 mb-space-md">
                    <div className="flex items-center justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">
                        Milestone 1: 60s Tech Review
                      </span>
                      <span className="text-secondary font-semibold flex items-center gap-1">
                        <span>
                          Rs 518,000
                        </span>
                        <span className="material-symbols-outlined text-[14px]">
                          check_circle
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-body-sm text-body-sm pt-1 border-t border-surface-container">
                      <span className="font-semibold text-primary">
                        Milestone 2: 30-Day Spark Boost
                      </span>
                      <span className="font-bold text-primary">
                        Rs 259,000
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant pt-1">
                      <span>
                        Platform Escrow Custody Fee (Prepaid)
                      </span>
                      <span>
                        Rs 46,620
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-label-md text-label-md font-bold text-on-surface pt-2 border-t border-surface-container">
                      <span>
                        Total Contract Value
                      </span>
                      <span>
                        Rs 823,620GBP
                      </span>
                    </div>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container border border-surface-container text-center">
                    <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Active Ring-Fenced Escrow
                    </span>
                    <span className="block font-headline-lg text-headline-lg text-on-surface font-bold">
                      Rs 259,000
                    </span>
                    <span className="block font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                       Payee: Charlotte Emily Clark • NatWest Business ••••4910 
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-surface-container shadow-sm">
                  <div className="flex items-center gap-1.5 pb-space-xs border-b border-surface-container mb-space-sm">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      policy
                    </span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Legal Covenant & Rights
                    </h2>
                  </div>
                  <div className="space-y-space-sm font-body-sm text-body-sm">
                    <div className="flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">
                        schedule
                      </span>
                      <div>
                        <strong className="text-on-surface font-semibold">
                          Strict 30-Day Duration:
                        </strong>
                        <p className="text-on-surface-variant">
                          Amplification valid from launch until 25 Dec 2026, 23:59 GMT. TikTok token automatically unbinds upon completion.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">
                        ads_click
                      </span>
                      <div>
                        <strong className="text-on-surface font-semibold">
                          Permitted Placements:
                        </strong>
                        <p className="text-on-surface-variant">
                          In-Feed Sponsored & Dark Post targeting UK, IE, US developer demographics only. No broadcast usage.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">
                        balance
                      </span>
                      <div>
                        <strong className="text-on-surface font-semibold">
                          Arbitration Jurisdiction:
                        </strong>
                        <p className="text-on-surface-variant">
                          Model 2.4 English Commercial Court. Impartial adjudicator: Harrison & Croft Legal LLP (Rs 27,750capped mediation).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-surface-container shadow-sm">
                  <div className="flex items-center justify-between pb-space-xs border-b border-surface-container mb-space-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                        history
                      </span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">
                        Escrow Event Audit
                      </h2>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  </div>
                  <ol className="relative border-l border-surface-container ml-2.5 space-y-space-sm text-body-sm">
                    <li className="ml-4">
                      <div className="absolute -left-1.5 mt-1.5 w-3 h-3 rounded-full bg-secondary"></div>
                      <time className="font-label-sm text-label-sm text-on-surface-variant">
                        25 Nov, 16:05 GMT
                      </time>
                      <h3 className="font-label-md text-label-md font-semibold text-on-surface">
                        Automated 4-Point Compliance Passed
                      </h3>
                      <p className="text-on-surface-variant text-[12px]">
                        Music, targeting, duration, and legal clearance verified via TikTok API.
                      </p>
                    </li>
                    <li className="ml-4">
                      <div className="absolute -left-1.5 mt-1.5 w-3 h-3 rounded-full bg-secondary"></div>
                      <time className="font-label-sm text-label-sm text-on-surface-variant">
                        25 Nov, 16:02 GMT
                      </time>
                      <h3 className="font-label-md text-label-md font-semibold text-on-surface">
                        Spark Ads Token Submitted
                      </h3>
                      <p className="text-on-surface-variant text-[12px]">
                        Creator Charlotte Clark registered token for VS Code video.
                      </p>
                    </li>
                    <li className="ml-4">
                      <div className="absolute -left-1.5 mt-1.5 w-3 h-3 rounded-full bg-primary"></div>
                      <time className="font-label-sm text-label-sm text-on-surface-variant">
                        25 Nov, 15:45 GMT
                      </time>
                      <h3 className="font-label-md text-label-md font-semibold text-on-surface">
                        TikTok OAuth2 Handshake Active
                      </h3>
                      <p className="text-on-surface-variant text-[12px]">
                        Brand account ADV-LUMINA-8821 authenticated.
                      </p>
                    </li>
                    <li className="ml-4">
                      <div className="absolute -left-1.5 mt-1.5 w-3 h-3 rounded-full bg-surface-container-high"></div>
                      <time className="font-label-sm text-label-sm text-on-surface-variant">
                        25 Nov, 14:20 GMT
                      </time>
                      <h3 className="font-label-md text-label-md font-semibold text-on-surface">
                        Milestone 2 Escrow Locked
                      </h3>
                      <p className="text-on-surface-variant text-[12px]">
                        Rs 259,000ring-fenced in Barclays vault.
                      </p>
                    </li>
                    <li className="ml-4">
                      <div className="absolute -left-1.5 mt-1.5 w-3 h-3 rounded-full bg-surface-container-high"></div>
                      <time className="font-label-sm text-label-sm text-on-surface-variant">
                        25 Nov, 14:18 GMT
                      </time>
                      <h3 className="font-label-md text-label-md font-semibold text-on-surface">
                        Milestone 1 Settled (Rs 518,000)
                      </h3>
                      <p className="text-on-surface-variant text-[12px]">
                        Disbursed to Charlotte Clark via UK Faster Payments.
                      </p>
                    </li>
                  </ol>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low border border-surface-container flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      support_agent
                    </span>
                    <span>
                      Escrow Custodian Desk: Harrison & Croft
                    </span>
                  </div>
                  <a className="text-primary hover:underline font-semibold" href="#" onClick={(event) => event.preventDefault()}>
                    Help Desk ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_6px_rgba(0,0,0,0.02)] py-space-xl mt-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin flex flex-col md:flex-row items-center justify-between gap-space-md text-center md:text-left">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center justify-center md:justify-start gap-space-xs font-label-md text-label-md text-on-surface">
              <span className="material-symbols-outlined text-secondary text-[16px]">
                shield
              </span>
              <span>
                FCA-Regulated Escrow Safeguarding
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Client funds are held in segregated trust accounts under UK Commercial Law jurisdiction. Not protected by FSCS; protected under Payment Services Regulations 2017.
            </p>
          </div>
          <div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
            <a className="hover:text-primary transition-colors" data-go="/legal" href="/legal">
              Safeguarding Policy
            </a>
            <span className="text-outline-variant">
              •
            </span>
            <a className="hover:text-primary transition-colors" data-go="/legal" href="/legal">
              Commercial Terms
            </a>
            <span className="text-outline-variant">
              •
            </span>
            <a className="hover:text-primary transition-colors" data-go="/legal" href="/legal">
              Arbitration Charter
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
