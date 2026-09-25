export type Role = "student" | "mentor";

export interface CardType {
  slug: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  allowedRoles?: Role[];
}

export interface Card {
  slug: string;
  title: string;
  description: string;
  image: string;
  allowedRoles?: Role[];
}

export interface ArticleSection {
  title: string;
  paragraphs: string[];
}

export interface Resource {
  title: string;
  url: string;
}

export interface ArticleData extends CardType {
  intro: string;
  secondImage: string;
  sections: ArticleSection[];
  resources: Resource[];
}

export interface Section {
  title: string;
  text?: string;
  items?: string[];
  description: string;
}

export interface PageData {
  slug: string;
  title: string;
  subtitle?: string;
  headerImage: string;
  secondaryImage?: string;
  sections: Section[];
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  published: boolean;
  createdAt: string;
}

export interface SearchParams {
  category?: string;
  pageNumber?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  authorName: string;
  authorRole: string;
  authorAvatarUrl: string;
}

export type Category =
  | "All"
  | "Advice"
  | "Book Recommendations"
  | "Successful Stories"
  | "Mentor Journeys"
  | "Motivation";

export type Category2 = Category;

export interface PaginationProps {
  pages: number;
  pageNumber: number;
  route: string;
}

export interface MentorsBlogClientProps {
  initialCategory: string;
  initialPage: number;
}

export interface FeaturedPostProps {
  authorName: string;
  authorRole: string;
  authorAvatarUrl: string;
  title: string;
  excerpt: string;
  id: string;
  filled: boolean;
}

export interface BlogCardProps {
  post: BlogPost;
}

export interface Mentor {
  slug: string;
  name: string;
  description: string;
  image: string;
  major: string;
  welcome: string;
  title: string;
  skills: string[];
  experience: number;
  bio: string;
  linkedin: string;
}
