import Link from "next/link"
import { Card } from "@/components/ui/card"

const FEATURED_TOURS = [
  {
    id: 1,
    title: "Kenya Safari Adventure",
    destination: "Kenya",
    duration: "7 Days / 6 Nights",
    price: "From $2,499",
    image: "/safari-adventure-group-travelers.jpg",
    rating: 4.8,
    reviews: 128,
  },
  {
    id: 2,
    title: "Cape Town Coastal Escape",
    destination: "South Africa",
    duration: "5 Days / 4 Nights",
    price: "From $1,899",
    image: "/wildlife-photography-safari.png",
    rating: 4.9,
    reviews: 95,
  },
  {
    id: 3,
    title: "Zanzibar Island Paradise",
    destination: "Tanzania",
    duration: "6 Days / 5 Nights",
    price: "From $1,699",
    image: "/maasai-warriors-traditional.jpg",
    rating: 4.7,
    reviews: 67,
  },
  {
    id: 4,
    title: "Egyptian Wonders Tour",
    destination: "Egypt",
    duration: "8 Days / 7 Nights",
    price: "From $2,299",
    image: "/luxury-safari-lodge-tanzania.jpg",
    rating: 4.9,
    reviews: 142,
  },
]

export default function FeaturedTours() {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <h2 className="heading-medium mb-4">Featured Tours</h2>
        <p className="text-muted mb-12 max-w-2xl">
          Handpicked luxury experiences designed to create unforgettable memories
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_TOURS.map((tour) => (
            <Link key={tour.id} href={`/tours/${tour.id}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${tour.image}')` }} />
                <div className="p-4 flex-1 flex flex-col">
                  <p className="text-sm text-accent-light font-semibold">{tour.destination}</p>
                  <h3 className="font-serif text-lg font-bold text-accent mb-2">{tour.title}</h3>
                  <p className="text-sm text-muted mb-4">{tour.duration}</p>

                  <div className="flex items-center gap-1 mb-4 mt-auto">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-primary-dark">
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-muted ml-2">({tour.reviews})</span>
                  </div>

                  <p className="font-serif font-bold text-accent text-lg">{tour.price}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/tours" className="btn-primary">
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  )
}
