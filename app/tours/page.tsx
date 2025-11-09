"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

const ALL_TOURS = [
  {
    id: 1,
    title: "Kenya Safari Adventure",
    destination: "Kenya",
    duration: "7 Days / 6 Nights",
    price: 2499,
    image: "/safari-adventure-group-travelers.jpg",
    rating: 4.8,
    reviews: 128,
    type: "Safari",
  },
  {
    id: 2,
    title: "Cape Town Coastal Escape",
    destination: "South Africa",
    duration: "5 Days / 4 Nights",
    price: 1899,
    image: "/wildlife-photography-safari.png",
    rating: 4.9,
    reviews: 95,
    type: "Beach",
  },
  {
    id: 3,
    title: "Zanzibar Island Paradise",
    destination: "Tanzania",
    duration: "6 Days / 5 Nights",
    price: 1699,
    image: "/luxury-safari-lodge-tanzania.jpg",
    rating: 4.7,
    reviews: 67,
    type: "Beach",
  },
  {
    id: 4,
    title: "Egyptian Wonders Tour",
    destination: "Egypt",
    duration: "8 Days / 7 Nights",
    price: 2299,
    image: "/maasai-warriors-traditional.jpg",
    rating: 4.9,
    reviews: 142,
    type: "Cultural",
  },
  {
    id: 5,
    title: "Kilimanjaro Climbing Adventure",
    destination: "Tanzania",
    duration: "7 Days",
    price: 1999,
    image: "/african-wildlife-conservation.png",
    rating: 4.8,
    reviews: 56,
    type: "Adventure",
  },
  {
    id: 6,
    title: "Gorilla Trekking in Uganda",
    destination: "Uganda",
    duration: "5 Days / 4 Nights",
    price: 2199,
    image: "/kenyan-landscape-sunset.jpg",
    rating: 4.9,
    reviews: 78,
    type: "Wildlife",
  },
]

export default function ToursPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState(3000)

  const filteredTours = ALL_TOURS.filter((tour) => {
    const matchesType = !selectedType || tour.type === selectedType
    const matchesPrice = tour.price <= priceRange
    return matchesType && matchesPrice
  })

  const tourTypes = [...new Set(ALL_TOURS.map((t) => t.type))]

  return (
    <main>
      <section className="section-padding" style={{ backgroundColor: "#543609" }}>
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Tour Packages</h1>
          <p className="text-lg" style={{ color: "#f5dba3" }}>
            Discover our curated collection of luxury tours
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="lg:col-span-1">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-serif font-bold text-lg mb-4" style={{ color: "#543609" }}>
                  Filters
                </h3>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3" style={{ color: "#543609" }}>
                    Tour Type
                  </h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        checked={!selectedType}
                        onChange={() => setSelectedType(null)}
                        className="cursor-pointer"
                      />
                      <span className="text-sm" style={{ color: "#333333" }}>
                        All Types
                      </span>
                    </label>
                    {tourTypes.map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          checked={selectedType === type}
                          onChange={() => setSelectedType(type)}
                          className="cursor-pointer"
                        />
                        <span className="text-sm" style={{ color: "#333333" }}>
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3" style={{ color: "#543609" }}>
                    Price Range
                  </h4>
                  <input
                    type="range"
                    min="0"
                    max="3000"
                    step="100"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full"
                  />
                  <p className="text-sm mt-2" style={{ color: "#666666" }}>
                    Up to ${priceRange}
                  </p>
                </div>
              </div>
            </div>

            {/* Tours Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTours.map((tour) => (
                  <Link key={tour.id} href={`/tours/${tour.id}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col">
                      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${tour.image}')` }} />
                      <div className="p-4 flex-1 flex flex-col">
                        <p className="text-sm font-semibold" style={{ color: "#ac7313" }}>
                          {tour.destination}
                        </p>
                        <h3 className="font-serif text-lg font-bold mb-2" style={{ color: "#543609" }}>
                          {tour.title}
                        </h3>
                        <p className="text-sm mb-4" style={{ color: "#666666" }}>
                          {tour.duration}
                        </p>

                        <div className="flex items-center gap-1 mb-4 mt-auto">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: "#f5dba3" }}>
                                ★
                              </span>
                            ))}
                          </div>
                          <span className="text-sm ml-2" style={{ color: "#666666" }}>
                            ({tour.reviews})
                          </span>
                        </div>

                        <p className="font-serif font-bold text-lg" style={{ color: "#543609" }}>
                          From ${tour.price}
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              {filteredTours.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg" style={{ color: "#666666" }}>
                    No tours found matching your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
