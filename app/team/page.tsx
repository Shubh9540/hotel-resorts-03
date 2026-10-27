import rawData from '@/data/templates.json';
import { HotelTemplateData } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { OurTeam } from '@/components/sections/OurTeam';

export const dynamic = 'force-dynamic';

export default function TeamPage() {
  const templateData: HotelTemplateData = rawData;
  const sectionData = templateData.categories.Hotel.sections;
  const commonData = templateData.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-bg-main)]">
      <Header data={sectionData.Header?.variants?.HotelHeader1} overlay />
      <Breadcrumb data={commonData.teamBreadcrumb} ui={commonData.globalUI} />
      <OurTeam data={sectionData.OurTeam?.variants?.HotelOurTeam1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
