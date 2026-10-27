'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { GalleryProps } from '@/types/templates.types';

export const Gallery = ({ data }: GalleryProps) => {
  const [visibleCount, setVisibleCount] = useState(() => data?.pageSize ?? 0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const images = data?.images ?? [];
  const imageCount = images.length;
  const visibleImages = images.slice(0, visibleCount);
  const visibleImageCount = visibleImages.length;

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImageIndex(null);
      if (event.key === 'ArrowLeft') setSelectedImageIndex((index) => index === null ? null : (index - 1 + visibleImageCount) % visibleImageCount);
      if (event.key === 'ArrowRight') setSelectedImageIndex((index) => index === null ? null : (index + 1) % visibleImageCount);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex, visibleImageCount]);

  if (!data || !imageCount) return null;

  const loadMoreImages = () => setVisibleCount((count) => Math.min(count + data.pageSize, imageCount));
  const previousImage = () => setSelectedImageIndex((index) => index === null ? null : (index - 1 + visibleImageCount) % visibleImageCount);
  const nextImage = () => setSelectedImageIndex((index) => index === null ? null : (index + 1) % visibleImageCount);
  const selectedImage = selectedImageIndex === null ? undefined : visibleImages[selectedImageIndex];

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-alt)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1180px]">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-light)]">{data.eyebrow}</p>
          <span className="mx-auto mt-4 block h-px w-16 bg-[var(--color-primary-light)]" aria-hidden="true" />
          <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            <span>{data.title} </span>
            <span className="text-[var(--color-primary-light)]">{data.highlightedTitle}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text)] sm:text-base sm:leading-7">{data.description}</p>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {visibleImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              aria-label={`${data.openImageLabel}: ${image.imageAlt}`}
              onClick={() => setSelectedImageIndex(index)}
              className={`group relative block h-60 overflow-hidden bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-primary-light)] sm:h-64 ${index % 8 === 3 || index % 8 === 4 ? 'lg:col-span-3 lg:h-72' : 'lg:col-span-2 lg:h-60'}`}
            >
              <Image src={image.image} alt={image.imageAlt} fill sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-0 bg-[rgba(18,17,15,0)] transition-colors duration-300 group-hover:bg-[rgba(18,17,15,0.2)]" aria-hidden="true" />
            </button>
          ))}
        </div>

        {visibleCount < imageCount && (
          <div className="mt-8 flex justify-center">
            <button type="button" onClick={loadMoreImages} className="inline-flex min-h-11 items-center justify-center gap-3 bg-[var(--color-primary-light)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[var(--color-primary)]">
              {data.loadMoreLabel}
              <FiArrowRight aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <button type="button" aria-label={data.closeLabel} onClick={() => setSelectedImageIndex(null)} className="absolute inset-0 cursor-default bg-black/90" />
          <div role="dialog" aria-modal="true" aria-label={selectedImage.imageAlt} className="relative z-10 w-full max-w-5xl">
            <button type="button" aria-label={data.closeLabel} onClick={() => setSelectedImageIndex(null)} className="absolute -right-1 -top-12 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-[var(--color-primary-dark)] text-2xl text-white transition-colors hover:bg-[var(--color-primary-light)] sm:-right-2"><FiX aria-hidden="true" /></button>
            <div className="relative h-[65vh] overflow-hidden bg-black sm:h-[75vh]">
              <Image src={selectedImage.image} alt={selectedImage.imageAlt} fill sizes="90vw" className="object-contain" />
            </div>
            <button type="button" aria-label={data.previousLabel} onClick={previousImage} className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl text-[var(--color-primary)] shadow-lg transition-colors hover:bg-[var(--color-primary-light)] hover:text-white sm:-left-16 sm:h-12 sm:w-12"><FiChevronLeft aria-hidden="true" /></button>
            <button type="button" aria-label={data.nextLabel} onClick={nextImage} className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl text-[var(--color-primary)] shadow-lg transition-colors hover:bg-[var(--color-primary-light)] hover:text-white sm:-right-16 sm:h-12 sm:w-12"><FiChevronRight aria-hidden="true" /></button>
          </div>
        </div>
      )}
    </section>
  );
};
