import type { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLDivElement>;

export function Section(props: SectionProps) {
	return (
		<section
			className="w-full max-w-7xl mx-auto grid grid-cols-2 gap-4 p-4 max-sm:grid-cols-1"
			{...props}
		/>
	);
}
