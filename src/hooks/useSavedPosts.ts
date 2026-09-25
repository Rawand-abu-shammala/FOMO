"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

export interface SavedPost {
    id: string;
    authorName: string;
    authorRole: string;
    authorAvatarUrl: string;
    title: string;
    excerpt: string;
}

const SAVED_POST_PREFIX = "saved_";

function readSavedPosts(): SavedPost[] {
    const posts: SavedPost[] = [];

    for (let index = 0; index < window.localStorage.length; index += 1) {
        const key = window.localStorage.key(index);
        if (!key?.startsWith(SAVED_POST_PREFIX)) continue;

        try {
            const value: unknown = JSON.parse(
                window.localStorage.getItem(key) ?? "null"
            );
            if (isSavedPost(value)) posts.push(value);
        } catch {
            // Ignore malformed saved-post entries.
        }
    }

    return posts;
}

function isSavedPost(value: unknown): value is SavedPost {
    if (!value || typeof value !== "object") return false;

    const post = value as Record<string, unknown>;
    return (
        typeof post.id === "string" &&
        typeof post.authorName === "string" &&
        typeof post.authorRole === "string" &&
        typeof post.authorAvatarUrl === "string" &&
        typeof post.title === "string" &&
        typeof post.excerpt === "string"
    );
}

export function useSavedPosts(post?: SavedPost) {
    const [posts, setPosts] = useState<SavedPost[]>([]);

    const refresh = useCallback(() => {
        setPosts(readSavedPosts());
    }, []);

    useEffect(() => {
        refresh();
    }, [refresh]);

    const saved = useMemo(
        () => (post ? posts.some((savedPost) => savedPost.id === post.id) : false),
        [post, posts]
    );

    const toggle = useCallback(() => {
        if (!post) return;

        if (saved) {
            window.localStorage.removeItem(`${SAVED_POST_PREFIX}${post.id}`);
        } else {
            window.localStorage.setItem(
                `${SAVED_POST_PREFIX}${post.id}`,
                JSON.stringify(post)
            );
        }

        refresh();
    }, [post, refresh, saved]);

    const remove = useCallback(
        (id: string) => {
            window.localStorage.removeItem(`${SAVED_POST_PREFIX}${id}`);
            setPosts((currentPosts) =>
                currentPosts.filter((savedPost) => savedPost.id !== id)
            );
        },
        []
    );

    return { posts, saved, toggle, remove };
}
