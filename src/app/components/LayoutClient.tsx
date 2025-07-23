"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import { Footer } from "./Footer";

interface Props {
  children: ReactNode;
}

export default function LayoutClient({ children }: Props) {
  const path = usePathname(); 
  //We prohibit fashion in these paths:
  // const hideOn = ["/", "/login", "/signup"];
  const hideOn = ["/", "/login", "/signup/student", "/signup/mentor"];
  const isHidden = hideOn.includes(path);

  return (
    <>
      { !isHidden && <Header /> }
      {children}
      { !isHidden && <Footer /> }
    </>
  );
}
