'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const ScrollEffects = () => {
  const pathname = usePathname();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) return;

    sections.forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700', 'ease-out');
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const section = entry.target as HTMLElement;
        section.classList.remove('opacity-0', 'translate-y-6');
        observer.unobserve(section);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
};
