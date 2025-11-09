"use client"

import type React from "react"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setEmail("")
  }

  return (
    <section className="section-padding bg-primary">
      <div className="container-max max-w-2xl">
        <div className="text-center">
          <h2 className="heading-medium text-accent mb-4">Travel Inspiration</h2>
          <p className="text-accent mb-8">
            Subscribe to our newsletter for exclusive deals, travel tips, and destination guides
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full border-2 border-accent-light focus:outline-none focus:border-accent"
              required
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>

          <p className="text-sm text-accent-light mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
