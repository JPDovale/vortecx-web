import type { Post } from "@/services/mainapi/posts/getPostsRequest";
import Link from "next/link";
import { Article } from "./Article";

interface ArticleProps {
	posts: Post[];
	tag?: string;
}

export function Articles({ posts, tag }: ArticleProps) {
	const leftPostsSide: Post[] = [];
	const rightPostsSide: Post[] = [];

	posts.forEach((p, i) => {
		if (i % 2 === 0) {
			leftPostsSide.push(p);
		} else {
			rightPostsSide.push(p);
		}
	});

	return (
		<section className="w-full flex flex-col max-w-screen-lg mx-auto z-10 pb-40 mt-40 px-4">
			<h1 className="text-3xl font-bold font-body opacity-60 text-gray-500 max-md:text-2xl">
				Posts recentes
			</h1>

			{tag && (
				<div className="mt-3 flex justify-between">
					<span className="opacity-60 font-bold font-body">
						Você esta pesquisando por: #{tag}
					</span>
					<Link
						href="/articles"
						className="font-bold font-body bg-zinc-800 text-white px-6 py-0.5 rounded-full border border-zinc-100 max-md:text-sm"
					>
						Limpar busca
					</Link>
				</div>
			)}

			<div className="grid grid-cols-2 mt-4 gap-8 max-md:grid-cols-1">
				<div className="flex flex-col gap-8">
					{leftPostsSide.map((p) => (
						<Article key={p.id} article={p} />
					))}
				</div>
				<div className="flex flex-col gap-8">
					{rightPostsSide.map((p) => (
						<Article key={p.id} article={p} />
					))}
				</div>
			</div>
		</section>
	);
}
