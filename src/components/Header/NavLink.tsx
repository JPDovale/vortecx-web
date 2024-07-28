import Link from "next/link";
import type { HTMLAttributes } from "react";

type NavLinkProps = HTMLAttributes<HTMLAnchorElement> & {
	href: string;
};

export function NavLink(props: NavLinkProps) {
	return (
		<li>
			<Link
				className="font-bold opacity-40 hover:opacity-100 hover:text-violet-400 ease-in duration-200"
				{...props}
			/>
		</li>
	);
}
