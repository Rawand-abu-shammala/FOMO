// src/components/mentors/BlogCard.tsx
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { BlogCardProps } from "../../utils/type";

export function BlogCard({ post }: BlogCardProps) {
  // Split the author’s name into first name and the rest
  const nameParts = post.authorName.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <Card className="w-full rounded-2xl border-none shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="flex flex-row">
        {/* Avatar and name section on the left */}
        <div className="flex-shrink-0 w-[110px] p-4 flex flex-col items-center">
          <Image
            src={post.authorAvatarUrl}
            alt={post.authorName}
            width={110}
            height={110}
            className="rounded-full object-cover"
          />
          {/* Display first name and last name */}
          <div className="mt-2 flex space-x-1">
            <span className="text-sm font-medium text-gray-900 whitespace-nowrap">
              {firstName}
            </span>
            <span className="text-sm font-medium text-gray-900 whitespace-nowrap">
              {lastName}
            </span>
          </div>
        </div>

        {/* Content section (title + excerpt + read link) on the right */}
        <div className="flex flex-col justify-between flex-1 p-4">
          {/* Title and excerpt */}
          <div>
            <span className="block text-lg font-semibold text-gray-900">
              {post.title}
            </span>
            <p className="mt-2 text-sm text-gray-700">{post.excerpt}</p>
          </div>

          {/* 'read more' link at the bottom */}
          <div className="mt-4">
            <Link
              href={`/mentors-blog/${post.id}`}
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              read more
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
