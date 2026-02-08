import Link from "next/link";

export type LienDecouvrir = {
  href: string;
  label: string;
  description?: string;
};

const LIENS_DEFAULT: LienDecouvrir[] = [
  { href: "/presentation/qui-sommes-nous", label: "Qui sommes-nous", description: "Mission, valeurs et vision" },
  { href: "/presentation/projets", label: "Projets", description: "Nos programmes sur le terrain" },
  { href: "/presentation/nos-actions", label: "Nos actions", description: "Prévention, intervention, renforcement" },
  { href: "/presentation/equipe", label: "Équipe", description: "Gouvernance et bénévoles" },
  { href: "/nous-aider", label: "Nous aider", description: "Don, bénévolat, partenariat" },
  { href: "/contact", label: "Contact", description: "Nous contacter" },
];

type SectionDecouvrirAussiProps = {
  /** Page courante à exclure (ex: "/presentation/qui-sommes-nous") */
  excludeHref?: string;
  liens?: LienDecouvrir[];
  title?: string;
};

export function SectionDecouvrirAussi({
  excludeHref,
  liens = LIENS_DEFAULT,
  title = "Découvrir aussi",
}: SectionDecouvrirAussiProps) {
  const filtered = excludeHref ? liens.filter((l) => l.href !== excludeHref) : liens;
  const display = filtered.slice(0, 6);

  return (
    <section className="section-decouvrir-aussi" aria-label={title}>
      <div className="section-decouvrir-aussi__inner">
        <h2 className="section-decouvrir-aussi__title">{title}</h2>
        <ul className="section-decouvrir-aussi__grid">
          {display.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="section-decouvrir-aussi__card">
                <span className="section-decouvrir-aussi__card-label">{l.label}</span>
                {l.description && (
                  <span className="section-decouvrir-aussi__card-desc">{l.description}</span>
                )}
                <span className="section-decouvrir-aussi__card-arrow" aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
