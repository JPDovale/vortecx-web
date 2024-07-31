import { WifiOff } from "lucide-react";

export function InternalServerError() {
	return (
		<div className="text-center flex flex-col m-auto text-violet-700  ease-in duration-200">
			<span className="text-8xl font-bold font-body">500</span>
			<span className="text-3xl max-w-lg flex flex-col items-center gap-4">
				Servidores indisponíveis no momento... Volte mais tarde
				<WifiOff className="w-10 h-10" />
			</span>
		</div>
	);
}
