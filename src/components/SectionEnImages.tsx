"use client";

import Link from "next/link";
import Image from "next/image";
import { Tilt3D } from "./Tilt3D";

const IMAGES = [
  { src: "/images/yesfondation-org/Design-sans-titre-18.jpg", alt: "Fondation YeS" },
  { src: "/images/yesfondation-org/Untitled-design-7.jpg", alt: "Reboisement" },
  { src: "/images/yesfondation-org/Untitled-design-8.jpg", alt: "Sensibilisation" },
  { src: "/images/yesfondation-org/H5C4207-scaled.jpg", alt: "Paysage forestier" },
  { src: "/images/yesfondation-org/colombe-2-540x600.jpg", alt: "Équipe et communauté" },
  { src: "/images/yesfondation-org/ath-540x600.jpg", alt: "Nature préservée" },
];

export function SectionEnImages() {
  return (
    <section className="section-en-images" aria-label="En images">
      <div className="section-en-images__inner">
        <h2 className="section-en-images__title">
          En images
        </h2>
        <p className="section-en-images__lead">
          Découvrez nos actions et nos paysages en quelques photos.
        </p>
        <ul className="section-en-images__grid">
          {IMAGES.map((img, i) => (
            <li key={i}>
              <Tilt3D className="section-en-images__item" maxTilt={6}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={350}
                  className="section-en-images__img"
                  sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                />
              </Tilt3D>
            </li>
          ))}
        </ul>
        <Link href="/galerie" className="section-en-images__link">
          Voir la galerie complète
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </section>
  );
}
