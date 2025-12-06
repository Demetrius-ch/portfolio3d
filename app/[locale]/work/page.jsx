"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useTranslations } from 'next-intl';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../../../components/WorkSliderBtns";

const Work = () => {
  const t = useTranslations('work');
  const [project, setProject] = useState(0);
  
  const projects = [
    {
      num: "01",
      category: t('projects.pokedex.category'),
      title: t('projects.pokedex.title'),
      description: t('projects.pokedex.description'),
      stack: [
        { name: "React js" },
        { name: "Tailwindcss" },
        { name: "React router" },
      ],
      image: "/assets/work/pokedex.png",
      live: "http://pokemon-api-nu-nine.vercel.app/",
      github: "https://github.com/Demetrius-ch/pokemon-api",
    },
    {
      num: "02",
      category: t('projects.todo.category'),
      title: t('projects.todo.title'),
      description: t('projects.todo.description'),
      stack: [{ name: "react" }, {name:"Nodemodulelecss"},{ name: "Tailwind.css" }, { name: "Node.js" }],
      image: "/assets/work/todo.png",
      live: "https://github.com/Demetrius-ch/pokemon-api",
      github: "https://github.com/Demetrius-ch/todoList",
    },
    {
      num: "03",
      category: t('projects.startup.category'),
      title: t('projects.startup.title'),
      description: t('projects.startup.description'),
      stack: [{ name: "Next.js" }, { name: "Taiwind.css" }, { name: "Nodejs" }, {name:"PostgreSQL"}],
      image: "/assets/work/3.webp",
      live: "",
      github: "https://github.com/Demetrius-ch",
    },
  ];

  const handldeSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(currentIndex);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/**ouline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projects[project].num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-emerald-500 transition-all duration-500 capitalize">
                {projects[project].category} {t('project')}
              </h2>
              {/** project description */}
              <p className="text-white/60">{projects[project].description}</p>
              {/** stack */}
              <ul className="flex gap-4">
                {projects[project].stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-emerald-500">
                      {item.name}
                      {index < projects[project].stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/** border */}
              <div className="border border-white/20"></div>
              {/**buttons */}
              <div className="flex items-center gap-4 ">
                {/* Live project button */}
                <Link href={projects[project].live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:to-emerald-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t('liveProject')}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={projects[project].github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:to-emerald-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t('githubRepository')}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handldeSlideChange}
            >
              {projects.map((proj, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/**overlay */}
                      <div className="absolute top-0 bottom-0 h-full bg-black/10 z-10"></div>
                      {/**image */}
                      <div className="relative w-full h-full ">
                        <Image
                          src={proj.image}
                          fill
                          className="object-cover"
                          alt=""
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/** slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-emerald-500 hover:bg-emerald-500-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

