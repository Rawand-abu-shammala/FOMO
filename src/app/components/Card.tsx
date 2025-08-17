// src/components/Card.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { CardType } from '../utils/type';
import { Card as UICard } from '@/components/ui/card';
import { ArrowRight } from '@/components/icons';

export default function Card({ slug, title, description, image, href }: CardType) {
  const linkHref = href ?? `/${slug}`;
  return (
    <Link href={linkHref} className="block max-w-sm m-1">
      <UICard className="flex flex-col h-full rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 bg-white border-none p-2">
        <div className="relative w-full h-32">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center text-center p-4">
          <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-xs text-gray-600 mb-3 line-clamp-2">{description}</p>
          <button className="inline-flex items-center text-blue-600 font-medium hover:underline text-sm cursor-pointer">
            <span>Explore</span>
            <ArrowRight className="ml-1 w-3 h-3" />
          </button>
        </div>
      </UICard>
    </Link>
  );
}



// // src/components/Card.tsx
// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import type { CardType } from '../utils/type'; 
// import { Card as UICard } from '@/components/ui/card';
// import { ArrowRight } from '@/components/icons';

// export default function Card({ slug, title, description, image, href }: CardType) {
//   const linkHref = href ?? `/${slug}`;
//   return (
//     <Link href={linkHref} className="block max-w-sm m-1">
//       <UICard className="flex flex-col h-full rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 bg-white border-none p-2">
//         <div className="relative w-full h-32">
//           <Image src={image} alt={title} fill className="object-cover" />
//         </div>
//         <div className="flex-1 flex flex-col justify-center items-center text-center p-4">
//           <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
//           <p className="text-xs text-gray-600 mb-3 line-clamp-2">{description}</p>
//           <button className="inline-flex items-center text-blue-600 font-medium hover:underline text-sm cursor-pointer">
//             <span>Explore</span>
//             <ArrowRight className="ml-1 w-3 h-3" />
//           </button>
//         </div>
//       </UICard>
//     </Link>
//   );
// }
