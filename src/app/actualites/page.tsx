import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionDecouvrirAussi } from "@/components/SectionDecouvrirAussi";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SectionApresNewsletter } from "@/components/SectionApresNewsletter";
import { ACTUALITES } from "./data";
import { ActualiteCard } from "./ActualiteCard";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Dernières nouvelles et événements de la Fondation YES : reboisement, partenariats, bilans.",
};

const HERO_IMG = "/images/yesfondation-org/H5C4207-scaled.jpg";

export default function ActualitesPage() {
  return (
    <>
      <PageHero
        title="Actualités"
        subtitle="Campagnes de reboisement, partenariats, bilans et journées de sensibilisation. Restez informés de nos actions."
        image={HERO_IMG}
      />
      <main className="page-content page-content--presentation">
        <nav className="page-breadcrumb" aria-label="Fil d'Ariane">
          <span aria-current="page">Actualités</span>
        </nav>

        <p className="page-lead">
          Retrouvez ici les dernières nouvelles, les bilans et les événements de la Fondation YES.
        </p>

        <section className="page-block" aria-labelledby="actualites-title">
          <h2 id="actualites-title" className="page-block__title">Dernières actualités</h2>
          <ul className="page-grid-modern">
            {ACTUALITES.map((a) => (
              <ActualiteCard key={a.slug} actualite={a} />
            ))}
          </ul>
        </section>

        <div className="page-cta-bar">
          <Link href="/presentation/nos-actions" className="page-cta-bar__link">
            Nos actions
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
          <Link href="/galerie" className="page-cta-bar__link page-cta-bar__link--secondary">Galerie</Link>
          <Link href="/contact" className="page-cta-bar__link page-cta-bar__link--secondary">Contact</Link>
        </div>
      </main>

      <SectionDecouvrirAussi />
      <NewsletterSection />
      <SectionApresNewsletter />
    </>
  );
}
