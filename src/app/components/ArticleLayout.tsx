// src/components/ArticleLayout.tsx
import Tab from '../components/tab';
import type { ArticleData } from '../utils/type';
import MentorNotes from './MentorNotes'; // client component
import ArticleContent from './ArticleContent';

type Props = {
  article: ArticleData;
  serverRole: 'student' | 'mentor' | null;
};

export default function ArticleLayout({ article, serverRole }: Props) {
  return (
    <>
      <Tab article={article} />
      <article className="flex-grow container mx-auto px-4 py-8">
        <ArticleContent article={article} />
        <div className="w-full mx-auto max-w-screen-sm md:max-w-2xl lg:max-w-3xl xl:max-w-[1100px]">
          {serverRole === 'mentor' && <MentorNotes slug={article.slug} />}
        </div>
      </article>
    </>
  );
}

