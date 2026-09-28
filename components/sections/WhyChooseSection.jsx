'use client';

import { useState } from 'react';

const benefits = [
  {
    num: '01',
    title: 'Dedicated Account Management',
    body: 'You get a single, certified billing specialist assigned to your practice — someone who learns your payers, your workflow, and your team. One point of contact, always accountable.',
  },
  {
    num: '02',
    title: 'Transparent Pricing — Pay for Results',
    body: 'Our fee is a percentage of collections only. No setup fees, no hidden charges, no long-term commitment. If we don\'t collect, you don\'t pay.',
  },
  {
    num: '03',
    title: 'Work Within Your Existing Software',
    body: 'We securely access your current practice management system — Dentrix, Eaglesoft, Open Dental, Curve, and more. Zero disruption, zero migration.',
  },
  {
    num: '04',
    title: 'Actionable Reporting',
    body: 'Monthly reports that show exactly where your revenue stands — clean claim rates, denial trends, AR aging, and recovery progress — so you\'re never in the dark.',
  },
];

export default function WhyChooseSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="why-section">
      <div className="why-inner">
        {/* Left — Dashboard mockup */}
        <div className="why-dashboard">
          <div className="why-dashboard__card">
            <div className="why-dash__header">
              <div className="why-dash__title-wrap">
                <span className="why-dash__title">Practice Recovery Analytics</span>
                <span className="why-dash__subtitle">Real-time dental billing tracking</span>
              </div>
              <span className="why-dash__badge">CONNECTED</span>
            </div>

            <div className="why-dash__metrics">
              <div className="why-dash__metric">
                <span className="why-dash__metric-label">Claims Collected</span>
                <span className="why-dash__metric-value why-dash__metric-value--purple">$180,450</span>
              </div>
              <div className="why-dash__metric">
                <span className="why-dash__metric-label">First-Pass Approval</span>
                <span className="why-dash__metric-value why-dash__metric-value--green">97.4%</span>
              </div>
            </div>

            {/* Bar chart mockup */}
            <div className="why-dash__chart">
              <div className="why-dash__chart-label">Reimbursement Velocity</div>
              <div className="why-dash__bars">
                <div className="why-dash__bar-group">
                  <div className="why-dash__bar why-dash__bar--revix" style={{ height: '80%' }} />
                  <span className="why-dash__bar-label">Revix Plus</span>
                </div>
                <div className="why-dash__bar-group">
                  <div className="why-dash__bar why-dash__bar--industry" style={{ height: '50%' }} />
                  <span className="why-dash__bar-label">Industry Avg</span>
                </div>
                <div className="why-dash__bar-group">
                  <div className="why-dash__bar why-dash__bar--revix" style={{ height: '88%' }} />
                  <span className="why-dash__bar-label">Q3</span>
                </div>
                <div className="why-dash__bar-group">
                  <div className="why-dash__bar why-dash__bar--industry" style={{ height: '55%' }} />
                  <span className="why-dash__bar-label">Avg</span>
                </div>
                <div className="why-dash__bar-group">
                  <div className="why-dash__bar why-dash__bar--revix" style={{ height: '92%' }} />
                  <span className="why-dash__bar-label">Q4</span>
                </div>
                <div className="why-dash__bar-group">
                  <div className="why-dash__bar why-dash__bar--industry" style={{ height: '48%' }} />
                  <span className="why-dash__bar-label">Avg</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Benefits accordion */}
        <div className="why-benefits">
          <h2 className="why-heading">Why Practices Choose Revix Plus</h2>

          <div className="why-accordion">
            {benefits.map((b, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={b.num} className={`why-item${isOpen ? ' why-item--open' : ''}`}>
                  <button
                    className="why-item__btn"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="why-item__num">{b.num}</span>
                    <span className="why-item__title">{b.title}</span>
                    <span className="why-item__icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div className="why-item__body-wrap" style={{ maxHeight: isOpen ? '200px' : '0' }}>
                    <p className="why-item__body">{b.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
