import Hero from "@/components/sections/home/hero";
import LaunchesSection from "@/components/sections/home/launches";
import BlogSection from "@/components/sections/home/blog";
import DifferentialsSection from "@/components/sections/home/differentials";
import TestimonialsSection from "@/components/sections/home/testimonials";

export default function Home() {
	return (
		<main>
			<Hero />
			<LaunchesSection />
			<BlogSection />
			<DifferentialsSection />
			<TestimonialsSection />
		</main>
	);
}
