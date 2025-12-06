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
    // Remplacer la locale actuelle dans le pathname
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
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
