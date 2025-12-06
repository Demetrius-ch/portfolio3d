"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

const Nav = () => {
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
    <nav className="flex gap-8">
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
            } capitalize font-medium hover:text-emerald-600 transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
export default Nav;
