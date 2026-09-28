'use client';

import { useState } from 'react';

const metrics = [
  { label: 'Typical First-90-Days Recovery', value: '$47K' },
  { label: 'Average Increase in Clean Claim Rates', value: '+25%' },
  { label: 'Reduction in Accounts Receivable Over 60 Days', value: '-30%' },
];

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

function computeRecovery(revenue, cleanRate, arBalance) {
  const rev = parseFloat(String(revenue).replace(/,/g, '')) || 0;
  const rate = parseFloat(cleanRate) || 0;
  const ar = parseFloat(String(arBalance).replace(/,/g, '')) || 0;
  const claimImprovement = Math.max(0, (97.4 - rate) / 100) * rev * 0.15;
  const arRecovery = ar * 0.25;
  return Math.round(claimImprovement + arRecovery);
}

export default function ROICalculatorSection() {
  const [revenue, setRevenue] = useState('1500000');
  const [cleanRate, setCleanRate] = useState('85');
  const [arBalance, setArBalance] = useState('62000');
  const [result, setResult] = useState(() => computeRecovery('1500000', '85', '62000'));

  function calculate() {
    setResult(computeRecovery(revenue, cleanRate, arBalance));
  }

  return (
    <section className="roi-section">
      <div className="roi-inner">
        {/* Eyebrow */}
        <div className="roi-header">
          <span className="roi-eyebrow">ROI POTENTIAL</span>
          <h2 className="roi-heading">See Your Practice&apos;s Recovery Potential</h2>
          <p className="roi-sub">
            Most practices recover their investment in the first 60 days.
          </p>
        </div>

        <div className="roi-body">
          {/* Left stats panel */}
          <div className="roi-stats">
            <div className="roi-stat-primary">
              <span className="roi-stat-big">$180,000</span>
              <span className="roi-stat-label">Average Annual Recovery Per Practice</span>
              <span className="roi-stat-note">
                Based on analysis of practices with $2M+ annual revenue.
              </span>
            </div>

            <div className="roi-metrics">
              {metrics.map((m) => (
                <div key={m.label} className="roi-metric-row">
                  <span className="roi-metric-label">{m.label}</span>
                  <span className="roi-metric-value">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right calculator */}
          <div className="roi-calc">
            <h3 className="roi-calc-title">Estimate Your Recovery</h3>

            <div className="roi-fields">
              <div className="roi-field">
                <label className="roi-label" htmlFor="annual-revenue">
                  Annual Practice Revenue
                </label>
                <div className="roi-input-wrap">
                  <span className="roi-input-prefix">$</span>
                  <input
                    id="annual-revenue"
                    type="text"
                    className="roi-input"
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    placeholder="1,500,000"
                  />
                </div>
              </div>

              <div className="roi-field">
                <label className="roi-label" htmlFor="clean-rate">
                  Current Clean-Claim Rate (%)
                </label>
                <div className="roi-input-wrap">
                  <input
                    id="clean-rate"
                    type="text"
                    className="roi-input"
                    value={cleanRate}
                    onChange={(e) => setCleanRate(e.target.value)}
                    placeholder="85"
                  />
                  <span className="roi-input-suffix">%</span>
                </div>
              </div>

              <div className="roi-field">
                <label className="roi-label" htmlFor="ar-balance">
                  Claims Outstanding Over 60 Days ($)
                </label>
                <div className="roi-input-wrap">
                  <span className="roi-input-prefix">$</span>
                  <input
                    id="ar-balance"
                    type="text"
                    className="roi-input"
                    value={arBalance}
                    onChange={(e) => setArBalance(e.target.value)}
                    placeholder="62,000"
                  />
                </div>
              </div>
            </div>

            <button className="roi-btn" onClick={calculate}>
              Calculate Your Exact Recovery Potential
            </button>

            <div className="roi-result">
              <span className="roi-result-label">Estimated Recovery Potential</span>
              <span className="roi-result-value">{formatCurrency(result)}</span>
              <span className="roi-result-note">
                This is a simplified estimate. Your actual recovery may vary based
                on payer mix and current billing processes.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
