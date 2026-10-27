'use client';

import { useEffect, useRef, useState } from 'react';
import { FaAward, FaHotel, FaSmile, FaUsers } from 'react-icons/fa';
import { ResortStatsProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaAward': return <FaAward aria-hidden="true" />;
    case 'FaSmile': return <FaSmile aria-hidden="true" />;
    case 'FaUsers': return <FaUsers aria-hidden="true" />;
    case 'FaHotel': return <FaHotel aria-hidden="true" />;
    default: return null;
  }
};

export const ResortStats = ({ data }: ResortStatsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!data) return;
    const section = sectionRef.current;
    if (!section) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const animate = (time: number) => {
        const next = Math.min((time - start) / data.counterDurationMs, 1);
        setProgress(next);
        if (next < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.25 });
    observer.observe(section);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [data]);

  if (!data) return null;
  return (
    <section ref={sectionRef} className="relative flex min-h-56 items-center bg-cover bg-center px-4 py-10 sm:min-h-60 sm:px-6 lg:min-h-64 lg:px-8 lg:py-12" style={{ backgroundImage: `url('${data.backgroundImage}')` }}>
      <span className="absolute inset-0 z-0 bg-[#12110f]/75" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {data.items.map((item) => (
          <div key={item.id} className="flex items-center justify-center gap-5 text-white">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-white/60 bg-[var(--color-primary-light)]/85 text-3xl shadow-[0_0_0_3px_rgba(255,255,255,0.18)]">
              {renderIcon(item.icon)}
            </span>
            <div>
              <p className="font-heading text-4xl font-semibold leading-none lg:text-5xl">{Math.round(item.value * progress)}{item.suffix}</p>
              <p className="mt-2 text-base font-semibold text-white/90">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
