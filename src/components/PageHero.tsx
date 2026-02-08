import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  /** URL d'image de fond (optionnel). Si absent, fond dégradé vert. */
  image?: string;
  /** Contenu optionnel sous le sous-titre (liens, boutons) */
  children?: ReactNode;
};

export function PageHero({ title, subtitle, image, children }: PageHeroProps) {
  const style = image
    ? { backgroundImage: `linear-gradient(145deg, rgba(26, 77, 58, 0.82) 0%, rgba(15, 51, 40, 0.88) 50%, rgba(13, 40, 31, 0.92) 100%), url(${image})` }
    : undefined;
  return (
    <header
      className={`page-hero${image ? " page-hero--with-image" : ""}`}
      style={style}
    >
      <span className="hero-deco-corner hero-deco-corner--tl" aria-hidden />
      <span className="hero-deco-corner hero-deco-corner--br" aria-hidden />
      <div className="page-hero__inner">
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        {children && <div className="page-hero__actions">{children}</div>}
      </div>
    </header>
  );
}
