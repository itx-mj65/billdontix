const testimonials = [
  {
    quote:
      'The team at Revix Plus transformed our collections. We recovered over $140K in just 90 days.',
    author: 'Dr. Sarah M.',
    specialty: 'General Dentistry',
    location: 'Phoenix, AZ',
    stars: 5,
  },
  {
    quote:
      'Our clean claim rate went from 78% to 97.4% in three months. This is the most impactful change we\'ve made in years.',
    author: 'Dr. James K.',
    specialty: 'Oral Surgery',
    location: null,
    stars: 5,
  },
  {
    quote:
      'Finally, a billing partner who understands dental medical cross-coding. We\'ve opened a significant new revenue stream.',
    author: 'Dr. Patricia L.',
    specialty: 'Endodontics',
    location: null,
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M9 1.5l2.09 4.26 4.71.68-3.4 3.32.8 4.69L9 12.02l-4.2 2.43.8-4.69L2.2 6.44l4.71-.68L9 1.5z"
            fill="var(--color-gold)"
          />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <h2 className="testimonials-heading">What Our Clients Say</h2>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <article key={i} className="testimonial-card">
              <Stars count={t.stars} />
              <blockquote className="testimonial-quote">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="testimonial-footer">
                <span className="testimonial-author">{t.author}</span>
                <span className="testimonial-meta">
                  {t.specialty}
                  {t.location ? `, ${t.location}` : ''}
                </span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
