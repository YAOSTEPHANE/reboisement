import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nous aider",
  description: "Partenariats, bénévolat, dons — comment soutenir la Fondation YES.",
};

const HERO_IMG = "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80";

const CARDS = [
  {
    href: "/nous-aider/faire-un-don",
    title: "Faire un don",
    text: "Soutenez nos projets par un don (virement, Mobile Money). Chaque don compte et peut ouvrir droit à une réduction d'impôt.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=380&fit=crop&q=85",
  },
  {
    href: "/nous-aider/etre-benevole",
    title: "Être bénévole",
    text: "Donnez de votre temps : sensibilisation, terrain, formation, administration. Missions adaptées à votre disponibilité.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=380&fit=crop&q=85",
  },
  {
    href: "/nous-aider/partenariat",
    title: "Partenariat",
    text: "Entreprises et institutions : mécénat, sponsoring, mise à disposition de compétences ou opérations communes.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=380&fit=crop&q=85",
  },
];

export default function NousAiderPage() {
  return (
    <>
      <PageHero
        title="Nous aider"
        subtitle="Partenariats, bénévolat, dons — découvrez comment soutenir la Fondation YES et agir pour les forêts et les communautés."
        image={HERO_IMG}
      />
      <main className="page-content page-content--wide">
        <section className="page-section-modern">
          <h2 className="page-section-modern__title">Comment nous soutenir</h2>
          <ul className="page-grid-modern">
            {CARDS.map((c) => (
              <li key={c.href} className="page-card-modern">
                <Link href={c.href} style={{ display: "block" }}>
                  <Image src={c.image} alt="" className="page-card-modern__img" width={400} height={250} sizes="(max-width: 640px) 100vw, 400px" loading="lazy" />
                </Link>
                <div className="page-card-modern__body">
                  <h3 className="page-card-modern__title">
                    <Link href={c.href}>{c.title}</Link>
                  </h3>
                  <p className="page-card-modern__text">{c.text}</p>
                  <Link href={c.href} className="page-card-modern__link">
                    En savoir plus
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <p className="page-p">
          Pour toute question, <Link href="/contact" className="page-link">contactez-nous</Link>.
        </p>
      </main>
    </>
  );
}
