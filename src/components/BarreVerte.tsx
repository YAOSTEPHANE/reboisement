'use client';

import { useScrollY } from './ScrollContext';

const MAX_OFFSET = 36;
const FACTOR = 0.2;

export function BarreVerte({ children }: { children: React.ReactNode }) {
  const scrollY = useScrollY();
  const offset = Math.min(scrollY * FACTOR, MAX_OFFSET);
  const translateY = -offset;

  return (
    <div
      className="barre-verte-animate barre-verte-scroll"
      style={{
        padding: '0.5rem 1.25rem',
        background: '#1a4d3a',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap',
        borderRadius: '9999px',
        width: 'min(95%, 860px)',
        transform: `translateY(${translateY}px)`,
      }}
    >
      {children}
    </div>
  );
}
