import Logo from '../components/Logo'

/** Pactly — Verify Your Email */
export default function VerifyEmailPage() {
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
              <a className="px-3 py-2 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-go="/welcome" href="/welcome">
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
        <div className="flex flex-col w-full pb-16">
          <div className="w-full bg-surface-container-high px-margin py-3 mb-6 transition-all">
            <div className="max-w-[760px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-on-surface">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2 w-2 rounded-full bg-tertiary-container animate-pulse"></span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  <strong className="font-semibold text-on-surface">
                    Verify your email to start or fund a deal.
                  </strong>
                   You can explore the dashboard in read-only mode in the meantime. 
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                <button id="bannerResendBtn" className="font-label-sm text-label-sm text-primary hover:text-primary-container font-semibold transition-colors flex items-center gap-1">
                  <span>
                    Resend link
                  </span>
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[620px] mx-auto px-gutter-mobile sm:px-0">
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Account Security
                </span>
                <span className="text-outline-variant font-label-sm">
                  /
                </span>
                <span className="font-label-sm text-label-sm text-primary font-medium">
                  Milestone 1 of 3
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-secondary">
                <span style={{ "fontVariationSettings": "'FILL' 1" }} className="material-symbols-outlined text-[15px]">
                  shield
                </span>
                <span>
                  Standard UK Custody Protocol
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-md p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-32 bg-primary-fixed/40 rounded-full blur-2xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-5 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary shadow-sm">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 32 32" className="w-8 h-8 text-primary">
                      <rect height="20" rx="3" width="26" x="3" y="6" className="fill-surface-container-lowest stroke-primary"></rect>
                      <path d="M3 9l13 9 13-9"></path>
                      <circle cx="23" cy="21" r="5" className="fill-secondary stroke-none"></circle>
                      <path d="M21.5 21l1 1 2-2" stroke="#ffffff" strokeWidth="1.5"></path>
                    </svg>
                  </div>
                  <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary"></span>
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm mb-3">
                  <span className="material-symbols-outlined text-[13px]">
                    mark_email_unread
                  </span>
                  <span>
                    Email Verification Required
                  </span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                  Check your inbox
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-6">
                   We have dispatched a secure 8-digit verification link. Confirm your identity to unlock custodial escrow services. 
                </p>
                <div className="w-full bg-surface-container-low rounded-lg p-3.5 mb-6 text-left">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary shrink-0 shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">
                          verified_user
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          Registered legal recipient
                        </div>
                        <div id="emailDisplay" className="font-headline-sm text-headline-sm text-on-surface truncate">
                          charlotte@creativestudio.co.uk
                        </div>
                      </div>
                    </div>
                    <button id="editToggleBtn" className="shrink-0 px-2.5 py-1 rounded-md text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors font-label-md text-label-md flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        edit
                      </span>
                      <span>
                        Edit email
                      </span>
                    </button>
                  </div>
                  <div id="inlineEditField" className="hidden mt-3 pt-3 flex items-center gap-2">
                    <input id="newEmailInput" placeholder="Enter updated email" type="email" defaultValue="charlotte@creativestudio.co.uk" className="flex-1 bg-surface-container-lowest rounded-lg px-3 py-1.5 font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" />
                    <button className="px-3 py-1.5 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:bg-primary-container transition-colors shadow-sm">
                      Save
                    </button>
                    <button className="px-2 py-1.5 text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface">
                      Cancel
                    </button>
                  </div>
                </div>
                <div className="w-full bg-surface rounded-lg p-4 mb-6 text-left">
                  <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px] text-tertiary-container">
                      lock_clock
                    </span>
                    <span>
                      Escrow Access Rights
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-body-sm font-body-sm text-on-surface">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        check_circle
                      </span>
                      <span>
                        Explore public dashboard
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        check_circle
                      </span>
                      <span>
                        Draft milestone templates
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant opacity-75">
                      <span className="material-symbols-outlined text-error text-[16px]">
                        cancel
                      </span>
                      <span>
                        Cannot fund Stripe escrow
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant opacity-75">
                      <span className="material-symbols-outlined text-error text-[16px]">
                        cancel
                      </span>
                      <span>
                        Cannot countersign deals
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full">
                    <button id="resendMainBtn" className="w-full sm:flex-1 py-2.5 px-4 rounded-lg bg-surface-container text-on-surface-variant font-label-lg text-label-lg flex items-center justify-center gap-2 cursor-not-allowed select-none transition-all shadow-sm">
                      <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 text-primary animate-spin">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeDasharray="31.4" strokeDashoffset="10" strokeLinecap="round" strokeWidth="3" className="opacity-25"></circle>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeDasharray="62.8" strokeDashoffset="30" strokeLinecap="round" strokeWidth="3"></circle>
                      </svg>
                      <span id="resendBtnText">
                        Resend email (disabled for 
                        <span id="cooldownSeconds" className="font-semibold text-on-surface">
                          48
                        </span>
                        s)
                      </span>
                    </button>
                    <div className="flex items-center gap-1.5 w-full sm:w-auto">
                      <a rel="noopener noreferrer" target="_blank" className="flex-1 sm:flex-initial px-3 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-sm text-label-sm transition-colors text-center flex items-center justify-center gap-1.5 shadow-sm" href="https://mail.google.com">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                        </svg>
                        <span>
                          Gmail
                        </span>
                      </a>
                      <a rel="noopener noreferrer" target="_blank" className="flex-1 sm:flex-initial px-3 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-sm text-label-sm transition-colors text-center flex items-center justify-center gap-1.5 shadow-sm" href="https://outlook.live.com">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5">
                          <path d="M21.5 4h-19C1.67 4 1 4.67 1 5.5v13c0 .83.67 1.5 1.5 1.5h19c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5zm-.5 3l-9 5.62L3 7V5.5l9 5.62L21 5.5V7z"></path>
                        </svg>
                        <span>
                          Outlook
                        </span>
                      </a>
                    </div>
                  </div>
                  <div id="resendToast" className="hidden transition-all text-center py-1 px-3 bg-secondary-container text-on-secondary-fixed rounded font-label-sm text-label-sm">
                     A fresh 8-digit verification link has been dispatched to your inbox. 
                  </div>
                </div>
                <div className="mt-8 pt-6 w-full text-center">
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                     Didn't receive it? Check your spam folder or contact 
                    <a className="text-primary hover:underline font-medium" href="mailto:support@pactly.co.uk">
                      support@pactly.co.uk
                    </a>
                    . 
                  </p>
                  <div className="mt-2 flex items-center justify-center gap-1.5 text-outline font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[13px]">
                      history
                    </span>
                    <span>
                      Link expires automatically after 24 hours under UK GDPR regulations
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a className="inline-flex items-center gap-1.5 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-1 px-3 rounded-lg hover:bg-surface-container" data-go="/complete-profile" href="/complete-profile">
                <span>
                  Continue to dashboard as unverified user
                </span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
              <p className="font-label-sm text-label-sm text-outline mt-1">
                Read-only preview enabled
              </p>
            </div>
            <div className="mt-10 bg-surface-container-low rounded-xl p-5 flex items-start gap-4 shadow-sm">
              <div className="w-9 h-9 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">
                  verified
                </span>
              </div>
              <div className="text-left">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-0.5">
                  FCA Custodial Escrow Architecture
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                   Pactly partners with regulated British financial institutions to ring-fence contract funds. Verification preserves legally enforceable dispute adjudication under English Law. 
                </p>
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
