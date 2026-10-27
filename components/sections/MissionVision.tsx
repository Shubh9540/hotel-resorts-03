'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MissionVisionProps } from '@/types/templates.types';

export const MissionVision = ({ data }: MissionVisionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  if (!data || data.tabs.length === 0) return null;
  const activeTab = data.tabs[activeIndex];
  return (
    <section className="bg-[var(--color-bg-alt)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1180px]">
        <div role="tablist" className="mx-auto flex max-w-md border border-[var(--color-primary-light)]">
          {data.tabs.map((tab, index) => <button key={tab.id} type="button" role="tab" aria-selected={activeIndex === index} onClick={() => setActiveIndex(index)} className={`relative flex-1 px-5 py-3 text-sm font-medium transition-colors ${activeIndex === index ? 'bg-[var(--color-primary-light)] text-white' : 'bg-white text-[var(--color-primary-light)]'}`}>{tab.label}{activeIndex === index && <span className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-[var(--color-primary-light)]" aria-hidden="true" />}</button>)}
        </div>
        <div className="mt-5 grid grid-cols-1 overflow-hidden border border-[var(--color-border)] bg-white lg:grid-cols-2">
          <div className="relative min-h-64 sm:min-h-80"><Image src={activeTab.image} alt={activeTab.imageAlt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /></div>
          <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <Image src="/banner/section_bg_gold.webp" alt="" aria-hidden="true" width={320} height={320} className="pointer-events-none absolute bottom-0 right-0 w-48 opacity-10" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-primary-light)]">{activeTab.eyebrow}</p>
            <h2 className="relative mt-3 font-heading text-3xl font-semibold leading-tight text-[var(--color-heading)] sm:text-4xl">{activeTab.title}</h2>
            <p className="relative mt-4 text-sm leading-7 text-[var(--color-text)] sm:text-base">{activeTab.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
