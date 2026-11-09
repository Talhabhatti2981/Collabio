import { Link } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { label: 'English Commercial Jurisdiction', to: '/legal' },
  { label: '6% Fixed Escrow Fee', to: '/welcome' },
  { label: 'Arbitration & Security', to: '/legal' },
]

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container-lowest py-space-xl">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-space-md px-margin text-on-surface-variant md:flex-row">
        <div className="flex items-center gap-space-sm">
          <Logo className="h-6 w-6 opacity-80" />
          <span className="font-label-md text-label-md">
            © 2025 Collabio Escrow Ltd. Registered in England & Wales (No. 14298102).
            Regulated trust custody rails via FCA authorised institutions.
          </span>
        </div>
        <div className="flex items-center gap-space-lg font-label-md text-label-md">
          {links.map((link) => (
            <Link
              key={link.label}
              className="transition-colors hover:text-on-surface"
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
