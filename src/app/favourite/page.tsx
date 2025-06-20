'use client';

import { useEffect, useState } from 'react';
import TrackCard from '../components/TrackCard';
import { tracks, type Track } from '../utils/tracksData';

export default function FavouritePage() {
  const [favs, setFavs] = useState<string[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favouriteTracks') || '[]') as string[];
    setFavs(stored);
  }, []);
// filter the original tracks based on the favorites list

  const favTracks: Track[] = tracks.filter(t => favs.includes(t.slug));

  if (favTracks.length === 0) {
    return (
      <div className="py-12 text-center text-gray-600">
        No favorite items yet.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold mb-6">المفضلة</h1>
      <h2>RAWAND</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favTracks.map(track => (
          <TrackCard key={track.slug} {...track} />
        ))}
      </div>
    </div>
  );
}
