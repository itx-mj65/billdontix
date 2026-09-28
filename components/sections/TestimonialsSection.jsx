const testimonials = [
  {
    quote:
      'Revix Plus recovered over $47,000 in unpaid claims in our first 90 days. Their team identified coding errors we didn\'t even know we were making. The difference in our monthly collections has been remarkable.',
    author: 'Dr. Elias Vance',
    role: 'Owner, Oakhaven Dental',
    location: 'Charlotte, NC',
  },
  {
    quote:
      'Switching to Revix Plus saved us over $65,000 in our first year alone. Our clean claim rate jumped from 82% to 97.4% and our AR over 60 days dropped significantly. I wish we had made this change sooner.',
    author: 'Priya Desai',
    role: 'Practice Manager, Meridian Dental Arts',
    location: 'Seattle, WA',
  },
  {
    quote:
      'As an orthodontic practice, we had very specific billing needs. Revix Plus handled everything — from insurance verification to complex treatment plan billing. I no longer worry about our billing at all.',
    author: 'Dr. Alistair Sterling',
    role: 'Owner, Driftwood Orthodontics',
    location: 'Charleston, SC',
  },
];

function QuoteIcon() {
  return (
    <svg width="36" height="28" viewBox="0 0 36 28" fill="none" aria-hidden="true">
      <path
        d="M0 28V17.2C0 12.96 1.04 9.28 3.12 6.16 5.28 2.96 8.4 0.72 12.48 0L14.4 3.04C12.16 3.68 10.24 4.96 8.64 6.88 7.12 8.8 6.28 10.88 6.16 13.12H12.48V28H0ZM21.12 28V17.2C21.12 12.96 22.16 9.28 24.24 6.16 26.4 2.96 29.52 0.72 33.6 0L35.52 3.04C33.28 3.68 31.36 4.96 29.76 6.88 28.24 8.8 27.4 10.88 27.28 13.12H33.6V28H21.12Z"
        fill="var(--color-purple)"
        opacity="0.4"
      />
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      {/* Decorative glows */}
      <div className="testimonials-glow testimonials-glow--tl" aria-hidden="true" />
      <div className="testimonials-glow testimonials-glow--br" aria-hidden="true" />

      <div className="testimonials-inner">
        <div className="testimonials-header">
          <span className="testimonials-eyebrow">TESTIMONIALS</span>
          <h2 className="testimonials-heading">
            Trusted by Dental Practices Across the Country
          </h2>
          <p className="testimonials-sub">
            Real results from real practices — see what our clients say about
            working with Revix Plus.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <article key={i} className="testimonial-card">
              <QuoteIcon />
              <blockquote className="testimonial-quote">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="testimonial-footer">
                <div className="testimonial-author">{t.author}</div>
                <div className="testimonial-role">{t.role}</div>
                <div className="testimonial-location">{t.location}</div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
