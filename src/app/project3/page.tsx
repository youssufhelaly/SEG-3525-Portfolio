"use client";
import React from "react";
import Link from "next/link";
export default function Projet3() {
  return (
    <main className="bg-dark text-white min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <div className="container text-center py-5">
        <h1 className="display-4 text-info mb-4">Design 3 : E-commerce</h1>
        <p className="lead">Boutique en ligne.<br /><b>À venir</b></p>
        <Link href="/" className="btn btn-outline-info mt-4">
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
