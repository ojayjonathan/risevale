"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card } from "@/components/ui/card"
import { ChevronRight, CheckCircle } from "lucide-react"

const HOTELS_DATA = {
  1: {
    name: "Serena Safari Lodge",
    pricePerNight: 450,
    image: "url(/placeholder.svg?height=200&width=300&query=safari lodge)",
    location: "Masai Mara",
  },
  2: {
    name: "Four Seasons Safari Lodge",
    pricePerNight: 650,
    image: "url(/placeholder.svg?height=200&width=300&query=luxury lodge)",
    location: "Masai Mara",
  },
  3: {
    name: "Lake Naivasha Serena",
    pricePerNight: 380,
    image: "url(/placeholder.svg?height=200&width=300&query=lakeside resort)",
    location: "Lake Naivasha",
  },
  4: {
    name: "Lake Nakuru Serena",
    pricePerNight: 320,
    image: "url(/placeholder.svg?height=200&width=300&query=lake resort)",
    location: "Lake Nakuru",
  },
  5: {
    name: "Amboseli Serena Safari Lodge",
    pricePerNight: 420,
    image: "url(/placeholder.svg?height=200&width=300&query=kilimanjaro lodge)",
    location: "Amboseli",
  },
  6: {
    name: "Serena Mara Lodge",
    pricePerNight: 400,
    image: "url(/placeholder.svg?height=200&width=300&query=safari lodge tents)",
    location: "Masai Mara",
  },
}

const TOURS_DATA = [
  { id: 1, title: "Kenya Safari Adventure", price: 2499 },
  { id: 2, title: "Cape Town Coastal Escape", price: 1899 },
  { id: 3, title: "Zanzibar Island Paradise", price: 1699 },
  { id: 4, title: "Egyptian Wonders Tour", price: 2299 },
]

export default function BookingPage() {
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedHotel, setSelectedHotel] = useState(searchParams.get("hotelId") || "1")
  const [selectedTour, setSelectedTour] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(1)
  const [rooms, setRooms] = useState(1)
  const [guestName, setGuestName] = useState("")
  const [guestEmail, setGuestEmail] = useState("")
  const [guestPhone, setGuestPhone] = useState("")

  const hotel = HOTELS_DATA[selectedHotel as keyof typeof HOTELS_DATA] || HOTELS_DATA[1]
  const tour = TOURS_DATA.find((t) => t.id === Number(selectedTour))

  // Calculate nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  }

  const nights = calculateNights()
  const hotelTotal = nights * hotel.pricePerNight * rooms
  const tourTotal = selectedTour ? TOURS_DATA.find((t) => t.id === Number(selectedTour))?.price || 0 : 0
  const subtotal = hotelTotal + tourTotal
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Complete Your Booking</h1>
          <p className="text-primary-dark text-lg">Secure your dream African adventure</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              {/* Step Indicator */}
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-border">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentStep(step)}
                      className={`w-10 h-10 rounded-full font-semibold transition-colors ${
                        currentStep === step
                          ? "bg-accent text-white"
                          : currentStep > step
                            ? "bg-primary text-accent"
                            : "bg-background border-2 border-border text-accent"
                      }`}
                    >
                      {currentStep > step ? <CheckCircle size={20} /> : step}
                    </button>
                    {step < 4 && <ChevronRight className="text-border" size={20} />}
                  </div>
                ))}
              </div>

              {/* Step 1: Tour Selection */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="heading-medium mb-4">Select Your Tour</h2>
                    <p className="text-muted mb-4">Choose a tour package to pair with your hotel accommodation</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {TOURS_DATA.map((t) => (
                      <Card
                        key={t.id}
                        onClick={() => setSelectedTour(String(t.id))}
                        className={`p-4 cursor-pointer transition-all border-2 ${
                          selectedTour === String(t.id)
                            ? "border-accent bg-primary"
                            : "border-border hover:border-accent"
                        }`}
                      >
                        <p className="font-serif font-bold text-accent mb-2">{t.title}</p>
                        <p className="text-lg font-bold text-accent">${t.price}</p>
                      </Card>
                    ))}
                  </div>

                  <button onClick={() => setCurrentStep(2)} className="btn-primary mt-6">
                    Continue to Hotel Selection
                  </button>
                </div>
              )}

              {/* Step 2: Hotel Selection */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="heading-medium mb-4">Select Your Hotel</h2>
                    <p className="text-muted mb-4">Choose your accommodation for your stay</p>
                  </div>

                  <Card className="p-4 border-2 border-accent bg-primary">
                    <div className="flex gap-4">
                      <div
                        className="w-24 h-24 rounded-lg bg-cover bg-center flex-shrink-0"
                        style={{ backgroundImage: hotel.image }}
                      />
                      <div className="flex-1">
                        <p className="text-sm text-accent-light mb-1">{hotel.location}</p>
                        <h3 className="font-serif font-bold text-accent mb-2">{hotel.name}</h3>
                        <p className="font-bold text-lg text-accent">${hotel.pricePerNight}/night</p>
                      </div>
                    </div>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-accent mb-2">Check-in</label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-accent mb-2">Check-out</label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-accent mb-2">Rooms</label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={rooms}
                        onChange={(e) => setRooms(Number(e.target.value))}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-accent"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentStep(3)}
                    disabled={!checkIn || !checkOut}
                    className="btn-primary mt-6 disabled:opacity-50"
                  >
                    Continue to Guest Details
                  </button>
                </div>
              )}

              {/* Step 3: Guest Details */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="heading-medium mb-4">Guest Information</h2>
                    <p className="text-muted mb-4">Please provide your contact details</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-accent mb-2">Full Name</label>
                      <input
                        type="text"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-accent placeholder:text-accent-lighter"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-accent mb-2">Email</label>
                      <input
                        type="email"
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-accent placeholder:text-accent-lighter"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-accent mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        placeholder="+254 123 456 789"
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-accent placeholder:text-accent-lighter"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentStep(4)}
                    disabled={!guestName || !guestEmail || !guestPhone}
                    className="btn-primary mt-6 disabled:opacity-50"
                  >
                    Review & Confirm
                  </button>
                </div>
              )}

              {/* Step 4: Review & Confirm */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="heading-medium mb-4">Review Your Booking</h2>
                  </div>

                  {/* Tour Summary */}
                  {selectedTour && tour && (
                    <Card className="p-4 bg-background border border-border">
                      <h3 className="font-semibold text-accent mb-2">Tour Package</h3>
                      <p className="text-muted mb-2">{tour.title}</p>
                      <p className="font-bold text-accent">${tour.price}</p>
                    </Card>
                  )}

                  {/* Hotel Summary */}
                  <Card className="p-4 bg-background border border-border">
                    <h3 className="font-semibold text-accent mb-3">Hotel Accommodation</h3>
                    <div className="flex gap-3 mb-3">
                      <div
                        className="w-20 h-20 rounded-lg bg-cover bg-center flex-shrink-0"
                        style={{ backgroundImage: hotel.image }}
                      />
                      <div>
                        <p className="text-sm text-accent-light">{hotel.location}</p>
                        <p className="font-semibold text-accent">{hotel.name}</p>
                        <p className="text-sm text-muted mt-1">
                          {rooms} room(s) for {nights} nights
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Guest Summary */}
                  <Card className="p-4 bg-background border border-border">
                    <h3 className="font-semibold text-accent mb-2">Guest Details</h3>
                    <p className="text-sm text-muted">{guestName}</p>
                    <p className="text-sm text-muted">{guestEmail}</p>
                    <p className="text-sm text-muted">{guestPhone}</p>
                  </Card>

                  <button
                    onClick={() => {
                      alert("Booking confirmed! This is a demo. In production, this would process payment.")
                    }}
                    className="btn-primary w-full mt-6"
                  >
                    Confirm & Pay
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar - Price Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24 space-y-4 bg-background border border-border">
                <h3 className="font-serif font-bold text-lg text-accent">Booking Summary</h3>

                {selectedTour && tour && (
                  <div className="pb-4 border-b border-border">
                    <p className="text-sm text-muted mb-1">Tour Package</p>
                    <p className="font-semibold text-accent mb-2">{tour.title}</p>
                    <p className="font-bold text-lg text-accent">${tour.price}</p>
                  </div>
                )}

                {nights > 0 && (
                  <div className="pb-4 border-b border-border">
                    <p className="text-sm text-muted mb-1">Hotel Accommodation</p>
                    <p className="text-sm text-accent mb-2">
                      {hotel.name} × {rooms} room{rooms > 1 ? "s" : ""} × {nights} night{nights > 1 ? "s" : ""}
                    </p>
                    <p className="font-bold text-lg text-accent">${hotelTotal}</p>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex justify-between text-muted">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-muted">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between font-bold text-lg text-accent">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="bg-primary p-3 rounded-lg">
                  <p className="text-xs text-accent">
                    Current step: <span className="font-semibold">{currentStep} of 4</span>
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
