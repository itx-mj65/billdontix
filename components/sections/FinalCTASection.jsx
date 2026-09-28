import Image from 'next/image';
import Link from 'next/link';

const trustItems = [
  'No long-term contract',
  'No hidden setup fees',
  'Works with your current software',
];

function ShieldCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 1.5L2 4.25v4c0 3.5 2.43 6.77 6 7.75 3.57-.98 6-4.25 6-7.75v-4L8 1.5z"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 8l2 2 3-3"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FinalCTASection() {
  return (
    <section className="cta-section">
      {/* Decorative glow ellipses */}
      <div className="cta-glow cta-glow--teal" aria-hidden="true" />
      <div className="cta-glow cta-glow--purple" aria-hidden="true" />

      {/* Dental tooth photo — positioned at left edge */}
      <div className="cta-tooth-wrap" aria-hidden="true">
        <Image
          src="/images/dental-teeth-photo.png"
          alt=""
          width={328}
          height={432}
          className="cta-tooth-image"
        />
      </div>

      <div className="cta-inner">
        <div className="cta-panel">
          {/* Left column — text + buttons */}
          <div className="cta-left">
            <h2 className="cta-heading">
              Stop Letting Unpaid Claims Limit Your Practice
            </h2>
            <p className="cta-sub">
              Discover where revenue is being lost and receive a clear recovery
              plan for your practice.
            </p>

            <div className="cta-buttons">
              <Link href="#audit" className="cta-btn cta-btn--primary">
                Claim Your Free Audit
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
              <Link href="#contact" className="cta-btn cta-btn--ghost">
                Talk to a Billing Specialist
              </Link>
            </div>

            <ul className="cta-trust-list">
              {trustItems.map((item) => (
                <li key={item} className="cta-trust-item">
                  <ShieldCheck />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — dashboard card image */}
          <div className="cta-right">
            <div className="cta-dashboard-wrap">
              <Image
                src="/images/cta-dashboard.png"
                alt="Aging A/R dashboard showing $42,100 with 15 claims pending"
                width={400}
                height={310}
                className="cta-dashboard-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
