import Link from 'next/link'
import Image from 'next/image'

const footerServices = [
  'Insurance Verification',
  'CDT Coding',
  'Medical Billing',
  'Denial Management',
  'Payment Posting',
  'Credentialing',
]

const footerSpecialties = [
  'General Dentistry',
  'Oral Surgery',
  'Orthodontics',
  'Periodontics',
]

const footerCompany = ['About', 'Results', 'FAQ', 'Contact']

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-navy)' }} className="w-full">
      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-8">
        {/* Upper grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between pb-12">
          {/* Brand col */}
          <div className="max-w-[400px] flex flex-col gap-6">
            <Link href="/">
              <Image
                src="/images/footer-logo.png"
                alt="Revix Plus"
                width={136}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p
              className="text-[15px] leading-[1.6]"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-peach)',
              }}
            >
              Expert dental billing and claims recovery services designed to
              maximize collections and accelerate payments for growing practices.
            </p>
            {/* Contact */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@revixplus.com"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-purple)', fontSize: '14px' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M1 5.5l7 4.5 7-4.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                hello@revixplus.com
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-purple)', fontSize: '14px' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M2 3a1 1 0 011-1h1.5a1 1 0 011 .75l.5 2a1 1 0 01-.29.95l-.7.7a8 8 0 004.6 4.6l.7-.7a1 1 0 01.95-.29l2 .5A1 1 0 0114 11.5V13a1 1 0 01-1 1A11 11 0 012 3z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                (555) 123-4567
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-12 lg:gap-16">
            <FooterCol title="Services" links={footerServices} />
            <FooterCol title="Specialties" links={footerSpecialties} />
            <FooterCol title="Company" links={footerCompany} />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full" style={{ background: 'var(--color-peach)', opacity: 0.2 }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p
            className="text-[13px]"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-light)' }}
          >
            © {new Date().getFullYear()} Revix Plus. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'HIPAA Notice'].map((item) => (
              <Link
                key={item}
                href="#"
                className="hover:opacity-80 transition-opacity"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-blue-light)',
                  fontSize: '13px',
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div className="flex flex-col gap-5">
      <h3
        className="text-[16px] font-bold"
        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-white)' }}
      >
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="hover:opacity-70 transition-opacity"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-peach)',
                fontSize: '14px',
                lineHeight: '1.4',
              }}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
