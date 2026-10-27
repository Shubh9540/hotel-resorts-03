'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { AboutUsProps } from '@/types/templates.types';

export const AboutUs = ({ data, showButton = true }: AboutUsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState<number[]>([]);

  useEffect(() => {
    if (!data) return;

    const finalValues = data.stats.map((stat) => stat.value);
    setCounts(data.stats.map(() => 0));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCounts(finalValues);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    let animationFrameId: number | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const startedAt = performance.now();
        const animate = (timestamp: number) => {
          const progress = Math.min((timestamp - startedAt) / data.counterDurationMs, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setCounts(finalValues.map((value) => Math.round(value * easedProgress)));

          if (progress < 1) {
            animationFrameId = window.requestAnimationFrame(animate);
          }
        };

        animationFrameId = window.requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (animationFrameId !== undefined) window.cancelAnimationFrame(animationFrameId);
    };
  }, [data]);

  if (!data) return null;

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <Image
        src={data.backgroundImage}
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="pointer-events-none object-cover opacity-[0.13]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)_minmax(150px,0.42fr)] lg:gap-10 lg:px-8">
        <div className="relative mx-auto aspect-[1/1.02] w-full max-w-[560px] overflow-hidden rounded-md shadow-[0_12px_35px_rgba(41,40,50,0.14)]">
          <Image
            src={data.image}
            alt={data.imageAlt}
            fill
            sizes="(min-width: 1024px) 38vw, (min-width: 768px) 48vw, 92vw"
            className="object-cover object-center"
          />
        </div>

        <div>
          <p className="font-navigation text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">{data.subtitle}</p>
          <h2 className="mt-3 max-w-[520px] font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] text-[var(--color-primary)] sm:text-4xl lg:text-[42px]">
            {data.title}
          </h2>
          <p className="mt-5 max-w-[560px] text-sm leading-6 text-[var(--color-text)] sm:text-[15px] sm:leading-7">{data.description}</p>

          {showButton && (
            <Link
              href={data.buttonUrl}
              className="mt-6 inline-flex h-11 items-center gap-4 rounded-sm bg-[var(--color-secondary)] px-6 font-navigation text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              <span>{data.buttonText}</span>
              <FiArrowRight aria-hidden="true" className="text-base" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-3 border-t border-[var(--color-border)] pt-6 md:col-span-2 lg:col-span-1 lg:grid-cols-1 lg:gap-7 lg:border-l lg:border-t-0 lg:py-2 lg:pl-8 lg:pt-2">
          {data.stats.map((stat, index) => (
            <div key={stat.id} className="px-2 text-center lg:px-0 lg:text-left">
              <strong className="block font-heading text-2xl font-bold leading-none text-[var(--color-secondary)] sm:text-3xl">{counts[index] ?? 0}{stat.suffix}</strong>
              <span className="mt-2 block text-[10px] leading-4 text-[var(--color-text)] sm:text-xs">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
