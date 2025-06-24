import Player from "@/components/sections/home/player";
import Hero from "@/components/sections/home/hero";
import LaunchesSection from "@/components/sections/home/launches";
import DifferentialsSection from "@/components/sections/home/differentials";
import TestimonialsSection from "@/components/sections/home/testimonials";

export default function Home() {
	return (
		<main>
			<Player />
			<Hero />
			<LaunchesSection />
			<DifferentialsSection />
			<TestimonialsSection />
		</main>
	);
}
