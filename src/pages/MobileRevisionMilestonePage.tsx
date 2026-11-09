/** Collabio — Mobile Revision Request Modal (Milestone 1) */
export default function MobileRevisionMilestonePage() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 px-gutter-mobile flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <button aria-label="Close modal" type="button" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                close
              </span>
            </button>
            <h1 className="font-headline-sm text-headline-sm text-on-surface truncate">
              Revision Request
            </h1>
          </div>
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen">
        <div className="flex flex-col w-full pb-safe">
          <div className="flex flex-col w-full px-gutter-mobile pt-space-sm pb-space-xl gap-space-md">
            <div className="flex flex-wrap items-center gap-space-xs pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[14px]">
                  tag
                </span>
                <span>
                  Deal #UK-5028
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[14px]">
                  history_edu
                </span>
                <span>
                  Milestone 1 Revision
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
                <span>
                  Round 1 of 2 Allowed
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
                Request Deliverable Revision
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                 Submit actionable timestamped feedback to 
                <span className="font-semibold text-on-surface">
                  Charlotte Emily Clark
                </span>
                . Under English Commercial Law Model 2.4, this uses 1 of your 2 contractual revision rounds and pauses the auto-release timer. 
              </p>
            </div>
            <div className="grid grid-cols-1 gap-space-xs">
              <div className="flex items-start gap-space-sm p-3.5 rounded-xl bg-surface-container-low">
                <div className="w-8 h-8 rounded-lg bg-tertiary-fixed/30 flex items-center justify-center shrink-0 text-tertiary mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">
                    timer_pause
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      Review Window Paused
                    </span>
                    <span className="font-label-sm text-label-sm text-tertiary font-medium bg-surface-container-highest px-2 py-0.5 rounded-full">
                      31h 42m remaining
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                     Submitting this request halts the 48-hour auto-release timer. Charlotte will receive a contractual 72-hour turnaround window once dispatched. 
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-space-sm p-3.5 rounded-xl bg-secondary-container/20">
                <div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center shrink-0 text-on-secondary-container mt-0.5">
                  <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[18px]">
                    verified_user
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      Escrow Protection Active
                    </span>
                    <span className="font-headline-sm text-headline-sm text-secondary font-semibold">
                      Rs 518,000
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                     Ring-fenced in Barclays Client Custody Vault #A-8291. Funds cannot be withdrawn or returned unilaterally while bilateral revision is underway. 
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-3 rounded-xl bg-surface-container">
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  Target Deliverable
                </span>
                <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-medium">
                  <span className="material-symbols-outlined text-[14px]">
                    link
                  </span>
                   Unlisted Draft 
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0 bg-inverse-surface">
                  <img data-alt="High tech minimal software developer desk setup with dual monitors showing code editor, ambient violet and cyan studio lighting, ultra clean workspace with coffee mug and microphone, 4k digital photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTw4BDEy4u3_Zy6L-WMy579Peq_c59GGec-h8GjsYdHLGu9CgX3nGOOb9F0gxO_lA06wI3RHltzVevNJxcNovCOLzXfk1bBOspSM4-hX4g9iLB1JKszCoBRu6K5nYwnxwFzATKvC00j_l2qsewMVg4mn9np4JlzBLcbD-sHc4mCjL0GhGxUbieOsbPJybuLigT4a4VO55tcpuxKVvG51K04lGXorVT0peOKnrgY1HrMbH2ANlhS7nrKg" className="w-full h-full object-cover opacity-90" />
                  <div className="absolute bottom-1 right-1 px-1 py-0.5 bg-inverse-surface/85 backdrop-blur-sm rounded font-label-sm text-label-sm text-inverse-on-surface leading-none text-[10px]">
                     14:28 
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-surface/80 flex items-center justify-center text-on-surface shadow-sm">
                      <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[14px]">
                        play_arrow
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <p className="font-headline-sm text-headline-sm text-on-surface truncate">
                    Top 5 Dev Tools for 2027: Building Local-First
                  </p>
                  <div className="flex items-center gap-1.5 mt-1 text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-[15px] text-tertiary">
                      campaign
                    </span>
                    <span>
                      Sponsor segment:
                    </span>
                    <span className="font-semibold text-on-surface bg-surface-container-lowest px-1.5 py-0.5 rounded text-xs">
                      03:14 – 04:32
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="font-label-lg text-label-lg text-on-surface">
                  Timestamp Redline Reference
                </label>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Click to anchor
                </span>
              </div>
              <div id="timestamp-chips" className="flex flex-wrap gap-1.5">
                <button type="button" className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-all">
                  <span className="material-symbols-outlined text-[14px]">
                    pin_drop
                  </span>
                  <span>
                    03:14 Call-to-action
                  </span>
                </button>
                <button type="button" className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container-high text-on-surface-variant font-label-md text-label-md transition-all active:scale-95">
                  <span className="material-symbols-outlined text-[14px]">
                    pin_drop
                  </span>
                  <span>
                    03:45 Pricing tier
                  </span>
                </button>
                <button type="button" className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container-high text-on-surface-variant font-label-md text-label-md transition-all active:scale-95">
                  <span className="material-symbols-outlined text-[14px]">
                    pin_drop
                  </span>
                  <span>
                    04:10 Logo watermark
                  </span>
                </button>
                <button type="button" className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container-low text-primary font-label-md text-label-md transition-all">
                  <span className="material-symbols-outlined text-[14px]">
                    add
                  </span>
                  <span>
                    Add Custom
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-lg text-label-lg text-on-surface">
                Category of Adjustment
              </label>
              <div id="category-grid" className="grid grid-cols-2 gap-2">
                <button type="button" className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md transition-all text-left">
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    graphic_eq
                  </span>
                  <span>
                    Audio / Voiceover
                  </span>
                </button>
                <button type="button" className="flex items-center gap-2 p-2.5 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md shadow-sm transition-all text-left">
                  <span className="material-symbols-outlined text-[18px]">
                    branding_watermark
                  </span>
                  <span>
                    Visual / Logo Graphic
                  </span>
                </button>
                <button type="button" className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md transition-all text-left">
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    gavel
                  </span>
                  <span>
                    Compliance &amp; Terms
                  </span>
                </button>
                <button type="button" className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md transition-all text-left">
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    ads_click
                  </span>
                  <span>
                    Call-to-Action Link
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="feedback-input" className="font-label-lg text-label-lg text-on-surface">
                  Detailed Actionable Feedback
                </label>
                <span id="char-counter" className="font-label-sm text-label-sm text-on-surface-variant">
                  184 / 1,000
                </span>
              </div>
              <div className="relative w-full rounded-xl bg-surface-container-low p-3 focus-within:bg-surface-container transition-colors shadow-sm">
                <textarea id="feedback-input" maxLength={1000} rows={4} className="w-full bg-transparent border-0 outline-none resize-none font-body-md text-body-md text-on-surface placeholder:text-outline">
                  At 03:48, the on-screen card says "Free Trial" instead of "14-Day Pro Trial without Credit Card". Please update the lower-third graphic and re-render. Also ensure the audio mix maintains -14 LUFS standard as per Schedule 1.
                </textarea>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-secondary">
                  info
                </span>
                 Precise feedback prevents arbitration escalations. 
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-lg text-label-lg text-on-surface">
                Annotated Reference Asset
              </label>
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      cloud_upload
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                      Attach asset or redline markup
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                      PNG, MP4, PDF or Figma frame (Max 25MB)
                    </span>
                  </div>
                </div>
                <button type="button" className="shrink-0 px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-medium">
                  Browse
                </button>
                <input id="file-input" type="file" className="hidden" />
              </div>
              <div id="file-preview-pill" className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm">
                <div className="flex items-center gap-2 truncate">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    image
                  </span>
                  <span className="truncate">
                    redline_timestamp_0348_corrected_copy.png (1.2 MB)
                  </span>
                </div>
                <button type="button" className="text-on-surface-variant hover:text-error ml-2">
                  <span className="material-symbols-outlined text-[16px]">
                    close
                  </span>
                </button>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-container-high/60 flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant shrink-0 mt-0.5">
                balance
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                <strong className="font-semibold text-on-surface">
                  Statutory arbitration notice:
                </strong>
                 If requested modifications fall outside agreed Schedule 1 specifications, creator may invoke Collabio neutral referee review under the Rs 27,750arbitration statutory cap.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 pt-2">
              <button id="dispatch-btn" type="button" className="w-full h-12 rounded-xl bg-primary text-on-primary font-headline-sm text-headline-sm flex items-center justify-center gap-2 shadow-md hover:bg-primary/90 active:scale-[0.99] transition-all" data-go="/creator/uk-5028/resubmit">
                <span className="material-symbols-outlined text-[19px]">
                  send
                </span>
                <span>
                  Dispatch Revision Request (Round 1 of 2)
                </span>
              </button>
              <button type="button" className="w-full h-11 rounded-xl bg-surface-container text-on-surface font-headline-sm text-headline-sm flex items-center justify-center gap-1.5 active:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                  keyboard_backspace
                </span>
                <span>
                  Cancel &amp; Return to Video Review
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
