import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partenariat - Fondation YES",
  description: "Entreprises et institutions : construisons ensemble.",
};

export default function PartenariatPage() {
  return (
    <main className="page-content">
      <Link href="/nous-aider" className="page-back">
        ← Retour à Nous aider
      </Link>
      <h1 className="page-title">Partenariat</h1>

      <p className="page-p page-intro">
        La Fondation YES travaille avec des entreprises, des institutions et des associations
        pour démultiplier l&apos;impact de ses actions. Ensemble, nous pouvons aller plus loin.
      </p>

      <section className="page-section">
        <h2 className="page-h2">Formes de partenariat</h2>
        <ul className="page-ul">
          <li><strong>Mécénat</strong> — Soutien financier ou en nature (équipements, plants, véhicules) pour nos programmes</li>
          <li><strong>Sponsoring de projets</strong> — Soutien ciblé à un programme (reboisement, éducation, communautés) avec visibilité et suivi d&apos;impact</li>
          <li><strong>Mise à disposition de compétences</strong> — Expertise technique, volontariat d&apos;entreprise, formation des équipes</li>
          <li><strong>Opérations communes</strong> — Sensibilisation, événements, campagnes de communication ou journées de plantation partagées</li>
        </ul>
      </section>

      <section className="page-section">
        <h2 className="page-h2">Processus</h2>
        <p className="page-p">
          Nous commençons par un échange pour comprendre vos objectifs (RSE, visibilité, engagement terrain).
          Nous vous présentons nos projets et les opportunités de collaboration. Une convention ou un accord
          formalise ensuite le partenariat, avec des indicateurs de suivi et une reconnaissance mutuelle.
        </p>
      </section>

      <section className="page-section">
        <h2 className="page-h2">Reconnaissance</h2>
        <p className="page-p">
          Chaque partenaire est reconnu et associé à nos résultats. Nous construisons avec vous
          une collaboration durable et transparente : rapports d&apos;activité, visibilité sur nos supports
          et invitation aux événements de la fondation.
        </p>
      </section>

      <p className="page-p">
        Pour discuter d&apos;un partenariat, <Link href="/contact" className="page-link">contactez-nous</Link>.
        Nous serons ravis de vous présenter nos projets et de construire avec vous une collaboration durable.
      </p>
    </main>
  );
}
