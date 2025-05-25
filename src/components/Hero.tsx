"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Home() {
  return (
    <main className="bg-dark text-white min-vh-100">
      <Hero />
      <About />
      <HowIWork />
      <CaseStudies />
    </main>
  );
}

function Hero() {
  return (
    <section id="hero" className="bg-dark text-white py-5 overflow-hidden">
      <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative">
        {/* Spotlight Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            pointerEvents: 'none',
            background: 'radial-gradient(ellipse at center, rgba(0,255,255,0.3), transparent 45%)',
          }}
        />

        {/* Profile & Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="d-flex align-items-center mb-4 position-relative"
        >
          <div
            className="rounded-circle overflow-hidden border border-2 border-info"
            style={{ width: '80px', height: '80px' }}
          >
            <Image
              src="/profile.jpeg"
              alt="Portrait of Youssuf Helaly"
              width={80}
              height={80}
              className="object-cover"
              priority
            />
          </div>
          <div className="ms-3 text-start">
            <h1 className="h4 mb-0">Youssuf Helaly</h1>
            <p className="text-info text-uppercase small mb-0">🇨🇦 Based in Canada</p>
          </div>
        </motion.div>

        {/* Title & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="d-flex align-items-center justify-content-center gap-4 position-relative flex-wrap"
        >
          <div className="text-center">
            <h2 className="display-1 fw-bold mb-0">FULLSTACK</h2>
            <h2 className="display-1 fw-bold mb-0">ENGINEER</h2>
          </div>
          <motion.a
            href="mailto:youssufhelaly@gmail.com"
            className="inline-flex items-center px-4 py-2 border-2 border-cyan-700/50 text-white rounded-full hover:bg-cyan-900 transition"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <HiOutlineMail className="me-2" /> Contact Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
          className="d-flex gap-3 mt-4"
        >
          {[
            { href: "https://linkedin.com/in/youssuf-helaly-644957295", icon: FaLinkedin, label: "LinkedIn" },
            { href: "https://github.com/youssufhelaly", icon: FaGithub, label: "GitHub" },
            { href: "/Resume.pdf", icon: FaFileAlt, label: "Resume" },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-cyan-700/50 hover:bg-cyan-900 text-white transition"
              aria-label={label}
            >
              <Icon className="fs-4" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-5  text-white">
      <div className="container text-center">
        <h2 className="h2 text-info mb-3">À propos de moi</h2>
        <p>
          Étudiant en génie logiciel à l’Université d’Ottawa.<br />
          J’aime créer des applications web modernes, apprendre de nouvelles technologies et relever des défis techniques.<br />
          Passionné par le design d’interfaces, le développement backend et l’innovation logicielle.<br />
        </p>
      </div>
    </section>
  );
}

function HowIWork() {
  return (
    <section id="how-i-work" className="py-5 bg-dark text-white">
      <div className="container text-center">
        <h2 className="h2 text-info mb-3">Comment je travaille</h2>
        <p>
          Actuellement, je suis le cours <b>SEG3525 - Conception et analyse d'interfaces usagers</b> pour approfondir mes compétences en conception d’interfaces utilisateur.<br />
          J’apprends les principes fondamentaux du design UI/UX et j’applique HTML, CSS, Bootstrap, et React pour créer des interfaces modernes.<br />
          Je m’appuie sur des ressources reconnues, comme le site <a href="https://www.nngroup.com/" target="_blank" rel="noopener noreferrer" className="text-info">Nielsen Norman Group</a> et le <a href="https://www.w3schools.com/bootstrap5/index.php" target="_blank" rel="noopener noreferrer" className="text-info">tutoriel Bootstrap 5 de W3Schools</a>.<br />
          <br />
          Plus tard dans le semestre, j’intégrerai des concepts avancés comme la conception centrée sur l’utilisateur et l’évaluation heuristique.
        </p>
      </div>
    </section>
  );
}

function CaseStudies() {
  const studies = [
    { title: 'Design 1 : Site de services', img: '/Projet1.jpg', desc: 'Projet de site pour un dentiste (à venir)', link: '/project1/' },
    { title: 'Design 2 : Petit jeu', img: '/Projet2.jpeg', desc: 'Prototype de jeu interactif (à venir)', link: '/project2/' },
    { title: 'Design 3 : E-commerce', img: '/Projet3.jpeg', desc: 'Boutique en ligne (à venir)', link: '/project3/' },
    { title: 'Design 4 : Analyse & Visualisation', img: '/Projet4.jpg', desc: 'Dashboard de données sportives (à venir)', link: '/project4' },
  ];

  return (
    <section id="case-studies" className="py-5  text-white">
      <div className="container">
        <h2 className="h2 text-info text-center mb-4">Études de cas</h2>
        <div className="row g-4">
          {studies.map(({ title, img, desc, link }) => (
            <div className="col-12 col-sm-6 col-lg-3" key={title}>
              <a href={link} className="card bg-dark text-white h-100 text-decoration-none">
                <Image
                  src={img}
                  alt={title}
                  width={400}
                  height={240}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="h5 card-title">{title}</h3>
                  <p className="card-text">{desc}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
