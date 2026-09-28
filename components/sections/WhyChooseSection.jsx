const reasons = [
  {
    title: 'No Hidden Fees',
    desc: 'Month-to-month billing with fully transparent pricing. No setup fees, no long-term commitments, no surprise charges.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <circle cx="13" cy="13" r="10" stroke="var(--color-gold)" strokeWidth="1.75" />
        <path
          d="M13 8v5l3 3"
          stroke="var(--color-gold)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 20h6"
          stroke="var(--color-gold)"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Works With Your Software',
    desc: 'We integrate seamlessly with your existing practice management system. Zero disruption to your team\'s daily workflow.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="9" height="9" rx="2" stroke="var(--color-gold)" strokeWidth="1.75" />
        <rect x="14" y="3" width="9" height="9" rx="2" stroke="var(--color-gold)" strokeWidth="1.75" />
        <rect x="3" y="14" width="9" height="9" rx="2" stroke="var(--color-gold)" strokeWidth="1.75" />
        <rect x="14" y="14" width="9" height="9" rx="2" stroke="var(--color-gold)" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: 'Dedicated Specialist',
    desc: 'Your own certified billing expert who learns your practice, your payers, and your specific workflows inside out.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <circle cx="13" cy="9" r="4" stroke="var(--color-gold)" strokeWidth="1.75" />
        <path
          d="M5 23c0-4.42 3.58-8 8-8s8 3.58 8 8"
          stroke="var(--color-gold)"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Proven Results',
    desc: '97.4% first-pass clean claim rate and $180K average annual recovery per practice. Measurable outcomes within 30 days.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <path
          d="M4 20l5-5 4 4 9-9"
          stroke="var(--color-gold)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 24h18"
          stroke="var(--color-gold)"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function WhyChooseSection() {
  return (
    <section className="why-section">
      <div className="why-inner">
        <h2 className="why-heading">
          Why 200+ Dental Practices Choose Revix Plus
        </h2>

        <div className="why-grid">
          {reasons.map((r) => (
            <div key={r.title} className="why-block">
              <div className="why-block__icon">{r.icon}</div>
              <div className="why-block__content">
                <h3 className="why-block__title">{r.title}</h3>
                <p className="why-block__desc">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
