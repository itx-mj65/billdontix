'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Will I need to switch to new software?',
    a: 'No. We work seamlessly within your existing practice management software, including Dentrix, Eaglesoft, Open Dental, Curve Dental, Carestream, MacPractice, and many others. We securely access your system remotely and integrate with your current workflows. Zero disruption.',
  },
  {
    q: 'Do you manage patient billing as well?',
    a: 'Yes. We handle both insurance billing and patient statements. Our team manages the entire billing cycle from insurance submission to patient balance collection.',
  },
  {
    q: 'What exactly are dental medical billing services?',
    a: 'Dental medical billing refers to billing certain dental procedures through medical insurance rather than dental insurance — procedures like sleep apnea devices, TMJ treatment, oral surgery, and trauma cases. This can unlock significant additional revenue.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Most practices see measurable improvement within the first 30 to 60 days. Clean claim rates improve immediately, and A/R cleanup typically shows results within 90 days.',
  },
  {
    q: 'What if I am not satisfied with your service?',
    a: 'We operate on a month-to-month basis with no long-term contracts. If you\'re not satisfied, you can cancel with 30 days notice. We are confident in our results.',
  },
  {
    q: 'How much does it cost?',
    a: 'Our fee is a percentage of collections, typically 4–8% depending on practice size and services. There are no setup fees, no hidden charges, and no long-term commitments.',
  },
  {
    q: 'Can you help if I have unpaid claims from the past?',
    a: 'Absolutely. AR recovery is one of our core services. We audit your aging reports and aggressively work outstanding claims — even ones that are 12–18 months old.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="faq-section">
      <div className="faq-inner">
        <div className="faq-header">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <p className="faq-sub">
            We make dental revenue cycle management clear and transparent.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M4 10h12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M10 4v12M4 10h12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                <div
                  className="faq-answer-wrap"
                  style={{ maxHeight: isOpen ? '400px' : '0px' }}
                >
                  <p className="faq-answer">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
