"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <main>
      <section className="section-padding bg-accent">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Contact Us</h1>
          <p className="text-primary-dark text-lg">Get in touch with our travel experts</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <Phone className="w-12 h-12 text-accent-light mx-auto mb-4" />
              <h3 className="font-serif text-lg font-bold text-accent mb-2">Phone</h3>
              <p className="text-muted">+254 (0) 123 456 789</p>
            </Card>

            <Card className="p-6 text-center">
              <Mail className="w-12 h-12 text-accent-light mx-auto mb-4" />
              <h3 className="font-serif text-lg font-bold text-accent mb-2">Email</h3>
              <p className="text-muted">info@risevale.com</p>
            </Card>

            <Card className="p-6 text-center">
              <MessageCircle className="w-12 h-12 text-accent-light mx-auto mb-4" />
              <h3 className="font-serif text-lg font-bold text-accent mb-2">WhatsApp</h3>
              <p className="text-muted">Message us anytime</p>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <h2 className="font-serif text-2xl font-bold text-accent mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-accent mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-accent mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-accent mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-accent mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent resize-none"
                    required
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
