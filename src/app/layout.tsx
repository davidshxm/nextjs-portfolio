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
      <body className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50/50 via-indigo-50/40 to-amber-50/40">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-amber-900 text-white text-center py-6 border-t border-purple-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center gap-2 mb-1">
              <svg className="w-5 h-5 text-purple-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
              <p className="text-gray-200">
                © {new Date().getFullYear()} David Shim. Built with Next.js & Tailwind CSS.
              </p>
              <svg className="w-5 h-5 text-amber-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}