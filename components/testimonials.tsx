import { Card } from "@/components/ui/card"

const TESTIMONIALS = [
  {
    name: "Sarah Anderson",
    location: "London, UK",
    rating: 5,
    text: "An absolutely incredible experience! Risevale's attention to detail and local expertise made our Kenya safari unforgettable.",
  },
  {
    name: "James Mitchell",
    location: "New York, USA",
    rating: 5,
    text: "From booking to return, everything was seamless. The guides were knowledgeable and the accommodations were luxurious.",
  },
  {
    name: "Emma Thompson",
    location: "Sydney, Australia",
    rating: 5,
    text: "Best honeymoon ever! Risevale created the perfect romantic getaway in Zanzibar. Highly recommended!",
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <h2 className="heading-medium mb-4">Client Testimonials</h2>
        <p className="text-muted mb-12 max-w-2xl">Hear from travelers who have experienced the Risevale difference</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary-dark text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-serif font-bold text-accent">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
