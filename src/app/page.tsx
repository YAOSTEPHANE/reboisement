import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Partenaires } from "@/components/Partenaires";
import { ActionsAccueil } from "@/components/ActionsAccueil";
import { SectionPresentation } from "@/components/SectionPresentation";
import { SectionEntraide } from "@/components/SectionEntraide";
import { SectionAidezLes } from "@/components/SectionAidezLes";
import { SectionActualitesCartes } from "@/components/SectionActualitesCartes";

const SectionTroisImages = dynamic(() => import("@/components/SectionTroisImages").then((m) => ({ default: m.SectionTroisImages })));
const SectionEquipeBenevoles = dynamic(() => import("@/components/SectionEquipeBenevoles").then((m) => ({ default: m.SectionEquipeBenevoles })));
const SectionClients = dynamic(() => import("@/components/SectionClients").then((m) => ({ default: m.SectionClients })));
const SectionImagesIncurvees = dynamic(() => import("@/components/SectionImagesIncurvees").then((m) => ({ default: m.SectionImagesIncurvees })));
const NewsletterSection = dynamic(() => import("@/components/NewsletterSection").then((m) => ({ default: m.NewsletterSection })));

export const metadata: Metadata = {
  title: "Accueil",
  description: "Fondation YES — Préservation des forêts, reboisement, accompagnement des communautés. Découvrez nos actions et comment nous soutenir.",
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <section className="section-partenaires" aria-label="Partenaires">
        <Partenaires />
      </section>
      <ActionsAccueil />
      <SectionPresentation />
      <SectionEntraide />
      <div className="section-deco-dots" aria-hidden><span /><span /><span /></div>
      <SectionAidezLes />
      <SectionTroisImages />
      <div className="section-deco-wave" aria-hidden />
      <SectionEquipeBenevoles />
      <SectionClients />
      <SectionImagesIncurvees />
      <section className="section-image-contour-blanc" aria-label="Images et appel au don">
        <div className="section-image-contour-blanc__inner">
          <div className="section-image-contour-blanc__wrap">
            <Image
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop&q=80"
              alt="Nature"
              width={280}
              height={420}
              className="section-image-contour-blanc__img section-image-contour-blanc__img--vertical"
              sizes="280px"
            />
            <Image
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=400&fit=crop&q=80"
              alt="Nature et paix"
              width={220}
              height={220}
              className="section-image-contour-blanc__img section-image-contour-blanc__img--carre"
              sizes="220px"
              loading="lazy"
            />
          </div>
          <div className="section-image-contour-blanc__text">
            <h2 className="section-image-contour-blanc__title">
              Faites un don pour <span className="section-image-contour-blanc__title-highlight">soutenir</span> YES<br />
              et faire la différence
            </h2>
            <p className="section-image-contour-blanc__intro">
              La charité est l&apos;acte volontaire d&apos;apporter de l&apos;aide, généralement sous forme d&apos;argent, de temps ou de ressources, à ceux qui en ont besoin.<br />
              Les organisations caritatives visent à résoudre les défis sociaux, environnementaux et économiques en s&apos;attaquant à des problèmes tels que la pauvreté,
            </p>
            <div className="section-image-contour-blanc__links">
              <div className="section-image-contour-blanc__mission-block">
                <a href="/presentation" className="section-image-contour-blanc__link section-image-contour-blanc__link--mission">
                  Notre mission
                </a>
                <a href="/presentation#excellence" className="section-image-contour-blanc__link section-image-contour-blanc__link--excellence">
                  Excellence
                </a>
              </div>
              <a href="/presentation#vision" className="section-image-contour-blanc__link section-image-contour-blanc__link--vision">
                Notre vision
              </a>
            </div>
            <hr className="section-image-contour-blanc__divider" />
            <ul className="section-image-contour-blanc__checklist">
              <li>Nous aidons les entreprises à développer une responsabilité sociale forte.</li>
              <li>Aide au financement de 3 265 projets en faveur des entreprises pauvres.</li>
              <li>Services techniques dédiés.</li>
            </ul>
            <div className="section-image-contour-blanc__charts">
              <div className="section-image-contour-blanc__chart">
                <div className="section-image-contour-blanc__circle-wrap">
                  <svg className="section-image-contour-blanc__circle" viewBox="0 0 36 36">
                    <path className="section-image-contour-blanc__circle-bg" d="M18 2.5 a 15.5 15.5 0 0 1 0 31 a 15.5 15.5 0 0 1 0 -31" />
                    <path className="section-image-contour-blanc__circle-fill" strokeDasharray="73 97" d="M18 2.5 a 15.5 15.5 0 0 1 0 31 a 15.5 15.5 0 0 1 0 -31" />
                  </svg>
                  <span className="section-image-contour-blanc__circle-value">75%</span>
                </div>
                <p className="section-image-contour-blanc__chart-title">Traitement Aide</p>
              </div>
              <div className="section-image-contour-blanc__chart">
                <div className="section-image-contour-blanc__circle-wrap">
                  <svg className="section-image-contour-blanc__circle" viewBox="0 0 36 36">
                    <path className="section-image-contour-blanc__circle-bg" d="M18 2.5 a 15.5 15.5 0 0 1 0 31 a 15.5 15.5 0 0 1 0 -31" />
                    <path className="section-image-contour-blanc__circle-fill" strokeDasharray="87.5 97" d="M18 2.5 a 15.5 15.5 0 0 1 0 31 a 15.5 15.5 0 0 1 0 -31" />
                  </svg>
                  <span className="section-image-contour-blanc__circle-value">90%</span>
                </div>
                <p className="section-image-contour-blanc__chart-title">Montant maximal de fonds collectés</p>
              </div>
            </div>
          </div>
          <div className="section-image-contour-blanc__frame">
            <div className="section-image-contour-blanc__card">
              <div className="section-image-contour-blanc__card-section">
                <span className="section-image-contour-blanc__card-icon section-image-contour-blanc__card-icon--orange" aria-hidden>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>
                </span>
                <h3 className="section-image-contour-blanc__card-title">Faites un don</h3>
                <p className="section-image-contour-blanc__card-value section-image-contour-blanc__card-value--orange">40 456 FCFA</p>
              </div>
              <hr className="section-image-contour-blanc__card-divider" />
              <div className="section-image-contour-blanc__card-section">
                <span className="section-image-contour-blanc__card-icon section-image-contour-blanc__card-icon--teal" aria-hidden>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /><circle cx="12" cy="12" r="4" /><path d="M12 8v4l2 2" /></svg>
                </span>
                <h3 className="section-image-contour-blanc__card-title">Montant total collecté</h3>
                <p className="section-image-contour-blanc__card-value section-image-contour-blanc__card-value--teal">1 540 456 FCFA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-actualites-titre" aria-label="Actualités">
        <h2 className="section-actualites-titre__heading">
          Nos dernières <span className="section-actualites-titre__highlight">actualités</span> et articles<br />
          que vous aimez
        </h2>
      </section>
      <SectionActualitesCartes />
      <NewsletterSection />
    </>
  );
}
