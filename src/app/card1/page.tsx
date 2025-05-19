// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

interface Section {
  heading: string;
  body: string;
}
interface ResourceLink {
  label: string;
  href: string;
}
interface Resources {
  learningPlatforms: ResourceLink[];
  recommendedBooks: ResourceLink[];
  tools: ResourceLink[];
}
interface Project {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  sections: Section[];
  resources: Resources;
}

const projectData: Project = {
  slug: 'software-engineering',
  title: 'Software Engineering: Bridging Academia And The Job Market',
  description:
    'Software engineering is a dynamic field that blends theoretical knowledge with practical applications. In this article, we’ll explore how students can leverage university courses to bridge the gap between theory and industry demands.',
  heroImage: '/images/software-engineering-hero.png', // ضع مسار الصورة الصحيح
  sections: [
    {
      heading: 'Academic Disciplines In The Technology Field',
      body: `1. Computer Science (CS)
Focus: Algorithms, data structures, computational theory, and problem-solving.
Key Courses: Discrete mathematics, operating systems, artificial intelligence, and software architecture.
Industry Connection: Foundational for software engineering, AI development, and cybersecurity.

2. Information Technology (IT)
Focus: IT infrastructure, networking, databases, and security.
Key Courses: Network administration, cloud computing, IT security, and database management.
Industry Connection: Essential for system administration, cloud engineering, and IT support.

3. Software Engineering (SE)
Focus: Applying engineering principles to software development.
Key Courses: Software development life cycle (SDLC), Agile methodologies, DevOps, and software testing.
Industry Connection: Directly aligned with software development, DevOps engineering, and QA testing.

4. Data Science & Artificial Intelligence
Focus: Data analysis, machine learning, deep learning, and AI ethics.
Key Courses: Statistics, Python for data science, machine learning models, and big data technologies.
Industry Connection: Crucial for data analytics, AI engineering, and business intelligence roles.

5. Cybersecurity
Focus: Protecting systems from cyber threats and vulnerabilities.
Key Courses: Cryptography, ethical hacking, digital forensics, and network security.
Industry Connection: Leads to careers in cybersecurity analysis, ethical hacking, and penetration testing.`,
    },
    {
      heading: 'Bridging The Gap: How To Leverage University Courses For The Job Market',
      body: `1. Apply Theoretical Knowledge to Practical Projects: Work on real-world projects, open-source contributions, and internships.

2. Learn Industry Tools & Technologies: Git, Docker, Kubernetes, AWS, Azure, GCP, DevOps methodologies.

3. Participate in Coding Competitions & Hackathons: Platforms like LeetCode, Codeforces, and Kaggle.

4. Network with Industry Professionals: Meetups, LinkedIn, conferences, and online communities (Reddit, Discord, Stack Overflow).

5. Gain Certifications & Specialized Training: AWS Certified Developer, Google Cloud Engineer, CompTIA Security.

6. Develop Soft Skills & Business Acumen: Communication, teamwork, problem-solving, project management, and client collaboration.`,
    },
  ],
  resources: {
    learningPlatforms: [
      { label: 'Coursera', href: 'https://www.coursera.org' },
      { label: 'Udemy', href: 'https://www.udemy.com' },
      { label: 'EdX', href: 'https://www.edx.org' },
      { label: 'Pluralsight', href: 'https://www.pluralsight.com' },
    ],
    recommendedBooks: [
      { label: 'Clean Code: A Handbook Of Agile Software Craftsmanship', href: '#' },
      { label: 'Design Patterns: Elements Of Reusable Object-Oriented Software', href: '#' },
      { label: 'Code Complete', href: '#' },
    ],
    tools: [
      { label: 'Visual Studio Code', href: 'https://code.visualstudio.com' },
      { label: 'Docker', href: 'https://www.docker.com' },
      { label: 'Postman', href: 'https://www.postman.com' },
    ],
  },
};

export async function generateStaticParams() {
  return [{ slug: projectData.slug }];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  if (params.slug !== projectData.slug) {
    return { title: 'Not Found' };
  }
  return {
    title: projectData.title,
    description: projectData.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  if (params.slug !== projectData.slug) notFound();

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{projectData.title}</CardTitle>
          <CardDescription className="mt-1">
            {projectData.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={projectData.heroImage}
            alt={projectData.title}
            width={800}
            height={400}
            className="rounded-lg mb-6"
          />
          <div className="space-y-6">
            {projectData.sections.map((sec) => (
              <div key={sec.heading}>
                <h2 className="text-2xl font-semibold mb-2">{sec.heading}</h2>
                {sec.body.split('\n').map((line, idx) => (
                  <p key={idx} className="leading-relaxed mb-1">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium mb-2">Learning Platforms</h4>
            <ul className="list-disc list-inside">
              {projectData.resources.learningPlatforms.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} target="_blank" className="underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Recommended Books</h4>
            <ul className="list-disc list-inside">
              {projectData.resources.recommendedBooks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Communities & Useful Tools</h4>
            <ul className="list-disc list-inside">
              {projectData.resources.tools.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} target="_blank" className="underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
