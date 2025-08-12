"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import { Footer } from "./Footer";

interface Props {
  children: ReactNode;
}

export default function LayoutClient({ children }: Props) {
  const rawPath = usePathname() ?? "";
  // remove trailing slash(es)
  let path = rawPath.replace(/\/+$/, "");
  // if root becomes empty string, keep it as "/"
  if (path === "") path = "/";

  const hideOn = ["/", "/login", "/signup", "/signup/student", "/signup/mentor"];
  // also hide for any subpath that starts with /signup (optional)
  const isHidden = hideOn.includes(path) || path.startsWith("/signup");

  return (
    <>
      {!isHidden && <Header />}
      {children}
      {!isHidden && <Footer />}
    </>
  );
}
