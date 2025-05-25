import Link from "next/link";

// app/projet1/page.js
export default function Projet3() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-4xl font-semibold mb-4">Design 3 : E-commerce</h1>
      <p className="text-gray-300 mb-6">Page à venir…</p>
      <Link
        href="/"
        className="inline-block px-4 py-2 border border-cyan-500 rounded hover:bg-cyan-700 transition"
      >
        ← Retour à l&apos;accueil
      </Link>
    </main>
  );
}
