import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				body: "var(--font-geist-sans)",
			},
			fontSize: {
				xxs: "0.625rem",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
