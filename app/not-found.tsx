import React from 'react';
import { HotelTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { NotFoundSection } from '@/components/sections/NotFoundSection';

export default function NotFoundPage() {
  const templateData: HotelTemplateData = rawData;
  const sectionData = templateData?.categories?.Hotel?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-white)] min-h-screen flex flex-col">
      <Header data={sectionData.Header?.variants?.HotelHeader1} />
      
      <NotFoundSection data={commonData.notFound} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
