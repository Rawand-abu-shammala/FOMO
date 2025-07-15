// src/app/mentors-blog/page.tsx
import MentorsBlogClient from "../components/mentors/MentorsBlogClient";
import { SearchParams } from "../utils/type";

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  // Read variables from the URL
  const initialCategory = searchParams.category || "All";
  const initialPage = parseInt(searchParams.pageNumber || "1", 10);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      {/* Here you can add a breadcrumb or page title if you want */}
      <MentorsBlogClient
        initialCategory={initialCategory}
        initialPage={initialPage}
      />
    </main>
  );
}
