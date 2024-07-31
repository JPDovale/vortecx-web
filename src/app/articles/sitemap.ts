import { getPostsRequest } from "@/services/mainapi/posts/getPostsRequest";
import type { MetadataRoute } from "next";

export async function generateSitemaps() {
	// Fetch the total number of products and calculate the number of sitemaps needed
	return [
		{ id: "o-jogo-da-vida" },
		{ id: "como-instalar-o-docker-no-linux" },
		{ id: "mudanca-seja-curioso" },
		{ id: "descomplicando-o-solid" },
	];
}

export default async function sitemap({
	id,
}: {
	id: number;
}): Promise<MetadataRoute.Sitemap> {
	// Google's limit is 50,000 URLs per sitemap
	const posts = await getPostsRequest();
	return (
		posts.data?.posts.map((product) => ({
			url: `https://vortecxx.com/articles/${id}`,
			lastModified: product.updatedAt,
		})) ?? []
	);
}
