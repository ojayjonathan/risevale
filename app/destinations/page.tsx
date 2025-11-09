import Link from "next/link"
import { Card } from "@/components/ui/card"

const ALL_DESTINATIONS = [
  {
    id: 1,
    name: "Kenya",
    region: "East Africa",
    country: "Kenya",
    tours: 12,
    description: "Experience the iconic African safari with diverse wildlife and stunning landscapes.",
    image: "/kenyan-landscape-sunset.jpg",
  },
  {
    id: 2,
    name: "Tanzania",
    region: "East Africa",
    country: "Tanzania",
    tours: 8,
    description: "Discover Mount Kilimanjaro, Serengeti, and pristine Zanzibar beaches.",
    image: "/luxury-safari-lodge-tanzania.jpg",
  },
  {
    id: 3,
    name: "South Africa",
    region: "Southern Africa",
    country: "South Africa",
    tours: 10,
    description: "From Cape Town's beauty to Kruger's wildlife, unforgettable experiences await.",
    image: "/wildlife-photography-safari.png",
  },
  {
    id: 4,
    name: "Uganda",
    region: "East Africa",
    country: "Uganda",
    tours: 6,
    description: "Trek mountain gorillas and explore lush tropical landscapes.",
    image: "/maasai-warriors-traditional.jpg",
  },
  {
    id: 5,
    name: "Botswana",
    region: "Southern Africa",
    country: "Botswana",
    tours: 7,
    description: "Explore the Okavango Delta and pristine wilderness.",
    image: "/african-wildlife-conservation.png",
  },
  {
    id: 6,
    name: "Rwanda",
    region: "East Africa",
    country: "Rwanda",
    tours: 5,
    description: "Visit the land of a thousand hills and mountain gorillas.",
    image: "/safari-adventure-group-travelers.jpg",
  },
]

export default function DestinationsPage() {
  return (
    <main>
      <section className="section-padding bg-accent">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Our Destinations</h1>
          <p className="text-primary-dark text-lg">Explore the world's most extraordinary travel experiences</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_DESTINATIONS.map((dest) => (
              <Link key={dest.id} href={`/destinations/${dest.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group">
                  <div
                    className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform"
                    style={{ backgroundImage: `url('${dest.image}')` }}
                  />
                  <div className="p-6">
                    <p className="text-sm font-semibold text-accent-light mb-2">{dest.region}</p>
                    <h3 className="font-serif text-2xl font-bold text-accent mb-2">{dest.name}</h3>
                    <p className="text-muted text-sm mb-4">{dest.description}</p>
                    <p className="text-accent font-semibold">{dest.tours} tours available</p>
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
