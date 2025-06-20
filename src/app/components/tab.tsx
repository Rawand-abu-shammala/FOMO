
// // component/tab.tsx
// "use client";
// import Link from "next/link";
// import { ArrowRight } from '@/components/icons'
// // import { mentorsData } from '../utils/mentors';



// interface TabProps {
//   article: {
//     title: string;
//   };
// }

// export default function Tab({ article }: TabProps) {
//   return (
//     <div className="text-sm text-gray-500 mb-4 flex items-center">
//       <Link href="/" className="hover:underline">
//         Home
//       </Link>
//       <ArrowRight className="w-4 h-4 mx-2 text-gray-400" />
//       <span className="text-gray-700">{article.title}</span>
//     </div>
//   );
// }






'use client';
import Link from 'next/link';
import { ArrowRight } from '@/components/icons';

interface TabProps {
  // Accept either a simple title or an article object containing title
  title?: string;
  article?: { title: string };
}

export default function Tab({ title, article }: TabProps) {
  // Determine display title
  const displayTitle = title ?? article?.title ?? '';

  return (
    <div className="text-sm text-gray-500 mb-4 flex items-center">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <ArrowRight className="w-4 h-4 mx-2 text-gray-400" />
      <span className="text-gray-700">{displayTitle}</span>
    </div>
  );
}