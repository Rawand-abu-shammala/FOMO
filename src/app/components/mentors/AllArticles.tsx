// src/components/mentors/AllArticles.tsx
"use client";

import * as React from "react";
import { allPosts } from "../../utils/data";
import { FeaturedPost } from "./FeaturedPost";

export function AllArticles() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6">All Articles</h2>
      <div className="grid gap-8">
        {allPosts.map((post) => (
          <FeaturedPost
            key={post.id}
            id={post.id}
            authorName={post.authorName}
            authorRole={post.authorRole}
            authorAvatarUrl={post.authorAvatarUrl}
            title={post.title}
            excerpt={post.excerpt}
            filled={false} 
          />
        ))}
      </div>
    </section>
  );
}
