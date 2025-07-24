'use client';

import React from "react";
import Image from "next/image";
import { Section } from "../utils/type";
import { sections } from "../utils/privacyPolicy";

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full mt-8 p-6 overflow-visible">
      <div className="relative w-4/5 ml-4 md:ml-10 mb-8 overflow-visible">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/3 text-left space-y-4">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-gray-500">Last updated: September 1, 2023</p>
            <p className="text-base">
              At FOMO Techno, we are committed to protecting your privacy. This
              Privacy Policy outlines how we collect, use, and safeguard your
              personal information when you use our platform. By accessing or
              using FOMO Techno, you agree to the terms of this policy.
            </p>
          </div>

          <div className="relative w-full mt-6 md:mt-0 md:w-1/3">
            <div className="relative md:absolute md:top-0 md:right-[-80px] lg:right-[-160px] w-full overflow-visible">
              <Image
                src="/assets/images/privacy-policy.svg"
                alt="Privacy Illustration"
                width={500}
                height={500}
                priority
                className="object-contain w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/5 ml-4 md:ml-10 space-y-8 text-left">
        {sections.map((section: Section) => (
          <section key={section.title} className="space-y-4">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            {section.description && (
              <p className="text-base text-gray-400">{section.description}</p>
            )}
            {section.items && (
              <ul className="list-disc list-inside space-y-2 text-base">
                {section.items.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}





// import Image from "next/image";
// import { Section } from "../utils/type";
// import { sections } from "../utils/privacyPolicy";

// export default function PrivacyPolicyPage() {
//   return (
//     <main className="w-full mt-8 p-6 overflow-visible">
//       <div className="relative w-4/5 ml-4 md:ml-10 mb-8 overflow-visible">
//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="w-full md:w-2/3 text-left space-y-4">
//             <h1 className="text-4xl font-bold">Privacy Policy</h1>
//             <p className="text-gray-500">Last updated: September 1, 2023</p>
//             <p className="text-base">
//               At FOMO Techno, we are committed to protecting your privacy. This
//               Privacy Policy outlines how we collect, use, and safeguard your
//               personal information when you use our platform. By accessing or
//               using FOMO Techno, you agree to the terms of this policy.
//             </p>
//           </div>

//           <div className="relative w-full mt-6 md:mt-0 md:w-1/3">
//             <div className="relative md:absolute md:top-0 md:right-[-80px] lg:right-[-160px] w-full overflow-visible">
//               <Image
//                 src="/assets/images/privacy-policy.svg"
//                 alt="Privacy Illustration"
//                 width={500}
//                 height={500}
//                 priority
//                 className="object-contain w-auto h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-4/5 ml-4 md:ml-10 space-y-8 text-left">
//         {sections.map((section: Section) => (
//           <section key={section.title} className="space-y-4">
//             <h2 className="text-2xl font-semibold">{section.title}</h2>
//             {section.description && (
//               <p className="text-base text-gray-400">{section.description}</p>
//             )}
//             {section.items && (
//               <ul className="list-disc list-inside space-y-2 text-base">
//                 {section.items.map((item: string, idx: number) => (
//                   <li key={idx}>{item}</li>
//                 ))}
//               </ul>
//             )}
//           </section>
//         ))}
//       </div>
//     </main>
//   );
// }
