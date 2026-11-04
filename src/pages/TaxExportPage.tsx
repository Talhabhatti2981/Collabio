/** Pactly — Export Tax & Accounting Packet Modal (HMRC Compliant) */
export default function TaxExportPage() {
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
              <a aria-current="page" className="px-space-sm py-1.5 transition-colors bg-surface-container-high text-primary font-label-md rounded-lg" data-go="/deals" href="/deals">
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
                Help & Legal
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
        <div className="flex flex-col w-full relative min-h-screen">
          <div aria-hidden="true" className="w-full max-w-[1200px] mx-auto px-margin py-space-lg filter blur-[6px] opacity-45 pointer-events-none select-none">
            <div className="flex items-center justify-between pb-space-md border-b border-outline-variant/30 mb-space-lg">
              <div className="flex items-center gap-space-sm">
                <span className="px-2.5 py-1 rounded-full bg-secondary-container/30 text-secondary font-label-md">
                  Settled & Archived
                </span>
                <h1 className="font-headline-lg text-headline-lg text-on-surface">
                  Deal #UK-5028: Lumina Studio Ltd × Charlotte Emily Clark
                </h1>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="font-label-md text-label-md text-on-surface-variant">
                  Reconciled Barclays Vault #A-8291
                </span>
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined text-[18px]">
                    verified
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-lg">
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/20">
                <div className="font-label-sm text-on-surface-variant uppercase tracking-wider">
                  Total Settlement
                </div>
                <div className="font-headline-lg text-on-surface mt-1">
                  Rs 823,620
                </div>
                <div className="font-body-sm text-secondary mt-1">
                  100% Disbursed to Creator
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/20">
                <div className="font-label-sm text-on-surface-variant uppercase tracking-wider">
                  Discharge Status
                </div>
                <div className="font-headline-lg text-secondary mt-1">
                  Zero Residual
                </div>
                <div className="font-body-sm text-on-surface-variant mt-1">
                  Barclays Client Segregated Acc
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/20">
                <div className="font-label-sm text-on-surface-variant uppercase tracking-wider">
                  HMRC Audit Ledger
                </div>
                <div className="font-headline-lg text-on-surface mt-1">
                  Ready for Filing
                </div>
                <div className="font-body-sm text-on-surface-variant mt-1">
                  FY 2026/27 MTD Compliant
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-50 bg-[#111827]/50 backdrop-blur-md flex items-center justify-center p-3 sm:p-space-md md:p-space-lg overflow-y-auto">
            <div className="relative w-full max-w-[920px] my-auto bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden flex flex-col border border-outline-variant/30 animate-in fade-in zoom-in-95 duration-200">
              <div className="h-1.5 w-full bg-gradient-to-r from-primary via-primary-container to-secondary"></div>
              <div className="px-space-md sm:px-space-xl pt-space-lg pb-space-md border-b border-surface-container">
                <div className="flex items-start justify-between gap-space-sm">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm">
                        <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[13px]">
                          verified
                        </span>
                         HMRC STATUTORY COMPLIANT • TAX YEAR 2026/27 
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-on-surface-variant tracking-mono font-medium">
                         DEAL REF: #UK-5028 
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10 text-primary font-label-sm font-medium">
                        <span className="material-symbols-outlined text-[12px]">
                          enhanced_encryption
                        </span>
                         eIDAS Validated 
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
                       Export Statutory Tax & Accounting Packet 
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-[760px] leading-relaxed">
                       Complete verifiable audit package for UK Corporation Tax, VAT reporting, and custodial escrow reconciliation under English Commercial Law (Model 2.4). Pre-formatted for HMRC Making Tax Digital (MTD). 
                    </p>
                  </div>
                  <button aria-label="Close Export Modal" type="button" className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      close
                    </span>
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-space-md pt-space-sm border-t border-surface-container-low">
                  <div className="flex flex-col bg-surface-container-low/70 px-3 py-2 rounded-lg">
                    <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">
                      Settlement Value
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Rs 823,620 
                      <span className="font-label-sm text-on-surface-variant">
                        PKR
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col bg-surface-container-low/70 px-3 py-2 rounded-lg">
                    <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">
                      VAT Treatment
                    </span>
                    <span className="font-label-lg text-label-lg text-secondary font-semibold">
                      Exempt / S55A Notice
                    </span>
                  </div>
                  <div className="flex flex-col bg-surface-container-low/70 px-3 py-2 rounded-lg">
                    <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">
                      Barclays Custody
                    </span>
                    <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                      Rs 0Reconciled
                    </span>
                  </div>
                  <div className="flex flex-col bg-surface-container-low/70 px-3 py-2 rounded-lg">
                    <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">
                      Audit Checksum
                    </span>
                    <span className="font-label-sm text-on-surface-variant truncate font-mono mt-0.5">
                      SHA256: 9b2d8e41
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-space-md sm:px-space-xl py-space-md max-h-[calc(88vh-220px)] overflow-y-auto space-y-space-lg">
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[19px]">
                        inventory_2
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Included Audit Documents
                      </h3>
                      <span className="ml-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm font-semibold">
                        4 of 4 selected
                      </span>
                    </div>
                    <div className="flex items-center gap-space-sm text-on-surface-variant">
                      <button type="button" className="font-label-sm text-primary hover:underline">
                        Select All
                      </button>
                      <span>
                        •
                      </span>
                      <button type="button" className="font-label-sm text-on-surface-variant hover:text-on-surface">
                        Reset
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-space-md hover:border-primary/40 transition-colors">
                      <div className="flex items-start gap-space-sm">
                        <input defaultChecked={true} id="doc1" type="checkbox" className="mt-1 h-4 w-4 rounded accent-primary text-primary focus:ring-primary/30 cursor-pointer" />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-1">
                            <label htmlFor="doc1" className="font-headline-sm text-[15px] font-semibold text-on-surface cursor-pointer hover:text-primary transition-colors">
                               Official VAT-Compliant Commercial Invoice 
                            </label>
                            <div className="flex items-center gap-1.5">
                              <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-on-surface-variant font-mono">
                                PDF/A-3
                              </span>
                              <span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-on-surface-variant">
                                342 KB
                              </span>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 mt-2 text-on-surface-variant font-body-sm text-[12.5px] bg-surface-container-low/60 p-2.5 rounded-lg">
                            <div>
                              <span className="font-medium text-on-surface">
                                Invoice Ref:
                              </span>
                               #PACT-2026-UK5028-INV 
                            </div>
                            <div>
                              <span className="font-medium text-on-surface">
                                Tax Point:
                              </span>
                               25 December 2026 
                            </div>
                            <div>
                              <span className="font-medium text-on-surface">
                                Supplier:
                              </span>
                               Charlotte Emily Clark (Sole Trader, Non-VAT, 
                              &lt;
                              Rs 33,300,000 threshold) 
                            </div>
                            <div>
                              <span className="font-medium text-on-surface">
                                Buyer:
                              </span>
                               Lumina Studio Ltd (VAT Reg: GB 492 8104 22) 
                            </div>
                            <div>
                              <span className="font-medium text-on-surface">
                                Creator Consideration:
                              </span>
                               Rs 777,000(M1: Rs 518,000+ M2: Rs 259,000) 
                            </div>
                            <div>
                              <span className="font-medium text-on-surface">
                                Platform Escrow Fee:
                              </span>
                               Rs 46,620+ Rs 9,324VAT (Rs 55,944Gross) 
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 mt-2 text-secondary font-label-sm">
                            <span className="material-symbols-outlined text-[14px]">
                              shield
                            </span>
                             Section 55A VATA 1994 reverse charge & small trader statutory disclaimer verified 
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-space-md hover:border-primary/40 transition-colors">
                      <div className="flex items-start gap-space-sm">
                        <input defaultChecked={true} id="doc2" type="checkbox" className="mt-1 h-4 w-4 rounded accent-primary text-primary focus:ring-primary/30 cursor-pointer" />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-1">
                            <label htmlFor="doc2" className="font-headline-sm text-[15px] font-semibold text-on-surface cursor-pointer hover:text-primary transition-colors">
                               Barclays Bank Trust Custody Ledger & Discharge Certificate 
                            </label>
                            <div className="flex items-center gap-1.5">
                              <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-on-surface-variant font-mono">
                                PDF
                              </span>
                              <span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-on-surface-variant">
                                218 KB
                              </span>
                            </div>
                          </div>
                          <p className="font-body-sm text-[13px] text-on-surface-variant mt-1">
                             Statutory escrow account statement from Barclays Bank UK PLC Client Trust Vault 
                            <span className="font-mono text-on-surface font-medium">
                              #A-8291-UKM2
                            </span>
                            . 
                          </p>
                          <div className="mt-2 text-on-surface-variant font-body-sm text-[12px] bg-surface-container-low/60 p-2.5 rounded-lg space-y-1">
                            <div className="flex justify-between items-center text-on-surface">
                              <span>
                                Initial Ring-Fenced Inbound Deposit (14 Nov 2026)
                              </span>
                              <span className="font-mono font-medium">
                                +Rs 823,620
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-on-surface-variant">
                              <span>
                                FPS Disbursement M1 • FPS-20261125-GB89-84920194
                              </span>
                              <span className="font-mono text-error font-medium">
                                -Rs 518,000
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-on-surface-variant">
                              <span>
                                FPS Disbursement M2 • FPS-20261126-GB89-91823011
                              </span>
                              <span className="font-mono text-error font-medium">
                                -Rs 259,000
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-on-surface-variant">
                              <span>
                                Pactly Safeguarding & Custody Fee Settled
                              </span>
                              <span className="font-mono text-error font-medium">
                                -Rs 46,620
                              </span>
                            </div>
                            <div className="flex justify-between items-center pt-1 border-t border-outline-variant/30 font-semibold text-on-surface">
                              <span className="text-secondary flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                 Closing Ring-Fenced Liability 
                              </span>
                              <span className="font-mono">
                                Rs 0RECONCILED
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-space-md hover:border-primary/40 transition-colors">
                      <div className="flex items-start gap-space-sm">
                        <input defaultChecked={true} id="doc3" type="checkbox" className="mt-1 h-4 w-4 rounded accent-primary text-primary focus:ring-primary/30 cursor-pointer" />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-1">
                            <label htmlFor="doc3" className="font-headline-sm text-[15px] font-semibold text-on-surface cursor-pointer hover:text-primary transition-colors">
                               Immutable Cryptographic Audit Trail (.JSON & .CSV) 
                            </label>
                            <div className="flex items-center gap-1.5">
                              <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-on-surface-variant font-mono">
                                JSON + CSV
                              </span>
                              <span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-on-surface-variant">
                                84 KB
                              </span>
                            </div>
                          </div>
                          <p className="font-body-sm text-[12.5px] text-on-surface-variant mt-1">
                             Complete state-machine log containing sequential SHA-256 event hashes, UTC microsecond timestamps, YouTube Data API v3 verification payloads, and TikTok Spark Ads authorization token expiration receipts. 
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-space-md hover:border-primary/40 transition-colors">
                      <div className="flex items-start gap-space-sm">
                        <input defaultChecked={true} id="doc4" type="checkbox" className="mt-1 h-4 w-4 rounded accent-primary text-primary focus:ring-primary/30 cursor-pointer" />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-1">
                            <label htmlFor="doc4" className="font-headline-sm text-[15px] font-semibold text-on-surface cursor-pointer hover:text-primary transition-colors">
                               English Commercial Law Model 2.4 Agreement & Schedules 
                            </label>
                            <div className="flex items-center gap-1.5">
                              <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-on-surface-variant font-mono">
                                PDF/A-1
                              </span>
                              <span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-on-surface-variant">
                                510 KB
                              </span>
                            </div>
                          </div>
                          <p className="font-body-sm text-[12.5px] text-on-surface-variant mt-1">
                             Complete countersigned agreement, Schedule 1 (YouTube 60s Integration specs), Schedule 2 (Spark Ads 30-day licensing terms), and Harrison & Croft LLP fast-track arbitration discharge addendum. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-low/70 rounded-xl p-space-md border border-outline-variant/20">
                  <div className="flex items-center justify-between mb-space-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-on-surface text-[18px]">
                        account_balance
                      </span>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">
                        HMRC MTD Ledger & Chart of Accounts Mapping
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary font-label-sm font-semibold">
                      Ready for Year-End Filing
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-2">
                    <div className="bg-surface-container-lowest rounded-lg p-3 border border-outline-variant/20">
                      <div className="font-label-md text-on-surface font-semibold mb-2">
                        Recommended Nominal Account Codes
                      </div>
                      <div className="space-y-2 text-body-sm text-[12.5px]">
                        <div className="flex justify-between items-center pb-1.5 border-b border-surface-container">
                          <div>
                            <span className="font-mono font-medium text-primary bg-primary/5 px-1.5 py-0.5 rounded">
                              6200
                            </span>
                            <span className="ml-1.5 text-on-surface">
                              Creator Influencer Spend
                            </span>
                          </div>
                          <span className="font-mono font-medium text-on-surface">
                            Rs 777,000
                          </span>
                        </div>
                        <div className="flex justify-between items-center pb-1.5 border-b border-surface-container">
                          <div>
                            <span className="font-mono font-medium text-primary bg-primary/5 px-1.5 py-0.5 rounded">
                              7900
                            </span>
                            <span className="ml-1.5 text-on-surface">
                              Escrow Custody Processing
                            </span>
                          </div>
                          <span className="font-mono font-medium text-on-surface">
                            Rs 46,620
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-mono font-medium text-primary bg-primary/5 px-1.5 py-0.5 rounded">
                              2201
                            </span>
                            <span className="ml-1.5 text-on-surface">
                              Input VAT Claimable (Pactly Fee)
                            </span>
                          </div>
                          <span className="font-mono font-medium text-secondary">
                            Rs 9,324
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest rounded-lg p-3 border border-outline-variant/20 flex flex-col justify-between">
                      <div>
                        <div className="font-label-md text-on-surface font-semibold mb-1">
                          UK Regulatory & AML Custody Safe-Harbor
                        </div>
                        <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                           Escrow custody conducted pursuant to Regulation 23 of the 
                          <em>
                            Payment Services Regulations 2017 (PSR 2017)
                          </em>
                          . Recipient KYC/eIDAS identification performed by Pactly Technologies Ltd (FCA FRN 841920). 
                        </p>
                      </div>
                      <div className="mt-2 pt-2 border-t border-surface-container flex items-center justify-between text-on-surface-variant font-label-sm">
                        <span>
                          Corporation Tax Deductible: 100%
                        </span>
                        <span className="text-secondary font-medium">
                          HMRC Section 74 ICTA 1988
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Direct Cloud Accounting Sync
                    </span>
                    <span className="font-label-sm text-on-surface-variant">
                      Pre-mapped invoice & bill line items
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <label className="flex items-center justify-between p-2.5 rounded-lg border border-primary bg-primary/5 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-primary text-on-primary font-bold text-[11px] flex items-center justify-center">
                          X
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-md font-semibold text-on-surface">
                            Xero
                          </span>
                          <span className="font-label-sm text-secondary text-[10px]">
                            Connected • Ready
                          </span>
                        </div>
                      </div>
                      <input defaultChecked={true} name="acc_sync" type="radio" className="accent-primary h-3.5 w-3.5" />
                    </label>
                    <label className="flex items-center justify-between p-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-[#2CA01C] text-white font-bold text-[11px] flex items-center justify-center">
                          qb
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-md font-semibold text-on-surface">
                            QuickBooks
                          </span>
                          <span className="font-label-sm text-on-surface-variant text-[10px]">
                            Available
                          </span>
                        </div>
                      </div>
                      <input name="acc_sync" type="radio" className="accent-primary h-3.5 w-3.5" />
                    </label>
                    <label className="flex items-center justify-between p-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-[#005B94] text-white font-bold text-[11px] flex items-center justify-center">
                          FA
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-md font-semibold text-on-surface">
                            FreeAgent
                          </span>
                          <span className="font-label-sm text-on-surface-variant text-[10px]">
                            Ready
                          </span>
                        </div>
                      </div>
                      <input name="acc_sync" type="radio" className="accent-primary h-3.5 w-3.5" />
                    </label>
                    <label className="flex items-center justify-between p-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-[#00DC00] text-[#002018] font-bold text-[11px] flex items-center justify-center">
                          S
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-md font-semibold text-on-surface">
                            Sage Cloud
                          </span>
                          <span className="font-label-sm text-on-surface-variant text-[10px]">
                            Manual Map
                          </span>
                        </div>
                      </div>
                      <input name="acc_sync" type="radio" className="accent-primary h-3.5 w-3.5" />
                    </label>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-surface-container-low/50 rounded-lg text-body-sm text-[12.5px] text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">
                      forward_to_inbox
                    </span>
                    <span>
                      Send automated signed packet copy:
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input defaultChecked={true} type="checkbox" className="accent-primary h-3.5 w-3.5 rounded" />
                      <span className="text-on-surface">
                        david@lumina.io
                      </span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input defaultChecked={true} type="checkbox" className="accent-primary h-3.5 w-3.5 rounded" />
                      <span className="text-on-surface">
                        accountant@luminastudio.co.uk
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="px-space-md sm:px-space-xl py-space-md bg-surface-container-lowest border-t border-surface-container flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      verified_user
                    </span>
                    <div className="font-label-sm text-[11.5px] leading-tight">
                       Cryptographically signed by Pactly Escrow Technologies Ltd.
                      <br />
                      <span className="font-mono text-outline">
                        SHA-256: 9b2d8e41f029ce81aa4921f002b801a2
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm w-full sm:w-auto">
                    <button type="button" className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-outline-variant/40 bg-surface hover:bg-surface-container font-label-md text-on-surface transition-colors shadow-sm" data-go="/settings/sync">
                      <span className="material-symbols-outlined text-[18px]">
                        sync_alt
                      </span>
                       Push to Xero 
                    </button>
                    <button type="button" className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-[#3242C2] text-on-primary font-label-md font-semibold transition-all shadow-md hover:shadow-lg active:scale-[0.98]">
                      <span className="material-symbols-outlined text-[19px]">
                        download
                      </span>
                       Download Complete ZIP Packet (.ZIP • 1.15 MB) 
                    </button>
                  </div>
                </div>
                <div className="text-center sm:text-left font-label-sm text-[11px] text-on-surface-variant/80 border-t border-surface-container-low pt-2">
                   Statutory Record-Keeping Notice: Under Section 386 of the Companies Act 2006 and HMRC Notice 700/21, Lumina Studio Ltd must retain this statutory tax bundle for a minimum period of 6 years from the end of the 2026/27 financial period. 
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
            © 2025 Pactly Escrow Technologies Ltd. Registered in England & Wales (No. 12984021). All escrowed funds held in designated trust accounts.
          </div>
        </div>
      </footer>
    </>
  )
}
