import type { HTMLAttributes } from "react";

type LinksProps = HTMLAttributes<HTMLDivElement>;

export function Links(props: LinksProps) {
	return <div className="w-full grid grid-cols-3 text-white" {...props} />;
}
