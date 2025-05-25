"use client";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css"; // your Tailwind/globals
import Head from "next/head";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portfolio de Youssuf Helaly</title>
        <meta
          name="description"
          content="Portfolio de Youssuf Helaly, fullstack engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gray-900 text-white">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="/">
                Youssuf Helaly
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Afficher la navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#hero">
                      Accueil
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      À propos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#how-i-work">
                      Comment je travaille
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#case-studies">
                      Études de cas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="text-center py-4 text-gray-500">
          © 2025 Youssuf Helaly. Tous droits réservés.
        </footer>
      </body>
    </html>
  );
}

