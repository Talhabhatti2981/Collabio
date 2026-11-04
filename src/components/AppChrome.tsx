import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { pkr } from '../money'

const nav = [
  { label: 'Deals', to: '/deals', badge: '2' },
  { label: 'Earnings & Payouts', to: '/creator' },
  { label: 'Profile', to: '/profile' },
  { label: 'Settings', to: '/settings' },
  { label: 'Help & Legal', to: '/help' },
]

const footerLinks = [
  { label: 'Escrow Protocol (6%)', to: '/help' },
  { label: 'Standard UK Terms', to: '/legal' },
  { label: 'Arbitration Guidelines', to: '/legal' },
  { label: 'Privacy Policy', to: '/legal' },
]

type AppChromeProps = {
  children: ReactNode
}

export default function AppChrome({ children }: AppChromeProps) {
  const { pathname } = useLocation()

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="bg-surface-container-low px-margin-mobile lg:px-margin">
          <div className="mx-auto flex h-8 max-w-7xl items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-[14px] text-secondary">verified_user</span>
              <span>Custody under FCA-regulated partner rails • Stripe Connect segregated client balances</span>
            </div>
            <div className="hidden items-center gap-space-md sm:flex">
              <span className="flex items-center gap-space-xs font-label-sm text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Escrow Status: Protected
              </span>
              <span className="text-outline-variant">|</span>
              <span>UK & Cross-Border Commercial Agreements</span>
            </div>
          </div>
        </div>
        <div className="h-16 bg-surface-container-lowest px-margin-mobile lg:px-margin">
          <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-xl">
              <a className="flex items-center gap-2" data-go="/deals" href="/deals">
                <span className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface">Pactly</span>
                <span className="h-2 w-2 rounded-full bg-primary-container" />
              </a>
              <nav className="hidden items-center gap-space-xs lg:flex">
                {nav.map((item) => {
                  const active = pathname === item.to
                  return (
                    <a
                      key={item.label}
                      className={`rounded-lg px-space-md py-space-sm font-label-md text-label-md transition-colors ${
                        active
                          ? 'bg-primary-container font-semibold text-on-primary'
                          : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                      }`}
                      data-go={item.to}
                      href={item.to}
                    >
                      {item.label}
                      {item.badge ? (
                        <span className="ml-1 rounded-full bg-primary-container px-1.5 py-0.5 text-[10px] leading-none font-bold text-on-primary">
                          {item.badge}
                        </span>
                      ) : null}
                    </a>
                  )
                })}
              </nav>
            </div>
            <div className="flex items-center gap-space-md">
              <div className="hidden items-center gap-space-sm rounded-full bg-secondary-fixed px-space-md py-1.5 font-label-sm text-label-sm text-on-secondary-fixed shadow-[0_1px_4px_rgba(0,0,0,0.02)] xl:flex">
                <span className="material-symbols-outlined text-[16px]">lock</span>
                <span className="font-semibold">Guaranteed in Escrow:</span>
                <span>{pkr(3350)}</span>
              </div>
              <div className="flex shrink-0 items-center gap-space-sm pl-space-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                  <span className="material-symbols-outlined text-[18px] text-on-primary">person</span>
                </div>
                <div className="hidden flex-col text-left whitespace-nowrap md:flex">
                  <span className="font-label-md text-label-md font-semibold text-on-surface">@charlotte_creator</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Creator Account</span>
                </div>
                <a aria-label="Open settings" className="text-on-surface-variant hover:text-on-surface" data-go="/settings" href="/settings">
                  <span className="material-symbols-outlined text-[20px]">expand_more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="min-h-screen w-full bg-surface pt-24">{children}</main>
      <footer className="mt-space-xl w-full bg-surface-container-lowest py-space-xl shadow-[0_-1px_8px_rgba(0,0,0,0.02)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-space-lg px-margin-mobile lg:px-margin">
          <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">Pactly</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
              <span className="ml-2 font-body-sm text-body-sm text-on-surface-variant">
                — Independent Escrow Infrastructure for Creator Commerce
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm">
              {footerLinks.map((link) => (
                <a key={link.label} className="text-on-surface-variant transition-colors hover:text-on-surface" data-go={link.to} href={link.to}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-space-sm pt-space-md font-body-sm text-body-sm text-on-surface-variant md:flex-row md:items-center">
            <p className="max-w-3xl">
              Pactly acts as an impartial software custodian. Funds held in segregated client escrow accounts powered by authorised payment institutions regulated under the UK Electronic Money Regulations 2011. Registered in England & Wales.
            </p>
            <p className="shrink-0 font-label-sm text-label-sm">© 2025 Pactly Technologies Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
