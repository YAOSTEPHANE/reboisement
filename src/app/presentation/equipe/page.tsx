import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionDecouvrirAussi } from "@/components/SectionDecouvrirAussi";
import { NewsletterSection } from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Équipe - Fondation YES",
  description: "Qui fait vivre la Fondation YES.",
};

const HERO_IMG = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80";

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
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=450&fit=crop&q=85"
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
    </>
  );
}
