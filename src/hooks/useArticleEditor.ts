"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ArticleData } from "@/app/utils/type";

export function useArticleEditor(initialArticle: ArticleData) {
  const router = useRouter();
  const [article, setArticle] = useState<ArticleData>(initialArticle);
  const [sectionsJSON, setSectionsJSON] = useState(
    JSON.stringify(initialArticle.sections, null, 2)
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveArticle = async () => {
    setError(null);

    let sections: ArticleData["sections"];
    try {
      sections = JSON.parse(sectionsJSON) as ArticleData["sections"];
    } catch {
      setError("صيغة الأقسام غير صحيحة. تأكد من JSON.");
      return;
    }

    setSaving(true);
    try {
      const response = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...article, sections }),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || "Save failed");
      }

      router.refresh();
      alert("تم الحفظ");
    } catch (saveError: unknown) {
      setError(
        saveError instanceof Error
          ? saveError.message || "خطأ أثناء الحفظ"
          : "حدث خطأ غير متوقع"
      );
    } finally {
      setSaving(false);
    }
  };

  return {
    article,
    setArticle,
    sectionsJSON,
    setSectionsJSON,
    saving,
    error,
    saveArticle,
  };
}
