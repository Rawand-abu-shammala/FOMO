// src/app/track/TrackList.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import Card from '../components/Card';
import { Track } from '../utils/tracksData'; 

interface TrackListProps {
  initialTracks: Track[];
  initialSearchTerm: string;
}

export default function TrackList({ initialTracks, initialSearchTerm }: TrackListProps) {
  // local state for the search term
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  // synchronize state when initialSearchTerm changes (on navigation or query change)
  useEffect(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);

  // compute the filtered list based on searchTerm
  const filteredTracks = useMemo(() => {
    // if the field is empty, show all tracks
    if (!searchTerm) {
      return initialTracks;
    }
    const lower = searchTerm.toLowerCase();
    return initialTracks.filter(
      (t) =>
        t.title.toLowerCase().includes(lower) ||
        t.description.toLowerCase().includes(lower)
    );
  }, [searchTerm, initialTracks]);

  return (
    <div className="flex flex-col">
      {/* show search status message when there's input */}
      {searchTerm && (
        <p className="mb-4 text-sm text-gray-700">
          Showing results for: “<span className="font-semibold">{searchTerm}</span>”
        </p>
      )}

      {/* if there are any matches, render the grid of cards */}
      {filteredTracks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTracks.map((track) => (
            <Card
              key={track.slug}
              href={`/tracks/${track.slug}`} // link to detail page
              slug={track.slug}
              title={track.title}
              description={track.description}
              image={track.image}
            />
          ))}
        </div>
      ) : (
        // when no matches are found
        <p className="text-center text-gray-600">
          No results found for “{searchTerm}”
        </p>
      )}
    </div>
  );
}
