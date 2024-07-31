import type { Post } from "@/services/mainapi/posts/getPostsRequest";
import { marked } from "marked";
import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
	article: Post;
}

//

export function Article({ article }: ArticleProps) {
	const createdAt = new Date(article.createdAt).toLocaleString("pt-BR", {
		day: "numeric",
		month: "long",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
	});

	return (
		<div className="bg-gray-200 rounded-lg shadow-lg p-4 flex flex-col gap-2 ease-in-out duration-200">
			<h3 className="font-title font-black text-2xl text-center text-violet-700 ease-in-out duration-200">
				{article.title}
			</h3>

			<div className="flex gap-2 text-xs font-body flex-wrap justify-between w-full">
				{article.tags.map((tag) => (
					<Link
						href={`/articles?tag=${tag}`}
						key={tag}
						data-is-article={tag === "artigo"}
						className="bg-violet-700/60 text-white rounded-full px-3 py-0.5 flex-1 text-center ease-in-out duration-200 data-[is-article=true]:bg-emerald-900/70"
					>
						{tag}
					</Link>
				))}
			</div>

			<p
				className="text-sm font-body text-justify prose prose-sm prose-violet data-[theme=dark]:prose-green data-[theme=dark]:prose-invert ease-in-out duration-200"
				dangerouslySetInnerHTML={{
					__html: marked(article.summary.replace(/\\n/g, "\n")),
				}}
			/>

			<Link
				href={`articles/${article.slug}`}
				className="text-sm bg-violet-700/60 text-white px-3 py-0.5 font-body self-start rounded-full mt-2 hover:bg-violet-600 ease-in-out duration-200 text-center data-[theme=dark]:bg-green-500/60 data-[theme=dark]:hover:bg-green-600"
			>
				Ler mais
			</Link>

			<div className="flex items-center gap-2 mt-3">
				<Image
					className="rounded-full"
					src="https://avatars.githubusercontent.com/u/100259992?s=400&u=0a82327d6ab0611ea4819d45659c8938fee5b405&v=4"
					alt=""
					width={36}
					height={36}
				/>
				<span className="text-xs font-bold opacity-60">
					Criado em: {createdAt} Por JPDovale
				</span>
			</div>
		</div>
	);
}
