"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useLocale, useTranslations } from "next-intl";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const t = useTranslations("header");
  const locale = useLocale();

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={`/${locale}`}>
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center">
              <Image
                src="/cdev.svg"
                alt="C-dev logo"
                width={28}
                height={28}
                priority
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold flex items-center gap-1">
              cdev<span className="text-emerald-600">.</span>
            </h1>
          </div>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <LanguageSwitcher />
          <Link href={`/${locale}/contact`}>
            <Button
              variant="default"
              size="md"
              className="px-6 h-[48px] uppercase tracking-[2px]"
            >
              {t("hireMe")}
            </Button>
          </Link>
        </div>
        <div className="xl:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;


