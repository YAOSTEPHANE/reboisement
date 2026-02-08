import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Être bénévole - Fondation YES",
  description: "Rejoignez notre équipe de bénévoles.",
};

export default function EtreBenevolePage() {
  return (
    <main className="page-content">
      <Link href="/nous-aider" className="page-back">
        ← Retour à Nous aider
      </Link>
      <h1 className="page-title">Être bénévole</h1>

      <p className="page-p page-intro">
        Rejoignez notre équipe de bénévoles et donnez de votre temps pour soutenir les actions
        de la Fondation YES : sensibilisation, terrain, formation, administration.
      </p>

      <section className="page-section">
        <h2 className="page-h2">Missions possibles</h2>
        <ul className="page-ul">
          <li><strong>Sensibilisation et éducation à l&apos;environnement</strong> — Interventions en milieu scolaire ou auprès des communautés</li>
          <li><strong>Participation aux chantiers de reboisement</strong> — Plantation, suivi des arbres, entretien des périmètres</li>
          <li><strong>Formation et accompagnement des communautés</strong> — Appui technique, animation d&apos;ateliers</li>
          <li><strong>Support administratif et communication</strong> — Rédaction, traduction, gestion des dossiers, réseaux sociaux</li>
        </ul>
      </section>

      <section className="page-section">
        <h2 className="page-h2">Comment rejoindre</h2>
        <p className="page-p">
          Que vous soyez disponible quelques heures par mois ou pour des missions plus longues,
          il existe une place pour vous. Nous adaptons les missions à vos compétences et à votre disponibilité.
        </p>
        <p className="page-p">
          <strong>Étapes :</strong> contactez-nous par email ou téléphone ; nous vous recontacterons
          pour échanger sur vos souhaits et les opportunités actuelles ; une fois la mission définie,
          vous serez intégré à l&apos;équipe et accompagné sur le terrain ou à distance.
        </p>
      </section>

      <section className="page-section">
        <h2 className="page-h2">Témoignage</h2>
        <p className="page-p" style={{ fontStyle: "italic", borderLeft: "3px solid #1a4d3a", paddingLeft: "1rem" }}>
          « Donner de son temps pour la Fondation YES, c&apos;est voir concrètement l&apos;impact de nos actions :
          des arbres plantés, des communautés sensibilisées, des partenariats qui grandissent. Une expérience enrichissante. »
        </p>
      </section>

      <p className="page-p">
        <Link href="/contact" className="page-link">Nous contacter</Link> pour proposer votre aide.
      </p>
    </main>
  );
}
