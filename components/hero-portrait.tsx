import Image from "next/image";

/** The effects remain separate from the photo, so the cutout works in either theme. */
export function HeroPortrait() {
  return (
    <figure className="hero-portrait">
      <div className="portrait-halo" aria-hidden="true" />
      <div className="portrait-grid" aria-hidden="true" />
      <span className="portrait-background-type" aria-hidden="true">SAMI</span>
      <svg className="portrait-flow" viewBox="0 0 600 660" fill="none" aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => (
          <path key={i} d={`M-40 ${230 + i * 23} C110 ${230 + i * 23} 90 ${55 + i * 13} 290 ${55 + i * 13} S455 ${290 + i * 19} 660 ${215 + i * 23}`} />
        ))}
        <path className="flow-accent" d="M-40 420 C145 420 85 595 315 595 S480 400 640 400" />
      </svg>
      <div className="portrait-photo-wrap">
        <Image
          src="/nafiz-hero-cutout.png"
          alt="Nafiz Shahriar Sami in a black shirt, looking thoughtfully to the right"
          width={945}
          height={1664}
          sizes="(max-width: 767px) 90vw, 45vw"
          preload
          className="hero-cutout"
        />
      </div>
      <div className="portrait-topline"><span>Personal profile / 01</span><span aria-hidden="true">+ + +</span></div>
      <figcaption className="portrait-id">
        <span className="portrait-monogram" aria-hidden="true">NS<span>↗</span></span>
        <div><strong>Nafiz Shahriar Sami</strong><span>Engineering × creative instinct</span></div>
        <span className="portrait-checker" aria-hidden="true" />
      </figcaption>
      <span className="portrait-side-note">Dhaka, Bangladesh · Always in motion</span>
    </figure>
  );
}

