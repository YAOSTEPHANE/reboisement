'use client';

import { useEffect, useRef } from 'react';

const TEXT_SELECTOR = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'p', 'li', 'td', 'th',
  '[class*="__title"]', '[class*="__heading"]', '[class*="__text"]',
  '[class*="__intro"]', '[class*="__lead"]', '[class*="__value"]',
  '[class*="card-title"]', '[class*="chart-title"]',
  '.page-lead', '.page-block__title', '.page-breadcrumb',
  '.section-presentation__title', '.section-presentation__text', '.section-presentation__link',
  '.section-aidez-les__text', '.section-actualites-titre__heading',
  '.section-image-contour-blanc__title', '.section-image-contour-blanc__intro',
  '.section-image-contour-blanc__card-title', '.section-image-contour-blanc__circle-value',
  '.section-image-contour-blanc__checklist li',   '.section-image-contour-blanc__link',
  '.page-cta-bar__link', '.site-footer__tagline', '.site-footer__col h3', '.site-footer__col a',
  '.section-entraide__quote', '.section-entraide__quote-word--blue',
  '.newsletter-section__title', '.newsletter-section__text', '.newsletter-pro__title', '.newsletter-pro__lead',
  'a.header-btn-don', 'a.header-btn-recherche span',
].join(', ');

const VISIBLE_CLASS = 'text-reveal-visible';

export function TextRevealRoot({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements = root.querySelectorAll<HTMLElement>(TEXT_SELECTOR);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(VISIBLE_CLASS);
          }
        });
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.05,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return <div ref={rootRef} className="text-reveal-root">{children}</div>;
}
