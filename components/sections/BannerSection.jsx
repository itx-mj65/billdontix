import Image from 'next/image';

export default function BannerSection({ imageSrc, imageAlt, overlayOpacity = 0.18 }) {
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
    </div>
  );
}
