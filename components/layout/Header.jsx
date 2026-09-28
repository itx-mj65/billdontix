'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Specialties', href: '/specialties' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]

export default function Header({ activePage = 'Home' }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      style={{ background: 'var(--color-navy)' }}
      className="w-full sticky top-0 z-50"
    >
      <div className="max-w-[1440px] mx-auto px-6 py-5">
        {/* Desktop navbar pill */}
        <div
          className="max-w-[1320px] mx-auto flex items-center justify-between px-6 py-0 h-[72px] rounded-[16px]"
          style={{ background: 'var(--color-navy)' }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Revix Plus — Dental Billing"
              width={136}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = link.label === activePage
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-nav)',
                    fontSize: '15px',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--color-gold)' : 'var(--color-white)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  className="hover:opacity-80"
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="flex items-center gap-2.5 px-5 py-4 rounded-[12px] text-white font-semibold transition-opacity hover:opacity-90"
              style={{
                background: 'var(--gradient-btn-primary)',
                fontFamily: 'var(--font-nav)',
                fontSize: '15px',
                fontWeight: 600,
              }}
            >
              Book a Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M13 8l-4-4M13 8l-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M3 8h18M3 12h18M3 16h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden mt-2 rounded-[16px] p-6 flex flex-col gap-4"
            style={{ background: 'var(--color-deep-blue)' }}
          >
            {navLinks.map((link) => {
              const isActive = link.label === activePage
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: 'var(--font-nav)',
                    fontSize: '16px',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--color-gold)' : 'var(--color-white)',
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 py-4 rounded-[12px] text-white font-semibold"
              style={{
                background: 'var(--gradient-btn-primary)',
                fontFamily: 'var(--font-nav)',
                fontSize: '15px',
              }}
            >
              Book a Consultation
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
