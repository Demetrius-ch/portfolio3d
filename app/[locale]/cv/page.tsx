"use client";

import { useCallback } from "react";
import { useLocale } from "next-intl";
import { Button } from "../../../components/ui/button";

const CvPage = () => {
  const locale = useLocale();
  const isEn = locale === "en";

  const handlePrint = useCallback(() => {
    if (typeof window !== "undefined") {
      window.print();
    }
  }, []);

  return (
    <section className="min-h-[80vh] py-10 xl:py-16 flex justify-center">
      <div className="container mx-auto flex justify-center">
        <div className="w-full max-w-4xl rounded-2xl bg-white text-black shadow-2xl px-8 py-10 md:px-12 md:py-12 print:shadow-none print:rounded-none">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 border-b border-neutral-200 pb-6 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                BANGAKE <span className="text-emerald-600">Demetrius</span>
              </h1>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                {isEn
                  ? "Front-end / full-stack developer (TypeScript)"
                  : "Développeur front‑end / full‑stack TypeScript"}
              </p>
            </div>
            <div className="text-sm text-neutral-700 space-y-1">
              <p>
                {isEn
                  ? "Bangui, Central African Republic"
                  : "Bangui, République Centrafricaine"}
              </p>
              <p>
                {isEn ? "Phone: (+236) 72 05 11 17" : "Tél : (+236) 72 05 11 17"}
              </p>
              <p>Email : lgdemetrius@gmail.com</p>
              <p>
                GitHub :{" "}
                <a
                  href="https://github.com/Demetrius-ch"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-600 underline"
                >
                  github.com/Demetrius-ch
                </a>
              </p>
            </div>
          </header>

          {/* Bouton d'impression */}
          <div className="flex justify-end mb-6 print:hidden">
            <Button
              variant="outline"
              size="md"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-black"
              onClick={handlePrint}
            >
              {isEn ? "Print / Download as PDF" : "Imprimer / Télécharger en PDF"}
            </Button>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-neutral-800">
            {/* Profil */}
            <section>
              <h2 className="text-base font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-2">
                {isEn ? "Profile" : "Profil"}
              </h2>
              {isEn ? (
                <p>
                  Passionate full‑stack developer, founder and CEO of{" "}
                  <span className="font-semibold">C‑Dev</span> (a startup in
                  progress) helping young developers grow. I design and build
                  modern web applications with{" "}
                  <span className="font-semibold">
                    React, Next.js, TypeScript and Tailwind CSS
                  </span>
                  , focusing on UX, performance and code quality. Comfortable
                  working independently, consuming REST APIs and shipping
                  personal and open‑source projects to production.
                </p>
              ) : (
                <p>
                  Développeur full‑stack passionné, créateur et CEO de{" "}
                  <span className="font-semibold">C‑Dev</span> (startup en cours
                  de création) qui aide les jeunes développeurs à progresser. Je
                  conçois et développe des applications web modernes avec{" "}
                  <span className="font-semibold">
                    React, Next.js, TypeScript et Tailwind CSS
                  </span>
                  , en mettant l’accent sur l’UX, la performance et la qualité du
                  code. Habitué au travail en autonomie, à la consommation d’APIs
                  REST et à la mise en production de projets personnels et
                  open‑source.
                </p>
              )}
            </section>

            {/* Compétences */}
            <section>
              <h2 className="text-base font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-2">
                {isEn ? "Technical skills" : "Compétences techniques"}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">
                    {isEn ? "Languages" : "Langages"}
                  </p>
                  <p>JavaScript (ES6+), TypeScript, HTML5, CSS3, Go, SQL</p>
                </div>
                <div>
                  <p className="font-semibold">Front‑end</p>
                  <p>React, Next.js (App Router), React Router, Tailwind CSS, Framer Motion, Swiper</p>
                </div>
                <div>
                  <p className="font-semibold">Back‑end</p>
                  <p>Node.js, Express, Go (projets backend‑ikoue, auto-go)</p>
                </div>
                <div>
                  <p className="font-semibold">
                    {isEn
                      ? "Apps Store – Next.js, TypeScript, Tailwind CSS"
                      : "Apps Store – Next.js, TypeScript, Tailwind CSS"}
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      {isEn
                        ? "Modern apps store with filtering and highlighted apps, deployed on Vercel."
                        : "Store d’applications moderne avec filtrage et mise en avant des apps, déployé sur Vercel."}
                    </li>
                    <li>
                      {isEn
                        ? "Built with Next.js, TypeScript and Tailwind CSS."
                        : "Développé avec Next.js, TypeScript et Tailwind CSS."}
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">
                    {isEn ? "Databases" : "Bases de données"}
                  </p>
                  <p>Firebase/Firestore, PostgreSQL</p>
                </div>
                <div>
                  <p className="font-semibold">
                    {isEn ? "Tools & ecosystem" : "Outils & écosystème"}
                  </p>
                  <p>
                    Git, GitHub, npm, REST API,
                    {isEn ? " basic CI" : " intégration continue basique"}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">
                    {isEn ? "Other" : "Autres"}
                  </p>
                  <p>
                    {isEn
                      ? "Basic UI/UX, responsive design, internationalization (next-intl)"
                      : "UI/UX de base, responsive design, internationalisation (next‑intl)"}
                  </p>
                </div>
              </div>
            </section>

            {/* Expériences */}
            <section>
              <h2 className="text-base font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-2">
                {isEn ? "Experience" : "Expériences"}
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <p className="font-semibold">
                      {isEn ? "Founder & CEO – C‑Dev" : "Créateur & CEO – C‑Dev"}
                    </p>
                    <p className="text-neutral-500">
                      Bangui · 2024 – {isEn ? "Present" : "Présent"}
                    </p>
                  </div>
                  {isEn ? (
                    <>
                      <p className="italic text-neutral-600">
                        Startup helping young developers grow.
                      </p>
                      <ul className="list-disc list-inside mt-1">
                        <li>
                          Defined the product vision and built the C‑Dev identity
                          (logo, portfolio, GitHub presence).
                        </li>
                        <li>
                          Developed the marketing site and first learning
                          resources (roadmaps, practical projects).
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <p className="italic text-neutral-600">
                        Startup qui aide les jeunes développeurs à progresser.
                      </p>
                      <ul className="list-disc list-inside mt-1">
                        <li>
                          Définition de la vision produit et création de
                          l’identité C‑Dev (logo, portfolio, présence GitHub).
                        </li>
                        <li>
                          Développement du site vitrine et des premiers supports
                          pédagogiques (roadmaps, projets pratiques).
                        </li>
                      </ul>
                    </>
                  )}
                </div>

                <div>
                  <div className="flex justify-between">
                    <p className="font-semibold">
                      {isEn
                        ? "Front-end developer – Personal & freelance projects"
                        : "Développeur front‑end – Projets personnels & freelance"}
                    </p>
                    <p className="text-neutral-500">
                      Bangui · 2023 – {isEn ? "Present" : "Présent"}
                    </p>
                  </div>
                  <ul className="list-disc list-inside mt-1">
                    <li>
                      {isEn
                        ? "Built several web projects (portfolios, demo apps, responsive interfaces)."
                        : "Réalisation de plusieurs projets web (portfolios, applications de démonstration, interfaces responsives)."}
                    </li>
                    <li>
                      {isEn
                        ? "Collaborated via GitHub using branches and pull requests."
                        : "Collaboration via GitHub, utilisation de branches et pull requests pour gérer le code."}
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projets */}
            <section>
              <h2 className="text-base font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-2">
                {isEn ? "Key projects" : "Projets significatifs"}
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">
                    {isEn
                      ? "Personal portfolio – Next.js, TypeScript, Tailwind CSS"
                      : "Portfolio personnel – Next.js, TypeScript, Tailwind CSS"}
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      {isEn
                        ? "Portfolio site inspired by Dribbble templates, presenting my profile and work."
                        : "Site inspiré de templates Dribbble, présentant mon profil et mes projets."}
                    </li>
                    <li>
                      {isEn
                        ? "Multilingual navigation (fr/en) with next‑intl, animations (Framer Motion), sections Projects, Services, Contact."
                        : "Navigation multilingue (fr/en) avec next‑intl, animations (Framer Motion), sections Projets, Services, Contact."}
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">
                    {isEn
                      ? "My Pokédex – React, Tailwind CSS, React Router, Firebase"
                      : "Mon Pokédex – React, Tailwind CSS, React Router, Firebase"}
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      {isEn
                        ? "Consumption of the public PokeAPI."
                        : "Consommation de l’API publique PokeAPI."}
                    </li>
                    <li>
                      {isEn
                        ? "Favorites system and data persistence with Firebase."
                        : "Système de favoris et persistance des données avec Firebase."}
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">
                    {isEn
                      ? "TODO List React – React, CSS / Tailwind CSS"
                      : "TODO List React – React, CSS / Tailwind CSS"}
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      {isEn
                        ? "Task management app (simple CRUD)."
                        : "Application de gestion de tâches (CRUD simple)."}
                    </li>
                    <li>
                      {isEn
                        ? "Persistence in localStorage, clear and simple UI."
                        : "Persistance dans localStorage, UI claire et simple."}
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">
                    {isEn
                      ? "Ikoue (frontend + backend) – SCSS, Go, APIs"
                      : "Ikoue (front-end + back-end) – SCSS, Go, APIs"}
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      {isEn
                        ? "Worked on a SCSS front-end and Go backend (projects hosted on GitHub)."
                        : "Travail sur un front SCSS et un backend Go (projets hébergés sur GitHub)."}
                    </li>
                    <li>
                      {isEn
                        ? "Designed and consumed multiple REST endpoints."
                        : "Conception et consommation de plusieurs endpoints REST."}
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Formation */}
            <section>
              <h2 className="text-base font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-2">
                {isEn ? "Education" : "Formation"}
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="font-semibold">
                    {isEn
                      ? "Bachelor in Computer Engineering – Institut Supérieur de Technologie"
                      : "Licence en Génie Informatique – Institut Supérieur de Technologie"}
                  </p>
                  <p className="text-neutral-500">Bangui · 2021 – 2025</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">
                    {isEn
                      ? "Certifications & self‑learning (Tailwind CSS, JavaScript, React, TypeScript, Next.js)"
                      : "Certifications & auto‑formation (Tailwind CSS, JavaScript, React, TypeScript, Next.js)"}
                  </p>
                  <p className="text-neutral-500">
                    {isEn ? "Online · 2023 – 2025" : "En ligne · 2023 – 2025"}
                  </p>
                </div>
              </div>
            </section>

            {/* Divers */}
            <section>
              <h2 className="text-base font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-2">
                {isEn ? "Additional information" : "Informations complémentaires"}
              </h2>
              <div className="grid md:grid-cols-2 gap-2">
                <p>
                  <span className="font-semibold">
                    {isEn ? "Languages:" : "Langues :"}
                  </span>{" "}
                  {isEn
                    ? "French (native), Sango, English (technical reading)"
                    : "Français (natif), Sango, Anglais (lecture technique)"}
                </p>
                <p>
                  <span className="font-semibold">
                    {isEn ? "Availability:" : "Disponibilité :"}
                  </span>{" "}
                  {isEn
                    ? "Open to freelance and remote opportunities."
                    : "Ouvert aux opportunités freelance et remote."}

                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CvPage;

