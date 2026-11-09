/** Collabio — Terms of Service & Dispute Protocol Update */
export default function LegalPage() {
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
                  Collabio
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
        <div className="flex flex-col w-full relative min-h-[calc(100vh-6rem)]">
          <div aria-hidden="true" className="w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-lg opacity-40 blur-[2px] pointer-events-none select-none">
            <div className="flex items-center justify-between pb-space-lg">
              <div className="flex flex-col gap-1">
                <span className="font-headline-lg text-headline-lg text-on-surface">
                  Active Commercial Escrows
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  2 ongoing deliverables · Rs 1,239,500guaranteed in custody
                </span>
              </div>
              <div className="flex items-center gap-space-sm">
                <div className="px-space-md py-space-sm rounded-lg bg-surface-container-high text-on-surface font-label-md">
                  Export Ledger
                </div>
                <div className="px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary font-label-md">
                  New Commercial Pact
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-lg">
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between h-40">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Escrow Protected
                  </span>
                  <span className="material-symbols-outlined text-secondary">
                    verified
                  </span>
                </div>
                <div>
                  <div className="font-headline-xl text-headline-xl text-on-surface font-bold">
                    Rs 1,239,500
                  </div>
                  <span className="font-body-sm text-body-sm text-secondary font-medium">
                    100% Ring-fenced in Barclays Client Account
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between h-40">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Pending Post Review
                  </span>
                  <span className="material-symbols-outlined text-tertiary-container">
                    schedule
                  </span>
                </div>
                <div>
                  <div className="font-headline-xl text-headline-xl text-on-surface font-bold">
                    1 Milestone
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Autumn Lookbook Reel (#PACT-8821)
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between h-40">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Dispute Exposure
                  </span>
                  <span className="material-symbols-outlined text-secondary">
                    gavel
                  </span>
                </div>
                <div>
                  <div className="font-headline-xl text-headline-xl text-secondary font-bold">
                    Rs 0
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Zero contested milestone claims
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
              <div className="h-8 bg-surface-container rounded-lg w-1/3 mb-4"></div>
              <div className="space-y-3">
                <div className="h-12 bg-surface-container-low rounded-lg w-full"></div>
                <div className="h-12 bg-surface-container-low rounded-lg w-full"></div>
                <div className="h-12 bg-surface-container-low rounded-lg w-full"></div>
              </div>
            </div>
          </div>
          <div aria-labelledby="modal-legal-title" aria-modal="true" role="dialog" className="fixed inset-0 z-50 flex items-center justify-center p-space-sm sm:p-space-md lg:p-space-lg bg-inverse-surface/60 backdrop-blur-md overflow-y-auto">
            <div className="relative w-full max-w-[860px] bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden flex flex-col my-auto transition-all">
              <div className="bg-surface-container-low px-space-md lg:px-space-lg py-2.5 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-space-sm">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                    Mandatory Legal Governance Gate
                  </span>
                  <span className="text-outline-variant font-label-sm">
                    •
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    England &amp; Wales Commercial Jurisdiction
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-surface-container rounded-full p-0.5">
                  <button id="toggle-state-locked" type="button" className="px-2.5 py-0.5 rounded-full font-label-sm text-label-sm transition-all bg-surface-container-lowest text-on-surface font-semibold shadow-xs">
                     State: Unread 
                  </button>
                  <button id="toggle-state-ready" type="button" className="px-2.5 py-0.5 rounded-full font-label-sm text-label-sm transition-all text-on-surface-variant hover:text-on-surface">
                     State: Read &amp; Active 
                  </button>
                </div>
              </div>
              <div className="px-space-md lg:px-space-lg pt-space-lg pb-space-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-xs">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[14px]">
                        policy
                      </span>
                       Master Schedule v4.2 
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[14px]">
                        schedule
                      </span>
                       Effective: 1 Nov 2026 
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                    HASH: 8f9a2e...b301
                  </span>
                </div>
                <h1 id="modal-legal-title" className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                   Updated Master Escrow Terms &amp; Dispute Protocol 
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-3xl">
                   Collabio has updated its English Commercial Law Standard Schedule and Independent Solicitor Arbitration Protocol. Review what’s changing below before continuing to your escrow workspace.
                </p>
              </div>
              <div className="px-space-md lg:px-space-lg pb-space-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
                  <div className="p-space-md rounded-lg bg-surface-container-low transition-colors hover:bg-surface-container">
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-1.5 rounded-md bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">
                          timer
                        </span>
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                        48h Release
                      </span>
                    </div>
                    <div className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">
                       Ghosting Auto-Release 
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                       Window shortened from 72h to 
                      <strong className="text-on-surface">
                        48 hours
                      </strong>
                      . If brand review stalls without dispute filing, funds release to creator automatically. 
                    </p>
                  </div>
                  <div className="p-space-md rounded-lg bg-surface-container-low transition-colors hover:bg-surface-container">
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-1.5 rounded-md bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">
                          account_balance
                        </span>
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold">
                        EMR 2011
                      </span>
                    </div>
                    <div className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">
                       FCA Segregation Rails 
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                       Explicit insolvency-remote clauses ensuring funds held under Stripe Connect rails cannot be attached by platform or counterparty creditors. 
                    </p>
                  </div>
                  <div className="p-space-md rounded-lg bg-surface-container-low transition-colors hover:bg-surface-container">
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-1.5 rounded-md bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">
                          balance
                        </span>
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
                        Rs 27,750Fixed Cap
                      </span>
                    </div>
                    <div className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">
                       Fast-Track Legal Referee 
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                       Binding determination by Senior Courts of England &amp; Wales qualified solicitors, capping micro-claim fee recovery to Rs 27,750per disputing party. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-space-md lg:px-space-lg flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-label-md text-label-md font-semibold text-on-surface">
                      Legal Agreement Text
                    </span>
                    <span id="reading-status-chip" className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_downward
                      </span>
                       Scroll to bottom to review (0%) 
                    </span>
                  </div>
                  <div className="text-right">
                    <span id="section-indicator" className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                      Viewing Section 1 of 5
                    </span>
                  </div>
                </div>
                <div className="relative rounded-xl bg-surface-container-low overflow-hidden">
                  <div className="w-full bg-surface-variant h-1">
                    <div id="scroll-progress-bar" className="bg-primary-container h-full w-0 transition-all duration-75"></div>
                  </div>
                  <div id="legal-viewer-body" tabIndex={0} className="h-64 sm:h-72 overflow-y-auto p-space-md lg:p-space-lg font-body-sm text-body-sm text-on-surface space-y-space-md select-text focus:outline-none">
                    <section id="doc-section-1" className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
                          Clause 1.0
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Statutory Compliance
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                         1. Scope of Impartial Custodial Services &amp; Escrow Segregation 
                      </h3>
                      <p className="text-on-surface-variant leading-relaxed">
                         1.1 Collabio Technologies Ltd ("the Custodian") provides independent escrow verification software for commercial agreements. Funds deposited by Brands or Agency counterparties are deposited into segregated, insolvency-remote client balances administered via FCA-regulated Electronic Money Institution partner rails (Stripe Payments UK, Ltd, FRN 900461) in strict compliance with the UK Electronic Money Regulations 2011 and Payment Services Regulations 2017.
                      </p>
                      <p className="text-on-surface-variant leading-relaxed">
                         1.2 At no point do client escrow funds form part of Collabio’s general corporate assets. Neither party’s liquidators, administrators, nor general judgment creditors shall hold right, title, or claim to ring-fenced funds prior to verified milestone execution or arbitrator award.
                      </p>
                    </section>
                    <section id="doc-section-2" className="space-y-2 pt-space-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
                          Clause 2.0
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Execution Milestones
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                         2. Automated Acceptance &amp; Milestone Verification Triggers 
                      </h3>
                      <p className="text-on-surface-variant leading-relaxed">
                         2.1 
                        <strong className="text-on-surface">
                          Ghosting Mitigation Protocol:
                        </strong>
                         Upon delivery confirmation of designated digital campaign deliverables (including raw asset uploads or authenticated social permalinks), the commissioning Brand counterparty is granted a definitive inspection window of forty-eight (48) consecutive hours ("Inspection Period"). 
                      </p>
                      <p className="text-on-surface-variant leading-relaxed">
                         2.2 If the Brand counterparty fails to either: (a) formally approve the milestone, or (b) lodge a specific Non-Conforming Deliverable Notice via the Collabio interface within said 48 hours, the Custodial System will automatically trigger irrevocable disbursement of the secured escrow funds to the Creator counterparty's payout balance.
                      </p>
                    </section>
                    <section id="doc-section-3" className="space-y-2 pt-space-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
                          Clause 3.0
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Licensing Rights
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                         3. Intellectual Property Transfer &amp; Whitelisting Licenses 
                      </h3>
                      <p className="text-on-surface-variant leading-relaxed">
                         3.1 All copyright, database rights, and digital personality permissions remain strictly vested in the Creator until final escrow release has been cleared by bank settlement. Whitelisting or paid advertising amplification rights granted under custom pact addenda take effect contemporaneously with custodial fund release. 
                      </p>
                      <p className="text-on-surface-variant leading-relaxed">
                         3.2 Unauthorised organic reposting or commercial ad asset usage prior to verified escrow release constitutes a material breach of English Copyright Law (Copyright, Designs and Patents Act 1988) actionable under expedited injunctive relief. 
                      </p>
                    </section>
                    <section id="doc-section-4" className="space-y-2 pt-space-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
                          Clause 4.0
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Arbitration &amp; Dispute
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                         4. Dispute Escalation, Evidence Packs &amp; Solicitor Arbitration 
                      </h3>
                      <p className="text-on-surface-variant leading-relaxed">
                         4.1 In the event of an irreconcilable milestone dispute, either party may invoke the Collabio Independent Solicitor Referee Protocol. Both parties agree to submit digital evidence packs within seventy-two (72) hours.
                      </p>
                      <p className="text-on-surface-variant leading-relaxed">
                         4.2 The dispute shall be submitted to a panel solicitor admitted to practice in England and Wales. The arbitration fee is strictly capped at seventy-five pounds sterling (Rs 27,750) per party. The arbitrator's written decision shall be binding, non-appealable, and enforce immediate partial or complete disbursement of the disputed escrow deposit. 
                      </p>
                    </section>
                    <section id="doc-section-5" className="space-y-2 pt-space-sm pb-space-md">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
                          Clause 5.0
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Jurisdiction
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                         5. Governing Law &amp; Jurisdiction 
                      </h3>
                      <p className="text-on-surface-variant leading-relaxed">
                         5.1 This Agreement and any dispute or claim arising out of or in connection with it or its subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of England and Wales. 
                      </p>
                      <p className="text-on-surface-variant leading-relaxed">
                         5.2 By executing digital acceptance below, each counterparty consents to electronic execution under the UK Electronic Communications Act 2000 and warrants full legal authority to enter binding commercial arrangements. 
                      </p>
                      <div className="mt-space-md p-space-sm rounded-lg bg-surface-container flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                        <span className="flex items-center gap-1.5 text-secondary font-semibold">
                          <span className="material-symbols-outlined text-[16px]">
                            verified
                          </span>
                           End of Master Terms Schedule v4.2 reached 
                        </span>
                        <span className="font-mono">
                          Collabio-UK-2026-v4.2-STABLE
                        </span>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div className="px-space-md lg:px-space-lg pt-space-md pb-space-sm flex flex-col gap-space-sm">
                <label id="label-chk-terms" className="flex items-start gap-space-sm p-space-sm rounded-lg transition-colors cursor-pointer select-none bg-surface-container-low hover:bg-surface-container">
                  <input id="chk-terms" type="checkbox" className="mt-1 h-4 w-4 rounded accent-primary text-primary focus:ring-primary-container" />
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                       I have reviewed and agree to the Collabio Master Terms of Service (v4.2) and Schedule 4 Commercial Protection Clauses.
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                       Includes binding acceptance of the accelerated 48h automated post verification protocol. 
                    </span>
                  </div>
                </label>
                <label id="label-chk-custody" className="flex items-start gap-space-sm p-space-sm rounded-lg transition-colors cursor-pointer select-none bg-surface-container-low hover:bg-surface-container">
                  <input id="chk-custody" type="checkbox" className="mt-1 h-4 w-4 rounded accent-primary text-primary focus:ring-primary-container" />
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                       I acknowledge that escrow balances remain subject to English Commercial Law and FCA-regulated client account segregation. 
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                       Funds held under Electronic Money Regulations 2011 partner rails cannot be claimed by general platform creditors. 
                    </span>
                  </div>
                </label>
              </div>
              <div className="px-space-md lg:px-space-lg py-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-sm w-full sm:w-auto">
                  <a className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-xs hover:bg-surface-container transition-colors" href="#" onClick={(event) => event.preventDefault()}>
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      download
                    </span>
                    <span>
                      Download Clean PDF (v4.2)
                    </span>
                  </a>
                  <span className="hidden md:inline font-label-sm text-label-sm text-on-surface-variant font-mono">
                    SHA-256: 8f9a2e4c...
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full sm:w-auto">
                  <div id="unlock-helper-message" className="font-label-sm text-label-sm text-tertiary-container flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">
                      lock
                    </span>
                    <span>
                      Scroll document to bottom to unlock
                    </span>
                  </div>
                  <button id="btn-accept-terms" type="button" className="w-full sm:w-auto px-space-lg py-2.5 rounded-lg bg-outline-variant text-on-surface-variant font-label-md text-label-md font-semibold cursor-pointer transition-all flex items-center justify-center gap-2 shadow-xs" data-go="/deals/uk-5028">
                    <span className="material-symbols-outlined text-[18px]">
                      gavel
                    </span>
                    <span id="btn-accept-text">
                      Accept Terms &amp; Return to Dashboard
                    </span>
                  </button>
                </div>
              </div>
              <div className="px-space-md lg:px-space-lg py-2 bg-surface-container-highest/60 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-secondary text-[14px]">
                    shield
                  </span>
                   Cryptographic signing token: 
                  <code className="font-mono text-on-surface font-semibold">
                    SIG-PACT-2026-ENGLAND
                  </code>
                </span>
                <span className="hidden sm:inline">
                  A timestamped PDF audit log will be appended to your counterparty record.
                </span>
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
                Collabio
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
              Collabio acts as an impartial software custodian. Funds held in segregated client escrow accounts powered by authorised payment institutions regulated under the UK Electronic Money Regulations 2011. Registered in England &amp; Wales.
            </p>
            <p className="font-label-sm text-label-sm shrink-0">
              © 2025 Collabio Technologies Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
