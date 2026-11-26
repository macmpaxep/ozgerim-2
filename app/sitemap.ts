import type { MetadataRoute } from "next";
import { directions, company } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: company.site, changeFrequency: "monthly", priority: 1 },
    ...directions.map((d) => ({
      url: `${company.site}/directions/${d.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
