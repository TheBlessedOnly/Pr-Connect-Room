'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    quote: "Far more than just an online reservations platform, PR-Room provides transformative tech that helps us deliver highly customized experiences and remarkable hospitality for our guests.",
    author: "Daniel Meyer",
    role: "Founder and CEO",
    company: "Union Square Hospitality Group",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    stats: {
      revenue: "$2M",
      relationships: "350,000+",
      locations: "12"
    }
  },
  {
    quote: "PR-Room has revolutionized our guest management process. It's an indispensable tool for our operations.",
    author: "Emma Rodriguez",
    role: "Operations Manager",
    company: "Fine Dining Group",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80",
    stats: {
      revenue: "$1.5M",
      relationships: "200,000+",
      locations: "8"
    }
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-black py-20 md:py-32">
      <div className="container px-4 md:px-8">
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6 md:p-8">
                      <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-6">
                          <blockquote className="text-xl text-white">
                            "{testimonial.quote}"
                          </blockquote>
                          <div className="flex items-center space-x-4 mt-6">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              width={60}
                              height={60}
                              className="rounded-full w-12 h-12 md:w-16 md:h-16"
                            />
                            <div>
                              <p className="font-medium text-white">{testimonial.author}</p>
                              <p className="text-sm text-gray-400">{testimonial.role}</p>
                              <p className="text-sm text-gray-400">{testimonial.company}</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-[#4BBFAC]">
                              {testimonial.stats.revenue}
                            </p>
                            <p className="text-sm text-gray-400">Revenue Generated</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-[#4BBFAC]">
                              {testimonial.stats.relationships}
                            </p>
                            <p className="text-sm text-gray-400">Relationships Created</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-[#4BBFAC]">
                              {testimonial.stats.locations}
                            </p>
                            <p className="text-sm text-gray-400">Locations</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

