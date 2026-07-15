import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevKit Market — Landing pages built to launch",
  description:
    "Explore ten production-ready Next.js landing pages for SaaS, healthcare, finance, legal, and developer brands.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
