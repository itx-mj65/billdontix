/**
 * SectionEyebrow — small label above section headings
 * Matches Figma eyebrow styling: Outfit 13px w700 uppercase
 */
export default function SectionEyebrow({ children, className = '', dark = false }) {
  return (
    <span
      className={`section-eyebrow inline-block px-4 py-1.5 rounded-[var(--radius-badge)] ${className}`}
      style={{
        fontFamily: 'var(--font-heading)',
        background: dark ? 'var(--color-purple)' : 'var(--color-lavender)',
        color: dark ? 'var(--color-white)' : 'var(--color-purple)',
      }}
    >
      {children}
    </span>
  )
}
