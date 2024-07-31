import type { HTMLAttributes } from "react";

type RootProps = HTMLAttributes<HTMLDivElement> & { invert: boolean };

export function Root({ invert, ...props }: RootProps) {
	return (
		<header
			data-invert={invert}
			className="bg-gray-600/30 flex z-40 items-center data-[invert=true]:text-gray-950 text-gray-200 justify-between px-4 py-3 mt-8 rounded-full backdrop-blur-md shadow-2xl shadow-black/50 fixed w-full max-w-7xl self-center"
			{...props}
		/>
	);
}
