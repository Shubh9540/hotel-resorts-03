import rawData from '@/data/templates.json';
import { HotelTemplateData } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { RoomsSuites } from '@/components/sections/RoomsSuites';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function RoomsSuitesPage() {
  const templateData: HotelTemplateData = rawData;
  const sectionData = templateData.categories.Hotel.sections;
  const commonData = templateData.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-bg-main)]">
      <Header data={sectionData.Header?.variants?.HotelHeader1} overlay />
      <Breadcrumb data={commonData.roomsSuitesBreadcrumb} ui={commonData.globalUI} />
      <RoomsSuites data={sectionData.RoomsSuites?.variants?.HotelRoomsSuites1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
