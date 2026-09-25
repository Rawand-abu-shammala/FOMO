// app/saved/page.tsx
'use client';

// Prevent static pre‑rendering for this page
export const dynamic = 'force-dynamic';

import Link from 'next/link'
import Image from 'next/image'
import Bag from '@/components/icons/bag'
import { Card as UICard } from '@/components/ui/card'
import { useSavedPosts } from '@/hooks/useSavedPosts'

export default function SavedPage() {
  const { posts: items, remove: handleRemove } = useSavedPosts()

  if (items.length === 0) {
    return (
      <div className="py-12 text-center text-gray-600">
        There are currently no saved posts.
      </div>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Saved Posts</h1>

      <div className="flex flex-col gap-6">
        {items.map(item => (
          <UICard
            key={item.id}
            className="relative flex flex-col items-start gap-4 bg-gray-50 p-4 pr-12 shadow-sm transition hover:shadow-md sm:flex-row sm:gap-0 sm:p-6"
          >
            {/* Remove button */}
            <button
              onClick={() => handleRemove(item.id)}
              aria-label="Remove saved post"
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-500 transition cursor-pointer"
            >
              <Bag className="w-5 h-5" />
            </button>

            {/* Image and role column */}
            <div className="flex shrink-0 flex-row items-center gap-3 text-left sm:mr-6 sm:flex-col sm:gap-0 sm:text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={item.authorAvatarUrl}
                  alt={item.authorName}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-xs text-gray-500 sm:mt-2">
                {item.authorRole}
              </span>
            </div>

            {/* Title and excerpt column */}
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                {item.excerpt}
              </p>
              <Link
                href={`/mentors-blog/${item.id}`}
                className="text-sm font-medium text-blue-600 hover:underline cursor-pointer"
              >
                read more
              </Link>
            </div>
          </UICard>
        ))}
      </div>
    </main>
  )
}



