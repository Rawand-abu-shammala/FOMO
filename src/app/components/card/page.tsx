// app/[slug]/page.tsx
import { pagesData } from "@/data/pagesData";
import { notFound } from "next/navigation";
// import { PageRenderer } from "./components/PageRenderer";
import { PageRenderer } from "../PageRenderer";

interface Props {
  params: { slug: string };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return pagesData.map((p) => ({ slug: p.slug }));
}

export default function TopicPage({ params }: Props) {
  const { slug } = params;
  const pageData = pagesData.find((p) => p.slug === slug);
  if (!pageData) {
    return notFound();
  }
  return <PageRenderer data={pageData} />;
}

export function generateMetadata({ params }: Props) {
  const pageData = pagesData.find((p) => p.slug === params.slug);
  if (!pageData) {
    return { title: "Not Found" };
  }
  return {
    title: pageData.seo?.title || pageData.title,
    description: pageData.seo?.description || pageData.subtitle,
    // يمكنك إضافة openGraph هنا إذا أردت
  };
}
