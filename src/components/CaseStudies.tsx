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
  { title: 'Design 1 : Site de services', img: '/Projet1.jpg', desc: 'Projet de site pour un dentiste (à venir)', link: '/project1' },
  { title: 'Design 2 : Petit jeu', img: '/Projet2.jpeg', desc: 'Prototype de jeu interactif (à venir)', link: '/project2' },
  { title: 'Design 3 : E-commerce', img: '/Projet3.jpeg', desc: 'Boutique en ligne (à venir)', link: '/project3' },
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
          <Link key={study.title} href={study.link} passHref>
            <motion.a
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative block overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 bg-black/70"
              aria-label={`En savoir plus sur ${study.title}`}
            >
              {/* Image with aspect ratio */}
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

              {/* Text Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 text-base mb-4">
                    {study.desc}
                  </p>
                </div>

                {/* Reveal button */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-16 transition-[max-height] duration-500 ease-in-out">
                  <div className=" group-hover:opacity-100 transition-opacity duration-500">
                    <span className="inline-block px-3 py-1 border border-cyan-700/50 text-white rounded-full hover:bg-cyan-900 transition text-sm">
                      En savoir plus ↗
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          </Link>
        ))}
      </div>
    </section>
  );
}