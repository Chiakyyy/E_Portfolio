// This root layout configures the fonts and html document structure for the application.
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Cairo } from "next/font/google";
import "./globals.css";
// Client provider wrapping children for reactive multi-language translation.
import { LanguageProvider } from "@/context/LanguageContext";

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

// This loader configures the modern arabic font family.
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

// This metadata object defines the search and social preview tags.
export const metadata: Metadata = {
  metadataBase: new URL("https://amr-agouriane-e-portfolio.vercel.app/"),
  title: "Amr Agouriane | Cross-Platform Mobile Software Engineer (Flutter, React Native, .NET MAUI)",
  description:
    "Portfolio of Amr Agouriane, Software Engineer & Cross-Platform Mobile Developer specializing in Flutter, React Native, and .NET MAUI. Building high-performance, offline-first iOS & Android apps.",
  keywords: [
    "Amr Agouriane",
    "Mobile Software Engineer",
    "Flutter Developer",
    "React Native Developer",
    ".NET MAUI Developer",
    "Cross-Platform Mobile App Developer",
    "Ingénieur Génie Logiciel Maroc",
    "Développeur Mobile",
  ],
  authors: [{ name: "Amr Agouriane", url: "https://amr-agouriane-e-portfolio.vercel.app/" }],
  creator: "Amr Agouriane",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR", "ar_MA"],
    title: "Amr Agouriane | Cross-Platform Mobile Software Engineer (Flutter, React Native, .NET MAUI)",
    description:
      "Portfolio of Amr Agouriane, Software Engineer & Cross-Platform Mobile Developer specializing in Flutter, React Native, and .NET MAUI. Building high-performance, offline-first iOS & Android apps.",
    siteName: "Amr Agouriane Portfolio",
    url: "https://amr-agouriane-e-portfolio.vercel.app/",
    images: [
      {
        url: "/images/hero-portrait.png",
        width: 1200,
        height: 630,
        alt: "Amr Agouriane — Cross-Platform Mobile Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amr Agouriane | Cross-Platform Mobile Software Engineer (Flutter, React Native, .NET MAUI)",
    description:
      "Portfolio of Amr Agouriane, Software Engineer & Cross-Platform Mobile Developer specializing in Flutter, React Native, and .NET MAUI. Building high-performance, offline-first iOS & Android apps.",
    images: ["/images/hero-portrait.png"],
  },
};

// Structured json-ld metadata for schema.org person representation.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Amr Agouriane",
  url: "https://amr-agouriane-e-portfolio.vercel.app/",
  image: "https://amr-agouriane-e-portfolio.vercel.app/images/hero-portrait.png",
  jobTitle: "Cross-Platform Mobile Software Engineer",
  alumniOf: "Université Internationale de Rabat",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Morocco",
  },
  knowsAbout: [
    "Flutter",
    "React Native",
    ".NET MAUI",
    "Dart",
    "TypeScript",
    "C#",
    "Kotlin",
    "Firebase",
    "SQLite",
    "PostgreSQL",
    "Mobile App Architecture",
  ],
  sameAs: [
    "https://www.linkedin.com/in/amr-agouriane-521120283/",
    "https://github.com/Chiakyyy",
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
      <head>
        {/* Structured json-ld schema defining personal identity and credentials. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jakarta.variable} ${cairo.variable} font-sans bg-[#050507] text-white antialiased selection:bg-[#FA2A55] selection:text-white`}
        suppressHydrationWarning
      >
        {/* Language provider wrapping page content to enable language switching. */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
