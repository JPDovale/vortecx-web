import type { Post } from "@/services/mainapi/posts/getPostsRequest";
import { marked } from "marked";
import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
	article: Post;
}

export function Article({ article }: ArticleProps) {
	const createdAt = new Date(article.createdAt).toLocaleString("pt-BR", {
		day: "numeric",
		month: "long",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
	});

	return (
		<article className="w-full flex flex-col max-w-screen-md mx-auto z-10 pb-40 mt-40 px-4">
			<h1 className="text-5xl font-bold font-title text-center text-violet-700 ease-in-out duration-200 max-md:text-4xl">
				{article.title}
			</h1>

			<div className="flex gap-2 text-xs font-body flex-wrap justify-between w-full mt-6">
				{article.tags.map((tag) => (
					<Link
						data-is-article={tag === "artigo"}
						href={`/articles?tag=${tag}`}
						key={tag}
						className="bg-violet-700/60 text-white rounded-full px-3 py-0.5 flex-1 text-center ease-in-out duration-200 max-md:px-1 data-[is-article=true]:bg-emerald-900/70"
					>
						{tag}
					</Link>
				))}
			</div>

			<div className="flex items-center gap-2 mt-3">
				<Image
					className="rounded-full"
					src="https://avatars.githubusercontent.com/u/100259992?s=400&u=0a82327d6ab0611ea4819d45659c8938fee5b405&v=4"
					alt=""
					width={44}
					height={44}
				/>
				<span className="font-bold opacity-60">
					Criado em: {createdAt} Por JPDovale
				</span>
			</div>

			<div
				className="prose prose-lg min-w-full text-justify mt-8 ease-in-out duration-200 max-md:prose-sm"
				dangerouslySetInnerHTML={{
					__html: marked(article.content.replace(/\\n/g, "\n")),
				}}
			/>
		</article>
	);
}
