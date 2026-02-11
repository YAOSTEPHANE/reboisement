'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export type Slide = {
  image: string;
  imageAlt?: string;
  title: string;
  text: string;
};

const DEFAULT_SLIDES: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80',
    imageAlt: 'Forêt',
    title: 'Protéger nos forêts',
    text: 'Préservation et restauration des écosystèmes forestiers.',
  },
  {
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
    imageAlt: 'Nature',
    title: 'Un engagement durable',
    text: 'Un monde plus vert, ensemble.',
  },
  {
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
    imageAlt: 'Paysage',
    title: 'Reboisement et biodiversité',
    text: 'Chaque arbre planté compte pour demain.',
  },
];

const AUTO_PLAY_MS = 5000;

export function HeroCarousel({ slides = DEFAULT_SLIDES }: { slides?: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (i: number) => {
      setIndex((prev) => {
        const next = i < 0 ? slides.length - 1 : i >= slides.length ? 0 : i;
        return next;
      });
    },
    [slides.length]
  );

  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_MS);
    return () => clearInterval(t);
  }, [isPaused, slides.length]);

  const slide = slides[index];

  return (
    <section
      className="hero-carousel"
      aria-label="Carrousel d’images"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-carousel__track">
        {slides.map((s, i) => (
          <div
            key={i}
            className="hero-carousel__slide"
            data-active={i === index}
            aria-hidden={i !== index}
          >
            <div className="hero-carousel__image-wrap">
              <Image
                src={s.image}
                alt={s.imageAlt ?? s.title}
                fill
                sizes="100vw"
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : undefined}
                loading={i === 0 ? undefined : "lazy"}
                className="hero-carousel__image"
              />
              <span className="hero-carousel__overlay" aria-hidden />
            </div>
            <div className="hero-carousel__content">
              <h2 className="hero-carousel__title">{s.title}</h2>
              <p className="hero-carousel__text">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            className="hero-carousel__btn hero-carousel__btn--prev"
            onClick={prev}
            aria-label="Slide précédent"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="hero-carousel__btn hero-carousel__btn--next"
            onClick={next}
            aria-label="Slide suivant"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="hero-carousel__dots" role="tablist" aria-label="Choisir une slide">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}`}
                className="hero-carousel__dot"
                data-active={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
