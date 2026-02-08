'use client';

import { useState, useEffect } from 'react';

export type SlideEntre = {
  image: string;
  imageAlt?: string;
  title: string;
  text: string;
};

const SLIDES: SlideEntre[] = [
  {
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    imageAlt: 'Forêt',
    title: 'Nos actions sur le terrain',
    text: 'Des projets concrets pour la préservation des forêts et la sensibilisation des populations.',
  },
  {
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
    imageAlt: 'Nature',
    title: 'Biodiversité et écosystèmes',
    text: 'Protéger la faune et la flore pour les générations futures.',
  },
  {
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
    imageAlt: 'Reboisement',
    title: 'Planter pour demain',
    text: 'Chaque arbre compte. Rejoignez notre engagement pour un monde plus vert.',
  },
];

const AUTO_PLAY_MS = 4500;

export function CarouselEntreCartes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_PLAY_MS);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[index];

  return (
    <section className="carousel-entre-cartes" aria-label="Carrousel">
      <div className="carousel-entre-cartes__wrap">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className="carousel-entre-cartes__slide"
            data-active={i === index}
            aria-hidden={i !== index ? "true" : "false"}
          >
            <div className="carousel-entre-cartes__image-wrap">
              <img
                src={s.image}
                alt={s.imageAlt ?? s.title}
                className="carousel-entre-cartes__image"
                loading="eager"
                decoding="async"
              />
              <span className="carousel-entre-cartes__overlay" aria-hidden />
            </div>
            <div className="carousel-entre-cartes__content">
              <h3 className="carousel-entre-cartes__title">{s.title}</h3>
              <p className="carousel-entre-cartes__text">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-entre-cartes__dots" role="tablist" aria-label="Slides">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-label={`Slide ${i + 1}`}
            className="carousel-entre-cartes__dot"
            data-active={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
