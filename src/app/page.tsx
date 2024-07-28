import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
	AppWindow,
	ChevronsRight,
	ClipboardCheck,
	Code,
	PencilLine,
	ScreenShareIcon,
	Server,
	Settings,
	ShieldPlus,
	TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen w-screen max-w-full flex flex-col overflow-x-hidden">
			<section className="w-full absolute -z-10 bg-gray-900 max-lg:h-[66rem]">
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

			<section className="w-full max-w-7xl px-4 flex flex-col mx-auto text-gray-200">
				<Header />

				<div className="mt-32">
					<section className="grid grid-cols-2 gap-10 pb-60 max-lg:grid-cols-1">
						<div className="flex flex-col gap-4 mt-6">
							<h1 className="text-8xl max-lg:text-7xl font-black w-full relative">
								Software <br /> como você nunca viu!
								<ScreenShareIcon
									size={54}
									className="absolute max-lg:hidden top-7 right-16 bg-violet-700 p-2 rounded-xl shadow-lg shadow-white/20"
								/>
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
								A única fabrica de software que faz o seu negócio o crescer
								através da criatividade e inovação. A Vortecxx foca na
								construção de soluções inovadoras e de alta qualidade
								proporcionando o melhor resultado para seus negócios de uma
								forma que você nunca viu antes.
							</p>

							<ul className="flex flex-col gap-2">
								<li className="flex items-start gap-2 font-bold border-l-4 border-l-purple-700 pl-4 bg-gray-700/30 py-1.5 rounded-xl">
									<Code className="fill-purple-700" /> Alta performance
								</li>
								<li className="flex items-start gap-2 font-bold border-l-4 border-l-purple-700 pl-4 bg-gray-700/30 py-1.5 rounded-xl">
									<Server className="fill-purple-700" /> Alta disponibilidade
								</li>
								<li className="flex items-start gap-2 font-bold border-l-4 border-l-purple-700 pl-4 bg-gray-700/30 py-1.5 rounded-xl">
									<AppWindow className="fill-purple-700" /> Do jeito que você
									gosta
								</li>
								<li className="flex items-start gap-2 font-bold border-l-4 border-l-purple-700 pl-4 bg-gray-700/30 py-1.5 rounded-xl">
									<ClipboardCheck className="fill-purple-700" /> Diversos
									software/sites entregues
								</li>
							</ul>
						</div>
					</section>
				</div>
			</section>

			<hr className="opacity-20" />

			<section className="w-full bg-gray-100 z-20">
				<main className="w-full max-w-7xl mx-auto mt-4 px-4">
					<section className="flex flex-col">
						<h3 className="font-bold text-xl text-violet-800" id="services">
							Serviços
						</h3>

						<ul className="grid grid-cols-2 gap-12 gap-y-40 max-lg:gap-6 max-lg:grid-cols-1 max-lg:flex max-lg:flex-col-reverse mt-6">
							<li className="flex flex-col gap-2">
								<h5 className="text-5xl font-extrabold max-sm:text-4xl">
									O Seu Site Online Rápido, Bonito e Estratégico
								</h5>
								<p className="font-bold opacity-70 mt-3">
									Já se imaginou com milhares de usuários contente com a
									eficiência do seu atendimento ou até mesmo com o conteúdo que
									você produz? Aqui na Vortecxx conseguimos entregar um site que
									esteja totalmente ajustado com os seus interesses e o
									crescimento da sua empresa de uma forma rápida e estratégica
									para o sucesso do seu negócio.
								</p>

								<ul className="grid grid-cols-2 gap-x-2 gap-y-6 mt-2 max-sm:grid-cols-1">
									<li className="flex flex-col gap-2 border-l-4 border-l-violet-900 pl-2 py-1.5 rounded-xl shadow-xl">
										<div className="flex gap-0.5 items-center font-bold">
											<span className="p-1.5 bg-gray-300 rounded-full">
												<Server size={14} className="text-violet-800" />
											</span>
											<span className="opacity-60">
												Uma vez no ar, sempre no ar!
											</span>
										</div>
										<span className="text-xs font-semibold">
											Nós temos uma infraestrutura própria e conseguimos manter
											o seu site online por longos períodos de tempo
										</span>
									</li>

									<li className="flex flex-col gap-2 border-l-4 border-l-violet-900 pl-2 py-1.5 rounded-xl shadow-xl">
										<div className="flex gap-0.5 items-center font-bold">
											<span className="p-1.5 bg-gray-300 rounded-full">
												<ChevronsRight size={14} className="text-violet-800" />
											</span>
											<span className="opacity-60">
												Velocidade é nosso sobrenome.
											</span>
										</div>
										<span className="text-xs font-semibold">
											O seu site será criado com tecnologia de ponta e será a
											própria Velocidade.
										</span>
									</li>

									<li className="flex flex-col gap-2 border-l-4 border-l-violet-900 pl-2 py-1.5 rounded-xl shadow-xl">
										<div className="flex gap-0.5 items-center font-bold">
											<span className="p-1.5 bg-gray-300 rounded-full">
												<PencilLine size={14} className="text-violet-800" />
											</span>
											<span className="opacity-60">Você no controle</span>
										</div>
										<span className="text-xs font-semibold">
											A gente disponibiliza um gestor de conteúdo integrado ao
											seu site para que você possa mudar o que quiser.
										</span>
									</li>

									<li className="flex flex-col gap-2 border-l-4 border-l-violet-900 pl-2 py-1.5 rounded-xl shadow-xl">
										<div className="flex gap-0.5 items-center font-bold">
											<span className="p-1.5 bg-gray-300 rounded-full">
												<TrendingUp size={14} className="text-violet-800" />
											</span>
											<span className="opacity-60">Você no controle</span>
										</div>
										<span className="text-xs font-semibold">
											Relaxe! Afinal de contas nós fazemos atualização de
											segurança constantemente no seu site!
										</span>
									</li>
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

							<li className="flex flex-col gap-2">
								<h5 className="text-5xl font-extrabold max-sm:text-4xl">
									O Seu Sonho, Com a Vortecxx É Realidade
								</h5>
								<p className="font-bold opacity-70 mt-3">
									Aquela sua ideia incrível de aplicativo só esperando um
									primeiro passo merece uma produção a altura. Aqui na Vortecxx
									a gente atua na linha de frente de toda a produção do seu app,
									seja ele para sua loja física ou virtual, seja ele um negócio
									nascendo agora.
								</p>

								<ul className="grid grid-cols-2 gap-x-2 gap-y-6 mt-2 max-sm:grid-cols-1">
									<li className="flex flex-col gap-2 border-l-4 border-l-violet-900 pl-2 py-1.5 rounded-xl shadow-xl">
										<div className="flex gap-0.5 items-center font-bold">
											<span className="p-1.5 bg-gray-300 rounded-full">
												<Server size={14} className="text-violet-800" />
											</span>
											<span className="opacity-60">Com a gente você pode!</span>
										</div>
										<span className="text-xs font-semibold">
											Nós planejamos, produzimos e colocamos o seu app no ar.
										</span>
									</li>

									<li className="flex flex-col gap-2 border-l-4 border-l-violet-900 pl-2 py-1.5 rounded-xl shadow-xl">
										<div className="flex gap-0.5 items-center font-bold">
											<span className="p-1.5 bg-gray-300 rounded-full">
												<ShieldPlus size={14} className="text-violet-800" />
											</span>
											<span className="opacity-60">
												Segurança para o seu negócio.
											</span>
										</div>
										<span className="text-xs font-semibold">
											Nós monitoramos o seu app 24 horas por dia, 7 dias por
											semana.
										</span>
									</li>

									<li className="flex flex-col gap-2 border-l-4 border-l-violet-900 pl-2 py-1.5 rounded-xl shadow-xl">
										<div className="flex gap-0.5 items-center font-bold">
											<span className="p-1.5 bg-gray-300 rounded-full">
												<Settings size={14} className="text-violet-800" />
											</span>
											<span className="opacity-60">Você no controle</span>
										</div>
										<span className="text-xs font-semibold">
											Você tem pode gerenciar todas as partes do seu aap.
										</span>
									</li>

									<li className="flex flex-col gap-2 border-l-4 border-l-violet-900 pl-2 py-1.5 rounded-xl shadow-xl">
										<div className="flex gap-0.5 items-center font-bold">
											<span className="p-1.5 bg-gray-300 rounded-full">
												<TrendingUp size={14} className="text-violet-800" />
											</span>
											<span className="opacity-60">Você no controle</span>
										</div>
										<span className="text-xs font-semibold">
											Flexibilidade e um sonho realizado com a gente.
										</span>
									</li>
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

						<div className="flex flex-col gap-2 rounded-xl bg-violet-600 mt-24 px-10 max-sm:px-4 py-16 items-center text-white shadow-2xl shadow-black/30">
							<span className="text-7xl max-w-5xl text-center font-bold max-sm:text-4xl">
								Encontre a solução mais criativa para o seu negócio.
							</span>
							<span className="mt-4 max-w-3xl text-center">
								Para um sonho grandioso ser realizado o primeiro passo precisa
								ser dado e essa é a sua oportunidade de começar algo incrível.
								Mude a sua presença digital com a Vortecxx. <br />
								Entre em contato agora e comece construir seu futuro com a
								gente!
							</span>

							<Link
								href="https://wa.me/5541988893290?text=Tenho%20interesse%20em%20um%20site%20profissional%20de%20alta%20qualidade!"
								className="px-12 py-1.5 mt-12 bg-white font-bold rounded-full text-gray-950 hover:bg-white/80 transition-colors"
							>
								Contatar
							</Link>
						</div>
					</section>
				</main>

				<Footer />
			</section>
		</div>
	);
}
