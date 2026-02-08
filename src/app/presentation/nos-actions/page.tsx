import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionDecouvrirAussi } from "@/components/SectionDecouvrirAussi";
import { NewsletterSection } from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Nos actions - Fondation YES",
  description: "Ce que nous faisons concrètement au quotidien.",
};

const HERO_IMG = "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600&q=80";

const PILIERS = [
  {
    num: "1",
    title: "Prévention",
    text: "Sensibilisation et éducation à l'environnement dans les écoles et les communautés, campagnes de communication pour réduire les pratiques néfastes.",
  },
  {
    num: "2",
    title: "Intervention",
    text: "Projets ciblés de reboisement, soutien direct aux communautés, distribution de plants et suivi des plantations.",
  },
  {
    num: "3",
    title: "Renforcement",
    text: "Formation et accompagnement des communautés pour une gestion durable des forêts, mise en place de comités de suivi et d'indicateurs partagés.",
  },
];

export default function NosActionsPage() {
  return (
    <>
      <PageHero
        title="Nos actions"
        subtitle="Sur le terrain, nous menons des actions concrètes : sensibilisation, formations, chantiers de reboisement et partenariats avec les acteurs locaux."
        image={HERO_IMG}
      />
      <main className="page-content page-content--presentation">
        <nav className="page-breadcrumb" aria-label="Fil d'Ariane">
          <Link href="/presentation" className="page-breadcrumb__link">Présentation</Link>
          <span className="page-breadcrumb__sep">/</span>
          <span aria-current="page">Nos actions</span>
        </nav>

        <p className="page-lead">
          Sur le terrain, nous menons des actions concrètes : sensibilisation, formations, chantiers
          de reboisement et partenariats avec les acteurs locaux.
        </p>

        <section className="page-block" aria-labelledby="piliers-title">
          <h2 id="piliers-title" className="page-block__title">Trois piliers</h2>
          <ul className="page-piliers">
            {PILIERS.map((p) => (
              <li key={p.num} className="page-pilier">
                <span className="page-pilier__num" aria-hidden>{p.num}</span>
                <h3 className="page-pilier__title">{p.title}</h3>
                <p className="page-pilier__text">{p.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="page-images-strip" aria-hidden>
          <Image src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=280&fit=crop&q=85" alt="" width={400} height={280} className="page-images-strip__img" />
          <Image src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=280&fit=crop&q=85" alt="" width={400} height={280} className="page-images-strip__img" />
          <Image src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=280&fit=crop&q=85" alt="" width={400} height={280} className="page-images-strip__img" />
        </div>

        <section className="page-block" aria-labelledby="terrain-title">
          <h2 id="terrain-title" className="page-block__title">Sur le terrain</h2>
          <p className="page-p">
            Nos équipes et bénévoles interviennent dans plusieurs régions. Les actions combinent
            journées de plantation, ateliers de sensibilisation, rencontres avec les autorités locales
            et le suivi des engagements pris avec les communautés. Nous privilégions une approche
            participative pour que les populations soient actrices de la préservation de leur environnement.
          </p>
        </section>

        <section className="page-block" aria-labelledby="transparence-title">
          <h2 id="transparence-title" className="page-block__title">Transparence</h2>
          <p className="page-p">
            Nous publions régulièrement des rapports et témoignages pour rendre compte de l&apos;impact
            de nos actions et rester transparents envers nos donateurs et partenaires. Les indicateurs
            (nombre d&apos;arbres plantés, bénéficiaires, zones couvertes) sont suivis et partagés.
          </p>
        </section>

        <div className="page-cta-bar">
          <Link href="/actualites" className="page-cta-bar__link">
            Voir nos actualités
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
          <Link href="/galerie" className="page-cta-bar__link page-cta-bar__link--secondary">Galerie photos</Link>
          <Link href="/nous-aider/etre-benevole" className="page-cta-bar__link page-cta-bar__link--secondary">Devenir bénévole</Link>
        </div>
      </main>
      <SectionDecouvrirAussi excludeHref="/presentation/nos-actions" />
      <NewsletterSection />
    </>
  );
}
