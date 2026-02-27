import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "cdv",
  description: "",
};

// Root layout must contain html and body tags
// The middleware will redirect to /fr or /en
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

