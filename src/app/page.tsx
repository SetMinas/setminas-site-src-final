import Hero from "@/components/sections/home/hero";
import Player from "@/components/sections/home/player";
import LaunchesSection from "@/components/sections/home/launches";
import DifferentialsSection from "@/components/sections/home/differentials";
import TestimonialsSection from "@/components/sections/home/testimonials";

export default function Home() {
	return (
		<main>
			<Player videoUrl="/videos/lancamento_altavistapark.mp4" />
			<Hero />
			<LaunchesSection />
			<DifferentialsSection />
			<TestimonialsSection />
		</main>
	);
}
