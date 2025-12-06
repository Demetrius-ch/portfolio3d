import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from "../../components/Header";
import PageTransition from "../../components/PageTransition";
import StairTransition from "../../components/StairTransition";
import LocaleHtml from "../../components/LocaleHtml";

const locales = ['fr', 'en'];

export default async function LocaleLayout({ children, params: { locale } }) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
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

