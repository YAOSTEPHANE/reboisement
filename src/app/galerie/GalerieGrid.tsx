"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Tilt3D } from "@/components/Tilt3D";

type ImageItem = { src: string; alt: string };

export function GalerieGrid({ images }: { images: ImageItem[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);
  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, goPrev, goNext]);

  return (
    <>
      <ul className="galerie-grid-modern">
        {images.map((img, i) => (
          <li key={i} className="galerie-grid-modern__item">
            <Tilt3D className="galerie-card" maxTilt={6}>
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="galerie-card__btn"
                aria-label={`Voir ${img.alt} en grand`}
              >
                <span className="galerie-card__img-wrap">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={280}
                    className="galerie-card__img"
                    sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                  />
                  <span className="galerie-card__zoom" aria-hidden>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                  </span>
                </span>
                <span className="galerie-card__caption">{img.alt}</span>
              </button>
            </Tilt3D>
          </li>
        ))}
      </ul>

      {lightboxIndex !== null && (
        <div
          className="galerie-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image agrandie"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <button type="button" className="galerie-lightbox-close" onClick={close} aria-label="Fermer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          <button type="button" className="galerie-lightbox-prev" onClick={goPrev} aria-label="Image précédente">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div className="galerie-lightbox-content">
            <img src={images[lightboxIndex].src} alt={images[lightboxIndex].alt} />
            <p className="galerie-lightbox-caption">{images[lightboxIndex].alt}</p>
          </div>
          <button type="button" className="galerie-lightbox-next" onClick={goNext} aria-label="Image suivante">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      )}
    </>
  );
}
