/** Pactly — Deal Creation Wizard (Step 4: Legal Terms & Solicitor Review) */
export default function DealTermsPage() {
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
              <a className="px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-go="/deals" href="/deals">
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
          <div className="w-full bg-surface-container-low/70 py-space-sm px-margin-mobile md:px-margin shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md flex-wrap">
                <a className="hover:text-primary transition-colors" data-go="/deals" href="/deals">
                  Deals
                </a>
                <span className="text-outline-variant font-normal">
                  /
                </span>
                <span className="font-medium text-on-surface">
                  New Deal (#UK-5028)
                </span>
                <span className="text-outline-variant font-normal">
                  /
                </span>
                <span className="font-semibold text-primary">
                  Legal Terms &amp; Solicitor Review
                </span>
              </div>
              <div className="flex items-center gap-space-xs flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                   Draft #UK-5028 
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    gavel
                  </span>
                   English Commercial Law Model 2.4 
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[14px]">
                    lock
                  </span>
                   PKR (£) Protected 
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                   Escrow Locked: Rs 705,960 
                </span>
              </div>
            </div>
          </div>
          <div className="w-full bg-surface-container-lowest shadow-[0_1px_6px_rgba(0,0,0,0.03)] py-space-md px-margin-mobile md:px-margin">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md items-center">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 text-on-secondary shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      check
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                        Step 1 • Completed
                      </span>
                    </div>
                    <span className="font-label-md text-label-md text-on-surface truncate font-medium">
                      Scope &amp; Deliverables
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 text-on-secondary shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      check
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                        Step 2 • Completed
                      </span>
                    </div>
                    <span className="font-label-md text-label-md text-on-surface truncate font-medium">
                      Charlotte Emily Clark
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 text-on-secondary shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      check
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                        Step 3 • Completed
                      </span>
                    </div>
                    <span className="font-label-md text-label-md text-on-surface truncate font-medium">
                      Rs 705,960Ring-Fenced
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm bg-primary/5 px-space-sm py-1.5 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 text-on-primary ring-4 ring-primary/20 shadow-sm">
                    <span className="font-label-md text-label-md font-semibold">
                      4
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">
                        Step 4 • Active
                      </span>
                    </div>
                    <span className="font-label-md text-label-md text-primary font-semibold truncate">
                      Legal Terms &amp; Review
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[1200px] mx-auto px-margin-mobile md:px-margin py-space-xl">
            <div className="mb-space-lg">
              <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm tracking-wider uppercase mb-space-xs">
                <span className="material-symbols-outlined text-[16px]">
                  account_balance
                </span>
                <span>
                  FCA Regulated Escrow Architecture • Jurisdiction: England &amp; Wales
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                 Review Statutory Legal Terms &amp; Dual Execution 
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-space-xs">
                 Review the automatically compiled Schedule 1–4 Commercial Terms, fast-track solicitor verification status, and execute bilateral signature to dispatch to creator. 
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              <div className="lg:col-span-8 flex flex-col gap-space-lg">
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-space-md items-start justify-between relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
                  <div className="flex gap-space-md items-start pl-2">
                    <div className="w-12 h-12 rounded-xl bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0">
                      <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[28px]">
                        verified_user
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-space-sm flex-wrap">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          Pre-Execution Solicitor Audit: PASSED
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/60 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[13px]">
                            verified
                          </span>
                           Verified Clearance 
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                         Audited &amp; signed off by 
                        <strong className="text-on-surface font-medium">
                          Harrison &amp; Croft LLP
                        </strong>
                         (SRA Regulated Commercial Solicitors, Chancery Lane, London WC2A 1LF). 
                      </p>
                      <div className="mt-space-sm p-space-sm bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-on-surface">
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            check_circle
                          </span>
                          <span>
                            <strong>
                              Compliance Verification:
                            </strong>
                             Anti-ghosting clause 4.2 compliant, intellectual property scope unambiguous, fast-track arbitration fee capped at Rs 27,750.
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm mt-0.5">
                          <span className="font-mono bg-surface-container px-1.5 py-0.5 rounded text-on-surface">
                            SHA256: 7f8b91e4a3b8...c43a019e
                          </span>
                          <span>
                            •
                          </span>
                          <span>
                            Solicitor Digital Seal: Applied &amp; Timestamped (18 Oct 2026, 14:18 GMT)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end shrink-0 w-full md:w-auto mt-2 md:mt-0 pl-2 md:pl-0">
                    <div className="w-16 h-16 rounded-full bg-surface-container flex flex-col items-center justify-center text-center p-1 text-primary">
                      <span className="material-symbols-outlined text-[22px]">
                        policy
                      </span>
                      <span className="font-label-sm text-[9px] uppercase tracking-tighter leading-none mt-0.5 font-semibold">
                        SRA Valid
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col overflow-hidden">
                  <div className="p-space-md bg-surface-container-low/50 flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
                        Official Escrow Schedule Agreement
                      </span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Bilateral Standard Creator Pact (Model 2.4)
                      </h2>
                    </div>
                    <div className="inline-flex items-center bg-surface-container p-1 rounded-lg self-start sm:self-auto">
                      <button id="tab-english-btn" className="px-space-md py-1.5 rounded-md font-label-md text-label-md transition-all font-semibold bg-surface-container-lowest text-on-surface shadow-sm">
                         Plain English Summary 
                      </button>
                      <button id="tab-legal-btn" className="px-space-md py-1.5 rounded-md font-label-md text-label-md transition-all text-on-surface-variant hover:text-on-surface">
                         Full Legal Text 
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container-low/20 overflow-x-auto text-on-surface-variant font-label-md text-label-md">
                    <button className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-medium hover:bg-surface-container-high transition-colors whitespace-nowrap">
                       Schedule 1: Deliverables 
                    </button>
                    <button className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-medium transition-colors whitespace-nowrap">
                       Schedule 2: Escrow Custody 
                    </button>
                    <button className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-medium transition-colors whitespace-nowrap">
                       Schedule 3: IP &amp; Warranties 
                    </button>
                    <button className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-medium transition-colors whitespace-nowrap">
                       Schedule 4: Ghosting &amp; Arbitration 
                    </button>
                  </div>
                  <div id="contract-document-body" className="p-space-lg flex flex-col gap-space-lg max-h-[580px] overflow-y-auto bg-surface-bright text-on-surface font-body-md text-body-md">
                    <div id="sched-1" className="flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-semibold uppercase text-primary">
                          Schedule 1
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary font-semibold bg-secondary-container/30 px-2 py-0.5 rounded-full">
                          Automated API Release
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                        Commercial Deliverables &amp; Milestone Triggers
                      </h3>
                      <div className="mt-2 space-y-3">
                        <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                          <div>
                            <span className="font-label-md text-label-md font-semibold text-on-surface">
                              Milestone 1: 60-Second Dedicated YouTube Video Integration
                            </span>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                               Main sponsor integration placed in first 4 minutes of main YouTube channel video. Includes pinned comment link + live tracked UTM link. 
                            </p>
                          </div>
                          <div className="text-right sm:shrink-0">
                            <span className="font-headline-sm text-headline-sm font-semibold text-primary">
                              Rs 444,000
                            </span>
                            <span className="block font-label-sm text-label-sm text-on-surface-variant">
                              Release: Automated via YouTube API post proof
                            </span>
                          </div>
                        </div>
                        <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                          <div>
                            <span className="font-label-md text-label-md font-semibold text-on-surface">
                              Milestone 2: Spark Ads Whitelisting Rights (30 Days)
                            </span>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                               TikTok Spark Ads Whitelist Code authorization code delivered to Lumina Studio Ads Manager for a strict 30-day paid amplification window. 
                            </p>
                          </div>
                          <div className="text-right sm:shrink-0">
                            <span className="font-headline-sm text-headline-sm font-semibold text-primary">
                              Rs 222,000
                            </span>
                            <span className="block font-label-sm text-label-sm text-on-surface-variant">
                              Release: Code verification in Pactly Portal
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="sched-2" className="flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-semibold uppercase text-primary">
                          Schedule 2
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary font-semibold bg-secondary-container/30 px-2 py-0.5 rounded-full">
                          Statutory Safeguarding
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                        Escrow Custody &amp; Insolvency-Remote Terms
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                         All client funds totaling 
                        <strong className="text-on-surface">
                          Rs 705,960GBP
                        </strong>
                         are held strictly in a segregated, unencumbered client safeguarding escrow account under Regulation 19 of the 
                        <em className="text-on-surface">
                          Electronic Money Regulations 2011
                        </em>
                        . Funds are insolvency-remote from both Lumina Studio Ltd and Pactly Technologies Ltd, guaranteeing creator counterparty protection against commercial liquidation or bankruptcy during execution. 
                      </p>
                    </div>
                    <div id="sched-3" className="flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-semibold uppercase text-primary">
                          Schedule 3
                        </span>
                        <span className="font-label-sm text-label-sm text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">
                          Copyright &amp; IP Protection
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                        IP Rights, Creator Warranties &amp; Moral Rights
                      </h3>
                      <ul className="space-y-2 mt-1 font-body-sm text-body-sm text-on-surface-variant list-disc pl-5">
                        <li>
                          <strong className="text-on-surface">
                            Commercial License:
                          </strong>
                           Lumina Studio Ltd receives a non-exclusive, perpetual global digital usage license across company digital channels upon fund disbursement.
                        </li>
                        <li>
                          <strong className="text-on-surface">
                            Creator Retained Rights:
                          </strong>
                           Charlotte Emily Clark retains 100% underlying intellectual property and author moral rights under Chapter IV of the Copyright, Designs and Patents Act 1988.
                        </li>
                        <li>
                          <strong className="text-on-surface">
                            Raw Footage Exclusion:
                          </strong>
                           Raw unedited video reels and project files remain creator property unless negotiated under a separate supplemental deed.
                        </li>
                      </ul>
                    </div>
                    <div id="sched-4" className="flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-semibold uppercase text-primary">
                          Schedule 4
                        </span>
                        <span className="font-label-sm text-label-sm text-error font-semibold bg-error/10 px-2 py-0.5 rounded-full">
                          Autonomous 48h Ghosting Remedy
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                        Dispute Protocol &amp; Autonomous 48-Hour Ghosting Remedy
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                         Should the creator submit verifiable milestone proof of post, the Brand has precisely 
                        <strong className="text-on-surface">
                          48 hours
                        </strong>
                         to flag a bona fide contractual discrepancy. In the absence of an active dispute within 48 hours, Pactly’s protocol executes autonomous fund release. Any formal dispute enters Fast-Track Arbitration via Harrison &amp; Croft LLP with an arbitration fee capped at 
                        <strong className="text-on-surface">
                          Rs 27,750GBP
                        </strong>
                        . 
                      </p>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container-low/40 flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-[20px] text-primary">
                        description
                      </span>
                      <span>
                        Document Ref: 
                        <strong>
                          UK-CREATOR-2026-v2.4.pdf
                        </strong>
                         • 248 KB • Registered Seal
                      </span>
                    </div>
                    <button type="button" className="inline-flex items-center justify-center gap-2 px-space-md py-2 rounded-lg bg-surface-container-lowest font-label-md text-label-md text-on-surface font-semibold shadow-sm hover:bg-surface-container transition-colors">
                      <span className="material-symbols-outlined text-[18px]">
                        download
                      </span>
                       Download Executable PDF Agreement 
                    </button>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[20px]">
                          draw
                        </span>
                      </div>
                      <div>
                        <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          Bilateral Execution &amp; Brand Mandate
                        </h3>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          eIDAS Compliant Advanced Digital Seal under English Commercial Law
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                       Awaiting Brand Signature 
                    </span>
                  </div>
                  <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-md">
                      <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-semibold text-lg shrink-0">
                         DV 
                      </div>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          David Vance
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Managing Director, Lumina Studio Ltd (CRN: 14298102)
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Authorized Statutory Corporate Signatory
                        </span>
                      </div>
                    </div>
                    <div className="p-space-sm bg-surface-container-lowest rounded-lg shadow-sm flex flex-col items-end text-right w-full sm:w-auto">
                      <span className="font-label-sm text-[10px] uppercase font-mono text-primary font-semibold">
                        Pactly Cryptographic Stamp
                      </span>
                      <div className="font-serif italic text-headline-sm text-on-surface font-bold tracking-wider my-0.5">
                        David Vance
                      </div>
                      <span className="font-label-sm text-[10px] text-on-surface-variant font-mono">
                        18 Oct 2026, 14:32:19 GMT • eIDAS Qualified
                      </span>
                    </div>
                  </div>
                  <div className="space-y-space-md pt-space-xs">
                    <label className="flex items-start gap-space-sm cursor-pointer group">
                      <input defaultChecked={true} id="mandate-check-1" type="checkbox" className="mt-1 w-5 h-5 rounded accent-primary cursor-pointer text-primary shrink-0" />
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg text-on-surface font-medium group-hover:text-primary transition-colors">
                           Commercial Authority &amp; Fund Disbursement Authorization 
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                           I confirm that I am duly authorized to legally bind 
                          <strong className="text-on-surface">
                            Lumina Studio Ltd
                          </strong>
                           to this commercial pact and hereby authorize the autonomous disbursement of the ring-fenced 
                          <strong className="text-on-surface">
                            Rs 705,960
                          </strong>
                           escrow deposit upon verified milestone triggers. 
                        </p>
                      </div>
                    </label>
                    <label className="flex items-start gap-space-sm cursor-pointer group">
                      <input defaultChecked={true} id="mandate-check-2" type="checkbox" className="mt-1 w-5 h-5 rounded accent-primary cursor-pointer text-primary shrink-0" />
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg text-on-surface font-medium group-hover:text-primary transition-colors">
                           Fast-Track Arbitration Protocol Consent (Rs 27,750Cap) 
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                           I expressly agree to the mandatory Rs 27,750Fast-Track Solicitor Arbitration protocol under the jurisdiction of the Senior Courts of England &amp; Wales in the event of an irreconcilable milestone dispute. 
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-space-lg">
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                      Deal Ledger #UK-5028
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                       Pre-Authorized 
                    </span>
                  </div>
                  <div className="p-space-sm rounded-xl bg-surface-container-low flex items-center gap-space-sm">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                      <img data-alt="High quality professional headshot of UK content creator Charlotte Emily Clark smiling warmly in modern London creative studio ambient light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZxVPk1lB-XkMhG6yKLMhykjdfeozk06ots9DudMjIhAiswylQbGJk2dbV5vQJnuGwe__jtIbz5urvLnVxvqrRfs-W8mUr1RX7RIzzC0gJl286ljywlTqXnktVtkl7-LgT5S9HlZbuKUTQkpaJoNlAHWRQ4UUGfkQChgKZ_k-M3wGzeJ3hOHeHgq01eg9TB7WR3CBn7ozwtkeNu46B2nZUVOVS_1qslpGznbxWJeApBTVpNoTHKXjZew" className="w-full h-full object-cover" />
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-secondary ring-2 ring-surface-container-lowest"></div>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="font-label-lg text-label-lg font-semibold text-on-surface truncate">
                          Charlotte Emily Clark
                        </span>
                      </div>
                      <span className="font-body-sm text-body-sm text-primary font-medium">
                        @charlotte_creator
                      </span>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="font-label-sm text-[11px] text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">
                          NatWest Faster Payments
                        </span>
                        <span className="font-label-sm text-[11px] text-secondary font-semibold">
                          KYC L3
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-space-sm pt-space-xs text-on-surface font-body-sm text-body-sm">
                    <div className="flex justify-between items-start">
                      <span className="text-on-surface-variant">
                        Milestone 1: 60s Integration
                      </span>
                      <span className="font-semibold text-on-surface">
                        Rs 444,000
                      </span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-on-surface-variant">
                        Milestone 2: Spark Ads 30d
                      </span>
                      <span className="font-semibold text-on-surface">
                        Rs 222,000
                      </span>
                    </div>
                    <div className="flex justify-between items-start pt-space-xs">
                      <span className="font-medium text-on-surface">
                        Subtotal Creator Comp
                      </span>
                      <span className="font-semibold text-on-surface">
                        Rs 666,000
                      </span>
                    </div>
                    <div className="flex justify-between items-start pt-space-xs text-on-surface-variant">
                      <div className="flex items-center gap-1">
                        <span>
                          Pactly Custody Fee (6%)
                        </span>
                        <span title="Transparent 6% escrow infrastructure fee absorbed by brand" className="material-symbols-outlined text-[14px] text-outline">
                          info
                        </span>
                      </div>
                      <span className="font-medium text-on-surface">
                        Rs 39,960
                      </span>
                    </div>
                    <span className="block text-[11px] text-secondary font-medium -mt-1">
                      ✓ 100% Brand Absorbed (Creator gets full Rs 666,000)
                    </span>
                    <div className="mt-space-md p-space-md rounded-xl bg-surface-container flex flex-col gap-1">
                      <div className="flex justify-between items-baseline">
                        <span className="font-label-lg text-label-lg font-semibold text-on-surface">
                          Total Committed Escrow
                        </span>
                        <span className="font-headline-lg text-headline-lg font-semibold text-primary">
                          Rs 705,960
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-medium mt-1">
                        <span className="material-symbols-outlined text-[16px]">
                          verified
                        </span>
                        <span>
                          FUNDS PRE-AUTHORIZED IN STRIPE CUSTODY
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[20px] text-primary">
                      route
                    </span>
                    <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                      Execution Sequence
                    </h3>
                  </div>
                  <div className="relative pl-6 space-y-space-md text-on-surface font-body-sm text-body-sm">
                    <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-surface-container-high"></div>
                    <div className="relative flex items-start gap-space-sm">
                      <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">
                         1 
                      </div>
                      <div>
                        <strong className="font-semibold text-on-surface">
                          Brand signs and seals agreement
                        </strong>
                        <p className="text-on-surface-variant text-[12px] mt-0.5">
                          Instant legal timestamp via eIDAS qualified signature.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex items-start gap-space-sm">
                      <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container text-on-surface font-semibold flex items-center justify-center text-[10px]">
                         2 
                      </div>
                      <div>
                        <strong className="font-semibold text-on-surface">
                          Encrypted dispatch to creator
                        </strong>
                        <p className="text-on-surface-variant text-[12px] mt-0.5">
                          Charlotte receives verified SMS + email passkey notification.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex items-start gap-space-sm">
                      <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container text-on-surface font-semibold flex items-center justify-center text-[10px]">
                         3 
                      </div>
                      <div>
                        <strong className="font-semibold text-on-surface">
                          48-Hour Countersign Window
                        </strong>
                        <p className="text-on-surface-variant text-[12px] mt-0.5">
                          Creator reviews terms, executes counter-signature or requests revision.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex items-start gap-space-sm">
                      <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container text-on-surface font-semibold flex items-center justify-center text-[10px]">
                         4 
                      </div>
                      <div>
                        <strong className="font-semibold text-on-surface">
                          Deal Activates &amp; YouTube API Starts
                        </strong>
                        <p className="text-on-surface-variant text-[12px] mt-0.5">
                          Escrow fully active; deliverable tracking runs automatically.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-[24px] text-secondary shrink-0 mt-0.5">
                    security
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md font-semibold text-on-surface">
                      UK Statutory Legal Guarantee
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                       Both parties are protected under England &amp; Wales Commercial Jurisdiction. Funds cannot be unilaterally reclaimed or seized while deliverables are within scheduled deadlines. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-space-xl p-space-md bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col sm:flex-row items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-sm w-full sm:w-auto justify-between sm:justify-start">
                <button type="button" className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface font-label-lg text-label-lg font-medium hover:bg-surface-container transition-colors" data-go="/deals/new/escrow">
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_back
                  </span>
                   Back to Funding Lock 
                </button>
                <button type="button" className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg text-on-surface-variant font-label-lg text-label-lg font-medium hover:text-on-surface hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    save
                  </span>
                   Save Draft 
                </button>
              </div>
              <div className="flex items-center gap-space-md w-full sm:w-auto justify-end">
                <div className="hidden md:flex flex-col text-right">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    Immediate Dispatch
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    eIDAS Hash &amp; Audit Logged
                  </span>
                </div>
                <button id="sign-dispatch-btn" type="button" className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-lg py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-semibold shadow-md hover:bg-primary-container transition-all cursor-pointer" data-go="/deals/uk-5028/locked">
                  <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[20px]">
                    enhanced_encryption
                  </span>
                  <span>
                    Sign Agreement &amp; Dispatch Pact to Creator →
                  </span>
                </button>
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
