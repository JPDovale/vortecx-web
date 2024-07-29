import Image from "next/image";

export function Background() {
	return (
		<section className="w-full absolute -z-10 bg-gray-900 max-lg:h-[66rem] max-sm:h-[72rem]">
			<Image
				className="w-full object-contain transform -scale-y-100 opacity-60 max-lg:h-full max-lg:object-cover"
				src="/back.webp"
				alt=""
				width={1920}
				height={1080}
				quality={100}
				priority
			/>

			<span
				aria-hidden
				className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"
			/>
		</section>
	);
}
