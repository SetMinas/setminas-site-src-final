import Hero from '@/components/sections/home/hero';
import LaunchesSection from '@/components/sections/home/launches';
import DifferentialsSection from '@/components/sections/home/differentials';
import TestimonialsSection from '@/components/sections/home/testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <LaunchesSection />
      <DifferentialsSection />
      <TestimonialsSection />
    </main>
  );
}
