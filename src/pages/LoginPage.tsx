/** Pactly — Log In */
export default function LoginPage() {
  return (
    <>
      <main className="flex min-h-screen w-full items-center bg-surface py-12">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden pb-16 pt-6">
            <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[760px] h-[340px] bg-gradient-to-b from-primary/5 via-primary/[0.015] to-transparent rounded-full blur-3xl opacity-70"></div>
            <div className="relative max-w-[520px] mx-auto px-margin-mobile sm:px-0 flex flex-col items-center">
              <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high/60 shadow-sm mb-4">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                  FCA-Regulated Escrow Custody
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight text-center">
                 Log in to your Pactly account 
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant text-center max-w-[420px] mt-2 mb-8">
                 Access your active contracts, escrow balances, and milestone verifications under English jurisdiction. 
              </p>
              <div className="w-full bg-surface-container-lowest rounded-xl shadow-md p-6 sm:p-8 relative">
                <div id="securityAlert" className="mb-6 rounded-lg bg-error-container/40 p-4 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[20px] text-error flex-shrink-0 mt-0.5">
                      error
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <span className="font-headline-sm text-headline-sm text-on-error-container leading-tight">
                         Authentication unverified 
                      </span>
                      <p className="font-body-sm text-body-sm text-on-error-container">
                         The email address or password you entered does not match our records. Check your credentials or reset your password. 
                      </p>
                      <div className="mt-1 inline-flex items-center gap-1.5 py-1 px-2 rounded bg-surface-container-lowest/80 w-fit">
                        <span className="material-symbols-outlined text-[14px] text-outline">
                          shield
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">
                           For security, Pactly does not disclose whether a specific email address is registered. 
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <form id="loginForm" className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-2">
                    <button className="h-10 rounded-lg border border-outline-variant bg-surface-container-lowest font-label-lg text-label-lg text-on-surface hover:bg-surface-container" data-flow="role-brand" type="button">
                      I'm a brand
                    </button>
                    <button className="h-10 rounded-lg bg-primary-container font-label-lg text-label-lg text-on-primary hover:bg-primary" data-flow="role-creator" type="button">
                      I'm a creator
                    </button>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <label htmlFor="email" className="font-label-lg text-label-lg text-on-surface">
                         Work email address 
                      </label>
                      <span className="font-label-sm text-label-sm text-outline">
                        Signatory ID
                      </span>
                    </div>
                    <div className="relative">
                      <input autoComplete="email" id="email" placeholder="name@company.com" type="email" defaultValue="charlotte@creativestudio.co.uk" className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors" />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-[18px]">
                        mail
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      The designated party email tied to your escrow mandates.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <label htmlFor="password" className="font-label-lg text-label-lg text-on-surface">
                         Password 
                      </label>
                      <a className="font-label-sm text-label-sm text-primary hover:text-on-primary-fixed-variant transition-colors underline-offset-2 hover:underline" data-go="/login" href="/login">
                         Forgot password? 
                      </a>
                    </div>
                    <div className="relative">
                      <input autoComplete="current-password" id="password" type="password" defaultValue="••••••••••••" className="w-full h-11 pl-3.5 pr-11 rounded-lg bg-error-container/20 text-on-surface font-body-md text-body-md focus:outline-none transition-colors" />
                      <button aria-label="Toggle password visibility" id="togglePassword" type="button" className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:text-on-surface transition-colors">
                        <span id="eyeIcon" className="material-symbols-outlined text-[20px]">
                          visibility
                        </span>
                      </button>
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="material-symbols-outlined text-error text-[15px]">
                        info
                      </span>
                      <span className="font-label-sm text-label-sm text-error">
                        Incorrect password for this institutional profile
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2.5 cursor-pointer select-none">
                      <input defaultChecked={true} type="checkbox" className="w-4 h-4 rounded text-primary-container focus:ring-primary focus:ring-offset-0 bg-surface-container" />
                      <span className="font-body-sm text-body-sm text-on-surface">
                        Remember this device for 30 days
                      </span>
                    </label>
                    <span className="font-label-sm text-label-sm text-outline hidden sm:inline">
                      2FA retained
                    </span>
                  </div>
                  <button type="submit" className="w-full h-11 mt-2 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg font-medium hover:bg-primary transition-all duration-150 shadow-sm flex items-center justify-center gap-2" data-flow="login-submit">
                    <span>
                      Log in
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </button>
                  <div className="relative flex items-center justify-center my-1">
                    <div className="w-full h-[1px] bg-surface-container-high"></div>
                    <span className="absolute px-3 bg-surface-container-lowest font-label-sm text-label-sm text-outline">
                       OR SINGLE SIGN-ON 
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button type="button" className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors flex items-center justify-center gap-2 font-label-md text-label-md" data-flow="login-submit">
                      <svg viewBox="0 0 24 24" className="w-4 h-4">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"></path>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"></path>
                      </svg>
                      <span>
                        Google Workspace
                      </span>
                    </button>
                    <button type="button" className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors flex items-center justify-center gap-2 font-label-md text-label-md" data-flow="login-submit">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-on-surface">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.77 1.04-1.84.92-2.91-1 .04-2.18.67-2.88 1.48-.55.63-.99 1.69-.87 2.73 1.12.09 2.22-.55 2.83-1.3"></path>
                      </svg>
                      <span>
                        Apple Passkey
                      </span>
                    </button>
                  </div>
                </form>
                <div className="mt-8 pt-5 border-t border-surface-container-high/70 flex flex-col items-center justify-center gap-2">
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                     Don't have a Pactly account? 
                    <a className="font-label-sm text-label-sm text-primary hover:text-on-primary-fixed-variant ml-1 font-semibold" data-go="/signup" href="/signup">
                       Create an account → 
                    </a>
                  </p>
                  <div className="flex items-center gap-2 font-label-sm text-label-sm text-outline">
                    <span>
                      Brand Signer
                    </span>
                    <span>
                      ·
                    </span>
                    <span>
                      Independent Creator
                    </span>
                    <span>
                      ·
                    </span>
                    <span>
                      Talent Agency
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full mt-8 p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
                <span className="material-symbols-outlined text-secondary text-[22px] flex-shrink-0 mt-0.5">
                  verified_user
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wide uppercase">
                     Statutory Legal Assurance 
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                     All sessions are encrypted and governed under English Commercial Law. Client escrow deposits are held in ring-fenced Stripe accounts protected by UK banking covenants. 
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 mt-6 font-label-sm text-label-sm text-outline">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                   256-Bit Transport Layer 
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                   ISO 27001 Infrastructure 
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                   GDPR Compliant 
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
