const trustCards = [
  {
    title: 'HIPAA Compliant',
    desc: 'Secure remote access to your practice management system with full data protection',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M14 3L5.5 7v7c0 5.25 3.65 10.16 8.5 11.5C18.85 24.16 22.5 19.25 22.5 14V7L14 3z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 14l3 3 5-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'No Long-Term Contracts',
    desc: 'Month-to-month billing with zero hidden setup fees or surprise charges',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect
          x="4"
          y="5"
          width="20"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M4 10h20M9 3v4M19 3v4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M10 15l2.5 2.5 5.5-5.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Dedicated Billing Specialist',
    desc: 'Your own certified expert who understands your practice, payers, and workflows',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="9" r="4.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M5 23c0-4.97 4.03-9 9-9s9 4.03 9 9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function TrustSignalsSection() {
  return (
    <section className="trust-section">
      <div className="trust-inner">
        <p className="trust-eyebrow">TRUST SIGNALS</p>
        <h2 className="trust-heading">Built for trust and transparency</h2>

        <div className="trust-cards">
          {trustCards.map((card) => (
            <div key={card.title} className="trust-card">
              <div className="trust-card__icon">{card.icon}</div>
              <h3 className="trust-card__title">{card.title}</h3>
              <p className="trust-card__desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
