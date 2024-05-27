import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Michael River Nilsson | Frontend Developer",
  description: "Michael River Nilsson, a passionate frontend developer specializing in React, Next.js, and Tailwind CSS. Explore my portfolio to see my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
