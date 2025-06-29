// // // components/HeroIllustration.tsx
// // 'use client';
// // import Image from 'next/image';

// // export default function HeroIllustration() {
// //   return (
// //     // wrapper: relative وبأبعاد أو نسبة ثابتة
// //     <div className="relative w-full h-64 lg:h-96">
// //       <Image
// //         src="/assets/images/contact.svg"
// //         alt="Contact Us Illustration"
// //         fill
// //         className="object-contain rounded-lg"
// //       />
// //     </div>
// //   );
// // }



// // components/HeroIllustration.tsx
// 'use client';
// import Image from 'next/image';

// export default function HeroIllustration() {
//   return (
//     <div className="relative w-full h-64 sm:h-80 md:h-96 lg:aspect-[4/3] lg:h-auto">
//       <Image
//         src="/assets/images/contact.svg"
//         alt="Contact Us Illustration"
//         fill
//         className="object-contain rounded-lg"
//       />
//     </div>
//   );
// }










'use client';
import Image from 'next/image';

export default function HeroIllustration() {
  return (
    <Image
      src="/assets/images/contact.svg"
      alt="Contact Us Illustration"
      fill
      className="object-contain rounded-lg"
    />
  );
}
