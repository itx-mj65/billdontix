const badges = [
  'AAPC CERTIFIED',
  'AHIMA COMPLIANT',
  'CCS SPECIALISTS',
  'CDT ACCREDITED',
];

export default function ExperienceCredentialsSection() {
  return (
    <section className="cred-section">
      <div className="cred-inner">
        <div className="cred-card">
          <div className="cred-card__content">
            <h2 className="cred-heading">
              28 Years Combined Experience in Dental Revenue Cycle Management
            </h2>
            <p className="cred-body">
              Our team holds AAPC, AHIMA, and CCS certifications with a track
              record of recovering millions in unpaid claims across every dental
              specialty and payer type.
            </p>
            <div className="cred-badges">
              {badges.map((badge) => (
                <span key={badge} className="cred-badge">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
