"use client";
import { title } from "process";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  info: [
    {
      fieldName: "Name",
      fieldValue: " Chandler Demetrius",
    },
    {
      fieldName: "Phone",
      fieldValue: " (+236) 72 05 11 17 ",
    },
    {
      fieldName: "Experience",
      fieldValue: " 12+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "chandler.01",
    },
    {
      fieldName: "Nationnality",
      fieldValue: " Central African",
    },
    {
      fieldName: "Email",
      fieldValue: "triphelin@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languagrd",
      fieldValue: "French, English, Spanish",
    },
  ],
};

// experience data

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, hic quibusdam? Pariatur aliquam ipsam odit autem, officiis molestiae inventore, illo explicabo, nulla labore expedita distinctio corporis quae libero animi ipsa.",
  items: [
    {
      company: "IKOUE Developer",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Innova Tech.",
      position: "Front-End Developer Intern",
      duration: "Summer 2025",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2024 - 2025",
    },
    {
      company: "IST",
      position: "Student",
      duration: "2021-2025",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018-2019",
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2017-2018",
    },
  ],
};
// education data

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, hic quibusdam? Pariatur aliquam ipsam odit autem, officiis molestiae inventore, illo explicabo, nulla labore expedita distinctio corporis quae libero animi ipsa.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development JavaScript",
      duration: "2025",
    },
    {
      institution: "Stack Overflow",
      degree: "Frontend",
      duration: "2025",
    },
    {
      institution: "Online Course ",
      degree: "Programming Course",
      duration: "2024 - 2025",
    },
    {
      institution: "Community College (avec Github)",
      degree: "Changement de la technologie en RCA",
      duration: "2025",
    },
    {
      institution: "Insitut Superieur de Technoligie",
      degree: "Certifié en Génie Informatique",
      duration: "2024 - 2025",
    },
    {
      institution: "English School (CCU)",
      degree: "Diplôme niveau A1",
      duration: "2023-2024",
    },
  ],
};
// skills data
const skills = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugit molestias, vitae minus aut temporibus optio! Sapiente quidem, laudantium, distinctio minus dolores natus dolor neque quia iusto vel, excepturi repudiandae",
};

const Resume = () => {
  return <div> resume page</div>;
};
export default Resume;
