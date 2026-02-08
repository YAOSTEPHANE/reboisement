"use client";

import Link from "next/link";
import Image from "next/image";
import { Tilt3D } from "./Tilt3D";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=500&h=350&fit=crop&q=85", alt: "Forêt et nature" },
  { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&h=350&fit=crop&q=85", alt: "Reboisement" },
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=350&fit=crop&q=85", alt: "Sensibilisation" },
  { src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&h=350&fit=crop&q=85", alt: "Paysage forestier" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=350&fit=crop&q=85", alt: "Équipe et communauté" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=350&fit=crop&q=85", alt: "Nature préservée" },
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
