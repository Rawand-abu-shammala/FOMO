// src/app/tracks/page.tsx
"use client";

// (no SSG/SSP prerender)
export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import TrackList from "./TrackList";
import { tracks } from "../utils/tracksData";
import Tab from "../components/tab";

export default function TrackPage() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  return (
    <>
      {/* Breadcrumb */}
      <Tab article={{ title: "Tracks" }} />

      <main className="flex flex-col min-h-screen">
        {/* Banner */}
        <section className="w-full">
          <div className="w-full overflow-hidden">
            <Image
              src="/assets/images/banner-tracks.svg"
              alt="Tech Tracks Banner"
              width={1400}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="mt-6 text-center px-4">
            <h1 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-bold">
              Explore The Future Of Tech With Our Specialized Tracks!
            </h1>
            <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Stay ahead in the tech industry with our expertly curated learning tracks.
            </p>
          </div>
        </section>

        {/* TrackList */}
        <section className="flex-grow bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <TrackList
              initialTracks={tracks}
              initialSearchTerm={initialSearch}
            />
          </div>
        </section>
      </main>
    </>
  );
}


