import Link from "next/link";

export function SectionEntraide() {
  const HandsGlobeIcon = () => (
    <svg viewBox="0 0 64 64" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="32" cy="32" r="12" fill="#eab308" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="32" cy="32" rx="12" ry="6" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6" />
      <path d="M12 26 Q20 18 20 32 Q20 46 12 38" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 26 Q44 18 44 32 Q44 46 52 38" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 22 Q10 32 16 42" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M48 22 Q54 32 48 42" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );

  const ValidatedIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5" />
      <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );

  return (
    <section className="section-entraide" aria-label="Citation">
      <div className="section-entraide__inner">
        <div className="section-entraide__image-wrap">
          <img
            src="/images/yesfondation-org/H5C4207-scaled.jpg"
            alt="Entraide et solidarité"
            width={440}
            height={660}
            className="section-entraide__image"
          />
          <div className="section-entraide__image-strip">
            <span className="section-entraide__image-strip-text">Nous faisons des dons aux personnes démunies</span>
          </div>
          <div className="section-entraide__corner-wrap">
            <img
              src="/images/yesfondation-org/Design-sans-titre-18.jpg"
              alt=""
              width={200}
              height={200}
              className="section-entraide__image-corner"
              aria-hidden
            />
          </div>
          <img
            src="/images/yesfondation-org/Untitled-design-7.jpg"
            alt=""
            width={200}
            height={200}
            className="section-entraide__image-corner-br"
            aria-hidden
          />
        </div>
        <div className="section-entraide__text-wrap">
          <p className="section-entraide__quote">
            S&apos;Entraider Peut <span className="section-entraide__quote-word--blue">Rendre</span>
            <br />
            Le Monde Meilleur
          </p>
          <p className="section-entraide__text">
            Le bénévolat offre la possibilité d&apos;acquérir de nouvelles compétences et une expérience précieuse. Cela peut inclure des compétences en matière de leadership, de communication, de gestion de projet et de travail d&apos;équipe.
          </p>
          <div className="section-entraide__subtitle-wrap">
            <div className="section-entraide__subtitle-left">
              <div className="section-entraide__subtitle-group">
                <span className="section-entraide__subtitle-icon" aria-hidden>
                  <HandsGlobeIcon />
                </span>
                <p className="section-entraide__subtitle">Commencez à les aider</p>
              </div>
              <p className="section-entraide__text section-entraide__text-under-aider">
                Rejoignez notre équipe de bénévoles et donnez de votre temps
                <br />
                pour agir.
              </p>
            </div>
            <div className="section-entraide__subtitle-right">
              <Link href="/nous-aider/faire-un-don" className="section-entraide__subtitle-group section-entraide__subtitle-link">
                <span className="section-entraide__subtitle-icon" aria-hidden>
                  <HandsGlobeIcon />
                </span>
                <span className="section-entraide__subtitle">Faire un don</span>
              </Link>
              <p className="section-entraide__text section-entraide__text-under-don">
                Sensibiliser le public à la mission et à la cause
                <br />
                de l&apos;organisme de bienfaisance.
              </p>
            </div>
          </div>
          <div className="section-entraide__validated">
            <div className="section-entraide__validated-item">
              <ValidatedIcon />
              <span className="section-entraide__validated-text">A contribué au financement de 3 265 projets en faveur des entreprises pauvres.</span>
            </div>
            <div className="section-entraide__validated-item">
              <ValidatedIcon />
              <span className="section-entraide__validated-text">Nous offrons à l&apos;enfant le cadeau de l&apos;éducation.</span>
            </div>
            <div className="section-entraide__validated-item">
              <ValidatedIcon />
              <span className="section-entraide__validated-text">Nous aidons les entreprises à développer une responsabilité sociale forte.</span>
            </div>
          </div>
          <a href="tel:+2252720239530" className="section-entraide__big-phone">
            <span className="section-entraide__big-phone-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span className="section-entraide__big-phone-number">(+225) 27 20 23 95 30</span>
          </a>
        </div>
      </div>
    </section>
  );
}
