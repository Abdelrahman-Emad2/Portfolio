import type { MetadataRoute } from "next";
import { site } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [{ url: site.url, lastModified: now, priority: 1 }, { url: `${site.url}/projects`, lastModified: now, priority: 0.8 }];
}
