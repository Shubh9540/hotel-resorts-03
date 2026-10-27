import React from 'react';
import { HotelTemplateData } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUs } from '@/components/sections/AboutUs';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { MissionVision } from '@/components/sections/MissionVision';
import { ResortStats } from '@/components/sections/ResortStats';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: HotelTemplateData = rawData;
  const sectionData = templateData?.categories?.Hotel?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <div className="contents">
        <Header data={sectionData.Header?.variants?.HotelHeader1} overlay />
        <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      </div>
      <AboutUs data={sectionData.AboutUs?.variants?.HotelAboutUs1} showButton={false} />
      <MissionVision data={sectionData.MissionVision?.variants?.HotelMissionVision1} />
      <ResortStats data={sectionData.ResortStats?.variants?.HotelResortStats1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.HotelWhyChooseUs1} />
      <Testimonials data={sectionData.Testimonials?.variants?.HotelTestimonials1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
