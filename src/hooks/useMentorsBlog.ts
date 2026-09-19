"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { allPosts, POSTS_PER_PAGE } from "@/app/utils/data";
import type { BlogPost, Category } from "@/app/utils/type";

interface UseMentorsBlogOptions {
  initialCategory: Category;
  initialPage: number;
}

export function useMentorsBlog({
  initialCategory,
  initialPage,
}: UseMentorsBlogOptions) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [currentPage, setCurrentPage] = useState(() =>
    Number.isFinite(initialPage) && initialPage > 0 ? initialPage : 1
  );

  useEffect(() => {
    const pageFromUrl = Number.parseInt(searchParams.get("pageNumber") ?? "1", 10);
    setCurrentPage(Number.isFinite(pageFromUrl) && pageFromUrl > 0 ? pageFromUrl : 1);
  }, [searchParams]);

  const selectCategory = (category: Category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    router.replace(`/mentors-blog?category=${encodeURIComponent(category)}&pageNumber=1`);
  };

  const { featuredPost, paginatedPosts, totalPages, safePage } = useMemo(() => {
    const filteredPosts =
      selectedCategory === "All"
        ? allPosts
        : allPosts.filter((post: BlogPost) => post.category === selectedCategory);
    const [featuredPost, ...remainingPosts] = filteredPosts;
    const totalPages = Math.ceil(remainingPosts.length / POSTS_PER_PAGE);
    const safePage = Math.min(Math.max(currentPage, 1), totalPages || 1);
    const startIndex = (safePage - 1) * POSTS_PER_PAGE;

    return {
      featuredPost: featuredPost ?? null,
      paginatedPosts: remainingPosts.slice(startIndex, startIndex + POSTS_PER_PAGE),
      totalPages,
      safePage,
    };
  }, [currentPage, selectedCategory]);

  return {
    selectedCategory,
    selectCategory,
    featuredPost,
    paginatedPosts,
    totalPages,
    safePage,
  };
}
