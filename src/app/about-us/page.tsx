// // app/about/page.tsx
// import Image from 'next/image';

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen">
//       <main className="py-12 space-y-12 max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Hero Section */}
//         <div className="overflow-hidden shadow-lg h-96">
//           <div className="relative w-full h-full">
//             <Image
//               src="/assets/images/about-hero-1.svg"
//               alt="Team discussing tech strategy"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//         {/* Introduction Text */}
//         <p className="text-lg text-gray-700 leading-relaxed">
//           FOMO Techno is a platform designed to guide Arab students in Software Engineering,
//           Computer Science, and Information Systems, as well as individuals aspiring to
//           enter the tech industry. The platform seeks to bridge the gap between academic
//           learning and the job market, addressing the confusion many face when differentiating
//           between these majors and the various career tracks in the tech industry.
//         </p>

//         {/* Support Text Group */}
//         <div className="space-y-6">
//           <p className="text-lg text-gray-700 leading-relaxed">
//             FOMO Techno helps users make informed decisions about their career paths. The
//             platform provides rich resources to explain the differences between Software
//             Engineering, Computer Science, and Information Systems majors at university and
//             technical career tracks. These resources include articles, videos, and
//             presentations authored by senior professionals.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             Additionally, it equips users with effective learning strategies tailored to the
//             tech field, with insights on leveraging AI tools for enhanced skill development.
//             A standout feature is the mentorship blog, where experienced professionals share
//             advice, study journeys, recommendations, and success stories.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             FOMO Techno supports students in starting their career journeys by equipping them
//             with essential knowledge and guidance needed for success. It addresses main
//             challenges facing students, such as lack of career awareness, the gap between
//             academics and the job market, tips for learning technology, tech industry
//             fundamentals, and learning English for software engineering.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             The platform partners with companies and educational institutions to provide
//             specialized training, enabling users to graduate with a deep understanding of
//             their chosen specialization and actionable steps to begin their tech journey.
//             With a long-term goal and innovative approach, FOMO Techno envisions becoming
//             the Arab world&apos;s leading platform for bridging education and the tech industry.
//           </p>
//         </div>

//         {/* Second Hero */}
//         <div className="relative overflow-hidden shadow-lg h-96">
//           <Image
//             src="/assets/images/about-hero-2.svg"
//             alt="Students collaborating"
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Final Support Text Under Second Image */}
//         <div className="space-y-6">
//           <p className="text-lg text-gray-700 leading-relaxed">
//             FOMO Techno supports students in starting their career journeys by equipping them
//             with the essential knowledge and guidance needed for success. It addresses the
//             main challenges facing students, such as the lack of career awareness, the gap
//             between academics and the job market, tips and tricks for learning technology,
//             tech industry fundamentals, and learning English for software engineering.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             The platform also seeks partnerships with companies and educational institutions
//             that provide specialized training. These collaborations will enable users to
//             graduate from the platform with a deep understanding of their chosen
//             specialization and actionable steps to begin their tech journey.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             With a long-term goal and innovative approach, FOMO Techno envisions becoming
//             the Arab world&apos;s leading platform for bridging education and the tech industry,
//             inspiring the next generation of tech pioneers.
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }






// // app/about/page.tsx
// import Image from 'next/image';

// export const metadata = {
//   title: 'About Us - FOMO Techno',
//   description: 'Learn about FOMO Techno and our mission to guide Arab students in tech.',
// };

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen">
//       <main className="py-12 space-y-16 max-w-4xl mx-auto px-6 lg:px-8">
//         {/* Hero Section */}
//         <div className="overflow-hidden shadow-lg w-full md:w-11/12 lg:w-10/12 max-w-3xl mx-auto h-64 sm:h-80 md:h-[400px] lg:h-[60vh]">
//           <div className="relative w-full h-full">
//             <Image
//               src="/assets/images/about-hero-1.svg"
//               alt="Team discussing tech strategy"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//         {/* Introduction Text */}
//         <p className="text-lg text-gray-700 leading-relaxed">
//           FOMO Techno is a platform designed to guide Arab students in Software Engineering,
//           Computer Science, and Information Systems, as well as individuals aspiring to
//           enter the tech industry. The platform seeks to bridge the gap between academic
//           learning and the job market, addressing the confusion many face when differentiating
//           between these majors and the various career tracks in the tech industry.
//         </p>

//         {/* Support Text Group */}
//         <div className="space-y-6">
//           <p className="text-lg text-gray-700 leading-relaxed">
//             FOMO Techno helps users make informed decisions about their career paths. The
//             platform provides rich resources to explain the differences between Software
//             Engineering, Computer Science, and Information Systems majors at university and
//             technical career tracks. These resources include articles, videos, and
//             presentations authored by senior professionals.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             Additionally, it equips users with effective learning strategies tailored to the
//             tech field, with insights on leveraging AI tools for enhanced skill development.
//             A standout feature is the mentorship blog, where experienced professionals share
//             advice, study journeys, recommendations, and success stories.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             FOMO Techno supports students in starting their career journeys by equipping them
//             with essential knowledge and guidance needed for success. It addresses main
//             challenges facing students, such as lack of career awareness, the gap between
//             academics and the job market, tips for learning technology, tech industry
//             fundamentals, and learning English for software engineering.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             The platform partners with companies and educational institutions to provide
//             specialized training, enabling users to graduate with a deep understanding of
//             their chosen specialization and actionable steps to begin their tech journey.
//             With a long-term goal and innovative approach, FOMO Techno envisions becoming
//             the Arab world&apos;s leading platform for bridging education and the tech industry.
//           </p>
//         </div>

//         {/* Second Hero */}
//         <div className="overflow-hidden shadow-lg w-full md:w-11/12 lg:w-10/12 max-w-3xl mx-auto h-64 sm:h-80 md:h-[400px] lg:h-[70vh]">
//           <div className="relative w-full h-full">
//             <Image
//               src="/assets/images/about-hero-2.svg"
//               alt="Students collaborating"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//         {/* Final Support Text Under Second Image */ }
//         <div className="space-y-6">
//           <p className="text-lg text-gray-700 leading-relaxed">
//             FOMO Techno supports students in starting their career journeys by equipping them
//             with the essential knowledge and guidance needed for success. It addresses the
//             main challenges facing students, such as the lack of career awareness, the gap
//             between academics and the job market, tips and tricks for learning technology,
//             tech industry fundamentals, and learning English for software engineering.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             The platform also seeks partnerships with companies and educational institutions
//             that provide specialized training. These collaborations will enable users to
//             graduate from the platform with a deep understanding of their chosen
//             specialization and actionable steps to begin their tech journey.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             With a long-term goal and innovative approach, FOMO Techno envisions becoming
//             the Arab world&apos;s leading platform for bridging education and the tech industry,
//             inspiring the next generation of tech pioneers.
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }




// app/about/page.tsx
import Image from 'next/image';

export const metadata = {
  title: 'About Us - FOMO Techno',
  description: 'Learn about FOMO Techno and our mission to guide Arab students in tech.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main className="py-16 space-y-20 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="overflow-hidden shadow-lg w-full md:w-11/12 lg:w-4/5 mx-auto h-80 sm:h-96 md:h-[500px] lg:h-[70vh]">
          <div className="relative w-full h-full">
            <Image
              src="/assets/images/about-hero-1.svg"
              alt="Team discussing tech strategy"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Introduction Text */}
        <p className="text-lg text-gray-700 leading-relaxed">
          FOMO Techno is a platform designed to guide Arab students in Software Engineering,
          Computer Science, and Information Systems, as well as individuals aspiring to
          enter the tech industry. The platform seeks to bridge the gap between academic
          learning and the job market, addressing the confusion many face when differentiating
          between these majors and the various career tracks in the tech industry.
        </p>

        {/* Support Text Group */}
        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            FOMO Techno helps users make informed decisions about their career paths. The
            platform provides rich resources to explain the differences between Software
            Engineering, Computer Science, and Information Systems majors at university and
            technical career tracks. These resources include articles, videos, and
            presentations authored by senior professionals.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Additionally, it equips users with effective learning strategies tailored to the
            tech field, with insights on leveraging AI tools for enhanced skill development.
            A standout feature is the mentorship blog, where experienced professionals share
            advice, study journeys, recommendations, and success stories.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            FOMO Techno supports students in starting their career journeys by equipping them
            with essential knowledge and guidance needed for success. It addresses main
            challenges facing students, such as lack of career awareness, the gap between
            academics and the job market, tips for learning technology, tech industry
            fundamentals, and learning English for software engineering.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The platform partners with companies and educational institutions to provide
            specialized training, enabling users to graduate with a deep understanding of
            their chosen specialization and actionable steps to begin their tech journey.
            With a long-term goal and innovative approach, FOMO Techno envisions becoming
            the Arab world&apos;s leading platform for bridging education and the tech industry.
          </p>
        </div>

        {/* Second Hero */}
        <div className="overflow-hidden shadow-lg w-full md:w-11/12 lg:w-4/5 mx-auto h-80 sm:h-96 md:h-[500px] lg:h-[75vh]">
          <div className="relative w-full h-full">
            <Image
              src="/assets/images/about-hero-2.svg"
              alt="Students collaborating"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Final Support Text Under Second Image */}
        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            FOMO Techno supports students in starting their career journeys by equipping them
            with the essential knowledge and guidance needed for success. It addresses the
            main challenges facing students, such as the lack of career awareness, the gap
            between academics and the job market, tips and tricks for learning technology,
            tech industry fundamentals, and learning English for software engineering.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The platform also seeks partnerships with companies and educational institutions
            that provide specialized training. These collaborations will enable users to
            graduate from the platform with a deep understanding of their chosen
            specialization and actionable steps to begin their tech journey.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With a long-term goal and innovative approach, FOMO Techno envisions becoming
            the Arab world&apos;s leading platform for bridging education and the tech industry,
            inspiring the next generation of tech pioneers.
          </p>
        </div>
      </main>
    </div>
  );
}
