// src/components/mentors/MentorsBlogClient.tsx
"use client";

import React from "react";
// import Link from "next/link";
// import { ArrowRight } from "@/components/icons";
import { CategoryTabs } from "./CategoryTabs";
import { BlogCard } from "./BlogCard";
import { FeaturedPost } from "./FeaturedPost";
import Pagination from "./Pagination";

import {
  Category,
  MentorsBlogClientProps,
} from "../../utils/type";
import { useMentorsBlog } from "@/hooks/useMentorsBlog";

export default function MentorsBlogClient({
  initialCategory,
  initialPage,
}: MentorsBlogClientProps) {
  const {
    selectedCategory,
    selectCategory,
    featuredPost,
    paginatedPosts,
    totalPages,
    safePage,
  } = useMentorsBlog({
    initialCategory: (initialCategory as Category) || "All",
    initialPage,
  });

  return (
    <section>
      {/* ---------------------- */}
      {/* 0. Breadcrumb Navigation */}
      {/* <div className="text-sm text-gray-500 mb-4 flex items-center">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <ArrowRight className="w-4 h-4 mx-2 text-gray-400" />
        <span className="text-gray-700">Mentors Blog</span>
      </div> */}

      {/* ---------------------- */}
      {/* 1. Category Tabs */}
      <div className="mb-6">
        <CategoryTabs
          value={selectedCategory}
          onChange={selectCategory}
        />
      </div>

      {/* ---------------------- */}
      {/* 2. Featured Card */}
      {featuredPost && (
        <FeaturedPost
          authorName={featuredPost.authorName}
          authorRole={featuredPost.authorRole}
          authorAvatarUrl={featuredPost.authorAvatarUrl}
          title={featuredPost.title}
          excerpt={featuredPost.excerpt}
          id={featuredPost.id}
          filled={false} 
        />
      )}

      {/* ---------------------- */}
      {/* 3. Large space between the featured card and paginated cards */}
      <div className="h-25" />

      {/* ---------------------- */}
      {/* 4. Paginated Blog Cards */}
      <div className="space-y-6 mb-4">
        {paginatedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* ---------------------- */}
      {/* 5. Spacer before Pagination */}
      <div className="h-6" />

      {/* ---------------------- */}
      {/* 6. Message when no posts are found */}
      {!featuredPost && (
        <p className="text-center text-gray-500">
          No posts found in “{selectedCategory}.”
        </p>
      )}

      {/* ---------------------- */}
      {/* 7. Pagination */}
      {paginatedPosts.length > 0 && totalPages > 1 && (
        <Pagination
          pageNumber={safePage}
          pages={totalPages}
          route={`/mentors-blog?category=${encodeURIComponent(
            selectedCategory
          )}`}
        />
      )}
    </section>
  );
}

