// components/MentorCard.tsx
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import ArrowUpRightIcon from '@/components/icons/arrow-up';
import StarIcon from '@/components/icons/star-1';

interface Mentor {
  name: string;
  role: string;
  years: number;
  rating: number;
  reviews: number;
  imageSrc: string;
}

const mentors: Mentor[] = [
  {
    imageSrc: '/assets/images/mentor1.svg',
    name: 'Ethan Cole',
    role: 'Senior UX/UI Designer',
    years: 5,
    rating: 4.5,
    reviews: 29,
  },
  {
    imageSrc: '/assets/images/mentor1.svg',
    name: 'Ava Mitchell',
    role: 'Product Designer',
    years: 7,
    rating: 4.8,
    reviews: 42,
  },
  {
    imageSrc: '/assets/images/mentor1.svg',
    name: 'Liam Johnson',
    role: 'Visual Designer',
    years: 4,
    rating: 4.3,
    reviews: 18,
  },
  {
    imageSrc: '/assets/images/mentor1.svg',
    name: 'Sophia Lee',
    role: 'UX Researcher',
    years: 6,
    rating: 4.7,
    reviews: 35,
  },
];

export default function MentorCard() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
      {mentors.map((m, i) => (
        <div key={i} className="bg-white rounded-2xl shadow p-6 w-full mx-auto">
          {/* Header: Image + Info */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
            <div className="flex items-center gap-4">
              <Image
                src={m.imageSrc}
                alt={m.name}
                width={48}
                height={48}
                className="rounded-full flex-shrink-0"
              />
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-base">{m.name}</h3>
                <p className="text-sm text-gray-500">{m.role}</p>
              </div>
            </div>
            <ArrowUpRightIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
          </div>

          {/* Experience */}
          <p className="mt-4 text-sm text-center sm:text-left">
            {m.years} Years of experience
          </p>

          {/* Rating */}
          <p className="mt-2 flex justify-center sm:justify-start items-center gap-1 text-yellow-500 text-sm">
            <StarIcon className="w-4 h-4 fill-current flex-shrink-0" />
            {m.rating} ({m.reviews} reviews)
          </p>

          {/* Badges */}
          <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-2">
            <Badge className="bg-blue-50 text-blue-500 rounded-full py-1 px-2 whitespace-nowrap">Design Thinking</Badge>
            <Badge className="bg-blue-50 text-blue-500 rounded-full py-1 px-2 whitespace-nowrap">UCD</Badge>
            <Badge className="bg-blue-50 text-blue-500 rounded-full py-1 px-2 whitespace-nowrap">more +</Badge>
          </div>
        </div>
      ))}
    </div>
  );
}