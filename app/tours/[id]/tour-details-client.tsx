"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Clock, Users, Star, Heart } from "lucide-react"

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

interface TourDetailsClientProps {
  tour: Tour
}

export function TourDetailsClient({ tour }: TourDetailsClientProps) {
  const [favorited, setFavorited] = useState(false)

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: tour.image }} />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex items-end justify-between p-6 md:p-12 container-max">
          <div>
            <p className="text-primary-dark text-lg">{tour.destination}</p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">{tour.title}</h1>
          </div>
          <button
            onClick={() => setFavorited(!favorited)}
            className="p-3 bg-white rounded-full hover:bg-primary transition-colors"
          >
            <Heart size={24} className={favorited ? "fill-accent text-accent" : "text-accent"} />
          </button>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Key Info */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4 text-center">
                  <Clock className="w-6 h-6 text-accent-light mx-auto mb-2" />
                  <p className="text-sm text-muted">{tour.duration}</p>
                </Card>
                <Card className="p-4 text-center">
                  <Users className="w-6 h-6 text-accent-light mx-auto mb-2" />
                  <p className="text-sm text-muted">Group Tours</p>
                </Card>
                <Card className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="w-6 h-6 fill-primary-dark text-primary-dark" />
                    <span className="font-bold text-accent">{tour.rating}</span>
                  </div>
                  <p className="text-sm text-muted">({tour.reviews})</p>
                </Card>
              </div>

              {/* Overview */}
              <div>
                <h2 className="heading-medium mb-4">Tour Overview</h2>
                <p className="text-muted leading-relaxed mb-4">{tour.overview}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-serif font-bold text-accent mb-3">Highlights</h3>
                    <ul className="space-y-2">
                      {tour.highlights.map((highlight: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-muted">
                          <span className="text-primary-dark mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Daily Itinerary */}
              <div>
                <h2 className="heading-medium mb-6">Daily Itinerary</h2>
                {/* Timeline layout */}
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent-light" />

                  {/* Timeline items */}
                  <div className="space-y-6">
                    {tour.itinerary.map((dayItem: TourDay) => (
                      <div key={dayItem.day} className="relative pl-20">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-white">
                          {dayItem.day}
                        </div>

                        {/* Content card */}
                        <Card className="p-6 space-y-4">
                          <div>
                            <h3 className="font-serif font-bold text-lg text-accent">{dayItem.title}</h3>
                            <p className="text-muted mt-1">{dayItem.description}</p>
                          </div>

                          {/* Activities */}
                          {dayItem.activities && dayItem.activities.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-accent mb-3 text-sm">Activities</h4>
                              <div className="space-y-2">
                                {dayItem.activities.map((activity: Activity) => (
                                  <div
                                    key={activity.id}
                                    className="flex items-start gap-3 p-2 rounded hover:bg-background transition-colors"
                                  >
                                    <span
                                      className={`px-2 py-1 rounded text-xs font-semibold flex-shrink-0 ${
                                        activity.type === "included" ? "bg-accent text-white" : "bg-primary text-accent"
                                      }`}
                                    >
                                      {activity.type === "included" ? "✓" : "◇"}
                                    </span>
                                    <div>
                                      <h5 className="font-semibold text-accent text-sm">{activity.title}</h5>
                                      <p className="text-xs text-muted">{activity.description}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Meals */}
                          {dayItem.meals && dayItem.meals.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-accent mb-2 text-sm">Meals</h4>
                              <div className="flex gap-2 flex-wrap">
                                {dayItem.meals.map((meal: string) => (
                                  <span key={meal} className="px-3 py-1 bg-primary text-accent rounded-full text-xs">
                                    {meal}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Accommodation */}
                          {dayItem.hotel && (
                            <div className="pt-3 border-t border-border">
                              <h4 className="font-semibold text-accent mb-3 text-sm">Stay</h4>
                              <div className="bg-background p-3 rounded-lg flex gap-3">
                                <div
                                  className="w-16 h-16 rounded-lg bg-cover bg-center flex-shrink-0"
                                  style={{ backgroundImage: `url(${dayItem.hotel.image})` }}
                                />
                                <div className="flex-1">
                                  <h5 className="font-semibold text-accent text-sm">{dayItem.hotel.name}</h5>
                                  <div className="flex gap-0.5 text-xs">
                                    {[...Array(dayItem.hotel.rating)].map((_, i) => (
                                      <Star key={i} size={12} className="fill-primary-dark text-primary-dark" />
                                    ))}
                                  </div>
                                  {dayItem.hotel.included && (
                                    <p className="text-xs text-accent-light font-semibold mt-1">Included</p>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-serif font-bold text-lg text-accent mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    {tour.inclusions.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-muted">
                        <span className="text-accent-light mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-accent mb-4">What's Not Included</h3>
                  <ul className="space-y-2">
                    {tour.exclusions.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-muted">
                        <span className="text-accent-light mt-1">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24 space-y-4">
                <div>
                  <p className="text-sm text-muted mb-1">Starting from</p>
                  <p className="font-serif text-4xl font-bold text-accent">${tour.price}</p>
                  <p className="text-sm text-muted">per person</p>
                </div>

                <button className="btn-primary w-full">Book Now</button>

                <button className="w-full px-4 py-3 border-2 border-accent text-accent rounded-full hover:bg-background transition-colors font-medium">
                  Customize Tour
                </button>

                <div className="border-t border-border pt-4">
                  <h4 className="font-serif font-bold text-accent mb-3">Recommended Hotels</h4>
                  <div className="space-y-3">
                    {tour.hotels.map((hotel: Hotel, i: number) => (
                      <div key={i} className="p-3 bg-background rounded-lg">
                        <div className="flex gap-3">
                          <div
                            className="w-16 h-16 rounded-lg bg-cover bg-center flex-shrink-0"
                            style={{ backgroundImage: hotel.image }}
                          />
                          <div className="flex-1">
                            <h5 className="text-sm font-semibold text-accent">{hotel.name}</h5>
                            <div className="flex gap-1 text-xs mt-1">
                              {[...Array(hotel.rating)].map((_, i) => (
                                <Star key={i} size={12} className="fill-primary-dark text-primary-dark" />
                              ))}
                            </div>
                            <p className="text-xs text-accent-light font-semibold mt-1">
                              {hotel.included ? "Included" : "Optional upgrade"}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted text-center">
                    Questions? Contact our travel experts via WhatsApp or call +254 (0) 123 456 789
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
