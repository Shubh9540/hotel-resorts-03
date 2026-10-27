import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaDumbbell, FaHiking, FaSpa, FaSwimmingPool, FaUtensils } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { AmenitiesProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaSwimmingPool': return <FaSwimmingPool aria-hidden="true" />;
    case 'FaUtensils': return <FaUtensils aria-hidden="true" />;
    case 'FaSpa': return <FaSpa aria-hidden="true" />;
    case 'FaDumbbell': return <FaDumbbell aria-hidden="true" />;
    case 'FaBed': return <FaBed aria-hidden="true" />;
    case 'FaHiking': return <FaHiking aria-hidden="true" />;
    default: return null;
  }
};

export const AmenitiesShowcase = ({ data }: AmenitiesProps) => {
  if (!data) return null;
  return (
    <section id="amenities" className="bg-[var(--color-bg-main)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-light)]">{data.eyebrow}</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-[var(--color-heading)] sm:text-4xl">{data.titleLine1} <span className="text-[var(--color-primary-light)]">{data.titleHighlight}</span></h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-text)]">{data.description}</p>
          </header>
          <Link href="/amenities" className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-light)]">{data.eyebrow}<FiArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.slice(0, 4).map((item) => (
            <article key={item.id} className="group bg-white shadow-[0_8px_24px_rgba(41,40,50,0.08)]">
              <div className="relative h-48 overflow-hidden"><Image src={item.image} alt={item.imageAlt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /></div>
              <div className="relative px-4 pb-4 pt-10 text-center">
                <span className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[var(--color-primary-light)] text-xl text-white shadow-md">
                  {renderIcon(item.icon)}
                </span>
                <h3 className="font-heading text-lg font-semibold text-[var(--color-heading)]">{item.title}</h3>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-[var(--color-text)]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
