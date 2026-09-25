// src/components/ArticleView.tsx
import type { ArticleData } from '../utils/type';
import ArticleContent from './ArticleContent';

export default function ArticleView({ article }: { article: ArticleData }) {
  if (!article) return null;
  return (
    <article className="flex-grow container mx-auto px-4 py-8">
      <ArticleContent article={article} resourcesClassName="max-w-2xl" />
    </article>
  );
}
