const services = [
  {
    title: 'Insurance Verification',
    desc: 'We verify patient coverage and benefits before each appointment so your team can focus on care, not phone calls.',
    gradient: 'linear-gradient(135deg, #7b5ea7 0%, #5b3f87 100%)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M11 2L3.5 5.5v5c0 4.66 3.24 9.02 7.5 10.5 4.26-1.48 7.5-5.84 7.5-10.5v-5L11 2z"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 11l2 2 4-4"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'CDT Coding & Billing',
    desc: 'Accurate CDT coding applied by certified specialists, reducing rejections and maximizing reimbursement on every claim.',
    gradient: 'linear-gradient(135deg, #0796a3 0%, #056e78 100%)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M8 6h8M8 10h8M8 14h5M4 6h.01M4 10h.01M4 14h.01"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <rect x="2" y="2" width="18" height="18" rx="3" stroke="white" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: 'Medical Billing (Cross-coding)',
    desc: 'Unlock additional revenue by billing qualifying dental procedures through medical insurance — sleep apnea, TMJ, trauma, and more.',
    gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M11 2v18M2 11h18"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="11" cy="11" r="9" stroke="white" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: 'Denial Management & Appeals',
    desc: 'Every denial is tracked, analyzed, and appealed using payer-specific protocols to maximize your recovery rate.',
    gradient: 'linear-gradient(135deg, #e8a530 0%, #c78510 100%)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M4 11h14M13 5l6 6-6 6"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Payment Posting & Reconciliation',
    desc: 'Accurate ERA and manual payment posting with full reconciliation, keeping your books current and discrepancies resolved.',
    gradient: 'linear-gradient(135deg, #7b5ea7 0%, #0796a3 100%)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M2 8h18M6 12h2M10 12h2M6 15h2M10 15h2"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <rect x="2" y="4" width="18" height="14" rx="3" stroke="white" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: 'Practice Credentialing',
    desc: 'We manage payer enrollment and re-credentialing so you get in-network status faster and never miss a renewal.',
    gradient: 'linear-gradient(135deg, #5b3f87 0%, #0796a3 100%)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="8" r="4" stroke="white" strokeWidth="1.6" />
        <path
          d="M3 20c0-4.42 3.58-8 8-8s8 3.58 8 8"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M15 4l1.5 1.5-2.5 2.5"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        <div className="services-header">
          <span className="services-eyebrow">OUR SERVICES</span>
          <h2 className="services-heading">Complete Revenue Cycle Solutions</h2>
          <p className="services-sub">
            From insurance verification to payment posting, we handle every step
            of the revenue cycle so you can focus on patients.
          </p>
        </div>

        <div className="services-grid">
          {services.map((svc) => (
            <div key={svc.title} className="service-card">
              <div className="service-card__icon" style={{ background: svc.gradient }}>
                {svc.icon}
              </div>
              <h3 className="service-card__title">{svc.title}</h3>
              <p className="service-card__desc">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
