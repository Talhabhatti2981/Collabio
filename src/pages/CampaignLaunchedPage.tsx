/** Pactly — Milestone 2: Campaign Launched & Escrow Armed Confirmation Modal */
export default function CampaignLaunchedPage() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-[1200px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-lg">
            <div className="flex items-center gap-space-xs">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  verified_user
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface">
                Pactly
              </span>
            </div>
            <nav data-active-classes="bg-surface-container text-primary font-label-md text-label-md rounded-lg" className="hidden lg:flex items-center gap-space-xs">
              <div className="relative flex items-center">
                <a className="px-space-sm py-space-xs rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/deals" href="/deals">
                  <span>
                    Deals
                  </span>
                  <span className="px-space-xs py-[1px] bg-primary-container text-on-primary rounded-full font-label-sm text-label-sm leading-none">
                    3
                  </span>
                </a>
              </div>
              <a className="px-space-sm py-space-xs rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/invitations/uk-5028" href="/invitations/uk-5028">
                Invitations
              </a>
              <a className="px-space-sm py-space-xs rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/profile" href="/profile">
                Profile
              </a>
              <a className="px-space-sm py-space-xs rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/settings" href="/settings">
                Settings
              </a>
              <a className="px-space-sm py-space-xs rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/help" href="/help">
                Help &amp; Legal
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-xs rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                In Escrow
              </span>
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                Rs 4,724,160
              </span>
            </div>
            <div className="flex items-center gap-space-sm bg-surface-container-low pl-space-sm pr-space-md py-space-xs rounded-full">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className="font-label-md text-label-md text-on-surface leading-tight">
                  David Vance
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
                  Lumina Studio • Brand
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-16 bg-background min-h-[calc(100vh-64px)]">
        <div className="flex flex-col w-full relative">
          <div aria-hidden="true" className="w-full opacity-40 blur-[3px] pointer-events-none select-none max-w-[1200px] mx-auto px-margin-mobile lg:px-margin py-space-lg flex flex-col gap-space-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
                <span>
                  Active Agreements
                </span>
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
                <span className="text-on-surface font-semibold">
                  UK-5028: Lumina Studio Ltd × Charlotte Emily Clark
                </span>
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
                <span className="text-primary font-semibold">
                  Milestone 2
                </span>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="px-space-sm py-1 bg-surface-container rounded-full text-on-surface font-label-sm text-label-sm">
                  FCA Escrow Safeguarded
                </span>
                <span className="px-space-sm py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm">
                  Milestone 2 of 3
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-space-md">
                <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-md text-label-md">
                  ✓
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">
                    Milestone 1: Creative Script &amp; Pre-Draft
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Rs 111,000Disbursed 14 Nov 2026
                  </div>
                </div>
              </div>
              <div className="h-[2px] w-16 bg-secondary"></div>
              <div className="flex items-center gap-space-md">
                <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md">
                  2
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Milestone 2: Spark Ads Whitelisting
                  </div>
                  <div className="font-body-sm text-body-sm text-primary font-medium">
                    Rs 259,000In Custody Review
                  </div>
                </div>
              </div>
              <div className="h-[2px] w-16 bg-surface-container-highest"></div>
              <div className="flex items-center gap-space-md">
                <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-label-md text-label-md">
                  3
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface-variant">
                    Milestone 3: Performance Retargeting
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Rs 185,000Scheduled
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-gutter">
              <div className="col-span-8 flex flex-col gap-space-md">
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="font-headline-md text-headline-md text-on-surface">
                    Deliverable Review &amp; Creative Verification
                  </div>
                  <div className="h-64 bg-surface-container rounded-lg flex items-center justify-center text-on-surface-variant">
                    <span>
                      Video Creative Preview: VS Code Plugins AI Drive
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-4 flex flex-col gap-space-md">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                  <div className="font-headline-sm text-headline-sm mb-space-sm">
                    Escrow Allocation
                  </div>
                  <div className="font-headline-lg text-headline-lg text-primary font-bold">
                    Rs 259,000GBP
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    Held in segregated trust account
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="pactly-armed-modal-backdrop" className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-md flex items-center justify-center p-space-sm sm:p-space-md overflow-y-auto">
            <div className="relative w-full max-w-[880px] bg-surface-container-lowest rounded-xl shadow-xl my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              <div className="bg-surface-container-low px-space-md sm:px-space-lg py-space-xs flex flex-wrap items-center justify-between gap-space-xs">
                <div className="flex items-center gap-space-xs">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wider uppercase">
                    DEAL #UK-5028
                  </span>
                  <span className="text-outline-variant font-label-sm text-label-sm">
                    •
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    MILESTONE 2: 30-DAY TIKTOK SPARK ADS WHITELISTING
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="px-space-xs py-[2px] bg-secondary/10 text-secondary rounded font-label-sm text-label-sm font-semibold tracking-wide flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                     FCA SAFEGUARDED 
                  </span>
                  <span className="px-space-xs py-[2px] bg-primary/10 text-primary rounded font-label-sm text-label-sm font-semibold tracking-wide">
                     TIKTOK API V1.3 SYNCED 
                  </span>
                  <button aria-label="Dismiss Modal" id="modal-close-icon" className="p-1 rounded hover:bg-surface-container transition-colors text-on-surface-variant hover:text-on-surface ml-space-xs">
                    <span className="material-symbols-outlined text-[20px] leading-none block">
                      close
                    </span>
                  </button>
                </div>
              </div>
              <div className="px-space-md sm:px-space-lg pt-space-lg pb-space-md flex flex-col gap-space-xs">
                <div className="flex items-start gap-space-md">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[28px]">
                      rocket_launch
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-space-sm flex-wrap">
                      <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                        Campaign Launched &amp; Autonomous Escrow Armed
                      </h2>
                      <span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold tracking-wide flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                         CAMPAIGN LIVE &amp; ARMED 
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                       Lumina Studio’s Spark Ads campaign is live on TikTok Ads Manager. Charlotte Emily Clark’s 
                      <strong className="text-on-surface font-semibold font-body-md text-body-md">
                        Rs 259,000Net Milestone 2
                      </strong>
                       payout is armed in Barclays Custody and will disburse autonomously upon first ad spend verification. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-space-md sm:px-space-lg pb-space-lg flex flex-col gap-space-md max-h-[calc(85vh-190px)] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between gap-space-sm relative overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full pointer-events-none"></div>
                    <div className="flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-space-xs">
                          <span className="w-5 h-5 rounded bg-on-surface text-surface-container-lowest flex items-center justify-center text-[11px] font-bold">
                            TT
                          </span>
                          <span className="font-label-md text-label-md text-on-surface font-semibold">
                            Spark Ads Campaign
                          </span>
                        </div>
                        <span className="px-space-xs py-[2px] bg-secondary-container text-on-secondary-container rounded font-label-sm text-label-sm font-semibold">
                          Live in Ads Manager
                        </span>
                      </div>
                      <div className="mt-space-xs">
                        <div className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug">
                          Q4 Developer Tooling Drive – Spark Boost
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant font-mono mt-0.5">
                          ID: cmp_98a72b01c4e9
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 pt-space-xs">
                        <div className="flex items-center justify-between font-body-sm text-body-sm">
                          <span className="text-on-surface-variant">
                            Linked TikTok Spark Token:
                          </span>
                          <span title="tiktok_spark_auth_v2_98a72b01c4e9ff12" className="font-mono text-on-surface font-medium text-[12px] truncate max-w-[170px]">
                            tiktok_spark_auth_v2_98a...
                          </span>
                        </div>
                        <div className="flex items-center justify-between font-body-sm text-body-sm">
                          <span className="text-on-surface-variant">
                            Creative Author:
                          </span>
                          <span className="text-on-surface font-medium">
                            @charlotte.tech (TikTok)
                          </span>
                        </div>
                        <div className="flex items-center justify-between font-body-sm text-body-sm">
                          <span className="text-on-surface-variant">
                            Vesting Window:
                          </span>
                          <span className="text-on-surface font-medium">
                            30 Days (25 Nov – 25 Dec 2026)
                          </span>
                        </div>
                        <div className="flex items-center justify-between font-body-sm text-body-sm">
                          <span className="text-on-surface-variant">
                            Initial Daily Budget:
                          </span>
                          <span className="text-on-surface font-semibold font-mono">
                            Rs 55,500/ day
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-space-xs rounded-lg mt-space-xs">
                      <div className="flex items-center justify-between font-label-sm text-label-sm mb-1">
                        <span className="text-on-surface font-medium flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                           Spend Threshold Listener 
                        </span>
                        <span className="text-primary font-semibold font-mono">
                          Rs 0/ Rs 3,700
                        </span>
                      </div>
                      <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full rounded-full transition-all duration-500 w-[4%]"></div>
                      </div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                        Delivering impressions — Rs 3,700spend triggers instant Rs 259,000unlock.
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between gap-space-sm relative overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-secondary/5 rounded-full pointer-events-none"></div>
                    <div className="flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-secondary text-[20px]">
                            account_balance
                          </span>
                          <span className="font-label-md text-label-md text-on-surface font-semibold">
                            Armed Escrow Custody
                          </span>
                        </div>
                        <span className="px-space-xs py-[2px] bg-secondary-fixed text-on-secondary-fixed rounded font-label-sm text-label-sm font-semibold">
                          Pre-Funded
                        </span>
                      </div>
                      <div className="mt-space-xs">
                        <div className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight leading-none text-primary">
                          Rs 259,000 
                          <span className="text-on-surface font-headline-sm text-headline-sm font-medium">
                            Net PKR
                          </span>
                        </div>
                        <div className="font-label-sm text-label-sm text-secondary font-semibold mt-1 flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">
                            verified
                          </span>
                           0% creator deduction • Rs 15,540brand fee pre-cleared 
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 pt-space-xs">
                        <div className="flex items-center justify-between font-body-sm text-body-sm">
                          <span className="text-on-surface-variant">
                            Designated Beneficiary:
                          </span>
                          <span title="Charlotte Emily Clark" className="text-on-surface font-medium truncate max-w-[170px]">
                            Charlotte Emily Clark
                          </span>
                        </div>
                        <div className="flex items-center justify-between font-body-sm text-body-sm">
                          <span className="text-on-surface-variant">
                            Payout Destination:
                          </span>
                          <span className="font-mono text-on-surface font-medium">
                            NatWest Business (••••4910)
                          </span>
                        </div>
                        <div className="flex items-center justify-between font-body-sm text-body-sm">
                          <span className="text-on-surface-variant">
                            Custody Institution:
                          </span>
                          <span className="text-on-surface font-medium">
                            Barclays Bank UK PLC
                          </span>
                        </div>
                        <div className="flex items-center justify-between font-body-sm text-body-sm">
                          <span className="text-on-surface-variant">
                            Trust Ledger Reference:
                          </span>
                          <span className="font-mono text-on-surface font-medium">
                            Vault #A-8291-UKM2
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-space-xs rounded-lg mt-space-xs flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                        gavel
                      </span>
                      <p className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
                         Funds ring-fenced under English Trust Law. Irrevocably pledged pending TikTok spend confirmation. 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        bolt
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface">
                        Autonomous Settlement Protocol
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                      DISPATCH ENGINE V4.2 • ACTIVE LISTENER
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-space-sm relative">
                    <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-space-xs relative">
                      <div className="flex items-center justify-between">
                        <span className="w-6 h-6 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm flex items-center justify-center font-bold">
                          ✓
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary font-semibold font-mono">
                          16:15:22 GMT
                        </span>
                      </div>
                      <div className="font-label-md text-label-md text-on-surface font-semibold">
                        1. Campaign Live
                      </div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        Validated via TikTok Ads API v1.3 handshake.
                      </p>
                    </div>
                    <div className="bg-primary/5 p-space-sm rounded-lg flex flex-col gap-space-xs relative">
                      <div className="flex items-center justify-between">
                        <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">
                          2
                        </span>
                        <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                           ARMED 
                        </span>
                      </div>
                      <div className="font-label-md text-label-md text-on-surface font-semibold">
                        2. Spend Webhook
                      </div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        Listens for first Rs 3,700ad spend or 72h SLA max window.
                      </p>
                    </div>
                    <div className="bg-surface-container-low/60 p-space-sm rounded-lg flex flex-col gap-space-xs opacity-80">
                      <div className="flex items-center justify-between">
                        <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm flex items-center justify-center font-bold">
                          3
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                          Pending
                        </span>
                      </div>
                      <div className="font-label-md text-label-md text-on-surface font-semibold">
                        3. Barclays Unlock
                      </div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        Automated bilateral release to UK Faster Payments rail.
                      </p>
                    </div>
                    <div className="bg-surface-container-low/60 p-space-sm rounded-lg flex flex-col gap-space-xs opacity-80">
                      <div className="flex items-center justify-between">
                        <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm flex items-center justify-center font-bold">
                          4
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                          &lt;60s SLA
                        </span>
                      </div>
                      <div className="font-label-md text-label-md text-on-surface font-semibold">
                        4. Creator Paid
                      </div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        Settled to NatWest Business with instant SMS advice.
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-container-low px-space-md py-space-xs rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
                        info
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface">
                        Prefer not to wait for TikTok ad spend telemetry?
                      </span>
                    </div>
                    <button className="font-label-sm text-label-sm text-primary hover:text-primary-container font-semibold transition-colors flex items-center gap-1 cursor-pointer" data-go="/deals/uk-5028/settled">
                      <span>
                        Trigger Immediate Manual Release (Rs 259,000)
                      </span>
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        verified_user
                      </span>
                       Bilateral Schedule 2 Advertising Covenant in Force 
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                      UK JURISDICTION 2026
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                    <div className="bg-surface-container-low p-space-xs rounded-lg flex flex-col gap-1">
                      <div className="font-label-sm text-label-sm text-on-surface font-semibold">
                        Brand Amplification Rights
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                         Lumina Studio Ltd is granted 30-day non-exclusive worldwide digital amplification rights across TikTok Ads. 
                      </p>
                    </div>
                    <div className="bg-surface-container-low p-space-xs rounded-lg flex flex-col gap-1">
                      <div className="font-label-sm text-label-sm text-on-surface font-semibold">
                        Creator IP &amp; Likeness Safeguard
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                         All underlying copyright, organic account handle, and creative assets remain sole property of Charlotte Emily Clark. 
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between pt-space-xs text-on-surface-variant font-label-sm text-label-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">
                        schedule
                      </span>
                      <span>
                        Automated Token Expiry: 
                        <strong className="text-on-surface font-semibold">
                          25 Dec 2026, 23:59 GMT
                        </strong>
                         (auto-unbinds via TikTok API)
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        balance
                      </span>
                      <span>
                        Harrison &amp; Croft Legal LLP Arbitration Backing (Rs 27,750Capped)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                    <span className="font-semibold text-on-surface flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        fingerprint
                      </span>
                       Cryptographic Execution Record 
                    </span>
                    <span className="font-mono">
                      eIDAS-GB-PACT-5028-M2-SPARK
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-space-xs rounded-lg flex items-center justify-between gap-space-sm font-mono text-[12px]">
                    <div className="truncate text-on-surface-variant">
                      <span className="text-on-surface font-semibold">
                        SHA256:
                      </span>
                       3c9b71f09e4d82a17b8893cd51e2049ba7c524019df76182c4e138a099bfceb2 
                    </div>
                    <button className="px-space-xs py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm shrink-0 transition-colors flex items-center gap-1 cursor-pointer">
                      <span className="material-symbols-outlined text-[14px]">
                        content_copy
                      </span>
                      <span>
                        Copy
                      </span>
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-0.5">
                    <span>
                      Barclays Segregated Vault Lock Ticket: 
                      <strong className="text-on-surface font-mono">
                        #BKY-VAULT-8291-DISP
                      </strong>
                    </span>
                    <span>
                      Signed Bilaterally at 25 Nov 2026, 16:15:22 GMT
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest px-space-md sm:px-space-lg py-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md shadow-[0_-1px_6px_rgba(0,0,0,0.03)]">
                <button className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer py-2 px-space-sm" data-go="/deals/uk-5028">
                   Return to Deal Milestone Monitor 
                </button>
                <div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
                  <a className="px-space-md py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-medium transition-colors flex items-center justify-center gap-1.5 shrink-0" href="#" onClick={(event) => event.preventDefault()}>
                    <span className="material-symbols-outlined text-[18px]">
                      description
                    </span>
                    <span>
                      Download Escrow Certificate (PDF)
                    </span>
                  </a>
                  <a rel="noopener noreferrer" target="_blank" className="px-space-md py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-colors flex items-center justify-center gap-1.5 shrink-0 shadow-sm" href="https://ads.tiktok.com">
                    <span>
                      View Live Campaign in TikTok Ads
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_6px_rgba(0,0,0,0.02)] py-space-xl mt-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin flex flex-col md:flex-row items-center justify-between gap-space-md text-center md:text-left">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center justify-center md:justify-start gap-space-xs font-label-md text-label-md text-on-surface">
              <span className="material-symbols-outlined text-secondary text-[16px]">
                shield
              </span>
              <span>
                FCA-Regulated Escrow Safeguarding
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Client funds are held in segregated trust accounts under UK Commercial Law jurisdiction. Not protected by FSCS; protected under Payment Services Regulations 2017.
            </p>
          </div>
          <div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
            <a className="hover:text-primary transition-colors" data-go="/legal" href="/legal">
              Safeguarding Policy
            </a>
            <span className="text-outline-variant">
              •
            </span>
            <a className="hover:text-primary transition-colors" data-go="/legal" href="/legal">
              Commercial Terms
            </a>
            <span className="text-outline-variant">
              •
            </span>
            <a className="hover:text-primary transition-colors" data-go="/legal" href="/legal">
              Arbitration Charter
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
