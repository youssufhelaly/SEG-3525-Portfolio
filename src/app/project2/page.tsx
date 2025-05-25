import Link from "next/link";
"use client"
// app/projet1/page.js
export default function Projet2() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-4xl font-semibold mb-4">Design 2 : Petit jeu</h1>
      <p className="text-gray-300 mb-6">Page à venir…</p>
      <Link
        href="/"
        className="inline-block px-4 py-2 border border-cyan-500 rounded hover:bg-cyan-700 transition"
      >
        ← Retour à l’accueil
      </Link>
    </main>
  );
}
