export type Track = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const tracksData: Track[] = [
  {
    slug: 'ux-ui-design',
    title: 'UX/UI Design',
    description: 'Create stunning, user-friendly interfaces that captivate and engage. Master design thinking and wireframing.',
    image: '/images/ux-ui.jpg',
  },
  {
    slug: 'react',
    title: 'React',
    description: 'Build fast, scalable web apps using React, hooks, and modern state management.',
    image: '/images/react.jpg',
  },
  {
    slug: 'cloud-engineering',
    title: 'Cloud Engineering',
    description: 'Learn cloud fundamentals, AWS/GCP services, and infrastructure as code.',
    image: '/images/cloud.jpg',
  },
  {
    slug: 'data-science',
    title: 'Data Science',
    description: 'Dive into data analysis, machine learning, and visualization techniques.',
    image: '/images/data-science.jpg',
  },
  {
    slug: 'android-development',
    title: 'Android Development',
    description: 'Build native Android apps with Kotlin and Jetpack Compose.',
    image: '/images/android.jpg',
  },
  {
    slug: 'ios-development',
    title: 'iOS Development',
    description: 'Create iOS apps using Swift and SwiftUI.',
    image: '/images/ios.jpg',
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Understand security principles, threats, and defensive strategies.',
    image: '/images/cybersecurity.jpg',
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Master HTML, CSS, JavaScript, and modern frameworks.',
    image: '/images/web-dev.jpg',
  },
];
