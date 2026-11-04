/** Pactly — Xero / QuickBooks Sync Success Notification Modal */
export default function LedgerSyncPage() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-[1200px] mx-auto px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-lg">
            <div className="flex items-center gap-space-xs">
              <div className="w-7 h-7 rounded-lg bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  verified_user
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface font-semibold">
                Pactly
              </span>
            </div>
            <nav data-active-classes="bg-surface-container-high text-primary font-label-md rounded-lg" className="hidden lg:flex items-center gap-space-xs">
              <a className="px-space-sm py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-go="/deals" href="/deals">
                Deals
              </a>
              <a className="px-space-sm py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-go="/invitations/uk-5028" href="/invitations/uk-5028">
                Invitations
              </a>
              <a className="px-space-sm py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-go="/profile" href="/profile">
                Profile
              </a>
              <a className="px-space-sm py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-go="/settings" href="/settings">
                Settings
              </a>
              <a className="px-space-sm py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-go="/help" href="/help">
                Help &amp; Legal
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex items-center gap-space-xs bg-surface-container-low px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Custody:
              </span>
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                Rs 0reconciled
              </span>
            </div>
            <div className="flex items-center gap-space-sm pl-space-xs">
              <div className="text-right hidden md:block">
                <div className="font-label-md text-label-md text-on-surface leading-tight font-medium">
                  David Vance
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">
                  Lumina Studio • Brand
                </div>
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
      <main className="w-full pt-16 bg-background min-h-screen">
        <div className="flex flex-col w-full relative">
          <div className="w-full max-w-[1200px] mx-auto px-margin py-space-lg pointer-events-none select-none opacity-40 filter blur-[1.5px]">
            <div className="flex items-center justify-between pb-space-md">
              <div>
                <div className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Deal Settlement Record
                </div>
                <div className="font-headline-lg text-headline-lg text-on-surface font-semibold">
                  Deal #UK-5028: Lumina Studio Ltd × Charlotte Emily Clark
                </div>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-semibold">
                  Discharged &amp; Reconciled
                </span>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-gutter mt-space-md">
              <div className="col-span-8 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                <div className="h-6 w-48 bg-surface-container rounded mb-space-md"></div>
                <div className="h-4 w-full bg-surface-container-low rounded mb-space-sm"></div>
                <div className="h-4 w-3/4 bg-surface-container-low rounded mb-space-lg"></div>
                <div className="grid grid-cols-3 gap-space-md">
                  <div className="h-20 bg-surface-container-low rounded-lg"></div>
                  <div className="h-20 bg-surface-container-low rounded-lg"></div>
                  <div className="h-20 bg-surface-container-low rounded-lg"></div>
                </div>
              </div>
              <div className="col-span-4 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                <div className="h-6 w-32 bg-surface-container rounded mb-space-md"></div>
                <div className="space-y-space-sm">
                  <div className="h-10 bg-surface-container-low rounded"></div>
                  <div className="h-10 bg-surface-container-low rounded"></div>
                  <div className="h-10 bg-surface-container-low rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="sync-modal-container" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-inverse-surface/45 backdrop-blur-sm overflow-y-auto transition-opacity duration-300">
            <div className="relative w-full max-w-[820px] bg-surface-container-lowest rounded-xl shadow-2xl my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              <div className="bg-surface-container-low px-space-lg py-2.5 flex flex-wrap items-center justify-between gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <div className="flex items-center gap-space-xs flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-semibold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                     Synced &amp; Reconciled • Xero &amp; QuickBooks Online 
                  </span>
                  <span className="text-outline">
                    /
                  </span>
                  <span className="font-mono text-on-surface font-medium">
                    REF: #SYNC-XERO-UK5028-20261225
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="font-medium text-on-surface">
                    ORG: LUMINA STUDIO LTD
                  </span>
                  <span className="text-outline text-[11px]">
                    (GB 492 8104 22)
                  </span>
                  <button aria-label="Close sync modal" type="button" className="w-6 h-6 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors ml-1">
                    <span className="material-symbols-outlined text-[16px]">
                      close
                    </span>
                  </button>
                </div>
              </div>
              <div className="p-6 md:p-space-xl flex flex-col gap-space-lg max-h-[870px] overflow-y-auto">
                <div className="flex items-start gap-space-md">
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shadow-sm">
                      <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-secondary text-[32px]">
                        cloud_done
                      </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-[13px]">
                        check
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="font-headline-md text-headline-md font-semibold text-on-surface tracking-tight">
                         Accounting Packet Successfully Pushed to Xero 
                      </h2>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
                       Deal 
                      <span className="font-semibold text-on-surface">
                        #UK-5028
                      </span>
                       tax packet, commercial invoice, Barclays escrow discharge certificate, and immutable audit logs have been successfully posted and reconciled in Xero Cloud Accounting. 
                    </p>
                    <div className="flex items-center gap-space-xs mt-2.5 flex-wrap">
                      <div className="inline-flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md">
                        <span className="material-symbols-outlined text-[15px] text-secondary">
                          schedule
                        </span>
                        <span>
                          25 Dec 2026, 17:42:09 GMT
                        </span>
                      </div>
                      <span className="text-outline text-label-sm">
                        •
                      </span>
                      <span className="font-label-md text-label-md text-on-surface-variant">
                        Latency: 
                        <span className="font-medium text-secondary">
                          480ms
                        </span>
                      </span>
                      <span className="text-outline text-label-sm">
                        •
                      </span>
                      <span className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary">
                        <span className="material-symbols-outlined text-[14px]">
                          lock_open_right
                        </span>
                         OAuth2.0 Token Active (ID: #tkn_xero_live_449) 
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-xl p-space-md">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-md">
                    <div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Target Organisation
                      </div>
                      <div className="font-label-md text-label-md font-semibold text-on-surface mt-0.5 truncate">
                        Lumina Studio Ltd
                      </div>
                      <div className="font-label-sm text-label-sm text-outline font-mono">
                        Org ID: #xer_uk_90184
                      </div>
                    </div>
                    <div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Period
                      </div>
                      <div className="font-label-md text-label-md font-semibold text-on-surface mt-0.5">
                        FY 2026/27 (Q3)
                      </div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">
                        December 2026
                      </div>
                    </div>
                    <div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Reconciled Value
                      </div>
                      <div className="font-label-md text-label-md font-bold text-on-surface mt-0.5">
                        Rs 823,620GBP
                      </div>
                      <div className="font-label-sm text-label-sm text-secondary font-medium">
                        Auto-matched
                      </div>
                    </div>
                    <div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        HMRC Compliance
                      </div>
                      <div className="inline-flex items-center gap-1 text-secondary font-label-md text-label-md font-semibold mt-0.5">
                        <span className="material-symbols-outlined text-[15px]">
                          verified
                        </span>
                         MTD Compliant 
                      </div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">
                        S55A Certified
                      </div>
                    </div>
                    <div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Bank Feed Match
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
                        <span className="font-label-md text-label-md font-semibold text-on-surface">
                          100% Matched
                        </span>
                      </div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">
                        Barclays Trust Vault
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        account_tree
                      </span>
                      <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                        Xero Journal &amp; Ledger Posting Map
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        done_all
                      </span>
                       Balanced &amp; Auto-Approved (No Manual Action Required) 
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-surface-container font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                            <th className="py-2.5 px-4">
                              Account Code &amp; Chart Name
                            </th>
                            <th className="py-2.5 px-4">
                              Description / Reference Details
                            </th>
                            <th className="py-2.5 px-4">
                              Tax Rate (UK VAT)
                            </th>
                            <th className="py-2.5 px-4 text-right">
                              Debit (PKR)
                            </th>
                            <th className="py-2.5 px-4 text-right">
                              Credit (PKR)
                            </th>
                          </tr>
                        </thead>
                        <tbody className="font-body-md text-body-md divide-y divide-surface-container-low text-on-surface">
                          <tr className="hover:bg-surface-container-low/50 transition-colors">
                            <td className="py-3 px-4 align-top">
                              <div className="font-mono font-semibold text-primary text-label-md">
                                6200
                              </div>
                              <div className="font-label-md text-label-md font-medium text-on-surface">
                                Creator &amp; Influencer Marketing Expense
                              </div>
                            </td>
                            <td className="py-3 px-4 align-top">
                              <div className="text-body-sm font-medium">
                                Charlotte Emily Clark • Pact #UK-5028
                              </div>
                              <div className="text-label-sm text-on-surface-variant">
                                YouTube 60s Integration + TikTok Spark Ads Usage Rights
                              </div>
                            </td>
                            <td className="py-3 px-4 align-top">
                              <span className="inline-block px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                                 Zero Rated (HMRC Section 55A Reverse Charge) 
                              </span>
                            </td>
                            <td className="py-3 px-4 align-top text-right font-mono font-semibold">
                               Rs 777,000 
                            </td>
                            <td className="py-3 px-4 align-top text-right font-mono text-outline">
                               — 
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low/50 transition-colors">
                            <td className="py-3 px-4 align-top">
                              <div className="font-mono font-semibold text-primary text-label-md">
                                7900
                              </div>
                              <div className="font-label-md text-label-md font-medium text-on-surface">
                                Bank &amp; Escrow Custody Charges
                              </div>
                            </td>
                            <td className="py-3 px-4 align-top">
                              <div className="text-body-sm font-medium">
                                Pactly Escrow Safeguarding &amp; Smart Contract Management
                              </div>
                              <div className="text-label-sm text-on-surface-variant">
                                Standard platform fee (6%) • Lumina Studio Billing
                              </div>
                            </td>
                            <td className="py-3 px-4 align-top">
                              <div className="flex items-center gap-1">
                                <span className="inline-block px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                                   20% Standard VAT on Services 
                                </span>
                              </div>
                              <div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                                Input VAT: Rs 9,324
                              </div>
                            </td>
                            <td className="py-3 px-4 align-top text-right font-mono font-semibold">
                               Rs 46,620 
                              <div className="font-label-sm text-label-sm text-outline font-normal">
                                (Gross: Rs 55,944)
                              </div>
                            </td>
                            <td className="py-3 px-4 align-top text-right font-mono text-outline">
                               — 
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low/50 transition-colors">
                            <td className="py-3 px-4 align-top">
                              <div className="font-mono font-semibold text-secondary text-label-md">
                                8000
                              </div>
                              <div className="font-label-md text-label-md font-medium text-on-surface">
                                Barclays Client Escrow Clearing Account
                              </div>
                            </td>
                            <td className="py-3 px-4 align-top">
                              <div className="text-body-sm font-medium">
                                Settlement of Barclays UK Trust Vault #A-8291-UKM2
                              </div>
                              <div className="text-label-sm text-on-surface-variant">
                                Reconciled against Barclays Bank Feed entry ID #BB-9021-391
                              </div>
                            </td>
                            <td className="py-3 px-4 align-top">
                              <span className="inline-block px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                                 No VAT / Balance Transfer 
                              </span>
                            </td>
                            <td className="py-3 px-4 align-top text-right font-mono text-outline">
                               — 
                            </td>
                            <td className="py-3 px-4 align-top text-right font-mono font-bold text-secondary">
                               Rs 823,620 
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr className="bg-surface-container-low font-label-md text-label-md">
                            <td colSpan={3} className="py-2.5 px-4 font-semibold text-on-surface text-right">
                               Total Ledger Postings (Balanced to Zero): 
                            </td>
                            <td className="py-2.5 px-4 text-right font-mono font-bold text-on-surface">
                               Rs 823,620 
                            </td>
                            <td className="py-2.5 px-4 text-right font-mono font-bold text-on-surface">
                               Rs 823,620 
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-xl p-space-md">
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-label-md text-label-md font-semibold text-on-surface flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-[17px]">
                        attach_file
                      </span>
                       3 Statutory Documents Automatically Attached to Xero Transaction 
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">
                      Cloud Storage Synced (SHA-256)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                    <div className="bg-surface-container-lowest p-3 rounded-lg flex items-start gap-2.5 hover:bg-surface-container-high transition-colors">
                      <div className="w-8 h-8 rounded bg-error-container text-error flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          picture_as_pdf
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-label-md text-label-md font-medium text-on-surface truncate">
                          #PACT-2026-UK5028-INV.pdf
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant truncate">
                          PDF/A-3 Commercial Invoice
                        </div>
                        <div className="font-label-sm text-label-sm text-secondary flex items-center gap-1 mt-0.5">
                          <span className="material-symbols-outlined text-[13px]">
                            check_circle
                          </span>
                           HMRC S55A Notice Verified 
                        </div>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-3 rounded-lg flex items-start gap-2.5 hover:bg-surface-container-high transition-colors">
                      <div className="w-8 h-8 rounded bg-primary-fixed text-primary flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          verified
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-label-md text-label-md font-medium text-on-surface truncate">
                          Barclays-Discharge-A8291.pdf
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant truncate">
                          Bank Custody Discharge Cert
                        </div>
                        <div className="font-label-sm text-label-sm text-secondary flex items-center gap-1 mt-0.5">
                          <span className="material-symbols-outlined text-[13px]">
                            check_circle
                          </span>
                           Faster Payments Confirmed 
                        </div>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-3 rounded-lg flex items-start gap-2.5 hover:bg-surface-container-high transition-colors">
                      <div className="w-8 h-8 rounded bg-surface-container-highest text-on-surface flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          data_object
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-label-md text-label-md font-medium text-on-surface truncate">
                          Audit-Trail-UK5028.json
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant truncate">
                          Cryptographic Audit Chain
                        </div>
                        <div className="font-label-sm text-label-sm text-secondary flex items-center gap-1 mt-0.5">
                          <span className="material-symbols-outlined text-[13px]">
                            check_circle
                          </span>
                           eIDAS Reg 910/2014 Sealed 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container rounded-xl p-3 px-4 flex items-center justify-between gap-space-md flex-wrap">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-7 h-7 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">
                        sync_alt
                      </span>
                    </div>
                    <div>
                      <span className="font-label-md text-label-md font-medium text-on-surface">
                        QuickBooks Online Dual-Sync Enabled
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block sm:inline sm:ml-2">
                         Connected to Lumina Studio (#QBO-UK-48910) • Synced 2 Bills &amp; 1 Vendor Profile 
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="px-2 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
                       QBO Ready 
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-space-md">
                <div className="text-left w-full sm:w-auto">
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-primary">
                      policy
                    </span>
                     Authorised Xero App Partner &amp; Intuit Developer 
                  </span>
                  <span className="font-label-sm text-label-sm text-outline block">
                     Statutory tax classifications under English Commercial Law (Model 2.4). 
                  </span>
                </div>
                <div className="flex items-center justify-end gap-space-sm w-full sm:w-auto flex-wrap">
                  <button type="button" className="px-4 py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors shadow-sm">
                     Done &amp; Close 
                  </button>
                  <a className="px-4 py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors shadow-sm inline-flex items-center gap-1.5" href="#" onClick={(event) => event.preventDefault()}>
                    <span>
                      View in QBO
                    </span>
                    <span className="material-symbols-outlined text-[15px]">
                      open_in_new
                    </span>
                  </a>
                  <a className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-medium transition-colors shadow-sm inline-flex items-center gap-1.5" data-go="/settings/sync" href="/settings/sync">
                    <span>
                      View Transaction in Xero
                    </span>
                    <span className="material-symbols-outlined text-[15px]">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin">
          <div className="flex flex-col md:flex-row items-center justify-between gap-space-md pb-space-lg">
            <div className="flex items-center gap-space-sm">
              <div className="w-6 h-6 rounded-lg bg-surface-container flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[15px]">
                  lock
                </span>
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant">
                FCA Authorised Representative (FRN 841920) • Ring-fenced Barclays Bank UK Client Custody
              </span>
            </div>
            <div className="flex items-center gap-space-lg">
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#" onClick={(event) => event.preventDefault()}>
                Audit Protocol
              </a>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Statutory Custody Terms
              </a>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Dispute Arbitration
              </a>
            </div>
          </div>
          <div className="text-center md:text-left font-body-sm text-body-sm text-on-surface-variant">
            © 2025 Pactly Escrow Technologies Ltd. Registered in England &amp; Wales (No. 12984021). All escrowed funds held in designated trust accounts.
          </div>
        </div>
      </footer>
    </>
  )
}
