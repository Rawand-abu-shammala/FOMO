// export type Track = {
//   slug: string;
//   title: string;
//   description: string;
//   image: string;
// };

// export const tracksData: Track[] = [
//   {
//     slug: 'ux-ui-design',
//     title: 'UX/UI Design',
//     description: 'Create stunning, user-friendly interfaces that captivate and engage. Master design thinking and wireframing.',
//     image: '/images/ux-ui.jpg',
//   },
//   {
//     slug: 'react',
//     title: 'React',
//     description: 'Build fast, scalable web apps using React, hooks, and modern state management.',
//     image: '/images/react.jpg',
//   },
//   {
//     slug: 'cloud-engineering',
//     title: 'Cloud Engineering',
//     description: 'Learn cloud fundamentals, AWS/GCP services, and infrastructure as code.',
//     image: '/images/cloud.jpg',
//   },
//   {
//     slug: 'data-science',
//     title: 'Data Science',
//     description: 'Dive into data analysis, machine learning, and visualization techniques.',
//     image: '/images/data-science.jpg',
//   },
//   {
//     slug: 'android-development',
//     title: 'Android Development',
//     description: 'Build native Android apps with Kotlin and Jetpack Compose.',
//     image: '/images/android.jpg',
//   },
//   {
//     slug: 'ios-development',
//     title: 'iOS Development',
//     description: 'Create iOS apps using Swift and SwiftUI.',
//     image: '/images/ios.jpg',
//   },
//   {
//     slug: 'cybersecurity',
//     title: 'Cybersecurity',
//     description: 'Understand security principles, threats, and defensive strategies.',
//     image: '/images/cybersecurity.jpg',
//   },
//   {
//     slug: 'web-development',
//     title: 'Web Development',
//     description: 'Master HTML, CSS, JavaScript, and modern frameworks.',
//     image: '/images/web-dev.jpg',
//   },
// ];



// // src/app/utils/tracksData.ts
// export interface Track {
//   slug: string;       // مثال: 'ux-ui-design'
//   title: string;      // مثال: 'UX/UI Design'
//   description: string; // وصف قصير
//   image: string;      // مسار الصورة داخل public/images
// }

// export const tracks: Track[] = [
//   {
//     slug: 'ux-ui-design',
//     title: 'UX/UI Design',
//     description:
//       'Create stunning, user-friendly interfaces that captivate and engage. Master design thinking & wireframing.',
//     image: '/images/tracks/ux-ui-design.jpg',
//   },
//   {
//     slug: 'react',
//     title: 'React',
//     description:
//       'Build modern web applications with React: components, hooks, state management, routing, and best practices.',
//     image: '/images/tracks/react.jpg',
//   },
//   {
//     slug: 'cloud-engineering',
//     title: 'Cloud Engineering',
//     description:
//       'Learn to design, deploy, and manage scalable cloud infrastructure using AWS/Azure/GCP and DevOps tools.',
//     image: '/images/tracks/cloud-engineering.jpg',
//   },
//   {
//     slug: 'data-science',
//     title: 'Data Science',
//     description:
//       'Explore data analysis, machine learning, and visualization techniques to derive insights from data.',
//     image: '/images/tracks/data-science.jpg',
//   },
//   {
//     slug: 'android-development',
//     title: 'Android Development',
//     description:
//       'Develop native Android apps: Kotlin/Java, Android SDK, UI/UX for mobile, and publishing to Play Store.',
//     image: '/images/tracks/android-development.jpg',
//   },
//   {
//     slug: 'ios-development',
//     title: 'iOS Development',
//     description:
//       'Build iOS applications: Swift, SwiftUI/UIKit, Apple ecosystem best practices, and App Store deployment.',
//     image: '/images/tracks/ios-development.jpg',
//   },
//   // إذا تحب تضيف المزيد، أضف هنا.
// ];




// src/app/utils/tracksData.ts
export interface Track {
  slug: string
  title: string
  description: string
  image: string
  // يمكنك إضافة حقول إضافية كـ detailSections إذا أردت
}

export const tracks: Track[] = [
  {
    slug: 'ux-ui-design',
    title: 'UX/UI Design',
    description:
      'Create stunning, user-friendly interfaces that captivate and engage. Master design thinking & wireframing.',
    image: '/images/tracks/ux-ui-design.jpg',
  },
  {
    slug: 'react',
    title: 'React',
    description:
      'Build modern web applications with React: components, hooks, state management, routing, and best practices.',
    image: '/images/tracks/react.jpg',
  },
  {
    slug: 'cloud-engineering',
    title: 'Cloud Engineering',
    description:
      'Learn to design, deploy, and manage scalable cloud infrastructure using AWS/Azure/GCP and DevOps tools.',
    image: '/images/tracks/cloud-engineering.jpg',
  },
  {
    slug: 'data-science',
    title: 'Data Science',
    description:
      'Explore data analysis, machine learning, and visualization techniques to derive insights from data.',
    image: '/images/tracks/data-science.jpg',
  },
  {
    slug: 'android-development',
    title: 'Android Development',
    description:
      'Develop native Android apps: Kotlin/Java, Android SDK, UI/UX for mobile, and publishing to Play Store.',
    image: '/images/tracks/android-development.jpg',
  },
  {
    slug: 'ios-development',
    title: 'iOS Development',
    description:
      'Build iOS applications: Swift, SwiftUI/UIKit, Apple ecosystem best practices, and App Store deployment.',
    image: '/images/tracks/ios-development.jpg',
  },
]
