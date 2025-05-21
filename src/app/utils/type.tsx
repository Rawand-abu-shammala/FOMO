export interface Card {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Post {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  published: boolean
  createdAt: string
}

export interface Section {
  title: string;
  description?: string;
  items?: string[];
}