"use client";

import Link from "next/link";
import { Tilt3D } from "@/components/Tilt3D";
import type { Actualite } from "./data";

export function ActualiteCard({ actualite }: { actualite: Actualite }) {
  const href = `/actualites/${actualite.slug}`;
  const dateFormatted = new Date(actualite.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li>
      <Tilt3D className="page-card-modern page-card-modern--tilt" maxTilt={8}>
        {actualite.image && (
          <Link href={href} style={{ display: "block" }}>
            <img
              src={actualite.image}
              alt=""
              className="page-card-modern__img"
              width={400}
              height={250}
            />
          </Link>
        )}
        <div className="page-card-modern__body">
          <time className="page-card-modern__meta" dateTime={actualite.date}>
            {dateFormatted}
          </time>
          <h3 className="page-card-modern__title">
            <Link href={href}>{actualite.titre}</Link>
          </h3>
          <p className="page-card-modern__text">{actualite.extrait}</p>
          <Link href={href} className="page-card-modern__link">
            Lire la suite
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </Tilt3D>
    </li>
  );
}
