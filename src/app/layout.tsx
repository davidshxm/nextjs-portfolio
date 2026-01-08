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
      <body className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center py-6 border-t border-gray-700">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-gray-300">
              © {new Date().getFullYear()} David Shim. Built with Next.js & Tailwind CSS.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}