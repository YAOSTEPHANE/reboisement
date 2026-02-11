import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CardModernWithTilt } from "@/components/CardModernWithTilt";
import { SectionDecouvrirAussi } from "@/components/SectionDecouvrirAussi";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SectionApresNewsletter } from "@/components/SectionApresNewsletter";

export const metadata: Metadata = {
  title: "Présentation",
  description: "Découvrez la Fondation YES : missions, projets, actions et équipe.",
};

const HERO_IMG = "/images/yesfondation-org/Untitled-design-8.jpg";

const CARDS = [
  {
    href: "/presentation/qui-sommes-nous",
    title: "Qui sommes-nous",
    text: "Notre mission, nos valeurs et notre vision pour un monde plus vert.",
    image: "/images/yesfondation-org/Design-sans-titre-18.jpg",
  },
  {
    href: "/presentation/projets",
    title: "Projets",
    text: "Programmes et initiatives : reboisement, éducation, communautés.",
    image: "/images/yesfondation-org/Untitled-design-7.jpg",
  },
  {
    href: "/presentation/nos-actions",
    title: "Nos actions",
    text: "Ce que nous faisons au quotidien : prévention, intervention, renforcement.",
    image: "/images/yesfondation-org/Untitled-design-8.jpg",
  },
  {
    href: "/presentation/equipe",
    title: "Équipe",
    text: "Gouvernance, terrain, partenaires et bénévoles qui font vivre la Fondation.",
    image: "/images/yesfondation-org/H5C4207-scaled.jpg",
  },
];

export default function PresentationPage() {
  return (
    <>
      <PageHero
        title="Présentation"
        subtitle="La Fondation YES œuvre pour la préservation des forêts, la lutte contre la déforestation et l'accompagnement des communautés."
        image={HERO_IMG}
      />
      <main className="page-content page-content--presentation">
        <nav className="page-breadcrumb" aria-label="Fil d'Ariane">
          <span aria-current="page">Présentation</span>
        </nav>

        <p className="page-lead">
          Découvrez notre organisation, nos missions, nos projets sur le terrain et l&apos;équipe qui fait vivre la Fondation YES au quotidien.
        </p>

        <section className="page-block" aria-labelledby="presentation-decouvrir">
          <h2 id="presentation-decouvrir" className="page-block__title">Découvrir</h2>
          <ul className="page-grid-modern">
            {CARDS.map((c) => (
              <CardModernWithTilt key={c.href} card={c} />
            ))}
          </ul>
        </section>

        <div className="page-cta-bar">
          <Link href="/presentation/qui-sommes-nous" className="page-cta-bar__link">
            Qui sommes-nous
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
          <Link href="/nous-aider" className="page-cta-bar__link page-cta-bar__link--secondary">Soutenez notre action</Link>
          <Link href="/contact" className="page-cta-bar__link page-cta-bar__link--secondary">Contact</Link>
        </div>
      </main>

      <SectionDecouvrirAussi />
      <NewsletterSection />
      <SectionApresNewsletter />
    </>
  );
}
