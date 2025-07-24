// src/app/mentors-blog/page.tsx

import MentorsBlogClient from "../components/mentors/MentorsBlogClient";
import { SearchParams } from "../utils/type";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  // Await the promise to get the actual searchParams
  const { category, pageNumber } = await searchParams;

  // Use default values if none are provided in the URL
  const initialCategory = category || "All";
  const initialPage = parseInt(pageNumber || "1", 10);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      {/* You can add a breadcrumb or page title here */}
      <MentorsBlogClient
        initialCategory={initialCategory}
        initialPage={initialPage}
      />
    </main>
  );
}

