'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection({ title, description }) {
  return (
    <section className="relative bg-black py-20 md:py-32">
      <div className="container px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {title}
              </motion.h1>
              <motion.p 
                className="max-w-[600px] text-lg text-gray-300 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {description}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button className="bg-[#4BBFAC] hover:bg-[#3a9e8f] text-white font-semibold text-lg px-8 py-6" size="lg">
                Get a Demo
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-4 md:grid-cols-2"
          >
            <div className="grid gap-4">
              <motion.div 
                className="overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Restaurant interior"
                  width={600}
                  height={400}
                  className="aspect-[4/3] object-cover"
                />
              </motion.div>
              <motion.div 
                className="overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1607083681678-52733140f93a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Mobile app"
                  width={600}
                  height={400}
                  className="aspect-[4/3] object-cover"
                />
              </motion.div>
            </div>
            <div className="grid gap-4">
              <motion.div 
                className="overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Restaurant staff"
                  width={600}
                  height={400}
                  className="aspect-[4/3] object-cover"
                />
              </motion.div>
              <motion.div 
                className="overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Restaurant menu"
                  width={600}
                  height={400}
                  className="aspect-[4/3] object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

