"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const footerLinks = [
  {
    title: "Marketing Hub",
    links: [
      "CRM & Segmentation",
      "Marketing Automation",
      "Email Marketing",
      "Text Marketing",
      "Referrals",
      "Search, Social & Discovery",
    ],
  },
  {
    title: "Guest Experience Hub",
    links: [
      "Reservations & Waitlist",
      "Events, Experiences & Add-ons",
      "Private Line",
      "Loyalty & Perks",
      "Reputation Management",
    ],
  },
  {
    title: "Operations Hub",
    links: [
      "Table Management",
      "Revenue Management",
      "Online Ordering",
      "Reporting & Group Reporting",
      "API & Integrations",
    ],
  },
  {
    title: "Who We Serve",
    links: [
      "Restaurants",
      "Restaurant Groups",
      "Hotels",
      "Membership Clubs",
      "Nightclubs & Bars",
      "Sports & Entertainment",
      "Breweries & Wineries",
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Submitted email:", email);
    toast({
      title: "Subscribed!",
      description: "You've successfully signed up for our newsletter.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-12 md:py-16">
      <div className="container px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-medium text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1 space-y-4">
              <h3 className="text-sm font-medium text-white">
                Get news and product updates
              </h3>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row max-w-sm gap-2"
              >
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-900 border-gray-800 flex-grow"
                  required
                />
                <Button
                  type="submit"
                  className="bg-[#4BBFAC] hover:bg-[#3a9e8f] text-white whitespace-nowrap"
                >
                  Submit
                </Button>
              </form>
            </div>
            <div className="text-sm text-gray-400">
              <p>&copy; 2025 PR-Room. All rights reserved.</p>
              <div className="mt-2 flex space-x-4">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
