import { Card } from './type';

export const cards: Card[] = [
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    description: 'master the essentials of software engineering and build your path to success in tech.',
    image: '/assets/images/software-engineering.png',
  },
  {
    id: 'learn-how-to-learn',
    title: 'Learn how to learn in the tech industry',
    description: 'discover effective learning strategies to excel in the tech industry and boost your career growth.',
    image: '/assets/images/learn-how-to-learn.png',
  },
  {
    id: 'tracks',
    title: 'Tracks',
    description: 'explore various tech tracks, featuring resources, videos, and expert insights to guide your career.',
    image: '/assets/images/tracks.png',
  },
  {
    id: 'english-for-se',
    title: 'Learn english for software engineering',
    description: 'improve your english skills for success in software engineering.',
    image: '/assets/images/english-for-se.png',
  },
  {
    id: 'fundamentals',
    title: 'Fundamentals',
    description: 'understand the core principles and concepts of technology.',
    image: '/assets/images/fundamentals.png',
  },
  {
    id: 'mentors-blog',
    title: 'Mentors blog',
    description: 'get inspired and informed through expert advice and success stories from industry mentors.',
    image: '/assets/images/mentors-blog.png',
  },
];



import { Card as CardType } from './type'
const tracks: CardType[] = [
  {
    id: 'uxui-design',
    title: 'UX/UI Design',
    description: 'Create stunning, user-friendly interfaces that captivate and engage. Master design thinking & wireframing.',
    image: '/images/tracks/uxui.jpg',
  },
  {
    id: 'react',
    title: 'React',
    description: 'Build dynamic web apps with React. Learn components, hooks, state management, and best practices.',
    image: '/images/tracks/react.jpg',
  },
  {
    id: 'cloud-engineering',
    title: 'Cloud Engineering',
    description: 'Design, deploy, and manage scalable cloud architectures on AWS, Azure, or GCP.',
    image: '/images/tracks/cloud.jpg',
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Analyze data, build ML models, and derive business insights with Python, R, and TensorFlow.',
    image: '/images/tracks/datascience.jpg',
  },
  {
    id: 'android-development',
    title: 'Android Development',
    description: 'Create robust Android apps using Kotlin, Jetpack Compose, and Android Studio.',
    image: '/images/tracks/android.jpg',
  },
  {
    id: 'ios-development',
    title: 'iOS Development',
    description: 'Build beautiful iOS apps with SwiftUI, UIKit, and the latest Apple frameworks.',
    image: '/images/tracks/ios.jpg',
  },
]

export default tracks



import { Section } from './type';


export const sections: Section[] = [
  {
    title: "1. Information We Collect",
    description: "We may collect the following types of information:",
    items: [
      "Personal Information: Name, email address, phone number, and other contact details.",
      "Usage Data: Information about how you use our platform, including pages visited and time spent.",
      "Technical Data: IP address, browser type, device information, and cookies.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    description: "We use your personal information to:",
    items: [
      "Provide and improve our services.",
      "Personalize your user experience.",
      "Communicate important updates, newsletters, and promotional offers.",
      "Analyze usage trends and improve platform performance.",
      "Ensure platform security and prevent unauthorized access.",
    ],
  },
  {
    title: "3. Cookies and Tracking Technologies",
    description: "FOMO Techno uses cookies to enhance user experience by:",
    items: [
      "Remembering user preferences.",
      "Collecting analytical data to improve functionality.",
      "Enabling targeted advertisements where applicable. You can adjust your cookie preferences through your browser settings.",
    ],
  },
  {
    title: "4. Sharing Your Information",
    description: "We do not sell or trade your personal information. However, we may share information with:",
    items: [
      "Service Providers: For hosting, analytics, and security services.",
      "Legal Authorities: When required by law or to protect our legal rights.",
      "Business Partners: In cases of partnerships or collaborations, with your consent.",
    ],
  },
  {
    title: "5. Data Security",
    description: "We implement industry-standard security measures to secure your data:",
    items: [
      "Protecting your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.",
    ],
  },
  {
    title: "6. Your Rights",
    description: "You have the right to:",
    items: [
      "Access, correct, or delete your personal information.",
      "Withdraw consent for data processing where applicable.",
      "Object to the processing of your data for specific purposes.",
      "To exercise your rights, please contact us using the information provided below.",
    ],
  },
  {
    title: "7. Third-Party Links",
    description: "FOMO Techno may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.",

  },
  {
    title: "8. Children's Privacy",
    description: "Our platform is not intended for children under the age of 13. We do not knowingly collect personal information from minors without parental consent.",

  },
  {
    title: "9. Changes to This Policy",
    description: "We reserve the right to modify this Privacy Policy at any time. Changes will be effective upon posting on our website. Please review this policy periodically for updates.",

  },
];

