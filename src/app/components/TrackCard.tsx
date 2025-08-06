// // src/components/TrackCard.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { CardType } from '../utils/type';
import { Card as UICard } from '@/components/ui/card';
import  Heart   from '@/components/icons/heart';

const FAV_KEY = 'favouriteTracks';

export default function TrackCard({
  href,
  slug,
  title,
  description,
  image,
}: CardType) {
  // Favorite state based on localStorage
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem(FAV_KEY) || '[]') as string[];
    setFavorited(favs.includes(slug));
  }, [slug]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    const favs = new Set(JSON.parse(localStorage.getItem(FAV_KEY) || '[]') as string[]);
    if (favs.has(slug)) favs.delete(slug);
    else favs.add(slug);
    localStorage.setItem(FAV_KEY, JSON.stringify(Array.from(favs)));
    setFavorited(favs.has(slug));
  };

  const linkHref = href ?? `/${slug}`;

  return (
    <Link href={linkHref} className="block max-w-sm m-1">
      <UICard className="flex flex-col h-full rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 bg-white border-none p-2">
        {/* Image */}
        <div className="relative w-full h-32 overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div className="flex-1 flex flex-col justify-center items-start text-left p-4">
          {/* Title and heart icon row */}
          <div className="w-full flex justify-between items-center mb-2">
            <h3 className="text-base font-semibold text-gray-900">
              {title}
            </h3>
            <button
              onClick={toggleFavorite}
              aria-label={favorited ? 'Unfavorite' : 'Favorite'}
              className="p-1 rounded-full bg-white hover:bg-gray-100 transition"
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
