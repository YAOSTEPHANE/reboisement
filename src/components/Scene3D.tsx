"use client";

import dynamic from "next/dynamic";

const Scene3DCanvas = dynamic(() => import("./Scene3DCanvas"), {
  ssr: false,
  loading: () => (
    <div className="section-scene-3d__loading">
      Chargement de la scène 3D…
    </div>
  ),
});

export function Scene3D() {
  return (
    <section className="section-scene-3d" aria-label="Scène 3D">
      <div className="section-scene-3d__inner">
        <h2 className="section-scene-3d__title">Notre engagement en 3D</h2>
        <p className="section-scene-3d__lead">
          Chaque arbre compte. Explorez notre symbole de reboisement et de préservation.
        </p>
        <div className="section-scene-3d__canvas-wrap">
          <Scene3DCanvas />
        </div>
      </div>
    </section>
  );
}
