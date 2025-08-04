// src/app/tracks/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { tracks } from '../../utils/tracksData';
import { AllArticles } from '../../components/mentors/AllArticles';

export function generateStaticParams() {
  return tracks.map(track => ({ slug: track.slug }));
}

export default async function TrackDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const track = tracks.find(t => t.slug === slug);
  if (!track) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-8 text-sm text-gray-500 mb-4 flex items-center pl-6">
        <Link href="/home" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/tracks" className="text-gray-600 hover:text-gray-900">
          Tracks
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-900 font-medium">{track.title}</span>
      </div>

      <article className="max-w-4xl mx-auto py-12 px-4">
        {/* Title and description */}
        <section className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">{track.title}</h1>
          <p className="text-gray-600">{track.description}</p>
        </section>

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

        {/* Content under the image */}
        <section className="max-w-4xl mx-auto mb-12 px-4">
          <p className="text-gray-700 leading-relaxed">
            This track has been carefully crafted to give you a comprehensive,
            hands-on understanding of <strong>{track.title}</strong>. You’ll start
            with the fundamentals and progress to advanced techniques through
            practical projects and exercises designed to build your skills with
            confidence.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Along the way, you’ll learn how to choose the right tools, gain a
            deeper understanding of your users, and design visually appealing,
            user-friendly interfaces. Get ready to dive deeply into the world of
            digital design.
          </p>
        </section>

        {/* Details */}
        <section className="prose prose-lg mx-auto space-y-6 mb-12 px-4">
          <h2>What You Will Learn</h2>
          <ul className="list-disc list-inside">
            <li>Introduction to {track.title}</li>
            <li>Key tools and techniques</li>
            <li>Hands-on projects to deepen your experience</li>
            <li>Tips for building a professional portfolio</li>
          </ul>
          <h2>Prerequisites</h2>
          <p>
            You should have a solid foundation in programming (JavaScript/TypeScript)
            or relevant experience depending on the track.
          </p>
        </section>
      </article>

      {/* All Articles — only on the UX/UI Design page */}
      {track.slug === 'ux-ui-design' && <AllArticles />}
    </>
  );
}





