"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
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
  title: "A Propos ",
  description:
    "Sur cette page, vous trouverez tout ce qui me concerne. vous pourriez toute fois me contacter via mon mail ou mon mobile.",
  info: [
    {
      fieldName: "Name",
      fieldValue: " Chandler Demetrius",
    },
    {
      fieldName: "Phone",
      fieldValue: " (+236) 72 05 11 17 / 75 48 39 42 ",
    },
    {
      fieldName: "Experience",
      fieldValue: " 04+ Years",
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
      fieldValue: "myemail@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "French, English, Sano",
    },
  ],
};

// experience data

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Dans cette section, vous trouverez un résumé de mes expériences professionnelles et stages, illustrant les compétences que j'ai développées et les projets auxquelles j'ai participé",
  items: [
    {
      company: "Caucus African",
      position: "Collaborateur avec IKOUE",
      duration: "Une semaine",
    },
    {
      company: "Guiwara/Louma",
      position:
        "Collecte des données et prise de rendez-vous auprès des entreprises",
      duration: " Un mois",
    },
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
    "Mon parcours éducatif reflète ma passion pour la technologie et mon engagement à apprendre continuellement. De la formation académique aux certifications en lignes, chaque étape m'a rapproché de mes objextifs professionles. ",
  items: [
    {
      institution: "Believemy ",
      degree: "Certfication en Taliwindcss",
      duration: "2025",
    },
    {
      institution: "Classroom",
      degree: "Development JavaScript",
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
    "Sur cette partie, vous trouverez l'ensemble des langages, frameworks et outils que j'ai appris et que je maîtrise.",
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
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <SiTypescript />,
      name: "typescrit",
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
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Expreience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/** Content */}
          <div className="min-h-[70vh] w-full">
            {/** experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-emerald-500">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/**dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-emerald-500"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-emerald-500">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/**dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-emerald-500"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/** skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl hover:text-emerald-500 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/**about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
