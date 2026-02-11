'use client';

import { useState, useEffect, useCallback } from 'react';

const IMAGES = [
  { src: "/images/yesfondation-org/Design-sans-titre-18.jpg", alt: "Fondation YeS", caption: "Ensemble, plantons des arbres pour préserver nos forêts et la biodiversité." },
  { src: "/images/yesfondation-org/Untitled-design-7.jpg", alt: "Fondation YeS", caption: "Chaque geste compte : la nature nous rend tous les services qu’on lui offre." },
  { src: "/images/yesfondation-org/Untitled-design-8.jpg", alt: "Fondation YeS", caption: "Le reboisement redonne vie aux paysages et lutte contre l’érosion." },
  { src: "/images/yesfondation-org/H5C4207-scaled.jpg", alt: "Fondation YeS", caption: "Les arbres sont nos meilleurs alliés pour le climat et la qualité de l’air." },
  { src: "/images/yesfondation-org/colombe-2-540x600.jpg", alt: "Fondation YeS", caption: "Protéger les forêts de montagne, c’est protéger l’eau et les écosystèmes." },
  { src: "/images/yesfondation-org/ath-540x600.jpg", alt: "Fondation YeS", caption: "Agir pour l’environnement aujourd’hui, c’est préparer un avenir durable pour tous." },
];

/** Piste infinie : [dernier, ...tous, premier, 2e] pour next après dernier → reset fluide (9 slides) */
const TRACK = [
  IMAGES[IMAGES.length - 1],
  ...IMAGES,
  IMAGES[0],
  IMAGES[1],
  IMAGES[2],
];
const POSITIONS = IMAGES.length; // 6 positions "réelles" (1 à 6)

/** Index logique 0..5 pour dots/caption */
function positionToLogical(pos: number): number {
  if (pos <= 0) return IMAGES.length - 1;
  if (pos > POSITIONS) return 0;
  return pos - 1;
}

const INTERVAL_MS = 4500;

export function SectionImagesIncurvees() {
  const [position, setPosition] = useState(1); // 1 = première image au centre
  const [noTransition, setNoTransition] = useState(false);

  const logicalIndex = positionToLogical(position);

  const goTo = useCallback((nextPos: number, skipTransition = false) => {
    if (skipTransition) setNoTransition(true);
    setPosition(nextPos);
  }, []);

  const goNext = useCallback(() => {
    if (position >= POSITIONS) {
      goTo(POSITIONS + 1); // après dernier → position 7 (clone premier)
    } else {
      goTo(position + 1);
    }
  }, [position, goTo]);

  const goPrev = useCallback(() => {
    if (position <= 1) {
      goTo(0); // avant premier → position 0 (clone dernier)
    } else {
      goTo(position - 1);
    }
  }, [position, goTo]);

  useEffect(() => {
    const t = setInterval(goNext, INTERVAL_MS);
    return () => clearInterval(t);
  }, [goNext]);

  useEffect(() => {
    if (noTransition) {
      const id = requestAnimationFrame(() => {
        setNoTransition(false);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [noTransition]);

  const handleTransitionEnd = useCallback(() => {
    if (position === 0) goTo(POSITIONS, true); // après prev depuis premier → saut au dernier
    else if (position === POSITIONS + 1) goTo(1, true); // après next depuis dernier → saut au premier
  }, [position, goTo]);

  return (
    <section className="section-images-incurvees" aria-label="Galerie carrousel">
      <div className="section-images-incurvees__viewport">
        <div
          className="section-images-incurvees__track"
          style={{
            transform: `translateX(calc(25% - ${position * 50}%))`,
            transition: noTransition ? 'none' : undefined,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {TRACK.map((img, i) => (
            <div key={i} className="section-images-incurvees__slide" data-center={i === position}>
              <div className="section-images-incurvees__item">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={350}
                  className="section-images-incurvees__img"
                />
                {i === position && (
                  <a
                    href="#"
                    className="section-images-incurvees__overlay-btn"
                    aria-label={`Voir ${img.alt}`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7h-6M17 7v6" /></svg>
                  </a>
                )}
              </div>
              {i === position && (
                <div className="section-images-incurvees__caption-wrap">
                  <span className="section-images-incurvees__caption-icon" aria-hidden>
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 4v8M12 12L6 22M12 12l6 10" />
                    </svg>
                  </span>
                  <p key={i} className="section-images-incurvees__caption" aria-live="polite">
                    {img.caption ?? img.alt}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
