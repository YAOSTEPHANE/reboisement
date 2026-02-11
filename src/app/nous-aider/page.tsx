import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nous aider",
  description: "Partenariats, bénévolat, dons — comment soutenir la Fondation YES.",
};

const HERO_IMG = "/images/yesfondation-org/Design-sans-titre-18.jpg";

const CARDS = [
  {
    href: "/nous-aider/faire-un-don",
    title: "Faire un don",
    text: "Soutenez nos projets par un don (virement, Mobile Money). Chaque don compte et peut ouvrir droit à une réduction d'impôt.",
    image: "/images/yesfondation-org/Untitled-design-7.jpg",
  },
  {
    href: "/nous-aider/etre-benevole",
    title: "Être bénévole",
    text: "Donnez de votre temps : sensibilisation, terrain, formation, administration. Missions adaptées à votre disponibilité.",
    image: "/images/yesfondation-org/Untitled-design-7.jpg",
  },
  {
    href: "/nous-aider/partenariat",
    title: "Partenariat",
    text: "Entreprises et institutions : mécénat, sponsoring, mise à disposition de compétences ou opérations communes.",
    image: "/images/yesfondation-org/Untitled-design-8.jpg",
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
