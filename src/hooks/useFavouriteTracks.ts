"use client";

import { useCallback, useEffect, useState } from "react";

const FAVOURITE_TRACKS_KEY = "favouriteTracks";

function readFavouriteTracks(): string[] {
  try {
    const value: unknown = JSON.parse(
      window.localStorage.getItem(FAVOURITE_TRACKS_KEY) ?? "[]"
    );

    return Array.isArray(value)
      ? value.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

export function useFavouriteTracks() {
  const [favouriteTracks, setFavouriteTracks] = useState<string[]>([]);

  useEffect(() => {
    setFavouriteTracks(readFavouriteTracks());
  }, []);

  const toggleFavouriteTrack = useCallback((slug: string) => {
    setFavouriteTracks((currentTracks) => {
      const nextTracks = currentTracks.includes(slug)
        ? currentTracks.filter((track) => track !== slug)
        : [...currentTracks, slug];

      window.localStorage.setItem(
        FAVOURITE_TRACKS_KEY,
        JSON.stringify(nextTracks)
      );

      return nextTracks;
    });
  }, []);

  const removeFavouriteTrack = useCallback((slug: string) => {
    setFavouriteTracks((currentTracks) => {
      const nextTracks = currentTracks.filter((track) => track !== slug);
      window.localStorage.setItem(
        FAVOURITE_TRACKS_KEY,
        JSON.stringify(nextTracks)
      );

      return nextTracks;
    });
  }, []);

  return {
    favouriteTracks,
    toggleFavouriteTrack,
    removeFavouriteTrack,
  };
}
