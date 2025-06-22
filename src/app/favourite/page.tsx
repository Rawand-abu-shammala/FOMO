// src/app/favourite/page.tsx
'use client';

import { useEffect, useState } from 'react';
import FavouriteCard from '../components/FavouriteCard';
import { tracks, type Track } from '../utils/tracksData';

const FAV_KEY = 'favouriteTracks';

export default function FavouritePage() {
  const [favs, setFavs] = useState<string[]>([]);

  // Load favourite slugs from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(FAV_KEY) || '[]') as string[];
    setFavs(stored);
  }, []);

  // Remove a slug from both state and localStorage
  const handleRemove = (slug: string) => {
    const next = favs.filter(s => s !== slug);
    setFavs(next);
    localStorage.setItem(FAV_KEY, JSON.stringify(next));
  };

  // Filter the master list down to only favourites
  const favTracks: Track[] = tracks.filter((t) => favs.includes(t.slug));

  // Empty state
  if (favTracks.length === 0) {
    return (
      <div className="py-12 text-center text-gray-600">
        No favourite items yet.
      </div>
    );
  }

  // Render grid of FavouriteCard
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-4">
      <h1 className="text-2xl font-bold">All Favourite</h1>

      {favTracks.map((track) => (
        <FavouriteCard
          key={track.slug}
          {...track}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
}
