'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const posts = [
  {
    title: "How to Build and Grow a Restaurant Referral Program",
    category: "Marketing & Promotions",
    date: "August 6, 2024",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  {
    title: "How Your Hotel Can Capitalize on the Afternoon Tea Craze",
    category: "Marketing & Promotions",
    date: "September 5, 2024",
    image: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  {
    title: "Restaurant Revenue Management Strategies to Maximize Every Shift",
    category: "Sales & Revenue",
    date: "September 26, 2024",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
  }
]

export function BlogSection() {
  return (
    <section className="bg-black py-20 md:py-32">
      <div className="container px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-3xl font-bold text-white"
        >
          Featured Content
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="bg-gray-900 border-gray-800 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6">
                  <CardDescription className="text-sm text-gray-400">{post.category}</CardDescription>
                  <CardTitle className="text-xl text-white mt-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm text-gray-400">{post.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

