import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { BlogsProps } from '@/types/templates.types';

export const Blogs = ({ data, showAll = false }: BlogsProps) => {
  if (!data) return null;

  const selectedIds = showAll ? data.listingPostIds : data.homePostIds;
  const posts = selectedIds
    .map((id) => data.posts.find((post) => post.id === id))
    .filter((post) => post !== undefined);

  if (posts.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-light)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <Image src="/banner/section_bg.webp" alt="" aria-hidden="true" width={560} height={560} className="pointer-events-none absolute -right-20 top-0 hidden w-[420px] opacity-[0.06] lg:block" />
      <div className="relative mx-auto w-full max-w-[1180px]">
        <div className={showAll ? 'max-w-3xl' : 'flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between'}>
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">{showAll ? data.listingEyebrow : data.homeSubtitle}</p>
            <span className="mt-2 block h-px w-10 bg-[var(--color-accent)]" aria-hidden="true" />
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-[var(--color-primary)] sm:text-4xl">
              {showAll ? data.listingTitle : data.latestTitle} <span className="text-[var(--color-accent)]">{showAll ? data.listingHighlight : data.latestHighlight}</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-text-light)] sm:text-base">{showAll ? data.listingDescription : data.popularDescription}</p>
          </header>
          {!showAll && <Link href="/blog" className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)] transition-colors hover:text-[var(--color-primary)]">{data.viewAllText}<FiArrowRight aria-hidden="true" /></Link>}
        </div>

        <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id}>
              <Link href={post.url} className="group relative block aspect-[1.55/1] overflow-hidden">
                <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </Link>
              <p className="mt-3 flex items-center gap-2 text-xs font-medium text-[var(--color-accent)]">
                <span className="h-px w-8 bg-[var(--color-accent)]" aria-hidden="true" />
                <span>{post.category}</span>
                <span aria-hidden="true">•</span>
                <span>{post.date}</span>
              </p>
              <Link href={post.url} className="mt-2 block font-heading text-xl font-semibold leading-7 text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]">{post.title}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
