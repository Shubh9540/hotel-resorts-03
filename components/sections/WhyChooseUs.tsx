import Image from 'next/image';
import { FaConciergeBell, FaCrown, FaShieldAlt, FaSpa } from 'react-icons/fa';
import { WhyChooseUsProps } from '@/types/templates.types';

const renderFeatureIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaCrown': return <FaCrown aria-hidden="true" />;
    case 'FaSpa': return <FaSpa aria-hidden="true" />;
    case 'FaShieldAlt': return <FaShieldAlt aria-hidden="true" />;
    case 'FaConciergeBell': return <FaConciergeBell aria-hidden="true" />;
    default: return null;
  }
};

export const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  if (!data) return null;
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-main)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <Image src="/banner/section_bg_gold.webp" alt="" aria-hidden="true" width={520} height={520} className="pointer-events-none absolute right-0 top-0 hidden w-[430px] opacity-10 lg:block" />
      <div className="relative mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-light)]">{data.eyebrow}</p>
          <span className="mt-3 block h-px w-16 bg-[var(--color-primary-light)]" aria-hidden="true" />
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">{data.title} <span className="text-[var(--color-primary-light)]">{data.highlight}</span></h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--color-text)] sm:text-base">{data.description}</p>
          <div className="mt-6 space-y-4">
            {data.features.map((feature) => <article key={feature.id} className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-primary-light)] text-lg text-[var(--color-primary-light)]">{renderFeatureIcon(feature.icon)}</span><div><h3 className="font-heading text-lg font-semibold text-[var(--color-heading)]">{feature.title}</h3><p className="mt-1 text-sm leading-5 text-[var(--color-text)]">{feature.description}</p></div></article>)}
          </div>
        </div>
        <div className="relative mx-auto min-h-[520px] w-full max-w-xl">
          <div className="absolute bottom-0 left-0 h-[47%] w-[54%] overflow-hidden border-4 border-white shadow-xl"><Image src={data.lowerImage} alt={data.lowerImageAlt} fill sizes="28vw" className="object-cover" /></div>
          <div className="absolute right-0 top-0 h-[78%] w-[62%] overflow-hidden border border-[var(--color-primary-light)] p-2"><div className="relative h-full w-full overflow-hidden"><Image src={data.mainImage} alt={data.mainImageAlt} fill sizes="35vw" className="object-cover" /></div></div>
          <div className="absolute left-[15%] top-[16%] z-10 flex h-36 w-48 flex-col items-center justify-center border border-[var(--color-primary-light)] bg-[var(--color-bg-alt)] px-4 text-center shadow-lg"><FaCrown className="text-xl text-[var(--color-primary-light)]" aria-hidden="true" /><p className="mt-2 font-heading text-lg font-semibold text-[var(--color-heading)]">{data.badgeTitle}</p></div>
        </div>
      </div>
    </section>
  );
};
