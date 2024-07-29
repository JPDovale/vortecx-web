import {
	ChevronsRight,
	type LucideIcon,
	PencilLine,
	Server,
	Settings,
	ShieldPlus,
	TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceProps {
	title: string;
	description: string;
	cards: {
		Icon: LucideIcon;
		title: string;
		description: string;
	}[];
}

function Service({ description, title, cards }: ServiceProps) {
	return (
		<li className="flex flex-col gap-2">
			<h5 className="text-5xl font-extrabold max-sm:text-4xl">{title}</h5>
			<p className="font-bold opacity-70 mt-3">{description}</p>

			<ul className="grid grid-cols-2 gap-x-2 gap-y-6 mt-2 max-sm:grid-cols-1">
				{cards.map((card) => (
					<li
						key={card.title}
						className="flex flex-col gap-2 border-l-4 border-l-violet-900 pl-2 py-1.5 rounded-xl shadow-xl"
					>
						<div className="flex gap-0.5 items-center font-bold">
							<span className="p-1.5 bg-gray-300 rounded-full">
								<card.Icon size={14} className="text-violet-800" />
							</span>
							<span className="opacity-60">{card.title}</span>
						</div>
						<span className="text-xs font-semibold">{card.description}</span>
					</li>
				))}
			</ul>

			<div className="mt-6 space-x-2">
				<Link
					href="https://wa.me/5541988893290?text=Tenho%20interesse%20em%20um%20site%20profissional%20de%20alta%20qualidade!"
					className="px-6 py-1.5 bg-violet-600 text-sm font-bold rounded-full text-gray-200 hover:bg-violet-500 transition-colors"
				>
					Fale conosco
				</Link>

				{/* <button
										className="px-6 py-1.5 bg-violet-600 text-sm font-bold rounded-full text-gray-200 hover:bg-violet-500 transition-colors"
										type="button"
									>
										Mais detalhes
									</button> */}
			</div>
		</li>
	);
}

export function Services() {
	return (
		<ul className="grid grid-cols-2 gap-12 gap-y-40 max-lg:gap-6 max-lg:grid-cols-1 max-lg:flex max-lg:flex-col-reverse mt-6">
			<Service
				title="O Seu Site Online Rápido, Bonito e Estratégico"
				description="Já se imaginou com milhares de usuários contente com a eficiência do seu atendimento ou até mesmo com o conteúdo que você produz? Aqui na Vortecxx conseguimos entregar um site que esteja totalmente ajustado com os seus interesses e o crescimento da sua empresa de uma forma rápida e estratégica para o sucesso do seu negócio."
				cards={[
					{
						Icon: Server,
						title: "Uma vez no ar, sempre no ar!",
						description:
							"Nós temos uma infraestrutura própria e conseguimos manter o seu site online por longos períodos de tempo",
					},
					{
						Icon: ChevronsRight,
						title: "Velocidade é nosso sobrenome.",
						description:
							"O seu site será criado com tecnologia de ponta e será a própria velocidade.",
					},
					{
						Icon: PencilLine,
						title: "Você no controle",
						description:
							"A gente disponibiliza um gestor de conteúdo integrado ao seu site para que você possa mudar o que quiser.",
					},
					{
						Icon: TrendingUp,
						title: "Você no controle",
						description:
							"Relaxe! Afinal de contas nós fazemos atualização de segurança constantemente no seu site!",
					},
				]}
			/>

			<li className="rounded-lg max-lg:mt-20">
				<Image
					className="rounded-lg"
					src="/web-site1.jpg"
					alt=""
					width={1000}
					height={1000}
					quality={100}
				/>
			</li>

			<Service
				title="O Seu Sonho, Com a Vortecxx É Realidade"
				description="Aquela sua ideia incrível de aplicativo só esperando um primeiro passo merece uma produção a altura. Aqui na Vortecxx a gente atua na linha de frente de toda a produção do seu app, seja ele para sua loja física ou virtual, seja ele um negócio nascendo agora."
				cards={[
					{
						Icon: Server,
						title: "Com a gente você pode!",
						description:
							"Nós planejamos, produzimos e colocamos o seu app no ar.",
					},
					{
						Icon: ShieldPlus,
						title: "Segurança para o seu negócio.",
						description:
							"Nós monitoramos o seu app 24 horas por dia, 7 dias por semana.",
					},
					{
						Icon: Settings,
						title: "Você no controle",
						description: "Você tem pode gerenciar todas as partes do seu aap.",
					},
					{
						Icon: TrendingUp,
						title: "Você no controle",
						description: "Flexibilidade e um sonho realizado com a gente.",
					},
				]}
			/>

			<li className="rounded-lg">
				<Image
					className="rounded-lg"
					src="/web-app1.png"
					alt=""
					width={1000}
					height={1000}
					quality={100}
				/>
			</li>
		</ul>
	);
}
