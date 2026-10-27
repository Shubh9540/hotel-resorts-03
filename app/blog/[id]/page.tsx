import React from 'react';
import { notFound, redirect } from 'next/navigation';
import rawData from '@/data/templates.json';
import { BlogDetailsPageProps, HotelTemplateData } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogDetail } from '@/components/sections/BlogDetail';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { id } = await params;
  const templateData: HotelTemplateData = rawData;
  const sectionData = templateData?.categories?.Hotel?.sections;
  const commonData = templateData?.common;
  const blogData = sectionData?.Blogs?.variants?.HotelBlogs1;
  const selectedPost = blogData?.posts.find((post) => post.id === blogData.detailPostId);

  if (!sectionData || !commonData || !commonData.blogDetailBreadcrumb) return null;
  if (!blogData || !selectedPost) notFound();
  if (id !== blogData.detailPageUrl.split('/').pop()) redirect(blogData.detailPageUrl);

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-white)]">
      <div className="contents">
        <Header data={sectionData.Header?.variants?.HotelHeader1} overlay />
        <Breadcrumb data={commonData.blogDetailBreadcrumb} ui={commonData.globalUI} />
      </div>
      <BlogDetail data={blogData} postId={blogData.detailPostId} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
