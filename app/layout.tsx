// This root layout configures the fonts and html document structure for the application.
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// This loader configures the primary sans serif font family.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// This loader configures the geometric display font family.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// This metadata object defines the search and social preview tags.
export const metadata: Metadata = {
  title: "Amr Agouriane — Cross-Platform Mobile Software Engineer",
  description:
    "Cross-platform mobile developer specializing in building high-performance, offline-first apps that scale across android and ios with flutter, react native, and .net maui.",
  keywords: [
    "Amr Agouriane",
    "Flutter Developer",
    "React Native",
    ".NET MAUI",
    "Mobile Engineer",
    "Dart",
    "TypeScript",
    "C#",
  ],
};

// This root layout component wraps all page views with proper fonts and theme attributes.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Root layout html structure with reddish-pink selection styling.
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans bg-[#050507] text-white antialiased selection:bg-[#FA2A55] selection:text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
