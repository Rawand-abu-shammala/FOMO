import { Card } from './type';

export const cards: Card[] = [
  {
    slug: 'software-engineering',
    title: 'Software Engineering',
    description: 'Master the essentials of software engineering and build your path to success in tech.',
    image: '/assets/images/software-engineering.svg',
  },
  {
    slug: 'learn-how-to-learn',
    title: 'Learn how to learn in the tech industry',
    description: 'Discover effective learning strategies to excel in the tech industry and boost your career growth.',
    image: '/assets/images/learn-how-to-learn.svg',
  },
  {
    slug: 'tracks',
    title: 'Tracks',
    description: 'Explore various tech tracks, featuring resources, videos, and expert insights to guide your career.',
    image: '/assets/images/tracks.svg',
  },
  {
    // slug: 'english-for-se',
    slug: 'learn-english-for-software',
    title: 'Learn English for Software Engineering',
    description: 'Improve your English skills for success in software engineering.',
    image: '/assets/images/learn-english.svg',
  },
  {
    slug: 'fundamentals-of-technology',
    title: 'Fundamentals',
    description: 'Understand the core principles and concepts of technology.',
    image: '/assets/images/fundamentals.svg',
  },
  {
    slug: 'mentors-blog',
    title: 'Mentors Blog',
    description: 'Get inspired and informed through expert advice and success stories from industry mentors.',
    image: '/assets/images/mentors-blog.svg',
  },
];




// src/utils/data.tsx
import { BlogPost } from "./type";

// How many posts to show per page (excluding the featured post)
export const POSTS_PER_PAGE = 3;

// Mock data for all posts. In a real app, you would fetch this from an API or database.
export const allPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Advice for Students on Their UX/UI Journey",
    excerpt:
      "Starting your UX/UI journey? 🚀 Gain valuable insights and practical tips to build a strong foundation in user experience and interface design. Learn how to develop essential skills, create a standout portfolio, and stay ahead in the ever-evolving design industry. Whether you're a beginner or looking to refine your expertise, this guide will help you navigate your path to becoming a successful UX/UI designer.",
    category: "Advice",
    authorName: "Jane Doe",
    authorRole: "UI/UX Designer",
    authorAvatarUrl: "/assets/images/avatar1.svg",
  },
  {
    id: "post-2",
    title: "Successful UX/UI Journeys: Inspiring Student Stories",
    excerpt:
      "Discover the inspiring journeys of students who transformed their careers through UX/UI design! 🌟 From beginners to professionals, these success stories showcase real experiences, challenges, and achievements in the world of user experience and interface design. Get motivated by their insights and see how learning UX/UI can open doors to exciting opportunities!",
    category: "Successful Stories",
    authorName: "John Smith",
    authorRole: "UI/UX Designer",
    authorAvatarUrl: "/assets/images/avatar2.svg",
  },
  {
    id: "post-3",
    title: "Stay Inspired on Your UX/UI Journey",
    excerpt:
      "The UX/UI journey is full of challenges, but every step brings you closer to mastery! 💡 Keep learning, experimenting, and pushing your creativity. Every great designer was once a beginner—stay curious, embrace feedback, trust the process. Your hard work today will shape the amazing designs of tomorrow. Keep going!",
    category: "Motivation",
    authorName: "Alice Johnson",
    authorRole: "UI/UX Designer",
    authorAvatarUrl: "/assets/images/avatar3.svg",
  },
  {
    id: "post-4",
    title: "Top 5 Books Every UX Designer Must Read",
    excerpt:
      "Level up your UX skills with these five essential reads! 📚 From wireframing fundamentals to advanced usability testing techniques, these books will guide you through every phase of user-centered design. Perfect for beginners and pros alike—learn from the experts and reshape your workflow.",
    category: "Book Recommendations",
    authorName: "Emily Clark",
    authorRole: "UI/UX Designer",
    authorAvatarUrl: "/assets/images/avatar4.svg",
  },
  {
    id: "post-5",
    title: "My Mentor Journey: From Zero to Freelance UX Expert",
    excerpt:
      "Learn how I went from a complete novice to a successful freelance UX consultant in under 2 years. This mentor journey covers everything from networking with industry pros to landing my first paid gig. If you’re looking for a roadmap to break in, you’ll find it right here!",
    category: "Mentor Journeys",
    authorName: "Michael Lee",
    authorRole: "UI/UX Designer",
    authorAvatarUrl: "/assets/images/avatar4.svg",
  },
  {
    id: "post-6",
    title: "How to Get Feedback That Actually Improves Your Designs",
    excerpt:
      "Feedback can make or break your design process. In this article, we cover what to do and what not to do when requesting constructive criticism. From choosing the right people to framing the right questions, learn how to turn feedback into tangible improvements.",
    category: "Advice",
    authorName: "Sophie Turner",
    authorRole: "UI/UX Designer",
    authorAvatarUrl: "/assets/images/avatar4.svg",
  },
];





// src/utils/data.tsx
import { Category } from "./type";

// All available category labels
export const categories: Category[] = [
  "All",
  "Advice",
  "Book Recommendations",
  "Successful Stories",
  "Mentor Journeys",
  "Motivation",
];









