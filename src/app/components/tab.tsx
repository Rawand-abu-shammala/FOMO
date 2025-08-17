// "use client";

// import Link from 'next/link';
// import { ArrowRight } from '@/components/icons';
// import { ArticleData, Role } from '../utils/type';

// interface TabProps {
//   // Accept either a simple title or an article object containing title
//   title?: string;
//   article?: ArticleData;
//   role?: Role;
// }

// export default function Tab({ title, article, role = 'student' }: TabProps) {
//   // Determine display title
//   const displayTitle = title ?? article?.title ?? '';

//   return (
//     <div className="container mx-auto px-4 py-8 text-sm text-gray-500 mb-4 flex items-center pl-6">
//       <Link href="/home" className="hover:underline">
//         Home
//       </Link>
//       <ArrowRight className="w-4 h-4 mx-2 text-gray-400" />
//       <span className="text-gray-700">{displayTitle}</span>

//       {/* مثال بسيط لعرض badge للصلاحية */}
//       <div className="ml-auto">
//         {role === 'mentor' ? (
//           <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">Mentor view</span>
//         ) : (
//           <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">Student view</span>
//         )}
//       </div>
//     </div>
//   );
// }






// 'use client';
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
      <div className="container mx-auto px-4 py-8 text-sm text-gray-500 mb-4 flex items-center pl-6">
      <Link href="/home" className="hover:underline">
        Home
      </Link>
      <ArrowRight className="w-4 h-4 mx-2 text-gray-400" />
      <span className="text-gray-700">{displayTitle}</span>
    </div>
  );
}




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






