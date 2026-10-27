import { notFound } from 'next/navigation';
import rawData from '@/data/templates.json';
import { HotelTemplateData, RoomSuiteDetailsPageProps } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { RoomSuiteDetails } from '@/components/sections/RoomSuiteDetails';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function RoomSuiteDetailsPage({ params }: RoomSuiteDetailsPageProps) {
  const { id } = await params;
  const templateData: HotelTemplateData = rawData;
  const sectionData = templateData.categories.Hotel.sections;
  const commonData = templateData.common;
  const roomsData = sectionData.RoomsSuites?.variants?.HotelRoomsSuites1;
  const room = roomsData?.rooms.find((item) => item.id === id);

  if (!room || !roomsData || !commonData) notFound();

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-bg-main)]">
      <Header data={sectionData.Header?.variants?.HotelHeader1} overlay />
      <Breadcrumb data={room.breadcrumb} ui={commonData.globalUI} />
      <RoomSuiteDetails data={roomsData} room={room} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
