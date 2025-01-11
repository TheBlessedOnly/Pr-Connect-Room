import { HeroSection } from "@/components/hero-section";
import { ContentSection } from "@/components/content-section";

export default function OurStoryPage() {
  return (
    <main>
      <HeroSection
        title="Our Story"
        description="Learn about PR-Room's journey in revolutionizing the hospitality industry."
      />
      <ContentSection
        content="PR-Room was founded with a vision to transform the way restaurants and hospitality venues connect with their guests. Our journey began in 2011 when we recognized the need for a comprehensive platform that could streamline operations, enhance guest experiences, and drive revenue growth for hospitality businesses.

Over the years, we've continuously innovated and expanded our platform, always keeping our clients' needs at the forefront. Today, PR-Room is trusted by thousands of venues worldwide, from small independent restaurants to large hotel chains and entertainment venues.

Our commitment to excellence and customer success has driven us to develop cutting-edge features like our AI-powered CRM, real-time analytics, and seamless integrations with other industry-leading tools. We're proud of how far we've come, but we're even more excited about the future as we continue to push the boundaries of what's possible in hospitality technology."
      />
    </main>
  );
}
