import React from 'react';
import { HotelTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Blogs } from '@/components/sections/Blogs';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function BlogsPage() {
  const templateData: HotelTemplateData = rawData;
  const sectionData = templateData?.categories?.Hotel?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-white)]">
      <div className="contents">
        <Header data={sectionData.Header?.variants?.HotelHeader1} overlay />
        <Breadcrumb data={commonData.blogsBreadcrumb} ui={commonData.globalUI} />
      </div>
      <Blogs data={sectionData.Blogs?.variants?.HotelBlogs1} showAll />
      <Footer data={commonData.Footer} />
    </main>
  );
}
