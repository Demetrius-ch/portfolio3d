import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import PageTransition from "../../components/PageTransition";
import StairTransition from "../../components/StairTransition";
import LocaleHtml from "../../components/LocaleHtml";

const locales = ["fr", "en"];

interface LocaleLayoutProps {
  children: ReactNode;
  // In Next.js 15, params can be a Promise in typed layouts
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleHtml />
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </NextIntlClientProvider>
  );
}

