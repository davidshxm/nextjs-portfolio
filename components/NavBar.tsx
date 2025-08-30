"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <header className="bg-gray-900 text-yellow-400 p-4">
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
