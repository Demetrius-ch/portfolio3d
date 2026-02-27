"use client";

import { useEffect, useRef } from "react";
import { FiDownload } from "react-icons/fi";
import Typed from "typed.js";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "../../components/ui/button";
import Social from "../../components/Social";
import Photo from "../../components/Photo";
import Stats from "../../components/Stats";

const Home = () => {
  const t = useTranslations("home");
  const locale = useLocale();
  const typedElement = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!typedElement.current) return;

    const typed = new Typed(typedElement.current, {
      strings: [
        t("typed.name1"),
        t("typed.name2"),
        t("typed.name3"),
      ],
      typeSpeed: 120,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [t]);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto flex flex-col xl:flex-row items-center gap-10 xl:gap-14 xl:pt-8 xl:pb-6">
        {/* Colonne texte */}
        <div className="order-2 xl:order-1 flex-1 space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            <span>{t("subtitle")}</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-[36px] leading-tight font-semibold md:text-[52px] xl:text-[68px]">
              {t("title")}
            </h1>
            <p className="text-[28px] leading-tight font-semibold text-emerald-500 md:text-[40px] xl:text-[48px] [&_.typed-cursor]:text-emerald-500 [&_.typed-cursor]:align-middle" aria-hidden="true">
              <span ref={typedElement} />
            </p>
            <p className="max-w-[520px] text-base leading-relaxed text-white/80 pt-0.5">
              {t("description")}
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black transition-colors duration-300"
            >
              <Link href={`/${locale}/cv`}>
                <span>{t("downloadCV")}</span>
                <FiDownload className="text-xl" />
              </Link>
            </Button>

            <Social
              containerStyles="flex gap-4"
              iconStyles="w-10 h-10 border border-white/20 rounded-full flex justify-center items-center text-white text-base hover:bg-emerald-500 hover:border-emerald-500 hover:text-black transition-colors duration-300"
            />
          </div>
        </div>

        {/* Colonne visuelle */}
        <div className="order-1 xl:order-2 flex-1 w-full">
          <div className="relative mx-auto max-w-[420px]">
            <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-emerald-500/40 via-emerald-500/10 to-transparent blur-3xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-white/0 px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.8)] backdrop-blur">
              <Photo />

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                    Profil
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Développeur front-end
                  </p>
                </div>
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
                    Localisation
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Bangui, RCA
                  </p>
                </div>
                <div className="col-span-2 rounded-2xl border border-white/10 bg-black/50 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                    Disponibilité
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Ouvert aux opportunités freelance et remote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-0 pt-2">
        <Stats />
      </div>
    </section>
  );
};

export default Home;

