/** Pactly — Creator Payout Receipt & Remittance PDF Modal */
export default function PayoutReceiptPage() {
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
              <a className="text-on-surface-variant hover:text-on-surface font-label-md px-space-sm py-1.5 transition-colors" data-go="/deals" href="/deals">
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
                Help &amp; Legal
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
        <div className="flex flex-col w-full relative">
          <div aria-hidden="true" className="w-full max-w-[1200px] mx-auto px-margin py-space-lg filter blur-[5px] opacity-45 pointer-events-none select-none">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-sm">
                  <span className="font-label-sm uppercase tracking-wider text-outline">
                    Archived Partnerships • Q4 2026
                  </span>
                  <span className="px-space-xs py-0.5 rounded-full bg-secondary-container/30 text-secondary font-label-sm font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                     100% Settled 
                  </span>
                </div>
                <h1 className="font-headline-xl text-on-surface">
                  Deal #UK-5028: Lumina Studio Ltd
                </h1>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-md text-on-surface">
                  Status: Vault Archived
                </span>
                <span className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md">
                  View Ledger
                </span>
              </div>
            </div>
            <div className="w-full bg-surface-container-lowest p-space-lg rounded-xl shadow-sm mb-space-lg flex items-center justify-between">
              <div className="flex items-center gap-space-md">
                <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm">
                  ✓
                </div>
                <span className="font-label-md text-on-surface">
                  Mutual Sign-off
                </span>
              </div>
              <div className="h-0.5 flex-1 mx-space-sm bg-secondary"></div>
              <div className="flex items-center gap-space-md">
                <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm">
                  ✓
                </div>
                <span className="font-label-md text-on-surface">
                  Escrow Locked
                </span>
              </div>
              <div className="h-0.5 flex-1 mx-space-sm bg-secondary"></div>
              <div className="flex items-center gap-space-md">
                <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm">
                  ✓
                </div>
                <span className="font-label-md text-on-surface">
                  Verified Disbursal
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs">
                <span className="font-label-sm text-outline">
                  Creator Earnings
                </span>
                <span className="font-headline-lg text-primary">
                  Rs 777,000
                </span>
                <span className="font-body-sm text-secondary">
                  Faster Payments Confirmed
                </span>
              </div>
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs">
                <span className="font-label-sm text-outline">
                  Brand Entity
                </span>
                <span className="font-headline-sm text-on-surface">
                  Lumina Studio Ltd
                </span>
                <span className="font-body-sm text-on-surface-variant">
                  GB 492 8104 22 • London
                </span>
              </div>
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs">
                <span className="font-label-sm text-outline">
                  Custody Verification
                </span>
                <span className="font-headline-sm text-on-surface">
                  Barclays Bank UK PLC Rail
                </span>
                <span className="font-body-sm text-on-surface-variant">
                  Ring-fenced Account Tier 1
                </span>
              </div>
            </div>
          </div>
          <div id="remittanceModalBackdrop" className="fixed inset-0 z-50 bg-[#111827]/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-space-md overflow-y-auto">
            <div className="relative w-full max-w-[880px] my-auto bg-surface-container-lowest rounded-xl shadow-[0_25px_50px_-12px_rgba(20,27,43,0.35)] flex flex-col overflow-hidden max-h-[942px]">
              <div className="px-space-lg py-space-md bg-surface-container-low flex items-start justify-between gap-space-md">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-space-xs">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm font-semibold tracking-wide">
                      <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[13px]">
                        check_circle
                      </span>
                       SETTLED &amp; IMMUTABLE 
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm">
                       HMRC 2026/27 COMPLIANT 
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm">
                      <span className="material-symbols-outlined text-[12px]">
                        verified
                      </span>
                       eIDAS LEVEL 3 DIGITAL SEAL 
                    </span>
                  </div>
                  <div className="flex items-center gap-space-xs mt-1">
                    <span className="font-headline-sm text-on-surface tracking-tight">
                      Official Payout Remittance Advice &amp; Faster Payments Receipt
                    </span>
                  </div>
                  <span className="font-label-sm text-outline">
                    Remittance Identifier: 
                    <span className="font-mono text-on-surface font-semibold">
                      #REM-UK5028-CEC
                    </span>
                     • Model 2.4 Custody Resolution
                  </span>
                </div>
                <button id="modalDismissBtn" title="Close document viewer" className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[18px]">
                    close
                  </span>
                </button>
              </div>
              <div className="overflow-y-auto px-space-md sm:px-space-xl py-space-lg flex flex-col gap-space-lg bg-background">
                <div className="relative bg-surface-container-lowest p- space-md sm:p-space-lg rounded-xl shadow-sm overflow-hidden">
                  <div className="absolute right-4 top-4 select-none pointer-events-none opacity-5 transform rotate-[-12deg] z-0">
                    <span className="text-[96px] font-black tracking-widest text-secondary font-mono leading-none">
                      PAID IN FULL
                    </span>
                  </div>
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-secondary/5 blur-2xl pointer-events-none"></div>
                  <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-space-md pb-space-lg bg-surface-container-low/40 p-space-md rounded-lg">
                    <div className="flex flex-col gap-1 max-w-[340px]">
                      <span className="font-label-sm uppercase tracking-wider text-outline flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-primary">
                          account_balance
                        </span>
                         Custodial Payer &amp; Escrow Issuer 
                      </span>
                      <span className="font-headline-sm text-on-surface leading-snug">
                        Pactly Escrow Technologies Ltd
                      </span>
                      <p className="font-body-sm text-on-surface-variant leading-relaxed">
                         Appointed Custodian on behalf of 
                        <strong className="text-on-surface">
                          Lumina Studio Ltd
                        </strong>
                         (VAT GB 492 8104 22).
                        <br />
                         85 Great Portland St, London W1W 7LT
                        <br />
                        <span className="font-label-sm text-outline">
                          Statutory Authorisation: FCA FRN 841920
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 max-w-[340px] sm:text-right">
                      <span className="font-label-sm uppercase tracking-wider text-outline flex items-center sm:justify-end gap-1">
                        <span className="material-symbols-outlined text-[14px] text-secondary">
                          verified_user
                        </span>
                         Payee / Designated Beneficiary 
                      </span>
                      <span className="font-headline-sm text-on-surface leading-snug">
                        Charlotte Emily Clark
                      </span>
                      <p className="font-body-sm text-on-surface-variant leading-relaxed">
                         Trading as 
                        <strong className="text-on-surface">
                          Dev Advocate
                        </strong>
                        <br />
                         NatWest Business Banking • Sort Code: 
                        <span className="font-mono">
                          60-08-01
                        </span>
                        <br />
                         Account: 
                        <span className="font-mono text-on-surface">
                          ••••4910
                        </span>
                        <br />
                        <span className="inline-block mt-0.5 px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm">
                           Sole Trader • Non-VAT Registered (&lt;Rs 33,300,000 UK Threshold) 
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-space-sm py-space-md my-space-md bg-surface-container-low rounded-lg px-space-md">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-outline">
                        Deal Reference
                      </span>
                      <span className="font-label-md font-semibold text-primary">
                        #UK-5028
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-outline">
                        Contract Standard
                      </span>
                      <span className="font-label-md font-semibold text-on-surface">
                        Model 2.4 Creator
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-outline">
                        Settlement Currency
                      </span>
                      <span className="font-label-md font-semibold text-on-surface">
                        PKR (£ Sterling)
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-outline">
                        Custody Status
                      </span>
                      <span className="font-label-md font-semibold text-secondary flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                         100% Disbursed 
                      </span>
                    </div>
                  </div>
                  <div className="relative z-10 flex flex-col gap-space-sm mt-space-md">
                    <div className="flex items-center justify-between">
                      <h2 className="font-headline-sm text-on-surface">
                        Itemized Escrow Disbursement Schedule
                      </h2>
                      <span className="font-label-sm text-outline">
                        UK Faster Payments Service (FPS) Direct Rail
                      </span>
                    </div>
                    <div className="w-full overflow-x-auto rounded-lg shadow-sm">
                      <table className="w-full text-left bg-surface-container-lowest">
                        <thead>
                          <tr className="bg-surface-container text-on-surface-variant font-label-sm uppercase tracking-wider">
                            <th className="py-2.5 px-3">
                              Milestone Deliverable
                            </th>
                            <th className="py-2.5 px-3">
                              FPS Transaction Identifier
                            </th>
                            <th className="py-2.5 px-3">
                              Cleared GMT
                            </th>
                            <th className="py-2.5 px-3 text-right">
                              Net Disbursed
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-container text-body-sm">
                          <tr className="hover:bg-surface-container-low/50 transition-colors">
                            <td className="py-3.5 px-3">
                              <div className="flex flex-col">
                                <span className="font-label-md font-semibold text-on-surface">
                                  Milestone 1: 60-Sec YouTube Video Integration
                                </span>
                                <span className="font-body-sm text-on-surface-variant">
                                  Production deliverable delivered &amp; brand approved
                                </span>
                                <span className="font-label-sm text-secondary">
                                  Verified by Lumina Studio Ltd on 28 Nov 2026
                                </span>
                              </div>
                            </td>
                            <td className="py-3.5 px-3">
                              <div className="flex items-center gap-1 font-mono text-label-sm text-on-surface">
                                <span>
                                  FPS-20261125-GB89-84920194
                                </span>
                              </div>
                            </td>
                            <td className="py-3.5 px-3 text-on-surface whitespace-nowrap">
                               28 Nov 2026
                              <br />
                              <span className="font-label-sm text-outline">
                                14:18:02 GMT
                              </span>
                            </td>
                            <td className="py-3.5 px-3 text-right font-headline-sm text-on-surface font-semibold whitespace-nowrap">
                               Rs 518,000 
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low/50 transition-colors">
                            <td className="py-3.5 px-3">
                              <div className="flex flex-col">
                                <span className="font-label-md font-semibold text-on-surface">
                                  Milestone 2: 30-Day TikTok Spark Ads Boosting Authorization
                                </span>
                                <span className="font-body-sm text-on-surface-variant">
                                  Code issued &amp; 30-day rights window completed
                                </span>
                                <span className="font-label-sm text-secondary">
                                  Auto-discharged upon window expiry on 12 Dec 2026
                                </span>
                              </div>
                            </td>
                            <td className="py-3.5 px-3">
                              <div className="flex items-center gap-1 font-mono text-label-sm text-on-surface">
                                <span>
                                  FPS-20261126-GB89-91823011
                                </span>
                              </div>
                            </td>
                            <td className="py-3.5 px-3 text-on-surface whitespace-nowrap">
                               12 Dec 2026
                              <br />
                              <span className="font-label-sm text-outline">
                                16:15:47 GMT
                              </span>
                            </td>
                            <td className="py-3.5 px-3 text-right font-headline-sm text-on-surface font-semibold whitespace-nowrap">
                               Rs 259,000 
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-2 mt-2">
                      <div className="flex justify-between items-center text-body-sm">
                        <span className="text-on-surface-variant">
                          Subtotal Gross Creator Consideration:
                        </span>
                        <span className="font-label-md font-semibold text-on-surface">
                          Rs 777,000GBP
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-body-sm">
                        <span className="text-on-surface-variant flex items-center gap-1">
                           Pactly Creator Platform Fee: 
                          <span className="px-1.5 py-0.2 rounded bg-secondary-container/40 text-on-secondary-container font-label-sm font-semibold">
                            0% Zero-Fee Creator Guarantee
                          </span>
                        </span>
                        <span className="font-label-md font-semibold text-secondary">
                          Rs 0GBP
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-body-sm">
                        <span className="text-outline text-label-sm">
                          Brand Escrow Surcharge (6% Custodial Rail paid by Lumina Studio Ltd):
                        </span>
                        <span className="font-label-sm text-outline">
                          Rs 46,620(Settled Separately)
                        </span>
                      </div>
                      <div className="pt-2 mt-1 bg-surface-variant/40 flex justify-between items-center px-space-sm py-2 rounded">
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-on-surface font-semibold">
                            Total Net Consideration Received
                          </span>
                          <span className="font-label-sm text-secondary">
                            100% Paid directly to NatWest Business ••••4910
                          </span>
                        </div>
                        <span className="font-headline-lg text-primary font-bold">
                          Rs 777,000GBP
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 mt-space-lg p-space-md bg-surface-container-low/60 rounded-xl flex flex-col gap-space-sm">
                    <div className="flex items-start gap-space-sm">
                      <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[16px]">
                          gavel
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-label-md font-semibold text-on-surface">
                          Statutory Tax Declaration (HMRC Section 55A Notice)
                        </span>
                        <p className="font-body-sm text-on-surface-variant leading-relaxed">
                           Services supplied by 
                          <strong className="text-on-surface">
                            Charlotte Emily Clark
                          </strong>
                           as a Sole Trader under the Rs 33,300,000UK VAT registration threshold. Zero VAT charged pursuant to UK VATA 1994 s.55A / small business exemption. This document constitutes formal statutory proof of earnings for UK Self-Assessment (
                          <strong className="text-on-surface font-mono">
                            SA100 / SA103
                          </strong>
                          ) box 9 turnover reporting. 
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs pt-space-xs px-space-sm bg-surface-container-lowest rounded-lg py-2">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          lock
                        </span>
                        <span className="font-label-sm text-outline">
                          Cryptographic Ledger SHA-256 Digest:
                        </span>
                      </div>
                      <div className="font-mono text-label-sm text-on-surface bg-surface-container px-2 py-0.5 rounded select-all break-all">
                         e7f2910c89a01fd4591b32c867fbd3004b12 
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-label-sm text-outline px-1">
                      <span>
                        Custody Settlement Rail: Barclays Bank UK PLC Escrow Gateway API
                      </span>
                      <span>
                        Timestamp: 12 Dec 2026, 16:15:47 UTC
                      </span>
                    </div>
                  </div>
                  <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm mt-space-md pt-space-sm text-outline text-label-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px] text-secondary">
                        security
                      </span>
                      <span>
                        Statutory 6-year archival copy permanently stored in Pactly Immutable Vault.
                      </span>
                    </div>
                    <span>
                      Regulated under UK Escrow Framework 2024 • Ref: UK-5028
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-space-md sm:px-space-xl py-space-md bg-surface-container-lowest flex flex-col sm:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-xs w-full sm:w-auto">
                  <span className="font-label-sm text-outline whitespace-nowrap hidden md:inline">
                    Sync Accounting:
                  </span>
                  <button id="btnFreeAgent" className="px-2.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm flex items-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-[14px]">
                      sync_alt
                    </span>
                     FreeAgent 
                  </button>
                  <button id="btnXero" className="px-2.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm flex items-center gap-1 transition-colors" data-go="/settings/sync">
                    <span className="material-symbols-outlined text-[14px]">
                      cloud_upload
                    </span>
                     Xero 
                  </button>
                  <button id="btnQuickBooks" className="px-2.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm flex items-center gap-1 transition-colors" data-go="/settings/sync">
                     QuickBooks 
                  </button>
                </div>
                <div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
                  <button id="btnExportData" className="px-3.5 py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md flex items-center gap-1.5 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-[16px]">
                      data_object
                    </span>
                    <span>
                      Export JSON / CSV
                    </span>
                  </button>
                  <button id="btnDownloadPDF" className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">
                      download
                    </span>
                    <span>
                      Download Remittance PDF 
                      <span className="font-normal opacity-80">
                        (PDF/A-3 • 192 KB)
                      </span>
                    </span>
                  </button>
                </div>
              </div>
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
                  Pactly Escrow &amp; Contracts
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
              © 2025 Pactly Technologies Ltd. All rights reserved. Registered in England &amp; Wales.
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
