'use client'

import Link from 'next/link'

/**
 * Button — matches Figma button variants
 * variant: 'primary' | 'secondary' | 'gradient' | 'ghost'
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  showArrow = false,
  onClick,
  type = 'button',
  fullWidth = false,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-3 font-semibold transition-all duration-200 cursor-pointer select-none'

  const variants = {
    primary:
      'bg-[var(--color-purple)] text-white rounded-[var(--radius-btn)] px-8 py-4 text-[16px] hover:opacity-90 active:scale-[0.98]',
    secondary:
      'border border-[var(--color-purple)] text-[var(--color-purple)] rounded-[var(--radius-btn)] px-8 py-4 text-[16px] hover:bg-[var(--color-lavender)] active:scale-[0.98]',
    gradient:
      'text-white rounded-[var(--radius-btn)] px-8 py-4 text-[16px] hover:opacity-90 active:scale-[0.98]',
    ghost:
      'text-white rounded-[var(--radius-btn)] px-8 py-4 text-[16px] hover:bg-white/10 active:scale-[0.98]',
  }

  const style = variant === 'gradient'
    ? { background: 'var(--gradient-btn-primary)' }
    : {}

  const width = fullWidth ? 'w-full' : ''

  const content = (
    <>
      <span style={{ fontFamily: 'var(--font-heading)' }}>{children}</span>
      {showArrow && (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} ${variants[variant]} ${width} ${className}`}
        style={style}
        {...props}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${width} ${className}`}
      style={style}
      {...props}
    >
      {content}
    </button>
  )
}
