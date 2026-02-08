import Link from "next/link";
import { CarouselEntreCartes } from "./CarouselEntreCartes";

const ACTIONS = [
  {
    title: "Reboisement",
    description: "Planter des arbres pour restaurer les forêts et préserver la biodiversité.",
    href: "/presentation/nos-actions",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=80",
    imageAlt: "Plantation d'arbres",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 22V12" />
        <path d="M12 12c-2.5-2-5-2-7.5 0 0 3.5 2 6 3.75 6H12" />
        <path d="M12 12c2.5-2 5-2 7.5 0 0 3.5-2 6-3.75 6H12" />
      </svg>
    ),
  },
  {
    title: "Être bénévole",
    description: "Rejoignez-nous et donnez de votre temps pour agir en faveur de l'environnement.",
    href: "/nous-aider/etre-benevole",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80",
    imageAlt: "Bénévoles en action",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M12 11v6" />
        <path d="M9 14h6" />
        <circle cx="12" cy="5" r="4" />
      </svg>
    ),
  },
  {
    title: "Éduquer la population",
    description: "Sensibiliser et former les citoyens à la protection de l'environnement.",
    href: "/presentation/nos-actions",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80",
    imageAlt: "Sensibilisation et formation",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
  },
  {
    title: "La déforestation",
    description: "Lutter contre la déforestation et préserver les écosystèmes forestiers.",
    href: "/presentation/nos-actions",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80",
    imageAlt: "Protection des forêts",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "L'Education",
    description: "Former et sensibiliser les citoyens à la protection de l'environnement et aux bonnes pratiques.",
    href: "/presentation/nos-actions",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&q=80",
    imageAlt: "Formation et sensibilisation",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
  },
  {
    title: "L'Assistance",
    description: "Accompagner les communautés et les projets pour une gestion durable des ressources.",
    href: "/nous-aider/partenariat",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80",
    imageAlt: "Accompagnement des communautés",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

function ActionCard({ action, themeClass }: { action: (typeof ACTIONS)[0]; themeClass: string }) {
  return (
    <Link
      href={action.href}
      className={`actions-accueil__card ${themeClass}`}
    >
            <span className="actions-accueil__image-wrap">
              <img
                src={action.image}
                alt={action.imageAlt}
                className="actions-accueil__image"
                width={400}
                height={200}
                loading="eager"
                decoding="async"
              />
              <span className="actions-accueil__icon">{action.icon}</span>
            </span>
            <h3 className="actions-accueil__title">{action.title}</h3>
            <p className="actions-accueil__desc">{action.description}</p>
            <span className="actions-accueil__link-text">En savoir plus</span>
    </Link>
  );
}

export function ActionsAccueil() {
  return (
    <section className="actions-accueil" aria-label="Nos actions">
      <div className="actions-accueil__inner">
        <div className="actions-accueil__grid">
          {ACTIONS.slice(0, 3).map((action, i) => (
            <ActionCard key={i} action={action} themeClass={`actions-accueil__card--theme-${i + 1}`} />
          ))}
        </div>
        <CarouselEntreCartes />
        <div className="actions-accueil__grid">
          {ACTIONS.slice(3, 6).map((action, i) => (
            <ActionCard key={i} action={action} themeClass={`actions-accueil__card--theme-${i + 4}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
