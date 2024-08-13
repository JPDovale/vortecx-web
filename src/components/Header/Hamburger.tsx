"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";

export function Hamburger() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger className="sm:hidden">
				<Menu />
			</SheetTrigger>

			<SheetContent>
				<SheetHeader>
					<SheetTitle>Menu</SheetTitle>
				</SheetHeader>

				<div className="flex flex-col gap-2">
					<Link
						className="font-bold opacity-60 text-lg hover:opacity-100 hover:text-violet-400 ease-in duration-200"
						href="/"
						onClick={() => setIsOpen(false)}
					>
						Inicio
					</Link>

					<Link
						className="font-bold opacity-60 text-lg hover:opacity-100 hover:text-violet-400 ease-in duration-200"
						href="/#services"
						onClick={() => setIsOpen(false)}
					>
						Serviços
					</Link>

					<Link
						className="font-bold opacity-60 text-lg hover:opacity-100 hover:text-violet-400 ease-in duration-200"
						href="/articles"
					>
						Blog
					</Link>

					<Link
						className="font-bold opacity-60 text-lg hover:opacity-100 hover:text-violet-400 ease-in duration-200"
						href="https://wa.me/5541988893290?text=Tenho%20interesse%20em%20um%20site%20profissional%20de%20alta%20qualidade!"
					>
						Contato
					</Link>
				</div>
			</SheetContent>
		</Sheet>
	);
}
