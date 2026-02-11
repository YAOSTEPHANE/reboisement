import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionDecouvrirAussi } from "@/components/SectionDecouvrirAussi";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SectionApresNewsletter } from "@/components/SectionApresNewsletter";

export const metadata: Metadata = {
  title: "Équipe - Fondation YES",
  description: "Qui fait vivre la Fondation YES.",
};

const HERO_IMG = "/images/yesfondation-org/colombe-2-540x600.jpg";

const EQUIPE_IMAGES = [
  { src: "/images/yesfondation-org/ath-540x600.jpg", label: "Coordinateur terrain", size: "tall" as const },
  { src: "/images/yesfondation-org/colombe-2-540x600.jpg", label: "Sensibilisation", size: "tall" as const },
  { src: "/images/yesfondation-org/about-us_03-02.png", label: "L'équipe YeS", size: "wide" as const },
  { src: "/images/yesfondation-org/ath-540x600.jpg", label: "Logistique", size: "default" as const },
  { src: "/images/yesfondation-org/colombe-2-540x600.jpg", label: "Communication", size: "default" as const },
  { src: "/images/yesfondation-org/WhatsApp-Image-2022-05-04-at-15_14_45-540x600.jpeg", label: "Reboisement", size: "tall" as const },
  { src: "/images/yesfondation-org/WhatsApp-Image-2022-05-04-at-15_31_15-540x600.jpeg", label: "Éducation", size: "default" as const },
  { src: "/images/yesfondation-org/about-us_03-02.png", label: "Partenariats", size: "default" as const },
  { src: "/images/yesfondation-org/Untitled-design-7.jpg", label: "Sur le terrain", size: "wide" as const },
  { src: "/images/yesfondation-org/H5C4207-scaled.jpg", label: "Mobilisations", size: "wide" as const },
];

const ROLES = [
  {
    titre: "Conseil d'administration et gouvernance",
    desc: "Orientation stratégique, contrôle et conformité. Le conseil veille au respect de la mission et des valeurs de la fondation.",
  },
  {
    titre: "Direction et coordination des projets",
    desc: "Pilotage des programmes, relations partenaires et suivi des indicateurs. L'équipe de direction assure la cohérence des actions sur le terrain.",
  },
  {
    titre: "Équipes terrain",
    desc: "Reboisement, sensibilisation, formation et accompagnement des communautés. Les équipes terrain sont au plus près des bénéficiaires.",
  },
  {
    titre: "Partenaires et bénévoles",
    desc: "Entreprises, institutions, associations et bénévoles qui apportent temps, compétences et moyens pour démultiplier notre impact.",
  },
];

export default function EquipePage() {
  return (
    <>
      <PageHero
        title="Équipe"
        subtitle="Gouvernance, terrain, partenaires et bénévoles qui font vivre la Fondation YES au quotidien."
        image={HERO_IMG}
      />
      <main className="page-content page-content--presentation">
        <nav className="page-breadcrumb" aria-label="Fil d'Ariane">
          <Link href="/presentation" className="page-breadcrumb__link">Présentation</Link>
          <span className="page-breadcrumb__sep">/</span>
          <span aria-current="page">Équipe</span>
        </nav>

        <p className="page-lead">
          Notre équipe rassemble des professionnels et des bénévoles engagés, issus de domaines
          variés : environnement, éducation, gestion de projet, communication.
        </p>

        <div className="page-split page-split--equipe">
          <div className="page-split__media">
            <Image
              src="/images/yesfondation-org/Untitled-design-7.jpg"
              alt="Équipe et bénévoles"
              width={600}
              height={450}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className="page-p page-p--mb0">
            Gouvernance, direction, équipes terrain et partenaires travaillent ensemble pour maximiser
            l&apos;impact de nos actions et garantir la transparence et la pérennité de la fondation.
          </p>
        </div>

        <section className="page-block" aria-labelledby="equipe-visages-title">
          <h2 id="equipe-visages-title" className="page-block__title">Les visages de l&apos;équipe</h2>
          <p className="page-p page-p--mb">
            Découvrez en images celles et ceux qui font vivre la Fondation YeS au quotidien : bénévoles, coordinateurs et équipes terrain.
          </p>
          <div className="page-equipe-gallery">
            {EQUIPE_IMAGES.map((img, i) => (
              <div key={i} className={`page-equipe-gallery__item page-equipe-gallery__item--${img.size}`}>
                <Image
                  src={img.src}
                  alt={img.label}
                  width={img.size === "wide" ? 800 : 540}
                  height={img.size === "tall" ? 600 : img.size === "wide" ? 400 : 500}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="page-equipe-gallery__img"
                />
                <span className="page-equipe-gallery__label">{img.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="page-block" aria-labelledby="organisation-title">
          <h2 id="organisation-title" className="page-block__title">Notre organisation</h2>
          <ul className="page-roles-grid">
            {ROLES.map((r, i) => (
              <li key={i} className="page-role-card">
                <h3 className="page-role-card__title">{r.titre}</h3>
                <p className="page-role-card__text">{r.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="page-block" aria-labelledby="rejoindre-title">
          <h2 id="rejoindre-title" className="page-block__title">Rejoindre l&apos;équipe</h2>
          <p className="page-p">
            Rejoindre la Fondation YES, c&apos;est rejoindre une communauté de personnes qui croient
            en l&apos;action collective pour un monde meilleur. Que vous souhaitiez donner de votre temps
            ou mettre vos compétences au service de nos projets, il existe une place pour vous.
          </p>
          <p className="page-p page-p--mb0">
            Bénévoles, partenaires entreprises ou simples curieux : nous serons ravis de vous accueillir
            et de vous présenter nos actions.
          </p>
        </section>

        <div className="page-cta-bar">
          <Link href="/nous-aider/etre-benevole" className="page-cta-bar__link">
            Devenir bénévole
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
          <Link href="/nous-aider/partenariat" className="page-cta-bar__link page-cta-bar__link--secondary">Partenariat entreprise</Link>
          <Link href="/contact" className="page-cta-bar__link page-cta-bar__link--secondary">Nous contacter</Link>
        </div>
      </main>
      <SectionDecouvrirAussi excludeHref="/presentation/equipe" />
      <NewsletterSection />
      <SectionApresNewsletter />
    </>
  );
}
