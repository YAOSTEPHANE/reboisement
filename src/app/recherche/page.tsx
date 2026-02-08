import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { SectionDecouvrirAussi } from "@/components/SectionDecouvrirAussi";
import { NewsletterSection } from "@/components/NewsletterSection";
import { RechercheClient } from "./RechercheClient";

export const metadata: Metadata = {
  title: "Recherche - Fondation YES",
  description: "Recherchez une page du site Fondation YES.",
};

const HERO_IMG = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80";

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
    </>
  );
}
