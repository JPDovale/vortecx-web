import type { HTMLAttributes } from "react";

type RootProps = HTMLAttributes<HTMLDivElement>;

export function Root(props: RootProps) {
	return (
		<footer
			className="bg-violet-950 w-full z-[100] mt-16 pt-10 text-white"
			{...props}
		/>
	);
}
