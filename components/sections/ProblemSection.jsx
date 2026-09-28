const problems = [
  {
    title: 'Aging Accounts Receivable',
    desc: 'Unpaid claims pile up beyond 60, 90, and 120 days while your staff lacks the bandwidth to pursue every denial and underpayment.',
    gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.75" />
        <path
          d="M12 7v5l3 3"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Insurance Denial Rates',
    desc: 'Denial rates are rising across all payers. Without a dedicated appeals process, denied claims become lost revenue permanently.',
    gradient: 'linear-gradient(135deg, #7b5ea7 0%, #5b3f87 100%)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.75" />
        <path
          d="M15 9l-6 6M9 9l6 6"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Billing Staff Turnover',
    desc: 'High-quality billing staff are expensive to hire, train, and retain. Every departure resets institutional knowledge and disrupts cash flow.',
    gradient: 'linear-gradient(135deg, #0796a3 0%, #056e78 100%)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="1.75" />
        <path
          d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'CDT Coding Errors',
    desc: 'Dental coding complexity grows every year. A single incorrect CDT code can trigger a denial or audit, costing far more than the original claim.',
    gradient: 'linear-gradient(135deg, #e8a530 0%, #c78510 100%)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9 12h6M9 16h6M7 8h.01M12 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V9l-5-6z"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="problem-inner">
        <div className="problem-header">
          <h2 className="problem-heading">
            Is Your Back Office Costing You Thousands?
          </h2>
          <p className="problem-body">
            Running a profitable dental practice requires complete focus on
            patient care. But your financial success depends on managing an
            increasingly complex insurance landscape.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((item) => (
            <div key={item.title} className="problem-card">
              <div
                className="problem-card__top"
                style={{ background: item.gradient }}
              >
                <div className="problem-card__icon">{item.icon}</div>
              </div>
              <div className="problem-card__body">
                <h3 className="problem-card__title">{item.title}</h3>
                <p className="problem-card__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
