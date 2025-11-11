import Hero from "@/components/sections/home/hero";
import Player from "@/components/sections/home/player";
import LaunchesSection from "@/components/sections/home/launches";
import DifferentialsSection from "@/components/sections/home/differentials";
import TestimonialsSection from "@/components/sections/home/testimonials";

export default function Home() {
	return (
		<main>
			<Player videoName="lancamento_altavistapark" />
			<Hero />
			<LaunchesSection />
			<DifferentialsSection />
			<TestimonialsSection />
		</main>
	);
}
