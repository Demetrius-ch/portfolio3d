"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.4, duration: 0.5, ease: "easeOut" },
        }}
        className="relative w-full max-w-[320px] xl:max-w-[380px]"
      >
        <div className="absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-br from-emerald-500/40 via-emerald-500/0 to-transparent blur-xl" />
        <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] border border-white/12 bg-black/50 shadow-[0_22px_70px_rgba(0,0,0,0.85)]">
          <Image
            src="/assets/photo.jpg"
            priority
            quality={100}
            fill
            alt="Photo de profil"
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
