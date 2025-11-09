import Link from "next/link"
import { Card } from "@/components/ui/card"

const DESTINATIONS = [
  {
    id: 1,
    name: "Kenya",
    region: "East Africa",
    tours: 12,
    image: "/kenyan-landscape-sunset.jpg",
  },
  {
    id: 2,
    name: "Tanzania",
    region: "East Africa",
    tours: 8,
    image: "/luxury-safari-lodge-tanzania.jpg",
  },
  {
    id: 3,
    name: "South Africa",
    region: "Southern Africa",
    tours: 10,
    image: "/wildlife-photography-safari.png",
  },
  {
    id: 4,
    name: "Uganda",
    region: "East Africa",
    tours: 6,
    image: "/maasai-warriors-traditional.jpg",
  },
]

export default function DestinationsPreview() {
  return (
    <section className="section-padding bg-accent">
      <div className="container-max">
        <h2 className="heading-medium text-white mb-4">Popular Destinations</h2>
        <p className="text-primary mb-12 max-w-2xl">Explore our hand-selected destinations across Africa and beyond</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <Link key={dest.id} href={`/destinations/${dest.id}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group">
                <div
                  className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform"
                  style={{ backgroundImage: `url('${dest.image}')` }}
                >
                  <div className="h-full bg-black/30 flex flex-col justify-end p-4">
                    <h3 className="font-serif text-3xl font-bold text-white">{dest.name}</h3>
                    <p className="text-primary-dark text-sm">{dest.region}</p>
                    <p className="text-primary text-sm mt-2">{dest.tours} tours available</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/destinations"
            className="px-6 py-3 bg-white text-accent rounded-full hover:bg-primary transition-colors font-medium"
          >
            Explore All Destinations
          </Link>
        </div>
      </div>
    </section>
  )
}
