// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Inter } from "next/font/google";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./globals.css";
// import Header   from './components/Header'
// import {Footer}  from './components/Footer'

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const inter = Inter({ 
//   subsets: ['latin'] 
// });

// export const metadata: Metadata = {
//   title: "FOMO Techno",
//   description: "Learn about FOMO Techno and our mission to guide Arab students in tech.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
  
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} ${inter.className} flex flex-col min-h-screen bg-gray-50  antialiased`}
//       >
//         <Header />
//         <main className="flex-grow container mx-auto px-4 py-8">
//           {children}
//         </main>

//         <Footer />
        
//         <ToastContainer theme="colored" position="top-center"/>
//       </body>
//     </html>
//   );
// }






import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import LayoutClient from "./components/LayoutClient";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FOMO Techno",
  description:
    "Learn about FOMO Techno and our mission to guide Arab students in tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${inter.className}
          flex flex-col min-h-screen bg-gray-50 antialiased
        `}
      >
        <LayoutClient>{children}</LayoutClient>

        <ToastContainer theme="colored" position="top-center" />
      </body>
    </html>
  );
}
