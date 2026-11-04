/** Pactly — Autonomous Release Live Execution & Settlement Receipt Modal */
export default function SettlementReceiptPage() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-[1200px] mx-auto px-margin flex items-center justify-between gap-space-lg">
          <div className="flex items-center gap-space-xl">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-on-primary font-headline-md text-headline-md tracking-tight font-bold">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface leading-tight font-semibold tracking-tight">
                  Pactly
                </span>
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                  Escrow Guard
                </span>
              </div>
            </div>
            <nav data-active-classes="bg-primary-container text-on-primary font-semibold rounded-lg" className="hidden xl:flex items-center gap-space-xs p-space-xs bg-surface-container-low rounded-xl">
              <a aria-current="page" className="px-space-md py-space-sm transition-all bg-primary-container text-on-primary font-semibold rounded-lg" data-go="/deals" href="/deals">
                Deals
              </a>
              <a className="px-space-md py-space-sm rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-go="/invitations/uk-5028" href="/invitations/uk-5028">
                Invitations
              </a>
              <a className="px-space-md py-space-sm rounded-lg font-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-go="/profile" href="/profile">
                Profile
              </a>
              <a className="px-space-md py-space-sm rounded-lg font-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-go="/settings" href="/settings">
                Settings
              </a>
              <a className="px-space-md py-space-sm rounded-lg font-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-go="/help" href="/help">
                Help &amp; Legal
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden md:flex items-center gap-space-md px-space-md py-space-sm rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
              <div className="flex flex-col text-right">
                <div className="flex items-center justify-end gap-space-xs">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                    Escrow Custody
                  </span>
                </div>
                <div className="flex items-baseline justify-end gap-space-xs">
                  <span className="font-headline-sm text-headline-sm font-semibold text-on-surface tracking-tight">
                    Rs 4,206,160
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-medium">
                    Rs 518,000rel.
                  </span>
                </div>
              </div>
              <div className="h-8 w-px bg-surface-container-high"></div>
              <span className="material-symbols-outlined text-secondary text-[20px]">
                verified_user
              </span>
            </div>
            <div className="flex items-center gap-space-sm pl-space-xs">
              <div className="hidden sm:flex flex-col text-right">
                <span className="font-label-lg text-label-lg text-on-surface font-semibold leading-snug">
                  David Vance
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
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
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-280px)]">
        <div className="flex flex-col w-full relative">
          <div className="w-full max-w-[1200px] mx-auto px-margin py-space-lg filter blur-[2px] opacity-40 pointer-events-none select-none transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
              <div className="flex items-center gap-space-sm text-on-surface-variant font-label-md text-label-md">
                <span>
                  Active Deals
                </span>
                <span className="material-symbols-outlined text-[16px]">
                  chevron_right
                </span>
                <span className="text-on-surface font-semibold">
                  Deal #UK-5028
                </span>
                <span className="material-symbols-outlined text-[16px]">
                  chevron_right
                </span>
                <span className="text-secondary font-medium">
                  Escrow Lifecycle
                </span>
              </div>
              <div className="flex items-center gap-space-sm">
                <div className="px-space-md py-space-xs rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                   Commercial Model 2.4 (FCA Dual Custody) 
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm mb-space-lg">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
                <div className="flex items-center gap-space-md">
                  <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center font-headline-md text-headline-md font-bold text-primary">
                     LS 
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-space-sm">
                      <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                        Lumina Studio Ltd × Charlotte Emily Clark
                      </h2>
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed-variant font-label-sm text-label-sm font-bold">
                        Active Protocol
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Tech Hardware Showcase 2026 Q4 • Contract Sovereign Ring-Fence A-8291
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-space-xl">
                  <div className="flex flex-col text-right">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold tracking-wider">
                      Total Contract Escrow
                    </span>
                    <span className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                      Rs 823,620 
                      <span className="font-label-md text-label-md text-on-surface-variant font-normal">
                        PKR
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-md text-label-md font-bold text-secondary">
                    Milestone 1 • Complete
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    Rs 518,000
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  60s–90s Dedicated YouTube Integration
                </p>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-md text-label-md font-bold text-tertiary">
                    Milestone 2 • Pending
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    Rs 305,620
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  30-Day Spark Ads Whitelisting &amp; Rights Extension
                </p>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-space-md sm:p-space-lg overflow-y-auto bg-inverse-surface/45 backdrop-blur-[6px] animate-fadeIn">
            <div className="relative w-full max-w-[840px] my-auto bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden transition-all duration-300">
              <div className="h-1.5 w-full bg-gradient-to-r from-secondary-fixed-dim via-primary-container to-secondary"></div>
              <div className="p-space-lg sm:p-space-xl pb-space-md flex flex-col gap-space-md">
                <div className="flex items-center justify-between flex-wrap gap-space-sm">
                  <div className="flex items-center flex-wrap gap-space-xs">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed-variant font-label-sm text-label-sm font-bold tracking-wide">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                      </span>
                       SETTLEMENT COMPLETE &amp; DISBURSED 
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm font-semibold">
                       DEAL REF #UK-5028 
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low text-secondary font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[14px]">
                        gavel
                      </span>
                       FCA SAFEGUARDED CUSTODY 
                    </span>
                  </div>
                  <button type="button" className="w-8 h-8 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-[20px]">
                      close
                    </span>
                  </button>
                </div>
                <div>
                  <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-bold uppercase tracking-widest mb-1">
                    <span className="material-symbols-outlined text-[16px]">
                      bolt
                    </span>
                     Autonomous Settlement Engine (Pactly Core v4) 
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-on-surface font-semibold tracking-tight">
                     Autonomous Escrow Release &amp; Settlement Receipt 
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1.5 flex items-center gap-1.5 flex-wrap">
                    <span className="font-medium text-on-surface">
                      Milestone 1 of 2:
                    </span>
                    <span>
                      60s–90s Dedicated YouTube Integration
                    </span>
                    <span className="text-outline-variant font-bold">
                      •
                    </span>
                    <span className="inline-flex items-center gap-1 text-secondary font-medium">
                      <span className="material-symbols-outlined text-[16px]">
                        timer
                      </span>
                       Settled in 42 seconds via UK Faster Payments Service 
                    </span>
                  </p>
                </div>
              </div>
              <div className="px-space-lg sm:px-space-xl pb-space-lg flex flex-col gap-space-lg max-h-[768px] overflow-y-auto">
                <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg sm:p-space-xl flex flex-col gap-space-lg">
                  <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-secondary-fixed/30 filter blur-3xl pointer-events-none"></div>
                  <div className="absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-primary-fixed/30 filter blur-3xl pointer-events-none"></div>
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md relative z-10">
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-on-surface-variant">
                        Net Disbursed to Creator
                      </span>
                      <div className="flex items-baseline gap-space-xs mt-0.5">
                        <span className="font-headline-xl text-[44px] leading-[48px] font-bold text-on-surface tracking-tight">
                          Rs 518,000
                        </span>
                        <span className="font-headline-sm text-headline-sm font-semibold text-primary">
                          PKR
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1 text-secondary font-label-sm text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-[16px]">
                          price_check
                        </span>
                        <span>
                          0% creator fee deduction • 100% full contractual disbursement
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1">
                      <div className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest shadow-sm flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
                        <span className="font-label-sm text-label-sm font-bold text-on-surface">
                          UK Faster Payments Service (FPS)
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Execution Latency: 
                        <strong className="text-on-surface">
                          42 seconds
                        </strong>
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-md border-t border-surface-container-high/60 relative z-10">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                        Destination Account
                      </span>
                      <span className="font-body-md text-body-md font-semibold text-on-surface leading-snug">
                        NatWest Business Account
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Charlotte Emily Clark (Sole Trader)
                      </p>
                      <div className="font-label-sm text-label-sm text-on-surface font-mono mt-0.5 flex items-center gap-2">
                        <span>
                          Sort Code: 60-08-28
                        </span>
                        <span className="text-outline-variant">
                          •
                        </span>
                        <span>
                          Account: ••••4910
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                        Faster Payments Transaction ID
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-body-sm text-body-sm font-mono font-bold text-primary select-all">
                          FPS-20261125-GB89-84920194
                        </span>
                        <button title="Copy Transaction ID" type="button" className="text-outline hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[16px]">
                            content_copy
                          </span>
                        </button>
                      </div>
                      <div className="mt-2 flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                          Custodial Origin
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface flex items-center gap-1 font-medium">
                          <span className="material-symbols-outlined text-secondary text-[16px]">
                            account_balance
                          </span>
                           Barclays Bank UK PLC — Segregated Client Trust Vault A-8291 
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        fact_check
                      </span>
                      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                        Autonomous Verification &amp; Release Sequence
                      </h3>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                      All 4 Checkpoints Verified
                    </span>
                  </div>
                  <div className="relative pl-6 sm:pl-8 space-y-space-md py-space-xs">
                    <div className="absolute left-3 sm:left-4 top-4 bottom-4 w-0.5 bg-secondary -translate-x-1/2"></div>
                    <div className="relative flex items-start gap-space-md">
                      <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-sm">
                        <span className="material-symbols-outlined text-[14px] font-bold">
                          check
                        </span>
                      </div>
                      <div className="flex-1 bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <span className="font-label-lg text-label-lg font-semibold text-on-surface flex items-center gap-2">
                            <span>
                              STEP 1: YouTube Data API v3 Webhook
                            </span>
                            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-secondary-fixed/50 text-on-secondary-fixed-variant uppercase">
                              Stream Confirmed
                            </span>
                          </span>
                          <span className="font-label-sm text-label-sm font-mono text-on-surface-variant">
                            14:18:02 GMT
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                           Public Publish Event Detected on Channel 
                          <strong className="text-on-surface">
                            @CharlotteClarkTech
                          </strong>
                           for Video ID 
                          <code className="font-mono bg-surface-container-low px-1 py-0.5 rounded text-primary">
                            xk98df2_w1q
                          </code>
                          . Privacy status changed from Unlisted to Public. Verified 1080p60 stream. 
                        </p>
                      </div>
                    </div>
                    <div className="relative flex items-start gap-space-md">
                      <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-sm">
                        <span className="material-symbols-outlined text-[14px] font-bold">
                          check
                        </span>
                      </div>
                      <div className="flex-1 bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <span className="font-label-lg text-label-lg font-semibold text-on-surface flex items-center gap-2">
                            <span>
                              STEP 2: Automated Brand Compliance Re-Verification
                            </span>
                            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-secondary-fixed/50 text-on-secondary-fixed-variant uppercase">
                              Specs Met (80s)
                            </span>
                          </span>
                          <span className="font-label-sm text-label-sm font-mono text-on-surface-variant">
                            14:18:15 GMT
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                           Video duration 12:45, sponsor window 03:14–04:34 (80s continuous). Pinned comment with code 
                          <span className="font-mono font-semibold text-on-surface">
                            CHARLOTTE20
                          </span>
                           and authenticated UTM link verified live via DOM crawler. 
                        </p>
                      </div>
                    </div>
                    <div className="relative flex items-start gap-space-md">
                      <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-sm">
                        <span className="material-symbols-outlined text-[14px] font-bold">
                          check
                        </span>
                      </div>
                      <div className="flex-1 bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <span className="font-label-lg text-label-lg font-semibold text-on-surface flex items-center gap-2">
                            <span>
                              STEP 3: Barclays Ring-Fenced Custody Release
                            </span>
                            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-secondary-fixed/50 text-on-secondary-fixed-variant uppercase">
                              Vault Unlocked
                            </span>
                          </span>
                          <span className="font-label-sm text-label-sm font-mono text-on-surface-variant">
                            14:18:31 GMT
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                           Escrow lock released from Vault A-8291 under English Commercial Model 2.4 Clause 4.3. Funds disbursed autonomously without administrative holdback. 
                        </p>
                      </div>
                    </div>
                    <div className="relative flex items-start gap-space-md">
                      <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-sm">
                        <span className="material-symbols-outlined text-[14px] font-bold">
                          done_all
                        </span>
                      </div>
                      <div className="flex-1 bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <span className="font-label-lg text-label-lg font-semibold text-on-surface flex items-center gap-2">
                            <span>
                              STEP 4: Faster Payments Bank Confirmation
                            </span>
                            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-secondary-fixed/50 text-on-secondary-fixed-variant uppercase">
                              Settled (00)
                            </span>
                          </span>
                          <span className="font-label-sm text-label-sm font-mono text-on-surface-variant">
                            14:18:44 GMT
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                           Immediate settlement confirmed by receiving bank (National Westminster Bank PLC). BACS/FPS clearing response code 
                          <span className="font-mono font-semibold text-on-surface">
                            00 (Settled)
                          </span>
                          . Funds instantly cleared in creator account. 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-high/40 rounded-xl p-space-lg flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-on-surface flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-[16px]">
                        fingerprint
                      </span>
                       Cryptographic Audit Proof &amp; Intellectual Property Transfer 
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                      25 Nov 2026, 14:18:44 GMT
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-surface-container-lowest p-space-sm sm:px-space-md rounded-lg">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                        SHA-256 Ledger Hash:
                      </span>
                      <span className="font-label-sm text-label-sm font-mono text-on-surface truncate select-all">
                        8f4e29b1c7a408e5d263910fbb1a947c6e0821539e01f682d3bc91428a1928df
                      </span>
                    </div>
                    <button type="button" className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium transition-colors shrink-0">
                      <span className="material-symbols-outlined text-[14px]">
                        content_copy
                      </span>
                       Copy Hash 
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm mt-1 text-on-surface-variant font-body-sm text-body-sm">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">
                        verified
                      </span>
                      <div>
                        <strong className="text-on-surface">
                          eIDAS Statutory Validity:
                        </strong>
                         Audit Record 
                        <code className="font-mono text-on-surface font-semibold text-[12px]">
                          eIDAS-GB-PACT-5028-M1-REL
                        </code>
                         digitally countersigned by Pactly Escrow UK. 
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                        copyright
                      </span>
                      <div>
                        <strong className="text-on-surface">
                          Commercial License Transferred:
                        </strong>
                         Milestone 1 Organic Distribution License irrevocably transferred to Lumina Studio Ltd. 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-xl p-space-md sm:p-space-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-md">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high text-tertiary-fixed-dim flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[24px]">
                        lock_clock
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          Remaining Escrow in Trust: Rs 305,620GBP
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Allocated for Milestone 2: 30-Day Spark Ads Whitelisting • Expected Due 02 Dec 2026
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 px-space-md py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-semibold shadow-sm">
                     Milestone 1 Closed (Paid) • M2 Pending 
                  </div>
                </div>
              </div>
              <div className="p-space-lg sm:px-space-xl py-space-md bg-surface-container-lowest border-t border-surface-container-high/60 flex flex-col sm:flex-row items-center justify-between gap-space-md">
                <button type="button" className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors">
                  <span className="material-symbols-outlined text-[16px]">
                    link
                  </span>
                   Copy Settlement Audit Receipt 
                </button>
                <div className="flex items-center gap-space-sm w-full sm:w-auto">
                  <button type="button" className="flex-1 sm:flex-initial px-space-md py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg font-semibold transition-colors flex items-center justify-center gap-1" data-go="/deals/uk-5028/milestone-2">
                    <span>
                      View Milestone 2 in Monitor
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </button>
                  <button type="button" className="flex-1 sm:flex-initial px-space-lg py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold transition-all shadow-sm flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">
                      download
                    </span>
                    <span>
                      Download Official Settlement Certificate (PDF)
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(0,0,0,0.02)] mt-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl pb-space-lg">
            <div className="md:col-span-4 flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-on-primary font-headline-sm text-headline-sm font-bold">
                  P
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
                  Pactly Financial Technologies UK Ltd
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
                Impartial digital contract escrow, milestone verification, and legal-binding custodian infrastructure engineered for digital creator partnerships.
              </p>
              <div className="flex items-center gap-space-xs text-secondary">
                <span className="material-symbols-outlined text-[16px]">
                  lock
                </span>
                <span className="font-label-sm text-label-sm font-semibold">
                  Custodial ring-fenced client funds
                </span>
              </div>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-space-lg">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm text-on-surface font-semibold uppercase tracking-wider mb-space-xs">
                  FCA Compliance
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Payments and custodial accounts safeguarded under the UK Payment Services Regulations 2017 via Tier-1 UK clearing partners.
                </p>
              </div>
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm text-on-surface font-semibold uppercase tracking-wider mb-space-xs">
                  Legal Governance
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Governed under English Commercial Law with digital signature validity in compliance with eIDAS UK statutory frameworks.
                </p>
              </div>
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm text-on-surface font-semibold uppercase tracking-wider mb-space-xs">
                  Dispute Protocols
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Strict 7-day objective dispute arbitration protocol for proof-of-work, metadata review, and contractual holdbacks.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              © 2025 Pactly Financial Technologies UK Ltd. Registered in England &amp; Wales (No. 14920841). All rights reserved.
            </span>
            <div className="flex items-center gap-space-lg">
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#" onClick={(event) => event.preventDefault()}>
                Custody Disclosure
              </a>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#" onClick={(event) => event.preventDefault()}>
                Arbitration Terms
              </a>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#" onClick={(event) => event.preventDefault()}>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
