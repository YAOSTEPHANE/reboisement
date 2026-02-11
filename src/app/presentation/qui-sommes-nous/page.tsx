import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionDecouvrirAussi } from "@/components/SectionDecouvrirAussi";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SectionApresNewsletter } from "@/components/SectionApresNewsletter";

export const metadata: Metadata = {
  title: "Qui sommes-nous - Fondation YES",
  description: "Notre mission, nos valeurs et notre vision pour un monde plus vert.",
};

const HERO_IMG = "/images/yesfondation-org/about-us_03-02.png";

const VALEURS = [
  {
    title: "Engagement",
    text: "Agir concrètement sur le terrain, avec des résultats mesurables et un impact durable.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Transparence",
    text: "Rendre compte de nos actions et de l'usage des dons auprès de nos partenaires et donateurs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
  {
    title: "Partage",
    text: "Fédérer partenaires, bénévoles et communautés autour d'objectifs communs et de bonnes pratiques.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Durabilité",
    text: "Des projets qui transforment les pratiques sur le long terme et préservent les écosystèmes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function QuiSommesNousPage() {
  return (
    <>
      <PageHero
        title="Qui sommes-nous"
        subtitle="Une organisation engagée pour la préservation des forêts et l'accompagnement des communautés vers une gestion durable de l'environnement."
        image={HERO_IMG}
      />
      <main className="page-content page-content--presentation">
        <nav className="page-breadcrumb" aria-label="Fil d'Ariane">
          <Link href="/presentation" className="page-breadcrumb__link">Présentation</Link>
          <span className="page-breadcrumb__sep">/</span>
          <span aria-current="page">Qui sommes-nous</span>
        </nav>

        <p className="page-lead">
          La Fondation YES est une organisation engagée pour la préservation des forêts et l&apos;accompagnement
          des communautés vers une gestion durable de l&apos;environnement. Découvrez notre mission, nos valeurs et notre vision.
        </p>

        <section className="page-block page-block--with-image" aria-labelledby="mission-title">
          <h2 id="mission-title" className="page-block__title">Notre mission</h2>
          <div className="page-split">
            <div className="page-split__media">
              <Image
                src="/images/yesfondation-org/about-us_03-02.png"
                alt="Forêt et reboisement"
                width={600}
                height={450}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="page-p">
                Notre mission est de lutter contre la déforestation, de favoriser le reboisement et de renforcer
                les capacités des communautés pour une gestion durable des ressources naturelles. Nous agissons
                sur le terrain en Côte d&apos;Ivoire et dans la sous-région, en partenariat avec les acteurs locaux,
                les institutions et les entreprises engagées.
              </p>
            </div>
          </div>
        </section>

        <section className="page-block" aria-labelledby="valeurs-title">
          <h2 id="valeurs-title" className="page-block__title">Nos valeurs</h2>
          <ul className="page-values">
            {VALEURS.map((v) => (
              <li key={v.title} className="page-value-card">
                <div className="page-value-card__icon" aria-hidden>{v.icon}</div>
                <h3 className="page-value-card__title">{v.title}</h3>
                <p className="page-value-card__text">{v.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="page-block" aria-labelledby="vision-title">
          <h2 id="vision-title" className="page-block__title">Notre vision</h2>
          <p className="page-p">
            Un monde où chaque action compte et où la coopération prime pour le bien commun. Nous croyons
            en l&apos;action collective pour préserver les écosystèmes, restaurer les forêts et améliorer
            les conditions de vie des populations qui en dépendent.
          </p>
        </section>

        <div className="page-cta-bar">
          <Link href="/presentation/projets" className="page-cta-bar__link">
            Découvrir nos projets
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
          <Link href="/presentation/nos-actions" className="page-cta-bar__link page-cta-bar__link--secondary">Nos actions</Link>
          <Link href="/nous-aider" className="page-cta-bar__link page-cta-bar__link--secondary">Rejoignez-nous</Link>
        </div>
      </main>
      <SectionDecouvrirAussi excludeHref="/presentation/qui-sommes-nous" />
      <NewsletterSection />
      <SectionApresNewsletter />
    </>
  );
}
