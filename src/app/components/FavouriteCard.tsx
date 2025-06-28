// src/components/FavouriteCard.tsx
'use client';

import Image from 'next/image';
import Bag from '@/components/icons/bag';
import type { Track } from '../utils/tracksData';

interface FavouriteCardProps extends Track {
  /** Callback to remove this item from favourites */
  onRemove: (slug: string) => void;
}

export default function FavouriteCard({
  slug,
  title,
  description,
  image,
  onRemove,
}: FavouriteCardProps) {
  return (
    <div className="relative bg-gray-50 rounded-2xl shadow-sm p-4 flex items-center space-x-4">
      {/* Thumbnail (or placeholder if image is empty) */}
      <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>

      {/* Title & Description */}
      <div className="flex-1">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>

      {/* Remove button */}
      <button
        onClick={() => onRemove(slug)}
        aria-label="Remove from favourites"
        className="p-2 rounded-full text-gray-400 hover:text-red-500 transition"
      >
        <Bag className="w-5 h-5" />
      </button>
    </div>
  );
}
