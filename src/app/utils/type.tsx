export interface Card {
  slug: string;
  title: string;
  description: string;
  image: string;
}

// utils/type.ts
export interface CardType {
  slug: string;
  title: string;
  description: string;
  image: string;
  href?: string;
}

export interface ArticleSection {
  title: string;
  paragraphs: string[]; // كل فقرة كنص مستقل
  // لو حابب تضيف صورة خاصة بكل قسم، ممكن تضيف حقل image?: string
  // لكن هنا سنستخدم صورة ثانية عامة للمقال
}

export interface Resource {
  title: string;
  url: string;
}

export interface ArticleData extends CardType {
  intro: string;
  secondImage: string; // مسار الصورة الثانية داخل public/images
  sections: ArticleSection[];
  resources: Resource[];
}


// utils/type.ts
export interface CardType {
  slug: string;
  title: string;
  description: string;
  image: string;
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


// export interface PageData {
//   slug: string;
//   title: string;
//   subtitle: string;
//   headerImage: string;
//   content: string;
// }

// export interface PageData {
//   slug: string;
//   title: string;
//   subtitle: string;
//   headerImage: string;
//   content: string; // Markdown
// }


// export interface ResourceLink { name: string; url: string; }
// export interface PageData {
//   slug: string;
//   title: string;
//   subtitle: string;
//   headerImage: string;
//   content: string; // markdown نص الفقرات والصور
//   resources?: {
//     learningPlatforms?: ResourceLink[];
//     recommendedBooks?: ResourceLink[];
//     tools?: ResourceLink[];
//   };
// }


// export interface PageData {
//   slug: string;
//   title: string;
//   subtitle: string;
//   headerImage: string;
//   secondaryImage: string;
//   content: string;
// }


// export interface PageData {
//   slug: string;
//   title: string;
//   subtitle?: string;
//   headerImage: string;
//   secondaryImage?: string;
//   sections: Section[];
// }

// utils/type.ts

// export interface Section {
//   heading: string;
//   text?: string;
//   items?: string[];
// }


// export interface PageData {
//   slug: string;
//   title: string;
//   subtitle?: string;
//   headerImage: string;
//   secondaryImage?: string;
//   sections: Section[];
// }


// utils/type.ts
export interface Section {
  title: string; // يجب أن يتطابق هذا مع بيانات القسم
  text?: string;
  items?: string[];
}

export interface PageData {
  slug: string;
  title: string;
  subtitle?: string;
  headerImage: string;
  secondaryImage?: string;
  sections: Section[]; // تأكد من أن هذا الحقل موجود هنا
}


// export interface Card {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
// }


// export type Card = {
//   slug: string;
//   title: string;
//   description: string;
//   image: string;
// };


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
//   title: string;
//   description?: string;
//   items?: string[];
// }

export interface SearchParams {
  category?: string;
  pageNumber?: string;
}

// src/utils/type.tsx

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


// src/utils/type.tsx

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

export type Category2 =
  | "All"
  | "Advice"
  | "Book Recommendations"
  | "Successful Stories"
  | "Mentor Journeys"
  | "Motivation";



// src/utils/type.tsx

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

export interface PaginationProps {
  pages: number;      // total number of pages
  pageNumber: number; // current page (1-based)
  route: string;      // e.g. "/mentors-blog?category=Advice"
}



// src/utils/type.tsx

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

// export type Category =
//   | "All"
//   | "Advice"
//   | "Book Recommendations"
//   | "Successful Stories"
//   | "Mentor Journeys"
//   | "Motivation";

export interface PaginationProps {
  pages: number;      // total number of pages
  pageNumber: number; // current page (1-based)
  route: string;      // e.g. "/mentors-blog?category=Advice"
}

export interface MentorsBlogClientProps {
  initialCategory: string;
  initialPage: number;
}




// src/utils/type.tsx

// Defines the shape of URL search parameters for the blog page
export interface SearchParams {
  category?: string;
  pageNumber?: string;
}

// Represents a single blog post
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  authorName: string;
  authorRole: string;
  authorAvatarUrl: string;
}

// All possible categories
// export type Category =
//   | "All"
//   | "Advice"
//   | "Book Recommendations"
//   | "Successful Stories"
//   | "Mentor Journeys"
//   | "Motivation";

// Props passed into the Pagination component
export interface PaginationProps {
  pages: number;      // total number of pages
  pageNumber: number; // current page (1-based)
  route: string;      // e.g. "/mentors-blog?category=Advice"
}

// Props for FeaturedPost component
export interface FeaturedPostProps {
  authorName: string;
  authorRole: string;
  authorAvatarUrl: string;
  title: string;
  excerpt: string;
  id: string;
}

// Props for MentorsBlogClient component
export interface MentorsBlogClientProps {
  initialCategory: string;
  initialPage: number;
}





// src/utils/type.tsx

// Represents a single blog post
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  authorName: string;
  authorRole: string;
  authorAvatarUrl: string;
}

// Props for the BlogCard component
export interface BlogCardProps {
  post: BlogPost;
}

// (Other interfaces/types can follow…)





// src/utils/type.tsx

// Represents a single blog post
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  authorName: string;
  authorRole: string;
  authorAvatarUrl: string;
}

// All possible categories

// Props passed into the MentorsBlogClient component
export interface MentorsBlogClientProps {
  initialCategory: string;
  initialPage: number;
}





// src/utils/type.tsx

// Represents a single blog post
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  authorName: string;
  authorRole: string;
  authorAvatarUrl: string;
}

// Props for the FeaturedPost component
export interface FeaturedPostProps {
  authorName: string;
  authorRole: string;
  authorAvatarUrl: string;
  title: string;
  excerpt: string;
  id: string;
}

// Props passed into the MentorsBlogClient component
export interface MentorsBlogClientProps {
  initialCategory: string;
  initialPage: number;
}




// src/utils/type.tsx

// Represents a single blog post
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  authorName: string;
  authorRole: string;
  authorAvatarUrl: string;
}


// Props passed into the FeaturedPost component
export interface FeaturedPostProps {
  authorName: string;
  authorRole: string;
  authorAvatarUrl: string;
  title: string;
  excerpt: string;
  id: string;
}

// Props passed into the BlogCard component
export interface BlogCardProps {
  post: BlogPost;
}

// Props passed into the MentorsBlogClient component
export interface MentorsBlogClientProps {
  initialCategory: string;
  initialPage: number;
}





// src/utils/type.tsx

// … (other existing interfaces/types)

// Props for the Pagination component
export interface PaginationProps {
  pages: number;      // total number of pages
  pageNumber: number; // current page (1-based)
  route: string;      // e.g. "/mentors-blog?category=Advice"
}

// … (any remaining interfaces/types)





// src/utils/type.tsx

// … other interfaces/types …

/** Props for the FeaturedPost component */
export interface FeaturedPostProps {
  authorName: string;
  authorRole: string;
  authorAvatarUrl: string;
  title: string;
  excerpt: string;
  id: string;
}

// … remaining interfaces/types …






















