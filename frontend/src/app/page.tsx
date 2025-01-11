import { HeroSection } from "@/components/hero-section";
import { ClientLogos } from "@/components/client-logos";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials";
import { BlogSection } from "@/components/blog-section";

export default function Home() {
  return (
    <main>
      <HeroSection title={undefined} description={undefined} />
      <ClientLogos />
      <FeaturesSection />
      <TestimonialsSection />
      <BlogSection />
    </main>
  );
}
