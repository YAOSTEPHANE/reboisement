'use client';

import { useState, useEffect } from 'react';

const TEMOIGNAGES = [
  {
    nom: "Thomas L.",
    role: "Partenaire entreprise",
    texte: "Un partenariat exemplaire. La Fondation YES allie professionnalisme et impact concret sur le terrain.",
    img: "/images/yesfondation-org/ath-540x600.jpg",
    imgAlt: "Thomas L.",
  },
  {
    nom: "Émilie R.",
    role: "Donatrice",
    texte: "Je soutiens la Fondation depuis deux ans. Chaque don compte et les retours sont transparents. Bravo !",
    img: "/images/yesfondation-org/colombe-2-540x600.jpg",
    imgAlt: "Émilie R.",
  },
  {
    nom: "Marc D.",
    role: "Bénévole",
    texte: "Super expérience de bénévolat. Une équipe accueillante et des actions qui ont du sens.",
    img: "/images/yesfondation-org/ath-540x600.jpg",
    imgAlt: "Marc D.",
  },
  {
    nom: "Claire F.",
    role: "Partenaire",
    texte: "Une fondation sérieuse et engagée. Nous sommes fiers de les soutenir dans leurs actions de reboisement.",
    img: "/images/yesfondation-org/colombe-2-540x600.jpg",
    imgAlt: "Claire F.",
  },
  {
    nom: "Lucas M.",
    role: "Donateur",
    texte: "Transparence et résultats visibles. Je recommande la Fondation YES sans hésitation.",
    img: "/images/yesfondation-org/about-us_03-02.png",
    imgAlt: "Lucas M.",
  },
  {
    nom: "Julie T.",
    role: "Bénévole",
    texte: "Des missions variées et une équipe au top. Chaque sortie terrain est un moment enrichissant.",
    img: "/images/yesfondation-org/WhatsApp-Image-2022-05-04-at-15_14_45-540x600.jpeg",
    imgAlt: "Julie T.",
  },
  {
    nom: "Antoine B.",
    role: "Partenaire entreprise",
    texte: "Collaboration fluide et impact mesurable. Un partenaire de confiance pour notre politique RSE.",
    img: "/images/yesfondation-org/WhatsApp-Image-2022-05-04-at-15_31_15-540x600.jpeg",
    imgAlt: "Antoine B.",
  },
  {
    nom: "Léa S.",
    role: "Donatrice",
    texte: "Enfin une fondation qui communique clairement sur l'usage des dons. Merci pour votre travail !",
    img: "/images/yesfondation-org/about-us_03-02.png",
    imgAlt: "Léa S.",
  },
];

const CARDS_PER_PAGE = 4;
const CAROUSEL_INTERVAL_MS = 6000;

export function SectionClients() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(TEMOIGNAGES.length / CARDS_PER_PAGE);

  useEffect(() => {
    const t = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(t);
  }, [totalPages]);

  return (
    <section className="section-clients" aria-label="Témoignages clients">
      <h2 className="section-clients__title">Notre précieux client</h2>
      <p className="section-clients__surtitle">Super commentaire</p>
      <div className="section-clients__carousel">
        <div
          className="section-clients__track"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {Array.from({ length: totalPages }, (_, pageIndex) => (
            <div key={pageIndex} className="section-clients__page">
              {TEMOIGNAGES.slice(
                pageIndex * CARDS_PER_PAGE,
                pageIndex * CARDS_PER_PAGE + CARDS_PER_PAGE
              ).map((t, i) => (
                <blockquote
                  key={pageIndex * CARDS_PER_PAGE + i}
                  className="section-clients__card"
                >
                  <span className="section-clients__star section-clients__star--top" aria-hidden>★</span>
                  <p className="section-clients__texte">
                    <span className="section-clients__guillemet section-clients__guillemet--open">«</span>
                    {t.texte}
                    <span className="section-clients__guillemet section-clients__guillemet--close">»</span>
                  </p>
                  <span className="section-clients__star section-clients__star--bottom" aria-hidden>★</span>
                  <footer className="section-clients__footer">
                    <img
                      src={t.img}
                      alt={t.imgAlt}
                      width={48}
                      height={48}
                      className="section-clients__avatar"
                    />
                    <div className="section-clients__meta">
                      <strong className="section-clients__nom">{t.nom}</strong>
                      <span className="section-clients__role">{t.role}</span>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="section-clients__dots" aria-label="Choisir un groupe de témoignages">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                type="button"
                className="section-clients__dot"
                data-active={i === page}
                aria-label={`Page ${i + 1}`}
                onClick={() => setPage(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
