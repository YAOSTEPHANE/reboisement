"use client";

/** Décorations d'arrière-plan et éléments flottants (thème nature / reboisement). */
export function BackgroundDecorations() {
  return (
    <>
      {/* Couche de fond : motif discret + formes organiques */}
      <div className="bg-deco" aria-hidden>
        <div className="bg-deco__pattern" />
        <div className="bg-deco__blob bg-deco__blob--1" />
        <div className="bg-deco__blob bg-deco__blob--2" />
        <div className="bg-deco__blob bg-deco__blob--3" />
      </div>

      {/* Feuilles / branches décoratives flottantes */}
      <div className="bg-deco-floats" aria-hidden>
        <svg className="bg-deco-float bg-deco-float--leaf-1" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20C20 0 60 5 80 20C60 35 20 40 0 20Z" fill="currentColor" opacity="0.06" />
        </svg>
        <svg className="bg-deco-float bg-deco-float--leaf-2" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M80 20C60 0 20 5 0 20C20 35 60 40 80 20Z" fill="currentColor" opacity="0.05" />
        </svg>
        <svg className="bg-deco-float bg-deco-float--leaf-3" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0C50 30 50 50 30 80C10 50 10 30 30 0Z" fill="currentColor" opacity="0.05" />
        </svg>
        <svg className="bg-deco-float bg-deco-float--leaf-4" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20C20 0 60 5 80 20C60 35 20 40 0 20Z" fill="currentColor" opacity="0.04" />
        </svg>
      </div>
    </>
  );
}
