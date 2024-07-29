import type { HTMLAttributes } from "react";

type SectionTitle = HTMLAttributes<HTMLHeadingElement>;

export function SectionTitle(props: SectionTitle) {
	return <h3 className="font-bold text-xl text-violet-800" {...props} />;
}
