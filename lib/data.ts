interface TourDay {
  day: number
  title: string
  description: string
  activities: Activity[]
  hotel?: Hotel
  meals?: string[]
}

interface Activity {
  id: string
  title: string
  type: "included" | "optional"
  description: string
  image?: string
}

interface Hotel {
  name: string
  image: string
  rating: number
  included: boolean
}

interface Tour {
  id: string
  title: string
  destination: string
  duration: string
  price: number
  rating: number
  reviews: number
  image: string
  overview: string
  highlights: string[]
  inclusions: string[]
  exclusions: string[]
  hotels: Hotel[]
  itinerary: TourDay[]
}

export const TOUR_DETAILS: Record<string, Tour> = {
  "1": {
    id: "1",
    title: "Kenya Safari Adventure",
    destination: "Kenya",
    duration: "7 Days / 6 Nights",
    price: 2499,
    rating: 4.8,
    reviews: 128,
    image: "url(/placeholder.svg?height=600&width=1200&query=Kenyan safari with lions and elephants)",
    overview:
      "Embark on an unforgettable journey through Kenya's most iconic wildlife reserves. This carefully curated safari experience combines luxury accommodations with intimate wildlife encounters, guided by our expert naturalists.",
    highlights: [
      "Big Five wildlife sightings",
      "Serengeti migration season",
      "Luxury lodge accommodations",
      "Expert naturalist guides",
      "Cultural village visits",
    ],
    inclusions: [
      "All meals and beverages",
      "All game drives and activities",
      "Airport transfers",
      "Accommodation in luxury lodges",
      "Park entrance fees",
    ],
    exclusions: ["International flights", "Travel insurance", "Personal expenses", "Tips and gratuities"],
    hotels: [
      {
        name: "Serena Safari Lodge",
        rating: 5,
        image: "url(/placeholder.svg?height=300&width=400&query=luxury safari lodge)",
        included: true,
      },
      {
        name: "Four Seasons Safari Lodge",
        rating: 5,
        image: "url(/placeholder.svg?height=300&width=400&query=four seasons lodge)",
        included: false,
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        description:
          "Welcome to Kenya! Arrive in Nairobi and transfer to your luxury lodge for check-in and orientation.",
        meals: ["Dinner"],
        activities: [
          {
            id: "a1",
            title: "Nairobi City Tour",
            type: "optional",
            description: "Visit the Giraffe Centre and Karen Blixen Museum",
            image: "url(/placeholder.svg?height=200&width=300&query=Nairobi skyline)",
          },
        ],
        hotel: {
          name: "Serena Nairobi Hotel",
          rating: 5,
          image: "url(/placeholder.svg?height=300&width=400&query=luxury hotel)",
          included: true,
        },
      },
      {
        day: 2,
        title: "Masai Mara Game Drive",
        description:
          "Full day dedicated to exploring the Masai Mara, home to the Big Five and incredible wildlife diversity.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            id: "a2",
            title: "Morning Game Drive",
            type: "included",
            description: "Spot lions, leopards, cheetahs, and more",
            image: "url(/placeholder.svg?height=200&width=300&query=African lions)",
          },
          {
            id: "a3",
            title: "Afternoon Game Drive",
            type: "included",
            description: "Continue your wildlife adventure with expert guides",
            image: "url(/placeholder.svg?height=200&width=300&query=African safari animals)",
          },
          {
            id: "a4",
            title: "Sunset Photography",
            type: "optional",
            description: "Capture the golden hour with professional photography guide",
            image: "url(/placeholder.svg?height=200&width=300&query=African sunset)",
          },
        ],
        hotel: {
          name: "Serena Mara Lodge",
          rating: 5,
          image: "url(/placeholder.svg?height=300&width=400&query=safari lodge)",
          included: true,
        },
      },
      {
        day: 3,
        title: "Masai Cultural Experience",
        description: "Visit a traditional Masai village and learn about their rich culture and way of life.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            id: "a5",
            title: "Masai Village Tour",
            type: "included",
            description: "Meet Masai warriors and learn about their traditions",
            image: "url(/placeholder.svg?height=200&width=300&query=Masai village)",
          },
          {
            id: "a6",
            title: "Traditional Crafts Workshop",
            type: "included",
            description: "Learn traditional beadwork from skilled artisans",
            image: "url(/placeholder.svg?height=200&width=300&query=African beadwork)",
          },
          {
            id: "a7",
            title: "Cultural Dinner Experience",
            type: "optional",
            description: "Enjoy authentic Masai cuisine and traditional dances",
            image: "url(/placeholder.svg?height=200&width=300&query=African dinner)",
          },
        ],
        hotel: {
          name: "Serena Mara Lodge",
          rating: 5,
          image: "url(/placeholder.svg?height=300&width=400&query=safari lodge)",
          included: true,
        },
      },
      {
        day: 4,
        title: "Amboseli National Park",
        description: "Travel to Amboseli for views of Mount Kilimanjaro and encounters with African elephants.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            id: "a8",
            title: "Kilimanjaro Views",
            type: "included",
            description: "Photograph Africa's highest peak from Amboseli",
            image: "url(/placeholder.svg?height=200&width=300&query=Mount Kilimanjaro)",
          },
          {
            id: "a9",
            title: "Elephant Encounter",
            type: "included",
            description: "See herds of elephants in their natural habitat",
            image: "url(/placeholder.svg?height=200&width=300&query=African elephants)",
          },
        ],
        hotel: {
          name: "Amboseli Serena Safari Lodge",
          rating: 5,
          image: "url(/placeholder.svg?height=300&width=400&query=safari lodge)",
          included: true,
        },
      },
      {
        day: 5,
        title: "Lake Naivasha",
        description: "Relax at the scenic Lake Naivasha, known for its hippos and bird watching opportunities.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            id: "a10",
            title: "Lake Cruise",
            type: "included",
            description: "Spot hippos and water birds on a guided boat cruise",
            image: "url(/placeholder.svg?height=200&width=300&query=Lake Naivasha)",
          },
          {
            id: "a11",
            title: "Crescent Island Walking Safari",
            type: "optional",
            description: "Walk among zebras, giraffes, and wildebeest",
            image: "url(/placeholder.svg?height=200&width=300&query=walking safari)",
          },
        ],
        hotel: {
          name: "Lake Naivasha Serena",
          rating: 5,
          image: "url(/placeholder.svg?height=300&width=400&query=lakeside resort)",
          included: true,
        },
      },
      {
        day: 6,
        title: "Lake Nakuru National Park",
        description: "Visit Lake Nakuru, famous for its flamingos and diverse wildlife.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            id: "a12",
            title: "Flamingo Viewing",
            type: "included",
            description: "See thousands of pink flamingos at Lake Nakuru",
            image: "url(/placeholder.svg?height=200&width=300&query=pink flamingos)",
          },
          {
            id: "a13",
            title: "Rhino Sanctuary Visit",
            type: "included",
            description: "Visit the black rhino sanctuary and conservation center",
            image: "url(/placeholder.svg?height=200&width=300&query=African rhino)",
          },
        ],
        hotel: {
          name: "Lake Nakuru Serena",
          rating: 5,
          image: "url(/placeholder.svg?height=300&width=400&query=luxury lodge)",
          included: true,
        },
      },
      {
        day: 7,
        title: "Return to Nairobi",
        description: "Depart for Nairobi with final shopping at local markets before your international flight.",
        meals: ["Breakfast"],
        activities: [
          {
            id: "a14",
            title: "Nairobi Market Tour",
            type: "optional",
            description: "Shop for souvenirs at local craft markets",
            image: "url(/placeholder.svg?height=200&width=300&query=African market)",
          },
        ],
      },
    ],
  },
  "2": {
    id: "2",
    title: "Cape Town Coastal Escape",
    destination: "South Africa",
    duration: "5 Days / 4 Nights",
    price: 1899,
    rating: 4.9,
    reviews: 95,
    image: "url(/placeholder.svg?height=600&width=1200&query=Cape Town Table Mountain)",
    overview:
      "Experience the stunning beauty of Cape Town, where mountains meet the sea. This luxurious coastal escape combines world-class accommodations with breathtaking natural landscapes and vibrant culture.",
    highlights: [
      "Table Mountain cable car",
      "Cape Point scenic views",
      "Wine country tours",
      "Beach relaxation",
      "Local culture experience",
    ],
    inclusions: ["All meals", "Hotel accommodation", "Transportation", "Activities and tours", "Guide services"],
    exclusions: ["International flights", "Travel insurance", "Personal expenses"],
    hotels: [
      {
        name: "Twelve Apostles Hotel",
        rating: 5,
        image: "url(/placeholder.svg?height=300&width=400&query=luxury cape town hotel)",
        included: true,
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cape Town",
        description: "Welcome to Cape Town! Transfer to your luxury hotel and settle in.",
        meals: ["Dinner"],
        activities: [
          {
            id: "a1",
            title: "Waterfront Exploration",
            type: "optional",
            description: "Visit the iconic V&A Waterfront",
          },
        ],
      },
      {
        day: 2,
        title: "Table Mountain Experience",
        description: "Explore Table Mountain with panoramic views of the city and ocean.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            id: "a2",
            title: "Table Mountain Cable Car",
            type: "included",
            description: "Ride the rotating cable car to the summit",
          },
        ],
      },
      {
        day: 3,
        title: "Cape Point & Scenic Drives",
        description: "Visit the dramatic Cape Point and explore scenic coastal routes.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            id: "a3",
            title: "Cape Point Tour",
            type: "included",
            description: "See where two oceans meet",
          },
        ],
      },
      {
        day: 4,
        title: "Wine Country",
        description: "Discover South Africa's world-famous wine regions.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            id: "a4",
            title: "Wine Tasting Tour",
            type: "included",
            description: "Visit premium wine estates",
          },
        ],
      },
      {
        day: 5,
        title: "Departure",
        description: "Depart Cape Town with unforgettable memories.",
        meals: ["Breakfast"],
        activities: [
          {
            id: "a5",
            title: "Last-minute shopping",
            type: "optional",
            description: "Browse local markets",
          },
        ],
      },
    ],
  },
  "3": {
    id: "3",
    title: "Zanzibar Island Paradise",
    destination: "Tanzania",
    duration: "6 Days / 5 Nights",
    price: 1699,
    rating: 4.7,
    reviews: 67,
    image: "url(/placeholder.svg?height=600&width=1200&query=Zanzibar beach)",
    overview:
      "Escape to the exotic Zanzibar islands with pristine beaches, turquoise waters, and rich cultural heritage.",
    highlights: ["Beach relaxation", "Spice tours", "Stone Town exploration", "Water sports", "Island hopping"],
    inclusions: ["All meals", "Beach resort accommodation", "Activities", "Boat tours"],
    exclusions: ["International flights", "Travel insurance"],
    hotels: [
      {
        name: "Zanzibar Paradise Resort",
        rating: 5,
        image: "url(/placeholder.svg?height=300&width=400&query=zanzibar resort)",
        included: true,
      },
    ],
    itinerary: Array(6)
      .fill(null)
      .map((_, i) => ({
        day: i + 1,
        title: `Day ${i + 1}`,
        description: `Enjoy day ${i + 1} of your Zanzibar adventure`,
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            id: `a${i}`,
            title: "Beach Activities",
            type: "included",
            description: "Relax or enjoy water sports",
          },
        ],
      })),
  },
  "4": {
    id: "4",
    title: "Egyptian Wonders Tour",
    destination: "Egypt",
    duration: "8 Days / 7 Nights",
    price: 2299,
    rating: 4.9,
    reviews: 142,
    image: "url(/placeholder.svg?height=600&width=1200&query=Egyptian pyramids)",
    overview: "Explore ancient Egypt's most iconic monuments and experience the magic of the Nile River.",
    highlights: ["Great Pyramids", "Sphinx viewing", "Nile river cruise", "Temple tours", "Ancient history"],
    inclusions: ["Guided tours", "Hotel stays", "Nile cruise", "Meals", "Airport transfers"],
    exclusions: ["International flights", "Visa fees", "Travel insurance"],
    hotels: [
      {
        name: "Nile Hilton Cairo",
        rating: 5,
        image: "url(/placeholder.svg?height=300&width=400&query=luxury cairo hotel)",
        included: true,
      },
    ],
    itinerary: Array(8)
      .fill(null)
      .map((_, i) => ({
        day: i + 1,
        title: `Ancient Egypt Day ${i + 1}`,
        description: `Experience day ${i + 1} of Egyptian wonders`,
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            id: `a${i}`,
            title: "Archaeological Exploration",
            type: "included",
            description: "Discover ancient monuments",
          },
        ],
      })),
  },
  "5": {
    id: "5",
    title: "Kilimanjaro Climbing Adventure",
    destination: "Tanzania",
    duration: "7 Days",
    price: 1999,
    rating: 4.8,
    reviews: 56,
    image: "url(/placeholder.svg?height=600&width=1200&query=Mount Kilimanjaro)",
    overview: "Conquer Africa's highest peak with expert guides and luxury base camps.",
    highlights: ["Summit climb", "Five climate zones", "Stunning views", "Expert guides", "Achievement"],
    inclusions: ["Guide services", "Camp accommodation", "Meals", "Equipment", "Porter services"],
    exclusions: ["International flights", "Travel insurance", "Personal gear"],
    hotels: [
      {
        name: "Kilimanjaro Base Camp",
        rating: 4,
        image: "url(/placeholder.svg?height=300&width=400&query=mountain base camp)",
        included: true,
      },
    ],
    itinerary: Array(7)
      .fill(null)
      .map((_, i) => ({
        day: i + 1,
        title: `Climbing Day ${i + 1}`,
        description: `Ascend to day ${i + 1} of your journey`,
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            id: `a${i}`,
            title: "Mountain Trek",
            type: "included",
            description: "Continue climbing",
          },
        ],
      })),
  },
  "6": {
    id: "6",
    title: "Gorilla Trekking in Uganda",
    destination: "Uganda",
    duration: "5 Days / 4 Nights",
    price: 2199,
    rating: 4.9,
    reviews: 78,
    image: "url(/placeholder.svg?height=600&width=1200&query=Mountain gorillas)",
    overview: "Experience an intimate encounter with mountain gorillas in their natural habitat.",
    highlights: [
      "Gorilla trekking",
      "Mountain forests",
      "Cultural visits",
      "Stunning landscapes",
      "Wildlife photography",
    ],
    inclusions: ["Guided hikes", "Accommodation", "Meals", "Park permits", "Transportation"],
    exclusions: ["International flights", "Travel insurance"],
    hotels: [
      {
        name: "Bwindi Luxury Lodge",
        rating: 5,
        image: "url(/placeholder.svg?height=300&width=400&query=gorilla lodge uganda)",
        included: true,
      },
    ],
    itinerary: Array(5)
      .fill(null)
      .map((_, i) => ({
        day: i + 1,
        title: `Uganda Adventure Day ${i + 1}`,
        description: `Explore day ${i + 1} of gorilla country`,
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            id: `a${i}`,
            title: "Wildlife Exploration",
            type: "included",
            description: "Trek through pristine forests",
          },
        ],
      })),
  },
}
