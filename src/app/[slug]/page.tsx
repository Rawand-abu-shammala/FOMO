
// 'use client'; 
// [slug]/page.tsx

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { articles } from '../utils/articles';
import { ArticleData } from '../utils/type';
import  Tab  from '../components/tab';

interface Params {
  params: { slug: string };
}

export default function ArticlePage({ params }: Params) {
  const article: ArticleData | undefined = articles.find((a) => a.slug === params.slug);
  if (!article) {
    notFound();
  }

  return (
    <>
    <Tab article={article} />

    <article className="max-w-4xl mx-auto py-12 px-4">
      
      {/* العنوان */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-600">{article.description}</p>
      </header>

      {/* الصورة الرئيسية عريضة */}
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

      {/* المقدمة */}
      <section className="prose prose-lg mx-auto mb-8">
        <p>{article.intro}</p>
      </section>

      {/* الأقسام */}
      <section className="prose prose-lg mx-auto space-y-12">
        {article.sections.map((sec, idx) => (
          <div key={idx}>
            <h2>{sec.title}</h2>
            {sec.paragraphs.map((para, pidx) => (
              <p key={pidx}>{para}</p>
            ))}
            {/* ننفذ إضافة الصورة الثانية بعد القسم الثالث مثلاً أو في مكان محدد */}
            {idx === Math.floor(article.sections.length / 2) && (
              <div className="my-6">
                <Image
                  src={article.secondImage}
                  alt={`${article.title} - image`}
                  width={1000}
                  height={500}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </section>

      {/* المصادر */}
      {article.resources && article.resources.length > 0 && (
        <section className="mt-12 mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Resources</h2>
          <ul className="list-disc list-inside space-y-2">
            {article.resources.map((res, ridx) => (
              <li key={ridx}>
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {res.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
    </>
  );
}
