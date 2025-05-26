"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const menuItems = [
    { name: "Accueil", href: "#hero" },
    { name: "Méthodo", href: "#how-i-work" },
    { name: "Cas", href: "#case-studies" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const widthPct = 100 / menuItems.length;
  const leftPct = hoveredIndex !== null ? hoveredIndex * widthPct : 0;
  const indicatorOpacity = hoveredIndex !== null ? 1 : 0;

  return (
    <nav className="fixed top-4 inset-x-0 z-50 pointer-events-none">
      <div className="pointer-events-auto mx-auto w-full max-w-md">
        <ul
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative grid grid-cols-3 mx-auto gap-x-6 px-4 backdrop-blur-sm bg-black/30 rounded-full py-1 text-white text-sm border border-white/30"
        >
          {/* Animated background indicator */}
          <motion.div
            className="absolute inset-y-1 bg-white/20 rounded-full pointer-events-none"
            initial={false}
            animate={{ left: `${leftPct}%`, width: `${widthPct}%`, opacity: indicatorOpacity }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />

          {menuItems.map((item, idx) => (
            <li
              key={item.name}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
            >
              <Link
                href={item.href}
                className="relative z-10 block py-1 px-3 text-white text-center no-underline hover:text-white [text-decoration:none]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
