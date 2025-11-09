"use client"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowLeft, MapPin, Calendar } from "lucide-react"
import { useParams } from "next/navigation"

const DESTINATIONS_DATA = [
  {
    id: 1,
    name: "Kenya",
    region: "East Africa",
    image: "/kenyan-landscape-sunset.jpg",
    description:
      "Kenya is home to some of Africa's most iconic wildlife and landscapes. From the Maasai Mara to Mount Kenya, experience the heart of African adventure.",
    highlights: [
      "Maasai Mara National Reserve",
      "Mount Kenya hiking",
      "Lake Nakuru birdwatching",
      "Amboseli National Park",
      "Nairobi cultural tours",
    ],
    bestTime: "July to October (dry season), January to February",
    visitorInfo: {
      climate: "Tropical to subtropical, average 20-28°C",
      language: "English and Swahili",
      currency: "Kenyan Shilling (KES)",
    },
    tours: [
      { id: 1, title: "Kenya Safari Adventure", duration: "7 Days", price: "$2,499" },
      { id: 5, title: "Kilimanjaro Climbing", duration: "7 Days", price: "$1,999" },
    ],
  },
  {
    id: 2,
    name: "Tanzania",
    region: "East Africa",
    image: "/luxury-safari-lodge-tanzania.jpg",
    description:
      "Tanzania offers pristine wildlife experiences including the famous Serengeti, Mount Kilimanjaro, and the beautiful Zanzibar islands.",
    highlights: [
      "Serengeti National Park",
      "Mount Kilimanjaro",
      "Zanzibar beaches",
      "Crater conservation area",
      "Lake Tanganyika",
    ],
    bestTime: "June to October (dry season), December to February",
    visitorInfo: {
      climate: "Tropical to temperate, average 18-30°C",
      language: "English and Swahili",
      currency: "Tanzanian Shilling (TZS)",
    },
    tours: [
      { id: 3, title: "Zanzibar Island Paradise", duration: "6 Days", price: "$1,699" },
      { id: 5, title: "Kilimanjaro Adventure", duration: "7 Days", price: "$1,999" },
    ],
  },
  {
    id: 3,
    name: "South Africa",
    region: "Southern Africa",
    image: "/wildlife-photography-safari.png",
    description:
      "South Africa combines world-class wildlife viewing with vibrant cities, stunning coastlines, and world-renowned wine regions.",
    highlights: [
      "Cape Town and Table Mountain",
      "Kruger National Park",
      "Garden Route",
      "Winelands",
      "Great White Shark watching",
    ],
    bestTime: "November to March (summer)",
    visitorInfo: {
      climate: "Mediterranean, average 15-25°C",
      language: "English and Afrikaans",
      currency: "South African Rand (ZAR)",
    },
    tours: [{ id: 2, title: "Cape Town Coastal Escape", duration: "5 Days", price: "$1,899" }],
  },
  {
    id: 4,
    name: "Uganda",
    region: "East Africa",
    image: "/maasai-warriors-traditional.jpg",
    description:
      "Uganda is known as the Pearl of Africa, offering incredible gorilla trekking, lush landscapes, and authentic cultural experiences.",
    highlights: [
      "Mountain gorilla trekking",
      "Queen Elizabeth National Park",
      "Bwindi Impenetrable Forest",
      "Rwenzori Mountains",
      "Kazinga Channel",
    ],
    bestTime: "June to August, December to February",
    visitorInfo: {
      climate: "Tropical, average 15-25°C",
      language: "English and Luganda",
      currency: "Ugandan Shilling (UGX)",
    },
    tours: [{ id: 6, title: "Gorilla Trekking in Uganda", duration: "5 Days", price: "$2,199" }],
  },
  {
    id: 5,
    name: "Botswana",
    region: "Southern Africa",
    image: "/african-wildlife-conservation.png",
    description:
      "Botswana offers pristine wilderness areas including the famous Okavango Delta, perfect for safari enthusiasts seeking authentic African experiences.",
    highlights: [
      "Okavango Delta",
      "Chobe National Park",
      "Kalahari Desert",
      "Moremi Game Reserve",
      "Makgadikgadi Pans",
    ],
    bestTime: "May to September (dry season)",
    visitorInfo: {
      climate: "Semi-arid, average 10-30°C",
      language: "English and Setswana",
      currency: "Botswana Pula (BWP)",
    },
    tours: [],
  },
  {
    id: 6,
    name: "Rwanda",
    region: "East Africa",
    image: "/safari-adventure-group-travelers.jpg",
    description:
      "Rwanda, the land of a thousand hills, offers unique gorilla trekking experiences and remarkable recovery from its past.",
    highlights: [
      "Mountain gorilla trekking",
      "Volcanoes National Park",
      "Lake Kivu",
      "Kigali Genocide Memorial",
      "Tea plantations",
    ],
    bestTime: "June to September, January to February",
    visitorInfo: {
      climate: "Tropical, average 15-27°C",
      language: "English, French, and Kinyarwanda",
      currency: "Rwandan Franc (RWF)",
    },
    tours: [],
  },
]



export default function DestinationDetail() {
  const {id} = useParams<{id:string}>()
  const destination = DESTINATIONS_DATA.find((d) => d.id === Number.parseInt(id))

  if (!destination) {
    return (
      <main className="min-h-screen bg-background">
        <section className="section-padding">
          <div className="container-max">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-accent mb-8 hover:text-accent-dark"
            >
              <ArrowLeft size={20} />
              Back to Destinations
            </Link>
            <h1 className="text-4xl font-serif font-bold text-accent">Destination Not Found</h1>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-96 flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${destination.image}')` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container-max pb-8">
          <Link href="/destinations" className="inline-flex items-center gap-2 text-white mb-4 hover:text-primary">
            <ArrowLeft size={20} />
            Back to Destinations
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">{destination.name}</h1>
          <p className="text-xl text-primary mt-2">{destination.region}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-12">
                <h2 className="heading-medium mb-4">About {destination.name}</h2>
                <p className="text-lg text-muted leading-relaxed">{destination.description}</p>
              </div>

              {/* Highlights */}
              <div className="mb-12">
                <h2 className="heading-medium mb-6">Top Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <MapPin className="text-accent mt-1 flex-shrink-0" size={20} />
                      <p className="text-muted">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Time to Visit */}
              <div className="mb-12">
                <h2 className="heading-medium mb-4">Best Time to Visit</h2>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="text-accent" size={20} />
                    <p className="text-muted">{destination.bestTime}</p>
                  </div>
                </div>
              </div>

              {/* Tours Available */}
              {destination.tours.length > 0 && (
                <div>
                  <h2 className="heading-medium mb-6">Tours in {destination.name}</h2>
                  <div className="grid gap-4">
                    {destination.tours.map((tour) => (
                      <Link key={tour.id} href={`/tours/${tour.id}`}>
                        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-serif text-xl font-bold text-accent mb-2">{tour.title}</h3>
                              <p className="text-muted">{tour.duration}</p>
                            </div>
                            <p className="font-serif font-bold text-accent text-lg">{tour.price}</p>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <Card className="p-6 sticky top-24">
                <h3 className="font-serif text-xl font-bold text-accent mb-6">Visitor Information</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Climate</h4>
                    <p className="text-muted text-sm">{destination.visitorInfo.climate}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-accent mb-2">Languages</h4>
                    <p className="text-muted text-sm">{destination.visitorInfo.language}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-accent mb-2">Currency</h4>
                    <p className="text-muted text-sm">{destination.visitorInfo.currency}</p>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <Link href="/contact" className="btn-primary w-full text-center">
                      Plan Your Trip
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* More Destinations */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <h2 className="heading-medium mb-8">Explore Other Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS_DATA.filter((d) => d.id !== destination.id)
              .slice(0, 4)
              .map((dest) => (
                <Link key={dest.id} href={`/destinations/${dest.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                    <div
                      className="h-40 bg-cover bg-center group-hover:scale-105 transition-transform"
                      style={{ backgroundImage: `url('${dest.image}')` }}
                    />
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-bold text-accent">{dest.name}</h3>
                      <p className="text-sm text-muted">{dest.region}</p>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
