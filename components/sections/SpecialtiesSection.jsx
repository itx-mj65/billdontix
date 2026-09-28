const specialties = [
  {
    name: 'General Dentistry',
    desc: 'Full-spectrum billing for preventive, restorative, and routine care.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'Orthodontics',
    desc: 'Accurate billing for braces, clear aligners, and retention phases.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="8" width="18" height="8" rx="4" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M7 12h10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
      </svg>
    ),
  },
  {
    name: 'Oral Surgery',
    desc: 'Complex coding for extractions, implants, and surgical procedures.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3v3M12 18v3M3 12h3M18 12h3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    name: 'Periodontics',
    desc: 'Specialized billing for scaling, root planing, and gum surgery.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 17s2-4 9-4 9 4 9 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M7 10c0-3 2-7 5-7s5 4 5 7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'Endodontics',
    desc: 'Root canal and pulp therapy billing with medical cross-coding.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3C8 3 6 7 6 10c0 2 .5 4 1.5 5.5L12 21l4.5-5.5C17.5 14 18 12 18 10c0-3-2-7-6-7z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: 'Pediatric Dentistry',
    desc: 'Child-specific coding and Medicaid billing expertise.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M5 20c0-3.87 3.13-7 7-7s7 3.13 7 7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'Prosthodontics',
    desc: 'Crown, bridge, denture, and implant prosthetics billing.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 6V4M16 6V4M4 11h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Dental Implants',
    desc: 'Medical and dental cross-billing for implant procedures.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3v12M9 18h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="12" cy="21" r="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 6l4-3 4 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function SpecialtiesSection() {
  return (
    <section className="specialties-section">
      <div className="specialties-inner">
        <div className="specialties-header">
          <p className="specialties-eyebrow">SPECIALTIES</p>
          <h2 className="specialties-heading">
            We Specialize Across Every Dental Discipline
          </h2>
        </div>

        <div className="specialties-grid">
          {specialties.map((s) => (
            <div key={s.name} className="specialty-card">
              <div className="specialty-icon">{s.icon}</div>
              <h3 className="specialty-name">{s.name}</h3>
              <p className="specialty-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
