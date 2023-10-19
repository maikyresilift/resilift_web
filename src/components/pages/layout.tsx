import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Nav from "../organisms/nav/nav";
import Footer from "../organisms/footer/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>
        <Nav />
        {children}
      </main>
      <Footer />
    </>
  );
}
