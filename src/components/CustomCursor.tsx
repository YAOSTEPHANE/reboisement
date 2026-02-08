'use client';

import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const bigRef = useRef<HTMLDivElement>(null);
  const smallRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const smallRefPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const initializedRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const sizeBig = 24;
    const sizeSmall = 8;
    const offsetBig = sizeBig / 2;
    const offsetSmall = sizeSmall / 2;
    const lerp = 0.18;

    const isInteractive = (el: EventTarget | null) => {
      if (!el || !(el instanceof Node)) return false;
      const target = el as HTMLElement;
      return !!target.closest?.('a, button, [role="button"], input, select, textarea, [onclick]');
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      mouseRef.current = { x, y };
      setVisible(!isInteractive(e.target));
      if (!initializedRef.current) {
        initializedRef.current = true;
        smallRefPos.current = { x, y };
      }
    };

    const handleMouseLeave = () => setVisible(false);

    const animate = () => {
      const { x: mx, y: my } = mouseRef.current;
      const small = smallRefPos.current;
      small.x += (mx - small.x) * lerp;
      small.y += (my - small.y) * lerp;

      if (bigRef.current) {
        bigRef.current.style.transform = `translate(${mx - offsetBig}px, ${my - offsetBig}px)`;
      }
      if (smallRef.current) {
        smallRef.current.style.transform = `translate(${small.x - offsetSmall}px, ${small.y - offsetSmall}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <div
        ref={bigRef}
        className="custom-cursor__big"
        aria-hidden
        style={{ opacity: visible ? 1 : 0 }}
      />
      <div
        ref={smallRef}
        className="custom-cursor__small"
        aria-hidden
        style={{ opacity: visible ? 1 : 0 }}
      />
    </>
  );
}
