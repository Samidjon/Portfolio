import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} — Software Engineer & Creative Developer`,
  description: "The portfolio of Samid: playful web experiences, games, software projects and security tools.",
  applicationName: "Samid Portfolio",
  openGraph: {
    title: `${site.name} — Software Engineer & Creative Developer`,
    description: "Building playful web experiences and useful tools.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffdf8",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
