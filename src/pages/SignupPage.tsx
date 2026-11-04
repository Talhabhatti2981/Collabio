import Logo from '../components/Logo'

/** Pactly — Sign Up (Choose a Role) */
export default function SignupPage() {
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
        <div className="flex flex-col w-full">
          <div className="w-full py-space-xl px-margin flex items-center justify-center relative overflow-hidden">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-primary/5 via-secondary-container/10 to-transparent blur-3xl pointer-events-none rounded-full"></div>
            <div className="absolute top-48 -right-24 w-80 h-80 bg-secondary/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="w-full max-w-[620px] relative z-10 flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-space-lg px-2">
                <div className="flex items-center gap-space-sm">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm">
                    1
                  </span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold tracking-tight">
                    Account Identity
                  </span>
                </div>
                <div className="h-0.5 w-16 bg-outline-variant/40 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-primary-container rounded-full"></div>
                </div>
                <div className="flex items-center gap-space-sm text-outline">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                    2
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Profile &amp; Payout Rails
                  </span>
                </div>
              </div>
              <div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-6 sm:p-10 relative">
                <div className="text-left mb-space-lg">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm mb-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary"></span>
                     Solicitor-Drafted Escrow Infrastructure 
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                     Create your Pactly identity 
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                     Impartial custody protocol for UK creator partnerships under English jurisdiction. 
                  </p>
                </div>
                <form id="signup-form" className="flex flex-col gap-space-lg">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-lg text-label-lg text-on-surface">
                       Account Role 
                      <span className="text-error">
                        *
                      </span>
                    </label>
                    <div aria-label="Select your operational role" id="role-selector" role="radiogroup" className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
                      <div aria-checked="true" id="tile-brand" role="radio" tabIndex={0} className="role-tile cursor-pointer p-4 rounded-lg bg-surface-container-low transition-all duration-150 flex flex-col justify-between group relative shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-[18px]">
                              domain
                            </span>
                          </div>
                          <div className="radio-indicator w-5 h-5 rounded-full bg-primary flex items-center justify-center transition-colors">
                            <div className="w-2 h-2 rounded-full bg-on-primary"></div>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 flex items-center gap-1.5">
                             I'm a brand 
                            <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-primary/10 text-primary uppercase">
                              Buyer
                            </span>
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                             Buying posts from creators, funding escrow via PKR card, solicitor-drafted contracts. 
                          </p>
                        </div>
                      </div>
                      <div aria-checked="false" id="tile-creator" role="radio" tabIndex={0} className="role-tile cursor-pointer p-4 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low transition-all duration-150 flex flex-col justify-between group relative">
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[18px]">
                              verified_user
                            </span>
                          </div>
                          <div className="radio-indicator w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center transition-colors">
                            <div className="w-2 h-2 rounded-full bg-transparent"></div>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 flex items-center gap-1.5">
                             I'm a creator 
                            <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant uppercase">
                              Talent
                            </span>
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                             Delivering sponsored posts, guaranteed payout on publication, zero chase. 
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[15px] text-outline">
                        info
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                         You cannot change your role type after identity provisioning, so select the one that represents your legal party. 
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="work-email" className="font-label-lg text-label-lg text-on-surface">
                         Work Email 
                        <span className="text-error">
                          *
                        </span>
                      </label>
                      <span className="font-label-sm text-label-sm text-outline">
                        Primary signatory channel
                      </span>
                    </div>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3.5 text-outline text-[18px] pointer-events-none">
                        mail
                      </span>
                      <input autoComplete="email" id="work-email" placeholder="name@company.co.uk or creator@handle.com" required={true} type="email" className="w-full h-11 pl-10 pr-3.5 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none transition-all" />
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pl-0.5">
                       Legally binding notices and counterparty escrow vouchers are delivered here. 
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="password-input" className="font-label-lg text-label-lg text-on-surface">
                         Password 
                        <span className="text-error">
                          *
                        </span>
                      </label>
                      <span id="strength-label" className="font-label-sm text-label-sm text-outline font-medium">
                        Standard requirement
                      </span>
                    </div>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3.5 text-outline text-[18px] pointer-events-none">
                        lock
                      </span>
                      <input autoComplete="new-password" id="password-input" placeholder="12+ characters, mixed case, number or symbol" required={true} type="password" className="w-full h-11 pl-10 pr-11 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none transition-all" />
                      <button aria-label="Toggle password visibility" id="toggle-password" type="button" className="absolute right-3 p-1 rounded hover:bg-surface-container text-outline hover:text-on-surface transition-colors">
                        <span id="eye-icon" className="material-symbols-outlined text-[20px]">
                          visibility
                        </span>
                      </button>
                    </div>
                    <div aria-hidden="true" className="flex items-center gap-1.5 mt-1">
                      <div id="meter-1" className="h-1.5 flex-1 rounded-full bg-surface-container transition-all duration-200"></div>
                      <div id="meter-2" className="h-1.5 flex-1 rounded-full bg-surface-container transition-all duration-200"></div>
                      <div id="meter-3" className="h-1.5 flex-1 rounded-full bg-surface-container transition-all duration-200"></div>
                      <div id="meter-4" className="h-1.5 flex-1 rounded-full bg-surface-container transition-all duration-200"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 mt-1 text-on-surface-variant font-label-sm text-label-sm">
                      <span id="crit-len" className="flex items-center gap-1 text-outline">
                        <span className="material-symbols-outlined text-[13px]">
                          circle
                        </span>
                         12+ characters 
                      </span>
                      <span id="crit-upper" className="flex items-center gap-1 text-outline">
                        <span className="material-symbols-outlined text-[13px]">
                          circle
                        </span>
                         Uppercase &amp; lowercase 
                      </span>
                      <span id="crit-num" className="flex items-center gap-1 text-outline">
                        <span className="material-symbols-outlined text-[13px]">
                          circle
                        </span>
                         At least one number 
                      </span>
                      <span id="crit-sym" className="flex items-center gap-1 text-outline">
                        <span className="material-symbols-outlined text-[13px]">
                          circle
                        </span>
                         Special symbol (!@#$%^&amp;*) 
                      </span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-surface-container-low flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                      verified
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                       By creating an account you agree to Pactly’s 
                      <a className="text-primary font-medium underline underline-offset-2 hover:text-primary-container" href="#" onClick={(event) => event.preventDefault()}>
                        Terms of Service
                      </a>
                      , confirm you act in a professional commercial capacity, and acknowledge English legal jurisdiction for all platform contracts. 
                    </p>
                  </div>
                  <button id="submit-btn" type="submit" className="w-full h-12 rounded-lg bg-primary-container text-on-primary font-headline-sm text-headline-sm hover:bg-primary active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/20" data-go="/verify-email">
                    <span>
                      Create Pactly account
                    </span>
                    <span className="material-symbols-outlined text-[20px]">
                      arrow_forward
                    </span>
                  </button>
                  <div className="text-center pt-1 pb-1">
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      Already have an active escrow registry?
                    </span>
                    <a className="ml-1 font-label-lg text-label-lg text-primary hover:underline font-semibold" data-go="/login" href="/login">
                       Log in 
                    </a>
                  </div>
                </form>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-on-surface-variant font-label-md text-label-md">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-[16px]">
                    gavel
                  </span>
                  <span>
                    English Law Jurisdiction
                  </span>
                </div>
                <span className="text-outline-variant/60 hidden sm:inline">
                  •
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[16px]">
                    lock
                  </span>
                  <span>
                    Segregated Stripe Escrow
                  </span>
                </div>
                <span className="text-outline-variant/60 hidden sm:inline">
                  •
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-[16px]">
                    shield
                  </span>
                  <span>
                    FCA Regulated Rails
                  </span>
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
