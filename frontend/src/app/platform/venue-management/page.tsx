import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"

export default function VenueManagementPage() {
  return (
    <main>
      <HeroSection 
        title="Venue Management"
        description="Streamline your operations and gain valuable insights with PR-Room's venue management solutions."
      />
      <FeaturesSection 
        features={[
          {
            title: "Reporting",
            description: "Access comprehensive reports and analytics to make data-driven decisions.",
            icon: "BarChart"
          },
          {
            title: "Integrations",
            description: "Connect PR-Room with your existing tools and systems.",
            icon: "Link"
          },
          {
            title: "Inventory",
            description: "Manage your inventory efficiently and reduce waste.",
            icon: "Package"
          }
        ]}
      />
    </main>
  )
}

