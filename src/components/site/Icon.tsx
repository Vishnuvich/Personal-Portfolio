type IconProps = { className?: string }

const base = {
  viewBox: '0 0 24 24',
  className: 'ico',
  'aria-hidden': true,
  focusable: false,
} as const

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className ?? base.className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function UpRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className ?? base.className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className ?? base.className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className ?? base.className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}
