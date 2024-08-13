import { AppWindow, ClipboardCheck, Code, Server } from "lucide-react";

export function Presentation() {
	return (
		<section className="w-full max-w-7xl px-4 flex flex-col mx-auto text-white">
			<div className="grid grid-cols-2 gap-10 pb-60 max-lg:grid-cols-1 mt-32 max-lg:mt-24 max-lg:pb-32">
				<div className="flex flex-col gap-4 mt-6">
					<h1 className="text-8xl max-xl:text-7xl font-black w-full relative">
						Software <br /> como você nunca viu!
					</h1>

					<div className="flex items-center gap-4">
						<span className="w-36 p-px rounded-full bg-gray-100/30" />
						<p className="text-sm font-bold flex items-center gap-2">
							<span className="opacity-60">É com a</span>{" "}
							<strong className="text-xl">Vortecxx</strong>
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<p className="mt-6 p-4 bg-gray-600/30 backdrop-blur-sm rounded-xl">
						A única fabrica de software que faz o seu negócio o crescer através
						da criatividade e inovação. A Vortecxx foca na construção de
						soluções inovadoras e de alta qualidade proporcionando o melhor
						resultado para seus negócios de uma forma que você nunca viu antes.
					</p>

					<ul className="flex flex-col gap-2">
						<li className="flex items-start gap-2 font-bold border-l-4 border-l-purple-700 pl-4 bg-gray-700/30 py-1.5 rounded-xl">
							<Code className="fill-purple-700" /> Alta performance
						</li>
						<li className="flex items-start gap-2 font-bold border-l-4 border-l-purple-700 pl-4 bg-gray-700/30 py-1.5 rounded-xl">
							<Server className="fill-purple-700" /> Alta disponibilidade
						</li>
						<li className="flex items-start gap-2 font-bold border-l-4 border-l-purple-700 pl-4 bg-gray-700/30 py-1.5 rounded-xl">
							<AppWindow className="fill-purple-700" /> Do jeito que você gosta
						</li>
						<li className="flex items-start gap-2 font-bold border-l-4 border-l-purple-700 pl-4 bg-gray-700/30 py-1.5 rounded-xl">
							<ClipboardCheck className="fill-purple-700" /> Diversos
							software/sites entregues
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
