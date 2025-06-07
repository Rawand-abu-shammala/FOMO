// src/components/mentors/CategoryTabs.tsx
"use client";

import * as React from "react";
import { Category } from "../../utils/type";
import { categories } from "../../utils/data";

interface CategoryTabsProps {
  value: Category;
  onChange: (val: Category) => void;
}

export function CategoryTabs({ value, onChange }: CategoryTabsProps) {
  return (
    <nav aria-label="Blog categories">
      <ul className="flex gap-8 overflow-x-auto">
        {categories.map((cat) => {
          const isActive = cat === value;
          return (
            <li key={cat}>
              <button
                onClick={() => onChange(cat)}
                className={`relative text-sm font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-800"
                } pb-2 transition`}
              >
                {cat}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
