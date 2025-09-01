"use client";

import Link from "next/link";
import { title } from "process";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "web Development",
    description:
      "Je conçois et développe des sites web optimisés pour tous les supports. Mon objectif est de fournir des plateformes rapides, sécurisées et adaptées aux besoins du client, en utilisant les technologies les plus récentes.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "je crée des expériences utilisateur fluides et esthétiques, en mettant l'accent sur l'argonie et l'accessibilité. Chaque design est pensé pour maximiser l'engagement et la satifsfaction des utilisateurs.",
    href: "",
  },
  {
    num: "03",
    title: "Logo design",
    description:
      "je conçois des logos uniques et professionnels qui reflètent la vision et les valeurs de votre marque. l'objectif: marquer les esprits avec un visuel simple, pertinent et impactant.",
    href: "",
  },
  {
    num: "04",
    title: "Développement mobile",
    description:
      "Je développe des applications Android et ios modernes, fluides et bien pensées. Mon objectif est d'offir une expérience utilisateur optimale, avec des fonctionnalités adaptées aux besoins réels.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-emerald-600 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-black text-3xl  " />
                  </Link>
                </div>
                {/**titre */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-emerald-600 transition-all duration-500">
                  {service.title}
                </h2>
                {/**description */}
                <p className="text-white/60">{service.description}</p>
                {/**bordure */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
