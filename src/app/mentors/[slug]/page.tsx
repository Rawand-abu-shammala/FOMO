// src/app/mentors/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Tab from '../../components/tab';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import { mentorsData } from '../../utils/mentors';

// ***************************************
// Static params for SSG
// ***************************************
export function generateStaticParams() {
  return mentorsData.map((mentor) => ({ slug: mentor.slug }));
}

// ***************************************
// Dynamic metadata (async params)
// ***************************************
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mentor = mentorsData.find((m) => m.slug === slug);
  return {
    title: mentor?.name ?? 'Mentor Profile',
  };
}

// ***************************************
// Page component (async params)
// ***************************************
export default async function MentorProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mentor = mentorsData.find((m) => m.slug === slug);
  if (!mentor) notFound();

  return (
    <main className="container mx-auto p-8">
      <Tab title={mentor.name} />

      <div className="flex flex-col-reverse lg:flex-row items-start gap-8 mt-6">
        {/* Left: Info */}
        <div className="flex-1 p-8 space-y-8">
          <div className="space-y-4">
            <div className="leading-relaxed">
              <span className="font-bold">Name:</span>{' '}
              <span className="text-gray-700">{mentor.name}</span>
            </div>
            <div className="leading-relaxed">
              <span className="font-bold">Major:</span>{' '}
              <span className="text-gray-700">{mentor.major}</span>
            </div>
            <div className="leading-relaxed">
              <span className="font-bold">Welcome Statement:</span>{' '}
              <span className="text-gray-700">{mentor.welcome}</span>
            </div>
            <div className="leading-relaxed">
              <span className="font-bold">Title:</span>{' '}
              <span className="text-gray-700">{mentor.title}</span>
            </div>
            <div className="leading-relaxed">
              <span className="font-bold">Skills:</span>{' '}
              <span className="text-gray-700">{mentor.skills.join(', ')}</span>
            </div>
            <div className="leading-relaxed">
              <span className="font-bold">Years of Experience:</span>{' '}
              <span className="text-gray-700">{mentor.experience} years</span>
            </div>
            <div className="leading-relaxed">
              <span className="font-bold">Bio:</span>{' '}
              <span className="text-gray-700">{mentor.bio}</span>
            </div>
          </div>

          {/* Action Buttons using shadcn/ui */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="w-48 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
              Book session
            </Button>
            <Button
              variant="outline"
              className="w-48 px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition cursor-pointer"
              asChild
            >
              <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="w-full lg:w-[300px] flex-shrink-0">
          <Image
            src={mentor.image}
            alt={mentor.name}
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </main>
  );
}
