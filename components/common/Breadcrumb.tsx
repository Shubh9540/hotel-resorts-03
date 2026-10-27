import React from 'react';
import Link from 'next/link';
import { BreadcrumbProps } from '@/types/templates.types';

export const Breadcrumb = ({ data, ui }: BreadcrumbProps) => {
  if (!data || !ui) return null;

  return (
    <section
      className={`relative flex w-full items-center justify-center bg-cover bg-center px-4 ${data.bgImage ? 'min-h-[300px] pb-9 pt-28 sm:min-h-[340px] sm:pb-11 sm:pt-32 lg:pt-36' : 'bg-[var(--color-bg-main)] py-8 sm:py-9'}`}
      style={data.bgImage ? { backgroundImage: `url('${data.bgImage}')` } : undefined}
    >
      {data.bgImage && <span className="absolute inset-0 bg-[rgba(18,17,15,0.58)]" aria-hidden="true" />}
      <div
        className={`relative z-10 flex min-h-28 w-full max-w-[1005px] flex-col items-center justify-center px-5 py-5 text-center ${data.bgImage ? 'bg-transparent shadow-none' : 'bg-[var(--color-bg-card)] shadow-[0_4px_24px_rgba(0,0,0,0.06)]'}`}
      >
        <h1 className={`font-heading text-3xl font-semibold leading-tight sm:text-4xl ${data.bgImage ? 'text-white sm:text-[50px]' : 'text-[var(--color-heading)] sm:text-[28px]'}`}>
          {data.title}
        </h1>

        <div className={`mt-3 flex flex-wrap items-center justify-center gap-3 text-xs font-medium sm:text-sm ${data.bgImage ? 'uppercase tracking-wide text-white' : 'text-[var(--color-text)]'}`}>
          {data.paths.map((path, index) => (
            <React.Fragment key={path.id}>
              {path.url ? (
                <Link href={path.url} className={`transition-colors duration-300 ${data.bgImage ? 'hover:text-[var(--color-secondary)]' : 'hover:text-[var(--color-primary)]'}`}>
                  {path.label}
                </Link>
              ) : (
                <span>{path.label}</span>
              )}
              {index < data.paths.length - 1 && <span className={data.bgImage ? 'text-white/80' : 'text-[var(--color-text-light)]'}>{ui.breadcrumbSeparator}</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
