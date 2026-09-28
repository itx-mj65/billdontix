import Link from 'next/link';

const tableRows = [
  {
    metric: 'Annual Salary',
    inhouse: '$50,000–$70,000',
    outsourced: 'Pay only for results collected',
    highlight: false,
  },
  {
    metric: 'Benefits & Taxes',
    inhouse: '$12,000–$18,000/yr',
    outsourced: '$0',
    highlight: false,
  },
  {
    metric: 'Training & Compliance',
    inhouse: '$3,000–$5,000/yr',
    outsourced: 'Included',
    highlight: false,
  },
  {
    metric: 'Turnover Costs',
    inhouse: '$8,000–$15,000/hire',
    outsourced: '$0 — No turnover',
    highlight: false,
  },
  {
    metric: 'Claims Processing Rate',
    inhouse: '85–92% clean claims',
    outsourced: '97.4% clean claims',
    highlight: true,
  },
  {
    metric: 'Days Sales Outstanding',
    inhouse: '40–55 days',
    outsourced: '28–35 days',
    highlight: true,
  },
  {
    metric: 'Denial Recovery Rate',
    inhouse: '45–60%',
    outsourced: '75–85%',
    highlight: true,
  },
  {
    metric: 'Total Annual Cost',
    inhouse: '$73,000–$108,000',
    outsourced: 'Performance-based monthly',
    highlight: true,
  },
];

const services = [
  {
    title: 'Insurance Verification',
    desc: 'Eligibility, benefits, deductibles verification before treatment so your team can focus on care, not phone calls.',
  },
  {
    title: 'CDT Coding & Claims',
    desc: 'ADA guideline-based accurate CDT claim coding by certified specialists, reducing rejections and maximizing reimbursement.',
  },
  {
    title: 'Medical Billing Services',
    desc: 'CPT/ICD-10/CDT cross-coding for sleep apnea, TMJ, trauma, and other medical crossover procedures — unlocking additional revenue.',
  },
  {
    title: 'Denial Management',
    desc: 'Root cause analysis, payer-specific appeals, and resubmissions to recover every claimable dollar.',
  },
  {
    title: 'Payment Posting',
    desc: 'Accurate ERA/EOB posting and reconciliation, keeping your books current and discrepancies resolved.',
  },
  {
    title: 'Credentialing & PPO',
    desc: 'Provider credentialing, network enrollment, and PPO participation management so you get in-network status faster.',
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      {/* Comparison Table */}
      <div className="compare-wrap" id="compare">
        <div className="compare-inner">
          <h2 className="compare-heading">
            Outsourced Billing vs. In-House Billing
          </h2>
          <p className="compare-sub">
            See why more dental practices are choosing to outsource their
            revenue cycle management to Revix Plus.
          </p>

          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="compare-th compare-th--label">Performance Indicators</th>
                  <th className="compare-th compare-th--inhouse">In-House Billing Staff</th>
                  <th className="compare-th compare-th--outsourced">
                    <span className="compare-th-badge">Outsourced (Revix Plus)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.metric} className={`compare-tr${row.highlight ? ' compare-tr--dark' : ''}`}>
                    <td className="compare-td compare-td--metric">{row.metric}</td>
                    <td className="compare-td compare-td--inhouse">{row.inhouse}</td>
                    <td className="compare-td compare-td--outsourced">{row.outsourced}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="compare-cta-wrap">
            <Link href="#audit" className="btn btn--primary">
              Compare Your Current Costs
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-grid-wrap">
        <div className="services-inner">
          <div className="services-header">
            <span className="services-eyebrow">COMPLETE REVENUE-CYCLE SUPPORT</span>
            <h2 className="services-heading">
              Revix Plus Offers Comprehensive Dental Medical Billing Services
            </h2>
          </div>

          <div className="services-grid">
            {services.map((svc) => (
              <div key={svc.title} className="service-card">
                <div className="service-card__dot" aria-hidden="true" />
                <h3 className="service-card__title">{svc.title}</h3>
                <p className="service-card__desc">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
