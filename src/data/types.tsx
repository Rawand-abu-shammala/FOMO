// src/data/types.ts
export interface ResourceLink {
  label: string;
  url: string;
}

export interface SectionContent {
  heading: string;
  paragraphs?: string[];    // Text paragraphs below the heading
  listItems?: string[];     // Bulleted list, if present
  imageUrl?: string;        // Image path within public or an external URL
  imageAlt?: string;
}

export interface PageData {
  slug: string;             // Page path, for example "learn-english-for-software-engineering"
  title: string;            // Main page heading
  subtitle?: string;        // Introductory paragraph (summary or short introduction)
  heroImageUrl?: string;    // Large image at the top of the page
  heroImageAlt?: string;
  cardDescription: string;  // Short card description on the home page
  cardImage: string;        // Card image on the home page
  sections: SectionContent[]; 
  resources?: ResourceLink[]; 
  seo?: {
    title?: string;
    description?: string;
  };
}
