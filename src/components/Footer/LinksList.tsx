import type { HTMLAttributes } from "react";

type LinksListProps = HTMLAttributes<HTMLUListElement> & {
	title: string;
};

export function LinksList({ title, children, ...props }: LinksListProps) {
	return (
		<ul className="flex flex-col gap-2" {...props}>
			<span className="font-bold opacity-60 text-sm">{title}</span>

			{children}
		</ul>
	);
}
