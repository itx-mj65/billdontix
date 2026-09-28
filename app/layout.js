import { Outfit, Manrope, DM_Sans } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Revix Plus — Expert Dental Billing Services',
  description:
    'Expert dental billing and claims recovery services designed to maximize collections and accelerate payments for growing practices. 97.4% first-pass clean claims.',
  keywords:
    'dental billing, dental claims recovery, dental RCM, revenue cycle management, HIPAA compliant billing',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${manrope.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
