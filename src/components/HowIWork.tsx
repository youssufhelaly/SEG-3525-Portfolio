// src/components/HowIWork.tsx
"use client";
import React from "react";

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-5 bg-dark text-white">
      <div className="container text-center">
        <h2 className="h2 text-info mb-3">Comment je travaille</h2>
        <p>
          Actuellement, je suis le cours <b>SEG3525 – Conception et analyse d’interfaces usagers</b> pour approfondir mes compétences en UI/UX.<br/>
          J’apprends les fondamentaux du design UI/UX et j’applique HTML, CSS, Bootstrap, React pour créer des interfaces modernes.<br/>
          Je m’appuie sur des ressources comme&nbsp;
          <a href="https://www.nngroup.com" target="_blank" rel="noopener noreferrer" className="text-info no-underline">
            Nielsen Norman Group
          </a>
          &nbsp;et le&nbsp;
          <a href="https://www.w3schools.com/bootstrap5/" target="_blank" rel="noopener noreferrer" className="text-info no-underline">
            tutoriel Bootstrap 5
          </a>
          .<br/><br/>
          Plus tard, j’intégrerai la conception centrée utilisateur et l’évaluation heuristique.
        </p>
      </div>
    </section>
  );
}
