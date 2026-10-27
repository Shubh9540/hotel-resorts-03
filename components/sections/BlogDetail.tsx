import Image from 'next/image';
import Link from 'next/link';
import { FaComment, FaQuoteLeft, FaUser } from 'react-icons/fa';
import { BlogDetailProps } from '@/types/templates.types';

export const BlogDetail = ({ data, postId }: BlogDetailProps) => {
  if (!data) return null;

  const post = data.posts.find((item) => item.id === postId);
  if (!post) return null;

  const author = data.authors.find((item) => item.id === post.authorId);
  const recentPosts = data.recentPostIds
    .map((id) => data.posts.find((item) => item.id === id))
    .filter((item) => item !== undefined)
    .filter((item) => item.id !== post.id);

  return (
    <article className="bg-[var(--color-bg-light)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,2fr)_320px] lg:gap-10">
        <div className="min-w-0">
          <div className="relative aspect-[1.55/1] overflow-hidden">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 1024px) 68vw, 100vw" className="object-cover" />
            <span className="absolute bottom-0 right-5 bg-[var(--color-accent)] px-4 py-3 text-center text-xs font-semibold uppercase leading-5 text-white">{post.date}</span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[var(--color-text-light)] sm:text-sm">
            {author && <span className="flex items-center gap-2"><FaUser className="text-[var(--color-accent)]" aria-hidden="true" />{data.authorPrefix} {author.name}</span>}
            {post.comments && <span className="flex items-center gap-2"><FaComment className="text-[var(--color-accent)]" aria-hidden="true" />{data.detail.commentsLabel} ({post.comments})</span>}
          </div>

          <h1 className="mt-6 font-heading text-3xl font-semibold leading-tight text-[var(--color-primary)] sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-sm leading-7 text-[var(--color-text-light)] sm:text-base">{data.detail.introText}</p>
          {post.description && <p className="mt-3 text-sm leading-7 text-[var(--color-text-light)] sm:text-base">{post.description}</p>}

          <blockquote className="relative mt-6 bg-[var(--color-bg-alt)] px-6 py-6 sm:px-10 sm:py-8">
            <span className="absolute left-5 top-6 text-3xl text-[var(--color-accent)] sm:left-7" aria-hidden="true"><FaQuoteLeft /></span>
            <p className="border-l border-[var(--color-accent)] pl-10 font-heading text-lg leading-8 text-[var(--color-primary)] sm:text-xl">{data.detail.quoteText}</p>
            <p className="mt-4 text-right text-sm font-semibold text-[var(--color-primary)]">{data.detail.quoteAuthor} <span className="font-normal text-[var(--color-text-light)]">/ {data.detail.quoteRole}</span></p>
          </blockquote>

          <div className="mt-7 space-y-8">
            {data.detail.sections.map((section) => (
              <section key={section.id}>
                <h2 className="font-heading text-2xl font-semibold leading-tight text-[var(--color-primary)] sm:text-3xl">{section.number}. {section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-light)] sm:text-base">{section.description}</p>
                <div className="relative mt-5 aspect-[1.9/1] overflow-hidden">
                  <Image src={section.image} alt={section.imageAlt} fill sizes="(min-width: 1024px) 68vw, 100vw" className="object-cover" />
                </div>
              </section>
            ))}
          </div>

          <div className="mt-8 border-l-2 border-[var(--color-accent)] bg-[var(--color-bg-alt)] p-5 sm:p-6">
            <h2 className="font-heading text-2xl font-semibold text-[var(--color-primary)]">{data.detail.conclusionTitle}</h2>
            <p className="mt-2 text-sm leading-7 text-[var(--color-text-light)] sm:text-base">{data.detail.conclusionText}</p>
          </div>
        </div>

        <aside className="bg-[var(--color-bg-alt)] p-5 sm:p-6 lg:sticky lg:top-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--color-accent)]" aria-hidden="true" />
            <h2 className="font-heading text-2xl font-semibold text-[var(--color-primary)]">{data.detail.recentPostsTitle}</h2>
          </div>
          <div className="mt-5 space-y-6">
            {recentPosts.map((recent) => (
              <Link key={recent.id} href={recent.url} className="group block">
                <div className="relative aspect-[1.65/1] overflow-hidden">
                  <Image src={recent.image} alt={recent.imageAlt} fill sizes="(min-width: 1024px) 280px, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="mt-3 font-heading text-lg font-semibold leading-6 text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-accent)]">{recent.title}</h3>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </article>
  );
};
