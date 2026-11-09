type NavigationItem = { label: string; to: string }

export type AppChromeContent = {
  brandName: string
  homeTo: string
  skipToContent: string
  navigationLabel: string
  footerLabel: string
  navigation: NavigationItem[]
  footerLinks: NavigationItem[]
}

// Defaults can be replaced by content supplied to AppChrome as data becomes available.
export const appChromeContent: AppChromeContent = {
  brandName: 'Collabio',
  homeTo: '/deals',
  skipToContent: 'Skip to content',
  navigationLabel: 'Main navigation',
  footerLabel: 'Footer navigation',
  navigation: [
    { label: 'Deals', to: '/deals' },
    { label: 'Earnings & Payouts', to: '/creator' },
    { label: 'Profile', to: '/profile' },
    { label: 'Settings', to: '/settings' },
    { label: 'Help & Legal', to: '/help' },
  ],
  footerLinks: [
    { label: 'Help', to: '/help' },
    { label: 'Legal', to: '/legal' },
  ],
}
