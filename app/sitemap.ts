import type { MetadataRoute } from "next";
import { directions, company } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: company.site, changeFrequency: "monthly", priority: 1 },
    { url: `${company.site}/book`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${company.site}/ess`, changeFrequency: "monthly", priority: 0.9 },
    ...directions.map((d) => ({
      url: `${company.site}/directions/${d.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
