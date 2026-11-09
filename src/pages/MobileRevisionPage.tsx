/** Collabio — Mobile Revision Request Modal */
export default function MobileRevisionPage() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
        <div className="h-16 px-gutter-mobile flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <button aria-label="Close or go back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-[24px]">
                close
              </span>
            </button>
            <h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-semibold">
              Request Revision
            </h1>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
        </div>
      </header>
      <main className="flex flex-col relative w-full px-gutter-mobile pt-16 pb-safe bg-surface min-h-screen">
        <div className="flex flex-col w-full pb-8">
          <div className="flex flex-col w-full rounded-2xl bg-surface-container-lowest shadow-xl overflow-hidden">
            <div className="flex flex-col p-4 bg-surface-container-low/60 gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                    Deal #UK-5028
                  </span>
                  <span className="text-outline-variant font-body-sm">
                    •
                  </span>
                  <span className="font-label-sm text-label-sm text-primary font-medium">
                    Milestone 1 of 2
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px]">
                    gavel
                  </span>
                  <span className="font-label-sm text-label-sm font-medium">
                    Model 2.4 Terms
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div>
                  <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-semibold tracking-tight">
                    Request Revision
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    David Vance (Lumina Studio) reviewing Charlotte Clark
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-label-sm text-label-sm text-outline font-medium">
                    Escrow Protected
                  </span>
                  <span className="font-headline-sm text-headline-sm text-secondary font-semibold">
                    Rs 518,000
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-tertiary-fixed/20 text-on-tertiary-fixed-variant">
                <span className="material-symbols-outlined text-[20px] text-tertiary-container shrink-0">
                  info
                </span>
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md font-semibold text-tertiary-container">
                      1 of 2 Free Rounds Remaining
                    </span>
                    <span className="font-label-sm text-label-sm text-on-tertiary-fixed-variant font-medium">
                      50% Quota Used
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-tertiary-fixed-variant line-clamp-1 mt-0.5">
                     Further rounds require formal mutual addendum or Escrow Arbitration. 
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-4 gap-5">
              <div className="flex flex-col rounded-xl bg-surface-container-low p-3 gap-3">
                <div className="flex items-start gap-3">
                  <div className="relative w-28 h-18 rounded-lg overflow-hidden shrink-0 bg-surface-container-highest shadow-sm">
                    <img data-alt="Editorial close-up frame from a tech YouTube video tutorial showing modern software code interface with pastel syntax highlighting and audio waveforms on clean desk setup in London studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIDL1MkwPp_gMmg04-ZahQBmoZZm2BV9Dy0hUQu-Sha1XI_gBdqwHvJJgCNGHGGcTeqTPFVOZU5bbzVBQdinFTxgPuQJfZa96QSCGHYC6q3fEX_oAHaN1ARie4Dv7lmmbSq0UClNUv6RrYXlfv5h3jD_xpE1PS6uq_7D__MdDTMrUEKNAlib5hkoFzMHE-IgHMflg5SRCURZfENQ-Cjt9jCrbAfBbORIdRrh8lMmUPcRHkEP7d2PJmUQ" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-background/70 via-transparent to-transparent flex items-end p-1.5">
                      <span className="font-label-sm text-label-sm text-surface-bright bg-on-background/80 px-1 py-0.5 rounded text-[10px]">
                        60s Cut
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="font-label-sm text-label-sm text-primary font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px]">
                        smart_display
                      </span>
                       YouTube Integration 
                    </span>
                    <p className="font-label-lg text-label-lg text-on-surface font-semibold truncate mt-0.5">
                       Top 5 Dev Tools for 2027: Building Local-First Cloud Stacks 
                    </p>
                    <div className="inline-flex items-center gap-1.5 mt-2 text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[16px] text-outline">
                        timer
                      </span>
                      <span>
                        Window: 04:12 - 05:12
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 pt-1">
                  <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                    <span>
                      Redline Zone
                    </span>
                    <span className="font-semibold text-primary">
                      04:38 pinned
                    </span>
                  </div>
                  <div className="relative h-6 w-full flex items-center bg-surface-container-highest rounded-lg px-2 overflow-hidden">
                    <div className="absolute inset-y-0 left-1/3 right-1/4 bg-primary-fixed/50 rounded"></div>
                    <div className="flex items-end justify-between w-full h-3 z-10 opacity-70">
                      <div className="w-1 bg-outline rounded-full h-1"></div>
                      <div className="w-1 bg-outline rounded-full h-2"></div>
                      <div className="w-1 bg-primary rounded-full h-3"></div>
                      <div className="w-1 bg-primary rounded-full h-3"></div>
                      <div className="w-1 bg-primary-container rounded-full h-3"></div>
                      <div className="w-1 bg-primary-container rounded-full h-2"></div>
                      <div className="w-1 bg-outline rounded-full h-1"></div>
                      <div className="w-1 bg-outline rounded-full h-2"></div>
                      <div className="w-1 bg-outline rounded-full h-1"></div>
                    </div>
                    <div className="absolute left-[54%] inset-y-0 flex flex-col items-center justify-center z-20">
                      <div className="w-2 h-2 rounded-full bg-error"></div>
                      <div className="w-0.5 h-full bg-error"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-lg text-label-lg text-on-surface font-semibold flex items-center justify-between">
                  <span>
                    Feedback Classification
                  </span>
                  <span className="font-label-sm text-label-sm text-outline font-normal">
                    Select primary reason
                  </span>
                </label>
                <div id="categoryGroup" className="grid grid-cols-2 gap-2">
                  <button type="button" className="category-chip text-left p-2.5 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-variant/40 transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      record_voice_over
                    </span>
                    <span className="font-label-md text-label-md">
                      Brief Scope
                    </span>
                  </button>
                  <button type="button" className="category-chip text-left p-2.5 rounded-xl bg-primary text-on-primary transition-colors flex items-center gap-2 shadow-sm shadow-primary/20">
                    <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[18px]">
                      layers
                    </span>
                    <span className="font-label-md text-label-md font-medium">
                      Graphic / URL Overlay
                    </span>
                  </button>
                  <button type="button" className="category-chip text-left p-2.5 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-variant/40 transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      graphic_eq
                    </span>
                    <span className="font-label-md text-label-md">
                      Audio Mix Balance
                    </span>
                  </button>
                  <button type="button" className="category-chip text-left p-2.5 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-variant/40 transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      schedule
                    </span>
                    <span className="font-label-md text-label-md">
                      CTA Timing
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                    Exact Redline Details
                  </label>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[15px]">
                      push_pin
                    </span>
                    <span>
                      04:38
                    </span>
                  </div>
                </div>
                <div className="flex flex-col rounded-xl bg-surface-container-low p-3 gap-2.5">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 px-2 py-1 rounded bg-surface-container-lowest shadow-sm">
                      <span className="font-label-sm text-label-sm text-outline">
                        Start
                      </span>
                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        04:38
                      </span>
                    </div>
                    <span className="text-outline font-label-md text-label-md">
                      to
                    </span>
                    <div className="flex items-center gap-1 px-2 py-1 rounded bg-surface-container-lowest shadow-sm">
                      <span className="font-label-sm text-label-sm text-outline">
                        End
                      </span>
                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        04:45
                      </span>
                    </div>
                    <span className="ml-auto font-label-sm text-label-sm text-secondary flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[14px]">
                        check_circle
                      </span>
                       In Range 
                    </span>
                  </div>
                  <div className="relative w-full">
                    <textarea placeholder="Provide exact, actionable guidance based on Schedule 1 requirements..." rows={3} className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md p-3 rounded-lg placeholder-outline focus:outline-none focus:ring-0 leading-relaxed resize-none shadow-sm">
                      The on-screen CTA link 'collabio.io/lumina' is slightly obscured by the bottom closed-captions bar between 04:38 and 04:45. Please raise the overlay banner 30px higher so it remains visible on mobile viewers.
                    </textarea>
                  </div>
                  <div className="flex items-center justify-between text-outline font-label-sm text-label-sm">
                    <span>
                      Reference: Schedule 1, Section 3.2 (Visual Branding)
                    </span>
                    <span>
                      192/400
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container text-on-surface">
                <span className="material-symbols-outlined text-[20px] text-primary shrink-0 mt-0.5">
                  lock_clock
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-label-md text-label-md font-semibold text-primary">
                    Autonomous Escrow Protocol
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                     Submitting pauses the 48h auto-release countdown. Charlotte has 
                    <strong>
                      72 hours
                    </strong>
                     to upload an updated cut. If criteria are resolved, Rs 518,000is autonomously released. 
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <button id="submitRevisionBtn" type="button" className="w-full h-12 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 active:scale-[0.99] transition-transform shadow-md shadow-primary/20">
                  <span className="material-symbols-outlined text-[20px]">
                    send
                  </span>
                  <span>
                    Submit Formal Revision Request
                  </span>
                </button>
                <button type="button" className="w-full h-10 rounded-xl bg-transparent text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg font-medium flex items-center justify-center gap-1">
                  <span>
                    Cancel &amp; Return to Deliverable Review
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
