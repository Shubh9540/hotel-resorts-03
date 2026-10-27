import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaConciergeBell, FaGift, FaHeart, FaSpa, FaSun, FaSwimmingPool, FaUtensils, FaUsers } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { RoomFeatureProps, RoomsSuitesProps } from '@/types/templates.types';

const renderFeatureIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaBed': return <FaBed aria-hidden="true" />;
    case 'FaConciergeBell': return <FaConciergeBell aria-hidden="true" />;
    case 'FaGift': return <FaGift aria-hidden="true" />;
    case 'FaHeart': return <FaHeart aria-hidden="true" />;
    case 'FaSpa': return <FaSpa aria-hidden="true" />;
    case 'FaSun': return <FaSun aria-hidden="true" />;
    case 'FaSwimmingPool': return <FaSwimmingPool aria-hidden="true" />;
    case 'FaUtensils': return <FaUtensils aria-hidden="true" />;
    case 'FaUsers': return <FaUsers aria-hidden="true" />;
    default: return null;
  }
};

const RoomFeature = ({ feature }: RoomFeatureProps) => (
  <div className="flex min-w-0 flex-col items-center text-center">
    <span className="text-2xl text-[var(--color-primary-light)] sm:text-3xl">{renderFeatureIcon(feature.icon)}</span>
    <span className="mt-2 text-xs font-medium leading-5 text-[var(--color-text)] sm:text-sm">{feature.title}</span>
  </div>
);

export const RoomsSuites = ({ data }: RoomsSuitesProps) => {
  if (!data) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-main)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <Image src="/banner/section_bg_gold.webp" alt="" aria-hidden="true" width={520} height={520} className="pointer-events-none absolute -right-20 top-0 hidden w-[420px] opacity-10 lg:block" />
      <div className="relative mx-auto w-full max-w-[1180px]">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-light)]">{data.eyebrow}</p>
          <span className="mx-auto mt-3 block h-px w-16 bg-[var(--color-primary-light)]" aria-hidden="true" />
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            <span>{data.title} </span><span className="text-[var(--color-primary-light)]">{data.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text)] sm:text-base sm:leading-7">{data.description}</p>
        </header>

        <div className="mt-8 grid grid-cols-2 gap-5 border-y border-[var(--color-border)] py-6 sm:grid-cols-4 lg:mt-10 lg:gap-0">
          {data.overviewFeatures.map((feature, index) => (
            <div key={feature.id} className={`${index > 0 ? 'sm:border-l sm:border-[var(--color-border)]' : ''} px-2 sm:px-5`}>
              <RoomFeature feature={feature} />
              {feature.description && <p className="mt-1 text-center text-xs leading-5 text-[var(--color-text-light)]">{feature.description}</p>}
            </div>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
          {data.rooms.map((room, index) => (
            <article key={room.id} className="group flex h-full flex-col overflow-hidden border border-[var(--color-border)] bg-white shadow-[0_12px_34px_rgba(41,40,50,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(41,40,50,0.13)]">
              <Link href={`/rooms-suites/${room.id}`} aria-label={room.title} className="relative block h-52 overflow-hidden sm:h-56 lg:h-64">
                <Image src={room.image} alt={room.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                {index === 0 && <span className="absolute left-3 top-3 bg-[var(--color-primary-light)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">{data.popularLabel}</span>}
              </Link>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <Link href={`/rooms-suites/${room.id}`} className="font-heading text-xl font-semibold text-[var(--color-heading)] transition-colors hover:text-[var(--color-primary-light)] sm:text-2xl">{room.title}</Link>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary-light)]">{room.category}</p>
                  </div>
                  <div className="shrink-0 sm:text-right">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-light)]">{data.startingFromLabel}</p>
                    <p className="font-heading text-2xl font-semibold text-[var(--color-primary-light)]">{room.price}</p>
                    <p className="text-xs text-[var(--color-text-light)]">{room.nights}</p>
                  </div>
                </div>
                <p className="mt-2 min-h-12 line-clamp-2 text-sm leading-6 text-[var(--color-text)]">{room.description}</p>
                <div className="mt-4 grid min-h-20 grid-cols-2 items-start gap-3 border-t border-[var(--color-border)] pt-4 sm:grid-cols-4">
                  {room.features.map((feature) => <RoomFeature key={feature.id} feature={feature} />)}
                </div>
                <div className="mt-auto pt-4">
                  <Link href={`/rooms-suites/${room.id}`} className="inline-flex min-h-10 items-center justify-center gap-3 bg-[var(--color-primary-light)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[var(--color-primary)] hover:shadow-lg">
                    {data.viewPackageLabel}<FiArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
