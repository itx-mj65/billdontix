import Image from 'next/image';

export default function SoftwareIntegrationsSection() {
  return (
    <section className="software-section">
      <div className="software-inner">
        <h2 className="software-heading">
          Expertise Across Leading Dental Software
        </h2>
        <p className="software-sub">
          We work securely inside the systems your team already uses.
        </p>

        {/* Marquee strip — duplicate image for seamless loop */}
        <div className="marquee-container" aria-label="Supported software: Dentrix, Eaglesoft, Open Dental, Curve Dental, Carestream, MacPractice">
          <div className="marquee-track">
            <Image
              src="/images/software-logos.png"
              alt=""
              width={1268}
              height={104}
              className="software-logos-img"
              aria-hidden="true"
            />
            <Image
              src="/images/software-logos.png"
              alt=""
              width={1268}
              height={104}
              className="software-logos-img"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
