// src/components/mentors/MentorsBlogClient.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowRight } from "@/components/icons";
import { CategoryTabs } from "./CategoryTabs";
import { BlogCard } from "./BlogCard";
import { FeaturedPost } from "./FeaturedPost";
import Pagination from "./Pagination";

import {
  Category,
  MentorsBlogClientProps,
  BlogPost,
} from "../../utils/type";
import { allPosts, POSTS_PER_PAGE } from "../../utils/data";

export default function MentorsBlogClient({
  initialCategory,
  initialPage,
}: MentorsBlogClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for the selected category (starts from the initial value passed from the Server Component)
  const [selectedCategory, setSelectedCategory] =
    useState<Category>((initialCategory as Category) || "All");

  // State for the current page (starts from the initial value passed from the Server Component)
  const [currentPage, setCurrentPage] = useState<number>(
    isNaN(initialPage) ? 1 : initialPage
  );

  // When the category changes (via CategoryTabs), update the URL to page 1 with the new category
  useEffect(() => {
    router.replace(
      `/mentors-blog?category=${encodeURIComponent(
        selectedCategory
      )}&pageNumber=1`
    );
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  // When the pageNumber in the URL changes (via Pagination), synchronize currentPage
  useEffect(() => {
    const sp = searchParams.get("pageNumber");
    const pn = sp ? parseInt(sp, 10) : 1;
    if (!isNaN(pn)) {
      setCurrentPage(pn);
    }
  }, [searchParams]);

  // Filter posts by selected category or show all if "All"
  const filteredPosts =
    selectedCategory === "All"
      ? allPosts
      : allPosts.filter((p: BlogPost) => p.category === selectedCategory);

  // Take the first post as the featured card
  const featuredPost = filteredPosts[0] || null;
  // The rest will be used for pagination
  const remainingPosts = filteredPosts.slice(1);

  // Calculate total pages based on POSTS_PER_PAGE
  const totalPages = Math.ceil(remainingPosts.length / POSTS_PER_PAGE);
  // Ensure currentPage stays within [1 .. totalPages]
  const safePage = Math.min(Math.max(currentPage, 1), totalPages || 1);
  const startIdx = (safePage - 1) * POSTS_PER_PAGE;
  const paginatedSlice = remainingPosts.slice(
    startIdx,
    startIdx + POSTS_PER_PAGE
  );

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
          onChange={(cat) => setSelectedCategory(cat)}
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
        />
      )}

      {/* ---------------------- */}
      {/* 3. Large space between the featured card and paginated cards */}
      <div className="h-25" />

      {/* ---------------------- */}
      {/* 4. Paginated Blog Cards */}
      <div className="space-y-6 mb-4">
        {paginatedSlice.map((post: BlogPost) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* ---------------------- */}
      {/* 5. Spacer before Pagination */}
      <div className="h-6" />

      {/* ---------------------- */}
      {/* 6. Message when no posts are found */}
      {filteredPosts.length === 0 && (
        <p className="text-center text-gray-500">
          No posts found in “{selectedCategory}.”
        </p>
      )}

      {/* ---------------------- */}
      {/* 7. Pagination */}
      {remainingPosts.length > POSTS_PER_PAGE && (
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

