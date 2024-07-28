import Image from "next/image";
import Link from "next/link";

export function Icon() {
	return (
		<div className="flex items-center gap-2 self-start">
			<Image
				src="/logo-nb.png"
				alt=""
				width={40}
				height={40}
				quality={100}
				priority
			/>

			<Link
				href="https://vortecxx.com"
				className="font-bold leading-none text-3xl text-white relative"
			>
				Vortecxx
			</Link>
		</div>
	);
}
