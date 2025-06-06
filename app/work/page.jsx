"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { title } from "process";

const project = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, {name: "JavaScript"}],
    
  },
];
const Work = () => {
  return <div> work page</div>;
};

export default Work;
