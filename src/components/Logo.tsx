type LogoProps = {
  className?: string
}

export default function Logo({ className = 'h-8 w-8' }: LogoProps) {
  return (
    <svg aria-label="Collabio" className={className} role="img" viewBox="0 0 32 32">
      <rect fill="#1b32c8" height="32" rx="8" width="32" />
      <path
        d="M9.2 24V8h6.6c3.15 0 5.15 1.85 5.15 4.55 0 2.75-2.05 4.6-5.2 4.6H12.4V24H9.2zm3.2-9.15h3.15c1.45 0 2.35-.8 2.35-2.05s-.9-2.05-2.35-2.05H12.4v4.1z"
        fill="#ffffff"
      />
      <path
        d="M21.6 17.6c.2-1.15 1.35-1.9 2.85-1.9 1.55 0 2.75.8 2.75 2.05v.35c0 2.15-1.25 4.15-2.75 5.5-1.55-1.35-2.85-3.35-2.85-5.5v-.5z"
        fill="#67fbd3"
      />
    </svg>
  )
}
