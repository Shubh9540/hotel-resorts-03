import Image from 'next/image';
import { FaBinoculars, FaHiking, FaLandmark, FaSpa, FaSwimmer, FaUtensils } from 'react-icons/fa';
import { ActivitiesExperiencesProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaSwimmer': return <FaSwimmer aria-hidden="true" />;
    case 'FaHiking': return <FaHiking aria-hidden="true" />;
    case 'FaUtensils': return <FaUtensils aria-hidden="true" />;
    case 'FaSpa': return <FaSpa aria-hidden="true" />;
    case 'FaLandmark': return <FaLandmark aria-hidden="true" />;
    case 'FaBinoculars': return <FaBinoculars aria-hidden="true" />;
    default: return null;
  }
};

export const ActivitiesExperiences = ({ data }: ActivitiesExperiencesProps) => {
  if (!data) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-main)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1180px]">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-light)]">{data.eyebrow}</p>
          <span className="mx-auto mt-4 block h-px w-16 bg-[var(--color-primary-light)]" aria-hidden="true" />
          <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            <span className="block">{data.titleLine1}</span>
            <span>{data.titleLine2} </span>
            <span className="text-[var(--color-primary-light)]">{data.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[var(--color-text)] sm:text-base sm:leading-7">{data.description}</p>
        </header>

        <div className="mt-8 space-y-8 lg:mt-10 lg:space-y-5">
          {data.items.map((item, index) => (
            <article key={item.id} className="grid grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-10">
              <div className={`relative h-60 overflow-hidden sm:h-72 lg:h-80 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-center transition-transform duration-700 hover:scale-105" />
              </div>

              <div className={`flex items-start gap-4 px-1 sm:gap-5 sm:px-5 lg:px-7 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-alt)] text-2xl text-[var(--color-primary-light)] sm:h-20 sm:w-20 sm:text-3xl">
                  {renderIcon(item.icon)}
                </span>
                <div className="min-w-0 pt-1">
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-xl font-semibold text-[var(--color-primary-light)]">{item.number}</span>
                    <span className="h-px w-12 bg-[var(--color-primary-light)]/70" aria-hidden="true" />
                  </div>
                  <h3 className="mt-1 font-heading text-xl font-semibold text-[var(--color-heading)] sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text)] sm:text-base sm:leading-7">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
