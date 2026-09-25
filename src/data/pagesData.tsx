// src/data/pagesData.ts
import { PageData } from "./types";

export const pagesData: PageData[] = [
  // 1) Actual page: Learn English For Software Engineering
  {
    slug: "learn-english-for-software-engineering",
    title: "Learn English For Software Engineering: Why It Matters & How To Improve",
    subtitle:
      "English is the universal language of technology and software development. Whether you’re writing code, reading documentation, or collaborating with international teams, strong English skills can open up new opportunities and enhance your career as a software engineer. This article explores why English is essential in the tech world and provides practical tips to improve your technical English skills.",
    heroImageUrl: "/images/learn-english-hero.jpg",
    heroImageAlt: "Learn English illustration with coding background",
    cardDescription:
      "أهمية اللغة الإنجليزية لمهندسي البرمجيات واستراتيجيات التحسين.",
    cardImage: "/images/learn-english-hero.jpg",
    sections: [
      // First section: Why English matters
      {
        heading: "Why English Is Important For Software Engineers",
        // This section uses subsections with their own headings and descriptions, but because the structure is simple, each point is separated into its own section below.
        // You can leave an introductory paragraph here or move directly to the subsections:
        paragraphs: [
          "في عالم البرمجة والتطوير، كثير من الموارد والمستندات والمجتمعات تعتمد الإنجليزية كلغة أساسية. إجادتك للإنجليزية تساعدك على الوصول إلى أحدث المعلومات والتواصل بفعالية."
        ]
      },
      // Subsections within "Why English Is Important"
      {
        heading: "Understanding Documentation & Resources",
        paragraphs: [
          "Most programming languages, frameworks, and libraries have official documentation written in English. Websites like Stack Overflow, GitHub, and MDN Web Docs provide solutions and discussions primarily in English. Having a good command of English allows you to understand and apply these resources effectively."
        ]
      },
      {
        heading: "Writing And Reading Code Comments",
        paragraphs: [
          "Clean, well-documented code is crucial for collaboration. Whether you’re writing comments in your code or reading someone else’s, using clear and concise English makes the development process smoother."
        ]
      },
      {
        heading: "Communicating With Global Teams",
        paragraphs: [
          "Tech companies often work with international teams, making English the primary language for meetings, emails, and project documentation. Strong communication skills help you express your ideas clearly and collaborate effectively."
        ]
      },
      {
        heading: "Attending Interviews And Conferences",
        paragraphs: [
          "Many top tech companies conduct interviews in English. Additionally, major conferences such as Google I/O, WWDC, and AWS re:Invent are held in English, making it essential to understand and engage with the latest industry trends."
        ]
      },
      // Add an image after the first section
      {
        heading: "", // The heading can be left empty or given a general title such as "Illustration"
        imageUrl: "/images/learn-english-section.jpg",
        imageAlt: "Workspace with English learning materials and code on screen"
      },
      // Second section: How to improve your English for software engineering
      {
        heading: "How To Improve Your English For Software Engineering",
        paragraphs: [
          "فيما يلي خطوات عملية لتحسين مهاراتك في الإنجليزية بمجال هندسة البرمجيات."
        ]
      },
      {
        heading: "1. Learn Technical Vocabulary",
        paragraphs: [
          "Familiarize yourself with common software engineering terms such as: Algorithm, API, Backend, Framework, Debugging, Deployment, Code review, Repository, Version control, Cloud computing."
        ],
        listItems: [
          "Reading blogs, watching tutorials, and using flashcards can help reinforce these terms."
        ]
      },
      {
        heading: "2. Read and Write in English Daily",
        paragraphs: [
          "Read documentation on sites like MDN, W3Schools, and GitHub.",
          "Write code comments and commit messages in English.",
          "Start a technical blog to explain programming concepts in simple terms."
        ]
      },
      {
        heading: "3. Engage in Online Communities",
        paragraphs: [
          "Participate in Stack Overflow discussions.",
          "Contribute to open-source projects on GitHub and write README files in English.",
          "Join tech forums and LinkedIn groups to discuss programming topics."
        ]
      },
      {
        heading: "4. Practice Speaking and Listening",
        paragraphs: [
          "Watch YouTube tutorials or listen to tech podcasts in English.",
          "Join English-speaking coding meetups on platforms like Meetup.com.",
          "Practice explaining coding concepts aloud, as if teaching someone else."
        ]
      },
      {
        heading: "5. Take an English Course for Tech Professionals",
        paragraphs: [
          "If you want structured learning, consider taking an English for Software Engineering course. These courses focus on technical vocabulary, communication skills, and documentation writing to help you become more confident in professional settings."
        ]
      },
      // Resources section (the image showed the title Resources without clear content below it; you can add actual links or leave it empty)
      {
        heading: "Resources",
        paragraphs: [
          // If you have actual links, you can add them as follows:
          // "• English for Tech Professionals course: https://example.com", 
          // Or leave the resources array below instead of this paragraph.
        ]
      }
    ],
    resources: [
      // You can fill this list with links to technical English courses or learning websites:
      { label: "Stack Overflow", url: "https://stackoverflow.com" },
      { label: "MDN Web Docs", url: "https://developer.mozilla.org" },
      { label: "W3Schools", url: "https://www.w3schools.com" },
      { label: "Meetup.com", url: "https://www.meetup.com" },
      // If you have a specific course:
      // { label: "English for Software Engineers Course", url: "https://example.com/course" },
    ],
    seo: {
      title: "Learn English For Software Engineering: Why It Matters & How To Improve",
      description:
        "English is the universal language in technology. تعرف على أهمية الإنجليزية لمهندسي البرمجيات واستراتيجيات عملية لتحسين مهاراتك التقنية."
    }
  },

  // 2) Your second page - placeholder example (adjust the actual content based on your image/design)
  {
    slug: "software-engineering", 
    title: "Software Engineering: Bridging Academia And The Job Market",
    subtitle: "كيف يجسر مجال هندسة البرمجيات الفجوة بين الدراسة الجامعية وسوق العمل",
    heroImageUrl: "/images/topic2-hero.jpg",
    heroImageAlt: "Illustration for software engineering bridging academia and job market",
    cardDescription:
      "فهم كيفية جسر فجوة الدراسة الأكاديمية ومتطلبات الصناعة.",
    cardImage: "/images/topic2-hero.jpg",
    sections: [
      {
        heading: "Industry Relevance in the Technology Field",
        paragraphs: [
          // Copy the actual content from your image here
        ]
      },
      // ... remaining sections after extracting the actual content from the image
    ],
    resources: [
      // Any actual links you have
    ],
    seo: {
      title: "Software Engineering: Bridging Academia And The Job Market",
      description:
        "مقال يشرح كيفية ربط دراسة هندسة البرمجيات بالمتطلبات العملية في سوق العمل."
    }
  },

  // 3) Third page - placeholder
  {
    slug: "learn-how-to-learn-tech-industry",
    title: "Learn How to Learn in the Tech Industry: Effective Techniques",
    subtitle: "تعلّم كيفية التعلم بفعالية في صناعة التكنولوجيا",
    heroImageUrl: "/images/topic3-hero.jpg",
    heroImageAlt: "Learn how to learn illustration",
    cardDescription: "تقنيات وأساليب التعلم الفعّال في مجال التقنية.",
    cardImage: "/images/topic3-hero.jpg",
    sections: [
      {
        heading: "Effective Learning Techniques in the Tech Industry",
        paragraphs: [
          // Copy the actual content here
        ]
      }
      // ...
    ],
    resources: [
      // Actual links
    ],
    seo: {
      title: "Learn How to Learn in the Tech Industry",
      description: "استراتيجيات وتقنيات للتعلم المستمر بفعالية في صناعة التكنولوجيا."
    }
  },

  // 4) Fourth page - placeholder
  {
    slug: "fundamentals-technology-software-engineering",
    title: "Fundamentals Of Technology & Software Engineering",
    subtitle: "الأساسيات في التكنولوجيا وهندسة البرمجيات",
    heroImageUrl: "/images/topic4-hero.jpg",
    heroImageAlt: "Fundamentals illustration",
    cardDescription: "مفاهيم أساسية في التكنولوجيا وهندسة البرمجيات.",
    cardImage: "/images/topic4-hero.jpg",
    sections: [
      {
        heading: "Basics of Technology",
        paragraphs: [
          // Copy the actual content here
        ]
      }
      // ...
    ],
    resources: [
      // Actual links
    ],
    seo: {
      title: "Fundamentals Of Technology & Software Engineering",
      description:
        "مقال يغطي الأساسيات الضرورية في مجال التكنولوجيا وهندسة البرمجيات."
    }
  }
];
