"use client";

import Link from "next/link";
import Image from "next/image";
import { Tilt3D } from "./Tilt3D";

type Card = {
  href: string;
  title: string;
  text: string;
  image: string;
};

export function CardModernWithTilt({ card }: { card: Card }) {
  return (
    <li>
      <Tilt3D className="page-card-modern page-card-modern--tilt" maxTilt={8}>
        <Link href={card.href} style={{ display: "block" }}>
          <Image src={card.image} alt="" className="page-card-modern__img" width={400} height={250} sizes="(max-width: 640px) 100vw, 400px" loading="lazy" />
        </Link>
        <div className="page-card-modern__body">
          <h3 className="page-card-modern__title">
            <Link href={card.href}>{card.title}</Link>
          </h3>
          <p className="page-card-modern__text">{card.text}</p>
          <Link href={card.href} className="page-card-modern__link">
            En savoir plus
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </Tilt3D>
    </li>
  );
}
