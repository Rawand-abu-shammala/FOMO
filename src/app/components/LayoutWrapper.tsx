"use client";

import LayoutClient from "./LayoutClient";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return <LayoutClient>{children}</LayoutClient>;
}
