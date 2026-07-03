import type { MetadataRoute } from "next";
import { insights, nav, portfolio, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", ...nav.map((item) => item.href)];
  const dynamicPages = [
    ...portfolio.map((c) => `/portfolio/${c.slug}`),
    ...insights.map((p) => `/insights/${p.slug}`),
  ];
  return [...staticPages, ...dynamicPages].map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
