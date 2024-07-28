import { ActionItem } from "./ActionItem";
import { Actions } from "./Actions";
import { Icon } from "./Icon";
import { NavLink } from "./NavLink";
import { Navigation } from "./Navigation";
import { Root } from "./Root";

export function Header() {
	return (
		<Root>
			<Icon />

			<Navigation>
				<NavLink href="/">Inicio</NavLink>

				<NavLink href="#services">Serviços</NavLink>

				<NavLink href="https://wa.me/5541988893290?text=Tenho%20interesse%20em%20um%20site%20profissional%20de%20alta%20qualidade!">
					Contato
				</NavLink>
			</Navigation>

			<Actions>
				<ActionItem href="https://wa.me/5541988893290?text=Tenho%20interesse%20em%20um%20site%20profissional%20de%20alta%20qualidade!">
					Contato
				</ActionItem>
			</Actions>
		</Root>
	);
}

/* <button
	type="button"
	className="px-4 py-1 rounded-full shadow-md shadow-white/10 hover:shadow-lg hover:shadow-white/20 ease-in duration-200"
>
	Registrar
</button> */
