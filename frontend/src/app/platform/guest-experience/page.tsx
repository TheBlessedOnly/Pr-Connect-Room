import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"

export default function GuestExperiencePage() {
  return (
    <main>
      <HeroSection 
        title="Guest Experience"
        description="Deliver exceptional hospitality at scale with PR-Room's comprehensive guest experience solutions."
      />
      <FeaturesSection 
        features={[
          {
            title: "Reservations",
            description: "Streamline your reservation process and maximize your bookings.",
            icon: "Calendar"
          },
          {
            title: "Waitlist",
            description: "Manage your waitlist efficiently and keep guests informed.",
            icon: "List"
          },
          {
            title: "Table Management",
            description: "Optimize your floor plan and improve turn times.",
            icon: "LayoutGrid"
          },
          {
            title: "Orders",
            description: "Simplify order taking and improve kitchen communication.",
            icon: "ClipboardList"
          },
          {
            title: "Events & Experiences",
            description: "Create and manage unforgettable events for your guests.",
            icon: "Sparkles"
          },
          {
            title: "Reputation",
            description: "Monitor and improve your online reputation.",
            icon: "Star"
          }
        ]}
      />
    </main>
  )
}

