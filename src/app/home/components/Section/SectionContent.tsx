import type { HTMLAttributes } from "react";

type SectionContentProps = HTMLAttributes<HTMLDivElement>;

export function SectionContent(props: SectionContentProps) {
	return <div {...props} />;
}
