/** Collabio — Propose Revision Modal (Creator Redline & Counter-Offer) */
export default function ProposeRevisionPage() {
  return (
    <>
      <header className="fixed top-0 w-full z-40 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-[1200px] mx-auto px-margin flex items-center justify-between gap-gutter">
          <div className="flex items-center gap-space-xl">
            <a className="flex items-center gap-space-xs" data-go="/deals" href="/deals">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[20px]">
                  verified_user
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
                Collabio
              </span>
            </a>
            <nav data-active-classes="bg-surface-container-high text-primary font-medium rounded-lg" className="hidden md:flex items-center gap-space-xs">
              <a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-label-lg text-label-lg rounded-lg" data-go="/deals" href="/deals">
                Deals
              </a>
              <a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-label-lg text-label-lg rounded-lg" data-go="/invitations/uk-5028" href="/invitations/uk-5028">
                Invitations
              </a>
              <a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-label-lg text-label-lg rounded-lg" data-go="/profile" href="/profile">
                Profile
              </a>
              <a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-label-lg text-label-lg rounded-lg" data-go="/settings" href="/settings">
                Settings
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-space-xs rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm text-secondary">
                Escrow Custody Protected
              </span>
            </div>
            <button aria-label="Notifications" type="button" className="p-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                notifications
              </span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full relative">
          <div aria-hidden="true" className="w-full max-w-[1200px] mx-auto px-margin py-space-lg pointer-events-none select-none opacity-40 blur-[1.5px]">
            <div className="flex items-center justify-between pb-space-md mb-space-lg">
              <div className="flex items-center gap-space-sm">
                <span className="font-label-md text-label-md text-on-surface-variant">
                  Deals
                </span>
                <span className="text-outline">
                  /
                </span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  UK-5028 (Lumina Studio Ltd)
                </span>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                   Escrow Custody Vault Active 
                </span>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-gutter mb-space-xl">
              <div className="col-span-8 bg-surface-container-lowest rounded-xl p-space-xl shadow-sm space-y-space-md">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase font-semibold">
                      Standard Creator Agreement (UK Jurisdiction)
                    </span>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface">
                      Pact #UK-5028: Commercial Partnership
                    </h1>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary font-label-md text-label-md font-semibold">
                     Awaiting Countersignature 
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                   Bilateral influencer endorsement agreement between Lumina Studio Ltd (registered in England & Wales #11849201) and Alex Rivera. Total payout guaranteed via Collabio Escrow Services Ltd.
                </p>
                <div className="grid grid-cols-3 gap-space-md pt-space-sm">
                  <div className="bg-surface-container-low p-space-md rounded-lg">
                    <span className="font-label-sm text-label-sm text-outline block mb-1">
                      Contracted Payout
                    </span>
                    <span className="font-headline-md text-headline-md text-on-surface">
                      Rs 666,000
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-space-md rounded-lg">
                    <span className="font-label-sm text-label-sm text-outline block mb-1">
                      Deliverables
                    </span>
                    <span className="font-headline-md text-headline-md text-on-surface">
                      2 Milestones
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-space-md rounded-lg">
                    <span className="font-label-sm text-label-sm text-outline block mb-1">
                      Final Completion
                    </span>
                    <span className="font-headline-md text-headline-md text-on-surface">
                      18 Dec 2026
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-4 bg-surface-container-lowest rounded-xl p-space-xl shadow-sm space-y-space-md">
                <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md font-semibold">
                  <span className="material-symbols-outlined text-[18px]">
                    verified
                  </span>
                   Tier-1 Safeguarded Vault 
                </div>
                <div className="space-y-1">
                  <span className="font-label-sm text-label-sm text-outline">
                    Custodial Deposit Balance
                  </span>
                  <div className="font-headline-xl text-headline-xl text-on-surface">
                    Rs 705,960
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block">
                    Includes Rs 39,960brand escrow protection fee
                  </span>
                </div>
                <div className="pt-2 text-outline font-label-sm text-label-sm">
                   Barclays Bank UK PLC • Escrow Sub-ledger Ref: 9940-201-PAC 
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-50 bg-inverse-surface/50 backdrop-blur-sm flex items-center justify-center p-space-md md:p-space-lg overflow-y-auto">
            <div className="relative w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-2xl my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              <div className="h-1.5 w-full bg-gradient-to-r from-primary via-primary-container to-secondary"></div>
              <div className="p-space-lg md:p-space-xl bg-surface-container-lowest">
                <div className="flex items-start justify-between gap-space-md">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-space-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold tracking-wider">
                         DEAL #UK-5028 
                      </span>
                      <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-[13px]">
                          lock
                        </span>
                         CURRENT ESCROW: Rs 705,960LOCKED 
                      </span>
                      <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-variant text-on-surface-variant font-label-sm text-label-sm">
                         COUNTER-PROPOSAL DRAFT 
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                       Propose Commercial Revisions & Redline 
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                       Submit bilateral amendments to Lumina Studio Ltd. If accepted, the brand must top up or adjust the ring-fenced escrow before revised pact execution. Existing locked deposit remains safeguarded in vault. 
                    </p>
                  </div>
                  <button aria-label="Close revision modal" type="button" className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined text-[22px]">
                      close
                    </span>
                  </button>
                </div>
              </div>
              <div className="max-h-[675px] overflow-y-auto px-space-lg md:px-space-xl pb-space-lg space-y-space-lg">
                <div className="rounded-xl bg-surface-container-low p-space-md flex items-start gap-space-md">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      policy
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                      <span>
                        Notice: Acceptance Window Paused
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">
                        Dispatches to David Vance (Managing Director)
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                       Submitting revisions pauses the 48-hour acceptance window and dispatches a bilateral redline markup to Lumina Studio Ltd. Current 
                      <span className="font-semibold text-on-surface">
                        Rs 705,960
                      </span>
                       escrow remains locked in Barclays/Stripe custodial vault and cannot be withdrawn during negotiations. 
                    </p>
                  </div>
                </div>
                <div className="space-y-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                      <span className="font-headline-sm text-headline-sm text-on-surface">
                        Proposed Scope & Fee Redlines
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                      3 Terms Modified
                    </span>
                  </div>
                  <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-md">
                    <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                          M1
                        </span>
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Milestone 1: 60s–90s Dedicated YouTube Integration
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary font-label-sm text-label-sm font-semibold">
                         +Rs 74,000adjustment 
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md text-body-sm">
                      <div className="bg-surface-container-low/70 rounded-lg p-space-md space-y-space-sm">
                        <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block font-semibold">
                          Original Agreement Terms
                        </span>
                        <div>
                          <span className="text-on-surface-variant font-label-sm block">
                            Target Delivery Date
                          </span>
                          <span className="line-through text-outline font-medium">
                            18 Nov 2026
                          </span>
                        </div>
                        <div>
                          <span className="text-on-surface-variant font-label-sm block">
                            Integration Placement
                          </span>
                          <span className="line-through text-outline">
                            Mid-roll sponsored segment in first 3 mins
                          </span>
                        </div>
                        <div className="pt-space-xs">
                          <span className="text-on-surface-variant font-label-sm block">
                            Milestone Payout
                          </span>
                          <span className="line-through text-outline font-medium">
                            Rs 444,000Net
                          </span>
                        </div>
                      </div>
                      <div className="bg-surface-container rounded-lg p-space-md space-y-space-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
                            Proposed Redline
                          </span>
                          <span className="text-secondary font-label-sm text-label-sm font-medium">
                            Date Extended (+7d)
                          </span>
                        </div>
                        <div>
                          <span className="text-on-surface-variant font-label-sm block">
                            Target Delivery Date
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-on-surface">
                              25 Nov 2026
                            </span>
                            <span className="px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface text-label-sm font-normal">
                              Production schedule buffer
                            </span>
                          </div>
                        </div>
                        <div>
                          <span className="text-on-surface-variant font-label-sm block">
                            Integration Placement
                          </span>
                          <span className="text-on-surface font-medium">
                            Mid-roll sponsor segment placed between 3:00 - 6:00 (optimal audience retention hook)
                          </span>
                        </div>
                        <div className="pt-space-xs flex items-center justify-between">
                          <div>
                            <span className="text-on-surface-variant font-label-sm block">
                              Milestone Payout
                            </span>
                            <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                              Rs 518,000Net
                            </span>
                          </div>
                          <span className="text-secondary font-label-sm font-semibold">
                            +Rs 74,000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-md">
                    <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                          M2
                        </span>
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Milestone 2: Spark Ads Whitelisting Authorization
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary font-label-sm text-label-sm font-semibold">
                         +Rs 37,000Whitelisting benchmark rate adjustment 
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md text-body-sm">
                      <div className="bg-surface-container-low/70 rounded-lg p-space-md space-y-space-sm">
                        <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block font-semibold">
                          Original Agreement Terms
                        </span>
                        <div>
                          <span className="text-on-surface-variant font-label-sm block">
                            Licensing Period
                          </span>
                          <span className="text-on-surface">
                            30 Days
                          </span>
                        </div>
                        <div>
                          <span className="text-on-surface-variant font-label-sm block">
                            Whitelisting Fee
                          </span>
                          <span className="line-through text-outline font-medium">
                            Rs 222,000Net
                          </span>
                        </div>
                      </div>
                      <div className="bg-surface-container rounded-lg p-space-md space-y-space-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
                            Proposed Redline
                          </span>
                          <span className="text-outline font-label-sm text-label-sm">
                            Term Duration Unchanged
                          </span>
                        </div>
                        <div>
                          <span className="text-on-surface-variant font-label-sm block">
                            Licensing Period
                          </span>
                          <span className="text-on-surface font-medium">
                            30 Days (TikTok Spark Ads Auth Code)
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-on-surface-variant font-label-sm block">
                              Whitelisting Fee
                            </span>
                            <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                              Rs 259,000Net
                            </span>
                          </div>
                          <span className="text-secondary font-label-sm font-semibold">
                            +Rs 37,000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-md">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-sm text-headline-sm text-on-surface">
                        Legal Safeguards & IP Rights (Schedules 3 & 4)
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                         Creator Safeguard Redline 
                      </span>
                    </div>
                    <div className="space-y-space-sm text-body-sm">
                      <div className="flex items-start gap-space-md p-space-sm rounded-lg bg-surface-container-low/50">
                        <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <div className="flex-1">
                          <span className="font-label-md text-label-md text-on-surface font-medium">
                            Clause 4.2 Revision Iteration Limit:
                          </span>
                          <span className="text-on-surface-variant">
                             Strictly capped at two (2) consolidated feedback cycles prior to final publication.
                          </span>
                          <span className="text-outline text-label-sm ml-2 font-medium">
                            (Accepted As-Is)
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-md p-space-sm rounded-lg bg-surface-container">
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                          edit_note
                        </span>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-label-md text-label-md text-on-surface font-semibold">
                              Clause 8.1 Usage & Raw Footage Restrictions (Amended):
                            </span>
                            <span className="px-2 py-0.2 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                              Bilateral Addendum
                            </span>
                          </div>
                          <p className="text-on-surface leading-relaxed">
                            <span className="bg-secondary/15 px-1 py-0.5 rounded text-on-surface font-medium">
                               Whitelisting usage restricted exclusively to paid TikTok Spark Ads; excludes broadcast TV and organic reposting without separate licensing addendum. 
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-headline-sm text-headline-sm text-on-surface block">
                        Escrow Ledger Adjustment Calculation
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Collabio Escrow Custody Account (FCA Safeguarded Client Funds)
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[15px]">
                        lock_reset
                      </span>
                       Top-Up Escrow Delta 
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-body-sm text-body-sm">
                      <thead>
                        <tr className="text-outline uppercase font-label-sm text-label-sm bg-surface-container-low">
                          <th className="py-2.5 px-3 rounded-l-lg">
                            Component Ledger Line
                          </th>
                          <th className="py-2.5 px-3 text-right">
                            Current Escrow
                          </th>
                          <th className="py-2.5 px-3 text-right text-primary">
                            Proposed Counter
                          </th>
                          <th className="py-2.5 px-3 text-right rounded-r-lg font-semibold text-on-surface">
                            Variance (Delta)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant/10 text-on-surface">
                        <tr>
                          <td className="py-3 px-3">
                            <span className="font-medium text-on-surface">
                              Creator Net Payout
                            </span>
                            <span className="text-outline block text-label-sm">
                              Direct to Alex Rivera upon milestone release
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right font-medium">
                            Rs 666,000
                          </td>
                          <td className="py-3 px-3 text-right font-semibold text-primary">
                            Rs 777,000
                          </td>
                          <td className="py-3 px-3 text-right font-semibold text-secondary">
                            +Rs 111,000
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-3">
                            <span className="font-medium text-on-surface">
                              Brand Custody & Safeguarding Fee (6%)
                            </span>
                            <span className="text-outline block text-label-sm">
                              Absorbed fully by Lumina Studio Ltd
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right font-medium">
                            Rs 39,960
                          </td>
                          <td className="py-3 px-3 text-right font-semibold text-primary">
                            Rs 46,620
                          </td>
                          <td className="py-3 px-3 text-right font-semibold text-secondary">
                            +Rs 6,660
                          </td>
                        </tr>
                        <tr className="bg-surface-container-high/40 font-semibold">
                          <td className="py-3.5 px-3 rounded-l-lg">
                            <span className="text-on-surface font-headline-sm text-headline-sm">
                              Total Required Escrow Lock
                            </span>
                            <span className="text-on-surface-variant block font-normal text-label-sm">
                              Requires brand settlement before counter-pact takes effect
                            </span>
                          </td>
                          <td className="py-3.5 px-3 text-right font-headline-sm text-headline-sm text-on-surface">
                            Rs 705,960
                          </td>
                          <td className="py-3.5 px-3 text-right font-headline-sm text-headline-sm text-primary">
                            Rs 823,620
                          </td>
                          <td className="py-3.5 px-3 text-right rounded-r-lg font-headline-sm text-headline-sm text-secondary">
                             +Rs 117,660Top-Up 
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex items-center gap-2 p-space-sm rounded-lg bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      verified_user
                    </span>
                    <span>
                      <strong className="font-semibold text-on-surface">
                        100% Brand Absorbed Fee Policy:
                      </strong>
                       Creator receives net Rs 777,000exactly upon milestone verification. No transactional deductions or Stripe platform percentages will be deducted from your payout. 
                    </span>
                  </div>
                </div>
                <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <label htmlFor="commercial-rationale" className="font-headline-sm text-headline-sm text-on-surface">
                       Commercial Rationale & Note to David Vance 
                    </label>
                    <span className="font-label-sm text-label-sm text-outline">
                      Included in official redline email
                    </span>
                  </div>
                  <div className="relative">
                    <textarea id="commercial-rationale" placeholder="Provide clear reasoning for requested adjustments..." rows={4} className="w-full rounded-lg bg-surface-container-low p-space-md text-on-surface font-body-md text-body-md leading-relaxed focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none shadow-inner">
                      Hi David, thanks for locking in the escrow so promptly! I’ve reviewed the production timeline and proposed shifting the delivery to 25 Nov to accommodate full 4K render and custom B-roll integration. I also adjusted the rate by +Rs 111,000to reflect our standard Q4 holiday tech integration rates and extended whitelisting rights. Let me know if this works and I will sign immediately upon escrow top-up!
                    </textarea>
                  </div>
                  <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant pt-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-secondary">
                        check
                      </span>
                       Formal, constructive, and friendly tone 
                    </span>
                    <span>
                      438 / 1,000 characters
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-space-lg md:p-space-xl bg-surface-container-lowest shadow-lg space-y-space-md">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md">
                  <button type="button" className="w-full sm:w-auto px-space-lg py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-label-lg text-label-lg font-medium text-center" data-go="/creator">
                     Cancel & Return to Pact Review 
                  </button>
                  <div className="flex flex-wrap items-center gap-space-sm w-full sm:w-auto justify-end">
                    <button type="button" className="px-space-lg py-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-lg text-label-lg font-medium shadow-sm">
                       Save Draft Proposal 
                    </button>
                    <button type="button" className="w-full sm:w-auto px-space-xl py-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-all font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg" data-go="/deals/uk-5028/review">
                      <span className="material-symbols-outlined text-[18px]">
                        lock_reset
                      </span>
                      <span>
                        Submit Counter-Offer & Redline Markup (Rs 777,000Net)
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-space-xs text-outline font-label-sm text-label-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px]">
                      shield
                    </span>
                    <span>
                      Cryptographic Redline Diff (v2.4-rev1) • eIDAS Timestamped • 72-Hour Response Window for Brand
                    </span>
                  </div>
                  <span>
                    Collabio Neutral Escrow Custody • Barclays Ring-Fenced Account
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-xs">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[14px]">
                balance
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface font-semibold">
              Collabio Escrow UK Ltd
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              • Impartial Partnership Referee
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-space-lg text-on-surface-variant font-body-sm text-body-sm">
            <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
              Terms of Custody
            </a>
            <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
              Arbitration Protocol
            </a>
            <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
              Privacy Policy
            </a>
            <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
              FCA Safeguarding Disclosures
            </a>
          </div>
          <p className="font-body-sm text-body-sm text-outline">
            © 2025 Collabio. All client funds held in ring-fenced Tier 1 UK bank accounts.
          </p>
        </div>
      </footer>
    </>
  )
}
