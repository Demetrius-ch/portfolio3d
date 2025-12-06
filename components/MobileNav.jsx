"use client";

import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { CiMenuFries } from "react-icons/ci";

const MobileNav = () => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const links = [
    {
      name: t("home"),
      path: `/${locale}`,
      key: "home",
    },
    {
      name: t("services"),
      path: `/${locale}/services`,
      key: "services",
    },
    {
      name: t("resume"),
      path: `/${locale}/resume`,
      key: "resume",
    },
    {
      name: t("work"),
      path: `/${locale}/work`,
      key: "work",
    },
    {
      name: t("contact"),
      path: `/${locale}/contact`,
      key: "contact",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-emerald-600"></CiMenuFries>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/*logo*/}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={`/${locale}`}>
            <h1 className="text-4xl font-semibold">
              cdev <span className="text-emerald-600">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            const isActive =
              pathname === link.path ||
              (link.path !== `/${locale}` && pathname.startsWith(link.path));
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  isActive && "text-emerald-600 border-b-2 border-emerald-600"
                } text-xl capitalize hover:text-emerald-600 transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
