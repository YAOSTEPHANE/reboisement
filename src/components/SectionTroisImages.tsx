'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const TROIS_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=500&fit=crop&q=80",
    alt: "Forêt",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop&q=80",
    alt: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop&q=80",
    alt: "Paysage",
  },
];

const CENTER_CAROUSEL_IMAGES = [
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop&q=80", alt: "Nature" },
  { src: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=500&fit=crop&q=80", alt: "Forêt" },
  { src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=500&fit=crop&q=80", alt: "Paysage" },
];

const CENTER_AUTO_PLAY_MS = 4000;
const CENTER_TEXTS = [
  { text: "Protéger la nature", color: "yellow" },
  { text: "Reboisement", color: "blue" },
  { text: "Biodiversité", color: "yellow" },
  { text: "Forêts durables", color: "blue" },
  { text: "Ensemble", color: "yellow" },
];
const CENTER_TEXT_ROTATE_MS = 2500;

export function SectionTroisImages() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % CENTER_CAROUSEL_IMAGES.length);
    }, CENTER_AUTO_PLAY_MS);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % CENTER_TEXTS.length);
    }, CENTER_TEXT_ROTATE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section-trois-images" aria-label="Images">
      <div className="section-trois-images__wrap">
        <div className="section-trois-images__item section-trois-images__item--left">
          <img
            src={TROIS_IMAGES[0].src}
            alt={TROIS_IMAGES[0].alt}
            width={800}
            height={500}
            className="section-trois-images__img"
          />
          <div className="section-trois-images__overlay">
            <Link href="/nous-aider/etre-benevole" className="section-trois-images__title">
              Devenir<br />Bénévole ?
            </Link>
            <Link href="/contact" className="section-trois-images__contact">
              Contactez-nous
            </Link>
          </div>
        </div>
        <div className="section-trois-images__item section-trois-images__item--center">
          <div className="section-trois-images__carousel">
            {CENTER_CAROUSEL_IMAGES.map((img, i) => (
              <div
                key={i}
                className="section-trois-images__carousel-slide"
                data-active={i === centerIndex}
                aria-hidden={i !== centerIndex ? "true" : "false"}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={500}
                  className="section-trois-images__img"
                />
              </div>
            ))}
          </div>
          <div className="section-trois-images__carousel-texts" aria-live="polite">
            {CENTER_TEXTS.map((item, i) => (
              <span
                key={i}
                className={`section-trois-images__carousel-text section-trois-images__carousel-text--${item.color}`}
                data-active={i === textIndex}
              >
                {item.text}
              </span>
            ))}
          </div>
          <div className="section-trois-images__carousel-dots" aria-label="Choisir une image">
            {CENTER_CAROUSEL_IMAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                className="section-trois-images__carousel-dot"
                data-active={i === centerIndex}
                aria-label={`Image ${i + 1}`}
                onClick={() => setCenterIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="section-trois-images__item section-trois-images__item--right">
          <img
            src={TROIS_IMAGES[2].src}
            alt={TROIS_IMAGES[2].alt}
            width={800}
            height={500}
            className="section-trois-images__img"
          />
          <div className="section-trois-images__overlay">
            <Link href="/nous-aider/faire-un-don" className="section-trois-images__don">
              Faire un don
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
