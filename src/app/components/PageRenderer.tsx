// src/components/PageRenderer.tsx
import Image from "next/image";
import { PageData } from "@/data/types";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  data: PageData;
}

export function PageRenderer({ data }: Props) {
  return (
    <main className="container mx-auto py-8 px-4">
      {/* Header / Hero */}
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-bold">{data.title} RawandK</h1>
        {data.subtitle && (
          <p className="mt-2 text-lg text-gray-600">{data.subtitle}</p>
        )}
        {data.heroImageUrl && (
          <div className="mt-4 w-full max-w-4xl mx-auto">
            <Image
              src={data.heroImageUrl}
              alt={data.heroImageAlt || data.title}
              width={1200}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>
        )}
      </section>

      {/* Sections */}
      {data.sections.map((section, idx) => {
        // إذا القسم يحتوي فقط على صورة (heading فارغ)، نعرض الصورة بدون بطاقة عنوان
        if (!section.heading && section.imageUrl) {
          return (
            <div key={idx} className="mb-6 w-full">
              <Image
                src={section.imageUrl}
                alt={section.imageAlt || ""}
                width={1200}
                height={500}
                className="object-cover rounded-lg mx-auto"
              />
            </div>
          );
        }
        return (
          <Card key={idx} className="mb-6">
            <CardContent>
              {section.heading && (
                <h2 className="text-2xl font-semibold mb-2">{section.heading}</h2>
              )}
              {section.paragraphs?.map((p, pi) => (
                <p key={pi} className="mb-2 leading-relaxed text-gray-700">
                  {p}
                </p>
              ))}
              {section.listItems && (
                <ul className="list-disc list-inside mb-2 text-gray-700">
                  {section.listItems.map((item, li) => (
                    <li key={li}>{item}</li>
                  ))}
                </ul>
              )}
              {section.imageUrl && section.heading && (
                <div className="mt-4 w-full">
                  <Image
                    src={section.imageUrl}
                    alt={section.imageAlt || section.heading}
                    width={800}
                    height={400}
                    className="rounded"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}

      {/* Resources */}
      {data.resources && data.resources.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Resources</h2>
          <ul className="list-disc list-inside text-blue-600">
            {data.resources.map((res, ri) => (
              <li key={ri} className="mb-1">
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {res.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
