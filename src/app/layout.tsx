import "./globals.css";
import NavBar from "@/components/NavBar"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio showcasing design interests, projects, and contact info",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow p-6">{children}</main>
        <footer className="bg-gray-900 text-white text-center p-4">
          © {new Date().getFullYear()} My Portfolio
        </footer>
      </body>
    </html>
  );
}