import Link from "next/link";

export function Card() {
	return (
		<div className="flex flex-col gap-2 rounded-xl bg-violet-600 mt-24 px-10 max-sm:px-4 py-16 items-center text-white shadow-2xl shadow-black/30">
			<span className="text-7xl max-w-5xl text-center font-bold max-sm:text-4xl">
				Encontre a solução mais criativa para o seu negócio.
			</span>
			<span className="mt-4 max-w-3xl text-center">
				Para um sonho grandioso ser realizado o primeiro passo precisa ser dado
				e essa é a sua oportunidade de começar algo incrível. Mude a sua
				presença digital com a Vortecxx. <br />
				Entre em contato agora e comece construir seu futuro com a gente!
			</span>

			<Link
				href="https://wa.me/5541988893290?text=Tenho%20interesse%20em%20um%20site%20profissional%20de%20alta%20qualidade!"
				className="px-12 py-1.5 mt-12 bg-white font-bold rounded-full text-gray-950 hover:bg-white/80 transition-colors"
			>
				Contatar
			</Link>
		</div>
	);
}
