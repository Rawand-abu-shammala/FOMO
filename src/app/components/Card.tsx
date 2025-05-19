// components/Card.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Card as UICard } from '@/components/ui/card'
import { ArrowRight } from '@/components/icons'
import { Card as CardType } from '../utils/type'

export default function Card({ id, title, description, image }: CardType) {
  return (
    <Link
      href={`/${id}`}
      className="block h-full max-w-sm w-full mx-auto"
    >
      <UICard
        className={`
          h-full
          rounded-2xl
          overflow-hidden           
          shadow-md hover:shadow-lg
          transition-shadow duration-300
          flex flex-col
          bg-blue-50                
          border-none
          p-0
        `}
      >
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover block"  /* block عشان نشيل الهوامش السفلية */
          />
        </div>

        {/* المحتوى */}
        <div className="flex-1 flex flex-col justify-center items-center text-center p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {description}
          </p>
          <button className="
            inline-flex items-center
            text-blue-600 font-medium
            hover:underline
            focus:outline-none
          ">
            <span>Explore Now</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </UICard>
    </Link>
  )
}


