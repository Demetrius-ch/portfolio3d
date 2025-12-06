"use client";
import { Button } from "../../components/ui/button";
import { FiDownload } from "react-icons/fi";
import { useTranslations } from 'next-intl';
// components
import Social from "../../components/Social";
import Photo from "../../components/Photo";
import Stats from "../../components/Stats";
import Typed from "typed.js";
import React from "react";

const Home = () => {
  const t = useTranslations('home');
  const el = React.useRef(null);
  
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [t('typed.name1'), t('typed.name2'), t('typed.name3')],
      typeSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, [t]);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/**text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{t('subtitle')}</span>
            <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold mb-6">
              {t('title')} <br />{" "}
              <span className="text-emerald-600" ref={el}></span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {t('description')}
            </p>
            {/**bouton et link */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 hover:bg-emerald-600 hover:text-black hover:transition-all duration-500"
              >
                <span>{t('downloadCV')}</span>
                <FiDownload className="text-xl " />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-emerald-600 rounded-full flex justify-center items-center text-emerald-600 text-base hover:bg-emerald-600 hover:text-black hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="oder-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;

