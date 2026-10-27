import React from 'react';
import { HotelTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUs } from '@/components/sections/AboutUs';
import { RoomsSuitesSlider } from '@/components/sections/RoomsSuitesSlider';
import { Facilities } from '@/components/sections/Facilities';
import { AmenitiesShowcase } from '@/components/sections/AmenitiesShowcase';
import { ResortStats } from '@/components/sections/ResortStats';
import { NearbyPlaces } from '@/components/sections/NearbyPlaces';
import { Testimonials } from '@/components/sections/Testimonials';
import { Blogs } from '@/components/sections/Blogs';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: HotelTemplateData = rawData;
  const sectionData = templateData?.categories?.Hotel?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <div className="contents">
        <Header data={sectionData.Header?.variants?.HotelHeader1} />
        <HeroSection data={sectionData.Hero?.variants?.HotelHero1} />
      </div>
      <AboutUs data={sectionData.AboutUs?.variants?.HotelAboutUs1} />
      <RoomsSuitesSlider data={sectionData.RoomsSuites?.variants?.HotelRoomsSuites1} />
      <Facilities data={sectionData.Facilities?.variants?.HotelFacilities1} />
      <AmenitiesShowcase data={sectionData.Amenities?.variants?.HotelAmenities1} />
      <ResortStats data={sectionData.ResortStats?.variants?.HotelResortStats1} />
      <NearbyPlaces data={sectionData.NearbyPlaces?.variants?.HotelNearbyPlaces1} />
      <Testimonials data={sectionData.Testimonials?.variants?.HotelTestimonials1} />
      <Blogs data={sectionData.Blogs?.variants?.HotelBlogs1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
