import Image from "next/image";
import Link from "next/link";

export function Icon() {
	return (
		<div className="flex items-center gap-2">
			<Image
				src="/logo-nb.png"
				alt=""
				width={28}
				height={28}
				quality={100}
				priority
			/>

			<Link
				href="https://vortecxx.com"
				className="font-bold leading-none text-xl text-gray800 relative"
			>
				Vortecxx
			</Link>
		</div>
	);
}
