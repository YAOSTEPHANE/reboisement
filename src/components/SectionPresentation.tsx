import Link from "next/link";

export function SectionPresentation() {
  return (
    <section className="section-presentation" aria-labelledby="section-presentation-title">
      <div className="section-presentation__inner">
        <h2 id="section-presentation-title" className="section-presentation__title">
          Présentation
        </h2>
        <p className="section-presentation__text">
          Missions, projets et équipe au service des forêts et des communautés.
        </p>
        <Link href="/presentation" className="section-presentation__link" prefetch>
          Découvrir
        </Link>
      </div>
    </section>
  );
}
