import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://fondation-yes.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/presentation",
    "/presentation/qui-sommes-nous",
    "/presentation/projets",
    "/presentation/nos-actions",
    "/presentation/equipe",
    "/nous-aider",
    "/nous-aider/faire-un-don",
    "/nous-aider/etre-benevole",
    "/nous-aider/partenariat",
    "/galerie",
    "/actualites",
    "/contact",
    "/recherche",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/actualites" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
