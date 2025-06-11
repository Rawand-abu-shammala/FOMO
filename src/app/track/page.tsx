// // src/app/track/page.tsx
// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import { Input } from '@/components/ui/input';
// import { Card as TrackCard } from '@/components/Card';
// import tracksData from '@/data/tracks.json';

// export default function TrackPage() {
//   const [search, setSearch] = useState('');
//   const filtered = tracksData.filter(t =>
//     t.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Search Bar */}
//       <div className="container mx-auto px-4 py-6 flex justify-end">
//         <Input
//           placeholder="Search for track"
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//           className="max-w-xs"
//         />
//       </div>

//       {/* Title & Subtitle */}
//       <section className="container mx-auto px-4 text-center mb-6">
//         <h1 className="text-2xl font-semibold mb-2">Explore The Future Of Tech With Our Specialized Tracks!</h1>
//         <p className="text-sm text-gray-600">
//           Stay ahead in the tech industry with our expertly curated learning tracks,
//           designed to equip you with cutting-edge skills. Whether you're passionate
//           about software development, AI, cybersecurity, cloud computing, or UX/UI design,
//           we have the perfect track for you!
//         </p>
//       </section>

//       {/* Tracks Grid */}
//       <section className="container mx-auto px-4 flex-1">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filtered.map(track => (
//             <TrackCard
//               key={track.slug}
//               slug={track.slug}
//               title={track.title}
//               description={track.description}
//               image={track.image}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }



