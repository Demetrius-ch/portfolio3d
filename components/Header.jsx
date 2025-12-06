"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const t = useTranslations('header');
  const locale = useLocale();

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={`/${locale}`}>
          <h1 className="text-4xl font-semibold flex items-center gap-2">
            cdev <span className="text-emerald-600">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <LanguageSwitcher />
          <Link href={`/${locale}/contact`}>
            <Button>{t('hireMe')}</Button>
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
