import Link from "next/link";

export type Partenaire = {
  name: string;
  href?: string;
  logo?: string;
};

const DEFAULT_PARTENAIRES: Partenaire[] = [
  {
    name: "OIPR - Office Ivoirien des Parcs et Réserves",
    href: "https://www.oipr.ci",
    logo: "https://placehold.co/140x48/1a4d3a/ffffff?text=OIPR",
  },
  {
    name: "SODEFOR - Société de Développement des Forêts",
    href: "https://www.sodefor.ci",
    logo: "https://placehold.co/140x48/0d7a3a/ffffff?text=SODEFOR",
  },
  {
    name: "Ministère des Eaux et Forêts - Côte d'Ivoire",
    href: "#",
    logo: "https://placehold.co/140x48/166534/ffffff?text=MEF",
  },
  {
    name: "Orange Côte d'Ivoire",
    href: "https://www.orange.ci",
    logo: "https://placehold.co/140x48/ff6600/ffffff?text=Orange",
  },
  {
    name: "MTN Côte d'Ivoire",
    href: "https://www.mtn.ci",
    logo: "https://placehold.co/140x48/ffcc00/000000?text=MTN",
  },
];

export function Partenaires({
  partenaires = DEFAULT_PARTENAIRES,
  title = "Nos partenaires",
}: {
  partenaires?: Partenaire[];
  title?: string;
}) {
  const duplicated = [...partenaires, ...partenaires];

  return (
    <section className="partenaires" aria-label={title}>
      <div className="partenaires__inner">
        <h2 className="partenaires__title">{title}</h2>
        <div className="partenaires__scroll-wrap">
          <ul className="partenaires__track" aria-hidden="true">
            {duplicated.map((p, i) => (
              <li key={i} className="partenaires__item">
                {p.href ? (
                  <Link
                    href={p.href}
                    className="partenaires__link"
                    target={p.href.startsWith("http") ? "_blank" : undefined}
                    rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {p.logo ? (
                      <span className="partenaires__logo-wrap">
                        <img
                          src={p.logo}
                          alt={p.name}
                          className="partenaires__logo"
                          width={120}
                          height={120}
                        />
                      </span>
                    ) : (
                      <span className="partenaires__name">{p.name}</span>
                    )}
                  </Link>
                ) : p.logo ? (
                  <span className="partenaires__logo-wrap">
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="partenaires__logo"
                      width={120}
                      height={120}
                    />
                  </span>
                ) : (
                  <span className="partenaires__name">{p.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
