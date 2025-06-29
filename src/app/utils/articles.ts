import type { ArticleData } from './type';

export const articles: ArticleData[] = [
  {
    slug: 'software-engineering',
    title: 'Software Engineering',
    description: 'How to connect what you learn at university with real-world industry demands.',
    image: '/assets/images/software-engineering.svg',
    intro: `In this article, we will explore how computer science and engineering graduates can bridge the gap between what they learn at university and the demands of the tech job market. We will discuss common challenges, required skills, and practical tips to start a successful career as a software developer/engineer.`,
    secondImage: '/assets/images/software-engineering-2.svg',
    sections: [
      {
        title: '1. Challenges of Transitioning from University to Industry',
        paragraphs: [
          `Many students feel a gap between theory and practice: curricula focus on fundamentals and algorithms, but the job market requires experience with tools, frameworks, and modern technologies.`,
          `University curricula are sometimes less up-to-date compared to actual needs such as DevOps and cloud computing.`
        ]
      },
      {
        title: '2. Essential Technical Skills Required',
        paragraphs: [
          `- Proficiency in a primary programming language (e.g., JavaScript/TypeScript, Python, or Java) and understanding clean code principles.`,
          `- Understanding data structures and algorithms and solving problems efficiently.`,
          `- Working with Git, CI/CD processes, and collaborating within development teams.`
        ]
      },
      {
        title: '3. Common Tools and Frameworks',
        paragraphs: [
          `- Frontend: React/Vue/Angular as needed.`,
          `- Backend: Node.js/Express, Django/Flask, or Spring Boot.`,
          `- Databases: SQL (PostgreSQL/MySQL) and NoSQL (MongoDB).`,
          `- DevOps and cloud computing: Docker, basics of Kubernetes, GitHub Actions, AWS/Azure/GCP basics.`
        ]
      },
      {
        title: '4. Building a Portfolio and Practical Projects',
        paragraphs: [
          `- Start with small complete projects, publish them on GitHub, and deploy using free or simple paid hosting.`,
          `- Explain the goal, technologies, and setup instructions in the README.`,
          `- Contribute to open-source or collaborative projects to gain real teamwork experience.`
        ]
      },
      {
        title: '5. Preparing for Technical Interviews',
        paragraphs: [
          `- Practice algorithm and data structure problems on platforms like LeetCode or HackerRank.`,
          `- Study system design principles for advanced challenges.`,
          `- Prepare stories about your experiences and cases where you solved problems or collaborated within a team.`
        ]
      },
      {
        title: '6. Professional Networking and Mentorship',
        paragraphs: [
          `- Attend meetups and virtual or local workshops to connect with professionals.`,
          `- Find an industry mentor to guide you on the path and skill development.`,
          `- Update your LinkedIn profile and share your projects or short articles to attract attention.`
        ]
      }
    ],
    resources: [
      { title: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/' },
      { title: 'LeetCode', url: 'https://leetcode.com/' },
      { title: 'GitHub Guides', url: 'https://guides.github.com/' },
      { title: 'Awesome Open Source', url: 'https://github.com/sindresorhus/awesome' },
      { title: 'Coursera: Software Engineering', url: 'https://www.coursera.org/browse/computer-science/software-development' },
    ]
  },
  {
    slug: 'learn-how-to-learn',
    title: 'Learn How To Learn',
    description: 'Strategies to optimize your learning process in tech and beyond.',
    image: '/assets/images/learn-how-to-learn.svg',
    intro: `In this article, we will review strategies and techniques to help you learn faster and deeper, especially in the tech field but applicable to any other domain.`,
    secondImage: '/assets/images/learn-how-to-learn-2.svg',
    sections: [
      {
        title: '1. Deep Understanding vs. Surface Memorization',
        paragraphs: [
          `Focus on understanding the “why” and “how” instead of rote memorization.`,
          `Use diagrams or metaphors to connect concepts with your existing knowledge.`
        ]
      },
      {
        title: '2. Spaced Repetition Technique',
        paragraphs: [
          `Use tools like Anki for spaced reviews that reinforce memory.`,
          `Schedule reviews so you revise before forgetting, then at gradually longer intervals.`
        ]
      },
      {
        title: '3. Active Learning',
        paragraphs: [
          `Apply immediately: write code, solve problems, participate in small projects.`,
          `Use the Feynman technique: explain concepts to someone or write them down to discover areas needing reinforcement.`
        ]
      },
      {
        title: '4. Chunking',
        paragraphs: [
          `Break a large topic into small understandable parts, then combine them to see the full picture.`,
          `Prioritize each part and link it to what comes before and after.`
        ]
      },
      {
        title: '5. Multiple but Focused Sources',
        paragraphs: [
          `Read books, watch videos, listen to podcasts, and attend workshops; but avoid distraction from too many sources—choose carefully.`
        ]
      },
      {
        title: '6. Mental and Physical Health',
        paragraphs: [
          `Ensure sufficient sleep to support memory.`,
          `Use the Pomodoro technique (25 minutes focus, 5 minutes break).`,
          `Exercise to boost brain function and reduce stress.`
        ]
      }
    ],
    resources: [
      { title: 'Anki', url: 'https://apps.ankiweb.net/' },
      { title: 'Coursera: Learning How to Learn', url: 'https://www.coursera.org/learn/learning-how-to-learn' },
      { title: 'Feynman Technique', url: 'https://fs.blog/2012/04/feynman-technique/' },
      { title: 'Pomodoro Technique', url: 'https://francescocirillo.com/pages/pomodoro-technique' },
    ]
  },
  {
    slug: 'fundamentals-of-technology',
    title: 'Fundamentals',
    description: 'Core Concepts and Principles Every Developer Should Know',
    image: '/assets/images/fundamentals.svg',
    intro: `This article covers the fundamentals: from computer architecture, operating systems, and networks to software engineering principles, databases, and security.`,
    secondImage: '/assets/images/fundamentals-2.svg',
    sections: [
      {
        title: '1. Computer Architecture',
        paragraphs: [
          `Computer components: CPU, memory, storage, I/O, and how they communicate.`,
          `Instruction cycle (Fetch-Decode-Execute) to understand program performance.`
        ]
      },
      {
        title: '2. Operating Systems',
        paragraphs: [
          `Processes & threads, memory management, and virtual memory.`,
          `File systems and I/O, and how the system manages resources.`
        ]
      },
      {
        title: '3. Computer Networks',
        paragraphs: [
          `OSI model, transport layers (TCP/UDP), network layer (IP), HTTP/HTTPS, and DNS.`
        ]
      },
      {
        title: '4. Software Engineering Principles',
        paragraphs: [
          `SDLC: planning, design, development, testing, and maintenance.`,
          `Agile/Scrum/DevOps methodologies, CI/CD, and software quality.`
        ]
      },
      {
        title: '5. Databases',
        paragraphs: [
          `Relational vs. NoSQL and when to use each.`,
          `Schema design and normalization of relationships.`
        ]
      },
      {
        title: '6. Cybersecurity',
        paragraphs: [
          `Basics of encryption, authentication/authorization.`,
          `Software updates, vulnerability monitoring, and securing APIs.`
        ]
      }
    ],
    resources: [
      { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/' },
      { title: 'freeCodeCamp Backend', url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/' },
      { title: 'Coursera: Computer Architecture', url: 'https://www.coursera.org/learn/computer-architecture' },
      { title: 'OWASP Top Ten', url: 'https://owasp.org/www-project-top-ten/' },
    ]
  },
  {
    slug: 'learn-english-for-software',
    title: 'Learn English For Software Engineering',
    description: 'Strategies and resources to improve your English as a software developer.',
    image: '/assets/images/learn-english.svg',
    intro: `Mastering English is important for developers: from reading documentation to communicating with global teams. We will see why and how to gradually develop your skills.`,
    secondImage: '/assets/images/learn-english-2.svg',
    sections: [
      {
        title: '1. Importance of English for Developers',
        paragraphs: [
          `Most documentation, code, and tools are in English.`,
          `Communication in tech communities and job interviews.`
        ]
      },
      {
        title: '2. Improving Technical Reading',
        paragraphs: [
          `Read documentation and code examples regularly, and use translation tools for unfamiliar terms.`
        ]
      },
      {
        title: '3. Improving Writing',
        paragraphs: [
          `Write summaries or technical blog posts.`,
          `Contribute to project documentation and request peer reviews.`
        ]
      },
      {
        title: '4. Improving Listening and Speaking',
        paragraphs: [
          `Listen to tech podcasts in English.`,
          `Participate in virtual meetings or language exchange apps for conversation practice.`
        ]
      },
      {
        title: '5. Tools and Resources',
        paragraphs: [
          `Coursera and Udemy for technical English courses,`,
          `Grammarly for writing checks, technical vocabulary lists on Quizlet/Memrise.`
        ]
      }
    ],
    resources: [
      { title: 'Stack Overflow', url: 'https://stackoverflow.com/' },
      { title: 'GitHub Docs', url: 'https://docs.github.com/' },
      { title: 'Grammarly', url: 'https://www.grammarly.com/' },
      { title: 'TED Talks Technology', url: 'https://www.ted.com/topics/technology' },
    ]
  },
  {
    slug: 'tracks',
    title: 'Tracks',
    description: 'Explore various tech tracks, resources, and how to choose the right path for you.',
    image: '/assets/images/tracks.svg',
    intro: `In this article, we will review the main tracks in tech and how to choose the most suitable path for you based on your interests, goals, and current experience level.`,
    secondImage: '/assets/images/tracks-2.svg',
    sections: [
      {
        title: '1. Why Choose a Specific Track?',
        paragraphs: [
          `Choosing a clear track helps you focus your efforts and build specialized skills.`,
          `However, don’t lock yourself into a single track completely: start with a broad understanding and then specialize.`
        ]
      },
      {
        title: '2. Common Tracks',
        paragraphs: [
          `- Frontend Development: learn HTML/CSS/JS and frameworks like React/Vue.`,
          `- Backend Development: learn Node.js, Python, or Java, databases, and API design.`,
          `- Full-stack: combines both frontend and backend, suitable for those who enjoy both.`,
          `- DevOps/SRE: learn CI/CD, Docker, Kubernetes, and cloud infrastructure management.`,
          `- Data Science/ML: statistics, Python, libraries like Pandas and Scikit-learn, machine learning and modeling.`
        ]
      },
      {
        title: '3. How to Decide',
        paragraphs: [
          `- Evaluate your interests: Do you enjoy UI design or working with data?`,
          `- Try small projects in each area: build a simple web page, a small API, and a data-centric project.`,
          `- Read job requirements: understand how the local/global market demands your potential skills.`
        ]
      },
      {
        title: '4. Building a Learning Roadmap for Each Track',
        paragraphs: [
          `- Gather resources for beginner, intermediate, and advanced levels for each technology in the track.`,
          `- Define small practical projects to gain tangible experience.`,
          `- Connect with professionals in the track and seek their advice.`
        ]
      },
      {
        title: '5. Evolving Over Time',
        paragraphs: [
          `- Tracks change: new technologies emerge, so be prepared to keep learning.`,
          `- Don’t be afraid to switch tracks later if you discover a new passion or better opportunity.`
        ]
      }
    ],
    resources: [
      { title: 'Roadmap.sh', url: 'https://roadmap.sh/' },
      { title: 'Frontend Roadmap', url: 'https://roadmap.sh/frontend' },
      { title: 'Backend Roadmap', url: 'https://roadmap.sh/backend' },
      { title: 'DevOps Roadmap', url: 'https://roadmap.sh/devops' },
      { title: 'Data Science Roadmap', url: 'https://roadmap.sh/data-science' },
    ]
  },
  {
    slug: 'mentors-blog',
    title: 'Mentors Blog',
    description: 'Get inspired through expert advice and success stories from industry mentors.',
    image: '/assets/images/mentors-blog.svg',
    intro: `In this section, we will share short articles and interviews with experienced professionals and technologists, their practical advice and experiences to inspire you on your journey.`,
    secondImage: '/assets/images/mentors-blog-2.svg',
    sections: [
      {
        title: '1. Conversations with Mentors',
        paragraphs: [
          `Share real experiences: how did they start their journey? What major challenges did they face? How did they overcome them?`,
          `Could include a short interview with a mentor sharing a golden tip for learners.`
        ]
      },
      {
        title: '2. Tips for Building a Successful Career Path',
        paragraphs: [
          `- The importance of continuous learning and staying updated with new technologies.`,
          `- How to build a professional network and leverage it effectively.`,
          `- Advice for maintaining work-life balance.`
        ]
      },
      {
        title: '3. Lessons from Real Projects',
        paragraphs: [
          `- Showcase simple case studies: a project where a mentor faced a specific challenge and how they solved it.`,
          `- The tools they used and how they chose them based on project requirements.`
        ]
      },
      {
        title: '4. Finding a Mentor and Building an Effective Relationship',
        paragraphs: [
          `- Searching in tech communities and platforms like LinkedIn or specialized mentorship platforms.`,
          `- How to communicate respectfully and ask for advice clearly.`,
          `- Maintaining a continuous relationship: providing updates on your progress and thanking them for their time.`
        ]
      }
    ],
    resources: [
      { title: 'LinkedIn', url: 'https://www.linkedin.com/' },
      { title: 'Dev.to Community', url: 'https://dev.to/' },
      { title: 'Medium: Programming', url: 'https://medium.com/topic/programming' },
    ]
  }
];