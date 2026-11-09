import type { ReactNode } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { appChromeContent, type AppChromeContent } from './appChromeContent'

type AppChromeProps = {
  children: ReactNode
  content?: AppChromeContent
}

export default function AppChrome({ children, content = appChromeContent }: AppChromeProps) {
  return (
    <div className="flex min-h-screen flex-col bg-paper font-sans text-ink">
      <a className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:rounded-lg focus:bg-ink focus:p-3 focus:text-paper" href="#main-content">
        {content.skipToContent}
      </a>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-[1000px] flex-col gap-1 px-4 pt-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-2">
          <Link className="flex min-h-11 shrink-0 items-center rounded-lg text-[24px] font-bold tracking-[-0.045em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink" to={content.homeTo}>
            {content.brandName}
          </Link>
          <nav aria-label={content.navigationLabel} className="flex flex-wrap gap-1 pb-2 lg:pb-0">
            {content.navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-reduce:transition-none ${
                  isActive ? 'font-semibold text-ink underline decoration-ink decoration-2 underline-offset-8' : 'text-ink hover:bg-ink/10'
                }`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main id="main-content" className="w-full flex-1">{children}</main>
      <footer className="mt-8 border-t border-line">
        <div className="mx-auto flex max-w-[1000px] flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span className="text-sm font-semibold">{content.brandName}</span>
          <nav aria-label={content.footerLabel} className="flex flex-wrap gap-x-6 gap-y-2">
            {content.footerLinks.map((link) => (
              <Link key={link.to} className="flex min-h-11 items-center rounded text-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink" to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}
