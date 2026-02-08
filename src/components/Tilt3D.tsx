"use client";

import { useRef, useCallback, type ReactNode } from "react";

type Tilt3DProps = {
  children: ReactNode;
  className?: string;
  /** Intensité du tilt en degrés (défaut 10) */
  maxTilt?: number;
  /** Transition au leave (défaut 0.3s) */
  transitionMs?: number;
};

export function Tilt3D({
  children,
  className = "",
  maxTilt = 10,
  transitionMs = 300,
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const tiltX = (y - 0.5) * 2 * maxTilt;
      const tiltY = (x - 0.5) * 2 * -maxTilt;
      el.style.setProperty("--tilt-x", String(tiltY));
      el.style.setProperty("--tilt-y", String(tiltX));
    },
    [maxTilt]
  );

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0");
    el.style.setProperty("--tilt-y", "0");
  }, []);

  const transitionClass = transitionMs <= 200 ? "tilt-3d--fast" : transitionMs >= 400 ? "tilt-3d--slow" : "tilt-3d--normal";
  return (
    <div
      ref={ref}
      className={`tilt-3d ${transitionClass} ${className}`.trim()}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-tilt-max={maxTilt}
    >
      {children}
    </div>
  );
}
