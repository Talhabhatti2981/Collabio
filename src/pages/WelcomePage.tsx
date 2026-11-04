import Logo from '../components/Logo'

/** Pactly — Escrow & Contracts for Paid Creator Posts */
export default function WelcomePage() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="w-full bg-surface-container-low px-margin py-1.5 flex items-center justify-between border-b border-outline-variant/30 text-on-surface-variant">
          <div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
            <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
            <span>
              English Law Jurisdiction
            </span>
            <span className="text-outline">
              ·
            </span>
            <span>
              6% Flat Platform Fee
            </span>
            <span className="text-outline">
              ·
            </span>
            <span>
              Custodial Stripe Escrow
            </span>
          </div>
          <div className="flex items-center gap-space-md font-label-sm text-label-sm">
            <span className="flex items-center gap-1 text-on-surface-variant">
              <span className="material-symbols-outlined text-[14px] text-secondary">
                lock
              </span>
              FCA Regulated Partner Rails
            </span>
          </div>
        </div>
        <div className="h-16 max-w-[1200px] mx-auto px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-xl">
            <div className="flex items-center gap-space-sm">
              <Logo className="h-8 w-auto object-contain" />
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
                Pactly
              </span>
            </div>
            <nav data-active-classes="bg-surface-container-high text-primary font-semibold rounded-lg" className="hidden lg:flex items-center gap-space-sm">
              <a className="px-3 py-2 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/deals" href="/deals">
                Deals
              </a>
              <a className="px-3 py-2 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/welcome" href="/welcome">
                Contracts
              </a>
              <a aria-current="page" className="px-3 py-2 transition-colors bg-surface-container-high text-primary font-semibold rounded-lg" data-go="/welcome" href="/welcome">
                How Escrow Works
              </a>
              <a className="px-3 py-2 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/help" href="/help">
                Help &amp; Legal
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-space-sm">
            <a className="hidden sm:inline-block px-3 py-2 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-go="/login" href="/login">
              Log in
            </a>
            <a className="px-3.5 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest font-label-lg text-label-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" data-flow="role-brand" href="#" onClick={(event) => event.preventDefault()}>
              I'm a brand
            </a>
            <a className="px-3.5 py-2 rounded-lg bg-primary-container font-label-lg text-label-lg text-on-primary hover:bg-primary transition-colors" data-flow="role-creator" href="#" onClick={(event) => event.preventDefault()}>
              I'm a creator
            </a>
            <div className="ml-space-xs w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-24 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute -top-40 right-1/2 translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-primary-fixed/40 via-surface-container-high/20 to-transparent blur-3xl opacity-70"></div>
            <section className="relative max-w-[1200px] mx-auto px-margin pt-12 pb-20 lg:pt-20 lg:pb-28">
              <div className="flex flex-col items-center text-center max-w-[880px] mx-auto">
                <div className="inline-flex items-center gap-space-sm px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant shadow-sm mb-8 transition-all hover:bg-surface-container-high">
                  <span className="flex h-2 w-2 rounded-full bg-secondary-fixed-dim"></span>
                  <span className="font-label-sm text-label-sm tracking-wide">
                    Regulated UK Escrow Architecture
                  </span>
                  <span className="text-outline-variant">
                    ·
                  </span>
                  <span className="font-label-sm text-label-sm">
                    Governed under English Law
                  </span>
                  <span className="text-outline-variant">
                    ·
                  </span>
                  <span className="font-label-sm text-label-sm font-semibold text-primary">
                    6% Flat Fee
                  </span>
                </div>
                <h1 className="font-headline-xl text-[44px] leading-[52px] sm:text-[56px] sm:leading-[64px] lg:text-[68px] lg:leading-[76px] tracking-tight text-on-surface font-semibold mb-6">
                   Neither side has to 
                  <br className="hidden sm:inline" />
                  <span className="text-primary-container relative inline-block">
                     go first. 
                    <svg preserveAspectRatio="none" viewBox="0 0 100 20" className="absolute -bottom-2 left-0 w-full h-3 text-secondary-fixed-dim/70">
                      <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
                    </svg>
                  </span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[680px] mx-auto mb-10 leading-relaxed">
                   Pactly holds the brand’s payment and the signed contract in escrow until the post is live and verified. Simple, procedural protection for a straightforward 6% fee. 
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md w-full sm:w-auto mb-14">
                  <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary transition-all duration-200" data-go="/signup" href="/signup">
                    <span>
                      I'm a brand — Start a deal
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </a>
                  <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-container hover:shadow transition-all duration-200" data-flow="role-creator" href="#" onClick={(event) => event.preventDefault()}>
                    <span>
                      I'm a creator — Accept terms
                    </span>
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      verified_user
                    </span>
                  </a>
                </div>
                <div className="w-full max-w-[760px] bg-surface-container-lowest rounded-xl p-5 shadow-sm text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        account_balance_wallet
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Escrow Deposit Protection #UK-4891
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-secondary-fixed/20 text-on-secondary-fixed-variant font-label-sm text-label-sm">
                          Funded &amp; Secured
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Lumina Studio × @charlotte_creator · 1x Verified Reel + 30-Day Usage
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 self-end md:self-auto">
                    <div className="text-right">
                      <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider">
                        Custody Balance
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Rs 888,000
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-secondary-fixed-variant text-[18px]">
                        lock
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 pt-10">
                <p className="text-center font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-8">
                   Brands &amp; agencies securing deals via Pactly 
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center opacity-70">
                  <div className="flex items-center gap-2 font-headline-sm text-headline-sm text-on-surface font-medium tracking-tight">
                    <span className="material-symbols-outlined text-[20px] text-primary">
                      blur_on
                    </span>
                     Lumina Studio 
                  </div>
                  <div className="flex items-center gap-2 font-headline-sm text-headline-sm text-on-surface font-medium tracking-tight">
                    <span className="material-symbols-outlined text-[20px] text-secondary">
                      token
                    </span>
                     Finova UK 
                  </div>
                  <div className="flex items-center gap-2 font-headline-sm text-headline-sm text-on-surface font-medium tracking-tight">
                    <span className="material-symbols-outlined text-[20px] text-tertiary">
                      spa
                    </span>
                     Bloom &amp; Wild Labs 
                  </div>
                  <div className="flex items-center gap-2 font-headline-sm text-headline-sm text-on-surface font-medium tracking-tight">
                    <span className="material-symbols-outlined text-[20px] text-primary">
                      change_history
                    </span>
                     Kinto Digital 
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex items-center gap-2 font-headline-sm text-headline-sm text-on-surface font-medium tracking-tight">
                    <span className="material-symbols-outlined text-[20px] text-on-surface">
                      diamond
                    </span>
                     Vero Apparel 
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section className="w-full bg-surface-container-low py-20 lg:py-28">
            <div className="max-w-[1200px] mx-auto px-margin">
              <div className="text-center max-w-[700px] mx-auto mb-16">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm mb-3">
                  <span className="material-symbols-outlined text-[14px]">
                    sync_alt
                  </span>
                  <span>
                    Procedural Lifecycle
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mb-3">
                   The 4-Step Escrow Protocol 
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                   Neither party holds leverage over the other. Every deliverable, verification check, and payout step happens strictly in clear daylight. 
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="w-8 h-8 rounded-full bg-primary-fixed text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                        1
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Milestone 01
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-semibold">
                      Agree terms
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                       Solicitor-drafted clauses generated from a 34-question brief. Fixed upon dual e-signature. 
                    </p>
                  </div>
                  <div className="bg-surface-container rounded-lg p-3 text-on-surface-variant flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      draw
                    </span>
                    <span className="font-label-sm text-label-sm">
                      Standard UK Commercial Contract
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="w-8 h-8 rounded-full bg-primary-fixed text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                        2
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Milestone 02
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-semibold">
                      Brand pays into escrow
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                       Deposit sits segregated in Pactly's account via Stripe. Money never moves without an instruction. 
                    </p>
                  </div>
                  <div className="bg-surface-container rounded-lg p-3 text-on-surface-variant flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      verified
                    </span>
                    <span className="font-label-sm text-label-sm">
                      Segregated Stripe Client Vault
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="w-8 h-8 rounded-full bg-primary-fixed text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                        3
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Milestone 03
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-semibold">
                      Creator delivers
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                       Creator drafts, brand approves, post goes live. Automated API checks verify hashtags and live status. 
                    </p>
                  </div>
                  <div className="bg-surface-container rounded-lg p-3 text-on-surface-variant flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      smart_toy
                    </span>
                    <span className="font-label-sm text-label-sm">
                      Live API Hashtag &amp; Reel Verification
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                        4
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                        Instant Release
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-semibold">
                      Funds release
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                       Brand confirms within 3 working days (or automatic sweep approval). Funds release straight to UK bank account. 
                    </p>
                  </div>
                  <div className="bg-surface-container rounded-lg p-3 text-on-surface-variant flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      payments
                    </span>
                    <span className="font-label-sm text-label-sm">
                      Same-Day Faster Payments BACS
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-12 bg-surface-container rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-[920px] mx-auto text-on-surface-variant">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    gavel
                  </span>
                  <span className="font-body-sm text-body-sm">
                     Contracts cannot be unilaterally edited after signature. Post verification triggers contractual release within 72 hours. 
                  </span>
                </div>
                <a className="font-label-sm text-label-sm font-semibold text-primary hover:underline whitespace-nowrap" data-go="/welcome" href="/welcome">
                   Read Escrow Rulebook → 
                </a>
              </div>
            </div>
          </section>
          <section className="max-w-[1200px] mx-auto px-margin py-20 lg:py-28 w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-[620px]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm mb-3">
                  <span className="material-symbols-outlined text-[14px] text-secondary">
                    security
                  </span>
                  <span>
                    Zero Ambiguity
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mb-3">
                   Trust &amp; Legal Guarantees 
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                   Pactly replaces vague WhatsApp promises and unpaid invoice chases with clear, enforceable commercial infrastructure. 
                </p>
              </div>
              <div className="text-left md:text-right">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                  Standard Resolution Window
                </span>
                <span className="font-headline-md text-headline-md text-primary font-semibold">
                  Under 48 Hours
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined text-[26px]">
                      contract
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3 font-semibold">
                    Solicitor-drafted contracts
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                     Formally structured under English law. Clauses cannot be unilaterally reopened once dual-signed. 
                  </p>
                </div>
                <div className="pt-4 bg-surface-container-low rounded-lg p-3 text-on-surface-variant">
                  <p className="font-body-sm text-body-sm">
                    <strong className="font-semibold text-on-surface">
                      Legal binding:
                    </strong>
                     Clear IP transfer and organic repost rights defined before any creative work starts. 
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-6">
                    <span className="material-symbols-outlined text-[26px]">
                      shield_person
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3 font-semibold">
                    Payments held via Stripe
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                     Real PKR escrow custody. Segregated funds never mingled with operations. 
                  </p>
                </div>
                <div className="pt-4 bg-surface-container-low rounded-lg p-3 text-on-surface-variant">
                  <p className="font-body-sm text-body-sm">
                    <strong className="font-semibold text-on-surface">
                      FCA Partner Rails:
                    </strong>
                     Funds rest in ring-fenced safeguarding vaults until agreed milestone release. 
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary-container mb-6">
                    <span className="material-symbols-outlined text-[26px]">
                      alarm_on
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3 font-semibold">
                    Automatic release or refund
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                     Governed purely by signed milestones and deadline clocks. Zero arbitrary judgement calls. 
                  </p>
                </div>
                <div className="pt-4 bg-surface-container-low rounded-lg p-3 text-on-surface-variant">
                  <p className="font-body-sm text-body-sm">
                    <strong className="font-semibold text-on-surface">
                      Clockwork execution:
                    </strong>
                     Inactivity after post delivery triggers auto-release after 72 hours. 
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-[1200px] mx-auto px-margin pb-20 w-full">
            <div className="bg-surface-container-high rounded-xl p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm mb-4">
                      <span className="material-symbols-outlined text-[14px]">
                        storefront
                      </span>
                      <span>
                        For Marketing Directors &amp; Agencies
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-3 font-semibold">
                       Stop paying upfront into creator ghosting 
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                       Eliminate the risk of unfulfilled deliverables, missed launch windows, or unauthorized music usage. Your campaign capital stays safe until the brief is verified in public. 
                    </p>
                    <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant mb-8">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">
                          check_circle
                        </span>
                        <span>
                          Automatic full refund if post deadline passes unfulfilled
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">
                          check_circle
                        </span>
                        <span>
                          Pre-cleared IP usage licenses included with English law standard
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">
                          check_circle
                        </span>
                        <span>
                          Consolidated VAT invoicing for simplified agency bookkeeping
                        </span>
                      </li>
                    </ul>
                  </div>
                  <a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-primary transition-colors" data-go="/signup" href="/signup">
                    <span>
                      Create Brand Escrow Pact
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed/30 text-on-secondary-fixed-variant font-label-sm text-label-sm mb-4">
                      <span className="material-symbols-outlined text-[14px]">
                        videocam
                      </span>
                      <span>
                        For Independent UK Creators &amp; Managers
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-3 font-semibold">
                       Never chase net-60 day invoices again 
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                       Know with 100% certainty that the brand has deposited the money before you film a single frame. Publish with complete confidence of rapid bank transfer. 
                    </p>
                    <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant mb-8">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">
                          check_circle
                        </span>
                        <span>
                          Locked escrow verification before creative production starts
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">
                          check_circle
                        </span>
                        <span>
                          Strict limit of 2 structured revision rounds to prevent scope creep
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">
                          check_circle
                        </span>
                        <span>
                          Automated release within 72 hours of live social post confirmation
                        </span>
                      </li>
                    </ul>
                  </div>
                  <a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors" data-go="/signup" href="/signup">
                    <span>
                      Review Creator Guarantee
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      launch
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-[760px] mx-auto px-margin py-16 lg:py-24 w-full">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm mb-3">
                <span className="material-symbols-outlined text-[14px]">
                  quiz
                </span>
                <span>
                  Clear Answers
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mb-3">
                 Plain-English Escrow FAQ 
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                 No dense legal clauses. Here is exactly how payment disputes and milestones function on Pactly. 
              </p>
            </div>
            <div id="faq-container" className="space-y-4">
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center justify-between gap-4">
                  <span>
                    What if the creator doesn't post?
                  </span>
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    schedule
                  </span>
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                   The deposit is refunded automatically in full to the brand if the deadline passes without delivery. The creator receives prompt reminders at 48 hours and 12 hours prior to deadline expiry. 
                </p>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center justify-between gap-4">
                  <span>
                    What if I'm not happy with the content?
                  </span>
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    rate_review
                  </span>
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                   Draft approval is built into the milestone. You have 2 structured revision rounds before publication. If content materially breaches the agreed brief specifications, Pactly provides instant arbitration based strictly on the original signed agreement. 
                </p>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center justify-between gap-4">
                  <span>
                    Who pays the 6% fee?
                  </span>
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    percent
                  </span>
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                   The fee is deducted from the final escrow payout upon confirmed release. No hidden platform subscriptions, no credit card transaction surcharges, and no tiered monthly memberships. 
                </p>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center justify-between gap-4">
                  <span>
                    How are social post links verified?
                  </span>
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    verified
                  </span>
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                   Pactly connects directly with Instagram, TikTok, and YouTube native APIs. Our automated checker verifies that the agreed post permalink exists, contains mandatory brand tags/hashtags, and remains live without early deletion. 
                </p>
              </div>
            </div>
          </section>
          <section className="max-w-[1200px] mx-auto px-margin pb-20 w-full">
            <div className="bg-surface-container-lowest rounded-xl p-8 sm:p-12 shadow-sm text-center max-w-[880px] mx-auto flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-secondary-fixed/40 flex items-center justify-center text-on-secondary-fixed-variant mb-6">
                <span className="material-symbols-outlined text-[32px]">
                  handshake
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mb-4">
                 Ready to lock in your next sponsored post? 
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[560px] mb-8">
                 Draft your first commercial pact in under 4 minutes. Safe custody, verified release, zero chase. 
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md w-full sm:w-auto">
                <a className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg shadow hover:bg-primary transition-all" data-go="/signup" href="/signup">
                   I'm a brand — Create Pact 
                </a>
                <a className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-all" data-flow="role-creator" href="#" onClick={(event) => event.preventDefault()}>
                   I'm a creator — Send Link to Brand 
                </a>
              </div>
            </div>
          </section>
          <div className="w-full bg-surface-container py-6">
            <div className="max-w-[1200px] mx-auto px-margin flex flex-col md:flex-row items-center justify-between gap-4 text-on-surface-variant font-label-sm text-label-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  account_balance
                </span>
                <span>
                  English Law Escrow Notice · Regulated Segregated Safeguarding Rails (Stripe Payments UK Ltd)
                </span>
              </div>
              <div className="flex items-center gap-space-md">
                <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                  Terms of Service (v3.2)
                </a>
                <span className="text-outline-variant">
                  ·
                </span>
                <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                  Privacy Policy
                </a>
                <span className="text-outline-variant">
                  ·
                </span>
                <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin flex flex-col md:flex-row justify-between items-center gap-space-md text-on-surface-variant">
          <div className="flex items-center gap-space-sm">
            <Logo className="h-6 w-auto object-contain grayscale opacity-70" />
            <span className="font-label-md text-label-md">
              © 2025 Pactly Escrow Ltd. Registered in England &amp; Wales. Standard UK Commercial Contracts.
            </span>
          </div>
          <div className="flex items-center gap-space-lg font-label-md text-label-md">
            <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
              English Law Agreement
            </a>
            <a className="hover:text-on-surface transition-colors" data-go="/welcome" href="/welcome">
              6% Escrow Protocol
            </a>
            <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
              Security &amp; Disputes
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
