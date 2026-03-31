import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.newyorksash-cooperstown.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: ["https://www.newyorksash-cooperstown.com/images/IMG_1049.jpg"],
    },
  ];
}
