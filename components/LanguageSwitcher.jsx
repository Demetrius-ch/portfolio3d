"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale) => {
    if (pathname === "/") {
      // Depuis la racine, aller directement vers /{locale}
      router.push(`/${newLocale}`);
      return;
    }

    // Si l'URL commence déjà par /fr ou /en, on remplace cette partie
    const localePrefix = `/${locale}`;
    if (pathname.startsWith(localePrefix)) {
      const rest = pathname.slice(localePrefix.length) || "";
      router.push(`/${newLocale}${rest}`);
      return;
    }

    // Fallback : préfixer le chemin courant par la nouvelle locale
    router.push(`/${newLocale}${pathname}`);
  };

  return (
    <Select value={locale} onValueChange={switchLocale}>
      <SelectTrigger className="w-[80px] border-emerald-600 text-emerald-600 focus:ring-emerald-600">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="fr">FR</SelectItem>
        <SelectItem value="en">EN</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
