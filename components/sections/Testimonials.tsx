'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { TestimonialsProps } from '@/types/templates.types';

export const Testimonials = ({ data }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  if (!data || data.items.length === 0) return null;
  const item = data.items[activeIndex];
  const previous = () => setActiveIndex((activeIndex - 1 + data.items.length) % data.items.length);
  const next = () => setActiveIndex((activeIndex + 1) % data.items.length);
  return (
    <section className="relative flex min-h-[430px] items-center overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <Image src={item.image} alt={item.imageAlt} fill sizes="100vw" className="object-cover" />
      <span className="absolute inset-0 z-10 bg-[var(--color-testimonial-overlay)]" aria-hidden="true" />
      <button type="button" onClick={previous} aria-label={`${data.slideLabel} ${activeIndex}`} className="absolute left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-primary-light)] text-[var(--color-primary-light)] hover:bg-[var(--color-primary-light)] hover:text-white sm:left-8"><FiChevronLeft aria-hidden="true" /></button>
      <div className="relative z-20 mx-auto max-w-3xl text-center text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-light)]">{data.subtitle}</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">{data.titleLine1} {data.highlightedTitle}</h2>
        <div className="mt-3 flex justify-center gap-1 text-sm text-[var(--color-primary-light)]">{Array.from({ length: 5 }, (_, index) => <FaStar key={`star-${index}`} aria-hidden="true" />)}</div>
        <FaQuoteLeft className="mx-auto mt-5 text-2xl text-[var(--color-primary-light)]" aria-hidden="true" />
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">{item.quote}</p>
        <Image src={item.avatar} alt={item.avatarAlt} width={64} height={64} className="mx-auto mt-5 h-16 w-16 rounded-full border-2 border-[var(--color-primary-light)] object-cover" />
        <h3 className="mt-2 font-heading text-lg font-semibold">{item.name}</h3><p className="text-xs text-white/70">{item.location}</p>
      </div>
      <button type="button" onClick={next} aria-label={`${data.slideLabel} ${activeIndex + 2}`} className="absolute right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-primary-light)] text-[var(--color-primary-light)] hover:bg-[var(--color-primary-light)] hover:text-white sm:right-8"><FiChevronRight aria-hidden="true" /></button>
    </section>
  );
};
