"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


export default function Hero() {
  return (
    <section id="hero" className="bg-dark text-white py-20 overflow-hidden">
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