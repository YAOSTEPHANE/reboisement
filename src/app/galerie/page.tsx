import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { GalerieGrid } from "./GalerieGrid";
import { SectionDecouvrirAussi } from "@/components/SectionDecouvrirAussi";
import { NewsletterSection } from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Galerie - Fondation YES",
  description: "Photos et visuels des actions de la Fondation YES.",
};

const HERO_IMG = "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=85", alt: "Forêt" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=85", alt: "Nature" },
  { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=85", alt: "Paysage" },
  { src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=85", alt: "Action collective" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=85", alt: "Formation" },
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=85", alt: "Équipe" },
  { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=85", alt: "Plantation" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85", alt: "Communauté" },
  { src: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=85", alt: "Pépinière" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=85", alt: "Nature préservée" },
  { src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=85", alt: "Reboisement" },
  { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85", alt: "Bénévolat" },
];

export default function GaleriePage() {
  return (
    <>
      <PageHero
        title="Galerie"
        subtitle="Photos et visuels des actions de la Fondation YES : reboisement, sensibilisation, équipe et terrain."
        image={HERO_IMG}
      />
      <main className="page-content page-content--presentation">
        <nav className="page-breadcrumb" aria-label="Fil d'Ariane">
          <span aria-current="page">Galerie</span>
        </nav>

        <p className="page-lead">
          Nos campagnes de plantation, formations et rencontres avec les communautés sont illustrées ici.
          Cliquez sur une image pour l&apos;agrandir. Flèches du clavier pour naviguer, Échap pour fermer.
        </p>

        <section className="page-block" aria-labelledby="galerie-title">
          <h2 id="galerie-title" className="page-block__title">Photos</h2>
          <GalerieGrid images={IMAGES} />
        </section>

        <div className="page-cta-bar">
          <Link href="/presentation/nos-actions" className="page-cta-bar__link">
            Nos actions
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
          <Link href="/actualites" className="page-cta-bar__link page-cta-bar__link--secondary">Actualités</Link>
          <Link href="/presentation" className="page-cta-bar__link page-cta-bar__link--secondary">Présentation</Link>
        </div>
      </main>

      <SectionDecouvrirAussi />
      <NewsletterSection />
    </>
  );
}
