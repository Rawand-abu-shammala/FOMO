// File: src/components/ArticleAdminButtons.tsx
// -------------------------------
"use client";
import { useRouter } from "next/navigation";

export default function ArticleAdminButtons({ slug }: { slug: string }) {
  const router = useRouter();
  const onEdit = () => router.push(`/mentor/editor?edit=${encodeURIComponent(slug)}`);
  const onDelete = async () => {
    if (!confirm("أكيد بدك تحذف المقال؟")) return;
    const res = await fetch(`/api/articles?slug=${encodeURIComponent(slug)}`, { method: "DELETE" });
    if (res.ok) {
      alert("تم الحذف");
      router.push("/");
    } else alert("فشل الحذف");
  };

  return (
    <div className="flex gap-2">
      <button onClick={onEdit} className="px-3 py-1 rounded bg-indigo-600 text-white text-sm">✏️ Edit</button>
      <button onClick={onDelete} className="px-3 py-1 rounded bg-red-600 text-white text-sm">🗑 Delete</button>
    </div>
  );
}
