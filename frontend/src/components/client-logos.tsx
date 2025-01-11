'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  {
    id: "independents",
    label: "Independents & Restaurant Groups",
    logos: [
      { name: "The French Laundry", location: "California", logo: "https://logo.clearbit.com/thomaskeller.com" },
      { name: "Noma", location: "Copenhagen", logo: "https://logo.clearbit.com/noma.dk" },
      { name: "Eleven Madison Park", location: "New York", logo: "https://logo.clearbit.com/elevenmadisonpark.com" },
      { name: "Alinea", location: "Chicago", logo: "https://logo.clearbit.com/alinearestaurant.com" },
    ]
  },
  {
    id: "hotels",
    label: "Hotel F&B Outlets",
    logos: [
      { name: "Marriott", location: "Global", logo: "https://logo.clearbit.com/marriott.com" },
      { name: "Hilton", location: "Global", logo: "https://logo.clearbit.com/hilton.com" },
      { name: "Four Seasons", location: "Global", logo: "https://logo.clearbit.com/fourseasons.com" },
      { name: "Ritz-Carlton", location: "Global", logo: "https://logo.clearbit.com/ritzcarlton.com" },
    ]
  },
  {
    id: "entertainment",
    label: "Entertainment & Nightlife",
    logos: [
      { name: "Live Nation", location: "United States", logo: "https://logo.clearbit.com/livenation.com" },
      { name: "MGM Resorts", location: "Las Vegas", logo: "https://logo.clearbit.com/mgmresorts.com" },
      { name: "Tao Group", location: "Global", logo: "https://logo.clearbit.com/taogroup.com" },
      { name: "Hakkasan Group", location: "Global", logo: "https://logo.clearbit.com/hakkasangroup.com" },
    ]
  }
]

export function ClientLogos() {
  return (
    <section className="bg-black py-20 md:py-32">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
            Welcome to the table.
          </h2>
          <p className="mt-4 text-2xl text-[#4BBFAC]">
            Let's change the industry for good.
          </p>
          <p className="mt-4 text-gray-400">
            Join over 10,000 restaurants globally growing with PR-Room, from local favorites to Michelin stars.
          </p>
        </motion.div>
        <Tabs defaultValue="independents" className="mt-12">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-[#4BBFAC] data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4"
              >
                {category.logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-gray-800 p-4 md:p-6"
                  >
                    <Image
                      src={logo.logo}
                      alt={logo.name}
                      width={120}
                      height={60}
                      className="h-10 w-auto md:h-12"
                    />
                    <div className="text-center">
                      <p className="text-sm font-medium text-white">{logo.name}</p>
                      <p className="text-xs text-gray-400">{logo.location}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

