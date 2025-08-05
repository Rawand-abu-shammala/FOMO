import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MentorCard from './components/MentorCard';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <HeroSection/>
        <MentorCard />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}



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


