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

// export interface Section {
//   heading: string;
//   body: string;
// }
// export interface ResourceLink {
//   label: string;
//   href: string;
// }
// export interface Resources {
//   learningPlatforms: ResourceLink[];
//   recommendedBooks: ResourceLink[];
//   tools: ResourceLink[];
// }
// export interface Project {
//   slug: string;
//   title: string;
//   description: string;
//   heroImage: string;
//   sections: Section[];
//   resources: Resources;
// }