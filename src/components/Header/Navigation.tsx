import type { HTMLAttributes } from "react";

type NavigationProps = HTMLAttributes<HTMLUListElement>;

export function Navigation(props: NavigationProps) {
	return (
		<nav className="max-sm:hidden">
			<ul className="flex items-center gap-4" {...props} />
		</nav>
	);
}
