export type Actualite = {
  slug: string;
  date: string;
  titre: string;
  extrait: string;
  contenu: string;
  image?: string;
};

const IMG_BASE = "https://images.unsplash.com";

export const ACTUALITES: Actualite[] = [
  {
    slug: "campagne-reboisement-2025",
    date: "2025-01-15",
    titre: "Campagne de reboisement 2025",
    extrait: "Lancement de la campagne de plantation d'arbres dans plusieurs régions.",
    contenu: "La Fondation YES lance sa campagne annuelle de reboisement pour l'année 2025. Plusieurs régions sont ciblées, en collaboration avec les communautés locales et les partenaires techniques. Les espèces plantées sont choisies en fonction des écosystèmes et des besoins des populations. Des journées de sensibilisation accompagneront les plantations pour renforcer l'engagement des jeunes et des acteurs locaux.",
    image: `${IMG_BASE}/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop&q=85`,
  },
  {
    slug: "partenariat-communautes",
    date: "2025-01-08",
    titre: "Partenariat avec les communautés",
    extrait: "Signature d'accords avec des communautés pour la gestion durable des forêts.",
    contenu: "Des accords de gestion durable ont été signés avec plusieurs communautés riveraines des zones forestières. Ces partenariats visent à associer les populations à la protection et à la régénération des forêts, tout en favorisant des activités génératrices de revenus compatibles avec la préservation de l'environnement. Des comités locaux ont été mis en place pour le suivi des engagements.",
    image: `${IMG_BASE}/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop&q=85`,
  },
  {
    slug: "bilan-2024",
    date: "2024-12-20",
    titre: "Bilan de l'année 2024",
    extrait: "Retour sur les actions menées et les résultats obtenus.",
    contenu: "L'année 2024 a été marquée par une intensification des actions sur le terrain : reboisement, éducation à l'environnement, soutien aux communautés et renforcement des partenariats. Les indicateurs de suivi montrent une progression du nombre d'arbres plantés et des bénéficiaires des programmes. La Fondation YES remercie tous ses partenaires et bénévoles pour leur engagement.",
    image: `${IMG_BASE}/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop&q=85`,
  },
  {
    slug: "journee-mondiale-environnement",
    date: "2024-06-05",
    titre: "Journée mondiale de l'environnement 2024",
    extrait: "Participation de la Fondation YES à la Journée mondiale de l'environnement.",
    contenu: "À l'occasion de la Journée mondiale de l'environnement, la Fondation YES a organisé des ateliers de sensibilisation et une opération de plantation dans plusieurs écoles partenaires. L'objectif : rappeler l'importance de la préservation des forêts et impliquer les plus jeunes dans des gestes concrets. Les élèves ont participé à la plantation d'arbres dans les périmètres scolaires et ont reçu des supports pédagogiques pour poursuivre la sensibilisation en classe.",
    image: `${IMG_BASE}/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop&q=85`,
  },
];

export function getActualiteBySlug(slug: string): Actualite | undefined {
  return ACTUALITES.find((a) => a.slug === slug);
}
