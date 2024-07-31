import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://vortecxx.com",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: "https://vortecxx.com/articles",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.2,
		},
	];
}
