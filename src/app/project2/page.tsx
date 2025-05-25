"use client";
import React from "react";
import Link from "next/link";
export default function Projet2() {
  return (
    <main className="bg-dark text-white min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <div className="container text-center py-5">
        <h1 className="display-4 text-info mb-4">Design 2 : Petit jeu</h1>
        <p className="lead">Prototype de jeu interactif.<br /><b>À venir</b></p>
        <Link href="/" className="btn btn-outline-info mt-4">
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
