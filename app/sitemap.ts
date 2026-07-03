import type { MetadataRoute } from "next";
import { insights, nav, portfolio, site } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();
  const staticPages = ["/", ...nav.map((item) => item.href)];
  const entries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: buildDate,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
  for (const company of portfolio) {
    entries.push({
      url: `${site.url}/portfolio/${company.slug}`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  for (const post of insights) {
    entries.push({
      url: `${site.url}/insights/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }
  return entries;
}
