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

// export const projectData: Project = {

//   slug: 'software-engineering',
//   title: 'Software Engineering: Bridging Academia And The Job Market',
//   description:
//     'Software engineering is a dynamic field that blends theoretical knowledge with practical applications. In this article, we’ll explore how students can leverage university courses to bridge the gap between theory and industry demands.',
//   heroImage: '/images/software-engineering-hero.png', // ضع مسار الصورة الصحيح
//   sections: [
//     {
//       heading: 'Academic Disciplines In The Technology Field',
//       body: `1. Computer Science (CS)
// Focus: Algorithms, data structures, computational theory, and problem-solving.
// Key Courses: Discrete mathematics, operating systems, artificial intelligence, and software architecture.
// Industry Connection: Foundational for software engineering, AI development, and cybersecurity.

// 2. Information Technology (IT)
// Focus: IT infrastructure, networking, databases, and security.
// Key Courses: Network administration, cloud computing, IT security, and database management.
// Industry Connection: Essential for system administration, cloud engineering, and IT support.

// 3. Software Engineering (SE)
// Focus: Applying engineering principles to software development.
// Key Courses: Software development life cycle (SDLC), Agile methodologies, DevOps, and software testing.
// Industry Connection: Directly aligned with software development, DevOps engineering, and QA testing.

// 4. Data Science & Artificial Intelligence
// Focus: Data analysis, machine learning, deep learning, and AI ethics.
// Key Courses: Statistics, Python for data science, machine learning models, and big data technologies.
// Industry Connection: Crucial for data analytics, AI engineering, and business intelligence roles.

// 5. Cybersecurity
// Focus: Protecting systems from cyber threats and vulnerabilities.
// Key Courses: Cryptography, ethical hacking, digital forensics, and network security.
// Industry Connection: Leads to careers in cybersecurity analysis, ethical hacking, and penetration testing.`,
//     },
//     {
//       heading: 'Bridging The Gap: How To Leverage University Courses For The Job Market',
//       body: `1. Apply Theoretical Knowledge to Practical Projects: Work on real-world projects, open-source contributions, and internships.

// 2. Learn Industry Tools & Technologies: Git, Docker, Kubernetes, AWS, Azure, GCP, DevOps methodologies.

// 3. Participate in Coding Competitions & Hackathons: Platforms like LeetCode, Codeforces, and Kaggle.

// 4. Network with Industry Professionals: Meetups, LinkedIn, conferences, and online communities (Reddit, Discord, Stack Overflow).

// 5. Gain Certifications & Specialized Training: AWS Certified Developer, Google Cloud Engineer, CompTIA Security.

// 6. Develop Soft Skills & Business Acumen: Communication, teamwork, problem-solving, project management, and client collaboration.`,
//     },
//   ],
//   resources: {
//     learningPlatforms: [
//       { label: 'Coursera', href: 'https://www.coursera.org' },
//       { label: 'Udemy', href: 'https://www.udemy.com' },
//       { label: 'EdX', href: 'https://www.edx.org' },
//       { label: 'Pluralsight', href: 'https://www.pluralsight.com' },
//     ],
//     recommendedBooks: [
//       { label: 'Clean Code: A Handbook Of Agile Software Craftsmanship', href: '#' },
//       { label: 'Design Patterns: Elements Of Reusable Object-Oriented Software', href: '#' },
//       { label: 'Code Complete', href: '#' },
//     ],
//     tools: [
//       { label: 'Visual Studio Code', href: 'https://code.visualstudio.com' },
//       { label: 'Docker', href: 'https://www.docker.com' },
//       { label: 'Postman', href: 'https://www.postman.com' },
//     ],
//   },
// };





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