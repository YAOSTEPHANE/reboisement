'use client';

import { useState, useCallback } from 'react';

const MEMBRES = [
  { src: "/images/yesfondation-org/ath-540x600.jpg", alt: "Membre équipe YeS", nom: "Jean Dupont", poste: "Coordinateur terrain" },
  { src: "/images/yesfondation-org/colombe-2-540x600.jpg", alt: "Membre équipe YeS", nom: "Marie Martin", poste: "Responsable sensibilisation" },
  { src: "/images/yesfondation-org/ath-540x600.jpg", alt: "Membre équipe YeS", nom: "Pierre Bernard", poste: "Logistique et plantations" },
  { src: "/images/yesfondation-org/colombe-2-540x600.jpg", alt: "Membre équipe YeS", nom: "Sophie Leroy", poste: "Communication et partenariats" },
  { src: "/images/yesfondation-org/WhatsApp-Image-2022-05-04-at-15_14_45-540x600.jpeg", alt: "Membre équipe YeS", nom: "Amara Koné", poste: "Reboisement et pépinières" },
  { src: "/images/yesfondation-org/WhatsApp-Image-2022-05-04-at-15_31_15-540x600.jpeg", alt: "Membre équipe YeS", nom: "Fatou Traoré", poste: "Éducation et kits scolaires" },
  { src: "/images/yesfondation-org/about-us_03-02.png", alt: "Équipe Fondation YeS", nom: "L'équipe terrain", poste: "Actions et mobilisations" },
  { src: "/images/yesfondation-org/about-us_03-02.png", alt: "Membre équipe YeS", nom: "Koffi Yao", poste: "Partenariats et projets" },
];

const PER_PAGE = 4;
const RESEAUX = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
];

function IconSocial({ name }: { name: string }) {
  const size = 20;
  switch (name) {
    case "facebook":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "instagram":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "twitter":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    default:
      return null;
  }
}

export function SectionEquipeBenevoles() {
  const totalPages = Math.ceil(MEMBRES.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const goPrev = useCallback(() => setPage((p) => (p <= 0 ? totalPages - 1 : p - 1)), [totalPages]);
  const goNext = useCallback(() => setPage((p) => (p >= totalPages - 1 ? 0 : p + 1)), [totalPages]);

  return (
    <section className="section-equipe-benevoles" aria-label="Équipe de bénévoles">
      <h2 className="section-equipe-benevoles__title">
        Rencontrez les membres de<br />
        <span className="section-equipe-benevoles__title-highlight">notre équipe</span> de bénévoles
      </h2>
      <div className="section-equipe-benevoles__carousel">
        <button
          type="button"
          className="section-equipe-benevoles__btn section-equipe-benevoles__btn--prev"
          onClick={goPrev}
          aria-label="Équipe précédente"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <div className="section-equipe-benevoles__viewport">
          <div
            className="section-equipe-benevoles__track"
            style={{ transform: `translateX(-${page * 50}%)` }}
          >
            {MEMBRES.map((m, i) => (
              <div key={i} className="section-equipe-benevoles__item">
                <div className="section-equipe-benevoles__img-wrap">
                  <img
                    src={m.src}
                    alt={m.alt}
                    width={400}
                    height={400}
                    className="section-equipe-benevoles__img"
                  />
                  <div className="section-equipe-benevoles__social">
                    <div className="section-equipe-benevoles__social-icons">
                      {RESEAUX.map((r) => (
                        <a
                          key={r.icon}
                          href={r.href}
                          className="section-equipe-benevoles__social-link"
                          title={r.label}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={r.label}
                        >
                          <IconSocial name={r.icon} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="section-equipe-benevoles__info">
                  <p className="section-equipe-benevoles__nom">{m.nom}</p>
                  <p className="section-equipe-benevoles__poste">{m.poste}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="section-equipe-benevoles__btn section-equipe-benevoles__btn--next"
          onClick={goNext}
          aria-label="Équipe suivante"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>
      {totalPages > 1 && (
        <div className="section-equipe-benevoles__dots" role="tablist" aria-label="Pages équipe">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={page === i ? "true" : "false"}
              aria-label={`Page ${i + 1}`}
              className="section-equipe-benevoles__dot"
              data-active={page === i}
              onClick={() => setPage(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
