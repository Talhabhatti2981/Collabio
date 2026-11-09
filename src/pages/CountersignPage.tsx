/** Collabio — Creator View: Countersign & Accept Pact */
export default function CountersignPage() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-[1200px] mx-auto px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-lg">
            <div className="flex items-center gap-space-xs">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-on-primary font-headline-sm text-headline-sm">
                P
              </div>
              <span className="font-headline-md text-headline-md tracking-tight text-on-surface">
                Collabio
              </span>
            </div>
            <nav data-active-classes="bg-surface-container-high text-on-surface font-label-lg text-label-lg rounded-lg" className="hidden lg:flex items-center gap-space-xs">
              <a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-colors" data-go="/deals" href="/deals">
                Deals
              </a>
              <a aria-current="page" className="px-space-md py-space-xs transition-colors bg-surface-container-high text-on-surface font-label-lg text-label-lg rounded-lg" data-go="/invitations/uk-5028" href="/invitations/uk-5028">
                Invitations
              </a>
              <a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-colors" data-go="/profile" href="/profile">
                Profile
              </a>
              <a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-colors" data-go="/settings" href="/settings">
                Settings
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-secondary-container text-on-secondary-container">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm tracking-wider uppercase">
                Rs 705,960IN ESCROW RING-FENCED
              </span>
            </div>
            <div className="flex items-center gap-space-sm pl-space-xs">
              <div className="hidden md:flex flex-col text-right">
                <span className="font-label-md text-label-md text-on-surface">
                  Charlotte Emily Clark
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  @charlotte_creator
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
          <div className="w-full max-w-[1200px] mx-auto px-margin py-space-xl flex flex-col gap-space-lg">
            <div className="flex flex-col gap-space-sm">
              <div className="flex flex-wrap items-center justify-between gap-space-sm">
                <nav className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
                  <a className="hover:text-primary transition-colors" data-go="/deals" href="/deals">
                    Deals
                  </a>
                  <span className="material-symbols-outlined text-[14px]">
                    chevron_right
                  </span>
                  <a className="hover:text-primary transition-colors" data-go="/invitations/uk-5028" href="/invitations/uk-5028">
                    Invitations
                  </a>
                  <span className="material-symbols-outlined text-[14px]">
                    chevron_right
                  </span>
                  <span className="text-on-surface font-medium">
                    Pact #UK-5028
                  </span>
                  <span className="material-symbols-outlined text-[14px]">
                    chevron_right
                  </span>
                  <span className="text-primary font-semibold">
                    Countersign & Accept
                  </span>
                </nav>
                <div className="flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-surface-container-high text-tertiary font-label-md text-label-md shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed-dim opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
                  </span>
                  <span className="material-symbols-outlined text-[16px]">
                    hourglass_top
                  </span>
                  <span>
                    <strong>
                      47 hrs 52 mins
                    </strong>
                     remaining in bilateral acceptance window
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pt-space-xs">
                <div>
                  <div className="flex items-center gap-space-sm mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-surface-variant text-on-surface-variant uppercase tracking-wider">
                       Legal Framework Model 2.4 (England & Wales) 
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-container text-on-secondary-container font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                       Pre-Funded & Locked 
                    </span>
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                     Review Commercial Pact & Countersign 
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-3xl">
                    <strong>
                      Lumina Studio Ltd
                    </strong>
                     has approved, eIDAS-signed, and pre-funded 
                    <strong>
                      Rs 705,960
                    </strong>
                     into segregated custodial escrow. Funds cannot be unilaterally cancelled or reclaimed while work is within contractual milestone windows. 
                  </p>
                </div>
                <div className="flex items-center gap-space-xs shrink-0">
                  <button type="button" className="flex items-center gap-space-xs px-3 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      download
                    </span>
                    <span>
                      Download Draft PDF
                    </span>
                  </button>
                  <button type="button" className="flex items-center gap-space-xs px-3 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      history_edu
                    </span>
                    <span>
                      Audit Trail
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <div className="grid grid-cols-5 gap-2 relative">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-md shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">
                      check
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">
                      1. Draft Scope
                    </span>
                    <span className="font-body-sm text-[11px] text-secondary">
                      Complete
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-md shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">
                      check
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">
                      2. Brand Signed
                    </span>
                    <span className="font-body-sm text-[11px] text-secondary">
                      eIDAS Stamped
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-md shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">
                      check
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">
                      3. Custody Funded
                    </span>
                    <span className="font-body-sm text-[11px] text-secondary">
                      100% In Escrow
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md shrink-0 ring-4 ring-primary-fixed shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">
                      draw
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-primary font-bold truncate">
                      4. Countersign
                    </span>
                    <span className="font-body-sm text-[11px] text-primary font-medium">
                      Awaiting You
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 opacity-50">
                  <div className="w-7 h-7 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-md shrink-0">
                    <span className="font-label-sm">
                      5
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-on-surface-variant truncate">
                      5. Execution
                    </span>
                    <span className="font-body-sm text-[11px] text-on-surface-variant">
                      Production Run
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-gradient-to-r from-secondary/10 via-surface-container-lowest to-primary/5 rounded-xl p-space-md shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 shadow-sm">
                  <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[28px]">
                    verified_user
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      FCA Regulated Ring-Fenced Custody
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold uppercase bg-secondary text-on-secondary tracking-wider">
                      Rs 666,000Net Protected
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                     Custody Vault: 
                    <code className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-mono text-[12px]">
                      VAULT-GB-STRIPE-5028-CUSTODY
                    </code>
                     • NatWest Faster Payments deposit settled. Zero deduction guarantee on creator payout. 
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-space-md shrink-0 text-left md:text-right">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Autonomous Release Timer
                  </span>
                  <span className="font-label-lg text-label-lg font-bold text-secondary flex items-center gap-1 md:justify-end">
                    <span className="material-symbols-outlined text-[16px]">
                      bolt
                    </span>
                     48h Ghosting Rule Active 
                  </span>
                </div>
                <div className="h-8 w-px bg-surface-variant"></div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Arbitration Cap
                  </span>
                  <span className="font-label-lg text-label-lg font-bold text-on-surface">
                    Rs 27,750Fast-Track
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              <div className="lg:col-span-8 flex flex-col gap-space-lg">
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container-high">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-sm text-primary font-bold shadow-inner">
                         L 
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Lumina Studio Ltd
                          </h3>
                          <span className="px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-surface-container-high text-on-surface-variant">
                            CRN: 14298102
                          </span>
                          <span style={{ "fontVariationSettings": "'FILL' 1" }} title="Companies House &amp; KYC Verified" className="material-symbols-outlined text-secondary text-[18px]">
                            check_circle
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                           Authorized signatory: 
                          <strong className="text-on-surface">
                            David Vance
                          </strong>
                           (Managing Director) 
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        verified
                      </span>
                      <div className="flex flex-col text-left">
                        <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider leading-none">
                          eIDAS Cryptographic Seal
                        </span>
                        <span className="font-label-md text-label-md font-semibold text-on-surface">
                          18 Oct 2026, 14:32:19 GMT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-low rounded-lg p-space-md flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                      format_quote
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                        Personal Note from David Vance:
                      </span>
                      <p className="font-body-md text-body-md text-on-surface italic mt-0.5">
                         “Hi Charlotte, thrilled to partner on the Q4 Tech Stack Integration. Milestone terms and escrow funding details are locked inside. Let us know if you need any adjustments to the 18 Nov delivery schedule!” 
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-[11px] pt-1">
                    <span className="truncate">
                      Custody Contract Fingerprint (SHA-256): 
                      <code className="text-on-surface font-mono">
                        7f8b91e4a3b8d960f2144b...ef721841
                      </code>
                    </span>
                    <a className="text-primary hover:underline flex items-center gap-0.5 shrink-0 ml-2" href="#" onClick={(event) => event.preventDefault()}>
                      <span>
                        View On-Chain Registry
                      </span>
                      <span className="material-symbols-outlined text-[12px]">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Milestones & Autonomous Verification
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Funds release automatically upon verification criteria fulfillment
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-label-sm font-label-sm bg-surface-container-high text-on-surface font-medium">
                       2 Scheduled Milestones 
                    </span>
                  </div>
                  <div className="rounded-xl bg-surface p-space-md flex flex-col gap-space-sm transition-all hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-surface-container-high">
                      <div className="flex items-center gap-space-xs">
                        <span className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm font-bold flex items-center justify-center">
                          1
                        </span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          60s–90s Dedicated YouTube Integration
                        </span>
                      </div>
                      <div className="flex items-center gap-space-sm self-start sm:self-auto">
                        <span className="px-2 py-0.5 rounded text-label-sm font-label-sm bg-secondary-container text-on-secondary-container font-semibold">
                           Rs 444,000Net Payout 
                        </span>
                        <span className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">
                            calendar_today
                          </span>
                           Due: 18 Nov 2026 
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-1">
                      <div>
                        <h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                          Required Deliverable Scope
                        </h4>
                        <ul className="mt-1 space-y-1 font-body-sm text-body-sm text-on-surface">
                          <li className="flex items-start gap-1.5">
                            <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">
                              check_circle
                            </span>
                            <span>
                              Mid-roll sponsored segment integrated in first 3 minutes of upload.
                            </span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">
                              check_circle
                            </span>
                            <span>
                              Pinned comment with unique Lumina tracking URL within 1 hour of release.
                            </span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">
                              check_circle
                            </span>
                            <span>
                              Top-level description placement containing provided brand coupon.
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col justify-between">
                        <div>
                          <h4 className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">
                              smart_toy
                            </span>
                             Automated Inspection Protocol 
                          </h4>
                          <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                             Once submitted, Collabio bot validates public YouTube URL, segment run-time, and pinned link. Upon confirmation or
                            <strong>
                              48 hours of brand inactivity
                            </strong>
                            , Rs 444,000releases to your NatWest account immediately. 
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-surface-container-high text-[11px] text-on-surface-variant">
                          <span className="material-symbols-outlined text-[14px] text-secondary">
                            security
                          </span>
                          <span>
                            Brand cannot cancel escrow once YouTube draft link is provided.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-surface p-space-md flex flex-col gap-space-sm transition-all hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-surface-container-high">
                      <div className="flex items-center gap-space-xs">
                        <span className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm font-bold flex items-center justify-center">
                          2
                        </span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          30-Day Spark Ads Whitelisting Authorization
                        </span>
                      </div>
                      <div className="flex items-center gap-space-sm self-start sm:self-auto">
                        <span className="px-2 py-0.5 rounded text-label-sm font-label-sm bg-secondary-container text-on-secondary-container font-semibold">
                           Rs 222,000Net Payout 
                        </span>
                        <span className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">
                            calendar_today
                          </span>
                           Due: 25 Nov 2026 
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-1">
                      <div>
                        <h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                          Required Deliverable Scope
                        </h4>
                        <ul className="mt-1 space-y-1 font-body-sm text-body-sm text-on-surface">
                          <li className="flex items-start gap-1.5">
                            <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">
                              check_circle
                            </span>
                            <span>
                              Generate & supply TikTok Ads Authorization Code for corresponding video.
                            </span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">
                              check_circle
                            </span>
                            <span>
                              Whitelist active for strictly 30 consecutive calendar days.
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col justify-between">
                        <div>
                          <h4 className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">
                              sync_saved_locally
                            </span>
                             Instant Release on Token Delivery 
                          </h4>
                          <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                             Escrow releases instantly upon pasting verified valid advertising code into the Collabio creator portal. No revision requests permissible on ads code.
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-surface-container-high text-[11px] text-on-surface-variant">
                          <span className="material-symbols-outlined text-[14px] text-secondary">
                            lock_clock
                          </span>
                          <span>
                            Non-extendable without subsequent paid commercial pact.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[22px]">
                        gavel
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Standard Legal Safeguards (Schedule 1–4)
                      </h2>
                    </div>
                    <span className="text-label-sm text-label-sm text-secondary font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        shield
                      </span>
                       SRA Solicitor Approved 
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
                    <div className="p-space-sm rounded-lg bg-surface flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-primary font-label-md text-label-md font-semibold">
                        <span className="material-symbols-outlined text-[18px]">
                          copyright
                        </span>
                        <span>
                          IP & Ownership
                        </span>
                      </div>
                      <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                        <strong>
                          Charlotte Emily Clark retains 100% core copyright.
                        </strong>
                         Lumina Studio Ltd receives a 12-month non-exclusive digital promotional license. No perpetuity or sub-licensing rights. 
                      </p>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-primary font-label-md text-label-md font-semibold">
                        <span className="material-symbols-outlined text-[18px]">
                          rule
                        </span>
                        <span>
                          Revision Safeguard
                        </span>
                      </div>
                      <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                         Strict limit of 
                        <strong>
                          2 rounds of standard edits
                        </strong>
                        . Revisions must align with original creative brief. Out-of-scope shifts require an escrow supplement addendum. 
                      </p>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-primary font-label-md text-label-md font-semibold">
                        <span className="material-symbols-outlined text-[18px]">
                          timer_off
                        </span>
                        <span>
                          Anti-Ghosting Clause 4.2
                        </span>
                      </div>
                      <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                         Brand has 
                        <strong>
                          48 hours
                        </strong>
                         to review submitted content. If no actionable change request is lodged within 48 hours, escrow triggers an autonomous 100% payout. 
                      </p>
                    </div>
                  </div>
                  <details className="group bg-surface-container-low rounded-lg transition-all">
                    <summary className="flex items-center justify-between p-space-md cursor-pointer select-none">
                      <span className="font-label-md text-label-md font-semibold text-on-surface flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          article
                        </span>
                         Read Full Legal Contract Text (Sections 1.1 through 14.8) 
                      </span>
                      <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform text-[18px]">
                        expand_more
                      </span>
                    </summary>
                    <div className="p-space-md pt-0 font-body-sm text-body-sm text-on-surface-variant border-t border-surface-container-high space-y-2 mt-2 leading-relaxed">
                      <p>
                        <strong>
                          Jurisdiction:
                        </strong>
                         This agreement is governed by the laws of England and Wales. Collabio Escrow Services Ltd serves as appointed custodian and neutral payment facilitator under client money custodial protocols.
                      </p>
                      <p>
                        <strong>
                          Non-Circumvention:
                        </strong>
                         Both parties covenant that milestone delivery and related compensatory disbursements relating to Pact #UK-5028 shall route solely via the escrow infrastructure to ensure statutory consumer and supplier protections. 
                      </p>
                      <p>
                        <strong>
                          Expedited Dispute Resolution:
                        </strong>
                         Any unsettled disputes post 72-hour informal window are submitted to Collabio Fast-Track CEDR/SRA accredited panel arbitrator. Award is final and binding with legal cost indemnity capped at Rs 27,750.
                      </p>
                    </div>
                  </details>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md relative overflow-hidden">
                  <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
                    <div>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Execution & Countersignature
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Sign using your linked eIDAS credentials to activate custodial protection
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                        CEC
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="font-label-sm font-semibold text-on-surface">
                          Charlotte Emily Clark
                        </span>
                        <span className="font-label-sm text-[10px] text-secondary font-medium">
                          KYC Level 3 Verified Contractor
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-sm pt-space-xs">
                    <label className="flex items-start gap-space-sm p-space-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer select-none">
                      <input defaultChecked={true} id="consent-scope" type="checkbox" className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary accent-primary" />
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-on-surface font-medium">
                           I accept the commercial scope, milestone deliverables schedule, and Schedules 1–4 legal terms. 
                        </span>
                        <span className="font-body-sm text-[12px] text-on-surface-variant">
                           Commitment to deliver YouTube integration by 18 Nov 2026 and Spark Ads token by 25 Nov 2026. 
                        </span>
                      </div>
                    </label>
                    <label className="flex items-start gap-space-sm p-space-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer select-none">
                      <input defaultChecked={true} id="consent-eidas" type="checkbox" className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary accent-primary" />
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-on-surface font-medium">
                           I consent to eIDAS digital signature execution and autonomous escrow distribution under English Commercial Law. 
                        </span>
                        <span className="font-body-sm text-[12px] text-on-surface-variant">
                           NatWest Business Account (****4910) designated as the sole irrevocable settlement recipient. 
                        </span>
                      </div>
                    </label>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-md border-t border-surface-container-high">
                    <div className="flex items-center gap-space-xs w-full sm:w-auto">
                      <button type="button" className="w-full sm:w-auto px-space-lg py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]" data-go="/deals/uk-5028">
                        <span className="material-symbols-outlined text-[20px]">
                          draw
                        </span>
                        <span>
                          Countersign & Activate Escrow (Rs 666,000Protected)
                        </span>
                      </button>
                    </div>
                    <div className="flex items-center gap-space-xs w-full sm:w-auto justify-end">
                      <button type="button" className="px-space-md py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md font-medium transition-colors" data-go="/creator/uk-5028/revise">
                         Propose Revision 
                      </button>
                      <button type="button" className="px-space-md py-2.5 rounded-lg text-error hover:bg-error-container/40 font-label-md text-label-md font-medium transition-colors" data-go="/creator">
                         Decline Pact 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-space-md sticky top-20">
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high">
                    <span className="font-label-md text-label-md text-on-surface-variant font-medium uppercase tracking-wider">
                      Your Guaranteed Net Payout
                    </span>
                    <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-secondary text-[20px]">
                      lock
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1">
                      <span className="font-headline-xl text-[42px] leading-tight font-extrabold text-on-surface tracking-tight">
                        Rs 666,000
                      </span>
                      <span className="font-label-lg text-label-lg font-bold text-on-surface-variant">
                        PKR
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-secondary font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[16px]">
                        check_circle
                      </span>
                      <span>
                        100% In Escrow • Zero Fees Deducted
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pt-2 border-t border-surface-container-high text-body-sm text-body-sm">
                    <div className="flex justify-between items-center text-on-surface">
                      <span>
                        Milestone 1: Dedicated Video
                      </span>
                      <span className="font-medium">
                        Rs 444,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-on-surface">
                      <span>
                        Milestone 2: 30d Whitelisting
                      </span>
                      <span className="font-medium">
                        Rs 222,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-on-surface-variant pt-1 border-t border-surface-container">
                      <span className="flex items-center gap-1">
                         Platform Escrow Fee (6%) 
                        <span title="Lumina Studio Ltd pays all processing costs" className="material-symbols-outlined text-[14px] text-on-surface-variant">
                          info
                        </span>
                      </span>
                      <span className="text-secondary font-medium">
                        Rs 0(Brand Paid Rs 39,960)
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-label-sm">
                      <span className="font-semibold text-on-surface flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                         Custody Status 
                      </span>
                      <span className="text-secondary font-bold">
                        100% Ring-Fenced
                      </span>
                    </div>
                    <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
                       Deposit received via NatWest Faster Payments into Segregated Client Trust Account 
                      <strong>
                        GB-COLLABIO-0028
                      </strong>
                      . Brand cannot withdraw without creator mutual signed release. 
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-bold text-[12px] text-primary">
                         NW 
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                          NatWest Business Account
                        </span>
                        <span className="font-body-sm text-[11px] text-on-surface-variant">
                          Sort: 60-00-01 • ****4910
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container">
                       Verified 
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                      Counterparty Trust Profile
                    </span>
                    <span className="text-secondary font-label-sm text-label-sm font-bold flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[14px]">
                        stars
                      </span>
                       Tier 1 Brand 
                    </span>
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center font-bold text-headline-sm text-primary">
                       L 
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                        Lumina Studio Ltd
                      </h4>
                      <p className="font-body-sm text-[12px] text-on-surface-variant">
                        Creative Agency • London, UK
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-surface-container-high">
                    <div className="p-2 rounded bg-surface text-center">
                      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                        42
                      </span>
                      <p className="font-body-sm text-[11px] text-on-surface-variant">
                        Completed Pacts
                      </p>
                    </div>
                    <div className="p-2 rounded bg-surface text-center">
                      <span className="font-headline-sm text-headline-sm font-bold text-secondary">
                        100%
                      </span>
                      <p className="font-body-sm text-[11px] text-on-surface-variant">
                        Payout Release Rate
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-[11px] pt-1">
                    <span className="material-symbols-outlined text-secondary text-[14px]">
                      check
                    </span>
                    <span>
                      Zero contract disputes filed across 24 calendar months
                    </span>
                  </div>
                </div>
                <div className="rounded-xl bg-surface-container-low p-space-md flex items-center gap-space-sm shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[28px] shrink-0">
                    assured_workload
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                      Harrison & Croft LLP (London)
                    </span>
                    <p className="font-body-sm text-[11px] text-on-surface-variant">
                       SRA regulated bilateral contract approval. Enforceable pursuant to UK Electronic Communications Act 2000. 
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between px-space-md py-space-sm rounded-lg bg-surface font-body-sm text-body-sm text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      support_agent
                    </span>
                    <span>
                      Need advice before signing?
                    </span>
                  </div>
                  <a className="font-label-sm text-label-sm text-primary font-semibold hover:underline" href="#" onClick={(event) => event.preventDefault()}>
                    Escrow Advisor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.02)] py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
          <div>
            © 2025 Collabio Escrow Services Ltd (UK). FCA Appointed Representative standards. Funds ring-fenced in tier-1 custody.
          </div>
          <div className="flex items-center gap-space-lg">
            <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
              Legal Safeguards
            </a>
            <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
              Terms of Escrow
            </a>
            <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
              Arbitration Protocol
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
