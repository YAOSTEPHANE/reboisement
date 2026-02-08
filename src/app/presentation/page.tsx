import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CardModernWithTilt } from "@/components/CardModernWithTilt";
import { SectionDecouvrirAussi } from "@/components/SectionDecouvrirAussi";
import { NewsletterSection } from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Présentation",
  description: "Découvrez la Fondation YES : missions, projets, actions et équipe.",
};

const HERO_IMG = "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80";

const CARDS = [
  {
    href: "/presentation/qui-sommes-nous",
    title: "Qui sommes-nous",
    text: "Notre mission, nos valeurs et notre vision pour un monde plus vert.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=380&fit=crop&q=85",
  },
  {
    href: "/presentation/projets",
    title: "Projets",
    text: "Programmes et initiatives : reboisement, éducation, communautés.",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=380&fit=crop&q=85",
  },
  {
    href: "/presentation/nos-actions",
    title: "Nos actions",
    text: "Ce que nous faisons au quotidien : prévention, intervention, renforcement.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=380&fit=crop&q=85",
  },
  {
    href: "/presentation/equipe",
    title: "Équipe",
    text: "Gouvernance, terrain, partenaires et bénévoles qui font vivre la Fondation.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=380&fit=crop&q=85",
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
    </>
  );
}
