// src/components/ArticleView.tsx
import Image from 'next/image';
import type { ArticleData } from '../utils/type';

export default function ArticleView({ article }: { article: ArticleData }) {
  if (!article) return null;
  return (
    <article className="flex-grow container mx-auto px-4 py-8">
      <div className="w-full mx-auto max-w-screen-sm md:max-w-2xl lg:max-w-3xl xl:max-w-[1100px]">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <p className="text-gray-600">{article.description}</p>
        </header>

        <div className="w-full mb-8">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg object-cover"
            priority
          />
        </div>

        <section className="prose prose-lg mx-auto mb-8 max-w-none">
          <p>{article.intro}</p>
        </section>

        <section className="prose prose-lg mx-auto space-y-12 max-w-none">
          {article.sections.map((sec, idx) => (
            <div key={idx}>
              <h2>{sec.title}</h2>
              {sec.paragraphs.map((para, pidx) => (
                <p key={pidx}>{para}</p>
              ))}
              {idx === Math.floor(article.sections.length / 2) && article.secondImage && (
                <div className="my-6">
                  <Image
                    src={article.secondImage}
                    alt={`${article.title} - image`}
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </section>

        {article.resources && article.resources.length > 0 && (
          <section className="mt-12 mx-auto max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">Resources</h2>
            <ul className="list-disc list-inside space-y-2">
              {article.resources.map((res, ridx) => (
                <li key={ridx}>
                  <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {res.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
