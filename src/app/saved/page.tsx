// app/saved/page.tsx
'use client';

// منع الـ static pre‑rendering لهذه الصفحة
export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Bag from '@/components/icons/bag'
import { Card as UICard } from '@/components/ui/card'

type SavedItem = {
  id: string
  authorName: string
  authorRole: string
  authorAvatarUrl: string
  title: string
  excerpt: string
}

export default function SavedPage() {
  const [items, setItems] = useState<SavedItem[]>([])

  useEffect(() => {
    const loaded: SavedItem[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key?.startsWith('saved_')) {
        try {
          const obj = JSON.parse(localStorage.getItem(key) || 'null')
          if (obj?.id) loaded.push(obj)
        } catch {}
      }
    }
    setItems(loaded)
  }, [])

  const handleRemove = (id: string) => {
    localStorage.removeItem(`saved_${id}`)
    setItems(prev => prev.filter(it => it.id !== id))
  }

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
            className="relative flex flex-row items-start bg-gray-50 rounded-2xl shadow-sm p-6 hover:shadow-md transition border-none"
          >
            {/* زر الحذف */}
            <button
              onClick={() => handleRemove(item.id)}
              aria-label="Remove saved post"
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-500 transition"
            >
              <Bag className="w-5 h-5" />
            </button>

            {/* عمود الصورة والدور */}
            <div className="flex-shrink-0 flex flex-col items-center text-center mr-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={item.authorAvatarUrl}
                  alt={item.authorName}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="mt-2 text-xs text-gray-500">
                {item.authorRole}
              </span>
            </div>

            {/* عمود العنوان والمقتطف */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                {item.excerpt}
              </p>
              <Link
                href={`/mentors-blog/${item.id}`}
                className="text-sm font-medium text-blue-600 hover:underline"
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







// // src/app/saved/page.tsx
// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import Bag from '@/components/icons/bag';
// import { Card as UICard } from '@/components/ui/card';

// type SavedItem = {
//   id: string;
//   authorName: string;
//   authorRole: string;
//   authorAvatarUrl: string;
//   title: string;
//   excerpt: string;
// };

// export default function SavedPage() {
//   const [items, setItems] = useState<SavedItem[]>([]);

//   // Load saved_* entries from localStorage
//   useEffect(() => {
//     const loaded: SavedItem[] = [];
//     for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i);
//       if (key?.startsWith('saved_')) {
//         try {
//           const obj = JSON.parse(localStorage.getItem(key) || 'null');
//           if (obj?.id) loaded.push(obj);
//         } catch {}
//       }
//     }
//     setItems(loaded);
//   }, []);

//   const handleRemove = (id: string) => {
//     localStorage.removeItem(`saved_${id}`);
//     setItems(prev => prev.filter(it => it.id !== id));
//   };

//   if (items.length === 0) {
//     return (
//       <div className="py-12 text-center text-gray-600">
//         There are currently no saved posts.
//       </div>
//     );
//   }

//   return (
//     <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
//       <h1 className="text-2xl font-bold text-gray-900">Saved Posts</h1>

//       <div className="flex flex-col gap-6">
//         {items.map(item => (
//           <UICard
//             key={item.id}
//             className="relative flex flex-row items-start bg-gray-50 rounded-2xl shadow-sm p-6 hover:shadow-md transition border-none"
//           >
//             {/* Delete button */}
//             <button
//               onClick={() => handleRemove(item.id)}
//               aria-label="Remove saved post"
//               className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-500 transition"
//             >
//               <Bag className="w-5 h-5" />
//             </button>

//             {/* Left column: Avatar + Role */}
//             <div className="flex-shrink-0 flex flex-col items-center text-center mr-6">
//               <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
//                 <Image
//                   src={item.authorAvatarUrl}
//                   alt={item.authorName}
//                   width={64}
//                   height={64}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//               <span className="mt-2 text-xs text-gray-500">{item.authorRole}</span>
//             </div>

//             {/* Right column: Title & Excerpt */}
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold text-gray-900 mb-2">
//                 {item.title}
//               </h2>
//               <p className="text-sm text-gray-700 mb-4 line-clamp-3">
//                 {item.excerpt}
//               </p>
//               <Link
//                 href={`/mentors-blog/${item.id}`}
//                 className="text-sm font-medium text-blue-600 hover:underline"
//               >
//                 read more
//               </Link>
//             </div>
//           </UICard>
//         ))}
//       </div>
//     </main>
//   );
// }
