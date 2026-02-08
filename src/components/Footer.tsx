"use client";

import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = {
  presentation: [
    { href: "/presentation", label: "Présentation" },
    { href: "/presentation/qui-sommes-nous", label: "Qui sommes-nous" },
    { href: "/presentation/projets", label: "Projets" },
    { href: "/presentation/nos-actions", label: "Nos actions" },
    { href: "/presentation/equipe", label: "Équipe" },
  ],
  nousAider: [
    { href: "/nous-aider", label: "Nous aider" },
    { href: "/nous-aider/faire-un-don", label: "Faire un don" },
    { href: "/nous-aider/etre-benevole", label: "Être bénévole" },
    { href: "/nous-aider/partenariat", label: "Partenariat" },
  ],
  autres: [
    { href: "/galerie", label: "Galerie" },
    { href: "/actualites", label: "Actualités" },
    { href: "/contact", label: "Contact" },
    { href: "/recherche", label: "Recherche" },
  ],
};

const SOCIAL = [
  { href: "https://facebook.com", label: "Facebook", kind: "facebook" },
  { href: "https://instagram.com", label: "Instagram", kind: "instagram" },
  { href: "https://linkedin.com", label: "LinkedIn", kind: "linkedin" },
  { href: "https://tiktok.com", label: "TikTok", kind: "tiktok" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      {/* Bandeau décoratif supérieur */}
      <div className="site-footer__accent" aria-hidden="true" />

      <div className="site-footer__inner">
        {/* Bloc principal */}
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link href="/" className="site-footer__logo" aria-label="Fondation YES - Accueil">
              <span className="site-footer__logo-frame">
                <Image
                  src="/logo-fondation-yes.png"
                  alt=""
                  width={72}
                  height={72}
                />
              </span>
            </Link>
            <p className="site-footer__tagline">
              Fondation YES œuvre pour la préservation des forêts, le reboisement et l&apos;accompagnement des communautés.
            </p>
            <div className="site-footer__social" role="list">
              {SOCIAL.map(({ href, label, kind }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`site-footer__social-link site-footer__social-link--${kind}`}
                  aria-label={label}
                  role="listitem"
                >
                  {label === "Facebook" && (
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {label === "Instagram" && (
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {label === "LinkedIn" && (
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {label === "TikTok" && (
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <nav className="site-footer__nav" aria-label="Navigation du pied de page">
            <div className="site-footer__col">
              <h3 className="site-footer__col-title">Présentation</h3>
              <ul className="site-footer__list">
                {FOOTER_LINKS.presentation.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="site-footer__link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="site-footer__col">
              <h3 className="site-footer__col-title">Nous aider</h3>
              <ul className="site-footer__list">
                {FOOTER_LINKS.nousAider.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="site-footer__link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="site-footer__col">
              <h3 className="site-footer__col-title">En savoir plus</h3>
              <ul className="site-footer__list">
                {FOOTER_LINKS.autres.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="site-footer__link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="site-footer__contact">
            <h3 className="site-footer__col-title">Contact</h3>
            <a href="mailto:contact@eauxetforets.gouv.ci" className="site-footer__contact-item">
              <span className="site-footer__contact-icon" aria-hidden>
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              contact@eauxetforets.gouv.ci
            </a>
            <a href="tel:+2252720239530" className="site-footer__contact-item">
              <span className="site-footer__contact-icon" aria-hidden>
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              (+225) 27 20 23 95 30
            </a>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="site-footer__bottom">
          <p className="site-footer__copy">
            © {year} Fondation YES. Tous droits réservés.
          </p>
          <div className="site-footer__legal">
            <Link href="/mentions-legales" className="site-footer__legal-link">Mentions légales</Link>
            <span className="site-footer__legal-sep" aria-hidden>·</span>
            <Link href="/confidentialite" className="site-footer__legal-link">Politique de confidentialité</Link>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="site-footer__back-top"
            aria-label="Retour en haut de la page"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
