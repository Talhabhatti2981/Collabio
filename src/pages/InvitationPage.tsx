/** Pactly — Respond to an Invitation (Creator counter-offer & accept flow) */
export default function InvitationPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="bg-surface-container-low px-margin-mobile lg:px-margin">
          <div className="max-w-7xl mx-auto h-8 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[14px]">
                verified_user
              </span>
              <span>
                Custody under FCA-regulated partner rails • Stripe Connect segregated client balances
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-space-md">
              <span className="flex items-center gap-space-xs text-secondary font-label-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Escrow Status: Protected
              </span>
              <span className="text-outline-variant">
                |
              </span>
              <span>
                UK &amp; Cross-Border Commercial Agreements
              </span>
            </div>
          </div>
        </div>
        <div className="h-16 px-margin-mobile lg:px-margin bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-xl">
              <a className="flex items-center gap-2 group" data-go="/deals" href="/deals">
                <span className="font-headline-md text-headline-md tracking-tight font-bold text-on-surface">
                  Pactly
                </span>
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              </a>
              <nav data-active-classes="bg-primary-container text-on-primary font-label-md rounded-lg" className="hidden lg:flex items-center gap-space-xs">
                <a className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-go="/deals" href="/deals">
                  Deals
                  <span className="ml-1 px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary text-[10px] font-bold leading-none">
                    2
                  </span>
                </a>
                <a className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-go="/invitations/uk-5028" href="/invitations/uk-5028">
                  Invitations
                </a>
                <a className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-go="/creator" href="/creator">
                  Earnings &amp; Payouts
                </a>
                <a className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-go="/profile" href="/profile">
                  Profile
                </a>
                <a className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-go="/settings" href="/settings">
                  Settings
                </a>
                <a className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-go="/help" href="/help">
                  Help &amp; Legal
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-space-md">
              <div className="hidden sm:flex items-center gap-space-sm px-space-md py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                <span className="material-symbols-outlined text-[16px] text-on-secondary-fixed">
                  lock
                </span>
                <span className="font-semibold">
                  Guaranteed in Escrow:
                </span>
                <span>
                  Rs 1,239,500
                </span>
              </div>
              <div className="flex items-center gap-space-sm pl-space-sm">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary text-[18px]">
                    person
                  </span>
                </div>
                <div className="hidden md:flex flex-col text-left">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    @charlotte_creator
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Creator Account
                  </span>
                </div>
                <button aria-label="User menu" type="button" className="text-on-surface-variant hover:text-on-surface focus:outline-none">
                  <span className="material-symbols-outlined text-[20px]">
                    expand_more
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-24 bg-surface flex-grow">
        <div className="flex flex-col w-full">
          <div className="max-w-6xl mx-auto px-margin-mobile lg:px-margin py-space-lg w-full flex flex-col gap-space-lg">
            <div className="flex flex-col gap-space-sm">
              <div className="flex flex-wrap items-center justify-between gap-space-sm">
                <nav aria-label="Breadcrumbs" className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
                  <a className="hover:text-primary transition-colors" data-go="/deals" href="/deals">
                    Deals
                  </a>
                  <span className="text-outline-variant">
                    /
                  </span>
                  <span className="font-semibold text-on-surface">
                    Deal #UK-5012
                  </span>
                  <span className="text-outline-variant">
                    /
                  </span>
                  <span className="text-primary-container font-semibold">
                    Invitation Response
                  </span>
                </nav>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                     Action Required 
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-low text-primary-container font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]">
                      edit_note
                    </span>
                     1 of 2 Allowed Amendments Remaining 
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md border-l-4 border-l-tertiary-fixed-dim">
                <div className="flex items-start md:items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-tertiary">
                    <span className="material-symbols-outlined text-[18px]">
                      timer
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-headline-sm text-headline-sm text-on-surface">
                        Deal Offer Expires in 41h 28m
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed tracking-wide uppercase">
                        Pre-Funded
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                       Funds 
                      <strong className="text-on-surface font-semibold">
                        Rs 666,000
                      </strong>
                       are pre-authorized and held in ring-fenced Stripe Escrow custody under English Commercial Law (Pactly Custody Protocol 4.2). 
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 self-end md:self-auto font-label-sm text-label-sm text-secondary">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  <span>
                    Custodial Escrow Active
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-surface-container-highest pb-space-xs">
              <div role="tablist" className="flex items-center gap-2 p-1 bg-surface-container-low rounded-xl">
                <button aria-selected="true" id="tab-btn-review" role="tab" className="tab-button px-4 py-2 rounded-lg font-label-md text-label-md font-semibold transition-all duration-150 flex items-center gap-2 bg-surface-container-lowest text-primary-container shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">
                    contract
                  </span>
                  <span>
                    Review &amp; Accept (Standard)
                  </span>
                </button>
                <button aria-selected="false" id="tab-btn-counter" role="tab" className="tab-button px-4 py-2 rounded-lg font-label-md text-label-md font-medium text-on-surface-variant hover:text-on-surface transition-all duration-150 flex items-center gap-2" data-go="/creator/uk-5028/revise">
                  <span className="material-symbols-outlined text-[16px]">
                    swap_horiz
                  </span>
                  <span>
                    Propose Amendment
                  </span>
                  <span className="px-1.5 py-0.2 bg-primary-fixed text-on-primary-fixed text-[10px] font-bold rounded-full">
                    1 left
                  </span>
                </button>
                <button aria-selected="false" id="tab-btn-decline" role="tab" className="tab-button px-4 py-2 rounded-lg font-label-md text-label-md font-medium text-on-surface-variant hover:text-error transition-all duration-150 flex items-center gap-2" data-go="/creator">
                  <span className="material-symbols-outlined text-[16px]">
                    cancel
                  </span>
                  <span>
                    Decline Invitation
                  </span>
                </button>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                <span>
                  Model Agreement: 
                  <strong>
                    UK-CREATOR-2026-v2
                  </strong>
                </span>
                <span className="text-outline-variant">
                  •
                </span>
                <a className="text-primary-container hover:underline inline-flex items-center gap-0.5" href="#" onClick={(event) => event.preventDefault()}>
                  PDF Copy 
                  <span className="material-symbols-outlined text-[13px]">
                    north_east
                  </span>
                </a>
              </div>
            </div>
            <div id="view-review" className="flex flex-col gap-space-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                <div className="lg:col-span-7 flex flex-col gap-space-lg">
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-space-md">
                        <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center font-headline-md text-headline-md font-bold text-primary-container">
                           LS 
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <h2 className="font-headline-sm text-headline-sm text-on-surface">
                              Lumina Studio Ltd
                            </h2>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
                              <span className="material-symbols-outlined text-[12px]">
                                verified
                              </span>
                               Companies House Verified 
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            CRN: 14298102 · Registered in England &amp; Wales
                          </span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-outline-variant">
                        business
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm pt-space-xs">
                      <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Authorized Signatory
                        </span>
                        <span className="font-label-md text-label-md font-semibold text-on-surface">
                          David Vance
                        </span>
                        <span className="text-[11px] text-on-surface-variant">
                          Managing Director
                        </span>
                      </div>
                      <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Pactly Track Record
                        </span>
                        <span className="font-label-md text-label-md font-semibold text-secondary">
                          38 Pacts Completed
                        </span>
                        <span className="text-[11px] text-on-surface-variant">
                          100% On-time Release
                        </span>
                      </div>
                      <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col col-span-2 sm:col-span-1">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Counterparty Rating
                        </span>
                        <span className="font-label-md text-label-md font-semibold text-on-surface flex items-center gap-1">
                          <span>
                            5.0
                          </span>
                          <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">
                            star
                          </span>
                          <span className="text-[11px] font-normal text-on-surface-variant">
                            (42 reviews)
                          </span>
                        </span>
                        <span className="text-[11px] text-secondary font-medium">
                          Zero Dispute History
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-highest">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[20px]">
                          assignment
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">
                          Contracted Scope of Works
                        </h3>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Schedule 1 Deliverables
                      </span>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">
                          Deliverable 01 — Dedicated YouTube Sponsorship
                        </span>
                        <span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-surface-container text-on-surface">
                          Milestone 1
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                         1× 60-second integrated mid-roll sponsorship segment in an upcoming tech/lifestyle long-form video. Dedicated call-to-action with tracked vanity link placed above fold in video description and pinned comment. 
                      </p>
                      <div className="flex flex-wrap items-center gap-space-sm mt-space-xs pt-space-xs border-t border-surface-container">
                        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-[14px]">
                            event
                          </span>
                           First Cut Submission: 
                          <strong>
                            14 Nov 2026, 17:00 GMT
                          </strong>
                        </span>
                        <span className="text-outline-variant">
                          •
                        </span>
                        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-[14px]">
                            published_with_changes
                          </span>
                           Max 2 Revision Rounds 
                        </span>
                      </div>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">
                          Deliverable 02 — Paid Whitelisting &amp; Dark Posting
                        </span>
                        <span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-surface-container text-on-surface">
                          Milestone 2
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                         30-day non-exclusive advertising access via Meta Partnership Ads &amp; TikTok Spark Ads code. Client permitted to run dark ad variants utilizing creator likeness for agreed campaign term only. 
                      </p>
                      <div className="flex flex-wrap items-center gap-space-sm mt-space-xs pt-space-xs border-t border-surface-container">
                        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-[14px]">
                            date_range
                          </span>
                           Window: 
                          <strong>
                            15 Nov – 15 Dec 2026
                          </strong>
                        </span>
                        <span className="text-outline-variant">
                          •
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Geotarget: United Kingdom Only
                        </span>
                      </div>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-high/60 flex flex-col gap-space-xs">
                      <h4 className="font-label-md text-label-md font-semibold text-on-surface flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-secondary">
                          gavel
                        </span>
                         Autonomous Commercial Protections (Schedule 4) 
                      </h4>
                      <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1 list-disc pl-4">
                        <li>
                          <strong className="text-on-surface">
                            Automated Acceptance Window:
                          </strong>
                           Brand must complete review within 72 hours of asset upload. If unresponsive, pact automatically authorizes payout milestone.
                        </li>
                        <li>
                          <strong className="text-on-surface">
                            Category Exclusivity:
                          </strong>
                           30-day blackout limited strictly to direct-to-consumer sustainable apparel brands.
                        </li>
                        <li>
                          <strong className="text-on-surface">
                            Raw Footage Rights:
                          </strong>
                           Not included. B-roll remains sole IP of creator.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[18px] text-primary-container">
                            description
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            Standard UK Commercial Pact Schedule (Model 2.4)
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">
                              check_circle
                            </span>
                             Legal review passed 
                          </span>
                          <span className="material-symbols-outlined text-on-surface-variant transition-transform group-open:rotate-180">
                            expand_more
                          </span>
                        </div>
                      </summary>
                      <div className="mt-space-md pt-space-md border-t border-surface-container-highest font-body-sm text-body-sm text-on-surface-variant max-h-48 overflow-y-auto space-y-3 leading-relaxed">
                        <p>
                          <strong>
                            1. Custodial Assurance:
                          </strong>
                           The Principal (Lumina Studio Ltd) has transferred 100% of the gross Consideration into the designated Escrow Account prior to Execution. Funds shall not revert to Principal without Mutual Consent or Arbitration Determination under CEDR rules.
                        </p>
                        <p>
                          <strong>
                            2. Delivery &amp; Verification:
                          </strong>
                           Creator submits delivery links via Pactly API. Time-stamped logs verify public availability or draft access for brand approval.
                        </p>
                        <p>
                          <strong>
                            3. Tax &amp; National Insurance:
                          </strong>
                           Charlotte Clark acts as an independent sole trader. Payout is processed gross of creator direct tax obligations in accordance with HMRC self-assessment guidelines.
                        </p>
                      </div>
                    </details>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-space-lg">
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-highest">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          account_balance_wallet
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">
                          Escrow Ledger Breakdown
                        </h3>
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary font-semibold">
                        PKR (£)
                      </span>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-2">
                      <div className="flex items-center justify-between font-label-md text-label-md">
                        <span className="text-on-surface-variant">
                          Gross Client Deposit
                        </span>
                        <span className="font-semibold text-on-surface">
                          Rs 666,000
                        </span>
                      </div>
                      <div className="flex items-center justify-between font-label-md text-label-md">
                        <span className="text-on-surface-variant flex items-center gap-1">
                           Pactly Custody &amp; Legal Protocol (6%) 
                          <span title="Covers dispute arbitration guarantee &amp; payment rails" className="material-symbols-outlined text-[13px] text-outline-variant">
                            info
                          </span>
                        </span>
                        <span className="font-medium text-error">
                          -Rs 39,960
                        </span>
                      </div>
                      <div className="h-px bg-surface-container-highest my-1"></div>
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block">
                            Your Net Guaranteed Payout
                          </span>
                          <span className="text-[11px] text-secondary">
                            No hidden processing deductions
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="font-headline-xl text-headline-xl font-bold text-primary-container leading-none">
                            Rs 626,040
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                        bolt
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface">
                        <strong>
                          Disbursement Speed:
                        </strong>
                         Released via Faster Payments directly to your connected NatWest business account within 
                        <strong>
                          120 minutes
                        </strong>
                         of brand milestone sign-off. 
                      </p>
                    </div>
                    <div className="flex flex-col gap-space-xs pt-space-xs">
                      <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-secondary text-[16px]">
                          shield
                        </span>
                        <span>
                          Bankruptcy-Remote Statutory Trust Protocol
                        </span>
                      </div>
                      <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-secondary text-[16px]">
                          lock
                        </span>
                        <span>
                          FCA-Regulated E-Money Partner Rails
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-space-sm pt-space-md border-t border-surface-container-highest">
                      <button className="w-full h-11 px-space-md rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold hover:bg-primary transition-all flex items-center justify-center gap-2 shadow-sm" data-go="/deals/uk-5028">
                        <span className="material-symbols-outlined text-[18px]">
                          draw
                        </span>
                        <span>
                          Accept Terms &amp; Countersign Pact (Rs 626,040)
                        </span>
                      </button>
                      <div className="grid grid-cols-2 gap-space-sm">
                        <button className="w-full h-10 px-space-sm rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md font-medium transition-colors flex items-center justify-center gap-1.5" data-go="/creator/uk-5028/revise">
                          <span className="material-symbols-outlined text-[16px]">
                            edit
                          </span>
                          <span>
                            Propose Changes
                          </span>
                        </button>
                        <button className="w-full h-10 px-space-sm rounded-lg bg-surface-container-low text-error hover:bg-error-container hover:text-on-error-container font-label-md text-label-md font-medium transition-colors flex items-center justify-center gap-1.5" data-go="/creator">
                          <span className="material-symbols-outlined text-[16px]">
                            close
                          </span>
                          <span>
                            Decline Offer
                          </span>
                        </button>
                      </div>
                      <p className="text-center font-label-sm text-label-sm text-on-surface-variant mt-1">
                         By countersigning, you agree to the 
                        <a className="text-primary-container hover:underline" href="#" onClick={(event) => event.preventDefault()}>
                          UK Creator Standard Terms
                        </a>
                         and bind this agreement under English Jurisdiction. 
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-space-md flex items-center gap-space-md">
                    <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
                      <span className="material-symbols-outlined text-[20px]">
                        handshake
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-on-surface">
                        Pactly Zero-Ghosting Guarantee
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                         If the client does not review submissions within 72h, our smart escrow releases funds autonomously. You are never left chasing invoices. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="view-counter" className="hidden flex-col gap-space-lg">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border-l-4 border-l-primary-container flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                <div className="flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">
                      swap_horiz
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">
                        Structured Counter-Offer Negotiation
                      </h2>
                      <span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed font-semibold">
                        Round 1 of 2
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl">
                       Propose targeted adjustments to fee, milestone timeline, or usage terms. Lumina Studio has 48 hours to accept, revise, or revert. Funds remain securely segregated during amendment deliberations. 
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 font-label-sm text-label-sm text-tertiary">
                  <span className="material-symbols-outlined text-[16px]">
                    warning
                  </span>
                  <span>
                    1 Round Remaining After This
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                <div className="lg:col-span-8 flex flex-col gap-space-md">
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between border-b border-surface-container-highest pb-space-xs">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px]">
                          payments
                        </span>
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Parameter 1: Gross Commercial Fee
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Current Escrow: Rs 666,000
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md items-center">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="proposed-fee" className="font-label-md text-label-md font-semibold text-on-surface">
                          Proposed Total Fee (£ PKR)
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-2.5 text-on-surface-variant font-medium">
                            £
                          </span>
                          <input id="proposed-fee" step="50" type="number" defaultValue="2100.00" className="w-full pl-8 pr-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant focus:outline-none focus:border-primary-container font-headline-sm text-headline-sm text-on-surface font-semibold" />
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Recommended rate for 60s integration + 30d usage
                        </span>
                      </div>
                      <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col gap-1">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Live Payout Re-calculation
                        </span>
                        <div className="flex items-baseline justify-between">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Net Creator Return (94%):
                          </span>
                          <span id="recalculated-net" className="font-headline-md text-headline-md font-bold text-secondary">
                            Rs 730,380
                          </span>
                        </div>
                        <div className="flex items-baseline justify-between text-[11px] text-on-surface-variant">
                          <span>
                            Pactly 6% platform custodian:
                          </span>
                          <span id="recalculated-fee">
                            -Rs 46,620
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between border-b border-surface-container-highest pb-space-xs">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px]">
                          calendar_month
                        </span>
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Parameter 2: First Cut Delivery Timeline
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Current Due Date: 14 Nov 2026
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="proposed-date" className="font-label-md text-label-md font-semibold text-on-surface">
                          Proposed Milestone 1 Due Date
                        </label>
                        <input id="proposed-date" type="date" defaultValue="2026-11-21" className="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant focus:outline-none focus:border-primary-container font-label-md text-label-md text-on-surface" />
                        <span className="font-body-sm text-body-sm text-secondary flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">
                            add_circle
                          </span>
                           +7 days production extension 
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="timeline-reason" className="font-label-md text-label-md font-semibold text-on-surface">
                          Timeline Extension Reason
                        </label>
                        <select id="timeline-reason" className="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant focus:outline-none focus:border-primary-container font-label-md text-label-md text-on-surface">
                          <option selected={true}>
                            Scheduling conflict / studio shooting window
                          </option>
                          <option>
                            Awaiting sample delivery from client
                          </option>
                          <option>
                            Higher production grade / professional grade crew
                          </option>
                          <option>
                            Travel / location shooting commitment
                          </option>
                        </select>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Shared with brand counterparty
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between border-b border-surface-container-highest pb-space-xs">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px]">
                          share
                        </span>
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Parameter 3: Paid Whitelisting &amp; Ad Rights
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Current: 30 Days Meta/TikTok
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                      <label className="cursor-pointer">
                        <input name="rights-toggle" type="radio" defaultValue="14" className="peer sr-only" />
                        <div className="p-space-md rounded-xl bg-surface-container-low peer-checked:bg-surface-container-highest peer-checked:ring-2 peer-checked:ring-primary-container flex flex-col gap-1 transition-all">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">
                            14 Days Limited
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Reduce exposure period
                          </span>
                          <span className="font-label-sm text-label-sm text-secondary font-medium">
                            Standard baseline
                          </span>
                        </div>
                      </label>
                      <label className="cursor-pointer">
                        <input defaultChecked={true} name="rights-toggle" type="radio" defaultValue="30" className="peer sr-only" />
                        <div className="p-space-md rounded-xl bg-surface-container-low peer-checked:bg-surface-container-highest peer-checked:ring-2 peer-checked:ring-primary-container flex flex-col gap-1 transition-all">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">
                            Keep 30 Days (Current)
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Maintain current draft scope
                          </span>
                          <span className="font-label-sm text-label-sm text-primary-container font-medium">
                            Original offer
                          </span>
                        </div>
                      </label>
                      <label className="cursor-pointer">
                        <input name="rights-toggle" type="radio" defaultValue="60" className="peer sr-only" />
                        <div className="p-space-md rounded-xl bg-surface-container-low peer-checked:bg-surface-container-highest peer-checked:ring-2 peer-checked:ring-primary-container flex flex-col gap-1 transition-all">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">
                            Extend to 60 Days
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Includes +Rs 111,000add-on
                          </span>
                          <span className="font-label-sm text-label-sm text-secondary font-medium">
                            Higher commercial yield
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
                    <label htmlFor="counter-memo" className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[18px]">
                        chat
                      </span>
                      <span>
                        Creator Commercial Rationale Note (Optional)
                      </span>
                    </label>
                    <textarea id="counter-memo" placeholder="Explain your pricing rationale or studio timeline to David Vance. Keep it collaborative and professional..." rows={3} className="w-full p-3 rounded-lg bg-surface-container-low border border-outline-variant focus:outline-none focus:border-primary-container font-body-sm text-body-sm text-on-surface"></textarea>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      This memo will be appended directly to the amended pact invitation sent to Lumina Studio Ltd.
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-space-md">
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      Amendment Summary
                    </h3>
                    <div className="flex flex-col gap-space-xs font-body-sm text-body-sm">
                      <div className="flex justify-between py-1 border-b border-surface-container-highest">
                        <span className="text-on-surface-variant">
                          Proposed Gross:
                        </span>
                        <span id="summary-proposed-gross" className="font-semibold text-on-surface">
                          Rs 777,000
                        </span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-surface-container-highest">
                        <span className="text-on-surface-variant">
                          Diff vs Original:
                        </span>
                        <span className="font-semibold text-secondary">
                          +Rs 111,000(+16.6%)
                        </span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-surface-container-highest">
                        <span className="text-on-surface-variant">
                          New Milestone 1:
                        </span>
                        <span id="summary-proposed-date" className="font-semibold text-on-surface">
                          21 Nov 2026
                        </span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-on-surface-variant">
                          Pactly Escrow Fee:
                        </span>
                        <span id="summary-proposed-fee" className="font-semibold text-error">
                          -Rs 46,620
                        </span>
                      </div>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] text-tertiary shrink-0 mt-0.5">
                        info
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                         Submitting locks 
                        <strong>
                          Round 1 of 2
                        </strong>
                        . Lumina Studio has 48 hours to fund the differential balance (Rs 111,000) or respond. 
                      </p>
                    </div>
                    <button className="w-full h-11 px-space-md rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold hover:bg-primary transition-all flex items-center justify-center gap-2 shadow-sm" data-go="/deals/uk-5028/review">
                      <span>
                        Submit Structured Counter-Offer
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        send
                      </span>
                    </button>
                    <button className="w-full h-10 px-space-sm rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md font-medium transition-colors flex items-center justify-center gap-1.5" data-go="/creator">
                      <span>
                        Cancel &amp; Return to Overview
                      </span>
                    </button>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-xs font-body-sm text-body-sm">
                    <span className="font-label-md text-label-md font-semibold text-on-surface flex items-center gap-1">
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        verified_user
                      </span>
                       Escrow Protection Continuous 
                    </span>
                    <p className="text-on-surface-variant">
                       The original deposit (Rs 666,000) remains safe in client escrow. If your counter-offer is declined, you can still accept the original terms before the 41-hour timer elapses. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="view-decline" className="hidden flex-col gap-space-lg">
              <div className="max-w-2xl mx-auto w-full bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col gap-space-lg">
                <div className="flex items-start gap-space-md">
                  <div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">
                      do_not_disturb_on
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
                      Decline Deal Invitation #UK-5012
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                       You are about to decline this partnership offer with 
                      <strong className="text-on-surface">
                        Lumina Studio Ltd
                      </strong>
                      . 
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-xl p-space-md flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                    verified
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-label-md text-label-md font-semibold text-on-surface">
                      Instant Escrow Release &amp; Zero Reputation Penalty
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                       Declining will immediately release the 
                      <strong className="text-on-surface font-semibold">
                        Rs 666,000
                      </strong>
                       escrow hold back to Lumina Studio's bank account with zero penalty to your creator completion score. 
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <label className="font-label-md text-label-md font-semibold text-on-surface">
                    Please select a primary reason for declining:
                  </label>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
                      <input defaultChecked={true} name="decline-reason" type="radio" defaultValue="schedule" className="accent-primary-container" />
                      <span className="font-body-md text-body-md text-on-surface">
                        Production schedule is fully committed / unavailable
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
                      <input name="decline-reason" type="radio" defaultValue="budget" className="accent-primary-container" />
                      <span className="font-body-md text-body-md text-on-surface">
                        Budget is below current minimum commercial rate card
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
                      <input name="decline-reason" type="radio" defaultValue="conflict" className="accent-primary-container" />
                      <span className="font-body-md text-body-md text-on-surface">
                        Conflicting existing exclusive sponsor agreement in category
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
                      <input name="decline-reason" type="radio" defaultValue="editorial" className="accent-primary-container" />
                      <span className="font-body-md text-body-md text-on-surface">
                        Editorial misalignment or product mismatch
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="decline-note" className="font-label-md text-label-md font-semibold text-on-surface">
                    Polite note to David Vance (Optional)
                  </label>
                  <textarea id="decline-note" placeholder="Thank them for considering your channel and offer to reconnect in Q1 2027..." rows={2} className="w-full p-3 rounded-lg bg-surface-container-low border border-outline-variant focus:outline-none focus:border-primary-container font-body-sm text-body-sm text-on-surface"></textarea>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-end gap-space-sm pt-space-sm border-t border-surface-container-highest">
                  <button className="w-full sm:w-auto h-10 px-space-md rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md font-medium transition-colors">
                     Nevermind, Keep Reviewing 
                  </button>
                  <button className="w-full sm:w-auto h-10 px-space-md rounded-lg bg-error text-on-error font-label-md text-label-md font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-1.5 shadow-sm" data-go="/creator">
                    <span className="material-symbols-outlined text-[16px]">
                      close
                    </span>
                    <span>
                      Confirm Decline &amp; Release Escrow
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_8px_rgba(0,0,0,0.02)] py-space-xl mt-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-headline-sm tracking-tight font-bold text-on-surface">
                Pactly
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              <span className="font-body-sm text-body-sm text-on-surface-variant ml-2">
                — Independent Escrow Infrastructure for Creator Commerce
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm">
              <a className="text-on-surface-variant hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Escrow Protocol (6%)
              </a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Standard UK Terms
              </a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Arbitration Guidelines
              </a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm pt-space-md font-body-sm text-body-sm text-on-surface-variant">
            <p className="max-w-3xl">
              Pactly acts as an impartial software custodian. Funds held in segregated client escrow accounts powered by authorised payment institutions regulated under the UK Electronic Money Regulations 2011. Registered in England &amp; Wales.
            </p>
            <p className="font-label-sm text-label-sm shrink-0">
              © 2025 Pactly Technologies Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
