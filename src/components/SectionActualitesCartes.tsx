import Link from "next/link";
import { ACTUALITES } from "@/app/actualites/data";

const IMAGES_ACTUALITES = [
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=280&fit=crop&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=280&fit=crop&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=280&fit=crop&q=80",
];

const MOIS: Record<string, string> = {
  "01": "Janvier", "02": "Février", "03": "Mars", "04": "Avril", "05": "Mai", "06": "Juin",
  "07": "Juillet", "08": "Août", "09": "Septembre", "10": "Octobre", "11": "Novembre", "12": "Décembre",
};

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-");
  return { day: d, month: MOIS[m] || m, year: y };
}

export function SectionActualitesCartes() {
  const items = ACTUALITES.slice(0, 3);

  return (
    <section className="section-actualites-cartes" aria-label="Dernières actualités">
      <div className="section-actualites-cartes__inner">
        {items.map((actu, i) => {
          const { day, month, year } = formatDate(actu.date);
          const img = IMAGES_ACTUALITES[i] ?? IMAGES_ACTUALITES[0];
          return (
            <article key={actu.slug} className="section-actualites-cartes__card">
              <Link href={`/actualites/${actu.slug}`} className="section-actualites-cartes__img-wrap">
                <img
                  src={img}
                  alt=""
                  width={400}
                  height={280}
                  className="section-actualites-cartes__img"
                />
              </Link>
              <div className="section-actualites-cartes__date">
                <span className="section-actualites-cartes__date-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  {day}
                </span>
                <span className="section-actualites-cartes__date-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>
                  {month}
                </span>
                <span className="section-actualites-cartes__date-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  {year}
                </span>
              </div>
              <h3 className="section-actualites-cartes__title">{actu.titre}</h3>
              <Link href={`/actualites/${actu.slug}`} className="section-actualites-cartes__link">
                Voir plus
                <span className="section-actualites-cartes__link-icon" aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
