// src/components/ArticleEditor.tsx
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { ArticleData } from '../utils/type';

export default function ArticleEditor({ initialArticle }: { initialArticle: ArticleData }) {
  const router = useRouter();
  const [article, setArticle] = useState<ArticleData>(initialArticle);
  const [sectionsJSON, setSectionsJSON] = useState(JSON.stringify(initialArticle.sections, null, 2));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSave() {
    setError(null);

    // محاولة تحويل ال JSON مع تحقق مبسّط
    let parsedSections: ArticleData['sections'];
    try {
  parsedSections = JSON.parse(sectionsJSON) as ArticleData['sections'];
} catch {
  setError('صيغة الأقسام غير صحيحة. تأكد من JSON.');
  return;
}

    try {
      const payload = { ...article, sections: parsedSections };
      setSaving(true);
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || 'Save failed');
      }
      setSaving(false);
      router.refresh();
      alert('تم الحفظ');
    } catch (err: unknown) {
      setSaving(false);
      // نتحقق إن الخطأ من نوع Error عشان نقدر نقرأ message
      if (err instanceof Error) {
        setError(err.message || 'خطأ أثناء الحفظ');
      } else {
        setError('حدث خطأ غير متوقع');
      }
    }
  }

  return (
    <div className="bg-white p-4 rounded shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label>
          Title
          <input value={article.title} onChange={(e) => setArticle({ ...article, title: e.target.value })} className="w-full input" />
        </label>
        <label>
          Description
          <input value={article.description} onChange={(e) => setArticle({ ...article, description: e.target.value })} className="w-full input" />
        </label>
        <label className="md:col-span-2">
          Intro
          <textarea value={article.intro} onChange={(e) => setArticle({ ...article, intro: e.target.value })} className="w-full textarea" />
        </label>
        <label className="md:col-span-2">
          Main image URL
          <input value={article.image} onChange={(e) => setArticle({ ...article, image: e.target.value })} className="w-full input" />
        </label>
        <label className="md:col-span-2">
          Sections (JSON)
          <textarea value={sectionsJSON} onChange={(e) => setSectionsJSON(e.target.value)} rows={10} className="w-full textarea" />

          <p className="text-sm text-gray-500">{`مثال لقسم: [{"title":"Heading","paragraphs":["p1","p2"]}]`}</p>
        </label>
        <label>
          Resources (comma separated titles|url, one per line)
          <textarea
            value={(article.resources || []).map(r => `${r.title}|${r.url}`).join('\n')}
            onChange={(e) => {
              const lines = e.target.value.split('\n').map(l => l.trim()).filter(Boolean);
              const res = lines.map(l=>{
                const [title, url] = l.split('|').map(x=>x?.trim()||'');
                return { title, url };
              });
              setArticle({ ...article, resources: res });
            }}
            rows={4}
            className="w-full textarea"
          />
        </label>
      </div>

      {error && <div className="text-red-600 mt-2">{error}</div>}

      <div className="mt-4">
        <button onClick={handleSave} disabled={saving} className="btn">
          {saving ? 'Saving...' : 'Save changes'}
        </button>
      </div>
    </div>
  );
}






// // src/components/ArticleEditor.tsx
// 'use client';
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import type { ArticleData } from '../utils/type';

// export default function ArticleEditor({ initialArticle }: { initialArticle: ArticleData }) {
//   const router = useRouter();
//   const [article, setArticle] = useState<ArticleData>(initialArticle);
//   const [sectionsJSON, setSectionsJSON] = useState(JSON.stringify(initialArticle.sections, null, 2));
//   const [saving, setSaving] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   async function handleSave() {
//     setError(null);
//     try {
//       const parsedSections = JSON.parse(sectionsJSON);
//       const payload = { ...article, sections: parsedSections };
//       setSaving(true);
//       const res = await fetch('/api/articles', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });
//       if (!res.ok) {
//         const txt = await res.text();
//         throw new Error(txt || 'Save failed');
//       }
//       setSaving(false);
//       // إعادة جلب الصفحة لتظهر التغييرات (server components ستجلب النسخة الجديدة)
//       router.refresh();
//       alert('تم الحفظ');
//     } catch (err: any) {
//       setSaving(false);
//       setError(err.message || 'خطأ');
//     }
//   }

//   return (
//     <div className="bg-white p-4 rounded shadow-sm mb-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <label>
//           Title
//           <input value={article.title} onChange={(e) => setArticle({ ...article, title: e.target.value })} className="w-full input" />
//         </label>
//         <label>
//           Description
//           <input value={article.description} onChange={(e) => setArticle({ ...article, description: e.target.value })} className="w-full input" />
//         </label>
//         <label className="md:col-span-2">
//           Intro
//           <textarea value={article.intro} onChange={(e) => setArticle({ ...article, intro: e.target.value })} className="w-full textarea" />
//         </label>
//         <label className="md:col-span-2">
//           Main image URL
//           <input value={article.image} onChange={(e) => setArticle({ ...article, image: e.target.value })} className="w-full input" />
//         </label>
//         <label className="md:col-span-2">
//           Sections (JSON)
//           <textarea value={sectionsJSON} onChange={(e) => setSectionsJSON(e.target.value)} rows={10} className="w-full textarea" />

//          <p className="text-sm text-gray-500">
//           {`مثال لقسم: [{"title":"Heading","paragraphs":["p1","p2"]}]`}
//              </p>


//         </label>
//         <label>
//           Resources (comma separated titles|url, one per line)
//           <textarea
//             value={(article.resources || []).map(r => `${r.title}|${r.url}`).join('\n')}
//             onChange={(e) => {
//               const lines = e.target.value.split('\n').map(l => l.trim()).filter(Boolean);
//               const res = lines.map(l=>{
//                 const [title, url] = l.split('|').map(x=>x?.trim()||'');
//                 return { title, url };
//               });
//               setArticle({ ...article, resources: res });
//             }}
//             rows={4}
//             className="w-full textarea"
//           />
//         </label>
//       </div>

//       {error && <div className="text-red-600 mt-2">{error}</div>}

//       <div className="mt-4">
//         <button onClick={handleSave} disabled={saving} className="btn">
//           {saving ? 'Saving...' : 'Save changes'}
//         </button>
//       </div>
//     </div>
//   );
// }
