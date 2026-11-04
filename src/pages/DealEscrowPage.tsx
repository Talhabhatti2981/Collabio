/** Pactly — Deal Creation Wizard (Step 3: Escrow Funding Lock) */
export default function DealEscrowPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-[1200px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-lg">
            <a className="flex items-baseline gap-space-xs" data-go="/deals" href="/deals">
              <span className="font-headline-md text-headline-md tracking-tight text-on-surface">
                Pactly
              </span>
              <span className="font-headline-md text-headline-md text-primary">
                .
              </span>
            </a>
            <nav data-active-classes="bg-surface-container text-on-surface font-semibold" className="hidden md:flex items-center gap-space-xs">
              <a aria-current="page" className="px-space-md py-space-xs rounded-lg transition-colors bg-surface-container text-on-surface font-semibold" data-go="/deals" href="/deals">
                Deals
              </a>
              <a className="px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-go="/profile" href="/profile">
                Profile
              </a>
              <a className="px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-go="/settings" href="/settings">
                Settings
              </a>
              <a className="px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-go="/help" href="/help">
                Help &amp; Legal
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex flex-col items-end px-space-md py-space-xs bg-surface-container-low rounded-lg">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                In Escrow
              </span>
              <span className="font-headline-sm text-headline-sm text-secondary font-semibold">
                Rs 4,606,500
              </span>
            </div>
            <div className="flex items-center gap-space-sm pl-space-sm py-space-xs pr-space-md bg-surface-container-lowest rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="font-label-md text-label-md text-on-surface leading-tight">
                  Lumina Studio
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Brand
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-16rem)]">
        <div className="flex flex-col w-full">
          <div className="w-full max-w-[1200px] mx-auto px-margin-mobile md:px-margin py-space-md md:py-space-lg flex flex-col gap-space-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant flex-wrap">
                <a className="hover:text-primary transition-colors" data-go="/deals" href="/deals">
                  Deals
                </a>
                <span className="material-symbols-outlined text-[16px] text-outline">
                  chevron_right
                </span>
                <span className="hover:text-on-surface transition-colors">
                  New Deal (#UK-5028)
                </span>
                <span className="material-symbols-outlined text-[16px] text-outline">
                  chevron_right
                </span>
                <span className="text-on-surface font-semibold">
                  Escrow Funding Lock
                </span>
              </div>
              <div className="flex items-center gap-space-xs flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                   Draft #UK-5028 
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px] text-secondary">
                    gavel
                  </span>
                   English Commercial Law Model 2.4 
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px]">
                    shield_with_heart
                  </span>
                   PKR (£) Protected 
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md md:p-space-lg rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
                <div className="flex items-center gap-space-md p-space-xs">
                  <div className="w-9 h-9 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">
                      check
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                      Step 1 • Completed
                    </span>
                    <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                      Scope &amp; Deliverables
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-md p-space-xs">
                  <div className="w-9 h-9 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">
                      check
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                      Step 2 • Completed
                    </span>
                    <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                      Assign Counterparty
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant truncate">
                      Charlotte Emily Clark
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-md p-space-xs rounded-lg bg-surface-container-low shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-sm ring-4 ring-primary/10">
                    <span className="material-symbols-outlined text-[20px]">
                      lock_open
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                      Step 3 • Active
                    </span>
                    <span className="font-label-lg text-label-lg text-primary font-semibold truncate">
                      Escrow Funding Lock
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-md p-space-xs opacity-60">
                  <div className="w-9 h-9 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">
                      lock
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Step 4 • Upcoming
                    </span>
                    <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                      Legal Terms &amp; Solicitor Review
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-space-xs">
              <div className="inline-flex items-center gap-2 self-start px-2.5 py-1 rounded bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                <span className="material-symbols-outlined text-[14px]">
                  account_balance
                </span>
                 FCA Segregated Custody Architecture • Stripe Connect Ring-Fenced Vault 
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                Authorize Escrow Custody Funding
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                 Deposit and lock contract capital into an FCA-regulated segregated client account before bilateral signing. Capital is guaranteed bankruptcy-remote and cannot be claimed by platform creditors or released without milestone fulfillment. 
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              <div className="lg:col-span-8 flex flex-col gap-space-lg">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[24px]">
                        payments
                      </span>
                      <div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface">
                          Deposit Payment Rail Selection
                        </h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Choose your instant liquidity route for ring-fenced escrow allocation.
                        </p>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
                      Instant Clearance
                    </span>
                  </div>
                  <div id="payment-rails-container" className="flex flex-col gap-space-md">
                    <label className="cursor-pointer group flex flex-col md:flex-row md:items-center justify-between p-space-md rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                      <div className="flex items-start gap-space-md">
                        <input defaultChecked={true} name="payment_rail" type="radio" defaultValue="open_banking" className="mt-1 w-4 h-4 text-primary focus:ring-primary accent-primary" />
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                              UK Open Banking / Instant Bank Transfer
                            </span>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-secondary/10 text-secondary">
                              <span className="material-symbols-outlined text-[13px]">
                                bolt
                              </span>
                               Instant · 0% Transfer Fee 
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Faster Payments Service (FPS) Direct via regulated AISP/PISP integration.
                          </p>
                          <div className="mt-space-xs inline-flex items-center gap-space-sm px-space-sm py-1.5 bg-surface-container-low rounded-lg self-start">
                            <div className="w-5 h-5 rounded-full bg-[#00AEEF] flex items-center justify-center text-white text-[10px] font-bold">
                              B
                            </div>
                            <span className="font-label-sm text-label-sm text-on-surface font-medium">
                              Barclays Commercial UK (•••• 8219)
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant">
                              • Available: Rs 17,852,500
                            </span>
                            <span className="material-symbols-outlined text-[16px] text-secondary">
                              verified
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-space-sm md:mt-0 flex md:flex-col items-end justify-between shrink-0">
                        <span className="font-headline-sm text-headline-sm text-primary font-bold">
                          Rs 705,960
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          No surcharge
                        </span>
                      </div>
                    </label>
                    <label className="cursor-pointer group flex flex-col md:flex-row md:items-center justify-between p-space-md rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-start gap-space-md">
                        <input name="payment_rail" type="radio" defaultValue="card" className="mt-1 w-4 h-4 text-primary focus:ring-primary accent-primary" />
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                              Debit / Corporate Card
                            </span>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-surface-container text-on-surface-variant">
                               Instant · 1.4% processing surcharge (Rs 9,883) 
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Supports Mastercard Commercial, Visa Business, and Apple Pay.
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 text-[11px] font-mono bg-surface-container-high rounded text-on-surface-variant font-medium">
                              VISA
                            </span>
                            <span className="px-2 py-0.5 text-[11px] font-mono bg-surface-container-high rounded text-on-surface-variant font-medium">
                              MASTERCARD
                            </span>
                            <span className="px-2 py-0.5 text-[11px] font-mono bg-surface-container-high rounded text-on-surface-variant font-medium">
                              AMEX (UK)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-space-sm md:mt-0 flex md:flex-col items-end justify-between shrink-0">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          Rs 715,843
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Incl. Rs 9,883card fee
                        </span>
                      </div>
                    </label>
                    <label className="cursor-pointer group flex flex-col md:flex-row md:items-center justify-between p-space-md rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-start gap-space-md">
                        <input name="payment_rail" type="radio" defaultValue="wire" className="mt-1 w-4 h-4 text-primary focus:ring-primary accent-primary" />
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                              Direct BACS / CHAPS Escrow Wire
                            </span>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-surface-container text-on-surface-variant">
                               1–2 Business Hours · Recommended for &gt; Rs 3,700,000 
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Generate unique per-deal virtual IBAN &amp; reference ID for manual bank transfer.
                          </p>
                          <span className="font-label-sm text-label-sm text-on-surface-variant font-mono mt-0.5">
                            IBAN: GB91 BARC 2000 0050 2891 04
                          </span>
                        </div>
                      </div>
                      <div className="mt-space-sm md:mt-0 flex md:flex-col items-end justify-between shrink-0">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          Rs 705,960
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Standard clearing
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        account_tree
                      </span>
                      <div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface">
                          Custodial Milestone Release Architecture
                        </h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Granular capital distribution triggers enforced by cryptographic webhook protocols.
                        </p>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-semibold">
                      2 Scheduled Payouts
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-md">
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-space-sm">
                          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-label-md text-label-md flex items-center justify-center font-bold">
                            1
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            Dedicated Video Sponsorship (60s–90s)
                          </span>
                        </div>
                        <div className="flex items-center gap-space-sm">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Rs 444,000
                          </span>
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant">
                            62.8% of Total
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 bg-surface-container-lowest p-space-sm rounded text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                          smart_toy
                        </span>
                        <div>
                          <span className="font-semibold text-on-surface">
                            Automated API Release Condition:
                          </span>
                           YouTube Data API v3 verifies public video status, runtime (≥60s), sponsorship disclosure tag, and verified URL link within description. 
                          <span className="font-medium text-secondary">
                            OR brand sign-off within 48h.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-space-sm">
                          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-label-md text-label-md flex items-center justify-center font-bold">
                            2
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            Spark Ads Whitelisting (30 Days)
                          </span>
                        </div>
                        <div className="flex items-center gap-space-sm">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Rs 222,000
                          </span>
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant">
                            31.4% of Total
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 bg-surface-container-lowest p-space-sm rounded text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                          key
                        </span>
                        <div>
                          <span className="font-semibold text-on-surface">
                            OAuth Code Verification:
                          </span>
                           Creator links valid TikTok Ads Authorization Code directly into the Deal Dashboard with 30-day runtime parameter. 
                        </div>
                      </div>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-outline text-[20px]">
                          admin_panel_settings
                        </span>
                        <div>
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            Custody Protocol &amp; Regulatory Escrow Fee
                          </span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Segregated accounting, automated clearing, and legal safeguarding.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-sm">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Rs 39,960
                        </span>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant">
                          6.0% Fee
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-sm p-space-md rounded-lg bg-primary/5">
                    <span className="material-symbols-outlined text-primary text-[22px] shrink-0">
                      timer
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                        Anti-Ghosting Protocol (Schedule 4 Guarantee)
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                         If the creator submits verifiable proof of publication according to the contract specifications and the brand neither signs off nor lodges a formal defect dispute within 
                        <strong className="text-on-surface">
                          48 hours
                        </strong>
                        , the custodial system releases Milestone 1 funds autonomously to the creator’s linked account. 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-on-surface text-[24px]">
                      verified_user
                    </span>
                    <div>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">
                        Statutory Custody &amp; Authorisation Mandate
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Mandatory legal declarations under UK Payment Services Regulations.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-sm pt-space-xs">
                    <label className="flex items-start gap-space-sm cursor-pointer p-space-sm rounded-lg hover:bg-surface-container-low transition-colors">
                      <input defaultChecked={true} id="mandate-1" type="checkbox" className="mt-1 w-4 h-4 text-primary rounded focus:ring-primary accent-primary" />
                      <span className="font-body-sm text-body-sm text-on-surface select-none">
                         I authorize 
                        <strong>
                          Pactly Custody Ltd
                        </strong>
                         to initiate an Open Banking direct transfer of 
                        <strong>
                          Rs 705,960
                        </strong>
                         from Barclays Commercial UK (•••• 8219) into the ring-fenced Stripe Payments UK client safeguarding account. 
                      </span>
                    </label>
                    <label className="flex items-start gap-space-sm cursor-pointer p-space-sm rounded-lg hover:bg-surface-container-low transition-colors">
                      <input defaultChecked={true} id="mandate-2" type="checkbox" className="mt-1 w-4 h-4 text-primary rounded focus:ring-primary accent-primary" />
                      <span className="font-body-sm text-body-sm text-on-surface select-none">
                         I understand that deposited funds are irrevocably committed to 
                        <strong>
                          Deal #UK-5028
                        </strong>
                         and subject to independent solicitor arbitration under the Senior Courts of England &amp; Wales if a dispute arises. 
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-[20px] text-primary">
                      smartphone
                    </span>
                    <span>
                      Transaction will require FaceID / Barclays Mobile PIN approval via Open Banking redirect upon confirmation.
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-sm pb-space-lg">
                  <a className="w-full sm:w-auto px-space-md py-2.5 rounded-lg font-label-lg text-label-lg text-on-surface bg-surface-container-lowest hover:bg-surface-container shadow-sm flex items-center justify-center gap-2 transition-colors" data-go="/deals/new/counterparty" href="/deals/new/counterparty">
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_back
                    </span>
                     Back to Assign Counterparty 
                  </a>
                  <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-space-sm">
                    <button type="button" className="w-full sm:w-auto px-space-md py-2.5 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors">
                       Save Draft &amp; Exit 
                    </button>
                    <button type="button" className="w-full sm:w-auto px-6 py-2.5 rounded-lg font-label-lg text-label-lg bg-primary hover:bg-[#3242C2] text-on-primary font-semibold shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all" data-go="/deals/new/terms">
                      <span className="material-symbols-outlined text-[18px]">
                        lock
                      </span>
                       Authorize &amp; Lock Rs 705,960in Escrow 
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-20">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        receipt_long
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Escrow Ledger
                      </h3>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                      #UK-5028
                    </span>
                  </div>
                  <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-[13px] shrink-0">
                       CC 
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                        Charlotte Emily Clark
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant truncate">
                        @charlotte_creator
                      </span>
                    </div>
                    <span className="ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-secondary/15 text-secondary shrink-0">
                      <span className="material-symbols-outlined text-[12px]">
                        verified
                      </span>
                       KYC OK 
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs font-body-sm text-body-sm pt-space-xs">
                    <div className="flex items-center justify-between py-1">
                      <span className="text-on-surface-variant">
                        Milestone 1: 60s Integration
                      </span>
                      <span className="font-mono text-on-surface font-medium">
                        Rs 444,000
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-on-surface-variant">
                        Milestone 2: Spark Ads (30d)
                      </span>
                      <span className="font-mono text-on-surface font-medium">
                        Rs 222,000
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 font-semibold text-on-surface bg-surface-container-low px-2 rounded">
                      <span>
                        Gross Creator Earnings
                      </span>
                      <span className="font-mono">
                        Rs 666,000
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 text-on-surface-variant">
                      <div className="flex items-center gap-1">
                        <span>
                          Pactly Custody Fee (6%)
                        </span>
                        <span title="FCA custody, dispute insurance, automated clearing" className="material-symbols-outlined text-[14px] text-outline cursor-help">
                          info
                        </span>
                      </div>
                      <span className="font-mono">
                        Rs 39,960
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-secondary">
                      <span>
                        Fee Allocation Policy
                      </span>
                      <span className="font-semibold">
                        Brand Absorbed (0% Creator Split)
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-xs p-space-md rounded-xl bg-primary text-on-primary flex flex-col gap-1 shadow-md">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary/80">
                      Required Escrow Lock
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-xl text-headline-xl font-bold tracking-tight">
                        Rs 705,960
                      </span>
                      <span className="font-label-sm text-label-sm text-on-primary/90">
                        PKR
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-primary/80 leading-snug pt-1">
                       Held in ring-fenced Stripe Connect custodial trust under UK Law. Funds released strictly upon milestone validation. 
                    </p>
                  </div>
                  <button type="button" className="w-full py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 transition-colors" data-go="/deals/new/terms">
                    <span>
                      Continue to Step 4: Legal Review
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-secondary text-[22px]">
                      verified
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      FCA Custodial Safeguards
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                     Funds are transferred directly into an insolvency-remote client escrow account governed by UK Electronic Money Regulations 2011. Neither Pactly, creator, nor brand creditors can attach these funds. 
                  </p>
                  <div className="flex flex-col gap-space-sm pt-space-xs font-body-sm text-body-sm text-on-surface">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        check_circle
                      </span>
                      <span>
                        NatWest &amp; Barclays UK Ring-Fenced Vaults
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        check_circle
                      </span>
                      <span>
                        Cryptographic SHA-256 Deposit Hash Generated
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        check_circle
                      </span>
                      <span>
                        100% Zero-Fee Refund if Creator Rejects Offer
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        check_circle
                      </span>
                      <span>
                        Rs 27,750Capped Fast-Track Solicitor Arbitration
                      </span>
                    </div>
                  </div>
                  <div className="pt-space-xs flex items-center justify-between text-on-surface-variant text-[11px] font-mono">
                    <span>
                      Vault Node: UK-LON-STRIPE-04
                    </span>
                    <span className="text-secondary font-semibold">
                      STATUS: NOMINAL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_6px_rgba(0,0,0,0.02)] mt-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg mb-space-lg">
            <div className="md:col-span-5 flex flex-col gap-space-sm">
              <div className="flex items-baseline gap-space-xs">
                <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface">
                  Pactly
                </span>
                <span className="font-headline-sm text-headline-sm text-primary">
                  .
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
                Independent Escrow &amp; Dynamic Contracts for High-Velocity Creator Commerce.
              </p>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Company Reg: 14829104 • Registered in England and Wales
              </span>
            </div>
            <div className="md:col-span-4 flex flex-col gap-space-xs">
              <span className="font-label-md text-label-md text-on-surface">
                Regulatory &amp; Legal Framework
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                All escrow client funds held in segregated safeguarding accounts under FCA regulated custodial supervision. Contracts governed strictly under English Commercial Jurisdiction.
              </p>
            </div>
            <div className="md:col-span-3 flex flex-col gap-space-xs md:items-end">
              <span className="font-label-md text-label-md text-on-surface">
                Transparency
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant md:text-right">
                Transparent 6% Fixed Escrow Fee. No hidden payment splits or withdrawal levies.
              </p>
            </div>
          </div>
          <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <div className="flex flex-wrap items-center gap-space-md font-body-sm text-body-sm text-on-surface-variant">
              <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Arbitration Protocol
              </a>
              <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Security &amp; Custody
              </a>
              <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Terms of Service
              </a>
              <a className="hover:text-on-surface transition-colors" data-go="/help" href="/help">
                Dispute Resolution
              </a>
            </div>
            <div className="font-body-sm text-body-sm text-on-surface-variant">
              © 2025 Pactly Technologies Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
