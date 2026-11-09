/** Collabio — Brand Final Approval & Payout Release Modal */
export default function PayoutReleasePage() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-7xl mx-auto px-margin flex items-center justify-between gap-gutter">
          <div className="flex items-center gap-gutter">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-md text-headline-md text-primary tracking-tight font-bold">
                Collabio
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider bg-surface-container px-space-xs py-0.5 rounded">
                UK Escrow
              </span>
            </div>
            <nav data-active-classes="text-primary font-bold" className="hidden lg:flex items-center gap-space-lg">
              <a aria-current="page" className="transition-colors flex items-center gap-space-xs text-primary font-bold" data-go="/deals" href="/deals">
                Deals 
                <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded-full bg-surface-container-high text-on-surface">
                  3
                </span>
              </a>
              <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-go="/invitations/uk-5028" href="/invitations/uk-5028">
                Invitations
              </a>
              <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-go="/profile" href="/profile">
                Profile
              </a>
              <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-go="/settings" href="/settings">
                Settings
              </a>
              <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-go="/help" href="/help">
                Help & Legal
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-gutter">
            <div className="hidden sm:flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container-low">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
              <div className="flex flex-col text-left">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  In Escrow
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold">
                  Rs 4,724,160
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-md">
              <div className="hidden md:flex flex-col text-right">
                <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                  David Vance
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Lumina Studio Ltd
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
        <div className="flex flex-col w-full relative">
          <div className="w-full max-w-7xl mx-auto px-margin py-space-lg select-none opacity-40 blur-[3px] pointer-events-none transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-sm text-on-surface-variant font-label-md text-label-md">
                  <span>
                    Deals
                  </span>
                  <span className="material-symbols-outlined text-[14px]">
                    chevron_right
                  </span>
                  <span>
                    YouTube Integrations
                  </span>
                  <span className="material-symbols-outlined text-[14px]">
                    chevron_right
                  </span>
                  <span className="text-on-surface font-semibold">
                    Deal #UK-5028
                  </span>
                </div>
                <div className="flex items-center gap-space-md mt-space-xs">
                  <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                    Q4 DevTools Campaign: YouTube Integration & Spark Ads
                  </h1>
                  <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-secondary-fixed/50 text-secondary font-label-sm text-label-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
                     Deliverable v2 Under Review 
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-md">
                <div className="bg-surface-container px-space-md py-space-sm rounded-xl flex items-center gap-space-md shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[28px]">
                    shield_person
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Barclays Escrow Custody
                    </span>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      Rs 823,620Total Held
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-surface-container-lowest p-space-lg rounded-xl mb-space-lg shadow-sm">
              <div className="grid grid-cols-5 gap-space-md items-center">
                <div className="flex items-center gap-space-sm">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-on-secondary text-[12px] font-bold">
                    ✓
                  </div>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Draft Agreement
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-on-secondary text-[12px] font-bold">
                    ✓
                  </div>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Bilateral Signed
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-on-secondary text-[12px] font-bold">
                    ✓
                  </div>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Escrow Funded
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[12px] font-bold ring-4 ring-primary-container/20">
                    4
                  </div>
                  <span className="font-label-md text-label-md text-primary font-bold">
                    Milestone 1 Review
                  </span>
                </div>
                <div className="flex items-center gap-space-sm opacity-40">
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center text-[12px]">
                    5
                  </div>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Payout Complete
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-gutter">
              <div className="col-span-8 bg-surface-container-lowest p-space-xl rounded-xl shadow-sm min-h-[440px]">
                <div className="h-8 bg-surface-container-high rounded w-1/3 mb-4"></div>
                <div className="h-64 bg-surface-container-low rounded-xl mb-4"></div>
                <div className="h-4 bg-surface-container rounded w-full mb-2"></div>
                <div className="h-4 bg-surface-container rounded w-3/4"></div>
              </div>
              <div className="col-span-4 flex flex-col gap-space-md">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm min-h-[200px]">
                  <div className="h-6 bg-surface-container-high rounded w-1/2 mb-3"></div>
                  <div className="h-4 bg-surface-container rounded w-full mb-2"></div>
                  <div className="h-4 bg-surface-container rounded w-2/3"></div>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm min-h-[220px]">
                  <div className="h-6 bg-surface-container-high rounded w-2/3 mb-3"></div>
                  <div className="h-4 bg-surface-container rounded w-full mb-2"></div>
                  <div className="h-4 bg-surface-container rounded w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="collabioApprovalModalBackdrop" className="fixed inset-0 z-50 bg-inverse-surface/45 backdrop-blur-md flex items-center justify-center p-space-md sm:p-space-lg overflow-y-auto">
            <div className="relative w-full max-w-[860px] bg-surface-container-lowest rounded-2xl shadow-[0_20px_35px_-5px_rgba(17,24,39,0.12),0_10px_14px_-6px_rgba(17,24,39,0.06)] overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
              <div className="bg-surface-container-low px-space-xl py-space-md flex flex-wrap items-center justify-between gap-space-sm">
                <div className="flex flex-wrap items-center gap-space-xs sm:gap-space-sm text-label-sm font-label-sm">
                  <span className="bg-surface-container text-on-surface-variant font-semibold px-space-xs py-0.5 rounded tracking-wider uppercase">
                    DEAL #UK-5028
                  </span>
                  <span className="text-outline">
                    •
                  </span>
                  <span className="text-on-surface font-medium">
                    MILESTONE 1 OF 2: 60s–90s DEDICATED YOUTUBE INTEGRATION
                  </span>
                  <span className="text-outline">
                    •
                  </span>
                  <span className="inline-flex items-center gap-1 text-secondary bg-secondary-fixed/40 px-2 py-0.5 rounded font-bold uppercase tracking-wide">
                    <span className="material-symbols-outlined text-[13px] font-bold">
                      verified
                    </span>
                     Round 1 Revisions Satisfied & Verified 
                  </span>
                </div>
                <button aria-label="Close dialog" type="button" className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors focus:outline-none">
                  <span className="material-symbols-outlined text-[20px]">
                    close
                  </span>
                </button>
              </div>
              <div className="px-space-xl pt-space-lg pb-space-md">
                <div className="flex items-start justify-between gap-space-md">
                  <div className="flex flex-col gap-1 max-w-2xl">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                      Approve Deliverable & Authorize Escrow Release
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                       Confirm acceptance of Charlotte Emily Clark’s revised deliverable (v2). Approving formally concludes Milestone 1 and initiates settlement of 
                      <span className="font-semibold text-on-surface">
                        Rs 518,000
                      </span>
                       from Barclays Client Custody. 
                    </p>
                  </div>
                  <div className="hidden sm:flex flex-col items-end text-right bg-surface-container-low px-space-md py-space-xs rounded-xl">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Milestone Payout
                    </span>
                    <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
                      Rs 518,000
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary font-medium">
                      Ring-Fenced PKR
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-space-xl py-space-xs space-y-space-lg max-h-[calc(86vh-200px)] overflow-y-auto">
                <div className="bg-surface-container-low rounded-xl p-space-md">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm mb-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        task_alt
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Automated Redline Compliance Audit
                      </span>
                      <span className="font-label-sm text-label-sm bg-secondary-fixed/50 text-secondary font-bold px-2 py-0.5 rounded-full">
                        4 of 4 Verified
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
                      <span className="material-symbols-outlined text-[16px]">
                        schedule
                      </span>
                      <span>
                        Audited 24 Nov 2026, 14:18 GMT
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md mb-space-sm shadow-sm">
                    <div className="flex items-center gap-space-md">
                      <div className="relative w-28 h-16 rounded-md overflow-hidden bg-surface-container-highest shrink-0 shadow-inner">
                        <img data-alt="High-resolution film still showing YouTube video editor timeline showing rectified tech sponsor integration segment with clean white brand badge overlay and clear audio waveform for Lumina Studio UK" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZkCXhcSwoFn50KTOZA0pAwJtf7Nxgbsjg5rsJSV7ENFAKF2uk-HRKbX1E2oXjzKGXrxNxnRo9Sg7mE2rygubZF61G9tUMG7rjPvSLPNxGd2yIdNWcceuKNv7EfBlOrtYWpuHycXpmhJjmzjxfAZWbmwEzBYJVLvIbihFBOw4DeNqXr0ZGkrcup0e-subZwSYZrZHSa4YymMfegCpDlQwwqMLsfAooZXkFmyrI-NnPwCid4w7uDmeLNQ" className="w-full h-full object-cover" />
                        <span className="absolute bottom-1 right-1 bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-[10px] px-1 py-0.2 rounded font-mono">
                          v2 Cut
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-space-xs">
                          <span className="font-label-lg text-label-lg font-semibold text-on-surface">
                            Top 5 Developer Tools for 2027 (v2 Rectified Cut)
                          </span>
                          <span className="font-label-sm text-label-sm bg-surface-container px-1.5 py-0.5 rounded text-on-surface-variant">
                            1080p60
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant font-mono">
                          YT Unlisted ID: xk98df2_w1q_v2_edit • Creator: Charlotte Emily Clark
                        </span>
                      </div>
                    </div>
                    <a className="inline-flex items-center gap-1 text-primary hover:text-primary-container font-label-md text-label-md font-semibold transition-colors shrink-0" href="#" onClick={(event) => event.preventDefault()}>
                      <span className="material-symbols-outlined text-[16px]">
                        open_in_new
                      </span>
                       Inspect v2 Cut 
                    </a>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xs pt-1">
                    <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-start gap-space-sm shadow-sm">
                      <div className="w-5 h-5 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[15px] font-bold">
                          check
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">
                            03:22 Visual Logo Badge
                          </span>
                          <span className="font-label-sm text-[10px] bg-secondary-fixed/40 text-secondary px-1.5 py-0.2 rounded font-bold uppercase">
                            Pass
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          High-contrast Schedule 1 white badge overlay applied (WCAG AAA 8.9:1 verified).
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-start gap-space-sm shadow-sm">
                      <div className="w-5 h-5 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[15px] font-bold">
                          check
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">
                            03:58 Verbal Code Callout
                          </span>
                          <span className="font-label-sm text-[10px] bg-secondary-fixed/40 text-secondary px-1.5 py-0.2 rounded font-bold uppercase">
                            Pass
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Phonetic match 'CHARLOTTE20' verbal discount token + synced lower-third card.
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-start gap-space-sm shadow-sm">
                      <div className="w-5 h-5 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[15px] font-bold">
                          check
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">
                            03:14–04:34 Sponsor Duration
                          </span>
                          <span className="font-label-sm text-[10px] bg-secondary-fixed/40 text-secondary px-1.5 py-0.2 rounded font-bold uppercase">
                            Pass
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          80s continuous dedicated segment duration (Contract target: ≥60s & ≤90s).
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-start gap-space-sm shadow-sm">
                      <div className="w-5 h-5 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[15px] font-bold">
                          check
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">
                            Metadata & ASA Compliance
                          </span>
                          <span className="font-label-sm text-[10px] bg-secondary-fixed/40 text-secondary px-1.5 py-0.2 rounded font-bold uppercase">
                            Pass
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Pinned comment UTM link + CAP Code compliant '#ad' disclosure validated.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Select Settlement & Release Protocol
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Bilateral Escrow Rule E-14
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <label id="railA_label" className="relative cursor-pointer p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between ring-2 ring-primary bg-primary-fixed/10">
                      <div className="flex items-start justify-between gap-space-sm mb-space-sm">
                        <div className="flex items-start gap-space-sm">
                          <input defaultChecked={true} name="settlement_rail" type="radio" defaultValue="autonomous" className="mt-1 w-4 h-4 text-primary focus:ring-primary" />
                          <div className="flex flex-col">
                            <span className="font-label-lg text-label-lg font-bold text-on-surface">
                              Autonomous YouTube API Trigger
                            </span>
                            <span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider mt-0.5">
                              Recommended Protocol
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-primary text-[24px]">
                          smart_toy
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant pl-7 mb-space-sm">
                         Collabio arms a YouTube Data API v3 webhook. The instant Charlotte switches the video from
                        <span className="font-medium text-on-surface">
                          Unlisted to Public
                        </span>
                         (scheduled 25 Nov, 17:00 GMT), Rs 518,000dispatches via Faster Payments in 
                        &lt;
                        60s. 
                      </p>
                      <div className="ml-7 pt-space-xs flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-[16px]">
                          bolt
                        </span>
                        <span>
                          Zero brand intervention required at go-live
                        </span>
                      </div>
                    </label>
                    <label id="railB_label" className="relative cursor-pointer p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-space-sm mb-space-sm">
                        <div className="flex items-start gap-space-sm">
                          <input name="settlement_rail" type="radio" defaultValue="instant" className="mt-1 w-4 h-4 text-primary focus:ring-primary" />
                          <div className="flex flex-col">
                            <span className="font-label-lg text-label-lg font-bold text-on-surface">
                              Instant Unconditional Release Now
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium uppercase tracking-wider mt-0.5">
                              Manual Direct Settlement
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                          payments
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant pl-7 mb-space-sm">
                         Disburse Rs 518,000Net immediately to Charlotte’s NatWest Business Account (••••4910) via UK Faster Payments right now prior to public broadcast. 
                      </p>
                      <div className="ml-7 pt-space-xs flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px]">
                          verified_user
                        </span>
                        <span>
                          Creator receives instantaneous bank transfer notification
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-xl p-space-md">
                  <div className="flex items-center justify-between mb-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        account_balance
                      </span>
                      <span className="font-label-lg text-label-lg font-bold text-on-surface">
                        Custody Breakdown & Banking Ledger
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                      Vault #A-8291 • Ring-fenced Trust
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm text-left">
                    <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Milestone 1 Allocation
                      </span>
                      <div className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1">
                        Rs 518,000
                      </div>
                      <span className="font-label-sm text-[11px] text-secondary">
                        0% Creator Deduction
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Collabio Custody Fee (6%)
                      </span>
                      <div className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1">
                        Rs 0 
                        <span className="font-label-sm text-on-surface-variant font-normal">
                          due now
                        </span>
                      </div>
                      <span className="font-label-sm text-[11px] text-on-surface-variant">
                        Pre-settled at deal formation
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Remaining Escrow (M2)
                      </span>
                      <div className="font-headline-sm text-headline-sm font-bold text-primary mt-1">
                        Rs 305,620
                      </div>
                      <span className="font-label-sm text-[11px] text-on-surface-variant">
                        Spark Ads Whitelisting (02 Dec)
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-sm pt-space-xs flex flex-wrap items-center justify-between text-label-sm font-label-sm text-on-surface-variant gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px] text-secondary">
                        shield
                      </span>
                      <span>
                        Disbursement Target: 
                        <strong>
                          Charlotte Emily Clark
                        </strong>
                         (NatWest Business ••••4910 • KYC L3 Verified)
                      </span>
                    </div>
                    <div className="text-on-surface-variant font-mono">
                      Faster Payments Clearing: Instant (
                      &lt;
                      60s)
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
                  <div className="flex items-start gap-space-sm">
                    <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">
                        gavel
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <span className="font-label-lg text-label-lg font-bold text-on-surface">
                        Legal Discharge & Perpetual Organic Rights Vesting
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                         Pursuant to English Commercial Law Framework Model 2.4 and Collabio Terms: approval irrevocably vests worldwide, non-exclusive organic digital distribution rights for Deliverable v2 in Lumina Studio Ltd. Milestone 1 review rights and anti-ghosting escrow timers are formally discharged. Harrison & Croft LLP arbitration covenants transition to Milestone 2.
                      </p>
                      <label className="mt-space-sm flex items-start gap-space-sm cursor-pointer p-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
                        <input id="legalAcceptanceCheck" type="checkbox" className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary" />
                        <span className="font-label-md text-label-md text-on-surface select-none">
                           I, 
                          <strong>
                            David Vance
                          </strong>
                           (MD, Lumina Studio Ltd), confirm that Deliverable v2 satisfies all Schedule 1 specifications and authorize unconditional release of Rs 518,000from Barclays Custody. 
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-space-xl py-space-lg bg-surface-container-low flex flex-col gap-space-md">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md">
                  <button type="button" className="w-full sm:w-auto px-space-md py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-lg text-label-lg font-semibold transition-colors">
                     Back to Inspection 
                  </button>
                  <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full sm:w-auto">
                    <button id="secondaryManualBtn" type="button" className="w-full sm:w-auto px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-high font-label-lg text-label-lg font-semibold transition-all shadow-sm" data-go="/deals/uk-5028/settled">
                       Release Rs 518,000Instantly Now 
                    </button>
                    <button id="primaryActionBtn" type="button" className="w-full sm:w-auto px-space-lg py-2.5 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold shadow-md hover:bg-primary transition-all disabled:opacity-40 disabled:cursor-pointer flex items-center justify-center gap-2" data-go="/deals/uk-5028/settled">
                      <span className="material-symbols-outlined text-[18px]">
                        lock_open
                      </span>
                      <span id="primaryBtnText">
                        Approve & Arm Autonomous YouTube Release (Rs 518,000)
                      </span>
                    </button>
                  </div>
                </div>
                <div className="pt-space-xs flex flex-wrap items-center justify-center sm:justify-between text-outline text-label-sm font-label-sm gap-2">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[14px] text-secondary">
                      verified
                    </span>
                    <span>
                      FCA-Safeguarded Custody • Barclays Bank UK PLC Ring-Fenced Account
                    </span>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <span>
                      eIDAS Qualified Audit Trail
                    </span>
                    <span>
                      •
                    </span>
                    <span>
                      256-Bit SHA Bilateral Sign-Off
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_6px_rgba(0,0,0,0.02)] py-space-xl">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg mb-space-lg">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Collabio Financial Protection
                </span>
                <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-space-xs py-0.5 rounded font-semibold">
                  FCA Safeguarded
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl">
                Funds held securely in segregated client accounts under UK Electronic Money Regulations. Subject to independent dispute arbitration under UK English Commercial Jurisdiction.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-lg">
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-go="/legal" href="/legal">
                Escrow Agreement
              </a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-go="/legal" href="/legal">
                Dispute Rules
              </a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-go="/legal" href="/legal">
                Regulatory Credentials
              </a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-go="/legal" href="/legal">
                Privacy & Jurisdiction
              </a>
            </div>
          </div>
          <div className="pt-space-md border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant">
            <span className="font-body-sm text-body-sm">
              © 2024 Collabio Ltd. Registered in England & Wales. All rights reserved.
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
              UK English Commercial Jurisdiction
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
