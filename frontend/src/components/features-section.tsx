'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Users, BarChart, Mail } from 'lucide-react'

const features = [
  {
    title: "CRM",
    description: "Automated guest database, purpose-built for hospitality",
    content: "Guest profiles built automatically within a unified database, available at your fingertips to delight guests and market to them. Enrich profiles through 100+ integrations and an open API.",
    icon: Database
  },
  {
    title: "Guest Experience",
    description: "Take the guesswork out of guest work",
    content: "Wow guests, bring your brand to life and personalize experiences for every guest, from booking, to dining, to marketing and everything in between.",
    icon: Users
  },
  {
    title: "Operations",
    description: "Front-of-house, we've got you cover'ed",
    content: "Technology that gives your front-of-house superpowers. Manage pre-shift, reservations, seating, waitlist and turns while welcoming and recognizing guests with ease.",
    icon: BarChart
  },
  {
    title: "Marketing",
    description: "Create more regulars on the regular",
    content: "Turn your guest data and relationships into more dollars with personalized marketing campaigns that feel human and are proven to bring guests back, automatically.",
    icon: Mail
  }
]

export function FeaturesSection() {
  return (
    <section className="bg-black py-20 md:py-32">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
            More magic, more money. Automatically.
          </h2>
          <p className="mt-4 text-gray-400">
            PR-Room is an all-in-one CRM, marketing & operations platform that helps you grow revenue and deliver personalized experiences to every guest, turning first-timers into regulars, automatically.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="bg-gray-900 border-gray-800 p-6 md:p-8">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-[#4BBFAC]" />
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.content}</p>
                  <Button variant="link" className="mt-4 text-[#4BBFAC] p-0">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

