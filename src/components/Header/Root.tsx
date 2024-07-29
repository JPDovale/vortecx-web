import type { HTMLAttributes } from "react";

type RootProps = HTMLAttributes<HTMLDivElement>;

export function Root(props: RootProps) {
	return (
		<header
			className="bg-gray-600/30 flex z-10 items-center text-gray-200 justify-between px-4 py-3 mt-8 rounded-full backdrop-blur-md shadow-2xl shadow-black/50 fixed w-full max-w-7xl self-center"
			{...props}
		/>
	);
}
