// src/components/mentors/Pagination.tsx
import * as React from "react";
import Link from "next/link";
import ChevronLeftIcon from "@/components/icons/arrow-left";
import ChevronRightIcon from "@/components/icons/arrow-right";
import { PaginationProps } from "../../utils/type";

export default function Pagination({ pageNumber, pages, route }: PaginationProps) {
  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);
  const prev = pageNumber - 1;
  const next = pageNumber + 1;

  return (
    <nav aria-label="Pagination" className="flex items-center justify-end mt-8 space-x-2">
      {/* Previous button */}
      {pageNumber > 1 ? (
        <Link
          href={`${route}${route.includes("?") ? "&" : "?"}pageNumber=${prev}`}
          className="flex items-center justify-center w-7 h-7 bg-gray-200 text-gray-600 hover:bg-gray-300 transition rounded-md"
        >
          <ChevronLeftIcon className="w-3 h-3" />
        </Link>
      ) : (
        <div className="flex items-center justify-center w-7 h-7 bg-gray-100 text-gray-300 rounded-md">
          <ChevronLeftIcon className="w-3 h-3" />
        </div>
      )}

      {/* Page numbers */}
      {pagesArray.map((p) => {
        const isActive = p === pageNumber;
        return isActive ? (
          <span
            key={p}
            className="flex items-center justify-center w-7 h-7 bg-blue-600 text-white text-xs font-medium rounded-md"
          >
            {p}
          </span>
        ) : (
          <Link
            key={p}
            href={`${route}${route.includes("?") ? "&" : "?"}pageNumber=${p}`}
            className="flex items-center justify-center w-7 h-7 bg-gray-200 text-gray-600 hover:bg-gray-300 text-xs rounded-md transition"
          >
            {p}
          </Link>
        );
      })}

      {/* Next button */}
      {pageNumber < pages ? (
        <Link
          href={`${route}${route.includes("?") ? "&" : "?"}pageNumber=${next}`}
          className="flex items-center justify-center w-7 h-7 bg-gray-200 text-gray-600 hover:bg-gray-300 transition rounded-md"
        >
          <ChevronRightIcon className="w-3 h-3" />
        </Link>
      ) : (
        <div className="flex items-center justify-center w-7 h-7 bg-gray-100 text-gray-300 rounded-md">
          <ChevronRightIcon className="w-3 h-3" />
        </div>
      )}
    </nav>
  );
}
