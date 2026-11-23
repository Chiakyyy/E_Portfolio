// This robots route instructs web crawlers on indexation permissions.
import { MetadataRoute } from "next";

// Route handler generating robots configuration rules.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://amr-agouriane-e-portfolio.vercel.app/sitemap.xml",
  };
}
