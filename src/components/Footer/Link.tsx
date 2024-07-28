import Link from "next/link";
import type { HTMLAttributes } from "react";

type LinkItemProps = HTMLAttributes<HTMLAnchorElement> & {
	href: string;
};

export function LinkItem(props: LinkItemProps) {
	return (
		<li>
			<Link {...props} />
		</li>
	);
}
