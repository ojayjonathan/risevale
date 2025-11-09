"use client"
import { useParams } from "next/navigation"
import HotelDetailsClient from "./hotelDetailsClient"

const HOTEL_DETAILS: Record<string, any> = {
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


export default function HotelDetailsPage() {
  const {id} = useParams<{id:string}>()
  const hotel = HOTEL_DETAILS[id]
  return <HotelDetailsClient hotel={hotel} />
}
