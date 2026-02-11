import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionDecouvrirAussi } from "@/components/SectionDecouvrirAussi";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SectionApresNewsletter } from "@/components/SectionApresNewsletter";

export const metadata: Metadata = {
  title: "Projets - Fondation YES",
  description: "Nos programmes et initiatives sur le terrain.",
};

const HERO_IMG = "/images/yesfondation-org/Design-sans-titre-18.jpg";

const PROJETS = [
  {
    titre: "Reboisement et restauration des forêts",
    desc: "Plantation d'arbres, protection des bassins versants et reconstitution des écosystèmes forestiers.",
    detail: "Nous menons des campagnes de reboisement avec des espèces adaptées aux contextes locaux, en associant les communautés à la plantation et au suivi. Les zones ciblées incluent les forêts dégradées et les périmètres de protection des cours d'eau.",
    image: "/images/yesfondation-org/Design-sans-titre-18.jpg",
  },
  {
    titre: "Éducation et sensibilisation",
    desc: "Programmes de formation et de sensibilisation des populations à la protection de l'environnement.",
    detail: "Sessions en milieu scolaire, formations pour les acteurs locaux et campagnes de sensibilisation permettent de diffuser les bonnes pratiques et de renforcer la conscience environnementale.",
    image: "/images/yesfondation-org/Untitled-design-7.jpg",
  },
  {
    titre: "Lutte contre la déforestation",
    desc: "Actions de prévention, surveillance et alternatives durables pour réduire la déforestation.",
    detail: "Nous travaillons sur la prévention des feux, le soutien à des activités alternatives (agroforesterie, apiculture) et le dialogue avec les usagers des forêts pour des pratiques plus durables.",
    image: "/images/yesfondation-org/Untitled-design-8.jpg",
  },
  {
    titre: "Accompagnement des communautés",
    desc: "Soutien aux communautés pour une gestion durable des ressources naturelles.",
    detail: "Accompagnement technique, renforcement des comités locaux et appui à des initiatives génératrices de revenus compatibles avec la préservation des écosystèmes.",
    image: "/images/yesfondation-org/H5C4207-scaled.jpg",
  },
];

export default function ProjetsPage() {
  return (
    <>
      <PageHero
        title="Projets"
        subtitle="Programmes et initiatives : reboisement, éducation, communautés. Chaque projet est conçu avec les acteurs locaux pour un impact mesurable et durable."
        image={HERO_IMG}
      />
      <main className="page-content page-content--presentation">
        <nav className="page-breadcrumb" aria-label="Fil d'Ariane">
          <Link href="/presentation" className="page-breadcrumb__link">Présentation</Link>
          <span className="page-breadcrumb__sep">/</span>
          <span aria-current="page">Projets</span>
        </nav>

        <p className="page-lead">
          Nos projets sont au cœur de notre action. Ils couvrent les domaines de l&apos;éducation,
          de l&apos;environnement et du développement local, en lien direct avec les communautés.
        </p>

        <section className="page-block" aria-labelledby="programmes-title">
          <h2 id="programmes-title" className="page-block__title">Nos programmes</h2>
          <ul className="page-projets-grid">
            {PROJETS.map((p, i) => (
              <li key={i} className="page-projet-card">
                <Image src={p.image} alt="" className="page-projet-card__img" width={600} height={380} sizes="(max-width: 640px) 100vw, 50vw" loading="lazy" />
                <div className="page-projet-card__body">
                  <h3 className="page-projet-card__title">{p.titre}</h3>
                  <p className="page-projet-card__desc">{p.desc}</p>
                  <p className="page-projet-card__detail">{p.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <p className="page-p">
          Chaque projet est conçu avec les communautés et nos partenaires pour un impact mesurable et durable.{" "}
          <Link href="/presentation/nos-actions" className="page-link">Découvrez nos actions</Link>
          {" et "}
          <Link href="/actualites" className="page-link">suivez nos actualités</Link>.
        </p>

        <div className="page-cta-bar">
          <Link href="/presentation/nos-actions" className="page-cta-bar__link">
            Voir nos actions
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
          <Link href="/actualites" className="page-cta-bar__link page-cta-bar__link--secondary">Actualités</Link>
          <Link href="/nous-aider/faire-un-don" className="page-cta-bar__link page-cta-bar__link--secondary">Soutenir nos projets</Link>
        </div>
      </main>
      <SectionDecouvrirAussi excludeHref="/presentation/projets" />
      <NewsletterSection />
      <SectionApresNewsletter />
    </>
  );
}
