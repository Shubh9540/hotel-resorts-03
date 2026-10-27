import Image from 'next/image';
import { NearbyPlacesProps } from '@/types/templates.types';

export const NearbyPlaces = ({ data }: NearbyPlacesProps) => {
  if (!data || data.places.length < 4) return null;
  return (
    <section className="bg-[var(--color-bg-main)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
        <header className="sm:col-span-2 lg:col-span-5 lg:pr-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-light)]">{data.eyebrow}</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-[var(--color-heading)] sm:text-4xl"><span className="block">{data.titleLine1}</span><span>{data.titleLine2} </span><span className="text-[var(--color-primary-light)]">{data.titleHighlight}</span></h2>
        </header>
        <div className="relative h-44 overflow-hidden sm:col-span-1 sm:h-52 lg:col-span-3 lg:h-56">
          <Image src={data.places[0].image} alt={data.places[0].imageAlt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
        </div>
        <div className="relative h-44 overflow-hidden sm:col-span-1 sm:h-52 lg:col-span-4 lg:h-56">
          <Image src={data.places[1].image} alt={data.places[1].imageAlt} fill sizes="(min-width:1024px) 34vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
        </div>
        <div className="relative h-60 overflow-hidden sm:col-span-1 sm:h-72 lg:col-span-6 lg:h-80">
          <Image src={data.places[2].image} alt={data.places[2].imageAlt} fill sizes="(min-width:1024px) 50vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
        </div>
        <div className="relative h-60 overflow-hidden sm:col-span-1 sm:h-72 lg:col-span-6 lg:h-80">
          <Image src={data.places[3].image} alt={data.places[3].imageAlt} fill sizes="(min-width:1024px) 50vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
        </div>
      </div>
    </section>
  );
};
