import Link from 'next/link';

export default function RevenueRecoverySection() {
  return (
    <section className="revenue-section">
      <div className="revenue-inner">
        <h2 className="revenue-heading">
          Stop Losing $50K+ Annually to Billing Errors and Unpaid Claims
        </h2>
        <p className="revenue-body">
          Most dental practices quietly leave 15% to 20% of their revenue on
          the table due to insurance denials, coding errors, and administrative
          turnover. In fact,{' '}
          <span className="revenue-body-link">
            American Dental Association Health Policy Institute benchmarks
          </span>{' '}
          reveal that more than 20% of practices face an administrative staff
          deficit, directly triggering billing backlogs and revenue leakage.
          Revix Plus takes complete ownership of your end-to-end revenue cycle,
          eliminating front-office friction so you can focus entirely on patient
          care and actually profit from your clinical work.
        </p>

        {/* Metric cards */}
        <div className="revenue-cards">
          <div className="metric-card">
            <span className="metric-value">97.4%</span>
            <span className="metric-label">First-Pass Clean Claims</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">$180K</span>
            <span className="metric-label">Avg Annual Recovery Per Practice</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="revenue-buttons">
          <Link href="#audit" className="btn btn--primary">
            Claim Your Free Audit (5 Spots Left)
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
          <Link href="#compare" className="btn btn--outline">
            See Outsourcing vs. In-House
          </Link>
        </div>
      </div>
    </section>
  );
}
