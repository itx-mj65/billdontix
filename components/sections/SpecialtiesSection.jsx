const specialties = [
  {
    name: 'General Dentistry',
    desc: 'Comprehensive billing for preventive care, restorations, crowns, and routine services. We handle every CDT code so nothing slips through.',
  },
  {
    name: 'Oral Surgery',
    desc: 'Complex surgical coding for extractions, implants, and bone grafts — including medical cross-billing to maximize your reimbursement.',
  },
  {
    name: 'Orthodontics',
    desc: 'Accurate billing across braces, clear aligners, and retention phases with proper banding codes and insurance coordination.',
  },
  {
    name: 'Periodontics & Endodontics',
    desc: 'Specialized coding for scaling, root planing, gum surgery, root canals, and pulp therapy — with medical cross-coding where eligible.',
  },
];

export default function SpecialtiesSection() {
  return (
    <section className="specialties-section">
      <div className="specialties-inner">
        <div className="specialties-header">
          <h2 className="specialties-heading">
            Dental Specialties We Support
          </h2>
          <p className="specialties-sub">
            Expert billing for every dental discipline.
          </p>
        </div>

        <div className="specialties-grid">
          {specialties.map((s) => (
            <div key={s.name} className="specialty-card">
              <h3 className="specialty-name">{s.name}</h3>
              <p className="specialty-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
