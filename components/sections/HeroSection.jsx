import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background glow ellipses */}
      <div className="hero-glow hero-glow--teal" aria-hidden="true" />
      <div className="hero-glow hero-glow--purple" aria-hidden="true" />

      <div className="hero-inner">
        {/* Left content */}
        <div className="hero-content">
          <span className="hero-eyebrow">
            DENTAL BILLING AND CLAIMS RECOVERY
          </span>

          <h1 className="hero-heading">
            Expert Dental Billing Services for Growing Practices
          </h1>

          <p className="hero-body">
            Our dental billing services manage every stage of the billing
            process with accuracy, helping reduce errors and improve payment
            turnaround.
          </p>

          <div className="hero-buttons">
            <Link href="#services" className="btn btn--primary">
              Explore Our Services
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link href="#audit" className="btn btn--outline-purple">
              Claim Your Free Audit
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="hero-image-wrap" aria-hidden="true">
          <Image
            src="/images/hero-image.png"
            alt="Dental billing dashboard"
            width={595}
            height={595}
            priority
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
