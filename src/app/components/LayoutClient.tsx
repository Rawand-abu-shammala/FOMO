"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import { Footer } from "./Footer";

interface Props {
  children: ReactNode;
}

export default function LayoutClient({ children }: Props) {
  const path = (usePathname() ?? "").replace(/\/+$/, "") || "/";

  const shouldHideHeaderAndFooter =
    path === "/" || path === "/login" || path.startsWith("/signup");

  return (
    <>
      {!shouldHideHeaderAndFooter && <Header />}
      {children}
      {!shouldHideHeaderAndFooter && <Footer />}
    </>
  );
}
