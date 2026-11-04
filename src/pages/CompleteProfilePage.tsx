/** Pactly — Complete Your Profile (Brand & Creator) */
export default function CompleteProfilePage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="bg-surface-container-low px-margin-mobile lg:px-margin">
          <div className="max-w-7xl mx-auto h-8 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[14px]">
                verified_user
              </span>
              <span>
                Custody under FCA-regulated partner rails • Stripe Connect segregated client balances
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-space-md">
              <span className="flex items-center gap-space-xs text-secondary font-label-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Escrow Status: Protected
              </span>
              <span className="text-outline-variant">
                |
              </span>
              <span>
                UK &amp; Cross-Border Commercial Agreements
              </span>
            </div>
          </div>
        </div>
        <div className="h-16 px-margin-mobile lg:px-margin bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-xl">
              <a className="flex items-center gap-2 group" data-go="/deals" href="/deals">
                <span className="font-headline-md text-headline-md tracking-tight font-bold text-on-surface">
                  Pactly
                </span>
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              </a>
              <nav data-active-classes="bg-primary-container text-on-primary font-label-md rounded-lg" className="hidden lg:flex items-center gap-space-xs">
                <a className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-go="/deals" href="/deals">
                  Deals
                  <span className="ml-1 px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary text-[10px] font-bold leading-none">
                    2
                  </span>
                </a>
                <a className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-go="/creator" href="/creator">
                  Earnings &amp; Payouts
                </a>
                <a className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-go="/profile" href="/profile">
                  Profile
                </a>
                <a className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-go="/settings" href="/settings">
                  Settings
                </a>
                <a className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-go="/help" href="/help">
                  Help &amp; Legal
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-space-md">
              <div className="hidden xl:flex items-center gap-space-sm px-space-md py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                <span className="material-symbols-outlined text-[16px] text-on-secondary-fixed">
                  lock
                </span>
                <span className="font-semibold">
                  Guaranteed in Escrow:
                </span>
                <span>
                  Rs 1,239,500
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-space-sm pl-space-sm">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary text-[18px]">
                    person
                  </span>
                </div>
                <div className="hidden md:flex flex-col whitespace-nowrap text-left">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    @charlotte_creator
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Creator Account
                  </span>
                </div>
                <button aria-label="User menu" type="button" className="text-on-surface-variant hover:text-on-surface focus:outline-none">
                  <span className="material-symbols-outlined text-[20px]">
                    expand_more
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-24 bg-surface flex-grow">
        <div className="flex flex-col w-full relative min-h-[calc(100vh-6rem)]">
          <div className="w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin opacity-40 pointer-events-none select-none filter blur-[2px] transition-all duration-300">
            <div className="flex flex-col gap-space-lg py-space-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                <div className="flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[28px]">
                      lock_clock
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                      Escrow Deal #PAC-8842
                    </span>
                    <span className="font-headline-md text-headline-md text-on-surface">
                      Summer Creator Campaign 2025
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-md">
                  <span className="px-space-md py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm">
                    Escrow Allocated: Rs 1,572,500
                  </span>
                  <div className="h-9 w-32 rounded-lg bg-primary-container opacity-20"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                <div className="lg:col-span-8 bg-surface-container-lowest p-space-xl rounded-xl h-96 shadow-sm"></div>
                <div className="lg:col-span-4 bg-surface-container-lowest p-space-xl rounded-xl h-96 shadow-sm"></div>
              </div>
            </div>
          </div>
          <div className="fixed top-24 right-0 bottom-0 left-0 z-40 bg-inverse-surface/40 backdrop-blur-sm transition-opacity"></div>
          <div className="fixed top-24 right-0 bottom-0 left-0 z-50 flex items-center justify-center overflow-y-auto p-space-sm sm:p-space-md lg:p-space-xl">
            <div className="relative w-full max-w-5xl bg-surface-container-lowest rounded-xl shadow-2xl flex flex-col overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
              <div className="bg-surface-container-low px-space-md sm:px-space-xl py-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <div className="w-7 h-7 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-[16px]">
                      verified
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                        One-Time Legal Onboarding
                      </span>
                      <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Step 1 of 1
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                      Procedural custody requirement under English Law
                    </span>
                  </div>
                </div>
                <div className="inline-flex items-center bg-surface-container-highest p-1 rounded-lg self-start sm:self-auto shadow-inner">
                  <button id="toggle-brand-btn" type="button" className="px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all flex items-center gap-1.5 bg-surface-container-lowest text-on-surface shadow-sm" data-go="/complete-profile">
                    <span className="material-symbols-outlined text-[15px] text-primary">
                      domain
                    </span>
                    <span>
                      Brand Profile
                    </span>
                    <span className="ml-1 w-2 h-2 rounded-full bg-primary"></span>
                  </button>
                  <button id="toggle-creator-btn" type="button" className="px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all flex items-center gap-1.5 text-on-surface-variant hover:text-on-surface" data-go="/complete-profile">
                    <span className="material-symbols-outlined text-[15px]">
                      badge
                    </span>
                    <span>
                      Creator Profile
                    </span>
                  </button>
                  <button id="toggle-split-btn" title="Side-by-side comparison" type="button" className="hidden xl:flex px-space-sm py-1.5 rounded-lg font-label-md text-label-md transition-all items-center gap-1 text-on-surface-variant hover:text-on-surface">
                    <span className="material-symbols-outlined text-[15px]">
                      vertical_split
                    </span>
                    <span>
                      Compare Both
                    </span>
                  </button>
                </div>
              </div>
              <div className="bg-secondary/5 px-space-md sm:px-space-xl py-space-sm flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[16px]">
                    gavel
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface">
                    <span className="font-semibold text-secondary">
                      Just once — we'll never ask again.
                    </span>
                     Populates solicitor-approved standard terms &amp; AML compliance files. 
                  </p>
                </div>
                <div className="hidden md:flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px] text-secondary">
                    security
                  </span>
                  <span>
                    HMRC &amp; Companies House Rails
                  </span>
                </div>
              </div>
              <div className="p-space-md sm:p-space-xl flex-grow overflow-y-auto max-h-[calc(85vh-140px)]">
                <div id="view-brand" className="flex flex-col gap-space-lg">
                  <div className="flex flex-col gap-1 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-[10px] tracking-wide uppercase font-semibold">
                        Corporate Principal
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        AML Regulated 
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      Complete your brand legal identity
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                       Required once by UK AML regulations before funding your first escrow deposit. Details are verified directly against Companies House registries. 
                    </p>
                  </div>
                  <form id="brand-form" className="flex flex-col gap-space-lg">
                    <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-lg">
                      <div className="flex flex-col md:flex-row md:items-start gap-space-sm md:gap-space-lg">
                        <div className="w-full md:w-[35%] flex flex-col">
                          <label htmlFor="company-name" className="font-label-lg text-label-lg text-on-surface font-semibold">
                            Registered company name
                          </label>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Full statutory entity name as entered at Companies House.
                          </span>
                        </div>
                        <div className="w-full md:w-[65%] flex flex-col gap-1">
                          <div className="relative">
                            <input id="company-name" required={true} type="text" defaultValue="Lumina Studio Ltd" className="w-full bg-surface-container-lowest rounded-lg h-10 px-space-md text-on-surface font-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" />
                            <span className="material-symbols-outlined absolute right-3 top-2.5 text-secondary text-[20px]">
                              check_circle
                            </span>
                          </div>
                          <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
                            <span className="material-symbols-outlined text-[13px]">
                              verified
                            </span>
                             Active UK Limited Company 
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-start gap-space-sm md:gap-space-lg pt-space-md">
                        <div className="w-full md:w-[35%] flex flex-col">
                          <label htmlFor="crn-number" className="font-label-lg text-label-lg text-on-surface font-semibold">
                            Companies House number (CRN)
                          </label>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            8-digit alphanumeric company reference.
                          </span>
                        </div>
                        <div className="w-full md:w-[65%] flex flex-col gap-space-xs">
                          <div className="flex items-center gap-space-sm">
                            <div className="relative flex-grow">
                              <input id="crn-number" required={true} type="text" defaultValue="14298102" className="w-full bg-surface-container-lowest rounded-lg h-10 px-space-md font-mono text-on-surface font-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container tracking-wider" />
                            </div>
                            <div className="px-space-md h-10 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center gap-1.5 font-label-md text-label-md shrink-0 shadow-sm">
                              <span className="material-symbols-outlined text-[16px] text-secondary">
                                verified_user
                              </span>
                              <span className="font-bold">
                                Verified at Crown Registry
                              </span>
                            </div>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Pactly automatically queries Companies House API to lock company status.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-start gap-space-sm md:gap-space-lg pt-space-md">
                        <div className="w-full md:w-[35%] flex flex-col">
                          <label htmlFor="office-address" className="font-label-lg text-label-lg text-on-surface font-semibold">
                            Registered office address
                          </label>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Official service address for service of formal notice.
                          </span>
                        </div>
                        <div className="w-full md:w-[65%] flex flex-col gap-2">
                          <textarea id="office-address" required={true} rows={2} className="w-full bg-surface-container-lowest rounded-lg p-space-md text-on-surface font-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container leading-relaxed">
                            71–75 Shelton Street, Covent Garden, London WC2H 9JQ
                          </textarea>
                          <div className="flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[15px] text-outline">
                              location_on
                            </span>
                            <span>
                              Jurisdiction: England &amp; Wales
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-start gap-space-sm md:gap-space-lg pt-space-md">
                        <div className="w-full md:w-[35%] flex flex-col">
                          <label htmlFor="signatory-name" className="font-label-lg text-label-lg text-on-surface font-semibold">
                            Primary commercial signatory
                          </label>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Name and role authorised to sign binding milestone contracts.
                          </span>
                        </div>
                        <div className="w-full md:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                          <div>
                            <input id="signatory-name" placeholder="Full name" required={true} type="text" defaultValue="David Vance" className="w-full bg-surface-container-lowest rounded-lg h-10 px-space-md text-on-surface font-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" />
                          </div>
                          <div>
                            <input id="signatory-role" placeholder="Signatory title / capacity" required={true} type="text" defaultValue="Managing Director" className="w-full bg-surface-container-lowest rounded-lg h-10 px-space-md text-on-surface font-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-start gap-space-sm md:gap-space-lg pt-space-md">
                        <div className="w-full md:w-[35%] flex flex-col">
                          <div className="flex items-center gap-1.5">
                            <label htmlFor="vat-number" className="font-label-lg text-label-lg text-on-surface font-semibold">
                              UK VAT registration
                            </label>
                            <span className="text-on-surface-variant font-label-sm text-label-sm">
                              (Optional)
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Required if reclaiming VAT or reverse-charge escrow billing.
                          </span>
                        </div>
                        <div className="w-full md:w-[65%] flex flex-col gap-1">
                          <div className="relative">
                            <span className="absolute left-3.5 top-2.5 font-mono text-outline font-label-md">
                              GB
                            </span>
                            <input id="vat-number" type="text" defaultValue="389 2011 44" className="w-full bg-surface-container-lowest rounded-lg h-10 pl-11 pr-space-md font-mono text-on-surface font-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" />
                          </div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            Auto-validated via HMRC VAT Information Exchange System (VIES).
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-surface-container-high/60 p-space-md flex items-start gap-space-md">
                      <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5">
                        balance
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-label-md text-label-md font-bold text-on-surface">
                          No skip — this information populates your solicitor-drafted contract clauses automatically.
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          By saving, you declare yourself an authorised commercial signatory empowered to commit company balances into segregated escrow custody under English Contract Law.
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-sm">
                      <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-secondary text-[16px]">
                          lock
                        </span>
                        <span>
                          FCA-Compliant Tier 1 segregated custody
                        </span>
                      </div>
                      <button type="submit" className="w-full sm:w-auto px-space-xl py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-sm transition-all focus:ring-4 focus:ring-primary-container/20" data-go="/deals">
                        <span>
                          Save brand profile &amp; continue
                        </span>
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
                <div id="view-creator" className="hidden flex-col gap-space-lg">
                  <div className="flex flex-col gap-1 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-[10px] tracking-wide uppercase font-semibold">
                        Independent Contractor
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        Identity Verification 
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      Complete your creator profile
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                       Required once to link your legal name with your verified social handles for legally binding milestone execution and release. 
                    </p>
                  </div>
                  <form id="creator-form" className="flex flex-col gap-space-lg">
                    <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-lg">
                      <div className="flex flex-col md:flex-row md:items-start gap-space-sm md:gap-space-lg">
                        <div className="w-full md:w-[35%] flex flex-col">
                          <label htmlFor="creator-legal-name" className="font-label-lg text-label-lg text-on-surface font-semibold">
                            Full legal name
                          </label>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Must match your UK passport, photocard driving licence, or bank account.
                          </span>
                        </div>
                        <div className="w-full md:w-[65%] flex flex-col gap-1">
                          <div className="relative">
                            <input id="creator-legal-name" required={true} type="text" defaultValue="Charlotte Emily Clark" className="w-full bg-surface-container-lowest rounded-lg h-10 px-space-md text-on-surface font-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" />
                            <span className="material-symbols-outlined absolute right-3 top-2.5 text-secondary text-[20px]">
                              badge
                            </span>
                          </div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            Used solely on solicitor-drafted schedule terms; never revealed publicly without consent.
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-start gap-space-sm md:gap-space-lg pt-space-md">
                        <div className="w-full md:w-[35%] flex flex-col">
                          <label htmlFor="creator-handle" className="font-label-lg text-label-lg text-on-surface font-semibold">
                            Public creator handle
                          </label>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Your primary trading identifier on the Pactly network.
                          </span>
                        </div>
                        <div className="w-full md:w-[65%] flex flex-col gap-1">
                          <div className="relative">
                            <span className="absolute left-3.5 top-2.5 text-outline font-label-md">
                              @
                            </span>
                            <input id="creator-handle" required={true} type="text" defaultValue="charlotte_creator" className="w-full bg-surface-container-lowest rounded-lg h-10 pl-8 pr-space-md text-on-surface font-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" />
                          </div>
                          <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
                            <span className="material-symbols-outlined text-[13px]">
                              check
                            </span>
                             Available and claimed 
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-start gap-space-sm md:gap-space-lg pt-space-md">
                        <div className="w-full md:w-[35%] flex flex-col">
                          <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                            Deliverable channels
                          </label>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Handles used for post proof and automated milestone inspection.
                          </span>
                        </div>
                        <div className="w-full md:w-[65%] flex flex-col gap-space-sm">
                          <div id="social-rows-container" className="flex flex-col gap-space-sm">
                            <div className="flex items-center gap-space-sm bg-surface-container-lowest p-1.5 rounded-lg shadow-sm">
                              <div className="w-36 shrink-0">
                                <select className="w-full bg-surface-container-low rounded-lg h-9 px-space-sm font-label-md text-label-md text-on-surface border-0 focus:ring-2 focus:ring-primary-container">
                                  <option selected={true}>
                                    Instagram
                                  </option>
                                  <option>
                                    TikTok
                                  </option>
                                  <option>
                                    YouTube
                                  </option>
                                  <option>
                                    LinkedIn
                                  </option>
                                </select>
                              </div>
                              <div className="relative flex-grow">
                                <input type="text" defaultValue="@charlotte.creates" className="w-full bg-transparent h-9 px-space-sm text-on-surface font-body-sm focus:outline-none" />
                                <span className="material-symbols-outlined absolute right-2 top-2 text-secondary text-[16px]">
                                  verified
                                </span>
                              </div>
                              <span className="px-2 py-1 rounded bg-secondary-container/40 text-on-secondary-fixed text-[11px] font-bold">
                                Linked
                              </span>
                            </div>
                            <div id="row-tiktok" className="flex items-center gap-space-sm bg-surface-container-lowest p-1.5 rounded-lg shadow-sm">
                              <div className="w-36 shrink-0">
                                <select className="w-full bg-surface-container-low rounded-lg h-9 px-space-sm font-label-md text-label-md text-on-surface border-0 focus:ring-2 focus:ring-primary-container">
                                  <option>
                                    Instagram
                                  </option>
                                  <option selected={true}>
                                    TikTok
                                  </option>
                                  <option>
                                    YouTube
                                  </option>
                                  <option>
                                    LinkedIn
                                  </option>
                                </select>
                              </div>
                              <div className="relative flex-grow">
                                <input type="text" defaultValue="@charlotte_vlogs" className="w-full bg-transparent h-9 px-space-sm text-on-surface font-body-sm focus:outline-none" />
                              </div>
                              <button aria-label="Remove channel" type="button" className="w-8 h-8 rounded-lg flex items-center justify-center text-outline hover:text-error hover:bg-error-container/30 transition-colors">
                                <span className="material-symbols-outlined text-[18px]">
                                  close
                                </span>
                              </button>
                            </div>
                          </div>
                          <button type="button" className="self-start mt-1 flex items-center gap-1.5 px-space-sm py-1 rounded-lg text-primary-container hover:bg-primary-container/10 font-label-md text-label-md font-semibold transition-colors">
                            <span className="material-symbols-outlined text-[16px]">
                              add_circle
                            </span>
                            <span>
                              + Add another social channel
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-start gap-space-sm md:gap-space-lg pt-space-md">
                        <div className="w-full md:w-[35%] flex flex-col">
                          <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                            Banking jurisdiction
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Settlement destination.
                          </span>
                        </div>
                        <div className="w-full md:w-[65%]">
                          <div className="p-space-md rounded-lg bg-surface-container-lowest flex items-start gap-space-sm shadow-sm">
                            <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                              account_balance
                            </span>
                            <div className="flex flex-col gap-0.5">
                              <span className="font-label-md text-label-md font-semibold text-on-surface">
                                UK Bank Account &amp; English Jurisdiction Required
                              </span>
                              <p className="font-body-sm text-body-sm text-on-surface-variant">
                                 Payouts processed via Faster Payments within 120 minutes of brand deliverable sign-off. Cross-border IBANs supported via SEPA upon identity clearance. 
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-sm">
                      <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-secondary text-[16px]">
                          bolt
                        </span>
                        <span>
                          Instant escrow payout clearing configured
                        </span>
                      </div>
                      <button type="submit" className="w-full sm:w-auto px-space-xl py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-sm transition-all focus:ring-4 focus:ring-primary-container/20" data-go="/creator">
                        <span>
                          Save creator profile &amp; continue
                        </span>
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
                <div id="view-split" className="hidden flex-col gap-space-lg">
                  <div className="flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold">
                      Comparative Legal Structure
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      Two-party escrow onboarding overview
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                       Every contract binds two parties: the depositing brand entity and the verified publishing creator. Both profiles lock once into independent custody records. 
                    </p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
                    <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between gap-space-md">
                      <div className="flex flex-col gap-space-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container">
                              <span className="material-symbols-outlined text-[16px]">
                                domain
                              </span>
                            </span>
                            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                              1. Brand Entity Profile
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold">
                            Ready
                          </span>
                        </div>
                        <div className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant pt-2">
                          <div className="flex justify-between py-1 bg-surface-container-lowest px-space-sm rounded">
                            <span className="font-medium text-on-surface">
                              Company:
                            </span>
                            <span className="font-semibold text-primary">
                              Lumina Studio Ltd
                            </span>
                          </div>
                          <div className="flex justify-between py-1 bg-surface-container-lowest px-space-sm rounded">
                            <span className="font-medium text-on-surface">
                              CRN:
                            </span>
                            <span className="font-mono">
                              14298102 (Companies House)
                            </span>
                          </div>
                          <div className="flex justify-between py-1 bg-surface-container-lowest px-space-sm rounded">
                            <span className="font-medium text-on-surface">
                              Signatory:
                            </span>
                            <span>
                              David Vance (Director)
                            </span>
                          </div>
                          <div className="flex justify-between py-1 bg-surface-container-lowest px-space-sm rounded">
                            <span className="font-medium text-on-surface">
                              Escrow Balance Rail:
                            </span>
                            <span className="text-secondary font-medium">
                              FCA Regulated Safeguarded
                            </span>
                          </div>
                        </div>
                      </div>
                      <button type="button" className="w-full py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold text-center transition-colors">
                         Edit Brand Details 
                      </button>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between gap-space-md">
                      <div className="flex flex-col gap-space-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-secondary-container/40 flex items-center justify-center text-on-secondary-container">
                              <span className="material-symbols-outlined text-[16px]">
                                badge
                              </span>
                            </span>
                            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                              2. Creator Legal Profile
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold">
                            Ready
                          </span>
                        </div>
                        <div className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant pt-2">
                          <div className="flex justify-between py-1 bg-surface-container-lowest px-space-sm rounded">
                            <span className="font-medium text-on-surface">
                              Legal Name:
                            </span>
                            <span className="font-semibold text-primary">
                              Charlotte Emily Clark
                            </span>
                          </div>
                          <div className="flex justify-between py-1 bg-surface-container-lowest px-space-sm rounded">
                            <span className="font-medium text-on-surface">
                              Handle:
                            </span>
                            <span className="font-mono">
                              @charlotte_creator
                            </span>
                          </div>
                          <div className="flex justify-between py-1 bg-surface-container-lowest px-space-sm rounded">
                            <span className="font-medium text-on-surface">
                              Channels:
                            </span>
                            <span>
                              Instagram, TikTok (2 Linked)
                            </span>
                          </div>
                          <div className="flex justify-between py-1 bg-surface-container-lowest px-space-sm rounded">
                            <span className="font-medium text-on-surface">
                              Payout Method:
                            </span>
                            <span className="text-secondary font-medium">
                              Faster Payments (UK)
                            </span>
                          </div>
                        </div>
                      </div>
                      <button type="button" className="w-full py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold text-center transition-colors">
                         Edit Creator Details 
                      </button>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-high/60 flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        verified
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Both profiles meet UK Commercial Escrow compliance thresholds.
                      </span>
                    </div>
                    <button type="button" className="px-space-lg py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors" data-go="/deals/new">
                       Confirm &amp; Proceed to Deal Escrow → 
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest px-space-md sm:px-space-xl py-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-xs">
                <div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px] text-secondary">
                      verified_user
                    </span>
                    <span>
                      Electronic Money Regulations 2011
                    </span>
                  </span>
                  <span className="text-outline-variant">
                    •
                  </span>
                  <span>
                    Solicitor Signed Model Clauses
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-outline">
                  Pactly Legal Gateway v2.4
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_8px_rgba(0,0,0,0.02)] py-space-xl mt-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-headline-sm tracking-tight font-bold text-on-surface">
                Pactly
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              <span className="font-body-sm text-body-sm text-on-surface-variant ml-2">
                — Independent Escrow Infrastructure for Creator Commerce
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm">
              <a className="text-on-surface-variant hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Escrow Protocol (6%)
              </a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Standard UK Terms
              </a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Arbitration Guidelines
              </a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors" data-go="/legal" href="/legal">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm pt-space-md font-body-sm text-body-sm text-on-surface-variant">
            <p className="max-w-3xl">
              Pactly acts as an impartial software custodian. Funds held in segregated client escrow accounts powered by authorised payment institutions regulated under the UK Electronic Money Regulations 2011. Registered in England &amp; Wales.
            </p>
            <p className="font-label-sm text-label-sm shrink-0">
              © 2025 Pactly Technologies Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
