import type { HTMLAttributes } from "react";

type SectionRootProps = HTMLAttributes<HTMLDivElement>;

export function SectionRoot(props: SectionRootProps) {
	return <section className="flex flex-col" {...props} />;
}
