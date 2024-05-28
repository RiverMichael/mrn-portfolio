import { Merriweather_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

const merriweather_sans = Merriweather_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Michael River Nilsson | Frontend Developer",
  description:
    "Michael River Nilsson, a passionate frontend developer specializing in React, Next.js, and Tailwind CSS. Explore my portfolio to see my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={merriweather_sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
