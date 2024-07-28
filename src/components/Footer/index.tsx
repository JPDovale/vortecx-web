import { Divider } from "./Divider";
import { Icon } from "./Icon";
import { LinkItem } from "./Link";
import { Links } from "./Links";
import { LinksList } from "./LinksList";
import { Root } from "./Root";
import { Section } from "./Section";

export function Footer() {
	const linkToWhats =
		"https://wa.me/5541988893290?text=Tenho%20interesse%20em%20um%20site%20profissional%20de%20alta%20qualidade!";

	const links = [
		{ title: "Web site", link: linkToWhats },
		{ title: "Blog", link: linkToWhats },
		{ title: "Landing page", link: linkToWhats },
		{ title: "Blog", link: linkToWhats },
		{ title: "Web app", link: linkToWhats },
		{ title: "App mobile", link: linkToWhats },
		{ title: "App nativo", link: linkToWhats },
	];

	return (
		<Root>
			<Section>
				<Icon />

				<Links>
					<LinksList title="Produtos">
						{links.map((l) => (
							<LinkItem key={l.title} href={l.link}>
								{l.title}
							</LinkItem>
						))}
					</LinksList>

					{/* <ul className="flex flex-col gap-2">
								<span className="font-bold opacity-60 text-sm">Recursos</span>

								<li>
									<Link href="https://wa.me/5541988893290?text=Tenho%20interesse%20em%20um%20site%20profissional%20de%20alta%20qualidade!">
										Blog
									</Link>
								</li>
							</ul> */}

					<LinksList title="Contato">
						<LinkItem href="https://wa.me/5541988893290?text=Tenho%20interesse%20em%20um%20site%20profissional%20de%20alta%20qualidade!">
							WhatsApp
						</LinkItem>

						<LinkItem href="mailto:joaopaulodovaledeo.60@gmail.com">
							Email
						</LinkItem>
					</LinksList>
				</Links>
			</Section>

			<Divider />

			<Section>
				<div>
					<span className="font-bold">Seu sonho vivo com a gente</span>
					<span className="text-xs">
						Software do jeito que você nunca viu. A melhor solução para o seu
						negócio está aqui!
					</span>
				</div>

				<div className="flex flex-col w-full h-full">
					<span className="font-bold opacity-60 text-xs self-end mt-auto">
						© Vortecxx. All rights reserved
					</span>
				</div>
			</Section>
		</Root>
	);
}
