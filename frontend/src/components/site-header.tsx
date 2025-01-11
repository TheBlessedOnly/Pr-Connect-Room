'use client'

import * as React from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const platformItems = [
  {
    title: "Guest Experience",
    description: "Deliver exceptional hospitality at scale",
    href: "/platform/guest-experience",
    items: [
      { title: "Reservations", href: "/platform/guest-experience/reservations" },
      { title: "Waitlist", href: "/platform/guest-experience/waitlist" },
      { title: "Table Management", href: "/platform/guest-experience/table-management" },
      { title: "Orders", href: "/platform/guest-experience/orders" },
      { title: "Events & Experiences", href: "/platform/guest-experience/events-experiences" },
      { title: "Reputation", href: "/platform/guest-experience/reputation" },
    ]
  },
  {
    title: "Marketing & Loyalty",
    description: "Build lasting relationships with your guests",
    href: "/platform/marketing-loyalty",
    items: [
      { title: "CRM", href: "/platform/marketing-loyalty/crm" },
      { title: "Email Marketing", href: "/platform/marketing-loyalty/email-marketing" },
      { title: "Loyalty", href: "/platform/marketing-loyalty/loyalty" },
      { title: "Automation", href: "/platform/marketing-loyalty/automation" },
    ]
  },
  {
    title: "Venue Management",
    description: "Streamline your operations",
    href: "/platform/venue-management",
    items: [
      { title: "Reporting", href: "/platform/venue-management/reporting" },
      { title: "Integrations", href: "/platform/venue-management/integrations" },
      { title: "Inventory", href: "/platform/venue-management/inventory" },
    ]
  },
]

const resourceItems = [
  {
    title: "Blog",
    description: "Latest industry insights and updates",
    href: "/resources/blog",
  },
  {
    title: "Case Studies",
    description: "See how others are growing with PR-Room",
    href: "/resources/case-studies",
  },
  {
    title: "Webinars",
    description: "Learn from industry experts",
    href: "/resources/webinars",
  },
  {
    title: "Guides",
    description: "In-depth resources for hospitality professionals",
    href: "/resources/guides",
  },
]

const aboutItems = [
  { title: "Our Story", href: "/about/our-story" },
  { title: "Careers", href: "/about/careers" },
  { title: "Press", href: "/about/press" },
  { title: "Contact", href: "/about/contact" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white tracking-tight">PR-Room</span>
        </Link>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="gap-8">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white">Platform</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] gap-3 p-4 md:w-[800px] md:grid-cols-3">
                  {platformItems.map((item) => (
                    <li key={item.title} className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">{item.title}</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {item.description}
                          </p>
                          <ul className="mt-4 space-y-2">
                            {item.items.map((subItem) => (
                              <li key={subItem.title}>
                                <Link href={subItem.href} className="text-sm text-muted-foreground hover:text-white">
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {resourceItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white">About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  {aboutItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          {item.title}
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-white/10 hidden md:inline-flex">
            Login
          </Button>
          <Button className="bg-[#4BBFAC] hover:bg-[#3a9e8f] text-white font-semibold hidden md:inline-flex">
            Book a Demo
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black"
          >
            <nav className="flex flex-col p-4">
              <Link href="/platform" className="py-2 text-white">Platform</Link>
              <Link href="/resources" className="py-2 text-white">Resources</Link>
              <Link href="/about" className="py-2 text-white">About</Link>
              <Button variant="ghost" className="justify-start text-white">Login</Button>
              <Button className="mt-2 bg-[#4BBFAC] hover:bg-[#3a9e8f] text-white">Book a Demo</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

