/** Pactly — Mobile Active Deal Management & Live Milestone Monitor */
export default function MobileActiveDealPage() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 px-gutter-mobile flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm min-w-0">
            <button aria-label="Go back" type="button" className="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-[22px]">
                arrow_back
              </span>
            </button>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                  Deals
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed/30 text-secondary font-label-sm text-label-sm tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Active Escrow
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <div aria-label="User account" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface">
        <div className="flex flex-col w-full">
          <div className="px-gutter-mobile py-space-md flex flex-col gap-space-sm bg-gradient-to-b from-surface-container-high/60 to-surface">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                  Deal #UK-5028 • Commercial Influencer Boosting
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-fixed/40 text-secondary font-label-sm text-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                   Live Escrow 
                </span>
              </div>
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
                Model Contract 2.4
              </h1>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[18px]">
                      lock
                    </span>
                  </div>
                  <div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Barclays Vault Segregated Custody
                    </div>
                    <div className="font-headline-sm text-headline-sm text-on-surface">
                      Rs 823,620GBP
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px]">
                    shield
                  </span>
                   FCA #841920 
                </span>
              </div>
              <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-2/3 rounded-full transition-all duration-500"></div>
              </div>
              <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                <span>
                  Milestone 1 in Review (63%)
                </span>
                <span className="text-primary font-medium">
                  Vault #A-8291-UKM2
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              <button type="button" className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  description
                </span>
                 Contract Terms (2.4) 
              </button>
              <button type="button" className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  verified_user
                </span>
                 Escrow Vault Audit 
              </button>
              <button type="button" className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md">
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  gavel
                </span>
                 Referee Protocol 
              </button>
            </div>
          </div>
          <div className="px-gutter-mobile flex flex-col gap-space-lg pb-space-lg">
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                Verified Counterparties
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                      <img data-alt="A clean portrait photo of David Vance, male UK marketing executive in a dark navy linen shirt against an architectural studio background with warm soft studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzogrv_Vn8f4nzBXTjcSvbMekd4RR7_pWMcrukc3QrxJO9VBpdASRcVM9d_n0nC51nSixw72-SlhskVli5h3_PnLCxYY9dUVG98ep-sfhtTpf8Ihp6TmO4WzuOb3MvjtucduXtDlbueuOIDv0ZChhKBa-YMd2EZToTYMNroQXsk8y51Zx8ZHPEhKacjN3GLp8eFXoaa9Z1ldOkh1Frj0uGQ3Zz5TXdFXPPDaYHJC-tgXT85Bycv8X09w" className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-label-md text-label-md text-on-surface font-semibold truncate">
                        David Vance
                      </div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant truncate">
                        Lumina Studio
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]">
                      apartment
                    </span>
                     Brand Sponsor 
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                      <img data-alt="A portrait of Charlotte Emily Clark, digital tech creator smiling warmly wearing minimalist studio headphones in a bright modern tech home office with acoustic felt panels." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCckQbwnzmOQUapbo3Xspr-5bEbeHiAX4o0tGrUOxrcdxM5Cgk9sOE4FwqT443PRGwi7fbhcaUtBPiY2j6TNM-rVcRFxWKFJTId00YGr1ntOj4p4XkfILQcTMB5JJQKM-dDVvM-NhKz6rXdGtQnsJYnjdJWPJp98CbLbMCJShzGpqof2e8bQPRi3i3w0u30IrQLJCEyXuh1BHLS6ngGDRezPieiu4ekKFnQ9SX_0llBG1uXqBGzbAdm-g" className="w-full h-full object-cover" />
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim ring-2 ring-surface-container-lowest"></div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-label-md text-label-md text-on-surface font-semibold truncate">
                        Charlotte C.
                      </div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant truncate">
                        @charlotte.tech
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]">
                      videocam
                    </span>
                     Verified Creator 
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  Escrow Milestones
                </h2>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  1 of 2 ready
                </span>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-primary font-semibold tracking-wide uppercase">
                      Milestone 1
                    </span>
                    <div className="font-headline-sm text-headline-sm text-on-surface">
                      Rs 518,000
                    </div>
                  </div>
                  <h3 className="font-body-lg text-body-lg text-on-surface font-semibold leading-snug">
                    60s Dedicated YouTube Video Integration
                  </h3>
                  <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                       Submitted for Brand Review 
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed/40 text-tertiary font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[13px]">
                        timer
                      </span>
                       Auto-Release: 46h 18m 
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-space-sm">
                  <div className="flex gap-space-sm">
                    <div className="relative w-24 h-16 rounded-md overflow-hidden shrink-0 bg-surface-container">
                      <img data-alt="High quality YouTube video preview frame showing modern developer code IDE setup with clean neon syntax highlighting and high-tech software comparison overlay graphics." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFZx6Ps6cX1k1LCs0FyQ4ZlIIlako8lPhi5SO2br3tHU3RHepl1w3k7jAcEEf8Kt3CggpAfrZSk_LWjYrVHoxjHN0XK17vi2GwjYVnM6hOkO1u7rzYIShmuRn486DAz6FUbDVTQTbOpUqYy2xsYB5JT81Win8KycTme0CCjk9yYM682uVgv2Fh9BJMgY_ZEWUhzGH7LlUOmfGJ-coTpTiJiHRrwY2GDgIAJEmM7rt-0oIqRD0s_dX3Sw" className="w-full h-full object-cover" />
                      <span className="absolute bottom-1 right-1 px-1 py-0.5 rounded bg-inverse-surface/85 text-inverse-on-surface text-[10px] font-mono font-medium">
                        14:28
                      </span>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <span className="inline-block px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[10px] uppercase font-semibold">
                          Draft Preview
                        </span>
                        <p className="font-label-md text-label-md text-on-surface font-medium truncate mt-0.5">
                          Top 5 Dev Tools for 2027: Building Local-First Cloud Stacks
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[14px] text-error">
                          smart_display
                        </span>
                        <span>
                          Unlisted link • Sponsor slot at 04:12
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest/80 rounded p-2 flex items-center justify-between font-label-sm text-label-sm">
                    <div className="flex items-center gap-1.5 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[15px] text-secondary">
                        check_circle
                      </span>
                      <span>
                        Sponsor Brief Guidelines: 100% matched
                      </span>
                    </div>
                    <a className="text-primary font-medium hover:underline inline-flex items-center gap-0.5" href="#" onClick={(event) => event.preventDefault()}>
                       Open link 
                      <span className="material-symbols-outlined text-[13px]">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>
                <div className="rounded-lg p-2.5 bg-secondary-fixed/20 flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                    verified
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-md text-label-md text-secondary font-semibold">
                      Autonomous API Monitor Engaged
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      YouTube Data API v3 will verify live publication, integrity timestamp, and tag preservation prior to final fund disbursement.
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-1">
                  <button type="button" className="w-full h-11 px-space-md rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.99]">
                    <span className="material-symbols-outlined text-[18px]">
                      lock_open
                    </span>
                     Approve & Release Rs 518,000 
                  </button>
                  <button type="button" className="w-full h-11 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg font-medium flex items-center justify-center gap-2 transition-colors" data-go="/deals/uk-5028/revision">
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                      edit_note
                    </span>
                     Request Revision (1 remaining) 
                  </button>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-sm opacity-85">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
                      lock
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wide uppercase">
                      Milestone 2
                    </span>
                  </div>
                  <div className="font-headline-sm text-headline-sm text-on-surface-variant">
                    Rs 259,000
                  </div>
                </div>
                <div>
                  <h3 className="font-body-lg text-body-lg text-on-surface-variant font-medium">
                    30-Day TikTok Spark Ads Boosting Authorization
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Creator delivers valid TikTok Spark code with 30-day whitelisting authorization token.
                  </p>
                </div>
                <div className="pt-1 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                  <span className="inline-flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">
                      pending_actions
                    </span>
                     Unlocks automatically once M1 is completed 
                  </span>
                  <span className="font-medium">
                    Vault Reserved
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    forum
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Deal Activity
                  </h2>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-medium">
                  Bilateral Channel
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-secondary-fixed/40 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">
                      file_upload
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-body-sm text-body-sm text-on-surface">
                      <span className="font-semibold text-on-surface">
                        Charlotte Clark
                      </span>
                       uploaded Milestone 1 video draft link 
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                      Today at 09:42 AM
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">
                      visibility
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-body-sm text-body-sm text-on-surface">
                      <span className="font-semibold text-on-surface">
                        David Vance
                      </span>
                       reviewed the YouTube integration timestamp 
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                      2 hours ago
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <div className="flex items-center gap-2 bg-surface-container-low rounded-lg p-1.5 focus-within:bg-surface-container transition-colors">
                  <input placeholder="Message Charlotte about this deliverable..." type="text" className="flex-1 min-w-0 bg-transparent px-2.5 py-1.5 text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none" />
                  <button aria-label="Send Message" type="button" className="w-9 h-9 rounded-md bg-primary text-on-primary flex items-center justify-center shrink-0 transition-opacity hover:opacity-90 active:scale-95">
                    <span className="material-symbols-outlined text-[18px]">
                      send
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container rounded-xl p-space-md flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">
                    balance
                  </span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Assigned Pactly Referee
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
                  Dispute Safe
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                 Harrison & Croft Legal LLP acts as autonomous adjudicator under the Rs 27,750capped dispute resolution protocol. Funds cannot be seized without bilateral agreement or formal ruling. 
              </p>
              <div className="flex items-center justify-between font-label-sm text-label-sm pt-1">
                <span className="text-on-surface-variant">
                  Audited by Barclays UK PLC
                </span>
                <button type="button" className="text-primary font-medium hover:underline inline-flex items-center gap-0.5">
                   Review Rules 
                  <span className="material-symbols-outlined text-[13px]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <nav data-active-classes="text-primary font-semibold" className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(20,27,43,0.04)]">
        <div className="flex items-center justify-around h-16 px-space-xs">
          <a aria-current="page" className="flex-1 flex flex-col items-center justify-center h-full transition-colors text-primary font-semibold" data-go="/deals" href="/deals">
            <span className="material-symbols-outlined text-[24px]">
              handshake
            </span>
            <span className="font-label-sm text-label-sm mt-0.5">
              Deals
            </span>
          </a>
          <a className="flex-1 flex flex-col items-center justify-center h-full text-on-surface-variant hover:text-on-surface transition-colors" data-go="/deals/uk-5028" href="/deals/uk-5028">
            <span className="material-symbols-outlined text-[24px]">
              chat_bubble
            </span>
            <span className="font-label-sm text-label-sm mt-0.5">
              Messages
            </span>
          </a>
          <a className="flex-1 flex flex-col items-center justify-center h-full text-on-surface-variant hover:text-on-surface transition-colors" data-go="/deals/uk-5028" href="/deals/uk-5028">
            <span className="material-symbols-outlined text-[24px]">
              account_balance
            </span>
            <span className="font-label-sm text-label-sm mt-0.5">
              Vault
            </span>
          </a>
          <a className="flex-1 flex flex-col items-center justify-center h-full text-on-surface-variant hover:text-on-surface transition-colors" data-go="/deals" href="/deals">
            <span className="material-symbols-outlined text-[24px]">
              more_horiz
            </span>
            <span className="font-label-sm text-label-sm mt-0.5">
              More
            </span>
          </a>
        </div>
      </nav>
    </>
  )
}
