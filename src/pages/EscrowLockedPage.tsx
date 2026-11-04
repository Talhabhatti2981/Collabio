/** Pactly — Escrow Locked & Dispatched Confirmation Modal */
export default function EscrowLockedPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-[1200px] mx-auto px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-xl">
            <a className="flex items-center gap-space-xs text-headline-sm font-headline-sm text-on-surface" data-go="/deals" href="/deals">
              <span className="tracking-tight font-semibold">
                Pactly
              </span>
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            </a>
            <nav data-active-classes="bg-surface-container-high text-on-surface font-semibold rounded-lg" className="hidden md:flex items-center gap-space-xs">
              <a aria-current="page" className="px-3 py-2 transition-colors flex items-center gap-1.5 bg-surface-container-high text-on-surface font-semibold rounded-lg" data-go="/deals" href="/deals">
                <span>
                  Deals
                </span>
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed rounded-full">
                  4
                </span>
              </a>
              <a className="px-3 py-2 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors rounded-lg" data-go="/invitations/uk-5028" href="/invitations/uk-5028">
                Invitations
              </a>
              <a className="px-3 py-2 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors rounded-lg" data-go="/profile" href="/profile">
                Profile
              </a>
              <a className="px-3 py-2 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors rounded-lg" data-go="/settings" href="/settings">
                Settings
              </a>
              <a className="px-3 py-2 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors rounded-lg" data-go="/help" href="/help">
                Help & Legal
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse"></span>
              <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-secondary-container">
                In Escrow
              </span>
              <span className="font-label-md text-label-md font-semibold text-on-secondary-fixed">
                Rs 4,606,500
              </span>
            </div>
            <div className="flex items-center gap-space-sm pl-space-xs py-1 pr-2 rounded-full bg-surface-container-low">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
              <div className="hidden xl:flex flex-col text-left pr-1">
                <span className="font-label-md text-label-md text-on-surface font-medium leading-none">
                  Lumina Studio
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-none mt-1">
                  Brand Account
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-16 bg-surface flex-1">
        <div className="max-w-[1200px] mx-auto px-margin py-space-xl">
          <div className="flex flex-col w-full relative">
            <div className="w-full opacity-40 pointer-events-none select-none filter blur-[1px] transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-lg">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
                    <span>
                      Deals
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                    <span>
                      Drafts & Negotiations
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                    <span className="text-on-surface font-semibold">
                      Deal #UK-5028
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Campaign Milestone Escrow Configuration
                  </h1>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md">
                    Status: Drafting Finalized
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md">
                    Step 4 of 4
                  </span>
                </div>
              </div>
              <div className="w-full bg-surface-container-lowest p-space-md rounded-xl shadow-sm mb-space-lg flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-label-sm font-bold">
                    ✓
                  </div>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    1. Scope of Work
                  </span>
                </div>
                <div className="h-0.5 w-12 bg-secondary"></div>
                <div className="flex items-center gap-space-sm">
                  <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-label-sm font-bold">
                    ✓
                  </div>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    2. Deliverables & Milestones
                  </span>
                </div>
                <div className="h-0.5 w-12 bg-secondary"></div>
                <div className="flex items-center gap-space-sm">
                  <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-label-sm font-bold">
                    ✓
                  </div>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    3. Legal Clauses & IP
                  </span>
                </div>
                <div className="h-0.5 w-12 bg-secondary"></div>
                <div className="flex items-center gap-space-sm">
                  <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">
                    4
                  </div>
                  <span className="font-label-md text-label-md text-primary font-bold">
                    4. Trust Deposit & Dispatch
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-space-lg">
                <div className="col-span-12 lg:col-span-8 flex flex-col gap-space-md">
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                      Deal Summary: Q4 Omnichannel Push
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Lumina Studio bilateral commitment with Charlotte Emily Clark for bespoke 4K long-form video and 30-day Spark Ads amplification.
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                    <h3 className="font-label-lg text-label-lg text-on-surface font-semibold mb-3">
                      Statutory Regulatory Escrow Terms
                    </h3>
                    <div className="space-y-2 text-on-surface-variant font-body-sm text-body-sm">
                      <p>
                        1. Ring-fenced custodial balances under UK Electronic Money Regulations 2011.
                      </p>
                      <p>
                        2. Insolvency-remote status guaranteed with NatWest AISP clearing settlement network.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-space-md">
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                      Total Vault Value
                    </span>
                    <p className="font-headline-xl text-headline-xl text-on-surface mt-1">
                      Rs 705,960
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-space-sm sm:p-space-md md:p-space-lg overflow-y-auto bg-inverse-surface/60 backdrop-blur-md">
              <div className="relative w-full max-w-[880px] my-auto bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all">
                <div className="bg-surface-container-low px-space-lg py-space-md flex flex-wrap items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-md text-label-md font-semibold tracking-wide uppercase text-on-surface-variant">
                      Deal Reference
                    </span>
                    <span className="font-label-md text-label-md font-bold text-primary">
                      #UK-5028
                    </span>
                    <span className="text-on-surface-variant/40">
                      •
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      FCA Regulated Custody Ledger
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    <span className="font-label-sm text-label-sm font-semibold tracking-wide">
                      STATUS: ESCROW RING-FENCED & PENDING COUNTERSIGN
                    </span>
                  </div>
                </div>
                <div className="p-space-lg sm:p-space-xl flex flex-col gap-space-lg max-h-[calc(90vh-140px)] overflow-y-auto">
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-start justify-between gap-space-md">
                      <div>
                        <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                          Escrow Locked & Pact Dispatched
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-1.5 leading-relaxed">
                           Deposit of 
                          <span className="font-semibold text-on-surface">
                            Rs 705,960
                          </span>
                           is ring-fenced in FCA-regulated custodial trust and the bilateral agreement has been cryptographically dispatched to 
                          <span className="font-semibold text-on-surface">
                            Charlotte Emily Clark
                          </span>
                          . 
                        </p>
                      </div>
                      <a title="Close Modal" className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors shrink-0" data-go="/deals" href="/deals">
                        <span className="material-symbols-outlined text-[22px]">
                          close
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="relative overflow-hidden bg-gradient-to-br from-surface-container-low via-surface-container-lowest to-surface-container-low p-space-lg rounded-xl shadow-sm">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-secondary"></div>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md mb-space-md">
                      <div className="flex items-center gap-space-md">
                        <div className="w-14 h-14 rounded-xl bg-secondary-fixed flex items-center justify-center shrink-0 shadow-sm text-on-secondary-fixed">
                          <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[32px]">
                            verified_user
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                            Total Committed Custody
                          </span>
                          <div className="flex items-baseline gap-2">
                            <span className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                              Rs 705,960
                            </span>
                            <span className="font-label-md text-label-md text-on-surface-variant font-semibold">
                              PKR
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-secondary font-medium flex items-center gap-1 mt-0.5">
                            <span className="material-symbols-outlined text-[16px]">
                              policy
                            </span>
                             Held under UK Electronic Money Regulations 2011 (Insolvency Remote) 
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end bg-surface-container-lowest/80 p-space-sm rounded-lg shadow-sm">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                          Custodial Vault Ref
                        </span>
                        <span className="font-label-md text-label-md text-primary font-bold font-mono tracking-tight mt-0.5">
                          VAULT-GB-STRIPE-5028-CUSTODY
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">
                            schedule
                          </span>
                           18 Oct 2026, 14:38:12 GMT 
                        </span>
                      </div>
                    </div>
                    <div className="bg-surface-container p-space-sm rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs text-on-surface">
                      <div className="flex items-center gap-space-xs overflow-hidden w-full sm:w-auto">
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                          tag
                        </span>
                        <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant shrink-0">
                          SHA-256 Audit:
                        </span>
                        <span id="audit-hash-text" className="font-label-sm text-label-sm font-mono text-on-surface truncate max-w-[280px] sm:max-w-[360px] md:max-w-[440px]">
                           7f8b91e4a3b8d960f2144b62e49c71629851726a421b38f90c43a019ef721841 
                        </span>
                      </div>
                      <button id="copy-hash-btn" className="shrink-0 px-2.5 py-1 bg-surface-container-lowest text-on-surface-variant hover:text-on-surface rounded font-label-sm text-label-sm flex items-center gap-1 shadow-sm transition-colors">
                        <span className="material-symbols-outlined text-[14px]">
                          content_copy
                        </span>
                         Copy Hash 
                      </button>
                    </div>
                    <div className="mt-space-sm pt-space-xs flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        account_balance
                      </span>
                      <span>
                        Settled Rail: 
                        <strong className="text-on-surface font-medium">
                          Barclays Commercial UK (•••• 8219)
                        </strong>
                         via NatWest Faster Payments / AISP Open Banking
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
                    <div className="md:col-span-7 bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                      <div className="flex items-center justify-between pb-space-xs mb-space-sm">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-on-surface-variant">
                          Creator Allocation
                        </span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Rs 666,000
                        </span>
                      </div>
                      <div className="space-y-space-sm">
                        <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                          <div className="flex items-center gap-space-xs">
                            <div className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-sm text-label-sm font-semibold">
                              1
                            </div>
                            <div className="flex flex-col">
                              <span className="font-label-md text-label-md text-on-surface font-medium">
                                YouTube 60s Dedicated Integration
                              </span>
                              <span className="font-label-sm text-label-sm text-on-surface-variant">
                                Release trigger: Unlisted draft approval + live broadcast URL
                              </span>
                            </div>
                          </div>
                          <span className="font-label-md text-label-md font-bold text-on-surface">
                            Rs 444,000
                          </span>
                        </div>
                        <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                          <div className="flex items-center gap-space-xs">
                            <div className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-sm text-label-sm font-semibold">
                              2
                            </div>
                            <div className="flex flex-col">
                              <span className="font-label-md text-label-md text-on-surface font-medium">
                                Spark Ads Whitelisting (30-Day Window)
                              </span>
                              <span className="font-label-sm text-label-sm text-on-surface-variant">
                                Release trigger: Valid TikTok / Shorts authorization token verified
                              </span>
                            </div>
                          </div>
                          <span className="font-label-md text-label-md font-bold text-on-surface">
                            Rs 222,000
                          </span>
                        </div>
                      </div>
                      <div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[15px] text-secondary">
                            check_circle
                          </span>
                           Pactly Custody Fee (6% • Rs 39,960): 
                          <strong className="text-on-surface font-semibold">
                            Brand Absorbed
                          </strong>
                        </span>
                        <span className="text-secondary font-semibold">
                          100% net to creator
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-5 bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-on-surface-variant block mb-space-sm">
                          Designated Recipient
                        </span>
                        <div className="flex items-center gap-space-sm mb-space-sm">
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high shrink-0 shadow-inner">
                            <img data-alt="Professional clean portrait of Charlotte Emily Clark smiling warmly in creative studio background with natural soft window lighting, cinematic photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGos_bLJBe0M5iDGzXUPyJgncoXUF8l2VRaxftVXRWKJvoYCYuX913GJp0bXbTIqTXlVScH3u-fS5raW8hQIofNkFsYGfv5dSXcFNVNGEhZgKOV4PdXDcyGq9uhajVWG78Zz6s0YNrSRNQiD0kU99o10IupmhaL3Nl9XUEme83X7z4dxe9bMniY9zOdVPY6s68-4eq6ycTFvLz7e2GPNKYByMZ4qbK3MSv3ryMyb_TudxJp_pCDu_gYA" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-lg text-label-lg font-bold text-on-surface truncate">
                              Charlotte Emily Clark
                            </span>
                            <span className="font-label-sm text-label-sm text-primary font-medium truncate">
                              @charlotte_creator
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                              charlotte@clarkcreative.co.uk
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="pt-space-sm space-y-1.5 bg-surface-container-low p-space-sm rounded-lg">
                        <div className="flex items-center justify-between font-label-sm text-label-sm">
                          <span className="text-on-surface-variant">
                            Legal Identity:
                          </span>
                          <span className="font-medium text-on-surface">
                            Verified Sole Trader (UK)
                          </span>
                        </div>
                        <div className="flex items-center justify-between font-label-sm text-label-sm">
                          <span className="text-on-surface-variant">
                            KYC Status:
                          </span>
                          <span className="inline-flex items-center gap-1 font-semibold text-secondary">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                             KYC Level 3 Cleared 
                          </span>
                        </div>
                        <div className="flex items-center justify-between font-label-sm text-label-sm">
                          <span className="text-on-surface-variant">
                            Payout Destination:
                          </span>
                          <span className="font-mono text-on-surface">
                            Monzo Bank •••• 4409
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-on-surface-variant">
                        Cryptographic Execution Pipeline
                      </span>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-[14px] animate-spin">
                          timelapse
                        </span>
                        <span>
                          Acceptance Window: 47h 58m remaining
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md relative">
                      <div className="flex flex-col gap-1.5 relative">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
                            ✓
                          </div>
                          <span className="font-label-md text-label-md font-bold text-on-surface">
                            1. Brand Execution
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant pl-8">
                           Completed 14:38 GMT. Signed by David Vance (eIDAS Qualified Electronic Signature). 
                        </p>
                      </div>
                      <div className="flex flex-col gap-1.5 relative">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
                            ✓
                          </div>
                          <span className="font-label-md text-label-md font-bold text-on-surface">
                            2. Encrypted Dispatch
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant pl-8">
                           Dispatched via SMS passkey & secure link to creator's registered device. 
                        </p>
                      </div>
                      <div className="flex flex-col gap-1.5 relative">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-on-primary animate-ping"></span>
                          </div>
                          <span className="font-label-md text-label-md font-bold text-primary">
                            3. Creator Review
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface pl-8 font-medium">
                           Active 48h window. Auto-reclaim safety rule triggers 20 Oct 2026, 14:38 GMT if unaccepted. 
                        </p>
                      </div>
                      <div className="flex flex-col gap-1.5 opacity-60">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm font-semibold">
                            4
                          </div>
                          <span className="font-label-md text-label-md font-semibold text-on-surface-variant">
                            4. Webhook Activation
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant pl-8">
                           Pending countersign. YouTube Data API v3 auto-tracking standing by. 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm overflow-hidden flex-1">
                      <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          link
                        </span>
                      </div>
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">
                          One-Time Escrow Acceptance Passkey URL
                        </span>
                        <span className="font-label-md text-label-md font-mono text-on-surface truncate">
                           https://pactly.co/pact/uk-5028/charlotte-review?pass=e9a8f2701d891c49b062e49c71629851 
                        </span>
                      </div>
                    </div>
                    <button className="shrink-0 px-4 py-2 bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium hover:bg-surface-container-high rounded-lg shadow-sm transition-colors flex items-center justify-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">
                        share
                      </span>
                      <span>
                        Copy Shareable Pass
                      </span>
                    </button>
                  </div>
                </div>
                <div className="bg-surface-container-lowest px-space-lg py-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
                  <div className="flex flex-wrap items-center gap-space-xs w-full sm:w-auto">
                    <button className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        picture_as_pdf
                      </span>
                      <span>
                        Download Pact Certificate (PDF)
                      </span>
                    </button>
                    <button className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px]">
                        receipt_long
                      </span>
                      <span>
                        Live Escrow Ledger
                      </span>
                    </button>
                  </div>
                  <a className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-semibold hover:bg-primary-container shadow-sm flex items-center justify-center gap-2 transition-all" data-go="/deals" href="/deals">
                    <span>
                      Go to Deals Dashboard
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_6px_rgba(0,0,0,0.02)] mt-auto">
        <div className="max-w-[1200px] mx-auto px-margin py-space-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md mb-space-md">
            <div className="flex items-center gap-space-xs font-headline-sm text-headline-sm text-on-surface">
              <span className="tracking-tight font-semibold">
                Pactly
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              <span className="text-body-sm font-body-sm text-on-surface-variant ml-2">
                Creator Escrow & Milestone Infrastructure
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-space-md font-label-md text-label-md text-on-surface-variant">
              <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Custodian Terms
              </a>
              <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Escrow Protocol
              </a>
              <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Privacy Policy
              </a>
              <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Complaints & Redress
              </a>
            </div>
          </div>
          <div className="pt-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
            <p className="max-w-3xl leading-relaxed text-body-sm font-body-sm text-on-surface-variant">
              Pactly Financial Services Ltd operates with dedicated client custody accounts held under regulatory supervision pursuant to the Electronic Money Regulations 2011. Escrow trust balances are ring-fenced under UK statutory trust framework. Registered in England & Wales (No. 12894102). Authorised payment institution partner network.
            </p>
            <p className="text-label-sm font-label-sm shrink-0">
              © 2025 Pactly Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
