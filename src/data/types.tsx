// src/data/types.ts
export interface ResourceLink {
  label: string;
  url: string;
}

export interface SectionContent {
  heading: string;
  paragraphs?: string[];    // فقرات نصية تحت العنوان
  listItems?: string[];     // قائمة نقطية إن وجدت
  imageUrl?: string;        // مسار صورة ضمن public أو URL خارجي
  imageAlt?: string;
}

export interface PageData {
  slug: string;             // مسار الصفحة، مثلاً "learn-english-for-software-engineering"
  title: string;            // العنوان الرئيسي في الصفحة
  subtitle?: string;        // الفقرة التمهيدية (ملخّص أو مقدمة قصيرة)
  heroImageUrl?: string;    // الصورة الكبيرة أعلى الصفحة
  heroImageAlt?: string;
  cardDescription: string;  // الوصف القصير للبطاقة في الصفحة الرئيسية
  cardImage: string;        // صورة البطاقة في الصفحة الرئيسية
  sections: SectionContent[]; 
  resources?: ResourceLink[]; 
  seo?: {
    title?: string;
    description?: string;
  };
}
