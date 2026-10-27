import Image from 'next/image';
import { HeroSectionProps } from '@/types/templates.types';

export const HeroSection = ({ data }: HeroSectionProps) => {
  if (!data) return null;

  return (
    <section className="relative h-[100svh] min-h-[520px] w-full overflow-hidden bg-[var(--color-primary-dark)] lg:min-h-[600px] lg:max-h-[900px]">
      <Image
        src={data.backgroundImage}
        alt={data.backgroundImageAlt}
        fill
        preload
        sizes="100vw"
        className="object-cover object-[58%_center] sm:object-center"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/25 to-transparent" aria-hidden="true" />
    </section>
  );
};
