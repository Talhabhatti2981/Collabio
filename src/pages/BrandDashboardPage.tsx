import { useState } from 'react'
import Logo from '../components/Logo'

/** Pactly — Brand Dashboard */
export default function BrandDashboardPage() {
  const [tab, setTab] = useState<'all' | 'active' | 'completed' | 'drafts'>('all')
  const [showEmpty, setShowEmpty] = useState(false)
  const empty = showEmpty || tab === 'drafts'
  const tabClass = (name: typeof tab) =>
    name === tab
      ? 'px-3.5 py-1.5 rounded-lg font-label-md text-label-md font-semibold bg-surface-container-high text-primary transition-colors'
      : 'px-3.5 py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low transition-colors'

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="h-16 max-w-[1200px] mx-auto px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-xl">
            <a className="flex items-center gap-space-sm" data-go="/deals" href="/deals">
              <Logo className="h-8 w-auto object-contain" />
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
                Pactly
              </span>
            </a>
            <nav data-active-classes="bg-surface-container-high text-primary font-semibold" className="hidden md:flex items-center gap-space-xs">
              <a aria-current="page" className="px-3 py-1.5 rounded-lg transition-colors bg-surface-container-high text-primary font-semibold" data-go="/deals" href="/deals">
                Deals
              </a>
              <a className="px-3 py-1.5 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/profile" href="/profile">
                Profile
              </a>
              <a className="px-3 py-1.5 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/settings" href="/settings">
                Settings
              </a>
              <a className="px-3 py-1.5 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/help" href="/help">
                Help &amp; Legal
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex items-center gap-space-sm bg-surface-container-lowest px-3 py-1.5 rounded-full border border-outline-variant/40">
              <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-none">
                  In Escrow
                </span>
                <span className="font-label-lg text-label-lg text-on-surface font-semibold leading-tight">
                  Rs 4,606,500
                </span>
              </div>
            </div>
            <div className="h-7 w-[1px] bg-outline-variant/40 hidden sm:block"></div>
            <div className="relative group flex items-center gap-space-sm pl-1">
              <div className="text-right hidden lg:block">
                <div className="font-label-lg text-label-lg text-on-surface font-semibold leading-tight">
                  Lumina Studio
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
                  Brand account
                </div>
              </div>
              <button aria-label="Account menu" className="flex items-center gap-1.5 p-1 rounded-full hover:bg-surface-container transition-colors">
                <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary font-headline-sm text-headline-sm flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    business
                  </span>
                </div>
                <span className="material-symbols-outlined text-outline text-[18px]">
                  expand_more
                </span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-56 bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-lg py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                <div className="px-4 py-2 border-b border-outline-variant/30 lg:hidden">
                  <div className="font-label-lg text-label-lg text-on-surface font-semibold">
                    Lumina Studio
                  </div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">
                    Brand account · Rs 4,606,500
                  </div>
                </div>
                <a className="flex items-center gap-2 px-4 py-2 font-label-lg text-label-lg text-on-surface hover:bg-surface-container-low transition-colors" data-go="/profile" href="/profile">
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                    person
                  </span>
                  Brand Profile
                </a>
                <a className="flex items-center gap-2 px-4 py-2 font-label-lg text-label-lg text-on-surface hover:bg-surface-container-low transition-colors" data-go="/settings" href="/settings">
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                    tune
                  </span>
                  Billing &amp; Payouts
                </a>
                <a className="flex items-center gap-2 px-4 py-2 font-label-lg text-label-lg text-on-surface hover:bg-surface-container-low transition-colors" data-go="/help" href="/help">
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                    shield
                  </span>
                  Dispute Resolution
                </a>
                <div className="my-1 border-t border-outline-variant/30"></div>
                <a className="flex items-center gap-2 px-4 py-2 font-label-lg text-label-lg text-error hover:bg-error-container/20 transition-colors" data-go="/login" href="/login">
                  <span className="material-symbols-outlined text-[18px] text-error">
                    logout
                  </span>
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="w-full bg-[#FFFBEB] text-[#92400E] px-margin py-3.5 shadow-sm transition-all duration-300">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm text-label-lg font-label-lg">
              <div className="flex items-center gap-2.5">
                <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[#B45309] text-[20px] shrink-0">
                  warning
                </span>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <span className="font-semibold text-[#78350F]">
                    Verify your email to start a deal.
                  </span>
                  <span className="text-[#92400E]">
                    You can explore the dashboard in read-only mode in the meantime. Action buttons remain locked.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm shrink-0 self-end md:self-auto">
                <button id="resend-btn" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FDE68A] hover:bg-[#FCD34D] text-[#78350F] font-label-md text-label-md font-semibold transition-colors duration-150 active:scale-95">
                  <span className="material-symbols-outlined text-[16px]">
                    send
                  </span>
                  <span>
                    Resend verification link
                  </span>
                </button>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] font-label-sm text-label-sm font-medium">
                  <span className="material-symbols-outlined text-[14px]">
                    timer
                  </span>
                  <span id="cooldown-timer">
                    45s cooldown
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="max-w-[1200px] w-full mx-auto px-margin py-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              <aside className="lg:col-span-3 flex flex-col gap-space-md">
                <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-sm flex flex-col gap-1">
                  <a className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-surface-container text-primary font-headline-sm text-headline-sm transition-colors" href="#" onClick={(event) => event.preventDefault()}>
                    <div className="flex items-center gap-3">
                      <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[20px]">
                        handshake
                      </span>
                      <span>
                        Deals
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">
                      3
                    </span>
                  </a>
                  <a className="flex items-center justify-between px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-lg text-label-lg transition-colors" href="#" onClick={(event) => event.preventDefault()}>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px]">
                        badge
                      </span>
                      <span>
                        Profile
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      80%
                    </span>
                  </a>
                  <a className="flex items-center justify-between px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-lg text-label-lg transition-colors" data-go="/settings" href="/settings">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px]">
                        tune
                      </span>
                      <span>
                        Settings
                      </span>
                    </div>
                  </a>
                  <a className="flex items-center justify-between px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-lg text-label-lg transition-colors" data-go="/help" href="/help">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px]">
                        gavel
                      </span>
                      <span>
                        Help &amp; Legal
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-outline">
                      arrow_outward
                    </span>
                  </a>
                </div>
                <div className="bg-surface-container-lowest rounded-xl shadow-sm p-4 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                        Trust Rail
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-outline text-[16px]">
                      verified_user
                    </span>
                  </div>
                  <div>
                    <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Rs 1,424,500
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Segregated Stripe Escrow held in legal custody under English jurisdiction.
                    </p>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden mt-1">
                    <div className="bg-secondary h-full rounded-full w-[62%]"></div>
                  </div>
                  <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                    <span>
                      2 Active Pacts
                    </span>
                    <span>
                      FCA Rails
                    </span>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-sm bg-surface-container">
                  <img data-alt="High-contrast modern workspace of a creative strategist in London reviewing content deliverables on dual monitors with clean warm lighting, off-white aesthetics, soft cyan accents, editorial minimalism." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1Q3QqcZzP1atTpuPhOEr8m5OtUPwx8Ockn21OarMs383B3Ak7bfPPTPUBpq9yIIdViBzPqZlxDYEdt2GNrSZ3Nrg9Yts9Eh2zbMSZUoJW6SOt2Wjo9wtszL-aladYDDUQkuJ3xI-m6MF_bF-3-vWWOooPcQ9LwvU3z-h_jLgbITbYK1nN-kyvWtYxz7Gt2bfK-fHnBJGDWPvQn8xZTAQRWValCm1gHQkGK-bMA_kbjRPsIOWTMTn9sg" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/30 to-transparent p-4 flex flex-col justify-end text-on-primary">
                    <div className="font-label-sm text-label-sm uppercase tracking-wide opacity-80">
                      Solicitor Standard
                    </div>
                    <div className="font-headline-sm text-headline-sm leading-snug">
                      Impartial escrow. Zero risk of upfront default.
                    </div>
                  </div>
                </div>
              </aside>
              <main className="lg:col-span-9 flex flex-col gap-space-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
                  <div className="flex flex-col gap-1">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                      Brand Escrow Operations
                    </h1>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Manage your active creator pacts, funded escrows, and verification milestones under English jurisdiction.
                    </p>
                  </div>
                  <div className="relative group shrink-0">
                    <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-on-primary cursor-pointer font-label-lg text-label-lg font-medium transition-colors" data-go="/deals/new">
                      <span className="material-symbols-outlined text-[18px]">
                        lock
                      </span>
                      <span>
                        Start a new deal +
                      </span>
                    </button>
                    <div className="absolute right-0 bottom-full mb-2 hidden group-hover:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm whitespace-nowrap shadow-md pointer-events-none z-20">
                      <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">
                        info
                      </span>
                      <span>
                        Verify email to create new deal
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-lowest p-1.5 rounded-xl shadow-sm">
                  <div id="filter-tabs" className="flex items-center gap-1">
                    <button type="button" className={tabClass('all')} onClick={() => { setTab('all'); setShowEmpty(false) }}>
                       All Deals 
                      <span className="ml-1 opacity-75 font-normal">
                        (3)
                      </span>
                    </button>
                    <button type="button" className={tabClass('active')} onClick={() => { setTab('active'); setShowEmpty(false) }}>
                       Active 
                      <span className="ml-1 opacity-75 font-normal">
                        (2)
                      </span>
                    </button>
                    <button type="button" className={tabClass('completed')} onClick={() => { setTab('completed'); setShowEmpty(false) }}>
                       Completed 
                      <span className="ml-1 opacity-75 font-normal">
                        (1)
                      </span>
                    </button>
                    <button type="button" className={tabClass('drafts')} onClick={() => { setTab('drafts'); setShowEmpty(false) }}>
                       Drafts 
                      <span className="ml-1 opacity-75 font-normal">
                        (0)
                      </span>
                    </button>
                  </div>
                  <button type="button" id="toggle-empty-view" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-primary font-label-sm text-label-sm font-medium transition-colors" onClick={() => setShowEmpty((open) => !open)}>
                    <span className="material-symbols-outlined text-[16px]">
                      visibility
                    </span>
                    <span id="toggle-view-text">
                      {showEmpty ? 'Show deals' : 'Preview Empty State'}
                    </span>
                  </button>
                </div>
                <div id="deals-container" className={`flex flex-col gap-space-md ${empty ? 'hidden' : ''}`}>
                  <article data-status="active" className={`deal-card bg-surface-container-lowest rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow duration-200 cursor-pointer ${tab !== 'all' && tab !== 'active' ? 'hidden' : ''}`} data-go="/deals/uk-5028/review">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap items-center justify-between gap-space-sm pb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            Deal #UK-4891
                          </span>
                          <span className="text-outline text-body-sm">
                            ·
                          </span>
                          <div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              account_circle
                            </span>
                            <span className="font-semibold text-on-surface">
                              @charlotte_creator
                            </span>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1FC8A3]/15 text-[#0A6C58] font-label-md text-label-md font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1FC8A3]"></span>
                           Funded 
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3.5 rounded-lg bg-surface-container-low">
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant block">
                            Scope Deliverable
                          </span>
                          <span className="font-body-md text-body-md text-on-surface font-medium">
                            1x Verified Reel + 30-Day Usage
                          </span>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant block">
                            Escrow Custody
                          </span>
                          <span className="font-headline-sm text-headline-sm text-[#006B56] font-semibold">
                            Rs 888,000
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant ml-1">
                            in Stripe custody
                          </span>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant block">
                            Milestone Target
                          </span>
                          <span className="font-body-md text-body-md text-on-surface">
                            22 Oct 2026, 18:00 BST
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
                        <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                          <span className="material-symbols-outlined text-[#3B4FE0] text-[18px]">
                            pending
                          </span>
                          <span>
                            <strong>Next step: </strong>
                            Creator drafting content (Deadline: 22 Oct 2026, 18:00 BST)
                          </span>
                        </div>
                        <div className="flex items-center gap-2 self-end sm:self-auto">
                          <div className="relative group">
                            <button type="button" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-medium" data-go="/deals/uk-5028/review">
                              <span className="material-symbols-outlined text-[16px]">
                                visibility
                              </span>
                              <span>
                                Review Draft
                              </span>
                            </button>
                            <div className="absolute right-0 bottom-full mb-1 hidden group-hover:flex items-center px-2.5 py-1 rounded bg-inverse-surface text-inverse-on-surface text-label-sm font-label-sm shadow whitespace-nowrap">
                               Waiting for creator submission 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article data-status="active" className={`deal-card bg-surface-container-lowest rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow duration-200 cursor-pointer ${tab !== 'all' && tab !== 'active' ? 'hidden' : ''}`} data-go="/creator/uk-5028/sign">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap items-center justify-between gap-space-sm pb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            Deal #UK-4903
                          </span>
                          <span className="text-outline text-body-sm">
                            ·
                          </span>
                          <div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              account_circle
                            </span>
                            <span className="font-semibold text-on-surface">
                              @marcus_media
                            </span>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0A53B]/15 text-[#854E05] font-label-md text-label-md font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E0A53B]"></span>
                           Awaiting signature 
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3.5 rounded-lg bg-surface-container-low">
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant block">
                            Scope Deliverable
                          </span>
                          <span className="font-body-md text-body-md text-on-surface font-medium">
                            2x TikTok Product Videos
                          </span>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant block">
                            Agreed Fee
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            Rs 536,500
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant ml-1">
                            pending escrow deposit
                          </span>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant block">
                            Review Window
                          </span>
                          <span className="font-body-md text-body-md text-on-surface">
                            Round 1 of 2
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
                        <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                          <span className="material-symbols-outlined text-[#E0A53B] text-[18px]">
                            draw
                          </span>
                          <span>
                            <strong>Next step: </strong>
                            Creator reviewing solicitor-drafted agreement (Round 1 of 2)
                          </span>
                        </div>
                        <div className="flex items-center gap-2 self-end sm:self-auto">
                          <button type="button" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md font-medium transition-colors" data-go="/creator/uk-5028/sign">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              description
                            </span>
                            <span>
                              View Agreement
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article data-status="completed" className={`deal-card bg-surface-container-lowest rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow duration-200 cursor-pointer ${tab !== 'all' && tab !== 'completed' ? 'hidden' : ''}`} data-go="/deals/uk-5028/closed">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap items-center justify-between gap-space-sm pb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            Deal #UK-4850
                          </span>
                          <span className="text-outline text-body-sm">
                            ·
                          </span>
                          <div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              account_circle
                            </span>
                            <span className="font-semibold text-on-surface">
                              @eleanor_lifestyle
                            </span>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1FC8A3]/15 text-[#0A6C58] font-label-md text-label-md font-semibold">
                          <span className="material-symbols-outlined text-[14px]">
                            check_circle
                          </span>
                           Complete 
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3.5 rounded-lg bg-surface-container-low">
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant block">
                            Scope Deliverable
                          </span>
                          <span className="font-body-md text-body-md text-on-surface font-medium">
                            1x Instagram Reel
                          </span>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant block">
                            Released Escrow
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            Rs 351,500
                          </span>
                          <span className="font-label-sm text-label-sm text-secondary font-medium ml-1">
                            Paid out
                          </span>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant block">
                            Verification Hash
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface font-mono">
                            0x7f..83a1 (Live Verified)
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
                        <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                          <span className="material-symbols-outlined text-secondary text-[18px]">
                            verified
                          </span>
                          <span>
                            <strong>Next step: </strong>
                            Funds released (Rs 351,500) · Deal complete
                          </span>
                        </div>
                        <div className="flex items-center gap-2 self-end sm:self-auto">
                          <button type="button" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md font-medium transition-colors" data-go="/deals/uk-5028/closed">
                            <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                              download
                            </span>
                            <span>
                              Download Evidence Pack &amp; VAT Invoice
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <section id="empty-state-card" className={`${empty ? 'flex' : 'hidden'} bg-surface-container-lowest rounded-xl shadow-sm p-8 md:p-12 text-center flex-col items-center max-w-3xl mx-auto w-full transition-all duration-200`}>
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary mb-4 shadow-sm">
                    <span className="material-symbols-outlined text-[32px]">
                      balance
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mb-2">
                    Start your first deal
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed mb-8">
                     Pactly holds your deposit in segregated Stripe escrow under English Commercial Law. Funds are released only after the verified post is confirmed live. Neither side has to go first. 
                  </p>
                  <div className="flex flex-col items-center gap-2.5 mb-10">
                    <button type="button" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-medium" data-go="/deals/new">
                      <span>
                        Start deal questionnaire
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </button>
                    <span className="inline-flex items-center gap-1.5 text-label-sm font-label-sm text-[#92400E] bg-[#FFFBEB] px-3 py-1 rounded-full">
                      <span className="material-symbols-outlined text-[14px]">
                        lock
                      </span>
                       Please verify your email address to initiate pacts 
                    </span>
                  </div>
                  <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-space-md pt-8 border-t-0 bg-surface-container-low p-6 rounded-xl text-left">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-surface-container-highest text-primary font-headline-sm text-headline-sm flex items-center justify-center shrink-0 font-bold">
                        1
                      </span>
                      <div>
                        <div className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-0.5">
                          34-question brief
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">
                          Lock in exact deliverable dates, format guidelines, and whitelisting terms.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-surface-container-highest text-primary font-headline-sm text-headline-sm flex items-center justify-center shrink-0 font-bold">
                        2
                      </span>
                      <div>
                        <div className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-0.5">
                          Solicitor pact
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">
                          Pre-cleared contract executed under English law with segregated custody.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-surface-container-highest text-secondary font-headline-sm text-headline-sm flex items-center justify-center shrink-0 font-bold">
                        3
                      </span>
                      <div>
                        <div className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-0.5">
                          Automatic release
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">
                          Payment clears to creator only upon live API verification of the post.
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin flex flex-col md:flex-row justify-between items-center gap-space-md text-on-surface-variant">
          <div className="flex items-center gap-space-sm">
            <Logo className="h-6 w-auto object-contain grayscale opacity-70" />
            <span className="font-label-md text-label-md">
              © 2025 Pactly Escrow Ltd. Registered in England &amp; Wales (No. 14298102). Regulated trust custody rails via FCA authorised institutions.
            </span>
          </div>
          <div className="flex items-center gap-space-lg font-label-md text-label-md">
            <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
              English Commercial Jurisdiction
            </a>
            <a className="hover:text-on-surface transition-colors" data-go="/welcome" href="/welcome">
              6% Fixed Escrow Fee
            </a>
            <a className="hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
              Arbitration &amp; Security
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
