"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { ScrollArea } from "../../components/ui/scroll-area";
import { motion } from "framer-motion";
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
  title: "My Skylss",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugit molestias, vitae minus aut temporibus optio! Sapiente quidem, laudantium, distinctio minus dolores natus dolor neque quia iusto vel, excepturi repudiandae",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="">
            <TabsTrigger>Expreience</TabsTrigger>
            <TabsTrigger>Education</TabsTrigger>
            <TabsTrigger>Skills</TabsTrigger>
            <TabsTrigger>About me</TabsTrigger>
          </TabsList>

          {/** Content */}
          <div>content</div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
