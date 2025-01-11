import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"

export default function MarketingLoyaltyPage() {
  return (
    <main>
      <HeroSection 
        title="Marketing & Loyalty"
        description="Build lasting relationships with your guests through PR-Room's powerful marketing and loyalty tools."
      />
      <FeaturesSection 
        features={[
          {
            title: "CRM",
            description: "Centralize guest data and gain valuable insights.",
            icon: "Users"
          },
          {
            title: "Email Marketing",
            description: "Create and send targeted email campaigns to engage your guests.",
            icon: "Mail"
          },
          {
            title: "Loyalty",
            description: "Reward your most valuable guests and encourage repeat visits.",
            icon: "Award"
          },
          {
            title: "Automation",
            description: "Set up automated marketing workflows to save time and increase efficiency.",
            icon: "Zap"
          }
        ]}
      />
    </main>
  )
}

