import Link from "next/link";
import type { HTMLAttributes } from "react";

type ActionItemProps = HTMLAttributes<HTMLAnchorElement> & {
	href: string;
};

export function ActionItem(props: ActionItemProps) {
	return (
		<Link
			className="px-4 py-1 rounded-full shadow-md shadow-white/10 hover:shadow-lg hover:shadow-white/20 ease-in duration-200"
			{...props}
		/>
	);
}
