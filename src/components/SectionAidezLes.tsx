"use client";

import { useState, useEffect, useCallback } from "react";

const AIDEZ_LES_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=300&h=400&fit=crop&q=80",
    title: "Solidarité",
    text: "Soutenez les communautés dans le besoin.",
  },
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=400&fit=crop&q=80",
    title: "Entraide",
    text: "Chaque don compte pour améliorer leur quotidien.",
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=400&fit=crop&q=80",
    title: "Partage",
    text: "Partagez et aidez ceux qui en ont le plus besoin.",
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=400&fit=crop&q=80",
    title: "Don",
    text: "Faites un geste concret pour les plus démunis.",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=400&fit=crop&q=80",
    title: "Bénévolat",
    text: "Donnez de votre temps pour une cause juste.",
  },
  {
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=400&fit=crop&q=80",
    title: "Espoir",
    text: "Ensemble, créons un avenir meilleur pour tous.",
  },
];

const AUTO_PLAY_MS = 4000;

export function SectionAidezLes() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = AIDEZ_LES_ITEMS.length;

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused || total <= 1) return;
    const t = setInterval(goNext, AUTO_PLAY_MS);
    return () => clearInterval(t);
  }, [isPaused, total, goNext]);

  const items = [...AIDEZ_LES_ITEMS, ...AIDEZ_LES_ITEMS];

  return (
    <section className="section-aidez-les" aria-label="Aidez-les">
      <div className="section-aidez-les__inner">
        <p className="section-aidez-les__text">
          Aidez-les et <span className="section-aidez-les__text--red">faites un don</span>
          <br />
          lorsqu&apos;ils sont dans le besoin
        </p>
      </div>
      <div
        className="section-aidez-les__carousel"
        aria-label="Carrousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="section-aidez-les__carousel-viewport">
          <div
            className="section-aidez-les__carousel-track"
            style={{ ["--carousel-index" as string]: index } as React.CSSProperties}
          >
            {items.map((item, i) => (
              <div key={i} className="section-aidez-les__scroll-card">
                <img
                  src={item.src}
                  alt=""
                  width={300}
                  height={400}
                  className="section-aidez-les__scroll-img"
                />
                <h3 className="section-aidez-les__scroll-title">{item.title}</h3>
                <p className="section-aidez-les__scroll-desc">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-aidez-les__carousel-dots" role="tablist" aria-label="Position du carrousel">
        {AIDEZ_LES_ITEMS.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Slide ${i + 1}`}
            className="section-aidez-les__carousel-dot"
            data-active={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
