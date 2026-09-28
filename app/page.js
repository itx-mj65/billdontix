import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import RevenueRecoverySection from '@/components/sections/RevenueRecoverySection'
import TrustSignalsSection from '@/components/sections/TrustSignalsSection'
import SoftwareIntegrationsSection from '@/components/sections/SoftwareIntegrationsSection'
import ProblemSection from '@/components/sections/ProblemSection'
import ServicesSection from '@/components/sections/ServicesSection'
import BannerSection from '@/components/sections/BannerSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import SpecialtiesSection from '@/components/sections/SpecialtiesSection'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import ExperienceCredentialsSection from '@/components/sections/ExperienceCredentialsSection'
import ROICalculatorSection from '@/components/sections/ROICalculatorSection'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTASection from '@/components/sections/FinalCTASection'
import LeadFormSection from '@/components/sections/LeadFormSection'

export const metadata = {
  title: 'Revix Plus — Expert Dental Billing Services',
  description:
    'Expert dental billing and claims recovery services designed to maximize collections and accelerate payments for growing practices. 97.4% first-pass clean claims.',
}

export default function HomePage() {
  return (
    <>
      <Header activePage="Home" />
      <main>
        <HeroSection />
        <RevenueRecoverySection />
        <TrustSignalsSection />
        <SoftwareIntegrationsSection />
        <ProblemSection />
        <ServicesSection />
        <BannerSection
          imageSrc="/images/banner-office.png"
          heading="Stop Losing Revenue to Claim Denials"
          subheading="Our certified billers recover an average of 34% more revenue in the first 90 days."
          ctaLabel="Start Recovering Revenue"
          ctaHref="/contact"
        />
        <TestimonialsSection />
        <SpecialtiesSection />
        <WhyChooseSection />
        <ExperienceCredentialsSection />
        <ROICalculatorSection />
        <FAQSection />
        <BannerSection
          imageSrc="/images/banner-warm.png"
          heading="Ready to Maximize Your Practice Revenue?"
          subheading="Join 200+ dental practices that trust Revix Plus to handle their billing."
          ctaLabel="Book a Free Consultation"
          ctaHref="/contact"
        />
        <FinalCTASection />
        <LeadFormSection />
      </main>
      <Footer />
    </>
  )
}
