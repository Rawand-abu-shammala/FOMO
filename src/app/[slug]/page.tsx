// src/app/[slug]/page.tsx
import { notFound } from 'next/navigation';
import ArticleLayout from '../components/ArticleLayout';
import { articles } from '../utils/articles';
import { getUserRoleFromCookie } from '@/lib/session';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const role = await getUserRoleFromCookie(); // 'student' | 'mentor' | null

  return <ArticleLayout article={article} serverRole={role ?? null} />;
}

