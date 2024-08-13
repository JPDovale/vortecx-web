import type { HTMLAttributes } from "react";

type ActionsProps = HTMLAttributes<HTMLDivElement>;

export function Actions(props: ActionsProps) {
	return <div className="space-x-4 max-sm:hidden" {...props} />;
}
