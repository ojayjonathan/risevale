"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Star, MapPin, Heart, Share2, Wifi, Utensils, Dumbbell, Waves, ChevronLeft, ChevronRight } from "lucide-react"

interface HotelDetail {
  id: number
  name: string
  destination: string
  rating: number
  reviews: number
  pricePerNight: number
  image: string
  images: string[]
  description: string
  facilities: string[]
  amenities: string[]
  roomTypes: RoomType[]
  reviews_data: Review[]
}

interface RoomType {
  type: string
  maxGuests: number
  area: number
  price: number
  amenities: string[]
}

interface Review {
  name: string
  rating: number
  date: string
  text: string
  verified: boolean
}

const HOTEL_DETAILS: Record<string, HotelDetail> = {
  "1": {
    id: 1,
    name: "Serena Safari Lodge",
    destination: "Masai Mara",
    rating: 5,
    reviews: 234,
    pricePerNight: 450,
    image: "/luxury-safari-lodge-tanzania.jpg",
    images: [
      "/luxury-safari-lodge-tanzania.jpg",
      "/wildlife-photography-safari.png",
      "/kenyan-landscape-sunset.jpg",
      "/safari-adventure-group-travelers.jpg",
    ],
    description:
      "Perched on the banks of the Talek River, Serena Safari Lodge offers breathtaking views of the Masai Mara ecosystem. This luxury lodge combines world-class comfort with authentic safari experiences, guided by expert naturalists.",
    facilities: [
      "Fine dining restaurant",
      "Bar and lounge",
      "Spa and wellness center",
      "Infinity pool",
      "Game viewing deck",
      "Library",
      "Gift shop",
      "Conference facilities",
    ],
    amenities: ["Wifi", "Restaurant", "Spa", "Pool", "Fitness", "Game drives", "Cultural tours"],
    roomTypes: [
      {
        type: "Standard Suite",
        maxGuests: 2,
        area: 45,
        price: 450,
        amenities: ["Wifi", "AC", "En-suite bathroom", "Minibar", "Safe"],
      },
      {
        type: "Deluxe Suite",
        maxGuests: 2,
        area: 60,
        price: 550,
        amenities: ["Wifi", "AC", "Spa bath", "Minibar", "Safe", "Private balcony"],
      },
      {
        type: "Presidential Suite",
        maxGuests: 4,
        area: 100,
        price: 850,
        amenities: ["Wifi", "AC", "Spa", "Minibar", "Safe", "Private deck", "Separate living area"],
      },
    ],
    reviews_data: [
      {
        name: "Sarah Johnson",
        rating: 5,
        date: "December 2024",
        text: "Absolutely incredible experience! The lodge is beautifully designed with amazing views. The staff was attentive and the food was exceptional. Highly recommend for a luxury safari.",
        verified: true,
      },
      {
        name: "Michael Chen",
        rating: 5,
        date: "November 2024",
        text: "The game drives were fantastic and our guide was extremely knowledgeable. The accommodation was comfortable and the sunset views are unforgettable.",
        verified: true,
      },
      {
        name: "Emma Williams",
        rating: 4,
        date: "October 2024",
        text: "Great location and beautiful lodge. Only minor issue was WiFi connectivity in some areas, but overall excellent experience.",
        verified: true,
      },
    ],
  },
  "2": {
    id: 2,
    name: "Four Seasons Safari Lodge",
    destination: "Masai Mara",
    rating: 5,
    reviews: 189,
    pricePerNight: 650,
    image: "/maasai-warriors-traditional.jpg",
    images: [
      "/maasai-warriors-traditional.jpg",
      "/african-wildlife-conservation.png",
      "/wildlife-photography-safari.png",
      "/kenyan-landscape-sunset.jpg",
    ],
    description:
      "Ultra-luxury safari accommodations featuring personalized service, exquisite dining, and intimate wildlife encounters. Four Seasons Safari Lodge represents the pinnacle of African hospitality.",
    facilities: [
      "Michelin-star restaurant",
      "Premium bar",
      "Luxury spa",
      "Olympic-sized pool",
      "Private game reserves",
      "Wine cellar",
      "Concierge service",
    ],
    amenities: ["Wifi", "Restaurant", "Spa", "Pool", "Fitness", "Personalized guides", "Private transfers"],
    roomTypes: [
      {
        type: "Deluxe Room",
        maxGuests: 2,
        area: 75,
        price: 650,
        amenities: ["Wifi", "AC", "Premium bedding", "Minibar", "Safe", "Balcony"],
      },
      {
        type: "Suite",
        maxGuests: 2,
        area: 100,
        price: 850,
        amenities: ["Wifi", "AC", "Spa bath", "Minibar", "Safe", "Living area"],
      },
      {
        type: "Royal Villa",
        maxGuests: 6,
        area: 250,
        price: 1500,
        amenities: ["Wifi", "AC", "Private pool", "Personal chef", "Butler service", "Multiple bedrooms"],
      },
    ],
    reviews_data: [
      {
        name: "David Smith",
        rating: 5,
        date: "January 2025",
        text: "Absolutely world-class. The service is impeccable and every detail has been thought through. Worth every penny for a special occasion.",
        verified: true,
      },
      {
        name: "Jessica Lee",
        rating: 5,
        date: "December 2024",
        text: "The best safari lodge experience I've had. Exceptional food, outstanding guides, and luxurious accommodations.",
        verified: true,
      },
    ],
  },
  "3": {
    id: 3,
    name: "Lake Naivasha Serena",
    destination: "Lake Naivasha",
    rating: 4.8,
    reviews: 167,
    pricePerNight: 380,
    image: "/kenyan-landscape-sunset.jpg",
    images: ["/kenyan-landscape-sunset.jpg", "/wildlife-photography-safari.png", "/luxury-safari-lodge-tanzania.jpg"],
    description:
      "Scenic lakeside resort with stunning water views, perfect for relaxation and wildlife viewing. Located on the shores of Lake Naivasha, this resort offers a perfect escape.",
    facilities: ["Lakeside restaurant", "Beach bar", "Spa", "Pool", "Water sports center", "Boat house", "Garden"],
    amenities: ["Wifi", "Restaurant", "Pool", "Water Sports", "Boat rides", "Bird watching"],
    roomTypes: [
      {
        type: "Standard Room",
        maxGuests: 2,
        area: 40,
        price: 380,
        amenities: ["Wifi", "AC", "En-suite bathroom", "Minibar", "Lake view"],
      },
      {
        type: "Deluxe Room",
        maxGuests: 2,
        area: 55,
        price: 480,
        amenities: ["Wifi", "AC", "Spa bath", "Minibar", "Private balcony", "Lake view"],
      },
    ],
    reviews_data: [
      {
        name: "Robert Brown",
        rating: 5,
        date: "November 2024",
        text: "Beautiful location with amazing views of the lake. Perfect for a peaceful getaway with excellent birding.",
        verified: true,
      },
      {
        name: "Linda Wilson",
        rating: 4,
        date: "October 2024",
        text: "Lovely resort with good facilities. Water activities were great. Would definitely return.",
        verified: true,
      },
    ],
  },
  "4": {
    id: 4,
    name: "Lake Nakuru Serena",
    destination: "Lake Nakuru",
    rating: 4.7,
    reviews: 142,
    pricePerNight: 320,
    image: "/safari-adventure-group-travelers.jpg",
    images: [
      "/safari-adventure-group-travelers.jpg",
      "/african-wildlife-conservation.png",
      "/kenyan-landscape-sunset.jpg",
    ],
    description:
      "Budget-friendly lodge near Lake Nakuru's famous flamingo population. Great for wildlife enthusiasts and bird watchers seeking value without compromising quality.",
    facilities: ["Restaurant", "Bar", "Pool", "Garden", "Bird watching area", "Game drive desk"],
    amenities: ["Wifi", "Restaurant", "Pool", "Bird watching", "Game drives"],
    roomTypes: [
      {
        type: "Standard Room",
        maxGuests: 2,
        area: 35,
        price: 320,
        amenities: ["Wifi", "AC", "En-suite bathroom", "Lake view"],
      },
      {
        type: "Deluxe Room",
        maxGuests: 2,
        area: 50,
        price: 420,
        amenities: ["Wifi", "AC", "Balcony", "Lake view", "Minibar"],
      },
    ],
    reviews_data: [
      {
        name: "Thomas Martinez",
        rating: 5,
        date: "January 2025",
        text: "Great value for money. Beautiful lodge with excellent flamingo viewing. Staff very friendly.",
        verified: true,
      },
      {
        name: "Patricia Garcia",
        rating: 4,
        date: "December 2024",
        text: "Good location for Lake Nakuru National Park. Clean rooms and helpful staff.",
        verified: true,
      },
    ],
  },
  "5": {
    id: 5,
    name: "Amboseli Serena Safari Lodge",
    destination: "Amboseli",
    rating: 4.9,
    reviews: 201,
    pricePerNight: 420,
    image: "/african-wildlife-conservation.png",
    images: [
      "/african-wildlife-conservation.png",
      "/wildlife-photography-safari.png",
      "/luxury-safari-lodge-tanzania.jpg",
    ],
    description:
      "Premium lodge with stunning views of Mount Kilimanjaro. Positioned for exceptional game viewing and photography opportunities in Amboseli National Park.",
    facilities: ["Fine dining restaurant", "Bar", "Spa", "Pool with Kilimanjaro views", "Observation deck", "Library"],
    amenities: ["Wifi", "Restaurant", "Spa", "Pool", "Game drives", "Photography tours"],
    roomTypes: [
      {
        type: "Standard Suite",
        maxGuests: 2,
        area: 50,
        price: 420,
        amenities: ["Wifi", "AC", "En-suite bathroom", "Minibar", "Kilimanjaro view"],
      },
      {
        type: "Deluxe Suite",
        maxGuests: 2,
        area: 65,
        price: 550,
        amenities: ["Wifi", "AC", "Spa bath", "Minibar", "Private balcony", "Kilimanjaro view"],
      },
    ],
    reviews_data: [
      {
        name: "Christopher Davis",
        rating: 5,
        date: "December 2024",
        text: "The Kilimanjaro views are breathtaking. Excellent lodge with great service. Elephant viewing is fantastic.",
        verified: true,
      },
      {
        name: "Susan Anderson",
        rating: 5,
        date: "November 2024",
        text: "Stunning location with excellent amenities. The guides are knowledgeable and the lodge is well-maintained.",
        verified: true,
      },
    ],
  },
  "6": {
    id: 6,
    name: "Serena Mara Lodge",
    destination: "Masai Mara",
    rating: 4.8,
    reviews: 178,
    pricePerNight: 400,
    image: "/wildlife-photography-safari.png",
    images: ["/wildlife-photography-safari.png", "/luxury-safari-lodge-tanzania.jpg", "/kenyan-landscape-sunset.jpg"],
    description:
      "Elegant lodge combining luxury comfort with an authentic safari experience. Located in the heart of the Masai Mara, perfect for wildlife photography and cultural immersion.",
    facilities: ["Restaurant", "Bar", "Spa", "Pool", "Fitness center", "Game drive desk", "Craft shop"],
    amenities: ["Wifi", "Restaurant", "Spa", "Fitness", "Game drives", "Cultural tours"],
    roomTypes: [
      {
        type: "Standard Suite",
        maxGuests: 2,
        area: 45,
        price: 400,
        amenities: ["Wifi", "AC", "En-suite bathroom", "Minibar", "Balcony"],
      },
      {
        type: "Deluxe Suite",
        maxGuests: 2,
        area: 60,
        price: 500,
        amenities: ["Wifi", "AC", "Spa bath", "Minibar", "Private balcony"],
      },
    ],
    reviews_data: [
      {
        name: "Kevin White",
        rating: 5,
        date: "January 2025",
        text: "Fantastic safari lodge with excellent guides and great food. The lodge is beautifully designed and staff is very attentive.",
        verified: true,
      },
      {
        name: "Nancy Harris",
        rating: 4,
        date: "December 2024",
        text: "Great experience overall. Beautiful location and good service. Would recommend for a safari holiday.",
        verified: true,
      },
    ],
  },
}

const FACILITY_ICONS: Record<string, React.ReactNode> = {
  "Fine dining restaurant": <Utensils className="w-5 h-5" />,
  "Michelin-star restaurant": <Utensils className="w-5 h-5" />,
  "Lakeside restaurant": <Utensils className="w-5 h-5" />,
  Restaurant: <Utensils className="w-5 h-5" />,
  Spa: <Heart className="w-5 h-5" />,
  "Luxury spa": <Heart className="w-5 h-5" />,
  "Premium bar": <Utensils className="w-5 h-5" />,
  Bar: <Utensils className="w-5 h-5" />,
  Pool: <Waves className="w-5 h-5" />,
  "Infinity pool": <Waves className="w-5 h-5" />,
  "Olympic-sized pool": <Waves className="w-5 h-5" />,
  Fitness: <Dumbbell className="w-5 h-5" />,
  "Fitness center": <Dumbbell className="w-5 h-5" />,
}

interface HotelDetailsClientProps {
  hotel: HotelDetail | undefined
}

export default function HotelDetailsClient({ hotel }: HotelDetailsClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [favorited, setFavorited] = useState(false)
  const [selectedRoomType, setSelectedRoomType] = useState(0)

  if (!hotel) {
    return (
      <main className="section-padding">
        <div className="container-max text-center">
          <h1 className="text-3xl font-bold text-accent mb-4">Hotel Not Found</h1>
          <Link href="/hotels" className="btn-primary">
            Back to Hotels
          </Link>
        </div>
      </main>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length)
  }

  return (
    <main>
      {/* Image Gallery */}
      <section className="relative h-screen md:h-96 bg-gray-200">
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-300"
          style={{ backgroundImage: `url(${hotel.images[currentImageIndex]})` }}
        />

        {/* Image Navigation */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1h/2 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-accent" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1h/2 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-accent" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {hotel.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentImageIndex ? "bg-white w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Overlay Info */}
        <div className="absolute inset-0 bg-black/30 flex items-end">
          <div className="w-full p-6 md:p-12 container-max flex items-end justify-between">
            <div>
              <p className="text-primary-dark text-lg">{hotel.destination}</p>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mt-2">{hotel.name}</h1>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-primary-dark text-primary-dark" />
                  ))}
                  <span className="text-white font-bold">{hotel.rating}</span>
                </div>
                <span className="text-white">({hotel.reviews} reviews)</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setFavorited(!favorited)}
                className="p-3 bg-white rounded-full hover:bg-primary transition-colors"
              >
                <Heart size={24} className={favorited ? "fill-accent text-accent" : "text-accent"} />
              </button>
              <button className="p-3 bg-white rounded-full hover:bg-primary transition-colors">
                <Share2 size={24} className="text-accent" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="heading-medium mb-4">About {hotel.name}</h2>
                <p className="text-muted leading-relaxed">{hotel.description}</p>
              </div>

              {/* Facilities */}
              <div>
                <h2 className="heading-medium mb-6">Facilities & Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotel.facilities.map((facility, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
                      <div className="text-accent-light">
                        {FACILITY_ICONS[facility] || <Wifi className="w-5 h-5" />}
                      </div>
                      <span className="text-accent font-medium">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Types */}
              <div>
                <h2 className="heading-medium mb-6">Room Types</h2>
                <div className="grid grid-cols-1 gap-6">
                  {hotel.roomTypes.map((room, i) => (
                    <Card
                      key={i}
                      className={`p-6 cursor-pointer transition-all border-2 ${
                        selectedRoomType === i ? "border-accent bg-background" : "border-border"
                      }`}
                      onClick={() => setSelectedRoomType(i)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-serif font-bold text-lg text-accent">{room.type}</h3>
                          <p className="text-sm text-muted mt-1">
                            {room.area} m² | Up to {room.maxGuests} guests
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-serif text-2xl font-bold text-accent">${room.price}</p>
                          <p className="text-xs text-muted">per night</p>
                        </div>
                      </div>

                      {selectedRoomType === i && (
                        <div className="pt-4 border-t border-border">
                          <h4 className="font-semibold text-accent mb-3 text-sm">Room Amenities</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {room.amenities.map((amenity, j) => (
                              <div key={j} className="flex items-center gap-2 text-sm">
                                <span className="text-accent-light">✓</span>
                                <span className="text-muted">{amenity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div>
                <h2 className="heading-medium mb-6">Guest Reviews</h2>
                <div className="space-y-6">
                  {hotel.reviews_data.map((review, i) => (
                    <Card key={i} className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-accent">{review.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, j) => (
                                <Star
                                  key={j}
                                  size={14}
                                  className={j < review.rating ? "fill-primary-dark text-primary-dark" : "text-border"}
                                />
                              ))}
                            </div>
                            {review.verified && <span className="text-xs text-green-600 font-semibold">Verified</span>}
                          </div>
                        </div>
                        <span className="text-xs text-muted">{review.date}</span>
                      </div>
                      <p className="text-muted text-sm leading-relaxed">{review.text}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24 space-y-4">
                <div>
                  <p className="text-sm text-muted mb-1">From</p>
                  <p className="font-serif text-4xl font-bold text-accent">
                    ${hotel.roomTypes[selectedRoomType].price}
                  </p>
                  <p className="text-sm text-muted">per night</p>
                </div>

                <Link href={`/booking?hotelId=${hotel.id}`} className="btn-primary w-full text-center block">
                  Reserve Now
                </Link>

                <button className="w-full px-4 py-3 border-2 border-accent text-accent rounded-full hover:bg-background transition-colors font-medium">
                  Contact Hotel
                </button>

                <div className="border-t border-border pt-4 space-y-3">
                  <div>
                    <h4 className="font-semibold text-accent mb-2 text-sm">Hotel Info</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-accent-light" />
                        <span className="text-muted">{hotel.destination}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-muted">Rating:</span>
                        <span className="font-semibold text-accent">{hotel.rating}/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
