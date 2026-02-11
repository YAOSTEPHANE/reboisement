import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { GalerieGrid } from "./GalerieGrid";
import { SectionDecouvrirAussi } from "@/components/SectionDecouvrirAussi";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SectionApresNewsletter } from "@/components/SectionApresNewsletter";

export const metadata: Metadata = {
  title: "Galerie - Fondation YES",
  description: "Photos et visuels des actions de la Fondation YES.",
};

const HERO_IMG = "/images/yesfondation-org/Design-sans-titre-18.jpg";

const IMAGES = [
  { src: "/images/yesfondation-org/Design-sans-titre-18.jpg", alt: "Galerie YeS" },
  { src: "/images/yesfondation-org/Untitled-design-7.jpg", alt: "Galerie YeS" },
  { src: "/images/yesfondation-org/Untitled-design-8.jpg", alt: "Galerie YeS" },
  { src: "/images/yesfondation-org/H5C4207-scaled.jpg", alt: "Galerie YeS" },
  { src: "/images/yesfondation-org/colombe-2-540x600.jpg", alt: "Galerie YeS" },
  { src: "/images/yesfondation-org/ath-540x600.jpg", alt: "Galerie YeS" },
  { src: "/images/yesfondation-org/Design-sans-titre-18.jpg", alt: "Reboisement" },
  { src: "/images/yesfondation-org/about-us_03-02.png", alt: "Fondation YeS" },
  { src: "/images/yesfondation-org/H5C4207-scaled.jpg", alt: "Actions terrain" },
  { src: "/images/yesfondation-org/H5C4207-scaled.jpg", alt: "Actions terrain" },
  { src: "/images/yesfondation-org/Untitled-design-7.jpg", alt: "Fondation YeS" },
  { src: "/images/yesfondation-org/Untitled-design-8.jpg", alt: "Fondation YeS" },
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
      <SectionApresNewsletter />
    </>
  );
}
