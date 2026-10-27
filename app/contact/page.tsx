import React from 'react';
import { HotelTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const templateData: HotelTemplateData = rawData;
  const sectionData = templateData?.categories?.Hotel?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-white)]">
      <div className="contents">
        <Header data={sectionData.Header?.variants?.HotelHeader1} overlay />
        <Breadcrumb data={commonData.contactBreadcrumb} ui={commonData.globalUI} />
      </div>
      
      <Contact data={sectionData.contact?.variants?.HotelContact1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
