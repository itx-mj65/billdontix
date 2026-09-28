const softwareNames = [
  'Dentrix',
  'Eaglesoft',
  'Open Dental',
  'Curve Dental',
  'Carestream',
  'MacPractice',
  'Dolphin',
  'Nextech',
];

export default function SoftwareIntegrationsSection() {
  // Duplicate for seamless infinite marquee
  const doubled = [...softwareNames, ...softwareNames];

  return (
    <section className="software-section">
      <div className="software-inner">
        <h2 className="software-heading">
          Expertise Across Leading Dental Software
        </h2>
        <p className="software-sub">
          We work securely inside the systems your team already uses.
        </p>

        {/* Marquee strip */}
        <div className="marquee-container">
          <div className="marquee-track">
            {doubled.map((name, i) => (
              <span key={i} className="software-badge">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
