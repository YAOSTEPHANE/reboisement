import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ACTUALITES, getActualiteBySlug } from "../data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return ACTUALITES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getActualiteBySlug(slug);
  if (!article) return { title: "Article introuvable - Fondation YES" };
  return {
    title: article.titre,
    description: article.extrait,
  };
}

export default async function ActualitePage({ params }: Props) {
  const { slug } = await params;
  const article = getActualiteBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <PageHero
        title={article.titre}
        subtitle={new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
        image={article.image}
      />
      <main className="page-content page-content--narrow">
        <Link href="/actualites" className="page-back">
          ← Retour aux actualités
        </Link>
        {article.image && (
          <div className="page-split__media page-split__media--article">
            <Image src={article.image} alt="" width={720} height={400} sizes="(max-width: 768px) 100vw, 720px" className="page-article-img" />
          </div>
        )}
        <p className="page-p page-intro">{article.extrait}</p>
        <div className="page-section">
          <div className="page-p" style={{ whiteSpace: "pre-line" }}>{article.contenu}</div>
        </div>
        <p className="page-p">
          <Link href="/actualites" className="page-link">Voir toutes les actualités</Link>
        </p>
      </main>
    </>
  );
}
