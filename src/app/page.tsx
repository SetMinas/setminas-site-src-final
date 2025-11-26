import Hero from "@/components/sections/home/hero";
import Player from "@/components/sections/home/player";
import LaunchesSection from "@/components/sections/home/launches";
import BlogSection from "@/components/sections/home/blog";
import DifferentialsSection from "@/components/sections/home/differentials";
import TestimonialsSection from "@/components/sections/home/testimonials";

export default function Home() {
	return (
		<main>
			<Player videoName="lancamento_altavistapark" />
			<Hero />
			<LaunchesSection />
			<BlogSection />
			<DifferentialsSection />
			<TestimonialsSection />
		</main>
	);
}
