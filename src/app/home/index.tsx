import { Background } from "@/app/home/components/Background";
import { Presentation } from "@/app/home/components/Presentation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "./components/Card";
import { SectionContent } from "./components/Section/SectionContent";
import { SectionRoot } from "./components/Section/SectionRoot";
import { SectionTitle } from "./components/Section/SectionTitle";
import { Services } from "./components/Services";

export default function HomePage() {
	return (
		<div className="min-h-screen w-screen max-w-full flex flex-col overflow-x-hidden">
			<Background />
			<Header />

			<Presentation />

			<section className="w-full bg-gray-100 z-50">
				<main className="w-full max-w-7xl mx-auto mt-4 px-4">
					<SectionRoot>
						<SectionTitle id="services">Serviços</SectionTitle>

						<SectionContent>
							<Services />

							<Card />
						</SectionContent>
					</SectionRoot>
				</main>
			</section>
			<Footer />
		</div>
	);
}
