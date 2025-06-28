// src/app/utils/tracksData.ts
export interface Track {
  slug: string
  title: string
  description: string
  image: string
}

export const tracks: Track[] = [
  {
    slug: 'ux-ui-design',
    title: 'UX/UI Design',
    description:
      'Create stunning, user-friendly interfaces that captivate and engage. Master design thinking & wireframing.',
    image: '/assets/images/ux-ui-design.svg',
  },
  {
    slug: 'react',
    title: 'React',
    description:
      'Build modern web applications with React: components, hooks, state management, routing, and best practices.',
    image: '/assets/images/react.svg',
  },
  {
    slug: 'cloud-engineering',
    title: 'Cloud Engineering',
    description:
      'Learn to design, deploy, and manage scalable cloud infrastructure using AWS/Azure/GCP and DevOps tools.',
    image: '/assets/images/cloud-engineering.svg',

  },
  {
    slug: 'data-science',
    title: 'Data Science',
    description:
      'Explore data analysis, machine learning, and visualization techniques to derive insights from data.',
    image: '/assets/images/data-science.svg',

  },
  {
    slug: 'android-development',
    title: 'Android Development',
    description:
      'Develop native Android apps: Kotlin/Java, Android SDK, UI/UX for mobile, and publishing to Play Store.',
    image: '/assets/images/android-development.svg',

  },
  {
    slug: 'ios-development',
    title: 'iOS Development',
    description:
      'Build iOS applications: Swift, SwiftUI/UIKit, Apple ecosystem best practices, and App Store deployment.',
    image: '/assets/images/ios-development.svg',
    },
]
