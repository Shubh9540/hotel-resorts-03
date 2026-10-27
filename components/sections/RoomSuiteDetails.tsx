'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaBath, FaBed, FaCoffee, FaConciergeBell, FaGift, FaHeart, FaLock, FaRulerCombined, FaSnowflake, FaSpa, FaSun, FaSwimmingPool, FaTv, FaUtensils, FaUsers, FaWifi } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';
import { RoomSuiteDetailsProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaBath': return <FaBath aria-hidden="true" />;
    case 'FaBed': return <FaBed aria-hidden="true" />;
    case 'FaCoffee': return <FaCoffee aria-hidden="true" />;
    case 'FaConciergeBell': return <FaConciergeBell aria-hidden="true" />;
    case 'FaGift': return <FaGift aria-hidden="true" />;
    case 'FaHeart': return <FaHeart aria-hidden="true" />;
    case 'FaLock': return <FaLock aria-hidden="true" />;
    case 'FaRulerCombined': return <FaRulerCombined aria-hidden="true" />;
    case 'FaSnowflake': return <FaSnowflake aria-hidden="true" />;
    case 'FaSpa': return <FaSpa aria-hidden="true" />;
    case 'FaSun': return <FaSun aria-hidden="true" />;
    case 'FaSwimmingPool': return <FaSwimmingPool aria-hidden="true" />;
    case 'FaTv': return <FaTv aria-hidden="true" />;
    case 'FaUtensils': return <FaUtensils aria-hidden="true" />;
    case 'FaUsers': return <FaUsers aria-hidden="true" />;
    case 'FaWifi': return <FaWifi aria-hidden="true" />;
    default: return null;
  }
};

export const RoomSuiteDetails = ({ data, room }: RoomSuiteDetailsProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);
  const galleryLength = room?.gallery.length ?? 0;

  useEffect(() => {
    if (lightboxImageIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxImageIndex(null);
      if (event.key === 'ArrowLeft') setLightboxImageIndex((index) => index === null ? null : (index - 1 + galleryLength) % galleryLength);
      if (event.key === 'ArrowRight') setLightboxImageIndex((index) => index === null ? null : (index + 1) % galleryLength);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [galleryLength, lightboxImageIndex]);

  if (!data || !room || room.gallery.length === 0) return null;

  const activeImage = room.gallery[activeImageIndex];
  const showPreviousImage = () => setActiveImageIndex((index) => (index - 1 + room.gallery.length) % room.gallery.length);
  const showNextImage = () => setActiveImageIndex((index) => (index + 1) % room.gallery.length);

  return (
    <section className="bg-[var(--color-bg-main)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1.18fr_0.82fr] lg:gap-10">
          <div>
            <div className="relative aspect-[1.45/1] overflow-hidden rounded-sm bg-[var(--color-bg-alt)]">
              <Image src={activeImage.image} alt={activeImage.imageAlt} fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover transition-opacity duration-500" />
              <button type="button" onClick={showPreviousImage} aria-label={data.previousImageLabel} className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/90 text-[var(--color-primary-light)] shadow-md transition-colors hover:bg-[var(--color-primary-light)] hover:text-white"><FiArrowLeft aria-hidden="true" /></button>
              <button type="button" onClick={showNextImage} aria-label={data.nextImageLabel} className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/90 text-[var(--color-primary-light)] shadow-md transition-colors hover:bg-[var(--color-primary-light)] hover:text-white"><FiArrowRight aria-hidden="true" /></button>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
              {room.gallery.map((image, index) => (
                <button key={image.id} type="button" onClick={() => setActiveImageIndex(index)} aria-label={image.imageAlt} aria-current={index === activeImageIndex ? 'true' : undefined} className={`${index === activeImageIndex ? 'ring-2 ring-[var(--color-primary-light)] ring-offset-2' : 'opacity-75 hover:opacity-100'} relative aspect-[1.35/1] overflow-hidden transition-all`}>
                  <Image src={image.image} alt={image.imageAlt} fill sizes="(min-width: 1024px) 14vw, 25vw" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:pt-1">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary-light)]">{data.eyebrow}</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">{room.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text)] sm:text-base">{room.description}</p>

            <div className="mt-7 grid grid-cols-2 border-y border-[var(--color-border)] py-5 sm:grid-cols-4">
              {[
                { id: 'room-guests', icon: 'FaUsers', label: room.guests },
                { id: 'room-bed', icon: 'FaBed', label: room.bed },
                { id: 'room-view', icon: 'FaSun', label: room.view },
                { id: 'room-size', icon: 'FaRulerCombined', label: room.size },
              ].map((item, index) => (
                <div key={item.id} className={`${index > 0 ? 'border-l border-[var(--color-border)]' : ''} flex flex-col items-center px-2 text-center`}>
                  <span className="text-2xl text-[var(--color-primary-light)]">{renderIcon(item.icon)}</span>
                  <span className="mt-2 text-xs text-[var(--color-text)] sm:text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 bg-[var(--color-bg-alt)] p-5 sm:p-7">
              <p className="text-sm text-[var(--color-text-light)]">{data.startingFromLabel}</p>
              <p className="mt-1 font-heading text-4xl font-semibold text-[var(--color-primary-light)] sm:text-5xl">{room.price} <span className="font-primary text-sm font-medium text-[var(--color-text)]">/ {data.perNightLabel}</span></p>
              <div className="mt-6 grid grid-cols-2 border-t border-[var(--color-border)] pt-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-light)]">{data.checkInLabel}</p>
                  <p className="mt-1 text-sm text-[var(--color-text)]">{room.checkIn}</p>
                </div>
                <div className="border-l border-[var(--color-border)] pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-light)]">{data.checkOutLabel}</p>
                  <p className="mt-1 text-sm text-[var(--color-text)]">{room.checkOut}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-[var(--color-heading)]">{room.aboutTitle}</h2>
            <span className="mt-3 block h-px w-10 bg-[var(--color-primary-light)]" aria-hidden="true" />
            <div className="mt-5 space-y-4">
              {room.aboutParagraphs.map((paragraph) => <p key={paragraph.id} className="text-sm leading-7 text-[var(--color-text)] sm:text-base">{paragraph.text}</p>)}
            </div>

            <h2 className="mt-9 font-heading text-3xl font-semibold text-[var(--color-heading)]">{data.highlightsTitle}</h2>
            <span className="mt-3 block h-px w-10 bg-[var(--color-primary-light)]" aria-hidden="true" />
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {room.highlights.map((highlight) => (
                <div key={highlight.id} className="flex min-h-32 flex-col items-center justify-center bg-[var(--color-bg-alt)] p-4 text-center transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-[var(--color-primary-light)] shadow-sm">{renderIcon(highlight.icon)}</span>
                  <span className="mt-3 text-sm leading-5 text-[var(--color-text)]">{highlight.title}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="bg-[var(--color-bg-alt)] p-5 sm:p-7">
            <h2 className="font-heading text-3xl font-semibold text-[var(--color-heading)]">{data.amenitiesTitle}</h2>
            <span className="mt-3 block h-px w-10 bg-[var(--color-primary-light)]" aria-hidden="true" />
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {room.amenities.map((amenity) => (
                <div key={amenity.id} className="flex items-center gap-3 text-sm text-[var(--color-text)]">
                  <span className="w-6 shrink-0 text-xl text-[var(--color-primary-light)]">{renderIcon(amenity.icon)}</span>
                  <span>{amenity.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-10">
          <h2 className="font-heading text-3xl font-semibold text-[var(--color-heading)]">{data.galleryTitle}</h2>
          <span className="mt-3 block h-px w-10 bg-[var(--color-primary-light)]" aria-hidden="true" />
          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {room.gallery.map((image, index) => (
              <button key={`gallery-${image.id}`} type="button" onClick={() => { setActiveImageIndex(index); setLightboxImageIndex(index); }} aria-label={image.imageAlt} className="group relative aspect-[1.45/1] overflow-hidden">
                <Image src={image.image} alt={image.imageAlt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightboxImageIndex !== null && (
        <div role="dialog" aria-modal="true" aria-label={room.gallery[lightboxImageIndex].imageAlt} onClick={() => setLightboxImageIndex(null)} className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4 sm:p-8">
          <button type="button" onClick={() => setLightboxImageIndex(null)} aria-label={data.closeImageLabel} className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/40 text-2xl text-white transition-colors hover:bg-[var(--color-primary-light)] sm:right-7 sm:top-7"><FiX aria-hidden="true" /></button>
          <button type="button" onClick={(event) => { event.stopPropagation(); setLightboxImageIndex((index) => index === null ? null : (index - 1 + room.gallery.length) % room.gallery.length); }} aria-label={data.previousImageLabel} className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-[var(--color-heading)] shadow-lg transition-colors hover:bg-[var(--color-primary-light)] hover:text-white sm:left-7 sm:h-12 sm:w-12"><FiArrowLeft aria-hidden="true" /></button>
          <div onClick={(event) => event.stopPropagation()} className="relative h-[70vh] w-full max-w-6xl overflow-hidden">
            <Image src={room.gallery[lightboxImageIndex].image} alt={room.gallery[lightboxImageIndex].imageAlt} fill sizes="100vw" className="object-contain" />
          </div>
          <button type="button" onClick={(event) => { event.stopPropagation(); setLightboxImageIndex((index) => index === null ? null : (index + 1) % room.gallery.length); }} aria-label={data.nextImageLabel} className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-[var(--color-heading)] shadow-lg transition-colors hover:bg-[var(--color-primary-light)] hover:text-white sm:right-7 sm:h-12 sm:w-12"><FiArrowRight aria-hidden="true" /></button>
        </div>
      )}
    </section>
  );
};
