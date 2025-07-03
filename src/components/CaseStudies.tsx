"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Study {
  title: string;
  img: string;
  desc: string;
  link: string;
}

const studies: Study[] = [
  { title: 'Design 1 : Barber Shop MAYOU', img: '/barber-shop.jpeg', desc: 'Site de réservation pour un barbier', link: 'https://seg-devoir2.vercel.app/' },
  { title: 'Design 2 : MAYOU Card', img: '/mayou-card.png', desc: 'Prototype interactif du jeu de mémoire MAYOU Card avec drapeaux.', link: 'https://seg-devoir3.vercel.app/' },
  { title: 'Design 3 : E-commerce MAYOU', img: '/Projet3.jpeg', desc: 'Boutique en ligne MAYOU de prêt-à-porter : filtres facettes, panier, paiement et retour d’avis', link: 'https://seg-devoir4.vercel.app/' },
  { title: 'Design 4 : Analyse & Visualisation', img: '/Projet4.jpg', desc: 'Dashboard de données sportives (à venir)', link: '/project4' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-title"
      className="px-6 py-16 md:py-2 bg-dark"
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2
          id="case-studies-title"
          className="text-info text-[3rem] md:text-[5rem] font-extrabold select-none pointer-events-none"
        >
          Études de cas
        </h2>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
        {studies.map((study) => (
            <motion.div
              key={study.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`En savoir plus sur ${study.title}`}
                className="group relative block overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 bg-black/70"
              >
                {/* Image */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src={study.img}
                    alt={study.title}
                    fill
                    className="object-cover brightness-30 group-hover:brightness-50 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>

                {/* Text */}
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-300 text-base mb-4">{study.desc}</p>
                  </div>
                  <div className="overflow-hidden max-h-0 group-hover:max-h-16 transition-[max-height] duration-500 ease-in-out">
                    <span className="inline-block px-3 py-1 border border-cyan-700/50 text-white rounded-full hover:bg-cyan-900 transition text-sm">
                      En savoir plus ↗
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
            ))}
      </div>
    </section>
  );
}