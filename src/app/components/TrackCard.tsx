// // src/components/TrackCard.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { CardType } from '../utils/type';
import { Card as UICard } from '@/components/ui/card';
import  Heart   from '@/components/icons/heart';
import { useFavouriteTracks } from '@/hooks/useFavouriteTracks';

export default function TrackCard({
  href,
  slug,
  title,
  description,
  image,
}: CardType) {
  const { favouriteTracks, toggleFavouriteTrack } = useFavouriteTracks();
  const favorited = favouriteTracks.includes(slug);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavouriteTrack(slug);
  };

  const linkHref = href ?? `/${slug}`;

  return (
    <Link href={linkHref} className="block h-full w-full max-w-sm m-1">
      <UICard className="flex flex-col h-full rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 bg-white border-none p-2">
        {/* Image */}
        <div className="relative w-full h-32 overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div className="flex-1 flex flex-col justify-center items-start text-left p-4">
          {/* Title and heart icon row */}
          <div className="w-full flex justify-between items-center mb-2">
            <h3 className="min-w-0 break-words text-base font-semibold text-gray-900">
              {title}
            </h3>
            <button
              onClick={toggleFavorite}
              aria-label={favorited ? 'Unfavorite' : 'Favorite'}
              className="shrink-0 p-1 rounded-full bg-white hover:bg-gray-100 transition cursor-pointer"
            >
              <Heart
                filled={favorited}
                className={`w-5 h-5 ${
                  favorited ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                }`}
              />
            </button>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-600 mb-3 line-clamp-2">
            {description}
          </p>
        </div>
      </UICard>
    </Link>
  );
}
