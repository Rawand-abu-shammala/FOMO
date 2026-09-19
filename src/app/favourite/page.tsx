// src/app/favourite/page.tsx
'use client';

import FavouriteCard from '../components/FavouriteCard';
import { tracks, type Track } from '../utils/tracksData';
import { useFavouriteTracks } from '@/hooks/useFavouriteTracks';

export default function FavouritePage() {
  const { favouriteTracks, removeFavouriteTrack } = useFavouriteTracks();

  // Filter the master list down to only favourites
  const favTracks: Track[] = tracks.filter((track) => favouriteTracks.includes(track.slug));

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
    // <div className=" flex-grow container mx-auto px-4 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-4">
    <div className="flex-grow container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-4">

    <h1 className="text-2xl font-bold">All Favourite</h1>

      {favTracks.map((track) => (
        <FavouriteCard
          key={track.slug}
          {...track}
          onRemove={removeFavouriteTrack}
        />
      ))}
    </div>
  );
}
