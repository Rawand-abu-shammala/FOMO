import Image from 'next/image';
import type { ArticleData } from '../utils/type';

type Props = {
  article: ArticleData;
  resourcesClassName?: string;
};

export default function ArticleContent({ article, resourcesClassName }: Props) {
  return (
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
        {article.sections.map((section, index) => (
          <div key={index}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}
            {index === Math.floor(article.sections.length / 2) && article.secondImage && (
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
        <section className={`mt-12 mx-auto ${resourcesClassName ?? ''}`}>
          <h2 className="text-2xl font-semibold mb-4">Resources</h2>
          <ul className="list-disc list-inside space-y-2">
            {article.resources.map((resource, index) => (
              <li key={index}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
