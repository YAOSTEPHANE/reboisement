import Link from "next/link";

export function SectionApresNewsletter() {
  return (
    <section className="section-apres-newsletter" aria-label="Passez à l'action">
      <div className="section-apres-newsletter__inner">
        <h2 className="section-apres-newsletter__title">
          Passez à l&apos;action
        </h2>
        <p className="section-apres-newsletter__lead">
          Faites un don, devenez bénévole ou contactez-nous : chaque geste compte pour les forêts et les communautés.
        </p>
        <div className="section-apres-newsletter__actions">
          <Link href="/nous-aider/faire-un-don" className="section-apres-newsletter__btn section-apres-newsletter__btn--primary">
            Faire un don
          </Link>
          <Link href="/contact" className="section-apres-newsletter__btn section-apres-newsletter__btn--secondary">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
