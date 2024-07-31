import { LucideEarthLock } from "lucide-react";

export function NotFoundError() {
	return (
		<div className="text-center flex flex-col m-auto text-violet-700  ease-in duration-200">
			<span className="text-8xl font-bold font-body">404</span>
			<span className="text-3xl max-w-lg flex flex-col items-center gap-4">
				Artigo não encontrado...
				<LucideEarthLock className="w-10 h-10" />
			</span>
		</div>
	);
}
