// src/components/mentors/FeaturedPost.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import SaveIcon from "@/components/icons/save-2";
import { Button } from "@/components/ui/button";
import { FeaturedPostProps } from "../../utils/type";

export function FeaturedPost({
  authorName,
  authorRole,
  authorAvatarUrl,
  title,
  excerpt,
  id,
}: FeaturedPostProps) {
  const [saved, setSaved] = React.useState(false);

  React.useEffect(() => {
    const isSaved = Boolean(localStorage.getItem(`saved_${id}`));
    setSaved(isSaved);
  }, [id]);

  const handleSave = () => {
    if (saved) {
      localStorage.removeItem(`saved_${id}`);
    } else {
      localStorage.setItem(
        `saved_${id}`,
        JSON.stringify({ id, authorName, authorRole, authorAvatarUrl, title, excerpt })
      );
    }
    setSaved(!saved);
  };

  return (
    <div className="relative mb-16 bg-gray-50 rounded-2xl shadow-sm p-6">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleSave}
        aria-label={saved ? "Unsave excerpt" : "Save excerpt"}
        className="absolute top-4 right-4 p-0 focus:ring-0"
      >
        <SaveIcon
          filled={saved}
          className={`w-5 h-5 ${saved ? "text-black" : "text-gray-500 hover:text-gray-700"}`}
        />
      </Button>

      <div className="flex items-center space-x-4 mb-4">
        <div className="w-10 h-10 relative rounded-full overflow-hidden">
          <Image
            src={authorAvatarUrl}
            alt={authorName}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900">{authorName}</span>
          <span className="text-xs text-gray-500">{authorRole}</span>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-sm text-gray-700 mb-4">{excerpt}</p>

      <Link
        href={`/mentors-blog/${id}`}
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        read more
      </Link>
    </div>
  );
}
