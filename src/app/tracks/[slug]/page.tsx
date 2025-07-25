// src/app/tracks/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { tracks } from '../../utils/tracksData';

export function generateStaticParams() {
  return tracks.map((track) => ({ slug: track.slug }));
}

export default async function TrackDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // نظرة: params هي Promise، لذلك نستخدم await
  const { slug } = await params;

  const track = tracks.find((t) => t.slug === slug);
  if (!track) notFound();

  return (
    <article className="max-w-4xl mx-auto py-12 px-4">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm mb-6">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/tracks" className="text-gray-600 hover:text-gray-900">
          Tracks
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-900 font-medium">{track.title}</span>
      </nav>

      {/* Title */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">{track.title}</h1>
        <p className="text-gray-600">{track.description}</p>
      </header>

      {/* Image */}
      <div className="w-full mb-8">
        <Image
          src={track.image}
          alt={track.title}
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg object-cover"
          priority
        />
      </div>

      {/* Details */}
      <section className="prose prose-lg mx-auto space-y-6">
        <p>
          In the <strong>{track.title}</strong> track, you will learn the
          essential skills and tools to get started hands‑on.
        </p>
        <h2>What You Will Learn</h2>
        <ul className="list-disc list-inside">
          <li>Introduction to {track.title}</li>
          <li>Key tools and techniques</li>
          <li>Hands‑on projects to deepen your experience</li>
          <li>Tips for building your portfolio and pushing your project to
          GitHub</li>
        </ul>
        <h2>Prerequisites</h2>
        <p>
          You should have a solid foundation in programming
          (JavaScript/TypeScript) or relevant experience depending on the
          track.
        </p>
      </section>
    </article>
  );
}

