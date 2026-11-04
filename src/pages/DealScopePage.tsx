import Logo from '../components/Logo'

/** Pactly — Deal Creation Wizard (Step 1: Scope & Deliverables) */
export default function DealScopePage() {
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
              <a className="px-3 py-1.5 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/deals" href="/deals">
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
          <div className="w-full bg-surface-container-lowest border-b border-outline-variant/30 py-3 px-margin">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant flex-wrap">
                <a className="hover:text-primary transition-colors flex items-center gap-1" data-go="/deals" href="/deals">
                  <span className="material-symbols-outlined text-[16px]">
                    handshake
                  </span>
                  <span>
                    Deals
                  </span>
                </a>
                <span className="text-outline-variant select-none">
                  /
                </span>
                <span className="text-on-surface font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    description
                  </span>
                  <span>
                    New Deal (#UK-5028)
                  </span>
                </span>
                <span className="text-outline-variant select-none">
                  /
                </span>
                <span className="text-primary font-semibold">
                  Commercial Scope &amp; Deliverables
                </span>
              </nav>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm border border-outline-variant/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                   Draft #UK-5028 
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm border border-outline-variant/40">
                  <span className="material-symbols-outlined text-[14px] text-secondary">
                    gavel
                  </span>
                   English Commercial Law Model 2.4 
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                  <span className="text-secondary font-bold">
                    £
                  </span>
                   PKR (Pactly Protected) 
                </span>
              </div>
            </div>
          </div>
          <div className="w-full bg-surface border-b border-outline-variant/20 py-4 px-margin">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-surface-container-lowest border border-primary/20 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                  <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md font-bold shadow-sm">
                     1 
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                      Step 1 • In Progress
                    </div>
                    <div className="font-headline-sm text-headline-sm text-on-surface truncate">
                      Scope &amp; Deliverables
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary text-[20px] animate-pulse">
                    edit_document
                  </span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-surface-container-low/60 border border-outline-variant/30 opacity-75">
                  <div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md text-label-md font-semibold">
                     2 
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Step 2
                    </div>
                    <div className="font-body-md text-body-md font-medium text-on-surface truncate">
                      Assign Counterparty
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[18px]">
                    person_add
                  </span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-surface-container-low/60 border border-outline-variant/30 opacity-75">
                  <div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md text-label-md font-semibold">
                     3 
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Step 3
                    </div>
                    <div className="font-body-md text-body-md font-medium text-on-surface truncate">
                      Escrow Funding Lock
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[18px]">
                    lock
                  </span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-surface-container-low/60 border border-outline-variant/30 opacity-75">
                  <div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md text-label-md font-semibold">
                     4 
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Step 4
                    </div>
                    <div className="font-body-md text-body-md font-medium text-on-surface truncate">
                      Legal Terms &amp; Solicitor Review
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[18px]">
                    verified_user
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[1200px] mx-auto px-margin py-8">
            <div className="mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm font-bold uppercase tracking-widest mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                   FCA Segregated Custody Architecture 
                </div>
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                   Define Commercial Scope &amp; Deliverables 
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 leading-relaxed">
                   Establish clear, objective milestone criteria. Under English Commercial Law and Pactly Escrow terms, funds are released automatically upon verified deliverable fulfillment. 
                </p>
              </div>
              <div className="flex flex-col sm:items-start lg:items-end gap-2 shrink-0">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-tertiary">
                    bolt
                  </span>
                   Quick Load Commercial Standard: 
                </span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <button type="button" className="px-3 py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md font-medium transition-all shadow-sm flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">
                      play_circle
                    </span>
                     YouTube Integration 
                  </button>
                  <button type="button" className="px-3 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">
                      tag
                    </span>
                     TikTok + Spark Ads 
                  </button>
                  <button type="button" className="px-3 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">
                      auto_awesome_motion
                    </span>
                     Instagram Bundle 
                  </button>
                  <button type="button" className="px-3 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors">
                     Custom Scope 
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30">
                    <div className="flex items-center gap-2">
                      <span className="font-headline-sm text-headline-sm text-on-surface">
                        Deliverables &amp; Milestones
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm font-semibold">
                        2 configured
                      </span>
                    </div>
                    <button type="button" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest border border-primary/30 text-primary hover:bg-primary/5 font-label-md text-label-md font-semibold transition-colors">
                      <span className="material-symbols-outlined text-[18px]">
                        add_circle
                      </span>
                       Add Deliverable 
                    </button>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm overflow-hidden transition-all duration-200">
                    <div className="p-5 bg-surface-container-low/40 border-b border-outline-variant/30 flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">
                           01 
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                              Dedicated Video Sponsorship (60s-90s)
                            </span>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm font-bold">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                               Milestone 1 • Primary 
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Automated Proof of Post Verified via YouTube Data API
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-label-sm text-label-sm text-on-surface-variant">
                            Escrow Release Allocation
                          </div>
                          <div className="font-headline-sm text-headline-sm text-primary font-bold">
                            Rs 444,000 
                            <span className="font-label-sm text-label-sm text-outline font-normal">
                              (66.7%)
                            </span>
                          </div>
                        </div>
                        <button title="Collapse view" type="button" className="p-1 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors">
                          <span className="material-symbols-outlined text-[20px]">
                            expand_less
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col gap-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5">
                             Platform Channel 
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-error">
                              <span className="material-symbols-outlined text-[20px] text-[#FF0000]">
                                play_circle
                              </span>
                            </div>
                            <select className="w-full pl-10 pr-9 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer">
                              <option selected={true}>
                                YouTube Main Channel (Long-form)
                              </option>
                              <option>
                                YouTube Shorts Only
                              </option>
                              <option>
                                Instagram Reel / Feed
                              </option>
                              <option>
                                TikTok Post
                              </option>
                              <option>
                                LinkedIn Pulse / Video
                              </option>
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-outline">
                              <span className="material-symbols-outlined text-[18px]">
                                unfold_more
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5">
                             Deliverable Format &amp; Duration 
                          </label>
                          <input type="text" defaultValue="Dedicated Integration (60s–90s Mid-roll)" className="w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="font-label-md text-label-md text-on-surface font-semibold">
                             Title / Working Concept Reference 
                          </label>
                          <span className="font-label-sm text-label-sm text-outline">
                            Legally binding editorial topic
                          </span>
                        </div>
                        <input type="text" defaultValue="Q4 Tech Stack Breakdown + Impartial Escrow Walkthrough" className="w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 font-body-md text-body-md text-on-surface font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      </div>
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5">
                           Placement &amp; Attribution Specifications 
                        </label>
                        <textarea rows={2} className="w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary leading-relaxed resize-none">
                          Mid-roll integration within the first 3 minutes of upload. Pinned comment containing tracked referral token; permanent hyperlink embedded within first two lines of video description text.
                        </textarea>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                        <div>
                          <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5">
                             Draft Submission Due 
                          </label>
                          <div className="relative">
                            <input type="text" defaultValue="18 Nov 2026, 17:00 GMT" className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                              <span className="material-symbols-outlined text-[18px]">
                                calendar_today
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5">
                             Maximum Revisions 
                          </label>
                          <div className="relative">
                            <select className="w-full pl-9 pr-8 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none">
                              <option>
                                1 Round
                              </option>
                              <option selected={true}>
                                2 Rounds (Standard)
                              </option>
                              <option>
                                3 Rounds
                              </option>
                              <option>
                                Zero (Pre-approved brief)
                              </option>
                            </select>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                              <span className="material-symbols-outlined text-[18px]">
                                history
                              </span>
                            </div>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-outline">
                              <span className="material-symbols-outlined text-[16px]">
                                expand_more
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5">
                             Allocated Milestone Sum 
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface font-semibold">
                               £ 
                            </div>
                            <input type="text" defaultValue="1,200.00" className="w-full pl-7 pr-3 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 font-body-md text-body-md text-on-surface font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/40 flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">
                          smart_toy
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-label-md text-label-md text-on-surface font-bold">
                              Automated Verification Protocol: YouTube Data API
                            </span>
                            <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
                              <span className="material-symbols-outlined text-[14px]">
                                check_circle
                              </span>
                               Zero-Friction Payout 
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                             Upon post URL submission, Pactly autonomously queries the official YouTube Data API to confirm the video length, the 60-second minimum brand segment mention via subtitle transcription tokens, and verified placement of referral URL in description before unlocking milestone escrow. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm overflow-hidden">
                    <div className="p-5 bg-surface-container-low/40 border-b border-outline-variant/30 flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm font-bold">
                           02 
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                              Paid Whitelisting &amp; TikTok Spark Ads Authorization
                            </span>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-medium">
                               Milestone 2 
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            OAuth Ad Token Delivery &amp; Active Campaign Verification
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-label-sm text-label-sm text-on-surface-variant">
                            Escrow Release Allocation
                          </div>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Rs 222,000 
                            <span className="font-label-sm text-label-sm text-outline font-normal">
                              (33.3%)
                            </span>
                          </div>
                        </div>
                        <button title="Expand view" type="button" className="p-1 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors">
                          <span className="material-symbols-outlined text-[20px]">
                            expand_more
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-surface rounded-lg p-3 border border-outline-variant/30">
                        <span className="font-label-sm text-label-sm text-outline block mb-1">
                          Usage Window
                        </span>
                        <span className="font-body-md text-body-md text-on-surface font-semibold flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-primary">
                            schedule
                          </span>
                           30 Days from Live Post 
                        </span>
                      </div>
                      <div className="bg-surface rounded-lg p-3 border border-outline-variant/30">
                        <span className="font-label-sm text-label-sm text-outline block mb-1">
                          Territory Restriction
                        </span>
                        <span className="font-body-md text-body-md text-on-surface font-semibold flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            public
                          </span>
                           United Kingdom Only 
                        </span>
                      </div>
                      <div className="bg-surface rounded-lg p-3 border border-outline-variant/30">
                        <span className="font-label-sm text-label-sm text-outline block mb-1">
                          Token Release Mechanism
                        </span>
                        <span className="font-body-md text-body-md text-on-surface font-semibold flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-tertiary">
                            key
                          </span>
                           Instant via Pactly OAuth 
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm p-6 flex flex-col gap-5 mt-2">
                  <div className="flex items-start justify-between border-b border-outline-variant/30 pb-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider mb-1">
                        <span className="material-symbols-outlined text-[16px]">
                          balance
                        </span>
                         Statutory Safeguards 
                      </div>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">
                         Standard Commercial Conditions (Schedule 4) 
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                         Pre-calibrated legal conditions that balance creator copyright protections with commercial brand warranties. 
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm font-semibold border border-secondary/20">
                       Solicitor Approved 
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 border-b border-outline-variant/20">
                    <div className="max-w-md">
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold block">
                        Category Competitor Exclusivity
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Prevents the creator from endorsing direct commercial competitors during and briefly following the flight.
                      </span>
                    </div>
                    <div className="w-full sm:w-64">
                      <select className="w-full px-3 py-2 rounded-lg bg-surface border border-outline-variant/60 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        <option selected={true}>
                          30-Day Blackout (Fintech / Escrow)
                        </option>
                        <option>
                          14-Day Blackout
                        </option>
                        <option>
                          60-Day Blackout (+25% Premium)
                        </option>
                        <option>
                          None (Non-exclusive)
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 border-b border-outline-variant/20 bg-surface-container-low/50 -mx-6 px-6">
                    <div className="max-w-md">
                      <div className="flex items-center gap-2">
                        <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                          Anti-Ghosting Acceptance Window
                        </span>
                        <span className="px-2 py-0.2 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
                          Crucial
                        </span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                         If the brand fails to submit revisions or approve submitted work within this window, funds in escrow release autonomously to creator. 
                      </span>
                    </div>
                    <div className="w-full sm:w-64">
                      <div className="flex items-center gap-2">
                        <select className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/60 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-medium">
                          <option>
                            48 Hours Window
                          </option>
                          <option selected={true}>
                            72 Hours (UK Standard Market)
                          </option>
                          <option>
                            5 Business Days
                          </option>
                        </select>
                        <span title="Timer begins when creator submits formal post proof" className="material-symbols-outlined text-outline">
                          help
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2">
                    <div className="max-w-md">
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold block">
                        IP Rights &amp; Footage Ownership
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Default: Creator retains underlying copyright; brand receives perpetual digital promotional license.
                      </span>
                    </div>
                    <div className="w-full sm:w-64">
                      <select className="w-full px-3 py-2 rounded-lg bg-surface border border-outline-variant/60 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        <option selected={true}>
                          Standard Creator IP + Brand License
                        </option>
                        <option>
                          Full IP Buyout / Work for Hire (+40%)
                        </option>
                        <option>
                          Whitelisting Exclusive Term Only
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 sticky top-24 flex flex-col gap-5">
                <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-md overflow-hidden">
                  <div className="p-5 border-b border-outline-variant/30 bg-surface-container-high/30">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-sm text-headline-sm text-on-surface">
                        Escrow Ledger Summary
                      </span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        account_balance_wallet
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Calculated per UK Electronic Money Regs
                    </span>
                  </div>
                  <div className="p-5 flex flex-col gap-4">
                    <div className="flex items-baseline justify-between">
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        Total Creator Compensation
                      </span>
                      <span className="font-headline-md text-headline-md text-on-surface font-bold">
                        Rs 666,000
                      </span>
                    </div>
                    <div className="space-y-2 py-3 border-y border-outline-variant/20 font-body-sm text-body-sm">
                      <div className="flex items-center justify-between text-on-surface-variant">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-primary"></span>
                           Milestone 01 (YouTube) 
                        </span>
                        <span className="font-medium text-on-surface">
                          Rs 444,000
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                           Milestone 02 (Spark Ads) 
                        </span>
                        <span className="font-medium text-on-surface">
                          Rs 222,000
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 pt-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-1">
                           Pactly Custody Fee (6% Fixed) 
                          <span title="Includes multi-sig escrow, API verification, and English arbitration rights" className="material-symbols-outlined text-[14px] text-outline">
                            info
                          </span>
                        </span>
                        <span className="font-label-md text-label-md text-on-surface font-bold">
                          Rs 39,960
                        </span>
                      </div>
                      <div className="space-y-2 mt-1">
                        <label className="flex items-start gap-2.5 p-2.5 rounded-lg border border-primary/30 bg-primary/5 cursor-pointer transition-colors">
                          <input defaultChecked={true} name="fee_split" type="radio" className="mt-0.5 text-primary focus:ring-primary" />
                          <div className="text-left font-body-sm text-body-sm">
                            <span className="font-medium text-on-surface block leading-tight">
                              Brand absorbs protocol fee (+Rs 39,960)
                            </span>
                            <span className="text-outline text-label-sm">
                              Creator receives full nominal Rs 666,000payout.
                            </span>
                          </div>
                        </label>
                        <label className="flex items-start gap-2.5 p-2.5 rounded-lg border border-outline-variant/40 hover:bg-surface-container-low cursor-pointer transition-colors">
                          <input name="fee_split" type="radio" className="mt-0.5 text-primary focus:ring-primary" />
                          <div className="text-left font-body-sm text-body-sm">
                            <span className="font-medium text-on-surface block leading-tight">
                              Creator absorbs protocol fee (-Rs 39,960)
                            </span>
                            <span className="text-outline text-label-sm">
                              Creator receives net Rs 626,040upon release.
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container-high/60 border border-outline-variant/40 mt-2">
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase tracking-wider">
                          Required Escrow Lock
                        </span>
                        <span className="font-headline-lg text-headline-lg text-primary font-bold">
                          Rs 705,960
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-secondary font-medium">
                        <span className="material-symbols-outlined text-[15px]">
                          verified
                        </span>
                         100% Protected under UK Trust Custody 
                      </div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-surface border border-outline-variant/40 flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0 mt-0.5">
                        timer
                      </span>
                      <div className="font-body-sm text-body-sm">
                        <span className="font-semibold text-on-surface block">
                          Anti-Ghosting Protected
                        </span>
                        <span className="text-on-surface-variant text-[12px] leading-tight block mt-0.5">
                           Brand has 72 hours from post verification to request revisions within scope. If unreviewed, funds clear autonomously to the creator's payout account. 
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 pt-3">
                      <button type="button" className="w-full py-3 px-4 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold shadow-md transition-all flex items-center justify-center gap-2" data-go="/deals/new/counterparty">
                        <span>
                          Save &amp; Assign Counterparty
                        </span>
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                      </button>
                      <button type="button" className="w-full py-2.5 px-4 rounded-lg bg-surface-container-lowest border border-outline-variant/60 hover:bg-surface-container text-on-surface font-label-md text-label-md font-medium transition-colors">
                         Save as Deal Draft Template 
                      </button>
                      <a className="text-center font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center gap-1 pt-1" href="#" onClick={(event) => event.preventDefault()}>
                        <span className="material-symbols-outlined text-[16px]">
                          picture_as_pdf
                        </span>
                         Preview Draft Schedule 1 (PDF) 
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-low/70 border border-outline-variant/30 flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[22px] shrink-0">
                    shield
                  </span>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    <span className="font-semibold text-on-surface block mb-0.5">
                      FCA Custodial Security Architecture
                    </span>
                     Held in segregated client accounts under UK Electronic Money Regulations 2011 via regulated trust rails. Fully bankruptcy-remote from both Pactly Escrow Ltd and counterparty trading entities. 
                  </div>
                </div>
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
