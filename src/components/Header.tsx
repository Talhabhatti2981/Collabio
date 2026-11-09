import { Link } from 'react-router-dom'
import { pkr } from '../money'
import Icon from './Icon'
import Logo from './Logo'

const links = [
  { label: 'Deals', to: '/deals' },
  { label: 'Profile', to: '/profile' },
  { label: 'Settings', to: '/settings' },
  { label: 'Help & Legal', to: '/help' },
]

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-space-md px-margin">
        <div className="flex items-center gap-space-xl">
          <Link className="flex items-center gap-space-sm" to="/deals">
            <Logo className="h-8 w-8" />
            <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface">
              Collabio
            </span>
          </Link>
          <nav className="hidden items-center gap-space-xs md:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                className="rounded-lg px-3 py-1.5 font-label-lg text-label-lg text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-space-md">
          <div className="hidden items-center gap-space-sm rounded-full border border-outline-variant/40 bg-surface-container-lowest px-3 py-1.5 sm:flex">
            <span className="flex h-2 w-2 rounded-full bg-secondary" />
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm leading-none text-on-surface-variant">
                In Escrow
              </span>
              <span className="font-label-lg text-label-lg font-semibold leading-tight text-on-surface">
                {pkr(12450)}
              </span>
            </div>
          </div>
          <div className="hidden h-7 w-px bg-outline-variant/40 sm:block" />
          <div className="group relative flex items-center gap-space-sm pl-1">
            <div className="hidden text-right lg:block">
              <div className="font-label-lg text-label-lg font-semibold leading-tight text-on-surface">
                Lumina Studio
              </div>
              <div className="font-label-sm text-label-sm leading-tight text-on-surface-variant">
                Brand account
              </div>
            </div>
            <button
              aria-label="Account menu"
              className="flex items-center gap-1.5 rounded-full p-1 transition-colors hover:bg-surface-container"
              type="button"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-container font-headline-sm text-headline-sm text-on-primary">
                <Icon className="text-[20px]" name="business" />
              </div>
              <Icon className="text-[18px] text-outline" name="expand_more" />
            </button>
            <div className="invisible absolute top-full right-0 z-50 mt-2 w-56 rounded-xl border border-outline-variant/40 bg-surface-container-lowest py-1.5 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="border-b border-outline-variant/30 px-4 py-2 lg:hidden">
                <div className="font-label-lg text-label-lg font-semibold text-on-surface">
                  Lumina Studio
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">
                  Brand account · {pkr(12450)}
                </div>
              </div>
              <Link
                className="flex items-center gap-2 px-4 py-2 font-label-lg text-label-lg text-on-surface transition-colors hover:bg-surface-container-low"
                to="/profile"
              >
                <Icon className="text-[18px] text-on-surface-variant" name="person" />
                Brand Profile
              </Link>
              <Link
                className="flex items-center gap-2 px-4 py-2 font-label-lg text-label-lg text-on-surface transition-colors hover:bg-surface-container-low"
                to="/settings"
              >
                <Icon className="text-[18px] text-on-surface-variant" name="tune" />
                Billing & Payouts
              </Link>
              <Link
                className="flex items-center gap-2 px-4 py-2 font-label-lg text-label-lg text-on-surface transition-colors hover:bg-surface-container-low"
                to="/help"
              >
                <Icon className="text-[18px] text-on-surface-variant" name="shield" />
                Dispute Resolution
              </Link>
              <div className="my-1 border-t border-outline-variant/30" />
              <Link
                className="flex items-center gap-2 px-4 py-2 font-label-lg text-label-lg text-error transition-colors hover:bg-error-container/20"
                to="/login"
              >
                <Icon className="text-[18px] text-error" name="logout" />
                Sign out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
