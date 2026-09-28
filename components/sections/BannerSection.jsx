import Image from 'next/image';
import Link from 'next/link';

export default function BannerSection({
  imageSrc,
  imageAlt,
  overlayOpacity = 0.6,
  heading,
  subheading,
  ctaLabel,
  ctaHref,
}) {
  return (
    <div className="banner-section">
      <Image
        src={imageSrc}
        alt={imageAlt || ''}
        fill
        className="banner-image"
        sizes="100vw"
        quality={85}
      />
      <div
        className="banner-overlay"
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />
      {(heading || ctaLabel) && (
        <div className="banner-content">
          {heading && <h2 className="banner-heading">{heading}</h2>}
          {subheading && <p className="banner-subheading">{subheading}</p>}
          {ctaLabel && ctaHref && (
            <Link href={ctaHref} className="banner-cta">
              {ctaLabel}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
