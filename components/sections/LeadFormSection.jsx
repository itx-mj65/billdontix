'use client';

import { useState } from 'react';

const challenges = [
  'Describe your current billing challenge...',
  'High denial rates',
  'Aging accounts receivable',
  'Staff turnover / knowledge gaps',
  'CDT coding errors',
  'Insurance credentialing',
  'Starting from scratch',
  'Other',
];

export default function LeadFormSection() {
  const [form, setForm] = useState({
    fullName: '',
    practiceName: '',
    email: '',
    phone: '',
    challenge: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // In production: POST to your API route
    setSubmitted(true);
  }

  return (
    <section className="lead-section" id="audit">
      <div className="lead-inner">
        {/* Header */}
        <div className="lead-header">
          <span className="lead-eyebrow">BOOK A MEETING</span>
          <h2 className="lead-heading">Request Your Free Billing Audit</h2>
          <p className="lead-sub">
            Identify coding errors, outstanding A/R, and missed medical billing
            revenue in 15 minutes.
          </p>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="lead-success">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <circle cx="24" cy="24" r="22" fill="var(--color-lavender)" />
              <path
                d="M14 24l8 8 12-14"
                stroke="var(--color-purple)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="lead-success__title">Thank you!</h3>
            <p className="lead-success__msg">
              We&apos;ll be in touch within one business day to schedule your free
              audit.
            </p>
          </div>
        ) : (
          <form className="lead-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-field">
                <label className="form-label" htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="form-input"
                  placeholder="Dr. Jane Smith"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="practiceName">Practice Name</label>
                <input
                  id="practiceName"
                  name="practiceName"
                  type="text"
                  className="form-input"
                  placeholder="Smith Dental Group"
                  value={form.practiceName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="jane@smithdental.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="form-input"
                  placeholder="(602) 555-0100"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-field form-field--full">
              <label className="form-label" htmlFor="challenge">Billing Challenge</label>
              <select
                id="challenge"
                name="challenge"
                className="form-input form-select"
                value={form.challenge}
                onChange={handleChange}
              >
                {challenges.map((c) => (
                  <option key={c} value={c === challenges[0] ? '' : c} disabled={c === challenges[0]}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="form-submit">
              Request My Free Audit
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
            </button>

            <p className="form-disclaimer">
              By submitting this form, you agree to be contacted about Revix
              Plus services.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
