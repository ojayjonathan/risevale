"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Star, MapPin } from "lucide-react"

const HOTELS = [
  {
    id: 1,
    name: "Serena Safari Lodge",
    destination: "Masai Mara",
    rating: 5,
    reviews: 234,
    pricePerNight: 450,
    image: "/wildlife-photography-safari.png",
    amenities: ["Wifi", "Restaurant", "Spa", "Pool"],
    bedrooms: 1,
    maxGuests: 2,
    description: "Luxury lodge with stunning views of the Masai Mara ecosystem",
    category: "Luxury",
  },
  {
    id: 2,
    name: "Four Seasons Safari Lodge",
    destination: "Masai Mara",
    rating: 5,
    reviews: 189,
    pricePerNight: 650,
    image: "/luxury-safari-lodge-tanzania.jpg",
    amenities: ["Wifi", "Restaurant", "Spa", "Pool", "Fitness"],
    bedrooms: 1,
    maxGuests: 2,
    description: "Ultra-luxury accommodations with personalized service",
    category: "Ultra-Luxury",
  },
  {
    id: 3,
    name: "Lake Naivasha Serena",
    destination: "Lake Naivasha",
    rating: 4.8,
    reviews: 167,
    pricePerNight: 380,
    image: "/african-wildlife-conservation.png",
    amenities: ["Wifi", "Restaurant", "Pool", "Water Sports"],
    bedrooms: 1,
    maxGuests: 2,
    description: "Scenic lakeside resort perfect for relaxation and wildlife viewing",
    category: "Comfort",
  },
  {
    id: 4,
    name: "Lake Nakuru Serena",
    destination: "Lake Nakuru",
    rating: 4.7,
    reviews: 142,
    pricePerNight: 320,
    image: "/maasai-warriors-traditional.jpg",
    amenities: ["Wifi", "Restaurant", "Pool"],
    bedrooms: 1,
    maxGuests: 2,
    description: "Budget-friendly lodge near Lake Nakuru's flamingo population",
    category: "Comfort",
  },
  {
    id: 5,
    name: "Amboseli Serena Safari Lodge",
    destination: "Amboseli",
    rating: 4.9,
    reviews: 201,
    pricePerNight: 420,
    image: "/kenyan-landscape-sunset.jpg",
    amenities: ["Wifi", "Restaurant", "Spa", "Pool"],
    bedrooms: 1,
    maxGuests: 2,
    description: "Premium lodge with views of Mount Kilimanjaro",
    category: "Luxury",
  },
  {
    id: 6,
    name: "Serena Mara Lodge",
    destination: "Masai Mara",
    rating: 4.8,
    reviews: 178,
    pricePerNight: 400,
    image: "/safari-adventure-group-travelers.jpg",
    amenities: ["Wifi", "Restaurant", "Spa", "Fitness"],
    bedrooms: 1,
    maxGuests: 2,
    description: "Elegant lodge combining comfort with authentic safari experience",
    category: "Luxury",
  },
]

const CATEGORIES = ["All", "Ultra-Luxury", "Luxury", "Comfort"]
const AMENITIES_LIST = ["Wifi", "Restaurant", "Spa", "Pool", "Fitness", "Water Sports"]

export default function HotelsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState(700)
  const [sortBy, setSortBy] = useState("recommended")

  const filteredHotels = HOTELS.filter((hotel) => {
    const matchesCategory = selectedCategory === "All" || hotel.category === selectedCategory
    const matchesPrice = hotel.pricePerNight <= priceRange
    const matchesAmenities =
      selectedAmenities.length === 0 || selectedAmenities.every((amenity) => hotel.amenities.includes(amenity))
    return matchesCategory && matchesPrice && matchesAmenities
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.pricePerNight - b.pricePerNight
    if (sortBy === "price-high") return b.pricePerNight - a.pricePerNight
    if (sortBy === "rating") return b.rating - a.rating
    return 0
  })

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) => (prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]))
  }

  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Luxury Accommodations</h1>
          <p className="text-primary-dark text-lg">Handpicked hotels and lodges across Africa</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="bg-background p-6 rounded-lg border border-border space-y-6">
                <div>
                  <h3 className="font-serif font-bold text-lg text-accent mb-4">Filters</h3>
                </div>

                {/* Category Filter */}
                <div>
                  <h4 className="font-semibold text-accent mb-3">Category</h4>
                  <div className="space-y-2">
                    {CATEGORIES.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? "bg-accent text-white"
                            : "bg-background text-accent hover:bg-primary"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amenities Filter */}
                <div>
                  <h4 className="font-semibold text-accent mb-3">Amenities</h4>
                  <div className="space-y-2">
                    {AMENITIES_LIST.map((amenity) => (
                      <label key={amenity} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedAmenities.includes(amenity)}
                          onChange={() => toggleAmenity(amenity)}
                          className="cursor-pointer"
                        />
                        <span className="text-sm text-accent">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h4 className="font-semibold text-accent mb-3">Price Per Night</h4>
                  <input
                    type="range"
                    min="0"
                    max="700"
                    step="50"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full"
                  />
                  <p className="text-sm text-muted mt-2">Up to ${priceRange}</p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Sort Options */}
              <div className="mb-6 flex items-center justify-between">
                <p className="text-muted">
                  Showing <span className="font-semibold text-accent">{filteredHotels.length}</span> hotels
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-background border border-border rounded-lg text-accent"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* Hotels Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredHotels.map((hotel) => (
                  <Card
                    key={hotel.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full"
                  >
                    <Link href={`/hotels/${hotel.id}`} className="flex flex-col h-full flex-1">
                      <div
                        className="h-48 bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${hotel.image})` }}
                      >
                        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1">
                          <Star size={16} className="fill-primary-dark text-primary-dark" />
                          <span className="font-semibold text-accent">{hotel.rating}</span>
                        </div>
                      </div>

                      <div className="p-4 flex-1 flex flex-col">
                        <div className="flex items-start gap-2 mb-2">
                          <MapPin size={16} className="text-accent-light flex-shrink-0 mt-1" />
                          <p className="text-sm text-accent-light">{hotel.destination}</p>
                        </div>

                        <h3 className="font-serif text-lg font-bold text-accent mb-2">{hotel.name}</h3>
                        <p className="text-sm text-muted mb-4">{hotel.description}</p>

                        {/* Amenities */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {hotel.amenities.slice(0, 3).map((amenity) => (
                            <span key={amenity} className="text-xs px-2 py-1 bg-background text-accent rounded">
                              {amenity}
                            </span>
                          ))}
                          {hotel.amenities.length > 3 && (
                            <span className="text-xs px-2 py-1 bg-background text-accent rounded">
                              +{hotel.amenities.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Rating and Reviews */}
                        <div className="flex items-center gap-2 mb-4 text-sm text-muted">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} className="fill-primary-dark text-primary-dark" />
                            ))}
                          </div>
                          <span>({hotel.reviews} reviews)</span>
                        </div>

                        {/* Price */}
                        <div className="mt-auto">
                          <div className="flex items-baseline gap-2 mb-4">
                            <p className="font-serif text-2xl font-bold text-accent">${hotel.pricePerNight}</p>
                            <p className="text-sm text-muted">per night</p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Booking Button */}
                    <div className="p-4 pt-0">
                      <Link href={`/booking?hotelId=${hotel.id}`} className="btn-primary w-full text-center block">
                        Book Now
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredHotels.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted text-lg mb-4">No hotels found matching your filters</p>
                  <button
                    onClick={() => {
                      setSelectedCategory("All")
                      setSelectedAmenities([])
                      setPriceRange(700)
                    }}
                    className="btn-secondary"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
