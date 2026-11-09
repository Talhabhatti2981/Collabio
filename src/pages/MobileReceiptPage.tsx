/** Collabio — Mobile Creator Payout Receipt & Remittance PDF Modal */
export default function MobileReceiptPage() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
        <div className="h-16 px-margin-mobile flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs min-w-0">
            <button aria-label="Go back" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors rounded-full">
              <span className="material-symbols-outlined text-[20px]">
                arrow_back
              </span>
            </button>
            <h1 className="font-headline-sm text-headline-sm text-on-surface truncate">
              Contract Details
            </h1>
          </div>
          <div className="flex items-center gap-space-xs shrink-0">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col relative w-full pt-16 bg-surface flex-1 min-h-screen">
        <div className="flex flex-col w-full relative pb-safe">
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-primary-fixed/30 blur-3xl"></div>
            <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-secondary-fixed/25 blur-3xl"></div>
          </div>
          <div className="relative z-10 w-full max-w-[420px] mx-auto px-margin-mobile pt-space-sm pb-space-xl flex flex-col gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/60 text-on-secondary-container font-label-sm text-label-sm tracking-wide uppercase">
                    <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[14px]">
                      verified
                    </span>
                     Settled &amp; Immutable 
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                     Deal #UK-5028 
                  </span>
                </div>
                <button aria-label="Close Remittance Modal" className="w-9 h-9 rounded-full bg-surface-container-highest/70 active:scale-95 text-on-surface flex items-center justify-center transition-transform shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    close
                  </span>
                </button>
              </div>
              <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap">
                  <span className="material-symbols-outlined text-[13px] text-primary">
                    account_balance
                  </span>
                   HMRC 2026/27 Compliant 
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap">
                  <span className="material-symbols-outlined text-[13px] text-secondary">
                    verified_user
                  </span>
                   eIDAS Level 3 Digital Seal 
                </span>
              </div>
              <div className="mt-1">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface leading-tight">
                   Official Payout Remittance Advice 
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                   Remittance Identifier: 
                  <span className="font-medium text-on-surface">
                    #REM-UK5028-CEC
                  </span>
                   • Model 2.4 Custody Resolution 
                </p>
              </div>
            </div>
            <div className="relative w-full rounded-xl bg-surface-container-lowest p-space-md shadow-sm overflow-hidden flex flex-col gap-space-md">
              <div className="absolute -right-5 top-3 select-none pointer-events-none rotate-12 opacity-90">
                <div className="px-3 py-1 rounded-lg bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm tracking-widest font-bold uppercase shadow-sm">
                   PAID IN FULL ✓ 
                </div>
              </div>
              <div className="flex flex-col pr-16">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                   Total Net Disbursed 
                </span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface font-bold tracking-tight">
                     Rs 777,000 
                  </span>
                  <span className="font-label-lg text-label-lg text-secondary font-semibold">
                    PKR
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 mt-1 text-secondary font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px]">
                    electric_bolt
                  </span>
                  <span>
                    Faster Payments • 100% Retained (0% Creator Fee)
                  </span>
                </div>
              </div>
              <div className="rounded-lg bg-surface-container-low p-3 flex flex-col gap-space-sm">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-primary text-[15px]">
                      assured_workload
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                      Custodial Disburser
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface font-semibold truncate">
                      Collabio Escrow Technologies Ltd
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                       FCA FRN 841920 • on behalf of Lumina Studio Ltd (GB 492 8104 22) 
                    </span>
                  </div>
                </div>
                <div className="w-full h-px bg-surface-container-highest"></div>
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-secondary-container/70 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-secondary text-[15px]">
                      person
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                      Designated Payee
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface font-semibold">
                      Charlotte Emily Clark
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                       t/a Dev Advocate • NatWest Business Banking • Sort: 60-08-01 • Acct: ••••4910 
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center justify-between px-1">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Milestone Breakdown
                </h3>
                <span className="font-label-sm text-label-sm text-secondary font-medium">
                  2 of 2 Disbursed
                </span>
              </div>
              <div className="w-full rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        play_circle
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                        Milestone 1: Dedicated Video
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        60s Integration on YouTube
                      </span>
                    </div>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface whitespace-nowrap font-semibold">
                    Rs 518,000
                  </span>
                </div>
                <div className="rounded-lg bg-surface-container-low px-2.5 py-2 flex flex-col gap-1 font-body-sm text-body-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">
                      FPS Trace Ref:
                    </span>
                    <span className="font-mono text-on-surface font-medium text-[12px]">
                      FPS-20261125-GB89-84920194
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">
                      Settled Timestamp:
                    </span>
                    <span className="text-on-surface font-medium text-[12px]">
                      28 Nov 2026, 14:18 GMT
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-secondary font-medium">
                    <span className="flex items-center gap-1 text-[12px]">
                      <span className="material-symbols-outlined text-[14px]">
                        done_all
                      </span>
                       Settlement Status 
                    </span>
                    <span className="text-[12px]">
                      Paid &amp; Cleared ✓
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        campaign
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                        Milestone 2: TikTok Spark Ads
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        30-Day Paid Boosting Authorization
                      </span>
                    </div>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface whitespace-nowrap font-semibold">
                    Rs 259,000
                  </span>
                </div>
                <div className="rounded-lg bg-surface-container-low px-2.5 py-2 flex flex-col gap-1 font-body-sm text-body-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">
                      FPS Trace Ref:
                    </span>
                    <span className="font-mono text-on-surface font-medium text-[12px]">
                      FPS-20261126-GB89-91823011
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">
                      Settled Timestamp:
                    </span>
                    <span className="text-on-surface font-medium text-[12px]">
                      12 Dec 2026, 16:15 GMT
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-secondary font-medium">
                    <span className="flex items-center gap-1 text-[12px]">
                      <span className="material-symbols-outlined text-[14px]">
                        done_all
                      </span>
                       Settlement Status 
                    </span>
                    <span className="text-[12px]">
                      Paid &amp; Cleared ✓
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-surface-container p-3.5 flex flex-col gap-2">
                <div className="flex items-center justify-between text-body-sm">
                  <span className="text-on-surface-variant flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      check_circle
                    </span>
                     Collabio Platform Creator Fee (0% Guarantee)
                  </span>
                  <span className="font-semibold text-secondary">
                    Rs 0
                  </span>
                </div>
                <div className="flex items-start justify-between gap-3 text-body-sm pt-1.5 border-t border-surface-container-highest">
                  <div className="flex flex-col">
                    <span className="font-medium text-on-surface">
                      VAT Status &amp; Accounting Treatment
                    </span>
                    <span className="text-on-surface-variant text-[12px] leading-relaxed">
                       UK Sole Trader Exemption (&lt;Rs 33,300,000 threshold, Section 55A VATA 1994). Brand-absorbed escrow fees. 
                    </span>
                  </div>
                  <span className="font-mono text-[12px] text-on-surface font-medium whitespace-nowrap">
                    Rs 0VAT
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-surface uppercase tracking-wide flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    enhanced_encryption
                  </span>
                   Cryptographic Ledger Audit Trail 
                </span>
                <button id="copyHashBtn" className="px-2 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-container-highest transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">
                    content_copy
                  </span>
                  <span id="copyHashText">
                    Copy Hash
                  </span>
                </button>
              </div>
              <div className="rounded-lg bg-surface-container-low p-2.5 font-mono text-[11px] text-on-surface break-all leading-relaxed select-all">
                 SHA256: 
                <span id="hashString" className="text-primary font-semibold">
                  e7f2910c89a01fd4591b32c867fbd3004b12
                </span>
              </div>
              <div className="flex flex-col gap-1 text-[12px] text-on-surface-variant leading-relaxed">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-secondary">
                    shield
                  </span>
                  <span>
                    Custody: Barclays Bank UK PLC Client Trust Vault #A-8291-UKM2
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-on-surface-variant">
                    history_edu
                  </span>
                  <span>
                    HMRC 6-year tamper-evident digital seal verified under PSR 2017.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <button className="w-full h-12 rounded-lg bg-primary text-on-primary font-headline-sm text-headline-sm flex items-center justify-center gap-2 shadow-md active:scale-[0.99] transition-transform">
                <span className="material-symbols-outlined text-[20px]">
                  download
                </span>
                <span>
                  Download Official PDF/A-3 (192 KB)
                </span>
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button className="h-10 rounded-lg bg-surface-container-lowest text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-1.5 shadow-sm active:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    sync
                  </span>
                  <span>
                    To FreeAgent
                  </span>
                </button>
                <button className="h-10 rounded-lg bg-surface-container-lowest text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-1.5 shadow-sm active:bg-surface-container-low transition-colors" data-go="/settings/sync">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    cloud_upload
                  </span>
                  <span>
                    To QuickBooks
                  </span>
                </button>
              </div>
              <button className="w-full py-2.5 text-center font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors">
                 Dismiss &amp; Return to Deal Summary 
              </button>
            </div>
          </div>
          <div id="toastNotification" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none opacity-0 transition-opacity duration-200 px-4 py-2.5 rounded-full bg-inverse-surface text-inverse-on-surface shadow-xl flex items-center gap-2 font-label-md text-label-md">
            <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
              check_circle
            </span>
            <span id="toastMsg">
              Cryptographic Hash Copied
            </span>
          </div>
        </div>
      </main>
    </>
  )
}
