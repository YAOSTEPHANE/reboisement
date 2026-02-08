"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ACTUALITES } from "@/app/actualites/data";

export type SearchResult = { title: string; href: string; excerpt: string; type?: "page" | "actualite" };

const PAGES: SearchResult[] = [
  { title: "Présentation", href: "/presentation", excerpt: "Découvrez la Fondation YES et ses actions.", type: "page" },
  { title: "Qui sommes-nous", href: "/presentation/qui-sommes-nous", excerpt: "Notre mission, nos valeurs et notre vision.", type: "page" },
  { title: "Projets", href: "/presentation/projets", excerpt: "Nos programmes et initiatives sur le terrain.", type: "page" },
  { title: "Nos actions", href: "/presentation/nos-actions", excerpt: "Ce que nous faisons concrètement au quotidien.", type: "page" },
  { title: "Équipe", href: "/presentation/equipe", excerpt: "Qui fait vivre la Fondation YES.", type: "page" },
  { title: "Nous aider", href: "/nous-aider", excerpt: "Partenariats, bénévolat, dons.", type: "page" },
  { title: "Faire un don", href: "/nous-aider/faire-un-don", excerpt: "Soutenez nos projets par un don.", type: "page" },
  { title: "Être bénévole", href: "/nous-aider/etre-benevole", excerpt: "Rejoignez notre équipe de bénévoles.", type: "page" },
  { title: "Partenariat", href: "/nous-aider/partenariat", excerpt: "Entreprises et institutions : construisons ensemble.", type: "page" },
  { title: "Contact", href: "/contact", excerpt: "Contactez la Fondation YES.", type: "page" },
  { title: "Galerie", href: "/galerie", excerpt: "Photos et visuels de nos actions.", type: "page" },
  { title: "Actualités", href: "/actualites", excerpt: "Les dernières nouvelles et événements.", type: "page" },
];

function searchAll(q: string): SearchResult[] {
  const lower = q.trim().toLowerCase();
  if (!lower) return [];

  const pageResults = PAGES.filter(
    (p) =>
      p.title.toLowerCase().includes(lower) ||
      p.excerpt.toLowerCase().includes(lower)
  );

  const actualiteResults: SearchResult[] = ACTUALITES.filter(
    (a) =>
      a.titre.toLowerCase().includes(lower) ||
      a.extrait.toLowerCase().includes(lower) ||
      a.contenu.toLowerCase().includes(lower)
  ).map((a) => ({
    title: a.titre,
    href: `/actualites/${a.slug}`,
    excerpt: a.extrait,
    type: "actualite" as const,
  }));

  return [...pageResults, ...actualiteResults];
}

export function RechercheClient() {
  const searchParams = useSearchParams();
  const qFromUrl = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(qFromUrl);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    setQuery(qFromUrl);
    if (qFromUrl) {
      setResults(searchAll(qFromUrl));
      setSearched(true);
    } else {
      setResults([]);
      setSearched(false);
    }
  }, [qFromUrl]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    setResults(searchAll(q));
    setSearched(true);
    const url = q ? `/recherche?q=${encodeURIComponent(q)}` : "/recherche";
    window.history.replaceState({}, "", url);
  }

  return (
    <main className="page-content page-content--presentation">
      <nav className="page-breadcrumb" aria-label="Fil d'Ariane">
        <span aria-current="page">Recherche</span>
      </nav>

      <p className="page-lead">
        Recherchez une page du site par mot-clé : don, bénévole, projet, contact, actualités…
      </p>

      <section className="page-block" aria-labelledby="recherche-form-title">
        <h2 id="recherche-form-title" className="page-block__title">Rechercher</h2>
        <form onSubmit={handleSearch} className="page-form page-form--recherche">
          <label htmlFor="recherche-input">
            Mot-clé
            <input
              id="recherche-input"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ex. don, bénévole, projet..."
              autoFocus
            />
          </label>
          <button type="submit">Rechercher</button>
        </form>
      </section>

      {searched && (
        <section className="page-block" aria-labelledby="recherche-results-title">
          <h2 id="recherche-results-title" className="page-block__title">Résultats</h2>
          {results.length === 0 ? (
            <p className="page-p">Aucun résultat pour « {query} ».</p>
          ) : (
            <ul className="page-recherche-results">
              {results.map((r, i) => (
                <li key={r.type === "actualite" ? r.href : i} className="page-recherche-card">
                  <Link href={r.href} className="page-recherche-card__link">
                    {r.title}
                    {r.type === "actualite" && (
                      <span className="page-recherche-card__badge">Actualité</span>
                    )}
                  </Link>
                  <p className="page-recherche-card__excerpt">{r.excerpt}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </main>
  );
}
