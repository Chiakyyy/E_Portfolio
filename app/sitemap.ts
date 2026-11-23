// This sitemap route defines crawler indexing endpoints for search engines.
import { MetadataRoute } from "next";

// Route handler generating the sitemap xml specification.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://amr-agouriane-e-portfolio.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
