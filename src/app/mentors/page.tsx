// mentors/page.tsx
'use client';
import { useSearchParams } from 'next/navigation';
import Card from '../components/CardMentors';
import Pagination from '../components/mentors/Pagination';
import { mentorsData } from '../utils/mentors';

export default function MentorListPage() {
  const params = useSearchParams();
  const page = parseInt(params.get('page') ?? '1', 10);
  const perPage = 6;
  const mentors = mentorsData.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(mentorsData.length / perPage);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
         {/* title  */}
  <div className="w-full text-center mb-8 px-4">
  <h1 className="text-2xl font-bold mb-4">
    Expert Tech Mentors – Guiding You to Success in the Digital World
  </h1>
  <p className="text-sm text-gray-600 mx-auto max-w-3xl line-clamp-2">
    Connect with top tech mentors who provide expert guidance in software
    development, AI, cybersecurity, and more. Gain industry insights, hands‑on
    advice, and career‑boosting strategies to accelerate your growth in the
    tech world.
  </p>
</div>

      {/* cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {mentors.map((m) => (
          <Card key={m.slug} {...m} />
        ))}
      </section>

      <Pagination pageNumber={page} pages={totalPages} route="/mentors" />
    </main>
  );
}
