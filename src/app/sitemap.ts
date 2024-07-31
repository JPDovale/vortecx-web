import { getPostsRequest } from "@/services/mainapi/posts/getPostsRequest";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const response = await getPostsRequest();
	const posts = response.data?.posts ?? [];

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
			priority: 0.7,
		},
		...posts.map((post) => ({
			url: `https://vortecxx.com/articles/${post.slug}`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.4,
		})),
	];
}
