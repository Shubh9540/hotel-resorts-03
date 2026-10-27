'use client';

import { useState } from 'react';
import { FaMinus, FaPlus, FaSpa } from 'react-icons/fa';
import { FaqProps } from '@/types/templates.types';

const renderDecorativeIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaSpa': return <FaSpa aria-hidden="true" />;
    default: return null;
  }
};

export const Faq = ({ data }: FaqProps) => {
  const [openItemId, setOpenItemId] = useState<string | null>(() => data?.initialOpenItemId ?? null);

  if (!data) return null;

  return (
    <section className="bg-[var(--color-bg-main)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[920px]">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-light)]">{data.eyebrow}</p>
          <span className="mx-auto mt-4 block h-px w-16 bg-[var(--color-primary-light)]" aria-hidden="true" />
          <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            <span>{data.title} </span>
            <span className="text-[var(--color-primary-light)]">{data.highlightedTitle}</span>
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3 text-[var(--color-primary-light)]">
            <span className="h-px w-12 bg-[var(--color-primary-light)]" aria-hidden="true" />
            <span className="text-xl">{renderDecorativeIcon(data.decorativeIcon)}</span>
            <span className="h-px w-12 bg-[var(--color-primary-light)]" aria-hidden="true" />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[var(--color-text)] sm:text-base sm:leading-7">{data.description}</p>
        </header>

        <div className="mt-8 space-y-3">
          {data.items.map((item) => {
            const isOpen = openItemId === item.id;
            const panelId = `faq-panel-${item.id}`;

            return (
              <article key={item.id} className="overflow-hidden border border-[var(--color-border)] bg-white shadow-[0_6px_20px_rgba(41,40,50,0.04)]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  aria-label={`${isOpen ? data.closeQuestionLabel : data.openQuestionLabel}: ${item.question}`}
                  onClick={() => setOpenItemId((currentId) => currentId === item.id ? null : item.id)}
                  className={`flex w-full items-center gap-4 px-4 py-4 text-left transition-colors sm:px-6 ${isOpen ? 'bg-[var(--color-bg-alt)]' : 'bg-white hover:bg-[var(--color-bg-alt)]'}`}
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-heading text-sm font-semibold ${isOpen ? 'bg-[var(--color-primary-light)] text-white' : 'bg-[var(--color-bg-alt)] text-[var(--color-primary-light)]'}`}>{item.number}</span>
                  <span className="hidden h-8 w-px bg-[var(--color-primary-light)]/45 sm:block" aria-hidden="true" />
                  <span className="min-w-0 flex-1 font-heading text-base font-medium text-[var(--color-heading)] sm:text-xl">{item.question}</span>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm ${isOpen ? 'bg-[var(--color-primary-light)] text-white' : 'bg-[var(--color-bg-alt)] text-[var(--color-primary-light)]'}`} aria-hidden="true">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                {isOpen && (
                  <div id={panelId} className="border-t border-[var(--color-border)] px-5 py-5 sm:pl-[86px] sm:pr-8">
                    <p className="text-sm leading-7 text-[var(--color-text)] sm:text-base">{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
