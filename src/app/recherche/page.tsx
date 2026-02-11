import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { SectionDecouvrirAussi } from "@/components/SectionDecouvrirAussi";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SectionApresNewsletter } from "@/components/SectionApresNewsletter";
import { RechercheClient } from "./RechercheClient";

export const metadata: Metadata = {
  title: "Recherche - Fondation YES",
  description: "Recherchez une page du site Fondation YES.",
};

const HERO_IMG = "/images/yesfondation-org/Design-sans-titre-18.jpg";

export default function RecherchePage() {
  return (
    <>
      <PageHero
        title="Recherche"
        subtitle="Trouvez rapidement une page du site : présentation, projets, dons, contact, actualités."
        image={HERO_IMG}
      />
      <Suspense
        fallback={
          <main className="page-content page-content--presentation">
            <p className="page-p">Chargement de la recherche…</p>
          </main>
        }
      >
        <RechercheClient />
      </Suspense>
      <SectionDecouvrirAussi />
      <NewsletterSection />
      <SectionApresNewsletter />
    </>
  );
}
