import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uzair Amir | Software Engineer - Full Stack, AI & Automation",
  description:
    "Software Engineer specializing in Full Stack Development, AI Integration, and Automation Solutions. Building innovative B2B SaaS applications and intelligent systems.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Automation",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "B2B SaaS",
  ],
  authors: [{ name: "Uzair Amir" }],
  openGraph: {
    title: "Uzair Amir | Software Engineer",
    description:
      "Full Stack Developer & AI Engineer crafting innovative digital experiences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
