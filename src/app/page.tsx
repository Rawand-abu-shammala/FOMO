// 'use client'
// import { Button } from "@/components/ui/button";
// import Link from 'next/link';

// export default function Home() {
//   return (
    
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 space-y-6 p-4">


//       {/* Main Content */}
//       <main className="flex flex-col items-center space-y-4">
//         <h1 className="text-4xl font-bold">Welcome to FOMO</h1>
//         <p className="text-gray-600">Please choose an option to continue</p>

//             <div className="flex flex-wrap gap-4 pt-4">
//             <Button className="w-40 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//               <Link href="/signup">Sign Up</Link>
//             </Button>
//             <Button variant="outline" className="w-40 px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition" asChild>
//               <Link href="/login">Sign In</Link>
//             </Button>
//           </div>

//       </main>
//     </div>
//   );
// }





import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Card from './components/Card';
import { cards } from './utils/data';

export default function Home() {
  return (
    <>
      <section className="-mt-16 pt-16 bg-blue-50 rounded-b-xl p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">
            Welcome, Hala Alastal!<br />Your Tech Journey Starts Here
          </h1>
          <p className="text-gray-700 mb-6">
            FOMO techno is a guidance platform designed to help Arab students explore software engineering...
          </p>
          <Button className="bg-blue-600 text-white" size="lg">Start Exploring</Button>
        </div>
        <div className="flex-1">
          <Image
            src="/assets/images/hero.svg"
            alt="Hero"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto px-4 mt-12">
        <h2 className="text-2xl font-bold mb-6">
          Explore Learning Paths And Tech Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {cards.map(c => <Card key={c.slug} {...c} />)}
        </div>
      </section>
    </>
  );
}