'use client';

import { useState, useEffect, ReactElement, cloneElement } from 'react';

export function HeaderScrollEffect({ children }: { children: ReactElement }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const className = [children.props.className, scrolled ? 'header-scrolled' : ''].filter(Boolean).join(' ');
  return cloneElement(children, { className });
}
