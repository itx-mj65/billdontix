import Image from 'next/image';

const problems = [
  {
    id: 'aging-ar',
    imageSrc: '/images/problem-illus-1.png',
    imageAlt: 'Overdue billing notice',
    title: 'Aging Accounts Receivable',
    desc: 'Claims unpaid beyond 60 or 90 days become much harder to recover. When aging balances linger, your daily cash flow suffers. We aggressively pursue outstanding accounts to secure delayed payments and get you paid faster.',
  },
  {
    id: 'denial-rates',
    imageSrc: '/images/problem-illus-2.png',
    imageAlt: 'High claim denial rates',
    title: 'High Claim Denial Rates',
    desc: 'Incorrect CDT coding, missing documentation, incomplete narratives, and overlooked insurance limitations lead to frequent unnecessary denials. We meticulously check every claim before submission, catching costly errors early.',
  },
  {
    id: 'medical-billing',
    imageSrc: '/images/problem-illus-3.png',
    imageAlt: 'Missed medical billing opportunities',
    title: 'Missed Medical Billing Opportunities',
    desc: 'Eligible procedures billed through medical insurance often go unreimbursed without specialized expertise. We navigate complex medical coding, ensuring you capture maximum compensation for sleep apnea and oral surgery treatments.',
  },
  {
    id: 'staffing',
    imageSrc: '/images/problem-illus-4.png',
    imageAlt: 'Staffing challenges',
    title: 'Staffing Challenges',
    desc: 'Losing an experienced biller creates costly interruptions while hiring and training replacements. Our dedicated team eliminates these sudden disruptions, ensuring consistent cash flow continues whether or not your staff changes.',
  },
];

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProblemSection() {
  return (
    <section className="problem-section">
      {/* Decorative circles */}
      <div className="problem-decor problem-decor--1" aria-hidden="true" />
      <div className="problem-decor problem-decor--2" aria-hidden="true" />
      <div className="problem-decor problem-decor--3" aria-hidden="true" />

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
            <div key={item.id} className="problem-card">
              {/* Photo top area */}
              <div className="problem-card__image-wrap">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="problem-card__image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Divider */}
              <div className="problem-card__divider" aria-hidden="true" />

              {/* Content area */}
              <div className="problem-card__body">
                <div className="problem-card__title-row">
                  <h3 className="problem-card__title">{item.title}</h3>
                  <span className="problem-card__arrow">
                    <ArrowIcon />
                  </span>
                </div>
                <p className="problem-card__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
