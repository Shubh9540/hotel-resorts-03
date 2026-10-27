import { FaBell, FaCar, FaConciergeBell, FaSwimmingPool, FaUtensils, FaWifi } from 'react-icons/fa';
import { FacilitiesProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaConciergeBell': return <FaConciergeBell aria-hidden="true" />;
    case 'FaBell': return <FaBell aria-hidden="true" />;
    case 'FaWifi': return <FaWifi aria-hidden="true" />;
    case 'FaUtensils': return <FaUtensils aria-hidden="true" />;
    case 'FaSwimmingPool': return <FaSwimmingPool aria-hidden="true" />;
    case 'FaCar': return <FaCar aria-hidden="true" />;
    default: return null;
  }
};

export const Facilities = ({ data }: FacilitiesProps) => {
  if (!data) return null;
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-alt)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1180px]">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-light)]">{data.eyebrow}</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-[var(--color-heading)] sm:text-4xl">{data.title}</h2>
        </header>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <article key={item.id} className="relative bg-white px-5 py-7 text-center shadow-[0_8px_24px_rgba(41,40,50,0.05)] transition-transform duration-300 hover:-translate-y-1">
              <span className="absolute left-1/2 top-0 h-1 w-14 -translate-x-1/2 bg-[var(--color-primary-light)]" aria-hidden="true" />
              <span className="mx-auto flex h-16 w-16 items-center justify-center text-4xl text-[var(--color-primary-light)]">{renderIcon(item.icon)}</span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-[var(--color-heading)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text)]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
