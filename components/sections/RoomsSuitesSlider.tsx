'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaUsers } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { RoomsSuitesSliderProps } from '@/types/templates.types';

export const RoomsSuitesSlider = ({ data }: RoomsSuitesSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!data || data.rooms.length < 2 || isPaused) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % data.rooms.length);
    }, data.homeSliderIntervalMs);

    return () => window.clearInterval(intervalId);
  }, [data, isPaused]);

  if (!data || data.rooms.length === 0) return null;

  const previousIndex = (activeIndex - 1 + data.rooms.length) % data.rooms.length;
  const nextIndex = (activeIndex + 1) % data.rooms.length;
  const activeRoom = data.rooms[activeIndex];
  const previousRoom = data.rooms[previousIndex];
  const nextRoom = data.rooms[nextIndex];

  const showPrevious = () => setActiveIndex(previousIndex);
  const showNext = () => setActiveIndex(nextIndex);

  return (
    <section
      className="relative overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <Image src="/banner/section_bg_gold.webp" alt="" aria-hidden="true" width={520} height={520} className="pointer-events-none absolute -right-24 -top-32 hidden w-[430px] opacity-10 lg:block" />

      <div className="relative mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <header className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-light)]">{data.homeEyebrow}</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">{data.homeTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text)] sm:text-base sm:leading-7">{data.homeDescription}</p>
          </header>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <button type="button" onClick={showPrevious} aria-label={data.previousImageLabel} className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-primary-light)] text-lg text-[var(--color-primary-light)] transition-colors duration-300 hover:bg-[var(--color-primary-light)] hover:text-white">
              <FiArrowLeft aria-hidden="true" />
            </button>
            <button type="button" onClick={showNext} aria-label={data.nextImageLabel} className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-lg text-white transition-colors duration-300 hover:bg-[var(--color-primary)]">
              <FiArrowRight aria-hidden="true" />
            </button>
            <Link href={data.homeViewAllUrl} className="ml-2 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-primary-light)] transition-colors hover:text-[var(--color-primary)]">
              {data.homeViewAllLabel}<FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-7 w-full max-w-[1440px] px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[0.72fr_1.2fr_0.72fr] lg:gap-5">
          <Link href={`/rooms-suites/${previousRoom.id}`} aria-label={previousRoom.title} className="group relative hidden h-80 overflow-hidden lg:block">
            <Image src={previousRoom.image} alt={previousRoom.imageAlt} fill sizes="25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <span className="absolute inset-0 bg-[var(--color-primary-dark)]/10 transition-colors group-hover:bg-transparent" aria-hidden="true" />
          </Link>

          <article className="overflow-hidden bg-white shadow-[0_14px_38px_rgba(41,40,50,0.12)]">
            <Link href={`/rooms-suites/${activeRoom.id}`} aria-label={activeRoom.title} className="group relative block h-60 overflow-hidden sm:h-80">
              <Image src={activeRoom.image} alt={activeRoom.imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </Link>

            <div className="flex flex-col gap-4 p-4 sm:p-5 md:flex-row md:items-center md:justify-between">
              <div className="min-w-0">
                <Link href={`/rooms-suites/${activeRoom.id}`} className="font-heading text-xl font-semibold text-[var(--color-heading)] transition-colors hover:text-[var(--color-primary-light)] sm:text-2xl">{activeRoom.title}</Link>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[var(--color-text)] sm:text-sm">
                  <span className="inline-flex items-center gap-2"><FaBed className="text-[var(--color-primary-light)]" aria-hidden="true" />{activeRoom.bed}</span>
                  <span className="inline-flex items-center gap-2"><FaUsers className="text-[var(--color-primary-light)]" aria-hidden="true" />{activeRoom.guests}</span>
                  <span>{activeRoom.size}</span>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-5">
                <Link href={`/rooms-suites/${activeRoom.id}`} className="inline-flex min-h-11 items-center justify-center bg-[var(--color-primary-light)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--color-primary)]">{data.homeBookLabel}</Link>
                <div>
                  <p className="text-xs text-[var(--color-text-light)]">{data.homeFromLabel}</p>
                  <p className="font-heading text-2xl font-semibold text-[var(--color-primary-light)]">{activeRoom.price}</p>
                </div>
              </div>
            </div>
          </article>

          <Link href={`/rooms-suites/${nextRoom.id}`} aria-label={nextRoom.title} className="group relative hidden h-80 overflow-hidden lg:block">
            <Image src={nextRoom.image} alt={nextRoom.imageAlt} fill sizes="25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <span className="absolute inset-0 bg-[var(--color-primary-dark)]/10 transition-colors group-hover:bg-transparent" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};
