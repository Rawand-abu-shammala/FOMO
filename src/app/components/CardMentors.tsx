'use client'
import Link from 'next/link'
import Image from 'next/image'
import type { Mentor } from '../utils/type'
import { Card as UICard } from '@/components/ui/card'

export default function Card({ slug, name, description, image }: Mentor) {
  return (
    <Link
      href={`/mentors/${slug}`}
      className="block w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
    >
      <UICard className="flex flex-col items-center text-center bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow w-full aspect-[3/2] border-none">
        {/* Avatar */}
        <div className="mt-4">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden mx-auto">
            <Image
              src={image}
              alt={name}
              width={176}
              height={176}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Name & Description */}
        <div className="mt-6 px-3 sm:px-4 flex-1 space-y-2">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            {name}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 line-clamp-2">
            {description}
          </p>
        </div>

        {/* View Profile */}
        <span className="mt-auto mb-4 text-sm sm:text-base font-medium text-blue-600 hover:underline">
          View Profile
        </span>
      </UICard>
    </Link>
  )
}
